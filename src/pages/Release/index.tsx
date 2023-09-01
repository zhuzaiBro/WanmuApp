import React from 'react';
import Ui, {IDispatch, IState} from './ui';
import {connect} from 'react-redux';
import {add_pictuure, changeVideo, delete_picture} from '../../store/community/ActionFunc/postDynamic';
import store from '../../store';

console.log(store.getState().community.postDynamic.video)
export default function Release({navigation, route}) {
  const mapState2Props = (state): IState=> ({
    navigation, 
    route,
    imgList: state.community.postDynamic.pictures,
    video: state.community.postDynamic.video
  })
  const mapDispatch2Props = (dispatch): IDispatch => ({
    deletePictures(index: number, imgList: any[]) {
      const newList = imgList.filter((it, i) => i !== index);
      console.log(store.getState().community.postDynamic.pictures, newList)
      dispatch(delete_picture(newList));
    },
    deleteVideo() {
      dispatch(changeVideo({}))
    }
  })
  const Show = connect(mapState2Props, mapDispatch2Props)(Ui);
  return (
    <Show />
  )
}
