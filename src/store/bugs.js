import { createSlice } from '@reduxjs/toolkit';

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