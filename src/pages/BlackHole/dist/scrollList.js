"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var size_1 = require("../../assets/size");
function ScrolItem(_a) {
    var _b = _a.title, title = _b === void 0 ? "" : _b, _c = _a.index, index = _c === void 0 ? 0 : _c, _d = _a.length, length = _d === void 0 ? 5 : _d, navigation = _a.navigation, _e = _a.uri, uri = _e === void 0 ? "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" : _e;
    var goPage = react_1.useCallback(function () {
        // 跳转页面带上信息
        navigation.navigate("DynamicDetail", {
            id: Math.random().toString(12).substring(0),
            name: "\u5415\u94ED\u6D32\u7684\u5C0F\u53F7 " + (index + 1),
            title: "Item " + (index + 1),
            content: "最近一直吃饭睡觉打豆豆～，芜湖起飞，最近一直吃饭睡觉打豆豆～，芜湖起飞最近一直吃饭睡觉打豆豆～，芜湖起飞最近一直吃饭睡觉打豆豆～，芜湖起飞最近一直吃饭睡觉打豆豆～，芜湖起飞最近一直吃饭睡觉打豆豆～，芜湖起飞",
            pictures: [{ uri: "http://www.discosoul.com.cn/upload/1650270484598-swai3a.jpg" }]
        });
    }, []);
    return (react_1["default"].createElement(react_native_1.Pressable, { onResponderStart: function (e) {
            console.log(e.nativeEvent.touches[0], 233);
        }, onPress: goPage, style: {
            marginRight: index === length - 1 ? size_1.ROATE(25) : 0,
            backgroundColor: "rgba(255,255,255,0.15)", alignItems: "center", marginLeft: index === 1 ? size_1.ROATE(35) : size_1.ROATE(20),
            width: size_1.ROATE(152), flexDirection: "row", borderRadius: size_1.ROATE(6), height: size_1.ROATE(28)
        } },
        react_1["default"].createElement(react_native_1.Image, { style: { height: size_1.ROATE(22), width: size_1.ROATE(22), margin: size_1.ROATE(3), borderRadius: size_1.ROATE(8) }, source: { uri: uri } }),
        react_1["default"].createElement(react_native_1.Text, { numberOfLines: 1, style: { marginLeft: size_1.ROATE(5), fontSize: size_1.ROATE(12), width: size_1.ROATE(110), color: "rgba(255,255,255,0.9)" } },
            "#\u56FD\u98CE\u9876\u6D41\u65B0\u4E2D\u5F0F",
            title)));
}
function ScrollList(_a) {
    var _b = _a.pl, pl = _b === void 0 ? size_1.ROATE(25) : _b, _c = _a.pr, pr = _c === void 0 ? size_1.ROATE(0) : _c, navigation = _a.navigation, _d = _a.duration, duration = _d === void 0 ? 20000 : _d, _e = _a.ListData, ListData = _e === void 0 ? [] : _e;
    var pan = react_native_1.PanResponder.create({
        onStartShouldSetPanResponder: function (evt, gestureState) { return true; },
        onStartShouldSetPanResponderCapture: function (evt, gestureState) { return true; },
        onMoveShouldSetPanResponder: function (evt, gestureState) { return true; },
        onMoveShouldSetPanResponderCapture: function (evt, gestureState) { return true; },
        onPanResponderGrant: function (evt, gestureState) {
            // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
            console.log(evt, 222);
            // gestureState.{x,y} 现在会被设置为0
        },
        onPanResponderMove: function (evt, gestureState) {
            // 最近一次的移动距离为gestureState.move{X,Y}
            // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
        },
        onPanResponderTerminationRequest: function (evt, gestureState) { return true; },
        onPanResponderRelease: function (evt, gestureState) {
            // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
            // 一般来说这意味着一个手势操作已经成功完成。
        },
        onPanResponderTerminate: function (evt, gestureState) {
            // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
        },
        onShouldBlockNativeResponder: function (evt, gestureState) {
            // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
            // 默认返回true。目前暂时只支持android。
            return true;
        }
    });
    var x = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    var list = [];
    for (var i = 0; i < 5; i++) {
        list.push(react_1["default"].createElement(ScrolItem, { navigation: navigation, title: i + "", key: i }));
    }
    var _f = react_1.useState({}), cycle = _f[0], setCycle = _f[1];
    react_1.useEffect(function () {
        var flag = true;
        flag && react_native_1.Animated.timing(x, {
            toValue: -size_1.ROATE(1100),
            useNativeDriver: true,
            easing: function (value) {
                return value;
            },
            duration: duration
        }).start(function (e) {
            setCycle(function () { return new Object(); });
            x.setValue(0);
        });
        return function () {
            flag = false;
        };
    }, [cycle]);
    return (react_1["default"].createElement(react_native_1.View, { style: {
            width: size_1.ROATE(375), overflow: "hidden",
            marginBottom: size_1.ROATE(8)
        } },
        react_1["default"].createElement(react_native_1.Animated.View, __assign({ style: {
                paddingLeft: pl, paddingRight: pr, flexDirection: "row", width: size_1.ROATE(2250),
                transform: [{ translateX: x }]
            } }, pan.panHandlers),
            list,
            list)));
}
exports["default"] = ScrollList;
