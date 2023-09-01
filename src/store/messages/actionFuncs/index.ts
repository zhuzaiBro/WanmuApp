import * as ActionTypes from '../actionTypes';
import {message} from '../index';

export function AddMessages(newMessages: message[]) {
    return {
        type: ActionTypes.ADD_MESSAGE,
        payload: newMessages
    }
}

export function DeleteMessage(index: number) {
    return {
        type: ActionTypes.DELETE_MESSAGE,
        payload: index
    }
}

export function SetIsloading(loading: boolean) {
    return {
        type: ActionTypes.SET_LOADING,
        payload: loading
    }
}

export function UpdateMessage(newMessages: message[]) {
    return {
        type: ActionTypes.UPDATE_MESSAGE,
        payload: {
            newMessageCount : newMessages.filter((it, i) => !it.isRead).length,
            datas: newMessages
        }
    }
}