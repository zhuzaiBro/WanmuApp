"use strict";
exports.__esModule = true;
var react_1 = require("react");
var native_base_1 = require("native-base");
var react_native_1 = require("react-native");
var size_1 = require("../../assets/size");
var react_native_2 = require("@ant-design/react-native");
function InputPwd(_a) {
    var onClose = _a.onClose, isOpen = _a.isOpen;
    var useGetVisible = react_1.useCallback(function () {
        onClose(function (prev) { return !prev; });
    }, []);
    return (react_1["default"].createElement(native_base_1.Modal, { isOpen: isOpen, onClose: useGetVisible },
        react_1["default"].createElement(native_base_1.Modal.Content, null,
            react_1["default"].createElement(react_native_1.View, { style: { height: size_1.ROATE(162), width: size_1.ROATE(286), backgroundColor: "#fff" } },
                react_1["default"].createElement(react_native_2.Icon, { onPress: useGetVisible, color: "#000", style: { marginTop: size_1.ROATE(17.6), marginLeft: size_1.ROATE(17.6), marginBottom: size_1.ROATE(11.6) }, name: "step-backward" }),
                react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(14), color: "#000", fontWeight: "400", textAlign: "center" } }, "\u652F\u4ED8\u5BC6\u7801"),
                react_1["default"].createElement(react_native_1.View, { style: {
                        height: size_1.ROATE(37), width: size_1.ROATE(222), borderRadius: size_1.ROATE(12), padding: 0, overflow: "hidden",
                        borderWidth: size_1.ROATE(2), borderColor: "#BFBFBF", marginLeft: "auto", marginRight: "auto"
                    } },
                    react_1["default"].createElement(react_native_1.View, { style: { height: size_1.ROATE(37), position: "absolute", borderWidth: size_1.ROATE(2), borderColor: "#BFBFBF", left: size_1.ROATE(37), top: 0, width: size_1.ROATE(37) } }),
                    react_1["default"].createElement(react_native_1.View, { style: { height: size_1.ROATE(37), position: "absolute", borderWidth: size_1.ROATE(2), borderColor: "#BFBFBF", left: size_1.ROATE(74), top: 0, width: size_1.ROATE(37) } }),
                    react_1["default"].createElement(react_native_1.View, { style: { height: size_1.ROATE(37), position: "absolute", borderWidth: size_1.ROATE(2), borderColor: "#BFBFBF", left: size_1.ROATE(111), top: 0, width: size_1.ROATE(37) } }),
                    react_1["default"].createElement(react_native_1.View, { style: { height: size_1.ROATE(37), position: "absolute", borderWidth: size_1.ROATE(2), borderColor: "#BFBFBF", left: size_1.ROATE(148), top: 0, width: size_1.ROATE(37) } }),
                    react_1["default"].createElement(react_native_1.TextInput, { autoFocus: true, keyboardType: 'number-pad', style: { padding: 0, letterSpacing: size_1.ROATE(23) } }))))));
}
exports["default"] = InputPwd;
