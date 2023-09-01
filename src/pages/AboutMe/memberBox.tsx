import { ScrollView } from 'native-base';
import React from 'react'
import { StyleSheet, View, Text, Pressable, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { ROATE } from '../../assets/size';
import { useGoPage } from '../../utils/RouterHelper';

export default function MemberBox({ userInfo, navigation, route }) {
    const goMemberCenter = useGoPage(navigation, route, userInfo, "MemberCenter")

    const MemberBox = ({ color = "#00000073",
        children = <Text style={{ color: "#00000073", fontSize: ROATE(16), lineHeight: ROATE(22), fontWeight: "600" }}>
            600.00
        </Text> }) => {
        return (
            <Pressable style={{
                width: ROATE(75), marginRight: ROATE(8),
                alignItems: "center", height: ROATE(72), paddingTop: ROATE(15), paddingBottom: ROATE(12), borderRadius: ROATE(8), backgroundColor: "#fff"
            }}>
                {children}
                <Pressable style={{ flexDirection: "row", alignItems: "center", marginTop: "auto", }}>
                    <Text style={{ fontSize: ROATE(12), color }}>开通余额</Text>
                    <Image style={styles.icon} source={require("../../assets/pictures/aboutme/to.png")} />
                </Pressable>

            </Pressable>
        )
    }


    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: "center", }}>
                <Text style={{ fontSize: ROATE(16), color: "#000000e6", fontWeight: "600" }}>
                    LV1/小青客
                </Text>
                <Pressable style={{ marginLeft: "auto", alignItems: "center", flexDirection: "row" }} onPress={goMemberCenter}>
                    <Text style={{ fontSize: ROATE(12), color: "#00000073" }}>青氪中心</Text>
                    <Image style={{ width: ROATE(14), height: ROATE(14) }} source={require("../../assets/pictures/aboutme/to.png")} />
                </Pressable>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: ROATE(10.67), justifyContent: "space-between" }}>
                <Text style={{ fontSize: ROATE(12), color: "#000000b3" }}>会员特权</Text>
                <Pressable>
                    <Text style={{ color: "#566a17", fontSize: ROATE(11.33) }}>立即开通青氪会员</Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: "row", marginTop: ROATE(11), marginRight: ROATE(8) }}>
                <MemberBox color='#000000e6' />
                <MemberBox>
                    <Text style={{ fontSize: ROATE(16), color: "#000000e6" }}>12</Text>
                </MemberBox>
                <MemberBox>
                    <Text style={{ fontSize: ROATE(16), color: "#000000e6", fontWeight: "600" }}>无限</Text>
                </MemberBox>
                <MemberBox>
                    <View>
                        <Image resizeMode='stretch' style={{
                            width: ROATE(31), position: "absolute",
                            left: ROATE(-14), top: ROATE(0), height: ROATE(31)
                        }} source={require("../../assets/pictures/aboutme/badge.png")} />
                    </View>
                </MemberBox>
            </View>
            <View style={{
                height: ROATE(4), position: "relative", borderRadius: ROATE(43),
                width: ROATE(323), backgroundColor: "#fff", marginTop: ROATE(18)
            }}>
                <LinearGradient style={{ position: "absolute", borderRadius: ROATE(43), left: 0, top: 0, height: ROATE(4), width: ROATE(80), }} useAngle angle={270} colors={["#cde5ff", "#d6fff2", "#e7ffd7", "#e5ffd4"]} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: ROATE(4) }}>
                <Text style={styles.font}>LV.1</Text>
                <Text style={styles.font}>LV.2</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: ROATE(200),
        width: ROATE(343),
        paddingHorizontal: ROATE(10),
        paddingVertical: ROATE(12),
        borderRadius: ROATE(12),
        backgroundColor: "#f6f7fb"
    },
    icon: {
        height: ROATE(14),
        width: ROATE(14)
    },
    font: {
        fontSize: ROATE(12),
        color: "#00000073",
        lineHeight: 12,
        fontWeight: "400"
    }
})