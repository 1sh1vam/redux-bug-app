import store from './store/store';
import { projectAdded } from './store/projects';
import * as actions from './store/bugs';

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(projectAdded({ name: 'Project 1' }));
store.dispatch(projectAdded({ name: 'Project 2' }));

store.dispatch(actions.bugAdded({ description: 'Bug 1' }))
store.dispatch(actions.bugAdded({ description: 'Bug 2' }))
store.dispatch(actions.bugAdded({ description: 'Bug 3' }))
store.dispatch(actions.bugAdded({ description: 'Bug 4' }))
store.dispatch(actions.bugResolved({ id: 1 }))

// implementing a selector to get the unresolved bugs

const unresolvedBugs = store.getState().entities.bugs
    .filter(bug => !bug.resolved)

console.log(unresolvedBugs)

