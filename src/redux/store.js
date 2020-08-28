import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from "redux-logger";
import chatApp from './chatReducers'
import shopReducer from './shopReducers'

const store = createStore(
    combineReducers({chatApp, shopReducer}),
    applyMiddleware(logger)    
);

export default store;