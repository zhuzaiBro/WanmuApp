import { CombinedState } from "redux";
import { message } from "../store/messages";
import { shopState } from "../store/shop";
import {outGoodList as outGoodInterface} from '../store/shop/outGoodList';


export type addr = {
    location: string;
    phone: string;
    name: string;
    isDefault: boolean;
}

export interface action<T> {
    type: any
    payload: T
}

export type state = {
    userReducer: any;
    addrReducer: any[];
    shop: CombinedState<{
        shopList: shopState;
        shopInnerSearch: {
            searchWorlds: string;
            result: any[];
        };
        outGoodist: outGoodInterface;
    }>;
    messageReducer: {
        isLoading: boolean,
        datas: any[],
        newMessageCount: number
    }
}