import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { apiCallBegin } from './api';

let lastID = 0;

const slice = createSlice({
    name: 'bugs',
    initialState: {
		list: [],
		loading: false,
		lastFetch: null,
	},
    reducers: {

		bugsReceived: (bugs, action) => {
			bugs.list = action.payload;
		},

        bugAssignToUser: (bugs, action) => {

            const { bugId, userId } = action.payload;
            const index = bugs.list.findIndex(bug => bug.id === bugId);
            bugs.list[index].userId = userId;

        },
        
        bugAdd: (bugs, action) => {
            bugs.list.push({
                id: ++lastID,
                description: action.payload.description,
                resolved: false
            });
        },
        
        bugResolve: (bugs, action) => {
            const index = bugs.list.findIndex(bug => bug.id === action.payload.id );
            bugs.list[index].resolved = true;
        }

    }
});

export const { bugAdd, bugResolve, bugAssignToUser, bugsReceived } = slice.actions;
export default slice.reducer;


// Action Creator
const url = "/bugs";
export const loadbugs = () => apiCallBegin({
	url,
	onSuccess: bugsReceived.type,
});

// Selector

// export const getUnresolvedBugs = state =>
//     state.entities.bugs.filter(bug => !bug.resolved);

// memioztion to cache the previous state if its not changed
export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => !bug.resolved)
);

export const getBugsByUser = userId => createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.userId === userId )
);



