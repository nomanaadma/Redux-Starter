import configureStore from './store/configureStore';
import { bugAdd, bugResolve, getUnresolvedBugs } from './store/bugs';
import { projectAdded } from './store/projects';

const store = configureStore();
console.log(store);


store.dispatch(projectAdded({ name: "Project 1"}));


// store.subscribe(() => {
//     console.log('state chaged');
// });

store.dispatch(bugAdd({ description: "Bug 1"}));
store.dispatch(bugAdd({ description: "Bug 2"}));
store.dispatch(bugAdd({ description: "Bug 3"}));
store.dispatch(bugResolve({ id: 1 }));

// console.log(store.getState());

const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState());

console.log(x, y, x === y);