import store from './store';
import { bugAdd, bugRemove } from './actionCreators';

const unsubscribe = store.subscribe(() => {
    console.log("Store Changed!", store.getState());
});


store.dispatch(bugAdd("Bug 1"));

unsubscribe();

store.dispatch(bugRemove(1));


console.log(store.getState());

