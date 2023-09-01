import {action} from '../../types';
import * as ActionTypes from './actionTypes/shopInnerSearch';

const initialState = {
    searchWorlds: "",
    result: []
}

export interface searchState {
    searchWorlds: string
    result: any[]
}

export default function(state:searchState = initialState, action: action<searchState>):searchState {
    const {type, payload} = action;
    switch(type) {
        case ActionTypes.CHANGE_SEARCH_WORD: 
        const {searchWorlds, result} = payload;
            return {
                ...state,
                searchWorlds
            }
        case ActionTypes.GET_SEARCH_RESULT: 
            return {
                ...state,
                result
            }
        default : return state
    }
}