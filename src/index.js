import store from './store';
import * as actions from './actionCreators';

store.subscribe(() => {
    console.log('state chaged');
});

store.dispatch(actions.bugAdd('Bug 1'));
store.dispatch(actions.bugAdd('Bug 2'));
store.dispatch(actions.bugAdd('Bug 3'));
store.dispatch(actions.bugResolve(1));

console.log(store.getState());