import { View } from 'native-base'
import React from 'react'
import { Dimensions, Image, Pressable, StyleSheet, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { ROATE } from '../../assets/size';
import {useGoPage} from '../../utils/RouterHelper';


export default function AboutMeHeader({navigation, route, visible = false}) {

    const goSetting = useGoPage(navigation, route, null, "Setting")

    return (
        <View style={{ paddingTop: ROATE(44), zIndex:0, height: ROATE(88), paddingHorizontal: ROATE(17), flexDirection: "row" }}>
            <Text numberOfLines={1} style={{width: ROATE(170), fontSize: ROATE(16), marginTop: "auto", marginBottom: ROATE(15),
            height: ROATE(22), marginLeft: ROATE(86), fontWeight: "600", display: visible? "flex": "none",
            textAlign: "center"}}>吕粥粥</Text>
            <Pressable style={{...styles.iconWrap, marginLeft: "auto"}}>
                <Image style={styles.icon} source={require("../../assets/pictures/aboutme/zhuanfa.png")} />
            </Pressable>
            <Pressable  style={styles.iconWrap} onPress={goSetting}>
                <Image style={styles.icon} source={require("../../assets/pictures/aboutme/setting.png")} />
            </Pressable>
            <LinearGradient style={{ position: "absolute", left: 0, top: 0,
            zIndex: -1, width: Dimensions.get("screen").width, height: ROATE(88)
            }} useAngle angle={111} colors={["#f3ffe7", "#dbfff6"]} />
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: ROATE(18),
        height: ROATE(18)
    },
    iconWrap: {
        padding: ROATE(10.5),
        marginTop: "auto",
        marginBottom: ROATE(34),
    }
})