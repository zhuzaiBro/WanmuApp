import {combineReducers} from 'redux';
import dynamic from './dynamic';
import postDynamic from './postDynamic'

export default combineReducers({
    dynamic,
    postDynamic,
})