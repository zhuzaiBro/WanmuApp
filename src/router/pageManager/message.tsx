import React, { useContext, useState } from 'react';
import { Gctx } from '../../context'
import { useGetIOSStatusBarHeight } from "../../hooks/useGetIOSStatusBarHeight";
import { TabObj } from "../TabScreen";
import { StatusBar, Text, View } from "react-native";
import TabNavigator from "../TabScreenList";
import { ROATE } from "../../assets/size";
import { Icon } from "@ant-design/react-native";
import CheckPictures from "../../pages/CheckPictures";
import ShopDetail from "../../pages/ShopDetail";
import MemberCenterHeader from "../../pages/MemberCenter/MemberCenterHeader";
import MemberCenter from "../../pages/MemberCenter";
import SearchCode from "../../pages/SearchCode";
import LoginHeader from "../../pages/Login/LoginHeader";
import Login from "../../pages/Login";
import Messages from "../../pages/Messages";
import Chat from "../../pages/Chat";
import ShopDetailHdeader from '../../pages/ShopDetail/ShopDetailHeader'

export default function Router() {
    const ctx = useContext(Gctx);
    const iOSHeight = useGetIOSStatusBarHeight();

    
    const messageList: TabObj[] = [
        {
            comp: Messages,
            name: "Index",
            options: {
                title: '消息',
                animation: "none",
                header: () => <></>,
            }
        },{
            comp: Chat,
            name: "Chat",
            options: {
                title: '聊天',
                header: () => <></>,
            }
        },
        {
            comp: Login,
            name: "Login",
            listeners: {
                focus: () => { ctx.setStatusBarColor(() => "light-content") },
                blur: () => { ctx.setStatusBarColor(() => "dark-content") }
            },
            options: {
                title: '登录',
                header: ({ navigation, route }) => <LoginHeader route={route} iOSHeight={iOSHeight} navigation={navigation as any} />, animation: "slide_from_bottom"
            },

        },   {
            comp: SearchCode,
            name: "SearchCode",
            options: {
                title: '扫码',
                header: ({ navigation, route }) => <LoginHeader route={route} iOSHeight={iOSHeight} navigation={navigation as any} />,
            }
        }, {
            comp: MemberCenter,
            name: "MemberCenter",
            listeners: {
                focus: () => { ctx.setStatusBarColor(() => "light-content") },
                blur: () => { ctx.setStatusBarColor(() => "dark-content") }
            },
            options: {
                title: '会员中心',
                header: ({ navigation, route }) => <MemberCenterHeader navigation={navigation}
                    route={route} />,
            }
        },  {
            comp: ShopDetail,
            name: "ShopDetail",
            options: {
                title: '商品详情',
                header: ({ navigation }) => <ShopDetailHdeader iOSHeight={iOSHeight} navigation={navigation} />,
            }
        }, {
            name: "Picker",
            comp: CheckPictures,
            options: {
                header: ({ navigation, route }) => {
                    return (<View style={{
                        backgroundColor: "#4D4D4D", flexDirection: "row", justifyContent: "space-between",
                        padding: 18, paddingTop: ((StatusBar.currentHeight as number) || iOSHeight) + ROATE(10)
                    }}>
                        <Icon onPress={() => navigation.goBack()} color='#FFFFFF' size={ROATE(18)} name='arrow-left' />
                        <Text onPress={() => navigation.goBack()} style={{ fontSize: ROATE(14), color: "#FFFFFF" }}>确定</Text>
                    </View>)
                },
            }
        },

    ];
    return (
        TabNavigator(messageList as TabObj[])
    )
}
