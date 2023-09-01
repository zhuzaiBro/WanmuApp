import { action } from "../../../types";
import { outGoodList } from '../outGoodList';
import * as ActionTypes from '../actionTypes/outGoodList';

export function addGoods(goodList: any[]): action<outGoodList> {
    return {
        payload: {
            isLoading: false,
            goodList
        },
        type: ActionTypes.ADD_GOODS
    }
}

export function deleteGood(goodList: any[]): action<outGoodList> {
    return {
        payload: {
            isLoading: false,
            goodList,
        },
        type: ActionTypes.DELETE_GOOD
    }
}