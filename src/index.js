import configureStore from './store/configureStore';
import * as actions from './store/bugs';
import { projectAdded } from './store/projects';

const store = configureStore();
console.log(store);


store.dispatch(projectAdded({ name: "Project 1"}));


// store.subscribe(() => {
//     console.log('state chaged');
// });

// store.dispatch(actions.bugAdd({ description: "Bug 1"}));
// store.dispatch(actions.bugAdd({ description: "Bug 2"}));
// store.dispatch(actions.bugAdd({ description: "Bug 3"}));
// store.dispatch(actions.bugResolve({ id: 1 }));

// console.log(store.getState());

