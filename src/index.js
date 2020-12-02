import { loadbugs, resolveBug, assignBugToUser } from './store/bugs';
import configureStore from './store/configureStore';

const store = configureStore();

store.dispatch(loadbugs());

setTimeout(() => {
	store.dispatch(assignBugToUser(1, 10));
}, 4000);
