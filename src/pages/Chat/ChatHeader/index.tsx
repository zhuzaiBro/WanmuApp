import React, { useEffect } from 'react'
import { Pressable, StatusBar, Text, View } from 'react-native';
import {useBackTo} from '../../../utils/RouterHelper';
import Icon from '../../../iconfont'
import { ROATE } from '../../../assets/size';

export default function ChatHeader({navigation,   route, iOSHeight}) {
    let back = useBackTo(navigation, route, {});
    useEffect(()=> {
        back = useBackTo(navigation, route, {});
    }, [])
    
  return (
      <View style={{paddingHorizontal: ROATE(12), flexDirection: "row", zIndex: 2, paddingBottom: ROATE(10), paddingTop: StatusBar.currentHeight || iOSHeight, backgroundColor: "#fff"}}>
        <Pressable onPress={()=> {
            back();
          }} >
          <Icon name='fanhuianniu-zuo' size={ROATE(22)} style={{marginTop: ROATE(10), padding: ROATE(4)}} />
        </Pressable>
          
          <Text style={{marginTop: ROATE(10), fontSize:ROATE(16), marginLeft: ROATE(10), fontWeight: "600", color: "#000000e6"}}
           >{route.params.from.user_name || "玩目机器人"}</Text>
      </View>
  )
}
