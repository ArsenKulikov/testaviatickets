import {
  SET_FILTER,
} from './types';

import initialState from './initialState'

function setFilter(state, filter) {
    let newState = JSON.parse(JSON.stringify(state));

    if (filter === 'SET_ALL') {
        return []
    } else if (newState.includes(filter)) {
        const index = newState.indexOf(filter);
        newState.splice(index, 1);
        return newState;
    } else if (!newState.includes(filter)) {
        newState.push(filter);
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