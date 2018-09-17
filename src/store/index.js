import filterReducer from './filter'
import currencyReducers from './currency'

import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
const middleware = [ thunk ];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    filter: filterReducer,
    currency: currencyReducers,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));