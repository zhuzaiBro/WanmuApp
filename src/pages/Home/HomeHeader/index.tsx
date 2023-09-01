import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TextInput, ScrollView, Text, StatusBar } from 'react-native';
import { ROATE } from '../../../assets/size';
import store from '../../../store';


export default function HomeHeader({ navigation,iosHeight }) {

    // console.log(StatusBar.setTranslucent())
    const [currentIndex, setCurrentIndex] = useState(0);
    const [scrollItems, setScrollItems] = useState([{}]);
    const list = [{ title: "世界", to: "HomeContainer" }, { title: "视频", to: "Shop2" }, { title: "游戏", to: "Shop2" }];


    useEffect(() => {
        setScrollItems(() => list)
    }, [currentIndex]);


    return (
        <View style={{ backgroundColor: "#1F231D", paddingTop:ROATE(44)}}>
        </View>

    )

}


const styles = StyleSheet.create({
    header: {
        height: 50,
        padding: 6,

    },
    headerItem: {
        margin: 'auto',
        marginEnd: 10,
        padding: 6,
        borderRadius: 6,
        height: 38,
        // lineHeight: 50
    },
    headerFont: {
        fontSize: 16
    },
    active: {
        backgroundColor: "#202020",
        borderRadius: 6
    },
    activeFont: {
        color: "#fff"
    }
})