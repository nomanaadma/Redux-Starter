import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

let lastID = 0;

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        
        bugAdd: (bugs, action) => {
            bugs.push({
                id: ++lastID,
                description: action.payload.description,
                resolved: false
            });
        },
        
        bugResolve: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id );
            bugs[index].resolved = true;
        }

    }
});

export const { bugAdd, bugResolve} = slice.actions;
export default slice.reducer;

// Selector

// export const getUnresolvedBugs = state =>
//     state.entities.bugs.filter(bug => !bug.resolved);

// memioztion to cache the previous state if its not changed
export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => !bug.resolved)
);



