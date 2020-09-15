import { createAction } from '@reduxjs/toolkit';


// ACTION CREATORS SECTION
export const bugAdd = createAction("bugAdd");
export const bugRemove = createAction("bugRemove")
export const bugResolve = createAction("bugResolve");



// REDUCER SECTION 
let lastID = 0;
export default function reducer(state = [], action) {

    switch (action.type) {
        case bugAdd.type:
            return [
                ...state,
                {
                    id: ++lastID,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case bugRemove.type:
            return state.filter(bug => bug.id !== action.payload.id);
        case bugResolve.type:
            
            return state.map(bug => 
                bug.id !== action.payload.id ? bug : { ...bug, resolved: true }    
            );
            
        default:
            return state;
    }
    
}