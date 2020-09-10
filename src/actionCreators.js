import * as actions from './actionTypes';

export const bugAdd = description => ({
    type: actions.BUG_ADD,
    payload: {
        description: description
    }
});

export const bugRemove = id => ({
    type: actions.BUG_REMOVE,
    payload: {
        id
    }
});