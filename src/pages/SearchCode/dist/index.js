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
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_camera_1 = require("react-native-camera");
function Relaese() {
    react_1.useEffect(function () {
        // console.log(Dimensions.get("screen"));
    }, []);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.View, { style: { height: react_native_1.Dimensions.get("screen").height } },
            react_1["default"].createElement(react_native_camera_1.RNCamera, { onBarCodeRead: function (res) {
                    console.log(res.data, res.rawData, res.type);
                }, style: { height: 520 }, autoFocus: 'on' },
                react_1["default"].createElement(react_native_1.View, { style: { height: 150, backgroundColor: "rgba(0,0,0,0.6)" } }),
                react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", height: 220, marginLeft: "auto", marginRight: "auto", overflow: "hidden" } },
                    react_1["default"].createElement(react_native_1.View, { style: { width: (react_native_1.Dimensions.get("screen").width - 220) / 2, height: 220, backgroundColor: "rgba(0,0,0,0.6)" } }),
                    react_1["default"].createElement(react_native_1.View, { style: { flexGrow: 1, height: 220 } }),
                    react_1["default"].createElement(react_native_1.View, { style: { width: (react_native_1.Dimensions.get("screen").width - 220) / 2, height: 220, backgroundColor: "rgba(0,0,0,0.6)" } })),
                react_1["default"].createElement(react_native_1.View, { style: { height: 150, backgroundColor: "rgba(0,0,0,0.6)" } })),
            react_1["default"].createElement(react_native_1.View, { style: { borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: "#f5f5f5" } },
                react_1["default"].createElement(react_native_1.Text, { style: { fontSize: 18, textAlign: "center", margin: 12 } }, "\u73A9\u76EE\u626B\u4E00\u626B"),
                react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", justifyContent: "space-around", padding: 12 } },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.defaultFont }, "\u597D\u53CB"),
                    react_1["default"].createElement(react_native_1.Text, { style: __assign(__assign({}, styles.defaultFont), { borderBottomWidth: 3, borderBottomEndRadius: 3, borderBottomStartRadius: 3 }) }, "\u5B66\u4E60\u8D44\u6599"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.defaultFont }, "\u5546\u54C1"))))));
}
exports["default"] = Relaese;
var styles = react_native_1.StyleSheet.create({
    defaultFont: {
        fontSize: 15,
        color: "#202020",
        padding: 4
    }
});
