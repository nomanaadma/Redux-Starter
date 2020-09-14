import store from './customStore';
import * as actions from './actionCreators';

store.subscribe(() => {
    console.log('state chaged');
});

store.dispatch(actions.bugAdd('Bug 1'));

console.log(store.getState());