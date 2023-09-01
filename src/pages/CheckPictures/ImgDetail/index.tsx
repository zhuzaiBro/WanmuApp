import React from 'react';
import Ui, { IState, IDispatch } from './ui';
import { connect } from 'react-redux';
import store from '../../../store';
import { add_pictuure } from '../../../store/community/ActionFunc/postDynamic';
// store.getState().community.postDynamic.pictures

export default function ImgDetail({ navigation, route }) {

    const mapState2Props = (state): IState => ({
        navigation,
        route,
        ImgDetail: state.community.postDynamic.imgDetail,
        imgList: state.community.postDynamic.pictures,
        // video: state.community.postDynamic.video
    });

    const mapDispatch2Props = (dispatch): IDispatch => ({
        addImgs(imgList: any[], newImgs: any[]) {
            dispatch(add_pictuure(imgList.concat(newImgs)))
        },
       
    })

    const Show = connect(mapState2Props, mapDispatch2Props)(Ui)
    return (
        <Show />
    )
}
