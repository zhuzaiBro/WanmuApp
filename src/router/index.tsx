import React, { useState } from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs'
export const Tab = createBottomTabNavigator();
export const Stack = createNativeStackNavigator();
import Tabbar from './Tabbar';
import tabList from '../utils/useTabBarNav';
import useHome from './pageManager/home';
import useCommunity from './pageManager/community';
import useShop from './pageManager/shop';
import useMessages from './pageManager/message';
import useMe from './pageManager/me';
import useUserInfo from '../utils/routerGuard';
import { Vibration } from 'react-native';

export default function Router() {
    const userInfo = useUserInfo();
    const [visible, setVisible] = useState(true);
    const [current, setCurrent] = useState(0);
    const defaultListener = {
        state: ({ data }) => {
            if ((data as any).state.index !== 0) {
                setVisible(() => false)
            } else {
                setVisible(() => true)
            }
        }
    } as any;
    return (
        <NavigationContainer  >
            <Tab.Navigator screenOptions={{ unmountOnBlur: false }} tabBar={({ navigation }) => {
                if (visible) { return <Tabbar current={current} setCurrent={setCurrent} nav={navigation} tabList={tabList} /> }
                return <></>
            }} >
                <Tab.Screen name='Home' options={{
                    header: () => <></>, title: "主页"
                }}>
                    {() => (<Stack.Navigator screenOptions={{ animation: "slide_from_right" }} screenListeners={defaultListener}>
                        {useHome()}
                    </Stack.Navigator>)}
                </Tab.Screen>

                <Tab.Screen name='BlackHole' options={{
                    header: () => <></>, title: "社区",
                }}>
                    {() => (<Stack.Navigator screenOptions={{ animation: "slide_from_right" }} screenListeners={defaultListener}>
                        {useCommunity()}
                    </Stack.Navigator>)}
                </Tab.Screen>



                <Tab.Screen name='Shop' options={{
                    header: () => <></>, title: "商城"
                }}>
                    {() => (<Stack.Navigator screenOptions={{ animation: "slide_from_right" }} screenListeners={defaultListener}>
                        {useShop()}
                    </Stack.Navigator>)}
                </Tab.Screen>
                <Tab.Screen name='Message' options={{
                    header: () => <></>, title: "消息"
                }}>
                    {() => (<Stack.Navigator screenOptions={{ animation: "slide_from_right" }} screenListeners={defaultListener}>
                        {useMessages()}
                    </Stack.Navigator>)}
                </Tab.Screen>
                <Tab.Screen name='Me' options={{
                    header: () => <></>, title: "我的"
                }}>
                    {() => (<Stack.Navigator screenOptions={{ animation: "slide_from_right" }} screenListeners={defaultListener}>
                        {useMe()}
                    </Stack.Navigator>)}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}