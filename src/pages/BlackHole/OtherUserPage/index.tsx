import React from 'react';
import {connect} from 'react-redux';
import Ui, {IDispatch, IState} from './ui';

export default function OtherUserPage({navigation, route}) {

    const mapState2Props = (): IState=> ({
        navigation, route,
        dynamics: [{},{},{}]
    })
    const Show = connect(mapState2Props)(Ui)
  return (
    <Show />
  )
}
