// aCTIONS SECTION
const BUG_ADD = 'bugAdd';
const BUG_REMOVE = 'bugRemove';
const BUG_RESOLVE = 'bugResolve';



// ACTION CREATORS SECTION
export const bugAdd = description => ({
    type: BUG_ADD,
    payload: {
        description: description
    }
});

export const bugRemove = id => ({
    type: BUG_REMOVE,
    payload: {
        id
    }
});

export const bugResolve = id => ({
    type: BUG_RESOLVE,
    payload: {
        id
    }
});



// REDUCER SECTION 
let lastID = 0;
export default function reducer(state = [], action) {

    switch (action.type) {
        case BUG_ADD:
            return [
                ...state,
                {
                    id: ++lastID,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case BUG_REMOVE:
            return state.filter(bug => bug.id !== action.payload.id);
        case BUG_RESOLVE:
            
            return state.map(bug => 
                bug.id !== action.payload.id ? bug : { ...bug, resolved: true }    
            );
            
        default:
            return state;
    }
    
}