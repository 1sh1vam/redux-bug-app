import * as actions from './actiontypes';

let id = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    bugId: ++id,
                    description: action.description,
                    resolved: false
                }
            ]

        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.id)

        case actions.BUG_RESOLVED:
            return state.map(bug => {
                if (bug.id === action.id) {
                    return { ...bug, resolved: true }
                }
                return bug
            })

        default:
            return state
    }
}