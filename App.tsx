/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState, useRef } from 'react';
import { Animated, Platform, StatusBar, } from 'react-native';
import Router from './src/router';
import store from './src/store';
import { loadString } from './src/utils';
import { getLoginType } from './src/store/user/actionFuncs';
import { NativeBaseProvider } from 'native-base';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import { simpleUpdate, checkUpdate } from 'react-native-update';
import _updateConfig from './update.json';
import { Gctx } from './src/context';
const { appKey } = _updateConfig[Platform.OS];
import useAddr from './src/hooks/useAddr';
import Goeasy from 'goeasy';
import { Provider } from 'react-redux';
import pos from './src/hooks/usePosition';
PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log("TOKEN:", token);
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    console.log("ACTION:", notification.action);
    console.log("NOTIFICATION:", notification);

    // process the action
  },

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function (err) {
    console.error(err.message, err);
  },

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */
  requestPermissions: false,
});

const g = Goeasy.getInstance({
  appkey: "BC-ea5370a8b2b5493e96e67fee0a5c6b20",
  host: "hangzhou.goeasy.io",
  modules: ['pubsub', 'im'],
  allowNotification: true,
  supportOldBrowser: false,
  forceTLS: false
})
const App = () => {
  let x = useRef(new Animated.Value(0)).current;
  let y = useRef(new Animated.Value(1)).current;
  const [statusBarColor, setStatusBarColor] = useState("dark-content") as any;
  const [statusBarBg, setStatusBarBg] = useState("transparent") as any;
  let goHome;
  const { add_addr, addr, delete_addr, edit_addr, setDefault } = useAddr();
  useEffect(() => {
    // 从本地获取存储的token
    loadString("token").then((r) => {
      fetch("http://www.discosoul.com.cn:8009/api/user/whoAmI", {
        headers: {
          "authorization": r
        } as HeadersInit
      }).then(r => r.json())
        .then(res => {
          store.dispatch(getLoginType(res.data));
        })
    });


    g.connect({
      id: "001", //pubsub选填，im必填，最大长度60字符
      data: { "avatar": "/www/xxx.png", "nickname": "Neo" }, //必须是一个对象，pubsub选填，im必填，最大长度300字符，用于上下线提醒和查询在线用户列表时，扩展更多的属性
      onSuccess: function () {  //连接成功
        console.log("GoEasy connect successfully.") //连接成功
      },
      onFailed: function (error) { //连接失败
        console.log("Failed to connect GoEasy, code:" + error.code + ",error:" + error.content);
      },
      onProgress: function (attempts) { //连接或自动重连中
        console.log("GoEasy is connecting", attempts);
      }
    });

    return () => {
      //断开连接
      g.disconnect({
        onSuccess: function () {
          console.log("GoEasy disconnect successfully.")
        },
        onFailed: function (error) {
          console.log("Failed to disconnect GoEasy, code:" + error.code + ",error:" + error.content);
        }
      });


    }
  }, []);

  return (

    <Provider store={store}>
      <Gctx.Provider value={{ add_addr, addr, delete_addr, edit_addr, setDefault, setStatusBarColor, x, y, setStatusBarBg }} >
        <NativeBaseProvider>
          <StatusBar barStyle={statusBarColor} backgroundColor={statusBarBg} translucent />
          <Router />

        </NativeBaseProvider>

      </Gctx.Provider>

    </Provider>


  );
};

export default (simpleUpdate as any)(App, { appKey });