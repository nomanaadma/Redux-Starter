import store from './store';
import { bugAdd, bugRemove, bugResolve } from './actionCreators';

const unsubscribe = store.subscribe(() => {
    console.log("Store Changed!", store.getState());
});


store.dispatch(bugAdd("Bug 1"));
store.dispatch(bugAdd("Bug 2"));
store.dispatch(bugAdd("Bug 3"));

store.dispatch(bugResolve(2));

// unsubscribe();
// store.dispatch(bugRemove(1));




// console.log(store.getState());

