import React from 'react';
import Ui from './ui';
import {connect} from 'react-redux';

export default function Home({navigation, route}) {

    const mapState2Props = () => ({
        navigation,
        route,
        schoolList: []
    })
    const Show = connect(mapState2Props)(Ui);


  return (
    <Show />
  )
}
