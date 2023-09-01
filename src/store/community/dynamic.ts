import { pay } from 'react-native-wechat-lib';
import { action } from '../../types';
import * as ActionTypes from './ActionTypes/dynamic';

export interface IDynamic {
    isLoading: boolean;
    recommand_dynamics: any[];
    new_dynamics: any[];
    follow_dynamics: any[];
    school_dynamics: any[];
    imgViewList: any[];
    scrollListData: any[];
}

const initalState: IDynamic = {
    isLoading: false,
    recommand_dynamics: [],
    new_dynamics: [],
    follow_dynamics: [],
    school_dynamics: [],
    imgViewList: [{
        url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    },
    {
        url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    },
    {
        url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    },],
    scrollListData: [],
}


export default function dynamic (state: IDynamic = initalState, action: action<IDynamic>): IDynamic {
    const { payload, type } = action;

    switch (type) {

        case ActionTypes.GET_FOLLOW_DYNAMIC:
            return {
                ...state,
                follow_dynamics: payload.follow_dynamics
            }
        case ActionTypes.GET_RECOMMAND_DYNAMIC:
            return {
                ...state,
                recommand_dynamics: payload.recommand_dynamics
            }
        case ActionTypes.GET_SCHOOL_DYNAMIC:
            return {
                ...state,
                school_dynamics: payload.school_dynamics
            }
        case ActionTypes.GET_NEW_DYNAMIC:
            return {
                ...state,
                new_dynamics: payload.new_dynamics
            }
            case ActionTypes.GET_SCROLL_LIST_DATA: 
            return {
                ...state,
                scrollListData: payload.scrollListData
            }
        default:
            return state
    }
}