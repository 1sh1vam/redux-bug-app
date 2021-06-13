import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from 'reselect';

let id = 0;
// with seperate createAction and createReducer

// export const bugAdded = createAction('bugAdded');
// export const bugRemoved = createAction('bugRemoved');
// export const bugResolved = createAction('bugResolved');

// const reducer = createReducer([], {
//     [bugAdded.type]: (bugs, action) => {
//         bugs.push({
//             bugId: id++,
//             description: action.payload.description,
//             resolved: false
//         });
//     },
//     [bugRemoved.type]: (bugs, action) => {
//         const index = bugs.findIndex(bug => bug.id === action.payload.id)
//         bugs.splice(index, 1)
//     },

//     [bugResolved.type]: (bugs, action) => {
//         const index = bugs.findIndex(bug => bug.bugId === action.payload.id)
//         bugs[index].resolved = true;
//     }
// })

// *********  Using createSlice ************

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        bugAdded: (bugs, action) => {
            bugs.push({
                bugId: id++,
                description: action.payload.description,
                resolved: false
            });
        },

        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.bugId === action.payload.id)
            bugs[index].resolved = true;
        },

        bugRemoved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.bugId === action.payload.id)
            bugs.splice(index, 1)
        }
    }
})

export const { bugAdded, bugRemoved, bugResolved, assignBug } = slice.actions

export default slice.reducer

// export const getUnresolvedBugs = state => {
//     return state.entities.bugs.filter(bug => !bug.resolved)
// }

// to resolve the expensive call and rerendering we will use memoization.
//  we will use a module called "reselect" to implement memoization.

export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => !bug.resolved)
)

export const getBugsToTeamMember = (member) => {
    return createSelector(
        state => state.entities.bugs,
        state => state.entities.users,
        (bugs, users) => {
            const user = users.filter(user => user.name === member)
            const bugIds = user[0].bugs
            console.log(bugIds)
            const assignedBugs = bugs.filter(bug => {
                if (bugIds.includes(bug.bugId)) {
                    return bug
                }
            })

            return assignedBugs
        }
    )
}