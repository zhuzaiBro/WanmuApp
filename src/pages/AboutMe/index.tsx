import React from 'react';
import {IfollwsAndFans} from '../../store/user/followAndFans';
import {connect} from 'react-redux';
import Ui, {IDispatch, IState} from './ui';
import store from '../../store';
import { getFans } from '../../server/fansAndFollows';
import { addMyFollow } from '../../store/user/actionFuncs/followAndFans';

store.getState().userReducer.userInfo

export default function AboutMe({navigation, route}) {

    const mapState2Props = (state): IState => {
        return {
            navigation,
            route,
            fans:state.userReducer.follwsAndFans.fans,
            follows: state.userReducer.follwsAndFans.follows,
            userInfo: state.userReducer.follwsAndFans.userInfo
        }
    }
    const mapDispatch2Props= (dipatch): IDispatch => {
        return {
            fech_follows: async()=> {
                const res = await getFans();
                dipatch(addMyFollow(res));
            }
        }
    }
    const Show = connect(mapState2Props, mapDispatch2Props)(Ui)

  return (
    <Show />
  )
}
