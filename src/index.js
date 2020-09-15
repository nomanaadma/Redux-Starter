import configureStore from './store/configureStore';
import * as actions from './store/bugs';

const store = configureStore();

store.subscribe(() => {
    console.log('state chaged');
});

store.dispatch(actions.bugAdd({ description: "Bug 1"}));
store.dispatch(actions.bugAdd({ description: "Bug 2"}));
store.dispatch(actions.bugAdd({ description: "Bug 3"}));
store.dispatch(actions.bugResolve({ id: 1 }));
store.dispatch(actions.bugRemove({ id: 2}));

console.log(store.getState());