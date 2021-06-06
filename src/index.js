import store from './store.js';
import { bugAdded } from './actions.js';

console.log("hello hmtl")

store.dispatch(bugAdded('bug 1'))

console.log(store.getState)