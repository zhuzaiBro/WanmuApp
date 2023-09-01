"use strict";
exports.__esModule = true;
var react_native_1 = require("@ant-design/react-native");
var native_base_1 = require("native-base");
var react_1 = require("react");
var react_native_2 = require("react-native");
var size_1 = require("../../assets/size");
function InfoBox(_a) {
    var _b = _a.to, to = _b === void 0 ? "" : _b, _c = _a.index, index = _c === void 0 ? 1 : _c, _d = _a.title, title = _d === void 0 ? "商城" : _d, _e = _a.icon, icon = _e === void 0 ? "shop" : _e;
    return (react_1["default"].createElement(react_native_2.View, { style: { alignItems: "center" } },
        react_1["default"].createElement(react_native_2.View, { style: { height: size_1.ROATE(48), width: size_1.ROATE(48), borderRadius: size_1.ROATE(16.5), justifyContent: "center", alignItems: "center", backgroundColor: "#1A1A1A" } },
            react_1["default"].createElement(react_native_1.Icon, { size: size_1.ROATE(32), name: icon, color: '#fff' })),
        react_1["default"].createElement(react_native_2.Text, { style: { fontSize: size_1.ROATE(14), fontWeight: "500", color: "rgba(0,0,0,0.9)", marginTop: size_1.ROATE(8) } }, title)));
}
function MessageComp(_a) {
    var _b, _c;
    var item = _a.item;
    return (react_1["default"].createElement(react_native_2.View, { style: { height: size_1.ROATE(44), width: size_1.ROATE(343), overflow: "hidden", marginBottom: size_1.ROATE(20), paddingHorizontal: size_1.ROATE(16), flexDirection: "row" } },
        react_1["default"].createElement(react_native_2.Image, { style: { width: size_1.ROATE(44), borderRadius: size_1.ROATE(22), marginRight: size_1.ROATE(10), height: size_1.ROATE(44) }, source: { uri: (_b = item === null || item === void 0 ? void 0 : item.from) === null || _b === void 0 ? void 0 : _b.avatar } }),
        react_1["default"].createElement(react_native_2.View, null,
            react_1["default"].createElement(react_native_2.View, { style: { flexDirection: 'row', alignItems: "center" } },
                react_1["default"].createElement(react_native_2.Text, { style: { color: "rgba(0,0,0,0.9)", fontSize: size_1.ROATE(14) } }, (_c = item === null || item === void 0 ? void 0 : item.from) === null || _c === void 0 ? void 0 : _c.user_name),
                react_1["default"].createElement(react_native_2.Text, { style: { marginLeft: "auto", marginRight: size_1.ROATE(16), color: "rgba(0,0,0,0.9)", fontSize: size_1.ROATE(12) } }, item === null || item === void 0 ? void 0 : item.time)),
            react_1["default"].createElement(react_native_2.Text, { style: { fontSize: size_1.ROATE(12), fontWeight: "400", lineHeight: size_1.ROATE(22) } }, item === null || item === void 0 ? void 0 : item.content))));
}
function Messages() {
    var messageList = [{
            from: {
                avatar: "https://profile.csdnimg.cn/8/5/D/3_rongyuliu951080er",
                user_name: "客服"
            },
            time: "2022-6-25",
            content: "在android/app/scr/main/AndroidManifest.xml文件中activity属性上添加：android:screenOrientation=“portrait” 即可"
        },
        {
            from: {
                avatar: "https://profile.csdnimg.cn/8/5/D/3_rongyuliu951080er",
                user_name: "客服"
            },
            time: "2022-6-25",
            content: "在android/app/scr/main/AndroidManifest.xml文件中activity属性上添加：android:screenOrientation=“portrait” 即可"
        }, {
            from: {
                avatar: "https://profile.csdnimg.cn/8/5/D/3_rongyuliu951080er",
                user_name: "客服"
            },
            time: "2022-6-25",
            content: "在android/app/scr/main/AndroidManifest.xml文件中activity属性上添加：android:screenOrientation=“portrait” 即可"
        }, {
            from: {
                avatar: "https://profile.csdnimg.cn/8/5/D/3_rongyuliu951080er",
                user_name: "客服"
            },
            time: "2022-6-25",
            content: "在android/app/scr/main/AndroidManifest.xml文件中activity属性上添加：android:screenOrientation=“portrait” 即可"
        }, {
            from: {
                avatar: "https://profile.csdnimg.cn/8/5/D/3_rongyuliu951080er",
                user_name: "客服"
            },
            time: "2022-6-25",
            content: "在android/app/scr/main/AndroidManifest.xml文件中activity属性上添加：android:screenOrientation=“portrait” 即可"
        }, {
            from: {
                avatar: "https://profile.csdnimg.cn/8/5/D/3_rongyuliu951080er",
                user_name: "客服"
            },
            time: "2022-6-25",
            content: "在android/app/scr/main/AndroidManifest.xml文件中activity属性上添加：android:screenOrientation=“portrait” 即可"
        }];
    var messages = messageList.map(function (it, index) { return react_1["default"].createElement(MessageComp, { key: index, item: it }); });
    return (react_1["default"].createElement(react_native_2.View, null,
        react_1["default"].createElement(react_native_2.View, { style: {
                marginTop: size_1.ROATE(77), flexDirection: "row", justifyContent: "space-between",
                marginBottom: size_1.ROATE(25), paddingHorizontal: size_1.ROATE(44)
            } },
            react_1["default"].createElement(InfoBox, { title: '\u5546\u57CE\u901A\u77E5' }),
            react_1["default"].createElement(InfoBox, { title: '\u8D5E\u548C\u6536\u85CF', icon: 'like' }),
            react_1["default"].createElement(InfoBox, { title: '\u8BC4\u8BBA\u548C@', icon: 'info' })),
        react_1["default"].createElement(native_base_1.ScrollView, null, messages)));
}
exports["default"] = Messages;
