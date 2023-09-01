import {combineReducers} from 'redux';
import userInfo from './userInfo';
import follwsAndFans from './followAndFans';

export default combineReducers({
    userInfo,
    follwsAndFans
})
