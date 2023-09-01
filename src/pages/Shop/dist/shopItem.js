"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var size_1 = require("../../assets/size");
function ShopItem(_a) {
    var nav = _a.nav, item = _a.item;
    var goShopDetailPage = react_1.useCallback(function (e) {
        nav.navigate("ShopDetail", { name: 'zhujie' });
    }, []);
    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: goShopDetailPage, style: {
            width: size_1.ROATE(168), borderRadius: size_1.ROATE(12), overflow: "hidden", height: size_1.ROATE(195),
            backgroundColor: "#fff", marginLeft: size_1.ROATE(8), marginBottom: size_1.ROATE(8)
        } },
        react_1["default"].createElement(react_native_1.Image, { style: { height: size_1.ROATE(195), position: "absolute", width: size_1.ROATE(168), top: 0, left: 0 }, source: { uri: item.uri } }),
        react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", height: size_1.ROATE(24), marginTop: "auto", marginLeft: "auto", marginBottom: size_1.ROATE(4), marginRight: size_1.ROATE(4), width: size_1.ROATE(99), backgroundColor: "rgba(255,255,255,0.7)",
                borderRadius: size_1.ROATE(20), alignItems: "center", paddingHorizontal: size_1.ROATE(8) } },
            react_1["default"].createElement(react_native_1.Text, { style: { color: "#000", fontSize: size_1.ROATE(14), marginRight: size_1.ROATE(8) } }, "\u7EAF\u725B\u5976 |"),
            react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(14), color: "#000" } }, "\uFFE5 24"))));
}
exports["default"] = ShopItem;
