import { action } from '../../types';
import * as ActionTypes from './actionTypes/followsAndFans';

export interface IfollwsAndFans {
    follows: any[];
    fans: any[];
    goodFriend: any[];
}
const initialState = {
    follows: [{}, {}],
    fans: [],
    goodFriend: []
}

export default function (state: IfollwsAndFans = initialState, action: action<IfollwsAndFans>): IfollwsAndFans {
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.ADD_FOLLOWS:
            const { fans, follows, goodFriend } = payload;
            return {
                ...state,
                follows
            }
        case ActionTypes.DELETE_FOLLOWS:
            return {
                ...state,
                follows
            }
        default: return state
    }
}   