import React, { useState } from 'react';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Actionsheet, TextArea } from 'native-base';
import Icon from '../../../iconfont';
import { ROATE } from '../../../assets/size';

export default function CancelActionSheet({isOpen, onClose}) {

    const [selectIndex, setSelectIndex] = useState(-1);
    const [world, setWorld] = useState("");

    const Reason = ({ info, index }: { info: string, index: number }) => {
        const flag = index === selectIndex;
        const changeSelect = () => {
            setSelectIndex(() => index)
        }
        return <View style={{ flexDirection: "row", paddingHorizontal: ROATE(16), marginBottom: ROATE(16), width: ROATE(375), alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ fontSize: ROATE(14), color: "#000000e6", fontWeight: "400" }}>{info}</Text>
            <TouchableOpacity onPress={changeSelect} style={{}}>
                <Icon size={ROATE(24)} name='weixuanzhong' style={{ display: flag ? "none" : "flex" }} />
                <Icon size={ROATE(24)} name='xuanzhong-heise' style={{ display: flag ? "flex" : "none" }} />
            </TouchableOpacity>
        </View>
    }

    return (
        <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
            <Actionsheet.Content h={ROATE(490)}>
                <Text style={{ fontSize: ROATE(16), fontWeight: "500", marginBottom: ROATE(22), marginTop: ROATE(10) }}>
                    订单取消
                </Text>
                <View style={{ flexDirection: "row", marginBottom: ROATE(21), alignItems: "center" }}>
                    <Icon size={ROATE(16)} name='jinshi' />
                    <Text style={{ fontSize: ROATE(12), marginLeft: ROATE(8), color: "#00000073" }}>取消后无法恢复，优惠券，配送次数可退回</Text>
                </View>
                <Text style={{ width: ROATE(375), marginBottom: ROATE(17), paddingHorizontal: ROATE(16) }}>请选择订单取消原因</Text>
                <Reason index={0} info="价格有点贵" />
                <Reason index={1} info="规格/款式/数量选错" />
                <Reason index={2} info="收货地址错误" />
                <Reason index={3} info="暂时不想要了" />
                <Reason index={4} info="其他" />
                <View style={{ width: ROATE(343), marginBottom: ROATE(32), height: ROATE(68) }}>
                    <TextInput onChangeText={(t) => {
                        setWorld(() => t);
                    }} multiline textAlignVertical='top' blurOnSubmit style={{ padding: ROATE(8), width: ROATE(343), height: ROATE(68), borderRadius: ROATE(4), backgroundColor :"#0000000a" }} placeholder="您可以输入您的宝贵意见" />
                    <Text style={{ position: "absolute", color: "#00000073", fontSize: ROATE(12), right: ROATE(6), bottom: ROATE(6) }}>{world.length}/30</Text>
                </View>
                <View style={{ width: ROATE(240), flexDirection: "row", height: ROATE(38), marginBottom: ROATE(44) }}>
                    <Pressable onPress={onClose} style={{ width: ROATE(120), borderTopLeftRadius: ROATE(35), borderBottomLeftRadius: ROATE(35), justifyContent: "center", alignItems: "center", backgroundColor: "#000000e6" }}>
                    <Text style={{ color: "#fff", fontSize: ROATE(14), fontWeight: "500" }}>暂不取消</Text>

                </Pressable>
                    <Pressable onPress={onClose} style={{ width: ROATE(120), borderTopRightRadius: ROATE(35), borderBottomRightRadius: ROATE(35), borderWidth: ROATE(1.2), justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
                        <Text style={{ color: "#000000e6", fontSize: ROATE(14), fontWeight: "500" }}>确定取消</Text>

                    </Pressable>
                </View>

            </Actionsheet.Content>
        </Actionsheet>
    )
}
