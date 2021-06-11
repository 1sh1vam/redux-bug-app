import store from './store/store';
import * as actions from './store/projects';

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(actions.projectAdded({ name: 'Project 1' }))
store.dispatch(actions.projectAdded({ name: 'Project 2' }));

