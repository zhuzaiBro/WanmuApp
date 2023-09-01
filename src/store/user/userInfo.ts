import * as ActionTypes from './actionTypes';


const initialState = null;

export default function reducer(state: any = initialState, { type, payload }) {
    switch (type) {
        case ActionTypes.LOGIN:
            return payload;
        case ActionTypes.LOGINOUT:
            return null;
        default:
            return state;
    }
}