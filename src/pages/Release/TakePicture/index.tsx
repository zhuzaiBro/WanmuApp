import React from 'react';
import { connect } from 'react-redux';
import Ui, {IDispatch, IState} from './ui';
import { add_pictuure, changeVideo, delete_picture } from '../../../store/community/ActionFunc/postDynamic';

export default function TakePicture({ navigation, route }) {

    const mapState2Props = (state):IState => ({
        navigation,
        route,
        imgList: state.community.postDynamic.pictures,
        video: state.community.postDynamic.video
    });
    const mapDispatch2State = (dispatch):IDispatch => ({
        addImgs(imgList: any[], newImgs: any[]) {
            dispatch(add_pictuure(imgList.concat(newImgs)))
        },
        setVideo(video) {
            dispatch(changeVideo(video));
        }
    })

    const Show = connect(mapState2Props, mapDispatch2State)(Ui)
    return (
        <Show />
    )
}
