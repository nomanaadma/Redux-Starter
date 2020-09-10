import store from './store';

const unsubscribe = store.subscribe(() => {
    console.log("Store Changed!", store.getState());
});



store.dispatch({
    type: 'bugAdd',
    payload: {
        description: "Bug 1"
    }
});

unsubscribe();

store.dispatch({
    type: 'bugRemove',
    payload: {
        id: 1
    }
});


console.log(store.getState());

