import { action } from '../../types';
import * as ActionTypes from './actionTypes';

type fromUser = {
    avatar: string,
    user_name: string
}
export type message = {
    from: fromUser,
    time: string,
    content: string,
    isRead: boolean
}

export type messagePayload = {
    isLoading: boolean,
    newMessageCount: number,
    datas: message[]
}

const initialState :messagePayload = {
    isLoading: false,
    newMessageCount: 0,
    datas: [],
}

export default function messageReducer(state: messagePayload = initialState, action:action<messagePayload>):messagePayload {
    const { type, payload } : {type: any, payload: any} = action;
    switch (type) {
        case ActionTypes.ADD_MESSAGE:
            return {
                ...state,
                datas: [...state.datas, ...payload], // payload是一个消息数组
                newMessageCount: state.datas.filter(it => !it.isRead).length,
            };
        case ActionTypes.SET_LOADING:
            return {
                ...state,
                isLoading: payload // payload是一个布尔类型，表示正在获取数据
            }
        case ActionTypes.DELETE_MESSAGE: 
            return {
                ...state,
                datas: [
                    ...state.datas.filter((it, index) => index !== payload) // payload是消息索引
                ]
            }
        case ActionTypes.UPDATE_MESSAGE: 
            return {
                ...state,
                datas: payload.datas,
                newMessageCount: payload.newMessageCount
            }
        default:
            return state
    }
}