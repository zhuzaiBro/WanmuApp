import * as ActionTypes from '../actionTypes';
import {addr} from '../../../types'

export function addAddr(newAddr: addr) {
    return {
        type: ActionTypes.ADD_ADDR,
        payload: newAddr
    }
}

export function deleteAddr(deleteIndex: number) {
    return {
        type: ActionTypes.DELETE_ADDR,
        payload: deleteIndex
    }
}

export function editAddr(editAddr: addr) {
    return {
        type: ActionTypes.EDIT_ADDR,
        payload: editAddr
    }
}

export function changeDefault(index: number) {
    return {
        type: ActionTypes.SET_DEFAULT,
        payload: index
    }
}