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
var react_native_1 = require("@ant-design/react-native");
var native_base_1 = require("native-base");
var react_1 = require("react");
var react_native_2 = require("react-native");
var size_1 = require("../../../assets/size");
function ProvinceItem(_a) {
    var province = _a.province, _b = _a.isFirst, isFirst = _b === void 0 ? false : _b;
    return (react_1["default"].createElement(react_native_2.TouchableOpacity, { style: {
            height: size_1.ROATE(38), alignItems: "center",
            flexDirection: "row", paddingLeft: size_1.ROATE(24), paddingRight: size_1.ROATE(24)
        } },
        react_1["default"].createElement(react_native_2.View, { style: { width: 1, height: "100%", backgroundColor: "#8c8c8c" } },
            react_1["default"].createElement(react_native_2.View, { style: { width: size_1.ROATE(5), height: size_1.ROATE(5), borderRadius: size_1.ROATE(2), backgroundColor: "#000", position: "absolute", bottom: 0, left: size_1.ROATE(-1) } }),
            react_1["default"].createElement(react_native_2.View, { style: {
                    width: size_1.ROATE(5), height: size_1.ROATE(5), borderRadius: size_1.ROATE(2), backgroundColor: "#000", position: "absolute", top: 0,
                    display: isFirst ? "flex" : "none", left: size_1.ROATE(-1)
                } })),
        react_1["default"].createElement(native_base_1.Text, { style: { marginLeft: size_1.ROATE(22) } }, province),
        react_1["default"].createElement(react_native_1.Icon, { name: 'arrow-right', style: { marginLeft: "auto" } })));
}
function EditAddr(_a) {
    var navigation = _a.navigation, route = _a.route;
    var datas = __assign({}, route.params);
    var _b = native_base_1.useDisclose(), isOpen = _b.isOpen, onOpen = _b.onOpen, onClose = _b.onClose;
    var name = react_1.useRef();
    var phone = react_1.useRef();
    var isDefault = react_1.useRef();
    var location = react_1.useRef();
    var goShopPage = react_1.useCallback(function () {
        navigation.navigate("AddressManager");
    }, []);
    return (react_1["default"].createElement(react_native_2.View, { style: styles.container },
        react_1["default"].createElement(react_native_2.View, { style: styles.header },
            react_1["default"].createElement(react_native_2.View, { style: __assign({}, styles.headerLine) },
                react_1["default"].createElement(react_native_1.Icon, { onPress: goShopPage, style: {
                        marginLeft: size_1.ROATE(8), position: "absolute", top: size_1.ROATE(-1),
                        left: size_1.ROATE(12)
                    }, name: 'arrow-left', color: '#000' }),
                react_1["default"].createElement(native_base_1.Text, { style: {
                        fontSize: size_1.ROATE(16), marginLeft: "auto", marginRight: "auto",
                        color: "#000"
                    } }, "\u7F16\u8F91\u6536\u8D27\u5730\u5740"),
                react_1["default"].createElement(native_base_1.Text, { style: {
                        position: "absolute", right: size_1.ROATE(16), zIndex: 10,
                        fontSize: size_1.ROATE(16), fontWeight: "400", color: "#000"
                    } }, "\u5220\u9664"))),
        react_1["default"].createElement(react_native_2.View, { style: styles.content },
            react_1["default"].createElement(react_native_2.View, { style: styles.contentLine },
                react_1["default"].createElement(native_base_1.Text, { style: styles.contentInfo }, "\u6536\u8D27\u4EBA"),
                react_1["default"].createElement(react_native_2.TextInput, { ref: name, style: styles.contentInput, defaultValue: datas.name })),
            react_1["default"].createElement(react_native_2.View, { style: styles.contentLine },
                react_1["default"].createElement(native_base_1.Text, { style: styles.contentInfo }, "\u624B\u673A\u53F7\u7801"),
                react_1["default"].createElement(react_native_2.TextInput, { ref: phone, style: styles.contentInput, defaultValue: datas.phone })),
            react_1["default"].createElement(react_native_2.View, { style: styles.contentLine },
                react_1["default"].createElement(native_base_1.Text, { style: styles.contentInfo }, "\u6240\u5728\u5730\u533A"),
                react_1["default"].createElement(react_native_2.TextInput, { ref: location, style: styles.contentInput, defaultValue: datas.location })),
            react_1["default"].createElement(react_native_2.View, { style: __assign(__assign({}, styles.contentLine), { height: "auto" }) },
                react_1["default"].createElement(native_base_1.Text, { style: styles.contentInfo }, "\u8BE6\u7EC6\u5730\u5740"),
                react_1["default"].createElement(react_native_2.View, { style: {
                        flexDirection: "row", width: size_1.ROATE(264), borderRadius: size_1.ROATE(12),
                        backgroundColor: "#d7d7d7", alignItems: "center", overflow: "hidden"
                    } },
                    react_1["default"].createElement(react_native_2.TouchableOpacity, { onPressOut: onOpen, style: __assign(__assign({}, styles.contentInput), { width: size_1.ROATE(230), padding: size_1.ROATE(9), height: "auto" }) },
                        react_1["default"].createElement(native_base_1.Text, null,
                            route.params.location,
                            " ")),
                    react_1["default"].createElement(react_native_1.Icon, { style: { marginLeft: "auto", marginRight: size_1.ROATE(9) }, size: size_1.ROATE(28), color: "#000", name: 'lock' }))),
            react_1["default"].createElement(react_native_2.View, { style: styles.contentLine },
                react_1["default"].createElement(native_base_1.Text, { style: styles.contentInfo }, "\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\u6536\u8D27\u5730\u5740"),
                react_1["default"].createElement(native_base_1.Switch, { size: "sm", value: route.params.isDefault, onChange: function () {
                        route.params.isDefault = !route.params.isDefault;
                    }, onTrackColor: "#202020" })),
            react_1["default"].createElement(react_native_2.TouchableOpacity, { onPressOut: function () {
                    // route.params.setAddressList((prev:any[])=> 
                    // prev[route.params.index]
                    // )
                    // 发送ajax请求更该数据
                    datas.setAddressList(function (prev) {
                        console.log(datas.index);
                        prev[datas.index] = datas;
                        console.log(phone.current, 22);
                        console.log(prev[datas.index]);
                        // console.log(prev.includes(datas));
                        return prev;
                    });
                    // navigation.navigate("AddressManager")
                }, style: styles.saveBtn },
                react_1["default"].createElement(native_base_1.Text, { style: { color: "#fff", fontSize: size_1.ROATE(20) } }, "\u4FDD\u5B58")),
            react_1["default"].createElement(native_base_1.Actionsheet, { onClose: onClose, isOpen: isOpen },
                react_1["default"].createElement(native_base_1.Actionsheet.Content, null,
                    react_1["default"].createElement(react_native_2.View, { style: {
                            flexDirection: "row", width: size_1.ROATE(375),
                            justifyContent: "center", alignItems: "center"
                        } },
                        react_1["default"].createElement(react_native_1.Icon, { style: { position: "absolute", left: size_1.ROATE(16) }, name: 'fork', color: '#000' }),
                        react_1["default"].createElement(native_base_1.Text, { style: { textAlign: 'center' } }, "\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A")),
                    react_1["default"].createElement(native_base_1.ScrollView, { style: { width: size_1.ROATE(375) } },
                        react_1["default"].createElement(ProvinceItem, { isFirst: true, province: "浙江" }),
                        react_1["default"].createElement(ProvinceItem, { province: "南京" })),
                    react_1["default"].createElement(native_base_1.Text, { style: { width: size_1.ROATE(375), margin: size_1.ROATE(10), fontSize: size_1.ROATE(16), marginLeft: size_1.ROATE(40) } }, "\u9009\u62E9\u57CE\u5E02"),
                    react_1["default"].createElement(native_base_1.ScrollView, { style: { width: size_1.ROATE(375) } },
                        react_1["default"].createElement(ProvinceItem, { isFirst: true, province: "杭州" }),
                        react_1["default"].createElement(ProvinceItem, { province: "嘉兴" }),
                        react_1["default"].createElement(ProvinceItem, { province: "宁波" })))))));
}
exports["default"] = EditAddr;
var styles = react_native_2.StyleSheet.create({
    container: {
        height: react_native_2.Dimensions.get("screen").height,
        backgroundColor: "#f5f5f5"
    },
    header: {
        // height: ROATE(151),
        backgroundColor: "#d7d7d7"
    },
    headerLine: {
        height: size_1.ROATE(38),
        zIndex: 1
    },
    addressList: {},
    btnWrap: {
        width: size_1.ROATE(120),
        height: size_1.ROATE(29),
        borderRadius: size_1.ROATE(45),
        justifyContent: "center",
        alignItems: "center"
    },
    btnFont: {
        fontSize: size_1.ROATE(14)
    },
    content: {
        padding: size_1.ROATE(16)
    },
    contentInfo: {
        fontSize: size_1.ROATE(16)
    },
    contentLine: {
        height: size_1.ROATE(34),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: size_1.ROATE(16)
    },
    contentInput: {
        backgroundColor: "#d7d7d7",
        width: size_1.ROATE(264),
        height: size_1.ROATE(40),
        borderRadius: size_1.ROATE(8),
        paddingLeft: size_1.ROATE(9)
    },
    saveBtn: {
        width: size_1.ROATE(275),
        height: size_1.ROATE(44),
        backgroundColor: "#000",
        borderRadius: size_1.ROATE(12),
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center",
        justifyContent: "center",
        marginTop: size_1.ROATE(29)
    }
});
