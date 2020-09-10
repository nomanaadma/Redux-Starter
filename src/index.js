import store from './store';
import * as actions from './actionTypes';

const unsubscribe = store.subscribe(() => {
    console.log("Store Changed!", store.getState());
});



store.dispatch({
    type: actions.BUG_ADD,
    payload: {
        description: "Bug 1"
    }
});

unsubscribe();

store.dispatch({
    type: actions.BUG_REMOVE,
    payload: {
        id: 1
    }
});


console.log(store.getState());

