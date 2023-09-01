"use strict";
exports.__esModule = true;
var react_native_1 = require("@ant-design/react-native");
var react_1 = require("react");
var react_native_2 = require("react-native");
var size_1 = require("../../../assets/size");
function DetailHeader(_a) {
    var navigation = _a.navigation, iOSHeight = _a.iOSHeight;
    return (react_1["default"].createElement(react_native_2.View, { style: {
            padding: size_1.ROATE(16), paddingTop: (react_native_2.StatusBar.currentHeight || iOSHeight) + size_1.ROATE(10), flexDirection: "row",
            backgroundColor: "transparent", position: "absolute", alignItems: "center"
        } },
        react_1["default"].createElement(react_native_1.Icon, { color: '#202020', name: 'backward', onPress: function () { navigation.navigate("Shop"); } }),
        react_1["default"].createElement(react_native_2.View, { style: {
                marginLeft: size_1.ROATE(248), height: size_1.ROATE(28), borderRadius: size_1.ROATE(9), width: size_1.ROATE(28),
                justifyContent: "center", alignItems: "center", backgroundColor: "rgba(255,255,255,0.5)"
            } },
            react_1["default"].createElement(react_native_1.Icon, { color: '#333', size: size_1.ROATE(18), name: 'shopping-cart' })),
        react_1["default"].createElement(react_native_2.View, { style: {
                marginLeft: size_1.ROATE(14), height: size_1.ROATE(28), borderRadius: size_1.ROATE(9), width: size_1.ROATE(28),
                justifyContent: "center", alignItems: "center", backgroundColor: "rgba(255,255,255,0.5)"
            } },
            react_1["default"].createElement(react_native_1.Icon, { color: '#333', size: size_1.ROATE(18), name: 'message' }))));
}
exports["default"] = DetailHeader;
