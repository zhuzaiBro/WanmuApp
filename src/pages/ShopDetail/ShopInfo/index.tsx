import React from 'react'
import { connect } from 'react-redux';
import { getGoods } from '../../../server/shop'
import { AddGoods } from '../../../store/shop/actionFuncs';
import {state} from '../../../types'
import Ui from './ui';

export default function ShopInfo({ navigation, route }) {


    let mapStateToProps = (state: state) => ({
        goodList: state.shop.shopList.goodList,
        navigation,
        route
    });


    let mapDispatchToProps = (dispatch) => ({
        fetchDatas: async () => {
            const res = await getGoods();
            dispatch(AddGoods(res))
        }
    });

    const Show = connect(mapStateToProps, mapDispatchToProps)((props: any) => <Ui {...props} />);

    return (
        <Show />
    )
}