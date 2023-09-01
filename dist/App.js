"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
exports.__esModule = true;
exports.visibalCtx = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var router_1 = require("./src/router");
var store_1 = require("./src/store");
var utils_1 = require("./src/utils");
var actionFuncs_1 = require("./src/store/actionFuncs");
require("./src/server/socket");
var native_base_1 = require("native-base");
var push_notification_ios_1 = require("@react-native-community/push-notification-ios");
var react_native_push_notification_1 = require("react-native-push-notification");
react_native_push_notification_1["default"].configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
        console.log("TOKEN:", token);
    },
    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
        // process the notification
        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(push_notification_ios_1["default"].FetchResult.NoData);
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
        sound: true
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
    requestPermissions: false
});
exports.visibalCtx = react_1["default"].createContext({
    statusBarColor: "dark-content"
});
var App = function () {
    var _a = react_1.useState("dark-content"), statusBarColor = _a[0], setStatusBarColor = _a[1];
    var _b = react_1.useState("transparent"), statusBarBg = _b[0], setStatusBarBg = _b[1];
    react_1.useEffect(function () {
        // 从本地获取存储的token
        utils_1.loadString("token").then(function (r) {
            fetch("http://www.discosoul.com.cn:8009/api/user/whoAmI", {
                headers: {
                    "authorization": r
                }
            }).then(function (r) { return r.json(); })
                .then(function (res) {
                store_1["default"].dispatch(actionFuncs_1.getLoginType(res.data));
            });
        });
    }, []);
    return (react_1["default"].createElement(exports.visibalCtx.Provider, { value: { setStatusBarColor: setStatusBarColor } },
        react_1["default"].createElement(native_base_1.NativeBaseProvider, null,
            react_1["default"].createElement(react_native_1.StatusBar, { barStyle: statusBarColor, backgroundColor: statusBarBg, translucent: true }),
            react_1["default"].createElement(router_1["default"], null))));
};
exports["default"] = App;
