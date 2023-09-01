import { shopState } from ".";
import * as ActionTypes from './actionTypes';
import {action} from '../../types';


const initialState: shopState = {
    goodList: [],
    isLoading: false,

}


export default function Shop(state = initialState, action: action<shopState>): shopState {
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.ADD_GOODS:
            return {
                ...state,
                goodList: [
                    ...state.goodList,
                    ...payload.goodList, // 这步操作payload是一个描述商品的数组
                ],
            }
        case ActionTypes.DELETE_GOODS:
            return {
                ...state,
                goodList: payload.goodList,
            }
        default:
            return state
    }
}