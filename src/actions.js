import * as actions from './actiontypes.js';

export const bugAdded = description => ({
    type: actions.BUG_ADDED,
    payload: {
        description
    }
})