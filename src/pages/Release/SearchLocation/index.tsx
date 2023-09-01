import React from 'react';
import {connect} from 'react-redux';
import Ui from './ui';

export default function SearchLoaction() {
    const mapState2Props = ()=> ({

    });

    const Show = connect(mapState2Props)(Ui)
  return (
     <Show />
  )
}
