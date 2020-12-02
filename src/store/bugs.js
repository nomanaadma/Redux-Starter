import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegin } from "./api";
import moment from "moment";

const slice = createSlice({
	name: "bugs",
	initialState: {
		list: [],
		loading: false,
		lastFetch: null,
	},
	reducers: {
		bugsRequested: (bugs, action) => {
			bugs.loading = true;
		},

		bugsRequestFailed: (bugs, action) => {
			bugs.loading = false;
		},

		bugsReceived: (bugs, action) => {
			bugs.list = action.payload;
			bugs.loading = false;
			bugs.lastFetch = Date.now();
		},

		bugAssignToUser: (bugs, action) => {
			const { id: bugId, userId } = action.payload;
			const index = bugs.list.findIndex(bug => bug.id === bugId);
			bugs.list[index].userId = userId;
		},

		bugAdd: (bugs, action) => {
			bugs.list.push(action.payload);
		},

		// resolveBug (command)  - bugResolve (event)
		bugResolve: (bugs, action) => {
			const index = bugs.list.findIndex(
				bug => bug.id === action.payload.id
			);
			bugs.list[index].resolved = true;
		},
	},
});

export const {
	bugAdd,
	bugResolve,
	bugAssignToUser,
	bugsReceived,
	bugsRequested,
	bugsRequestFailed,
} = slice.actions;
export default slice.reducer;

// Action Creator
const url = "/bugs";

export const addbugs = bug =>
	apiCallBegin({
		url,
		method: "post",
		data: bug,
		onSuccess: bugAdd.type,
	});

export const loadbugs = () => (dispatch, getState) => {
	const { lastFetch } = getState().entities.bugs;

	const diffInMinutes = moment().diff(moment(lastFetch), "minutes");

	if (diffInMinutes < 10) return;

	return dispatch(
		apiCallBegin({
			url,
			onStart: bugsRequested.type,
			onSuccess: bugsReceived.type,
			onError: bugsRequestFailed.type,
		})
	);
};

export const resolveBug = id =>
	apiCallBegin({
		url: url + "/" + id,
		method: "patch",
		data: { resolved: true },
		onSuccess: bugResolve.type,
	});

export const assignBugToUser = (bugId, userId) =>
	apiCallBegin({
		url: url + "/" + bugId,
		method: "patch",
		data: { userId },
		onSuccess: bugAssignToUser.type,
	});

// Selector

// export const getUnresolvedBugs = state =>
//     state.entities.bugs.filter(bug => !bug.resolved);

// memioztion to cache the previous state if its not changed
export const getUnresolvedBugs = createSelector(
	state => state.entities.bugs,
	bugs => bugs.list.filter(bug => !bug.resolved)
);

export const getBugsByUser = userId =>
	createSelector(
		state => state.entities.bugs,
		bugs => bugs.list.filter(bug => bug.userId === userId)
	);
