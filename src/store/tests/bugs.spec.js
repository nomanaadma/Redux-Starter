import { addbugs } from '../bugs';
import configureStore from '../configureStore';

describe('Bug Slice', () => {
	
	it("Should Handle the addBug Action", async () => {

		const store = configureStore();
		const bug = { description: 'a'};
		await store.dispatch(addbugs(bug));
		expect(store.getState().entities.bugs.list).toHaveLength(1);
	});

});



