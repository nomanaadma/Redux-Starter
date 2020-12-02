import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { addbugs, getUnresolvedBugs } from '../bugs';
import configureStore from '../configureStore';

describe('Bug Slice', () => {
	let fakeAxios; 
	let store;

	beforeEach(() => {
		fakeAxios = new MockAdapter(axios);
		store = configureStore();
	});

	const bugSlice = () => store.getState().entities.bugs;
	const createState = () => ({
		entities: {
			bugs: {
				list: []
			}
		}
	});

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

	describe('Selectors', () => {

		it("getUnresolvedBugs", () => {
			
			const state = createState();
			state.entities.bugs.list = [{ id: 1, resolved: true }, { id: 2 }, { id: 3 }];

			const result = getUnresolvedBugs(state);

			expect(result).toHaveLength(2);

		});

	});

});



