import store from './store.js';
import { bugAdded, bugRemoved, bugResolved } from './actions.js';

const unsubscribe = store.subscribe(() => {
    console.log("store state changed ", store.getState())
})

store.dispatch(bugAdded('bug 1'))
store.dispatch(bugAdded('bug 2'))

unsubscribe()

store.dispatch(bugResolved(1))

store.dispatch(bugRemoved(1))

