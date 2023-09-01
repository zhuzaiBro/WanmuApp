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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
require("../../server/socket");
var StatusBarManager = react_native_1.NativeModules.StatusBarManager;
// console.log(StatusBarManager);
var store_1 = require("../../store");
var socket_1 = require("../../server/socket");
var Audio_1 = require("../../components/Audio");
var native_base_1 = require("native-base");
var react_native_sound_1 = require("react-native-sound");
function Chat() {
    var user_info = store_1["default"].getState();
    var _a = react_1.useState([]), chatInfo = _a[0], setChatInfo = _a[1];
    var content = "";
    var _b = react_1.useState(""), text = _b[0], setText = _b[1];
    var _c = react_1.useState(react_native_1.Dimensions.get("screen").height - 58), frameHeight = _c[0], setFrameHeight = _c[1];
    var _d = react_1.useState(null), status = _d[0], setStatus = _d[1];
    react_1.useEffect(function () {
        socket_1["default"].on("msg", function (chunk) {
            setChatInfo(function (prev) { return __spreadArrays(prev, [
                {
                    user_id: chunk.id || 0,
                    content: chunk,
                    user_name: "玩目机器人",
                    avatar: null
                }
            ]); });
        });
        // voiceRecoder.getResult();
    }, []);
    react_1.useEffect(function () {
        if (!status)
            return;
    }, [status]);
    var edit = react_1.useCallback(function (text) {
        setText(function () { return text; });
        content = text;
    }, []);
    var send_message = react_1.useCallback(function () {
        if (!content)
            return;
        try {
            setChatInfo(function (prev) { return __spreadArrays(prev, [
                {
                    user_id: user_info.id,
                    content: content,
                    user_name: user_info.nickname,
                    avatar: user_info.avatar
                }
            ]); });
            // console.log(chatInfo);
            socket_1["default"].emit("data", {
                user_id: user_info.id,
                content: content,
                user_name: user_info.nickname,
                avatar: user_info.avatar
            });
            setText(function () { return ""; });
        }
        catch (e) {
            console.log(e);
        }
    }, []);
    function MessageList(_a) {
        var chatInfo = _a.chatInfo;
        return react_1["default"].createElement(react_1["default"].Fragment, null, chatInfo.map(function (item) {
            if (item.type === "audio") {
                console.log(item.audioPath);
                var play = react_1.useCallback(function () {
                    var s = new react_native_sound_1["default"](item.audioPath, '', function (err) {
                        if (err) {
                            console.log('加载音频失败');
                            return console.warn(err);
                        }
                        s.play(function (success) {
                            if (success) {
                                console.warn('success - 播放成功');
                                console.log('播放完毕');
                            }
                            else {
                                console.warn('fail - 播放失败');
                                console.log('播放失败');
                            }
                        });
                    });
                }, []);
                return (react_1["default"].createElement(react_native_1.View, { key: Math.random().toString(36).slice(2, 4), style: { flexDirection: user_info.id === item.user_id ? "row-reverse" : "row" } },
                    react_1["default"].createElement(react_native_1.Image, { style: styles.avatar, source: { uri: item.avatar || "https://img-blog.csdnimg.cn/20201014180756754.png?x-oss-process=image/resize,m_fixed,h_64,w_64" } }),
                    react_1["default"].createElement(react_native_1.View, { style: { marginLeft: 12 } },
                        react_1["default"].createElement(react_native_1.Text, null, item.user_name || "玩目机器人"),
                        react_1["default"].createElement(react_native_1.View, { style: { backgroundColor: "#f5f5aa", margin: 10, maxWidth: 280, padding: 8, borderRadius: 8, alignItems: "center" } },
                            react_1["default"].createElement(react_native_1.View, { style: { height: 12, width: 12, position: "absolute", top: 12, right: -6, transform: [{ rotate: "45deg" }], backgroundColor: "#f5f5aa" } }),
                            react_1["default"].createElement(react_native_1.Text, { onPress: play },
                                "\u8BED\u97F3\u6D88\u606F ", item === null || item === void 0 ? void 0 :
                                item.currentTime,
                                " s"),
                            react_1["default"].createElement(native_base_1.Progress, { mb: 4, value: 75 }),
                            react_1["default"].createElement(native_base_1.Progress, { bg: "coolGray.100", _filledTrack: {
                                    bg: "lime.500"
                                }, value: 75, mx: "4" })))));
            }
            return (react_1["default"].createElement(react_native_1.View, { key: item.content + item.user_id + Math.random(), style: { flexDirection: user_info.id === item.user_id ? "row-reverse" : "row" } },
                react_1["default"].createElement(react_native_1.Image, { style: styles.avatar, source: { uri: item.avatar || "https://img-blog.csdnimg.cn/20201014180756754.png?x-oss-process=image/resize,m_fixed,h_64,w_64" } }),
                react_1["default"].createElement(react_native_1.View, { style: { marginLeft: 12 } },
                    react_1["default"].createElement(react_native_1.Text, null, item.user_name || "玩目机器人"),
                    react_1["default"].createElement(react_native_1.View, { style: { backgroundColor: "#f5f5aa", margin: 10, maxWidth: 280, padding: 8, borderRadius: 8, alignItems: "center" } },
                        react_1["default"].createElement(react_native_1.View, { style: { height: 12, width: 12, position: "absolute", top: 12, right: -6, transform: [{ rotate: "45deg" }], backgroundColor: "#f5f5aa" } }),
                        react_1["default"].createElement(react_native_1.Text, null, item.content)))));
        }));
    }
    return (react_1["default"].createElement(react_native_1.View, { style: __assign(__assign({}, styles.container), { height: frameHeight }) },
        react_1["default"].createElement(react_native_1.ScrollView, null,
            react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row" } },
                react_1["default"].createElement(react_native_1.Image, { style: styles.avatar, source: { uri: "https://img-blog.csdnimg.cn/20201014180756754.png?x-oss-process=image/resize,m_fixed,h_64,w_64" } }),
                react_1["default"].createElement(react_native_1.View, { style: { marginLeft: 12 } },
                    react_1["default"].createElement(react_native_1.Text, null, "\u73A9\u76EE\u673A\u5668\u4EBA"),
                    react_1["default"].createElement(react_native_1.View, { style: { backgroundColor: "#f5f5aa", margin: 10, padding: 8, borderRadius: 8, alignItems: "center" } },
                        react_1["default"].createElement(react_native_1.View, { style: { height: 12, width: 12, position: "absolute", top: 12, left: -6, transform: [{ rotate: "45deg" }], backgroundColor: "#f5f5aa" } }),
                        react_1["default"].createElement(react_native_1.Text, null, "\u4F60\u597D\u5440"),
                        react_1["default"].createElement(react_native_1.Image, { style: { width: 120, height: 120 }, source: { uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAOeSURBVO3BQY4kyQEDQWeg/v9l1x504CmARFb3zkg0i/9g5r8OM+UwUw4z5TBTDjPlMFMOM+UwUw4z5TBTDjPlMFMOM+UwUw4z5cNLSfhNKi0JNyo3SWgqLQlNpSWhqbQk/CaVNw4z5TBTDjPlw5epfFMS/k0q36TyTUn4psNMOcyUw0z58MOS8ITKGyotCU2lqbQkNJWWhKbyRhKeUPlJh5lymCmHmfLhL6fyRBLeUPlfdpgph5lymCkf/nJJaCpNpSXhRqUloam0JDSVv9lhphxmymGmfPhhKj9JpSWhqTSVloSWhKZyo/KGyp/kMFMOM+UwUz58WRJ+UxKaSktCU7lRaUloKi0JTeUmCX+yw0w5zJTDTPnwksq/SeWbktBU3lD5mxxmymGmHGbKh5eS0FRukvCTVJrKEyotCU3lJglN5SYJTaUl4QmVNw4z5TBTDjMl/oMvSkJT+U1JuFG5ScITKi0JTaUl4ZtUvukwUw4z5TBTPryUhJ+UhKbSktBUbpJwo3KThBuVloQblZaEpnKThKbyxmGmHGbKYaZ8eEnlJgk3KjcqLQk3SWgqNyo/SaUl4Ykk/KbDTDnMlMNM+fDLVJ5IwhMqLQnfpNKS0FRaEprKjcoTSfimw0w5zJTDTPnwUhJuVG6ScKPSkvCGSkvCjUpLwk0SmspNEprKTRKayjcdZsphphxmSvwHLyThCZWbJDyh0pJwo3KThCdUWhJuVFoSvknljcNMOcyUw0z58GUqLQktCU+otCR8UxKayhNJuFFpSWgqLQk3Ki0J33SYKYeZcpgp8R+8kISm8kQSnlB5IwlPqLQk/CSVloQblW86zJTDTDnMlA8vqbyh8kYSmsoTKk+otCQ0lSeS8Cc5zJTDTDnMlA8vJeE3qTyRhKbSktBUWhKayhNJaCpPqNwkoam8cZgph5lymCkfvkzlm5LwRBJuktBUWhJukvCEyk9S+abDTDnMlMNM+fDDkvCEyhsqLQlvqLQk3CThJyXhRuWNw0w5zJTDTPnwf0alJeEmCTcqN0loKn+yw0w5zJTDTPnwl1NpSbhJQlNpSWgqTyShqdwk4U9ymCmHmXKYKR9+mMq/SaUloSXhiSQ0laZyk4QblZaE33SYKYeZcpgpH74sCb8pCTdJ+CaVloQblaZyk4SmcpOEbzrMlMNMOcyU+A9m/uswUw4z5TBTDjPlMFMOM+UwUw4z5TBTDjPlMFMOM+UwUw4z5TBT/gNh7aENSJiN4wAAAABJRU5ErkJggg==" } })))),
            react_1["default"].createElement(MessageList, { chatInfo: chatInfo })),
        react_1["default"].createElement(react_native_1.View, { style: styles.sendContainer },
            react_1["default"].createElement(Audio_1["default"], { setStatus: setStatus, user_info: user_info, setChatInfo: setChatInfo, status: status }),
            react_1["default"].createElement(react_native_1.TextInput, { value: text, onChangeText: edit, style: styles.TextInput, placeholder: '\u8F93\u5165\u6D88\u606F' }),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: send_message, style: { width: 80, justifyContent: "center", alignItems: "center", height: 38, borderRadius: 8, backgroundColor: "#202020" } },
                react_1["default"].createElement(react_native_1.Text, { style: { color: "#fff", fontSize: 15 } }, "\u53D1\u9001")))));
}
exports["default"] = Chat;
var styles = react_native_1.StyleSheet.create({
    container: {
        padding: 12,
        // height: Dimensions.get("screen").height,
        backgroundColor: "transparent",
        paddingBottom: 0,
        justifyContent: "space-between",
        flexDirection: "column"
    },
    sendContainer: {
        flexDirection: "row",
        height: 58,
        backgroundColor: "#f5f5aa",
        // position: "absolute",
        // bottom: 0,
        // left: 0,
        alignItems: "center",
        paddingLeft: 28,
        paddingRight: 26
    },
    TextInput: {
        flexGrow: 1
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 20
    }
});
