"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var size_1 = require("../../assets/size");
var react_native_linear_gradient_1 = require("react-native-linear-gradient");
var PPt_svg_1 = require("../../assets/pictures/oneserver/PPt.svg");
function resrouceBag() {
    function Box(_a) {
        var _b = _a.outColors, outColors = _b === void 0 ? ["#959dfe40", "#eff0ff59"] : _b, _c = _a.innerColors, innerColors = _c === void 0 ? ["#929afd", "#f1f2ff"] : _c;
        return (react_1["default"].createElement(react_native_1.View, { style: { height: size_1.ROATE(106), marginRight: size_1.ROATE(13), width: size_1.ROATE(106) } },
            react_1["default"].createElement(react_native_1.Image, { style: styles.img, source: { uri: "https://profile.csdnimg.cn/B/9/2/3_u010377383" } }),
            react_1["default"].createElement(react_native_linear_gradient_1["default"], { style: { top: size_1.ROATE(10), borderRadius: size_1.ROATE(13.95), height: size_1.ROATE(96), width: size_1.ROATE(96), position: "absolute", zIndex: -1 }, colors: outColors }),
            react_1["default"].createElement(react_native_linear_gradient_1["default"], { colors: innerColors, style: {
                    height: size_1.ROATE(56), width: size_1.ROATE(56), justifyContent: "center", alignItems: "center",
                    borderRadius: size_1.ROATE(12), zIndex: 1, position: "absolute", left: 0, bottom: 0
                } },
                react_1["default"].createElement(PPt_svg_1["default"], null))));
    }
    return (react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row" } },
        react_1["default"].createElement(Box, null),
        react_1["default"].createElement(Box, { innerColors: ["#c7fb87", "#edf8d6"], outColors: ["#c9fc8a40", "#ecf9d340"] }),
        react_1["default"].createElement(Box, { innerColors: ["#fbfe89", "#f8f7d6"], outColors: ["#e2fe574d", "#ffee5440"] })));
}
exports["default"] = resrouceBag;
var styles = react_native_1.StyleSheet.create({
    img: {
        height: size_1.ROATE(96),
        width: size_1.ROATE(96),
        marginLeft: "auto",
        // marginRight: ROATE(13.2),
        borderRadius: size_1.ROATE(13.95)
    }
});
