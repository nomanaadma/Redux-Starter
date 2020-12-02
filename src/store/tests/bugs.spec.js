import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { addbugs } from '../bugs';
import configureStore from '../configureStore';

describe('Bug Slice', () => {
	
	it("Should Handle the addBug Action", async () => {
		
		const bug = { description: 'a'};
		const saveBug = { ...bug, id: 1 };

		const fakeAxios = new MockAdapter(axios);
		fakeAxios.onPost('/bugs').reply(200, saveBug);

		const store = configureStore();
		await store.dispatch(addbugs(bug));
		expect(store.getState().entities.bugs.list).toContainEqual(saveBug);
	});

});



