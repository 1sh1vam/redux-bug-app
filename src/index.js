import store from './store.js';
import { bugAdded, bugRemoved } from './actions.js';

store.subscribe(() => {
    console.log("store state changed ", store.getState())
})

store.dispatch(bugAdded('bug 1'))

store.dispatch(bugRemoved(1))
