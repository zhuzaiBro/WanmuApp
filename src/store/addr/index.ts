import * as ActionTypes from './actionTypes';

export type addr = {
    location: string;
    phone: string;
    name: string;
    isDefault: boolean;
}

const initialState: addr[] = [
    {
        location: "浙江省 杭州市 钱塘区 白杨街道下沙高教区浙江理工大学生活2区域菜鸟驿站",
        phone: "15024359582",
        name: "zhujie",
        isDefault: true
    }, {
        location: "dsadsad",
        phone: "15024359582",
        name: "zhujie",
        isDefault: false
    }, {
        location: "dsadsad",
        phone: "15024359582",
        name: "zhujie",
        isDefault: false
    },
]

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.ADD_ADDR:
            if (payload.isDefault) { // 如果用户设置了默认地址
                return [...state.map(it => ({ ...it, isDefault: false })), payload];
            }
            return [...state, payload];
        case ActionTypes.DELETE_ADDR:
            return state.filter((it, index) => index !== payload); // payload 为 number
        case ActionTypes.EDIT_ADDR:
            // 找出修改的地址
            // let index; 找到修改的索引
            const index = state.indexOf((payload));
            if (!index) return state;
            state[index] = payload;
            return state;
        case ActionTypes.SET_DEFAULT:  // payload 为 number
            const arr = state.map((it, index) => ({
                ...it,
                isDefault: index === payload
            }));
            return arr.filter(it => it.isDefault).concat(arr.filter(it => !it.isDefault))

        default: return state
    }
}