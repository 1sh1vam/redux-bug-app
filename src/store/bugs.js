import { createAction, createReducer } from "@reduxjs/toolkit";

const bugAdded = createAction('bugAdded');
const bugRemoved = createAction('bugRemoved');
const bugResolved = createAction('bugResolved');

const id = 0;

const reducer = createReducer([], {
    [bugAdded.type]: (bugs, action) => {
        bugs.push({
            bugId: id++,
            description: action.payload.description,
            resolved: false
        });
    },

    [bugRemoved.type]: (bugs, action) => {
        const index = bugs.findIndex(bug => bug.id === action.payload.id)
        bugs.splice(index, 1)
    },

    [bugResolved.type]: (bugs, action) => {
        const index = bugs.findIndex(bug => bug.id === action.payload.id)
        bugs[index].resolved = true;
    }
})

export default reducer