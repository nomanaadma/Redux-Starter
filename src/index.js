import configureStore from './store/configureStore';
import { bugAdd, bugResolve, getUnresolvedBugs, bugAssignToUser, getBugsByUser } from './store/bugs';
import { projectAdded } from './store/projects';
import { userAdded } from './store/users';

const store = configureStore();


store.subscribe(() => {
    console.log('state chaged');
});
    
store.dispatch(projectAdded({ name: "Project 1"}));
store.dispatch(bugAdd({ description: "Bug 1"}));
store.dispatch(bugAdd({ description: "Bug 2"}));
store.dispatch(bugAdd({ description: "Bug 3"}));
store.dispatch(bugResolve({ id: 1 }));
store.dispatch(userAdded({ name: "Noman"}));
store.dispatch(userAdded({ name: "Amin"}));
store.dispatch(bugAssignToUser({ bugId: 1, userId: 1 }));

const bugs = getBugsByUser(2)(store.getState());
console.log(bugs);