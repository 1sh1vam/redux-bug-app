import * as actions from './actiontypes.js';

export const bugAdded = description => ({
    TYPE: actions.BUG_ADDED,
    payload: {
        description
    }
})