import {IDynamic} from '../dynamic'
import {action} from '../../../types';
import * as ActionTypes from '../ActionTypes/dynamic';

export function getSchoolDynamics(school_dynamics: any[]): action<IDynamic> {
    return {
        payload: {
            follow_dynamics: [],
            isLoading: false,
            new_dynamics: [], 
            recommand_dynamics: [],
            school_dynamics,
            imgViewList:[],
            scrollListData: [],
        },
        type: ActionTypes.GET_SCHOOL_DYNAMIC
    }
}

export function getRecommangDynamics(recommand_dynamics: any[]):action<IDynamic> {
    return {
        payload: {
            scrollListData: [],
            follow_dynamics: [],
            isLoading: false,
            new_dynamics: [],
            recommand_dynamics,
            school_dynamics: [],
            imgViewList:[]
        },
        type: ActionTypes.GET_RECOMMAND_DYNAMIC
    }
}

export function getNewDynamics(new_dynamics: any[]):action<IDynamic> {
    return {
        payload: {
            follow_dynamics: [],
            isLoading: false,
            new_dynamics,
            recommand_dynamics: [],
            school_dynamics: [],
            imgViewList:[],
            scrollListData: [],
        },
        type: ActionTypes.GET_NEW_DYNAMIC
    }
}

export function getFollowDynamics(follow_dynamics: any[]):action<IDynamic> {
    return {
        payload: {
            follow_dynamics,
            isLoading: false,
            new_dynamics: [],
            recommand_dynamics: [],
            school_dynamics: [],
            imgViewList:[],
            scrollListData: [],
        },
        type: ActionTypes.GET_FOLLOW_DYNAMIC
    }
}

export function getScrollListData(listData: any[]):action<IDynamic> {
    return {
        payload: {
            follow_dynamics: [],
            imgViewList: [],
            isLoading: false,
            new_dynamics: [],
            recommand_dynamics: [],
            school_dynamics: [],
            scrollListData: listData
        },
        type: ActionTypes.GET_SCROLL_LIST_DATA
    }
}

export function changeScrollListData(listData: any[]):action<IDynamic> {
    return {
        payload: {
            follow_dynamics: [],
            imgViewList: [],
            isLoading: false,
            new_dynamics: [],
            recommand_dynamics: [],
            school_dynamics: [],
            scrollListData: listData,
        },
        type: ActionTypes.CHANGE_SCROLL_LIST_DATA
    }
}