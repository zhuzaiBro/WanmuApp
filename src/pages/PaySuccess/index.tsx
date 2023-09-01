import React from 'react';
import { Dimensions, View, Text, Pressable } from 'react-native';
import { ROATE } from '../../assets/size';
import Icon from '../../iconfont';


export default function PaySuccess({navigation, route}) {
  return (
     <View style={{height: Dimensions.get("screen").height, paddingTop: ROATE(44), alignItems: "center"}}>
      <View style={{ width: ROATE(375), paddingHorizontal: ROATE(12), paddingTop: ROATE(10)}}>
        <Pressable onPress={() => {
          navigation.navigate("Index");
        }}>
          <Icon size={ROATE(24)} name='fanhuianniu-zuo'/>
        </Pressable>
      </View>
        <View style={{marginLeft: "auto", marginRight: "auto", marginTop: ROATE(120), alignItems:"center", width: ROATE(46), height: ROATE(46), borderRadius: ROATE(23)
      , justifyContent: "center"}}>
          <Icon size={ROATE(88)} style={{zIndex: 2}} color='#000' name='chengong'/>
        </View>
        <Text style={{marginTop: ROATE(25), fontSize: ROATE(15)}}>付款成功</Text>
        <Text style={{fontSize: ROATE(22), fontWeight: "600", marginTop: ROATE(25)}}>¥{route.params.allPrice}.00</Text>
        <Pressable style={{flexDirection: "row", alignItems: "center", marginTop: ROATE(13)}}>
          <Text style={{fontSize:ROATE(14), color: "#0000005e"}}>查看货物进程</Text>
          <Icon color='#0000005e' size={ROATE(16)} name='fanhuianniu'/>
        </Pressable>
        <Pressable onPress={()=> {
          navigation.navigate("BuyingStatus");
        }} style={{width: ROATE(134), height: ROATE(43.6), backgroundColor: "#d9d9d9",
      justifyContent:"center", alignItems:"center", borderRadius: ROATE(12), marginTop: ROATE(151)}}>
          <Text style={{fontSize: ROATE(15), color: "#000"}}>完成</Text>
        </Pressable>
     </View>
  )
}
