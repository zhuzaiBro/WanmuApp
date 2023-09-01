import * as actionType from '../actionTypes';



export function getLoginType(user:any) {
    return {
       type: actionType.LOGIN,
       payload: user
    }
};

export function getLoginOutType() {
    return {
        type: actionType.LOGINOUT,
        payload: null
    }
}
