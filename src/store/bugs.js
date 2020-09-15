import { createAction, createReducer } from '@reduxjs/toolkit';


// ACTION CREATORS SECTION
export const bugAdd = createAction("bugAdd");
export const bugResolve = createAction("bugResolve");



// REDUCER SECTION 
let lastID = 0;


export default createReducer([], {
   
    [bugAdd.type]: (bugs, action) => {
        bugs.push({
            id: ++lastID,
            description: action.payload.description,
            resolved: false
        });
    },

    [bugResolve.type]: (bugs, action) => {
        const index = bugs.findIndex(bug => bug.id === action.payload.id );
        bugs[index].resolved = true;
    }

});