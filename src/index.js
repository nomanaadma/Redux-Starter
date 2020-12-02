import { addbugs } from './store/bugs';
import configureStore from './store/configureStore';

const store = configureStore();

store.dispatch(addbugs({
	description: "b"
}));
