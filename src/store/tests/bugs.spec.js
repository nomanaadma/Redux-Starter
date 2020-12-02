import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { addbugs } from '../bugs';
import configureStore from '../configureStore';

describe('Bug Slice', () => {
	let fakeAxios; 
	let store;

	beforeEach(() => {
		fakeAxios = new MockAdapter(axios);
		store = configureStore();
	});

	const bugSlice = () => store.getState().entities.bugs;

	it("Should add the bug to the store if its saved to the server", async () => {
		// Arrage
		const bug = { description: 'a'};
		const saveBug = { ...bug, id: 1 };
		fakeAxios.onPost('/bugs').reply(200, saveBug);

		// Act
		await store.dispatch(addbugs(bug));

		// Assert
		expect(bugSlice().list).toContainEqual(saveBug);
	});

	it("Should not add the bug to the store if its not saved to the server", async () => {
		// Arrage
		const bug = { description: 'a'};
		fakeAxios.onPost('/bugs').reply(500);

		// Act
		await store.dispatch(addbugs(bug));

		// Assert
		expect(bugSlice().list).toHaveLength(0);
	});

});



