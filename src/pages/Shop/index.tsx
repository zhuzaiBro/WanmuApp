import React from 'react';
import {connect} from 'react-redux';
import { state } from '../../types';
import Ui, {IState, IDispatch} from './ui';
import {getGoods} from '../../server/shop';
import {addGoods as addNewGoods, deleteGood} from '../../store/shop/actionFuncs/outGoodList';
import store from '../../store';

export default function Shop({navigation, route}) {

    const mapState2Props = (state: state): IState=> {
        return {
            goodList: state.shop.outGoodist.goodList,
            navigation,
            route,
            UserInfo: state.userReducer
        }
    }
    const mapDispatch2Props = (dispatch): IDispatch=> {
        return {
            getGoodList: async()=> {
                const res = await getGoods();
                dispatch(addNewGoods(res))
            }
        }
    }

    const Show = connect(mapState2Props, mapDispatch2Props)(Ui)

  return (
    <Show />
  )
}
