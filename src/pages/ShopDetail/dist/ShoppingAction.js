"use strict";
exports.__esModule = true;
var react_1 = require("react");
var native_base_1 = require("native-base");
var react_native_1 = require("react-native");
var size_1 = require("../../assets/size");
var react_native_2 = require("react-native");
function SelecrtTag(_a) {
    var title = _a.title, _b = _a.list, list = _b === void 0 ? [{ title: "原味" }, { title: "原味" }, { title: "原味" }, { title: "原味" }, { title: "原味" }, { title: "原味" },
        { title: "原味" }, { title: "原味" }] : _b;
    var _c = react_1.useState(0), current = _c[0], setCurrent = _c[1];
    function Tag(_a) {
        var item = _a.item, current = _a.current, index = _a.index;
        var flag = current === index;
        return (react_1["default"].createElement(react_native_1.Pressable, { onPress: function () { return setCurrent(function () { return index; }); }, style: {
                backgroundColor: flag ? "transparent" : "#f5f5f5", borderRadius: size_1.ROATE(4), paddingHorizontal: size_1.ROATE(12), justifyContent: "center", alignItems: "center",
                marginRight: size_1.ROATE(12), paddingVertical: size_1.ROATE(3), height: flag ? size_1.ROATE(26) : size_1.ROATE(28), borderWidth: flag ? size_1.ROATE(2) : 0, borderColor: "#A6E284"
            } },
            react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(14), color: "rgba(0,0,0,0.9)", fontWeight: "400" } }, item.title)));
    }
    var tags = list.map(function (it, i) {
        return react_1["default"].createElement(Tag, { index: i, current: current, key: i, item: it });
    });
    return (react_1["default"].createElement(react_native_1.View, { style: { paddingHorizontal: size_1.ROATE(16), marginBottom: size_1.ROATE(24) } },
        react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(16), color: "rgba(0,0,0,0.9)", marginBottom: size_1.ROATE(12) } }, title),
        react_1["default"].createElement(native_base_1.ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false }, tags)));
}
function ShoppingAction(_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, navigation = _a.navigation;
    return (react_1["default"].createElement(native_base_1.Actionsheet, { isOpen: isOpen, onClose: onClose },
        react_1["default"].createElement(native_base_1.StatusBar, { backgroundColor: "rgba(0,0,0,0.3)" }),
        react_1["default"].createElement(native_base_1.Actionsheet.Content, { hideDragIndicator: true, height: size_1.ROATE(629), backgroundColor: "#fff", p: 0 },
            react_1["default"].createElement(native_base_1.Box, { height: size_1.ROATE(629), w: react_native_2.Dimensions.get("screen").width, justifyContent: "flex-start" },
                react_1["default"].createElement(native_base_1.ScrollView, { height: size_1.ROATE(201), horizontal: true, showsHorizontalScrollIndicator: false },
                    react_1["default"].createElement(react_native_1.Image, { style: styles.img, source: { uri: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/22.png" } }),
                    react_1["default"].createElement(react_native_1.Image, { style: styles.img, source: { uri: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/22.png" } }),
                    react_1["default"].createElement(react_native_1.Image, { style: styles.img, source: { uri: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/22.png" } })),
                react_1["default"].createElement(SelecrtTag, { title: "\u53E3\u5473" }),
                react_1["default"].createElement(SelecrtTag, { title: "\u89C4\u683C" }),
                react_1["default"].createElement(react_native_1.View, { style: { height: size_1.ROATE(188), marginTop: "auto", marginBottom: 0, borderTopWidth: size_1.ROATE(2), borderTopColor: "#E0E0E0" } },
                    react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", paddingHorizontal: size_1.ROATE(16), alignItems: "flex-end", paddingVertical: size_1.ROATE(15) } },
                        react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(16), fontWeight: "400", color: "rgba(0,0,0,0.95)" } }, "\uFFE5"),
                        react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(24), fontWeight: "600", color: "rgba(0,0,0,0.95)" } }, "30"),
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: { marginLeft: "auto", width: size_1.ROATE(20), height: size_1.ROATE(20), borderRadius: size_1.ROATE(10),
                                borderWidth: size_1.ROATE(3), borderColor: "rgba(0,0,0,0.45)", justifyContent: 'center', alignItems: "center" } },
                            react_1["default"].createElement(react_native_1.Text, null, "-")),
                        react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(16), color: "rgba(0,0,0,0.9)", marginHorizontal: size_1.ROATE(14) } }, "3"),
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: { width: size_1.ROATE(20), height: size_1.ROATE(20), borderRadius: size_1.ROATE(10),
                                backgroundColor: "#A6E284", justifyContent: 'center', alignItems: "center" } },
                            react_1["default"].createElement(react_native_1.Text, null, "+"))),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { navigation.navigate("BuyingPage"); }, style: { marginLeft: "auto", width: size_1.ROATE(192), height: size_1.ROATE(44), marginRight: "auto", borderRadius: size_1.ROATE(10),
                            borderWidth: size_1.ROATE(3), padding: 0, marginTop: size_1.ROATE(16), backgroundColor: "rgba(0,0,0,0.9)", justifyContent: 'center', alignItems: "center" } },
                        react_1["default"].createElement(react_native_1.Text, { style: { color: "rgba(255,255,255, 0.9)", fontSize: size_1.ROATE(16), fontStyle: "italic",
                                fontFamily: "YouSheBiaoTiHei", padding: 0 } }, "\u786E\u8BA4\u8D2D\u4E70")))))));
}
exports["default"] = ShoppingAction;
var styles = react_native_1.StyleSheet.create({
    img: {
        width: size_1.ROATE(250),
        height: size_1.ROATE(201),
        marginRight: size_1.ROATE(12)
    }
});
