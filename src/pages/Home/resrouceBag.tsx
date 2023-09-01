import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { ROATE } from '../../assets/size';
import LinearGradient from 'react-native-linear-gradient';
import PPt from '../../assets/pictures/oneserver/PPt.svg';

export default function resrouceBag() {

    function Box({outColors= ["#959dfe40", "#eff0ff59"], innerColors = ["#929afd", "#f1f2ff"]}) {
        return (
            <View style={{ height: ROATE(106), marginRight: ROATE(13), width: ROATE(106) }}>
                <Image style={styles.img} source={{ uri: "https://profile.csdnimg.cn/B/9/2/3_u010377383" }} />
                <LinearGradient style={{ top: ROATE(10), borderRadius: ROATE(13.95), height: ROATE(96), width: ROATE(96), position: "absolute", zIndex: -1 }}
                    colors={outColors} />
                <LinearGradient colors={innerColors} style={{
                    height: ROATE(56), width: ROATE(56), justifyContent: "center", alignItems: "center",
                    borderRadius: ROATE(12), zIndex: 1, position: "absolute", left: 0, bottom: 0
                }}>
                    <PPt />
                </LinearGradient>
            </View>
        )
    }
    return (
        <View style={{ flexDirection: "row" }}>
            <Box />
            <Box innerColors={["#c7fb87", "#edf8d6"]} outColors={["#c9fc8a40", "#ecf9d340"]}/>
            <Box innerColors={["#fbfe89", "#f8f7d6"]} outColors={["#e2fe574d", "#ffee5440"]}/>
        </View>

    )
}

const styles = StyleSheet.create({
    img: {
        height: ROATE(96),
        width: ROATE(96),
        marginLeft: "auto",
        // marginRight: ROATE(13.2),
        borderRadius: ROATE(13.95)
    },
})