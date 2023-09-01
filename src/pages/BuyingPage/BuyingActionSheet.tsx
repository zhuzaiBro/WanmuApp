import React, { useState } from 'react';
import {Actionsheet, Box, Checkbox, Radio,Modal} from 'native-base';
import { ROATE } from '../../assets/size';
import { Icon } from '@ant-design/react-native';
import { Dimensions,StyleSheet,Text, View,  } from 'react-native';


export default function BuyingActionSheet({ price = 10, isOpen, onClose, navigation,setModalVisible,  setPwdVisible }) {


  return (
    <Actionsheet hideDragIndicator isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content style={{backgroundColor:"#fff", height: ROATE(447)}}  >
            <Box style={{width: Dimensions.get("screen").width,  paddingHorizontal: ROATE(16)}}>
                <Icon onPress={()=>setModalVisible(prev=>!prev)}
                style={{padding: ROATE(5), marginTop :ROATE(21),  marginBottom :ROATE(18)}} color="#202020" name='node-index'/>
                <Text style={{textAlign:'center',marginBottom :ROATE(28), fontSize: ROATE(32), fontWeight:"600", color: "rgba(0,0,0,0.95)"}}>￥{price}</Text>
                <Text style={{marginBottom: ROATE(20), fontSize: ROATE(14), fontWeight:"400"}}>支付方式</Text>
                <View style={styles.payMetod}>
                    <Text style={styles.f14w5}>余额</Text>
                    <Checkbox onChange={()=> {
                        setPwdVisible(prev => !prev)
                    }} value='yue'/>
                </View>
                <View style={styles.payMetod}>
                    <Text style={styles.f14w5}>银行卡</Text>
                    <Checkbox style={{}} onChange={()=> {
                        setPwdVisible(prev => !prev)
                    }} value='yue'/>
                </View>
                <View style={styles.payMetod}>
                    <Text style={styles.f14w5}>微信</Text>
                    <Checkbox onChange={()=> {
                        setPwdVisible(prev => !prev)
                    }} value='yue'/>
                </View>
                <View style={{width: ROATE(343), height: ROATE(44), backgroundColor: "#f5f5f5", borderRadius: ROATE(8),
                flexDirection: "row", marginLeft: "auto", justifyContent: "center", alignItems:"center", marginRight: "auto"}}>
                     <Icon size={ROATE(16)} name='warning' color="#EFD370"/>
                     <Text style={{ marginLeft: ROATE(8) ,fontSize: ROATE(14),fontWeight: "400"}}>注意：需使用余额，才能享受会员福利！</Text>
                </View>
            </Box>
        </Actionsheet.Content>
    </Actionsheet>
  )
}

const styles = StyleSheet.create({
    payMetod: {
        flexDirection:"row",
        alignItems: "center",
        marginBottom:ROATE(20),
        justifyContent: "space-between",
    },
    f14w5: {
        fontSize: ROATE(14),
        fontWeight: "500",
        color: "rgba(0,0,0,0.9)"
    }
})