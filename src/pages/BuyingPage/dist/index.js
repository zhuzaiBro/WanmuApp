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
var react_native_1 = require("@ant-design/react-native");
var native_base_1 = require("native-base");
var react_1 = require("react");
var react_native_2 = require("react-native");
var size_1 = require("../../assets/size");
var usePosition_1 = require("../../hooks/usePosition");
var BuyingActionSheet_1 = require("./BuyingActionSheet");
var ConFirmCancle_1 = require("./ConFirmCancle");
var InputPwd_1 = require("./InputPwd");
function TabBar(_a) {
    var onOpen = _a.onOpen;
    return (react_1["default"].createElement(react_native_2.View, { style: {
            height: size_1.ROATE(130), width: size_1.ROATE(375), backgroundColor: "#fff",
            paddingHorizontal: size_1.ROATE(16), borderTopWidth: size_1.ROATE(2), borderColor: "#D7D7D7", paddingTop: size_1.ROATE(24),
            flexDirection: "row", position: "absolute", bottom: 0, left: 0
        } },
        react_1["default"].createElement(react_native_2.Text, { style: styles.f14w4 },
            "\u5DF2\u9009",
            1,
            "\u4EF6"),
        react_1["default"].createElement(react_native_2.Text, { style: __assign({ marginLeft: size_1.ROATE(77) }, styles.f14w4) }, "\u5408\u8BA1\uFF1A"),
        react_1["default"].createElement(react_native_2.Text, { style: { fontSize: size_1.ROATE(20), marginTop: size_1.ROATE(-5), color: "rgba(0,0,0,0.9)", fontWeight: "600" } }, "\uFFE530"),
        react_1["default"].createElement(react_native_2.TouchableOpacity, { onPress: onOpen, style: {
                backgroundColor: "#A6E284", marginLeft: "auto", width: size_1.ROATE(97),
                marginTop: size_1.ROATE(-8), height: size_1.ROATE(36), borderRadius: size_1.ROATE(48), justifyContent: "center", alignItems: "center"
            } },
            react_1["default"].createElement(react_native_2.Text, { style: { fontSize: size_1.ROATE(16), fontWeight: "400", fontFamily: "YouSheBiaoTiHei", color: "rgba(0,0,0,0.9)" } }, "\u63D0\u4EA4\u8BA2\u5355"))));
}
function BuyingPage(_a) {
    var _b;
    var navigation = _a.navigation;
    var _c = react_1.useState("#F5F5F5"), transparent = _c[0], setTransparent = _c[1];
    react_1.useEffect(function () {
        setTransparent("#f5f5f5");
        return function () {
            setTransparent(function () { return "transparent"; });
        };
    }, []);
    var _d = react_1.useState(false), visible = _d[0], setVisible = _d[1];
    var _e = react_1.useState(false), pwdVisible = _e[0], setPwdVisible = _e[1];
    var _f = native_base_1.useDisclose(), isOpen = _f.isOpen, onOpen = _f.onOpen, onClose = _f.onClose;
    var pos = usePosition_1["default"]();
    // console.log(navigation);
    return (react_1["default"].createElement(react_native_2.View, { style: { height: react_native_2.Dimensions.get("screen").height } },
        react_1["default"].createElement(react_native_2.View, null,
            react_1["default"].createElement(react_native_2.Pressable, { style: { zIndex: 1 }, onPress: function () {
                    navigation.navigate("ShopDetail");
                } },
                react_1["default"].createElement(react_native_1.Icon, { name: 'backward', style: { position: "absolute", top: size_1.ROATE(8), left: size_1.ROATE(20) }, size: size_1.ROATE(26), color: "rgba(0,0,0,0.9)" })),
            react_1["default"].createElement(react_native_2.Text, { style: { fontSize: size_1.ROATE(16), marginTop: size_1.ROATE(6), textAlign: "center", color: "rgba(0,0,0,0.9)" } }, "\u786E\u8BA4\u4E0B\u5355")),
        react_1["default"].createElement(native_base_1.ScrollView, null,
            react_1["default"].createElement(react_native_2.View, { style: __assign(__assign({}, styles.wrapper), { flexDirection: "row" }) },
                react_1["default"].createElement(react_native_2.View, { style: { width: size_1.ROATE(291) } },
                    react_1["default"].createElement(react_native_2.Text, { style: { fontSize: size_1.ROATE(16), color: "rgba(0,0,0,0.9)" } }, (_b = pos === null || pos === void 0 ? void 0 : pos.location) === null || _b === void 0 ? void 0 : _b.address),
                    react_1["default"].createElement(react_native_2.Text, { style: { fontSize: size_1.ROATE(12), marginTop: size_1.ROATE(8), fontWeight: "400" } }, "\u6731\u6770 15024359582")),
                react_1["default"].createElement(react_native_1.Icon, { style: { marginTop: "auto", marginBottom: "auto" }, color: "rgba(0,0,0,0.9)", size: size_1.ROATE(18), name: 'arrow-right' })),
            react_1["default"].createElement(react_native_2.View, { style: __assign(__assign({}, styles.wrapper), { flexDirection: "row" }) },
                react_1["default"].createElement(react_native_2.Image, { style: styles.gooodImg, source: { uri: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/22.png" } }),
                react_1["default"].createElement(react_native_2.View, { style: { marginLeft: "auto", alignItems: "center", marginTop: size_1.ROATE(20), marginRight: size_1.ROATE(16) } },
                    react_1["default"].createElement(react_native_2.Text, { style: { fontSize: size_1.ROATE(14), marginBottom: size_1.ROATE(4), color: "rgba(0,0,0,0.9)", fontWeight: "400" } }, "\u51711\u4EF6"),
                    react_1["default"].createElement(react_native_2.Text, { style: { fontSize: size_1.ROATE(12), fontWeight: "400" } }, "(\u53EF\u7559\u8A00)")),
                react_1["default"].createElement(react_native_1.Icon, { style: { marginTop: "auto", marginBottom: "auto" }, color: "rgba(0,0,0,0.9)", size: size_1.ROATE(18), name: 'arrow-right' })),
            react_1["default"].createElement(react_native_2.View, { style: styles.wrapper },
                react_1["default"].createElement(react_native_2.View, { style: styles.line },
                    react_1["default"].createElement(react_native_2.Text, { style: styles.f14w4 }, "\u5546\u54C1\u603B\u4EF7"),
                    react_1["default"].createElement(react_native_2.Text, { style: styles.f14w6 }, "\u5546\u54C1\u603B\u4EF7")),
                react_1["default"].createElement(react_native_2.View, { style: __assign(__assign({}, styles.line), { justifyContent: "flex-start" }) },
                    react_1["default"].createElement(react_native_2.Text, { style: styles.f14w4 }, "\u5546\u54C1\u603B\u4EF7"),
                    react_1["default"].createElement(react_native_2.Text, { style: __assign(__assign({}, styles.f14w6), { marginLeft: "auto", marginRight: size_1.ROATE(6), color: "#FF7E52" }) }, "\uFFE5 10"),
                    react_1["default"].createElement(react_native_1.Icon, { size: size_1.ROATE(18), name: 'arrow-right' })),
                react_1["default"].createElement(react_native_2.View, { style: styles.line },
                    react_1["default"].createElement(react_native_2.Text, { style: styles.f14w4 }, "\u5546\u54C1\u603B\u4EF7"),
                    react_1["default"].createElement(react_native_2.Text, { style: styles.f14w6 },
                        "\uFFE5 ",
                        12,
                        ".00")),
                react_1["default"].createElement(react_native_2.View, { style: __assign(__assign({}, styles.line), { marginBottom: 0 }) },
                    react_1["default"].createElement(react_native_2.Text, { style: styles.f14w4 }, "\u914D\u9001\u8D39"),
                    react_1["default"].createElement(react_native_2.Text, { style: styles.f14w6 },
                        "\uFFE5 ",
                        1,
                        ".00")))),
        react_1["default"].createElement(TabBar, { onOpen: onOpen }),
        react_1["default"].createElement(BuyingActionSheet_1["default"], { setPwdVisible: setPwdVisible, isOpen: isOpen, setModalVisible: setVisible, navigation: navigation, onClose: onClose }),
        react_1["default"].createElement(ConFirmCancle_1["default"], { setVisible: setVisible, visible: visible }),
        react_1["default"].createElement(InputPwd_1["default"], { isOpen: pwdVisible, onClose: setPwdVisible })));
}
exports["default"] = BuyingPage;
var styles = react_native_2.StyleSheet.create({
    wrapper: {
        backgroundColor: "#fff",
        borderRadius: size_1.ROATE(12),
        width: size_1.ROATE(343),
        paddingVertical: size_1.ROATE(20),
        paddingHorizontal: size_1.ROATE(12),
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: size_1.ROATE(16)
    },
    gooodImg: {
        height: size_1.ROATE(73),
        width: size_1.ROATE(73),
        borderRadius: size_1.ROATE(8)
    },
    line: {
        flexDirection: "row",
        marginBottom: size_1.ROATE(12),
        justifyContent: "space-between",
        alignItems: "center"
    },
    f14w4: {
        fontSize: size_1.ROATE(14),
        fontWeight: "400",
        color: "rgba(0,0,0,0.45)"
    },
    f14w6: {
        fontSize: size_1.ROATE(14),
        fontWeight: "600",
        color: "rgba(0,0,0,0.9)"
    }
});
