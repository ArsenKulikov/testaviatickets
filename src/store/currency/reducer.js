import initialState from './initialState'
import { currencyMultipliers } from '../../config';
import { SET_CURRENCY } from './types';

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENCY:
            return currencyMultipliers[action.payload];
        default:
            return state;
    }
};
