let lastID = 0;

export default function reducer(state = [], action) {

    switch (action.type) {
        case "bugAdd":
            return [
                ...state,
                {
                    id: ++lastID,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case "bugRemove":
            return state.filter(bug => bug.id !== action.payload.id);
        default:
            return state;
    }
    
}