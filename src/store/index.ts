import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './user';
import addrReducer from './addr';
import messageReducer from './messages';
import shop from './shop';
import community from './community';

const reducer = combineReducers({userReducer, addrReducer, community, shop, messageReducer})

const store = createStore(reducer,
    applyMiddleware(thunk));



export default store;