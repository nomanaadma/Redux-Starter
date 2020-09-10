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
        default:
            return state;
    }
    
}