import {
  SET_FILTER,
} from './types';

import initialState from './initialState'

function setFilter(state, filter) {
    const newState = { ...state };
    if (filter === 'SET_ALL') {
        const setAllState = {...state};
        setAllState.filters = [];
        return setAllState
    } else if (newState.filters.includes(filter)) {
        const index = newState.filters.indexOf(filter);
        newState.filters.splice(index, 1);
        return newState;
    } else if (!newState.filters.includes(filter)) {
        newState.filters.push(filter);
        return newState;
    }
}

export default (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {

        case SET_FILTER:
            return setFilter(state, payload);

        default:
            return state
    }
};