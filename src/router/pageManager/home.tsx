import Home from "../../pages/Home";
import HomeHeader from "../../pages/Home/HomeHeader";
import React, { useContext, useState } from 'react';
import { Gctx } from '../../context'
import { useGetIOSStatusBarHeight } from "../../hooks/useGetIOSStatusBarHeight";
import { TabObj } from "../TabScreen";
import { View } from "react-native";
import TabNavigator from "../TabScreenList";
import { ROATE } from "../../assets/size";

export default function Router() {
    const ctx = useContext(Gctx);
    const iOSHeight = useGetIOSStatusBarHeight();

    const homePagers: TabObj[] = [
        {
            comp: Home,
            name: "Index",
            listeners: {
                focus: () => { ctx.setStatusBarColor(() => "light-content") },
                blur: () => { ctx.setStatusBarColor(() => "dark-content") }
            },
            options: {
                title: '首页',
                animation: "none",
                header: ({navigation}) => <HomeHeader iosHeight={ROATE(44)} navigation={navigation}/>,
            }
        }
    ]

    return (
        TabNavigator(homePagers as TabObj[])
    )
}
