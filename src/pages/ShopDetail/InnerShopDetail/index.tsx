import React from 'react'
import { Pressable, StyleSheet, View, Text, Image } from 'react-native'
import { ROATE, ScreenHeight } from '../../../assets/size';
import Icon from '../../../iconfont';

export default function InnerShopDetail({ navigation, route }) {
    return (
        <View style={sytles.container}>
            <View style={sytles.header}>
                <Pressable onPress={() => {navigation.goBack()}} style={{ zIndex: 2, left: ROATE(16), position: "absolute",  }}>
                    <Icon size={ROATE(24)} name='fanhuianniu-zuo' />
                </Pressable>
                <Text style={{ fontSize: ROATE(16), fontWeight: "500", }}>店铺详情</Text>
            </View>
            <Text style={{ marginTop: ROATE(24), marginHorizontal: ROATE(16), marginBottom: ROATE(8), fontSize: ROATE(14), fontWeight: "500" }}>店铺信息</Text>
            <View style={{ height: ROATE(130), paddingHorizontal: ROATE(12), paddingVertical: ROATE(23), marginHorizontal: ROATE(16), borderRadius: ROATE(8), backgroundColor: "#fff" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image style={{ height: ROATE(40), width: ROATE(40), borderRadius: ROATE(20) }} source={{ uri: "http://www.zhuzaibrother.cn/static/upload/2022-2-13-20-5-43-381-27feb.jpg" }} />
                    <Text style={{ fontSize: ROATE(16), fontWeight: "500", marginLeft: ROATE(8) }}>青氪自营店</Text>
                </View>
                <Pressable style={{ width: ROATE(271), marginTop: ROATE(8), borderRadius: ROATE(4), marginLeft: "auto", height: ROATE(32), flexDirection: "row", alignItems: "center", paddingHorizontal: ROATE(8), paddingVertical: ROATE(7), backgroundColor: "#0000000a" }}>
                    <Text style={{ fontSize: ROATE(12), color: "#000000e5" }}>
                        关联账号：青氪官方平台
                    </Text>
                    <Icon size={ROATE(14)} style={{ marginLeft: "auto" }} name='fanhuianniu' />
                </Pressable>
            </View>
            <Text style={{ marginTop: ROATE(24), marginBottom: ROATE(5), marginHorizontal: ROATE(16), fontSize: ROATE(14), fontWeight: "500" }}>
                店铺简介
            </Text>

            <View style={{ height: ROATE(130), paddingHorizontal: ROATE(12), paddingVertical: ROATE(11), marginHorizontal: ROATE(16), borderRadius: ROATE(8), backgroundColor: "#fff" }}>

                <Text style={{ fontSize: ROATE(12), fontWeight: "400",color: "#00000072" }}>青氪自营业务覆盖了学生起居生活、学生学习用品，细致坚果、肉脯、果干、膨化食品啊dasd</Text>
            </View>
        </View>
    )
}

const sytles = StyleSheet.create({
    container: {
        backgroundColor: "#0000000A",
        height: ScreenHeight
    },
    header: {
        marginTop: ROATE(44),
        justifyContent: "center",
        alignItems: "center"
    }
})