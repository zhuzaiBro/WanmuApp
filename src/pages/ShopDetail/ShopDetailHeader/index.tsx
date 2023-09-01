import React from 'react';
import { View, Text, StatusBar, Pressable } from 'react-native';
import { ROATE } from '../../../assets/size';
import Icon from '../../../iconfont';
import { useBackTo } from '../../../utils/RouterHelper';

interface IProps {
  navigation: any; 
  iOSHeight : number;
  gouwucheCallback? : Function;
  zhuanfaCallback? : Function;
  moreCallback? :Function;
  route: any;
}


export default function DetailHeader({ navigation, route, iOSHeight, gouwucheCallback, zhuanfaCallback, moreCallback }: IProps) {
const goBack = useBackTo(navigation, route, void 0);
  
  return (
    <View style={{
      padding: ROATE(16), paddingTop: (StatusBar.currentHeight || iOSHeight) + ROATE(10), flexDirection: "row",
      backgroundColor: "transparent", zIndex: 2, position: "absolute", alignItems: "center"
    }}>
      <Pressable onPress={()=> {navigation.goBack()}}>
        <Icon size={ROATE(28)} name='fanhuianniu-zuo' />
      </Pressable>
      
      <Pressable onPress={() => {gouwucheCallback && gouwucheCallback()}} style={{
        marginLeft: ROATE(207), height: ROATE(28), borderRadius: ROATE(9), width: ROATE(28),
        justifyContent: "center", alignItems: "center", backgroundColor: "rgba(255,255,255,0.5)"
      }}>
        <Icon size={ROATE(21)} name='gouwuche' />
      </Pressable>
      <Pressable onPress={() => {zhuanfaCallback && zhuanfaCallback()}} style={{
        marginLeft: ROATE(16), height: ROATE(28), borderRadius: ROATE(9), width: ROATE(28),
        justifyContent: "center", alignItems: "center", backgroundColor: "rgba(255,255,255,0.5)"
      }}>
        <Icon size={ROATE(21)} name='fenxiang' />
      </Pressable>
      <Pressable onPress={() => {moreCallback && moreCallback()}} style={{
        marginLeft: ROATE(16), height: ROATE(28), borderRadius: ROATE(9), width: ROATE(28),
        justifyContent: "center", alignItems: "center", backgroundColor: "rgba(255,255,255,0.5)"
      }}>
        <Icon size={ROATE(21)} name='gengduohaoyou' />
      </Pressable>
    </View>
  )
}
