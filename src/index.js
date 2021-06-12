import store from './store/store';
import { projectAdded } from './store/projects';
import * as actions from './store/bugs';

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(projectAdded({ name: 'Project 1' }));
store.dispatch(projectAdded({ name: 'Project 2' }));

store.dispatch(actions.bugAdded({ description: 'Bug 1' }))

