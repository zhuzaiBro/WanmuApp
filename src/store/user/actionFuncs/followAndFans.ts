import * as ActionTypes from '../actionTypes/followsAndFans';
import {IfollwsAndFans} from '../followAndFans'
import {action} from '../../../types';

export function addMyFollow(newFollowArr: any[]):action<IfollwsAndFans> {
    return {
        payload: {
            fans: [],
            follows: newFollowArr,
            goodFriend: []
        },
        type: ActionTypes.ADD_FOLLOWS
    }
}

export function deleteMyFollows(newFollowArr: any[]):action<IfollwsAndFans> {
    return {
        payload: {
            fans: [],
            follows: newFollowArr,
            goodFriend: []
        },
        type: ActionTypes.DELETE_FOLLOWS
    }
}