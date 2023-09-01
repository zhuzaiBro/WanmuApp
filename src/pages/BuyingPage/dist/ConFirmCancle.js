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
var native_base_1 = require("native-base");
var react_1 = require("react");
var react_native_1 = require("react-native");
var size_1 = require("../../assets/size");
function ConFiremCancle(_a) {
    var _b = _a.visible, visible = _b === void 0 ? true : _b, setVisible = _a.setVisible;
    var onClose = react_1.useCallback(function () {
        setVisible(function (prev) { return !prev; });
    }, []);
    return (react_1["default"].createElement(native_base_1.Modal, { isOpen: visible, onClose: onClose },
        react_1["default"].createElement(native_base_1.Modal.Content, { style: { width: size_1.ROATE(260), height: size_1.ROATE(115), borderRadius: size_1.ROATE(16), backgroundColor: "#fff" } },
            react_1["default"].createElement(react_native_1.View, { style: { width: size_1.ROATE(260), height: size_1.ROATE(115) } },
                react_1["default"].createElement(react_native_1.Text, { style: {
                        marginLeft: "auto", marginRight: "auto", fontSize: size_1.ROATE(14), fontWeight: "400", color: "#000",
                        marginTop: size_1.ROATE(27), marginBottom: size_1.ROATE(20)
                    } }, "\u662F\u5426\u653E\u5F03\u672C\u6B21\u652F\u4ED8"),
                react_1["default"].createElement(react_native_1.View, { style: { borderTopWidth: size_1.ROATE(2), flexDirection: "row", height: "100%", borderColor: "#BFBFBF" } },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onClose, style: { width: size_1.ROATE(129) } },
                        react_1["default"].createElement(react_native_1.Text, { style: __assign(__assign({ textAlign: "center", lineHeight: size_1.ROATE(40) }, styles.f14w4), { color: "#000" }) }, "\u653E\u5F03")),
                    react_1["default"].createElement(react_native_1.View, { style: { height: size_1.ROATE(48), width: size_1.ROATE(2), backgroundColor: "#BFBFBF" } }),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onClose, style: { width: size_1.ROATE(129) } },
                        react_1["default"].createElement(react_native_1.Text, { style: __assign(__assign({ textAlign: "center", lineHeight: size_1.ROATE(40) }, styles.f14w4), { color: "#000" }) }, "\u7EE7\u7EED\u4ED8\u6B3E")))))));
}
exports["default"] = ConFiremCancle;
var styles = react_native_1.StyleSheet.create({
    f14w4: {
        fontSize: size_1.ROATE(14),
        fontWeight: "400",
        color: "rgba(0,0,0,0.45)"
    }
});
