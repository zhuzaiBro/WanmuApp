import { action } from '../../types';
import * as ActionTypes from './ActionTypes/postDynamic';

export interface IPostDynamic {
    pictures: any[];
    video: any;
    imgDetail: any
}

const initialState = {
    pictures: [],
    video: {},
    imgDetail: {}
}


export default function (state: IPostDynamic = initialState, action: action<IPostDynamic>): IPostDynamic {
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.ADD_PICTURE:
            return {
                ...state,
                pictures: payload.pictures
            }
        case ActionTypes.DELETE_PICTURE:
            console.log(payload.pictures, 1231)
            return {
                ...state,
                pictures: payload.pictures
            }
        case ActionTypes.CHANGE_Video:
            return {
                ...state,
                video: payload.video
            }
        case ActionTypes.CHANGE_IMG_DETAIL:
            return {
                ...state,
                imgDetail: payload.imgDetail
            }
        default:
            return state
    }

}