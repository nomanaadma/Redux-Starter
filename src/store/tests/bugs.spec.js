import { addbugs, bugAdd } from '../bugs';
import { apiCallBegin } from '../api';

describe('Bug Slice', () => {
	describe('Action Creators', () => {
		it('addBug', () => {
			const bug = { description: 'a' };
			const result = addbugs(bug);
			const expected = {
				type: apiCallBegin.type,
				payload: {
					url: '/bugs',
					method: 'post',
					data: bug,
					onSuccess: bugAdd.type
				}
			}

			expect(result).toEqual(expected);

		});
	});
});



