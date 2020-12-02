import { loadbugs, resolveBug } from './store/bugs';
import configureStore from './store/configureStore';

const store = configureStore();

store.dispatch(loadbugs());

setTimeout(() => {
	store.dispatch(resolveBug(1));
}, 4000);
