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
var react_native_shadow_1 = require("react-native-shadow");
function MemberAssets(_a) {
    var navigation = _a.navigation;
    var shadowOpt = {
        width: size_1.ROATE(343),
        height: size_1.ROATE(185),
        color: "#000",
        border: 4,
        radius: size_1.ROATE(16),
        opacity: 0.15,
        x: 0,
        y: 0,
        style: {
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: size_1.ROATE(-94)
        }
    };
    var goShopPage = react_1.useCallback(function () {
        navigation.navigate("Shop");
    }, []);
    var gowWthdrawal = react_1.useCallback(function () {
        navigation.navigate("Wthdrawal");
    }, []);
    return (react_1["default"].createElement(react_native_2.View, { style: styles.container },
        react_1["default"].createElement(react_native_2.View, { style: styles.header },
            react_1["default"].createElement(react_native_1.Icon, { onPress: goShopPage, style: {
                    marginLeft: size_1.ROATE(8), position: "absolute", top: size_1.ROATE(-1),
                    left: size_1.ROATE(12)
                }, name: 'arrow-left', color: '#000' }),
            react_1["default"].createElement(react_native_2.Text, { style: {
                    fontSize: size_1.ROATE(16), marginLeft: "auto", marginRight: "auto",
                    color: "#000"
                } }, "\u4F1A\u5458\u8D44\u4EA7")),
        react_1["default"].createElement(react_native_shadow_1.BoxShadow, { setting: shadowOpt },
            react_1["default"].createElement(react_native_2.View, { style: styles.content },
                react_1["default"].createElement(react_native_2.View, { style: styles.contentTop },
                    react_1["default"].createElement(react_native_2.View, { style: {
                            width: size_1.ROATE(12), height: size_1.ROATE(12), marginTop: size_1.ROATE(3.4), marginRight: size_1.ROATE(3),
                            borderRadius: size_1.ROATE(6), backgroundColor: "#fff"
                        } }),
                    react_1["default"].createElement(react_native_2.Text, { style: styles.contentTopFont }, "\u6CE8\uFF1A\u5F00\u901A\u4F1A\u5458\u6BCF\u6708\u5C06\u5F97\u5230600\u5143\u6D88\u8D39\u8D44\u4EA7\uFF0C\u540C\u65F6\u83B7\u5F97\u63D0\u73B0\u529F\u80FD")),
                react_1["default"].createElement(react_native_2.Text, { style: styles.contentTitle }, "\u53EF\u7528\u4F59\u989D"),
                react_1["default"].createElement(react_native_2.View, { style: { flexDirection: "row" } },
                    react_1["default"].createElement(react_native_2.View, { style: styles.contentArea },
                        react_1["default"].createElement(react_native_2.View, { style: styles.contentBox },
                            react_1["default"].createElement(react_native_2.Text, { style: styles.contentBoxTitle }, "2500"),
                            react_1["default"].createElement(react_native_2.Text, { style: styles.contentText }, " \u5143")),
                        react_1["default"].createElement(react_native_2.Text, { style: { marginTop: size_1.ROATE(6), fontSize: size_1.ROATE(12) } }, "\u5269\u4F59\u4F59\u989D"),
                        react_1["default"].createElement(native_base_1.Button, { style: styles.contentBtn },
                            react_1["default"].createElement(react_native_2.Text, { style: { color: "#3D3D3D", fontSize: size_1.ROATE(14), position: "absolute", left: size_1.ROATE(-13), top: size_1.ROATE(-9) } }, "\u5145\u503C"))),
                    react_1["default"].createElement(react_native_2.View, { style: {
                            position: "absolute", left: size_1.ROATE(171), height: size_1.ROATE(93),
                            bottom: size_1.ROATE(25), width: 1, backgroundColor: "rgba(0,0,0,0.18)"
                        } }),
                    react_1["default"].createElement(react_native_2.View, { style: styles.contentArea },
                        react_1["default"].createElement(react_native_2.View, { style: styles.contentBox },
                            react_1["default"].createElement(react_native_2.Text, { style: styles.contentBoxTitle }, "500"),
                            react_1["default"].createElement(react_native_2.Text, { style: styles.contentText }, " \u5143")),
                        react_1["default"].createElement(react_native_2.Text, { style: { marginTop: size_1.ROATE(6), fontSize: size_1.ROATE(12) } }, "\u53EF\u63D0\u73B0\u4F59\u989D"),
                        react_1["default"].createElement(native_base_1.Button, { onPress: gowWthdrawal, style: __assign(__assign({}, styles.contentBtn), { backgroundColor: "#000", overflow: "visible" }) },
                            react_1["default"].createElement(react_native_2.Text, { style: { color: "#fff", fontSize: size_1.ROATE(14), position: "absolute", left: size_1.ROATE(-13), top: size_1.ROATE(-9) } }, "\u63D0\u73B0")))))),
        react_1["default"].createElement(react_native_2.View, { style: styles.detailLine },
            react_1["default"].createElement(react_native_2.Text, { style: { fontSize: size_1.ROATE(16), color: "#000" } }, "\u4EA4\u6613\u53D8\u52A8\u660E\u7EC6"),
            react_1["default"].createElement(react_native_2.View, { style: { flexDirection: "row", alignItems: "center" } },
                react_1["default"].createElement(react_native_2.Text, { style: { fontSize: size_1.ROATE(12), marginBottom: size_1.ROATE(4), flexDirection: "row" } }, "\u5168\u90E8"),
                react_1["default"].createElement(react_native_1.Icon, { style: { marginTop: "auto", marginBottom: "auto", marginLeft: size_1.ROATE(4) }, size: size_1.ROATE(16), name: 'arrow-right' }))),
        react_1["default"].createElement(react_native_2.View, { style: styles.mainView },
            react_1["default"].createElement(react_native_2.View, { style: { flexDirection: 'row', justifyContent: "space-between" } },
                react_1["default"].createElement(react_native_2.View, null,
                    react_1["default"].createElement(react_native_2.Text, { style: { fontSize: size_1.ROATE(14), fontWeight: "400", color: "#000" } }, "\u4F59\u989D\u53D8\u73B0"),
                    react_1["default"].createElement(react_native_2.Text, { style: { fontSize: size_1.ROATE(10), fontWeight: "400", color: "#000" } }, "2022-06-01 23:45")),
                react_1["default"].createElement(react_native_2.View, null,
                    react_1["default"].createElement(react_native_2.Text, { style: { fontSize: size_1.ROATE(14), fontWeight: "400", color: "#000" } }, "-230"),
                    react_1["default"].createElement(react_native_2.Text, { style: { fontSize: size_1.ROATE(10), fontWeight: "400", color: "#000" } }, "\u4F59\u989D 2500"))))));
}
exports["default"] = MemberAssets;
var styles = react_native_2.StyleSheet.create({
    container: {
        height: react_native_2.Dimensions.get("screen").height,
        backgroundColor: "#fff"
    },
    header: {
        height: size_1.ROATE(151),
        backgroundColor: "#D7D7D7"
    },
    content: {
        height: size_1.ROATE(185),
        width: size_1.ROATE(343),
        backgroundColor: "#fff",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: size_1.ROATE(16),
        overflow: "hidden",
        shadowOffset: { width: 1, height: 2 },
        shadowColor: "#f30"
    },
    contentTop: {
        height: size_1.ROATE(24),
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        flexDirection: "row",
        justifyContent: "center",
        textAlignVertical: "center",
        alignItems: "center"
    },
    contentTopFont: {
        fontWeight: "400",
        fontSize: size_1.ROATE(10),
        color: "#fff"
    },
    contentTitle: {
        marginTop: size_1.ROATE(5),
        textAlign: "center",
        fontSize: size_1.ROATE(16),
        color: "#000",
        marginBottom: size_1.ROATE(15)
    },
    contentBox: {
        flexDirection: "row",
        alignItems: "center"
    },
    contentBoxTitle: {
        fontSize: size_1.ROATE(24),
        color: "#000",
        fontWeight: "700"
    },
    contentText: {
        fontSize: size_1.ROATE(14),
        color: "#000",
        fontWeight: "700"
    },
    contentArea: {
        flexGrow: 1,
        alignItems: "center"
    },
    contentBtn: {
        marginTop: size_1.ROATE(14),
        height: size_1.ROATE(35),
        borderRadius: size_1.ROATE(12),
        borderWidth: 1,
        backgroundColor: "transparent",
        width: size_1.ROATE(102)
    },
    detailLine: {
        marginTop: size_1.ROATE(32),
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: size_1.ROATE(16),
        paddingRight: size_1.ROATE(16),
        justifyContent: "space-between",
        height: size_1.ROATE(32),
        lineHeight: size_1.ROATE(32)
    },
    mainView: {
        padding: size_1.ROATE(16)
    }
});
