import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

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
            const index = bugs.findIndex(bug => bug.id === action.payload.id)
            bugs.splice(index, 1)
        },
    }
})

export const { bugAdded, bugRemoved, bugResolved } = slice.actions

export default slice.reducer