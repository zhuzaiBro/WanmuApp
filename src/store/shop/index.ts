import {combineReducers} from 'redux';
import shopList from './shopList'
import shopInnerSearch from './shopInnerSearch';
import outGoodist from './outGoodList';

export interface shopState {
    goodList: any[]
    isLoading: boolean
}

export default combineReducers({shopList, shopInnerSearch, outGoodist})