import React, { useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import Good from '../../assets/pictures/blackhole/selectedBg.svg';
import { ROATE } from "../../assets/size";
import Icon from '../../iconfont';


export default function Header({ list = [
    {
        name: "推荐",
        to: ""
    },
    {
        name: "最新",
        to: ""
    },
    {
        name: "关注",
        to: ""
    },
], wrapStyle = {} }) {
    const [currentIndex, setIndex] = useState(0);
    const RnederItem = ({ item, index }) => {
        return (
            <Pressable onPress={() => {
                setIndex(() => index)
            }} style={{ position: "relative", paddingLeft: 0,  overflow: "hidden" }}>
                <Text style={{ ...styles.headerFont, color: "#fff", fontWeight: currentIndex === index ? "700" : "400" }}>
                    {item.name}

                </Text>
                <Good style={{
                    position: "absolute", display: currentIndex === index ? "flex" : "none",
                    left: ROATE(4), top: ROATE(4), zIndex: -1,
                }} />
            </Pressable>

        )
    };
    const List = list.map((it, i) => {
        return (<RnederItem key={i} index={i} item={it} />)
    });

    return (<View style={{
        height: ROATE(44),
        backgroundColor: "#03151f",...wrapStyle
    }}>
        <View style={{
            borderTopRightRadius: ROATE(16), borderTopLeftRadius: ROATE(16),
            height: ROATE(44), flexDirection: "row", alignItems: "center",
            backgroundColor: "#03151f", 
        }}>
            {List}
            <Pressable onPress={() => {
                setIndex(() => 3)
            }} style={{ position: "relative", overflow: "hidden" }}>
                <Text style={{ ...styles.headerFont, color: "#fff", fontWeight: currentIndex === 3 ? "700" : "400" }}>
                    校园

                </Text>
                <Good style={{
                    position: "absolute", display: currentIndex === 3 ? "flex" : "none",
                    left: ROATE(4), top: ROATE(4), zIndex: -1,
                }} />
            </Pressable>
        </View>

    </View>)
}


const styles = StyleSheet.create({
    
    headerFont: {
        fontSize: ROATE(16),
        marginLeft: 0,
        marginRight: ROATE(9),
        padding: ROATE(8),
        paddingLeft: 0
    },
    
})