import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { Animated, Text, StatusBar } from "react-native";
import { ROATE } from "../../assets/size";
import { userStatus } from "../../utils";
import {useBackTo} from '../../utils/RouterHelper';

export default function LoginHeader({ navigation, route, iOSHeight } : {navigation: BottomTabNavigationProp<ParamListBase, string, undefined>, route: any, iOSHeight:number}) {
    let goback  =useBackTo(navigation, route, null);
    useEffect(() => {
        // if((route.params as any).status == userStatus.UN_LOGIN) {
        //     goback = () => {
        //         navigation.navigate("Home");
        //     }
        // }
    }, [])
    return (
        <Animated.View style={{ paddingTop: StatusBar.currentHeight || iOSHeight, zIndex: 2, position: "absolute", 
        flexDirection: 'row', justifyContent: 'space-between', padding: ROATE(8) }}>
            <Text onPress={goback} style={{ color: "#fff", margin: ROATE(8), marginLeft: ROATE(20) }}>返回</Text>
        </Animated.View>
    )
}