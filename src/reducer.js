import * as actions from './actionTypes';
let lastID = 0;

export default function reducer(state = [], action) {

    switch (action.type) {
        case actions.BUG_ADD:
            return [
                ...state,
                {
                    id: ++lastID,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case actions.BUG_REMOVE:
            return state.filter(bug => bug.id !== action.payload.id);
        case actions.BUG_RESOLVE:
            
            // const bugs = [...state];
            // const index = state.findIndex(bug => bug.id === action.payload.id);
            // bugs[index] = {...bugs[index]};
            // bugs[index].resolved = true;
            // return bugs;

            return state.map(bug => 
                bug.id !== action.payload.id ? bug : { ...bug, resolved: true }    
            );
            
        default:
            return state;
    }
    
}