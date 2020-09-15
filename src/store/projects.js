import { createSlice } from '@reduxjs/toolkit';

let lastID = 0;

const slice = createSlice({
    name: 'projects',
    initialState: [],
    reducers: {
        
        projectAdded: (bugs, action) => {
            bugs.push({
                id: ++lastID,
                name: action.payload.name,
                resolved: false
            });
        }

    }
});

export const { projectAdded } = slice.actions;
export default slice.reducer;