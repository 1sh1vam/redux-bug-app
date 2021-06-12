import store from './store/store';
import { projectAdded } from './store/projects';
import { bugAdded, bugResolved, bugRemoved, getUnresolvedBugs } from './store/bugs';

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(projectAdded({ name: 'Project 1' }));
store.dispatch(projectAdded({ name: 'Project 2' }));

store.dispatch(bugAdded({ description: 'Bug 1' }))
store.dispatch(bugAdded({ description: 'Bug 2' }))
store.dispatch(bugAdded({ description: 'Bug 3' }))
store.dispatch(bugAdded({ description: 'Bug 4' }))
store.dispatch(bugResolved({ id: 1 }))

// implementing a selector to get the unresolved bugs

// const unresolvedBugs = store.getState().entities.bugs
//     .filter(bug => !bug.resolved)

// However this method of selecting has some drwabacks like we will implement this function at many places where need
//  to select the state to resolve this we will implement this function inside the bugs module so that it will be accessible 
//  everywhere and we won't neet to implment this again and again


// const x = getUnresolvedBugs(store.getState())
// const y = getUnresolvedBugs(store.getState())
// console.log(x === y)
// we get false when we log x===y.

//  however this method also have a problem, everytime we call getUnresolvedFunction we get a different array in the memory
//  even if the state has not changed. this will cause rerendering of the ui components and will create memory overhead as well
//  it will reduce the performance of the app
//  to get rid of this problem we can use "MEMOIZATION" which will cache the expensive function call in this case, getUnresolvedBugs
//  and we can use this cache data. to see implementation go to the bugs module.

const x = getUnresolvedBugs(store.getState())
const y = getUnresolvedBugs(store.getState())
console.log(x)
console.log(x === y)

// Now we can see that x is equal to y
