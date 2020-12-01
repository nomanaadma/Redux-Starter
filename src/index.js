import { loadbugs } from './store/bugs';
import configureStore from './store/configureStore';

const store = configureStore();

store.dispatch(loadbugs());

setTimeout(() => {
	store.dispatch(loadbugs());
}, 2000);