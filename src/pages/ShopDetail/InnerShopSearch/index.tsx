import React from 'react';
import { connect } from 'react-redux';
import Ui, { IDispatch, IState } from './ui';
import { state } from '../../../types'
import {changeSearchWord, getSearchResult} from '../../../store/shop/actionFuncs/shopInnerSearch';


export default function InnerShopSearch({ navigation, route }) {

    const mapState2Props = (state: state): IState => {
        return ({
            result: state.shop.shopInnerSearch.result,
            searchWold: state.shop.shopInnerSearch.searchWorlds,
            navigation,
            route
        })
    }
    const mapDispatchToProps = (dispatch: any): IDispatch => {
        return ({
            searchGood: (t:string) => {
                
            },
            changeWord: (t: string) => {
                dispatch(changeSearchWord(t))
            }
        })
    }

    const Show = connect(mapState2Props, mapDispatchToProps)(Ui);

    return (
        <Show />
    )
}
