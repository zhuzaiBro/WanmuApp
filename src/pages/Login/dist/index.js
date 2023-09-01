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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Form_1 = require("../../components/Form");
var Wechat = require("react-native-wechat-lib");
var store_1 = require("../../store");
var Actions = require("../../store/actionFuncs");
var user_1 = require("../../server/user");
var size_1 = require("../../assets/size");
var native_base_1 = require("native-base");
var logo_svg_1 = require("../../assets/pictures/login/logo.svg");
var agree_svg_1 = require("../../assets/pictures/login/agree.svg");
var disagree_svg_1 = require("../../assets/pictures/login/disagree.svg");
var App_1 = require("../../../App");
var circle_svg_1 = require("../../assets/pictures/login/circle.svg");
var appid = "wxd632bd1a7463921d";
var secretID = "714456dabfb313c08d019bab2bef24e0";
Wechat.registerApp(appid, "www.baidu.com");
var reg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/; // 关于手机号的正则表达式
var WAIT = 60; //等待60秒
function Login(_a) {
    var navigation = _a.navigation, route = _a.route;
    navigation;
    var _b = react_1.useState(0), time = _b[0], setTime = _b[1];
    var _c = react_1.useState(true), disabled = _c[0], setDisabled = _c[1];
    var _d = react_1.useState(false), agree = _d[0], setAgree = _d[1];
    var timer = void 0;
    var toast = native_base_1.useToast();
    var ctx = react_1.useContext(App_1.visibalCtx);
    react_1.useEffect(function () {
        var flag = true;
        react_native_1.Animated.timing(ctx.x, {
            toValue: 0,
            useNativeDriver: true,
            duration: 100
        }).start();
        return function () {
            clearInterval(timer);
        };
    }, []);
    function login(body) {
        return __awaiter(this, void 0, void 0, function () {
            var data, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // 如果正在计时，没有输入验证码，或者没有填写手机号直接返回
                        if (!body.phone) {
                            toast.show({
                                description: "请输入手机号",
                                duration: 2000,
                                style: { marginBottom: size_1.ROATE(300) }
                            });
                            return [2 /*return*/];
                        }
                        if (!body.clientCode) {
                            toast.show({ description: "请输入验证码", duration: 2000, style: { marginBottom: size_1.ROATE(300) } });
                            return [2 /*return*/];
                        }
                        if (!agree) {
                            toast.show({
                                description: "请同意用户协议",
                                duration: 2000,
                                style: { marginBottom: size_1.ROATE(300) }
                            });
                            return [2 /*return*/];
                        }
                        data = __assign(__assign({}, body), { phone: "86" + body.phone });
                        return [4 /*yield*/, user_1.userLogin(data)];
                    case 1:
                        res = _a.sent();
                        if (res === null || res === void 0 ? void 0 : res.data) {
                            clearInterval(timer);
                            store_1["default"].dispatch(Actions.getLoginType(res.data));
                            navigation.navigate("Index");
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    function getClientCode(body) {
        return __awaiter(this, void 0, void 0, function () {
            var timer, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (time > 0) {
                            return [2 /*return*/];
                        }
                        if (!reg.test(body.phone)) {
                            toast.show({
                                duration: 2000,
                                description: "请输入正确的手机号!",
                                style: { marginBottom: size_1.ROATE(300) }
                            });
                            return [2 /*return*/];
                        }
                        setTime(function () { return WAIT; });
                        // clearInterval(timer);
                        for (i = 0; i < WAIT; i++) {
                            setTimeout(function () {
                                setTime(function (prev) { return prev - 1; });
                            }, i * 1000);
                        }
                        // 向服务端发送请求
                        return [4 /*yield*/, user_1.userLogin({ phone: "86" + body.phone })];
                    case 1:
                        // 向服务端发送请求
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    return (react_1["default"].createElement(react_native_1.Animated.View, { style: {
            transform: [{
                    translateX: ctx.x
                }]
        } },
        react_1["default"].createElement(react_native_1.View, { style: { height: 200, backgroundColor: "#008c8c", position: "absolute", top: 20 } }),
        react_1["default"].createElement(Form_1["default"], { containerStyle: { height: react_native_1.Dimensions.get("screen").height, width: "100%", position: "relative" } },
            react_1["default"].createElement(react_native_1.Image, { style: { width: react_native_1.Dimensions.get("screen").width, position: "absolute", left: 0, top: 0, zIndex: 0, height: react_native_1.Dimensions.get("screen").height }, source: require("../../assets/pictures/login/loginbackgroundBg.png") }),
            react_1["default"].createElement(react_native_1.View, { style: { width: size_1.ROATE(327), height: size_1.ROATE(556), borderRadius: size_1.ROATE(14), backgroundColor: "#fff", marginTop: size_1.ROATE(132), marginRight: "auto", marginLeft: "auto" } },
                react_1["default"].createElement(react_native_1.View, { style: {
                        height: size_1.ROATE(86), backgroundColor: "#fff", marginLeft: "auto", marginRight: "auto", marginTop: size_1.ROATE(-40),
                        justifyContent: "center", alignItems: "center", width: size_1.ROATE(86), borderRadius: size_1.ROATE(43), marginBottom: size_1.ROATE(40)
                    } },
                    react_1["default"].createElement(circle_svg_1["default"], { style: { position: "absolute", zIndex: 11 } }),
                    react_1["default"].createElement(logo_svg_1["default"], { style: { position: "absolute", zIndex: 1 } })),
                react_1["default"].createElement(react_native_1.View, { style: styles.inpWrap },
                    react_1["default"].createElement(react_native_1.Text, { style: { paddingRight: size_1.ROATE(16), borderRightWidth: 1, marginRight: size_1.ROATE(16) } }, "+86"),
                    react_1["default"].createElement(Form_1["default"].Input, { placeholder: '\u8BF7\u8F93\u5165\u8D26\u53F7/\u624B\u673A\u53F7', style: { fontSize: size_1.ROATE(14), padding: 0 }, name: 'phone' })),
                react_1["default"].createElement(react_native_1.View, { style: styles.inpWrap },
                    react_1["default"].createElement(Form_1["default"].Input, { placeholder: '\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801', disabled: setDisabled, style: { fontSize: size_1.ROATE(12), padding: 0 }, name: "clientCode" }),
                    react_1["default"].createElement(Form_1["default"].Button, { submit: getClientCode, style: { marginLeft: "auto" }, titleColor: "#202020", title: time ? "\u91CD\u65B0\u53D1\u9001(" + time + ")" : '获取验证码' })),
                react_1["default"].createElement(Form_1["default"].Button, { submit: login, style: [styles.btn, disabled && styles.disabled], titleSize: size_1.ROATE(18), titleColor: '#fff', title: "\u767B\u5F55" }),
                react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", marginLeft: "auto", marginRight: "auto", alignItems: "center", marginTop: size_1.ROATE(29) } },
                    react_1["default"].createElement(disagree_svg_1["default"], { style: { padding: size_1.ROATE(8) }, onPress: function () {
                            setAgree(function (prev) { return !prev; });
                        } }),
                    react_1["default"].createElement(agree_svg_1["default"], { onPress: function () {
                            setAgree(function (prev) { return !prev; });
                        }, style: { position: "absolute", display: agree ? "flex" : "none" } }),
                    react_1["default"].createElement(react_native_1.View, { style: { marginLeft: size_1.ROATE(12) } },
                        react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row" } },
                            react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(12) } }, "\u540C\u610F"),
                            react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(12), fontWeight: "700", color: "#000" } }, "\u300A\u7528\u6237\u534F\u8BAE\u300B"),
                            react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(12) } }, "\u548C"),
                            react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(12), fontWeight: "700", color: "#000" } }, "\u300A\u9690\u79C1\u653F\u7B56\u300B")),
                        react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(12) } }, "\u672A\u6CE8\u518C\u624B\u673A\u53F7\u5C06\u81EA\u52A8\u521B\u5EFA\u8D26\u53F7")))))));
}
exports["default"] = Login;
var styles = react_native_1.StyleSheet.create({
    container: {},
    inp: {
        width: size_1.ROATE(83),
        height: size_1.ROATE(20)
    },
    inpWrap: {
        flexDirection: "row", padding: size_1.ROATE(12), alignItems: "center", backgroundColor: "#F0F0F0", borderRadius: size_1.ROATE(8), marginLeft: "auto", marginRight: "auto",
        height: size_1.ROATE(44), width: size_1.ROATE(264), marginBottom: size_1.ROATE(24)
    },
    disabled: {
        backgroundColor: "#D9D9D9"
    },
    btn: {
        backgroundColor: "#202020",
        alignItems: 'center',
        padding: 8,
        marginTop: size_1.ROATE(16),
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: size_1.ROATE(8),
        width: size_1.ROATE(264),
        maxHeight: size_1.ROATE(42)
    }
});
