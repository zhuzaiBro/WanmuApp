import { View,Text } from 'native-base'
import React from 'react';
import Arrow from '../../assets/pictures/oneserver/arrowR.svg';
import { ROATE } from '../../assets/size';
import {useGoPage} from '../../utils/RouterHelper'

export default function titleLine({navigation , title, route , info = void 0, to=""}) {
    const gopage = useGoPage(navigation, route, info, to);
  return (
    <View style={{flexDirection :"row", marginTop:ROATE(20), marginBottom: ROATE(12), alignItems : "center"}}>
        <Text style={{ height: ROATE(20), width: ROATE(262), padding: 0,  fontWeight: "600",
            fontSize: ROATE(16), color: "rgba(0,0,0,0.9)", lineHeight: ROATE(20)
        }}>{title}</Text>
        <Text style={{fontSize: ROATE(12), marginLeft: "auto", fontWeight: "400", lineHeight: ROATE(18), color: "rgba(0,0,0,0.45)"}} onPress={gopage}>查看更多</Text>
        <Arrow  onPress={gopage}/>
    </View> 
  )
}
