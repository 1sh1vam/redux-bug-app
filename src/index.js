import store from './store';
import { bugAdded } from './actions';

store.dispatch(bugAdded('bug 1'))

console.log(store.getState)