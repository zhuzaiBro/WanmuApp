"use strict";
exports.__esModule = true;
var react_1 = require("react");
var native_base_1 = require("native-base");
var size_1 = require("../../assets/size");
var react_native_1 = require("@ant-design/react-native");
var react_native_2 = require("react-native");
function BuyingActionSheet(_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, navigation = _a.navigation, setModalVisible = _a.setModalVisible, setPwdVisible = _a.setPwdVisible;
    return (react_1["default"].createElement(native_base_1.Actionsheet, { isOpen: isOpen, onClose: onClose },
        react_1["default"].createElement(native_base_1.Actionsheet.Content, { style: { backgroundColor: "#fff", height: size_1.ROATE(447) }, hideDragIndicator: true },
            react_1["default"].createElement(native_base_1.Box, { style: { width: react_native_2.Dimensions.get("screen").width, paddingHorizontal: size_1.ROATE(16) } },
                react_1["default"].createElement(react_native_1.Icon, { onPress: function () { return setModalVisible(function (prev) { return !prev; }); }, style: { padding: size_1.ROATE(5), marginTop: size_1.ROATE(21), marginBottom: size_1.ROATE(18) }, color: "#202020", name: 'node-index' }),
                react_1["default"].createElement(react_native_2.Text, { style: { textAlign: 'center', marginBottom: size_1.ROATE(28), fontSize: size_1.ROATE(32), fontWeight: "600", color: "rgba(0,0,0,0.95)" } }, "\uFFE5 30"),
                react_1["default"].createElement(react_native_2.Text, { style: { marginBottom: size_1.ROATE(20), fontSize: size_1.ROATE(14), fontWeight: "400" } }, "\u652F\u4ED8\u65B9\u5F0F"),
                react_1["default"].createElement(react_native_2.View, { style: styles.payMetod },
                    react_1["default"].createElement(react_native_2.Text, { style: styles.f14w5 }, "\u4F59\u989D"),
                    react_1["default"].createElement(native_base_1.Checkbox, { onChange: function () {
                            setPwdVisible(function (prev) { return !prev; });
                        }, value: 'yue' })),
                react_1["default"].createElement(react_native_2.View, { style: styles.payMetod },
                    react_1["default"].createElement(react_native_2.Text, { style: styles.f14w5 }, "\u94F6\u884C\u5361"),
                    react_1["default"].createElement(native_base_1.Checkbox, { onChange: function () {
                            setPwdVisible(function (prev) { return !prev; });
                        }, value: 'yue' })),
                react_1["default"].createElement(react_native_2.View, { style: styles.payMetod },
                    react_1["default"].createElement(react_native_2.Text, { style: styles.f14w5 }, "\u5FAE\u4FE1"),
                    react_1["default"].createElement(native_base_1.Checkbox, { onChange: function () {
                            setPwdVisible(function (prev) { return !prev; });
                        }, value: 'yue' })),
                react_1["default"].createElement(react_native_2.View, { style: { width: size_1.ROATE(343), height: size_1.ROATE(44), backgroundColor: "#f5f5f5", borderRadius: size_1.ROATE(8),
                        flexDirection: "row", marginLeft: "auto", justifyContent: "center", alignItems: "center", marginRight: "auto" } },
                    react_1["default"].createElement(react_native_1.Icon, { size: size_1.ROATE(16), name: 'warning', color: "#EFD370" }),
                    react_1["default"].createElement(react_native_2.Text, { style: { marginLeft: size_1.ROATE(8), fontSize: size_1.ROATE(14), fontWeight: "400" } }, "\u6CE8\u610F\uFF1A\u9700\u4F7F\u7528\u4F59\u989D\uFF0C\u624D\u80FD\u4EAB\u53D7\u4F1A\u5458\u798F\u5229\uFF01"))))));
}
exports["default"] = BuyingActionSheet;
var styles = react_native_2.StyleSheet.create({
    payMetod: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: size_1.ROATE(20),
        justifyContent: "space-between"
    },
    f14w5: {
        fontSize: size_1.ROATE(14),
        fontWeight: "500",
        color: "rgba(0,0,0,0.9)"
    }
});
