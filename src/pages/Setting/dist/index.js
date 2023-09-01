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
var store_1 = require("../../store");
var user_1 = require("../../server/user");
var native_base_1 = require("native-base");
var react_native_2 = require("@ant-design/react-native");
var size_1 = require("../../assets/size");
function Setting(_a) {
    var _this = this;
    var navigation = _a.navigation;
    var _b = react_1.useState(null), userInfo = _b[0], setUserInfo = _b[1];
    var _c = react_1.useState(false), visible = _c[0], setVisible = _c[1];
    react_1.useEffect(function () {
        setTimeout(function () {
            setUserInfo(store_1["default"].getState());
        }, 1000);
    }, []);
    var userLoginOut = react_1.useCallback(function () {
        (function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_1.loginOut()];
                    case 1:
                        _a.sent();
                        navigation.navigate("Index");
                        return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    var controlModel = react_1.useCallback(function () {
        setVisible(!visible);
    }, []);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(native_base_1.StatusBar, { barStyle: "light-content" }),
        react_1["default"].createElement(react_native_1.ScrollView, { style: styles.container },
            react_1["default"].createElement(react_native_2.Icon, { name: "backward", size: size_1.ROATE(24), onPress: function () {
                    navigation.navigate("Me");
                }, style: { paddingBottom: size_1.ROATE(12), paddingHorizontal: size_1.ROATE(12) } }),
            react_1["default"].createElement(react_native_1.View, { style: styles.contentBox },
                react_1["default"].createElement(react_native_1.Text, { style: __assign(__assign({}, styles.defaultFont), { fontSize: 18 }) }, "\u4E2A\u4EBA\u8D44\u6599"),
                react_1["default"].createElement(react_native_1.View, { style: __assign({}, styles.infoItem) },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.defaultFont }, "\u5934\u50CF"),
                    react_1["default"].createElement(react_native_1.Image, { style: { width: 52, height: 52, borderRadius: 6 }, source: { uri: userInfo === null || userInfo === void 0 ? void 0 : userInfo.avatar } })),
                react_1["default"].createElement(react_native_1.View, { style: __assign({}, styles.infoItem) },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.defaultFont }, "\u8D26\u53F7"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.defaultFont }, userInfo === null || userInfo === void 0 ? void 0 : userInfo.phone)),
                react_1["default"].createElement(react_native_1.View, { style: __assign({}, styles.infoItem) },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.defaultFont }, "\u6635\u79F0"),
                    react_1["default"].createElement(react_native_1.Text, { onPress: controlModel, style: styles.defaultFont }, userInfo === null || userInfo === void 0 ? void 0 : userInfo.nickname)),
                react_1["default"].createElement(react_native_1.View, { style: __assign({}, styles.infoItem) },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.defaultFont }, "\u66F4\u591A"),
                    react_1["default"].createElement(react_native_1.Text, null))),
            react_1["default"].createElement(react_native_1.View, { style: { borderRadius: 6, overflow: 'hidden', backgroundColor: "#6D6F7B", marginTop: 12 } },
                react_1["default"].createElement(react_native_1.View, { style: __assign({}, styles.infoItem) },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.defaultFont }, "\u4E2A\u6027\u7B7E\u540D"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.defaultFont }, userInfo === null || userInfo === void 0 ? void 0 : userInfo.description))),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPressOut: userLoginOut, style: styles.btn },
                react_1["default"].createElement(react_native_1.Text, { style: styles.defaultFont }, "\u9000\u51FA\u767B\u5F55"))),
        react_1["default"].createElement(react_native_1.View, { style: {} },
            react_1["default"].createElement(react_native_1.View, { style: {
                    display: visible ? "flex" : "none", height: 200, width: react_native_1.Dimensions.get("screen").width, position: "absolute", bottom: 0, left: 0, backgroundColor: "#f5f5aa",
                    overflow: "hidden"
                } },
                react_1["default"].createElement(react_native_1.TextInput, { placeholder: '\u4FEE\u6539\u6635\u79F0' }),
                react_1["default"].createElement(react_native_1.View, { style: {
                        flexDirection: "row", justifyContent: "space-between", position: "absolute", bottom: 12, width: react_native_1.Dimensions.get("screen").width,
                        padding: 12
                    } },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: controlModel, style: { backgroundColor: "#008c8c", padding: 5 } },
                        react_1["default"].createElement(react_native_1.Text, { style: { fontSize: 15 } }, "\u53D6\u6D88")),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: { backgroundColor: "#008c8c", padding: 5 } },
                        react_1["default"].createElement(react_native_1.Text, { style: { fontSize: 15 } }, "\u786E\u5B9A")))))));
}
exports["default"] = Setting;
var styles = react_native_1.StyleSheet.create({
    defaultFont: {
        color: "#0cc4c4",
        fontSize: 15
    },
    container: {
        padding: 12,
        backgroundColor: "#202020"
    },
    contentBox: {
        borderWidth: 1,
        borderColor: "#0cc4c4",
        borderRadius: 6,
        overflow: 'hidden',
        backgroundColor: "#6D6F7B",
        padding: 14
    },
    infoItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 8,
        // backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#0cc4c4"
    },
    btn: {
        backgroundColor: "#6D6F7B",
        height: 52,
        borderRadius: 8,
        marginTop: 16,
        justifyContent: "center",
        alignItems: "center"
    }
});
