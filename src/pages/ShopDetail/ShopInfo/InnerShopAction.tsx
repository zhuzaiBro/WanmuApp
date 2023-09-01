import React from 'react';
import { Actionsheet } from 'native-base';
import { ROATE } from '../../../assets/size';
import { Pressable, View, Text } from 'react-native';


export default function InnerShopAction({isOpen, onClose, goInnerShop}) {
    return (
        <Actionsheet onClose={onClose} isOpen={isOpen} hideDragIndicator>
            <Actionsheet.Content height={ROATE(160)} w={ROATE(375)} p={0} alignItems="flex-start">
                <Pressable onPress={() => {
                    onClose();
                    goInnerShop()
                    }} style={{ height: ROATE(60), width: ROATE(375), justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ textAlign: "center", fontSize: ROATE(14), color: "#000000e5" }}>店铺详情</Text>
                </Pressable>
                <View style={{ height: ROATE(6), width: ROATE(375), backgroundColor: "#0000000A" }} />
                <Pressable onPress={onClose} style={{ height: ROATE(94), width: ROATE(375),   alignItems: "center" }}>
                    <Text style={{marginTop:ROATE(20), fontSize: ROATE(14), color: "#000000e5"}}>取消</Text>
                </Pressable>
            </Actionsheet.Content>
        </Actionsheet>
    )
}
