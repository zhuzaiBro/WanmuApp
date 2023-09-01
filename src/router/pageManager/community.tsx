import { Icon } from '@ant-design/react-native';
import React, { useContext } from 'react'
import { StatusBar, Text, View } from 'react-native';
import { Gctx } from '../../context';
import { ROATE } from '../../assets/size';
import { useGetIOSStatusBarHeight } from '../../hooks/useGetIOSStatusBarHeight';
import BlackHole from '../../pages/BlackHole';
import CheckPictures from '../../pages/CheckPictures';
import DynamicDetail from '../../pages/DynamicDetail';
import DynamicDetailHeader from '../../pages/DynamicDetail/DynamicDetailHeader';
import Login from '../../pages/Login';
import LoginHeader from '../../pages/Login/LoginHeader';
import MemberCenter from '../../pages/MemberCenter';
import MemberCenterHeader from '../../pages/MemberCenter/MemberCenterHeader';
import Release from '../../pages/Release';
import SearchCode from '../../pages/SearchCode';
import { TabObj } from '../TabScreen';
import TabNavigator from '../TabScreenList';
import OtherUserPage from '../../pages/BlackHole/OtherUserPage';
import Chat from '../../pages/Chat';
import ChatHeader from '../../pages/Chat/ChatHeader';
import TakePicture from '../../pages/Release/TakePicture';
import SearchLoaction from '../../pages/Release/SearchLocation';
import ImgDetail from '../../pages/CheckPictures/ImgDetail';

export default function community() {
    const ctx = useContext(Gctx) as any;
    const iOSHeight = useGetIOSStatusBarHeight();

     
    const communityPages: TabObj[] = [
        {
            name: "Index",
            comp: BlackHole,
            listeners: {
                focus: () => { ctx.setStatusBarColor(() => "light-content") },
                blur: () => { ctx.setStatusBarColor(() => "dark-content") }
            },
            options: {
                title: '社区',
                animation: "none",
                header: () => <></>,
            }
        },  {
            comp: SearchCode,
            name: "SearchCode",
            options: {
                title: '扫码',
                header: ({ navigation, route }) => <LoginHeader route={route} iOSHeight={iOSHeight} navigation={navigation as any} />,
            }
        },{
            comp: Login,
            name: "Login",
            listeners: {
                focus: () => { ctx.setStatusBarColor(() => "light-content") },
                blur: () => { ctx.setStatusBarColor(() => "dark-content") }
            },
            options: {
                title: '登录',
                header: ({ navigation, route }) => <LoginHeader route={route} iOSHeight={iOSHeight} navigation={navigation as any} />,
            },

        }, {
            comp: Release,
            name: "Release",
            options: {
                title: '扫码',
                header: ({ navigation, route }) => <LoginHeader route={route} iOSHeight={iOSHeight} navigation={navigation as any} />,
            }
        }, {
            name: "Picker",
            comp: CheckPictures,
            options: {
                header: () => <></>
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
        }, {
            name: "DynamicDetail",
            comp: DynamicDetail,
            options: {
                title: '收藏',
                header: ({ navigation, route }) => <DynamicDetailHeader navigation={navigation} route={route} />,
            }
        }, {
            comp: OtherUserPage,
            name: "OtherUserPage",
            options: {
                header: ()=> <></>
            }
        }, {
            comp: Chat,
            name: "Chat",
            options: {
                header: ()=><></>
            }
        }, {
            comp: TakePicture,
            name: "TakePicture",
            options: {
                header: () => <></>
            }
        }, {
            comp: SearchLoaction,
            name: "SearchLocation",
            options: {
                header: ()=> <></>
            }
        }, {
            comp: ImgDetail,
            name: "ImgDetail",
            options: {
                header: ()=> <></>
            }
        }
    ];
  return (
     TabNavigator(communityPages)
  )
}
