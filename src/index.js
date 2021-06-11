import store from './store/store';
import * as actions from './store/bugs';

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(actions.bugAdded({ description: 'Bug 1' }))
store.dispatch(actions.bugAdded({ description: 'Bug 2' }));
store.dispatch(actions.bugResolved({ id: 1 }))
store.dispatch(actions.bugRemoved({ id: 1 }));
