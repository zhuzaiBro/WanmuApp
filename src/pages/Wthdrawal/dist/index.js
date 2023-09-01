"use strict";
exports.__esModule = true;
var react_native_1 = require("@ant-design/react-native");
var react_1 = require("react");
var react_native_2 = require("react-native");
var size_1 = require("../../assets/size");
function Wthdrawal(_a) {
    var navigation = _a.navigation;
    var goShopPage = react_1.useCallback(function () {
        navigation.navigate("Shop");
    }, []);
    return (react_1["default"].createElement(react_native_2.View, { style: styles.container },
        react_1["default"].createElement(react_native_2.View, { style: styles.header },
            react_1["default"].createElement(react_native_2.View, { style: styles.headerLine },
                react_1["default"].createElement(react_native_1.Icon, { onPress: goShopPage, style: {
                        marginLeft: size_1.ROATE(8), position: "absolute", top: size_1.ROATE(-1),
                        left: size_1.ROATE(12)
                    }, name: 'arrow-left', color: '#000' }),
                react_1["default"].createElement(react_native_2.Text, { style: {
                        fontSize: size_1.ROATE(16), marginLeft: "auto", marginRight: "auto",
                        color: "#000"
                    } }, "\u4F1A\u5458\u8D44\u4EA7")),
            react_1["default"].createElement(react_native_2.View, { style: styles.cardInfo },
                react_1["default"].createElement(react_native_2.Text, { style: { fontSize: size_1.ROATE(14), fontWeight: "400", marginRight: size_1.ROATE(17.5) } }, "\u5230\u8D26\u5361\u53F7"),
                react_1["default"].createElement(react_native_2.View, { style: { flexGrow: 1 } },
                    react_1["default"].createElement(react_native_2.View, { style: { flexDirection: "row" } },
                        react_1["default"].createElement(react_native_1.Icon, { name: 'credit-card', color: '#000' }),
                        react_1["default"].createElement(react_native_2.Text, { style: { fontSize: size_1.ROATE(16), fontWeight: "500", color: "#000", marginLeft: size_1.ROATE(6.5) } }, "\u519C\u4E1A\u94F6\u884C \uFF085641\uFF09")),
                    react_1["default"].createElement(react_native_2.Text, { style: { fontSize: size_1.ROATE(10), fontWeight: "400" } }, "\u5355\u65E5\u4EA4\u6613\u9650\u989D\u00A5XXXXX")),
                react_1["default"].createElement(react_native_1.Icon, { name: 'arrow-right', color: '#000' }))),
        react_1["default"].createElement(react_native_2.View, { style: styles.main },
            react_1["default"].createElement(react_native_2.Text, { style: { marginBottom: size_1.ROATE(20), fontSize: size_1.ROATE(14), fontWeight: "400" } }, "\u63D0\u73B0\u91D1\u989D"),
            react_1["default"].createElement(react_native_2.Text, { style: { fontSize: size_1.ROATE(28), fontWeight: "500", color: "#000" } }, "\uFFE5 17"),
            react_1["default"].createElement(react_native_2.View, { style: { width: size_1.ROATE(303), height: 1, backgroundColor: "#000", marginTop: size_1.ROATE(20) } }),
            react_1["default"].createElement(react_native_2.Text, { style: { marginTop: size_1.ROATE(5), fontSize: size_1.ROATE(12), fontWeight: "400", color: "#000" } }, "\u53EF\u7528\u4F59\u989D \uFFE5518"),
            react_1["default"].createElement(react_native_2.Pressable, { style: { height: size_1.ROATE(35), width: size_1.ROATE(102), borderWidth: 1, borderRadius: size_1.ROATE(12), marginTop: size_1.ROATE(58),
                    marginLeft: "auto", marginRight: "auto", justifyContent: "center" } },
                react_1["default"].createElement(react_native_2.Text, { style: { textAlign: "center", fontSize: size_1.ROATE(16), fontWeight: "400", color: "#000" } }, "\u63D0\u73B0")))));
}
exports["default"] = Wthdrawal;
var styles = react_native_2.StyleSheet.create({
    container: {
        height: react_native_2.Dimensions.get("screen").height,
        backgroundColor: "#d7d7d7",
        zIndex: 1
    },
    header: {
        // height: ROATE(151),
        backgroundColor: "#d7d7d7"
    },
    headerLine: {
        height: size_1.ROATE(44),
        marginTop: size_1.ROATE(37 - react_native_2.StatusBar.currentHeight)
    },
    cardInfo: {
        height: size_1.ROATE(94),
        flexDirection: "row",
        paddingLeft: size_1.ROATE(36),
        paddingRight: size_1.ROATE(34)
    },
    main: {
        height: react_native_2.Dimensions.get("screen").height,
        backgroundColor: "#fff",
        borderTopLeftRadius: size_1.ROATE(22),
        borderTopRightRadius: size_1.ROATE(22),
        padding: size_1.ROATE(36),
        paddingTop: size_1.ROATE(20)
    }
});
