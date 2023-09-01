"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var App_1 = require("../../../App");
var size_1 = require("../../assets/size");
var RouterHelper_1 = require("../../utils/RouterHelper");
function LoginHeader(_a) {
    var navigation = _a.navigation, route = _a.route, iOSHeight = _a.iOSHeight;
    var ctx = react_1.useContext(App_1.visibalCtx);
    var goback = RouterHelper_1.useBackTo(navigation, route, null);
    return (react_1["default"].createElement(react_native_1.Animated.View, { style: { paddingTop: react_native_1.StatusBar.currentHeight || iOSHeight, position: "absolute",
            transform: [{ translateX: ctx.x }], flexDirection: 'row', justifyContent: 'space-between', padding: 8 } },
        react_1["default"].createElement(react_native_1.Text, { onPress: function () {
                react_native_1.Animated.timing(ctx.x, {
                    toValue: size_1.ROATE(375),
                    useNativeDriver: true,
                    duration: 200
                }).start(function () {
                    goback();
                });
            }, style: { color: "#fff", margin: size_1.ROATE(8), marginLeft: size_1.ROATE(20) } }, "\u8FD4\u56DE")));
}
exports["default"] = LoginHeader;
