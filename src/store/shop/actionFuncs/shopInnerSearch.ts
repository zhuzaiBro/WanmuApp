import * as ActionTypes from '../actionTypes/shopInnerSearch';
import {action} from '../../../types';
import {searchState} from '../shopInnerSearch'


export function changeSearchWord(t: string): action<searchState> {
    return {
        type: ActionTypes.CHANGE_SEARCH_WORD,
        payload: {
            result: [],
            searchWorlds: t
        }
    }
}

export function getSearchResult(res: any[]): action<searchState> {
    return {
        type: ActionTypes.GET_SEARCH_RESULT,
        payload: {
            searchWorlds: "",
            result: res
        }
    }
}