import { action } from '../../../types';
import * as ActionTypes from '../actionTypes';
import { shopState } from '../index';

export function AddGoods(goodList: any[]): action<shopState> {
    return {
        type: ActionTypes.ADD_GOODS,
        payload: {
            goodList,
            isLoading: false
        }
    }
}

export function DeleteGood(goodList: any[]): action<shopState> {
    return {
        type: ActionTypes.ADD_GOODS,
        payload: {
            goodList,
            isLoading: false
        }
    }
}