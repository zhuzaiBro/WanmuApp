import * as ActionTypes from './actionTypes/outGoodList';
import { action } from '../../types';

export interface outGoodList {
    isLoading: boolean;
    goodList: any[];
}

const initialState = {
    isLoading: false,
    goodList: [],
}
export default function (state: outGoodList = initialState, action: action<outGoodList>): outGoodList {
    const { payload, type } = action;
    switch (type) {
        case ActionTypes.ADD_GOODS:
            const {goodList, isLoading} = payload;
            return {
                ...state,
                goodList
            }
        case ActionTypes.DELETE_GOOD: 
            return {
                ...state,
                goodList
            }
        default:
            return state
    }
}