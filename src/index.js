import store from './store.js';
import { bugAdded } from './actions.js';

store.subscribe(() => {
    console.log("store state changed ", store.getState())
})

store.dispatch(bugAdded('bug 1'))
