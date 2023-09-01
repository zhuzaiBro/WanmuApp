import React, { useContext, useState } from 'react';
import { Gctx } from '../../context'
import { useGetIOSStatusBarHeight } from "../../hooks/useGetIOSStatusBarHeight";
import { TabObj } from "../TabScreen";
import { StatusBar, View } from "react-native";
import TabNavigator from "../TabScreenList";
import { ROATE } from "../../assets/size";
import DynamicDetailHeader from '../../pages/DynamicDetail/DynamicDetailHeader';
import DynamicDetail from '../../pages/DynamicDetail';
import Setting from '../../pages/Setting';
import Me from '../../pages/AboutMe';
import MemberCenter from '../../pages/MemberCenter';
import MemberCenterHeader from '../../pages/MemberCenter/MemberCenterHeader';
import FollowsAndFans from '../../pages/AboutMe/FollowsAndFans';

export default function Router() {
    const ctx = useContext(Gctx);
    const iOSHeight = useGetIOSStatusBarHeight();



    const mePages: TabObj[] = [
        {
            comp: Me,
            name: "Index",
            listeners: {
                focus: () => { ctx.setStatusBarColor(() => "dark-content") },
            },
            options: {
                title: '我的',
                animation: "none",

                header: () => <></>,
            }
        }, {
            name: "DynamicDetail",
            comp: DynamicDetail,
            options: {
                title: '收藏',
                header: ({ navigation, route }) => <DynamicDetailHeader navigation={navigation} route={route} />,
            }
        }, {
            comp: Setting,
            name: "Setting",
            options: {
                title: '设置',
                header: ({ navigation, route }) => <View style={{
                    paddingTop: ((StatusBar.currentHeight as number) || iOSHeight) + ROATE(11),
                    backgroundColor: "#202020", zIndex: -1
                }}></View>,
            }
        },  {
            comp: MemberCenter,
            name: "MemberCenter",
            listeners: {
                focus: () => { ctx.setStatusBarColor(() => "light-content") },
                blur: () => { ctx.setStatusBarColor(() => "dark-content") }
            },
            options: {
                title: '会员中心',
                header: ({ navigation, route }) => <MemberCenterHeader navigation={navigation} route={route} />,
            }
        }, {
            comp: FollowsAndFans,
            name: "FollowsAndFans",
            options: {
                header: ()=> <></>
            }
        }
    ]


    return (
        TabNavigator(mePages as TabObj[])
    )
}
