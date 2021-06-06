import * as actions from './actiontypes';

export const bugAdded = description => ({
    TYPE: actions.BUG_ADDED,
    payload: {
        description: 'bug 1'
    }
})