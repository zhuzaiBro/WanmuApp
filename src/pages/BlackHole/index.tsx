import React from 'react';
import { connect } from 'react-redux';
import Ui, { IDispatch, IState } from './ui';
import {getDynamics, getScrollList} from '../../server/dynamic';
import {getFollowDynamics,getNewDynamics,getScrollListData, getRecommangDynamics,getSchoolDynamics} from '../../store/community/ActionFunc/dynamic';
import store from '../../store';


export default function Community({ navigation, route }: {navigation:any, route: any}) {

    const mapState2Props = (state): IState => ({
        navigation,
        route,
        scrollListData: state.community.dynamic.scrollListData,
        imgViewList: state.community.dynamic.imgViewList,
        recommand_dynamics: state.community.dynamic.recommand_dynamics
    });

    const mapDispatch2Props = (dispatch): IDispatch => {return({
        setImgViewList() {},
        async getItem (){
            const res = await getDynamics();
            dispatch(getRecommangDynamics(res));
        },
        async getScrollListData() {
            const res = await getScrollList();
            dispatch(getScrollListData(res));
        }
    })}


    const Show = connect(mapState2Props, mapDispatch2Props)(Ui);
    return (
        <Show />
    )
}