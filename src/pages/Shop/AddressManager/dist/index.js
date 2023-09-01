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
var clipboard_1 = require("@react-native-community/clipboard");
function AddressManager(_a) {
    var navigation = _a.navigation;
    // 用于打开提示复制消息
    var _b = native_base_1.useDisclose(), isOpen = _b.isOpen, onOpen = _b.onOpen, onClose = _b.onClose;
    // 用于记录被复制的地址索引
    var _c = react_1.useState(0), copyAddr = _c[0], setAddr = _c[1];
    // 用于记录是否在编辑内容
    var _d = react_1.useState(false), isEdit = _d[0], setIsEdit = _d[1];
    var _e = react_1.useState(false), deleteAddr = _e[0], setDeletAddr = _e[1];
    // 表示被选中的地址的索引，用于删除操作
    var _f = react_1.useState(0), selectIndex = _f[0], setSelectIndex = _f[1];
    //  复制地址的操作
    var copyAddress = function (index, str) {
        onOpen();
        // 执行复制操作
        clipboard_1["default"].setString(str);
        setTimeout(function () {
            onClose();
        }, 800);
    };
    var _g = react_1.useState([
        {
            location: "dsadsad",
            phone: "15024359582",
            name: "zhujie",
            isDefault: true
        }, {
            location: "浙江省 杭州市 钱塘区 白杨街道下沙高教区浙江理工大学生活2区域菜鸟驿站",
            phone: "15024359582",
            name: "zhujie",
            isDefault: false
        }, {
            location: "dsadsad",
            phone: "15024359582",
            name: "zhujie",
            isDefault: false
        },
    ]), addressList = _g[0], setAddressList = _g[1];
    var editAddrs = function () {
        setIsEdit(function (prev) { return !prev; });
    };
    // 更改默认地址
    var changeDefault = react_1.useCallback(function (index) {
        setAddressList(function (prev) { return prev.map(function (item, i) { return (__assign(__assign({}, item), { isDefault: i === index ? true : false })); }); });
    }, []);
    var goShopPage = react_1.useCallback(function () {
        navigation.navigate("Shop");
    }, []);
    function ListRenderItem(_a) {
        var item = _a.item, index = _a.index, changeDefault = _a.changeDefault;
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(react_native_2.View, { style: {
                    flexDirection: "row", backgroundColor: "#fff",
                    width: size_1.ROATE(343),
                    marginLeft: "auto", marginRight: "auto", height: size_1.ROATE(98),
                    borderTopLeftRadius: isEdit ? size_1.ROATE(22) : index === 0 ? size_1.ROATE(22) : 0,
                    borderTopRightRadius: isEdit ? size_1.ROATE(22) : index === 0 ? size_1.ROATE(22) : 0,
                    padding: size_1.ROATE(16),
                    borderBottomLeftRadius: index === addressList.length - 1 ? isEdit ? 0 : size_1.ROATE(22) : 0,
                    borderBottomRightRadius: index === addressList.length - 1 ? isEdit ? 0 : size_1.ROATE(22) : 0
                } },
                react_1["default"].createElement(react_native_1.Icon, { name: 'home', color: '#000', size: size_1.ROATE(28), style: {
                        width: size_1.ROATE(50),
                        height: size_1.ROATE(50),
                        backgroundColor: "#eee",
                        lineHeight: size_1.ROATE(50), textAlign: "center",
                        borderRadius: size_1.ROATE(25),
                        overflow: "hidden",
                        marginTop: "auto", marginBottom: "auto", marginRight: size_1.ROATE(13)
                    } }),
                react_1["default"].createElement(react_native_2.View, { style: { flexGrow: 1 } },
                    react_1["default"].createElement(react_native_2.View, { style: { flexDirection: "row" } },
                        react_1["default"].createElement(native_base_1.Text, { style: { fontSize: size_1.ROATE(16), color: "#000", fontWeight: "700", marginRight: size_1.ROATE(10) } }, item.name),
                        react_1["default"].createElement(native_base_1.Text, { style: { fontSize: size_1.ROATE(12), marginRight: size_1.ROATE(10) } }, item.phone),
                        react_1["default"].createElement(native_base_1.Text, { style: {
                                fontSize: size_1.ROATE(10), display: item.isDefault ? "flex" : "none", borderWidth: 1, borderRadius: 2,
                                height: size_1.ROATE(19), width: size_1.ROATE(31), textAlign: "center", borderColor: "rgba(0,0,0,0.45)", color: "#000"
                            } }, "\u9ED8\u8BA4")),
                    react_1["default"].createElement(native_base_1.Tooltip, { label: '\u590D \u5236', style: { bottom: size_1.ROATE(70) }, isOpen: copyAddr === index && isOpen, openDelay: 1, bg: "black", _text: {
                            color: "#fff"
                        } },
                        react_1["default"].createElement(native_base_1.Text, { onPress: function () {
                                setAddr(function () { return index; });
                                copyAddress(index, item.location);
                            }, style: {
                                marginTop: size_1.ROATE(8), width: size_1.ROATE(226), fontSize: size_1.ROATE(12), fontWeight: "400"
                            } }, item.location))),
                react_1["default"].createElement(react_native_2.TouchableOpacity, { onPressOut: function () { navigation.navigate("EditAddress", __assign(__assign({}, item), { index: index, setAddressList: setAddressList })); } },
                    react_1["default"].createElement(react_native_1.Icon, { name: 'edit', color: '#000', size: size_1.ROATE(28), style: {
                            marginRight: size_1.ROATE(12)
                        } }))),
            react_1["default"].createElement(react_native_2.View, { style: {
                    display: isEdit ? "flex" : 'none',
                    marginBottom: isEdit ? size_1.ROATE(16) : 0,
                    width: size_1.ROATE(343),
                    marginLeft: "auto", marginRight: "auto",
                    borderBottomRightRadius: size_1.ROATE(16),
                    borderBottomLeftRadius: size_1.ROATE(16),
                    borderTopWidth: 1, alignItems: "center",
                    borderTopColor: "#000",
                    overflow: "hidden",
                    flexDirection: "row", backgroundColor: "#fff", padding: isEdit ? size_1.ROATE(16) : 0
                } },
                react_1["default"].createElement(react_native_2.TouchableOpacity, { onPressOut: function () {
                        changeDefault(index);
                    }, style: {
                        zIndex: 1,
                        width: size_1.ROATE(17), borderWidth: isEdit ? 1 : 0, justifyContent: "center",
                        alignItems: "center",
                        height: isEdit ? size_1.ROATE(17) : 0, borderRadius: size_1.ROATE(8.5)
                    } },
                    react_1["default"].createElement(react_native_1.Icon, { name: 'apple', size: size_1.ROATE(14), style: {
                            display: item.isDefault ? "flex" : "none",
                            width: size_1.ROATE(17), borderWidth: isEdit ? 1 : 0,
                            height: isEdit ? size_1.ROATE(17) : 0, borderRadius: size_1.ROATE(8.5),
                            color: "#fff", backgroundColor: "#000", overflow: "hidden"
                        } })),
                react_1["default"].createElement(native_base_1.Text, { onPressOut: function () {
                        changeDefault(index);
                    }, style: {
                        marginLeft: size_1.ROATE(12), zIndex: 1, fontSize: size_1.ROATE(12)
                    } }, "\u9ED8\u8BA4\u5730\u5740"),
                react_1["default"].createElement(react_native_2.TouchableOpacity, { onPressOut: function () {
                        setDeletAddr(function () {
                            setSelectIndex(function () { return index; });
                            return true;
                        });
                    }, style: { zIndex: 1, marginRight: 0, marginLeft: "auto" } },
                    react_1["default"].createElement(native_base_1.Text, { style: { color: "#000", fontSize: size_1.ROATE(12) } }, "\u5220\u9664")))));
    }
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
                    } }, "\u6211\u7684\u6536\u8D27\u5730\u5740"),
                react_1["default"].createElement(native_base_1.Text, { onPress: editAddrs, style: {
                        position: "absolute", right: size_1.ROATE(16), zIndex: 10,
                        fontSize: size_1.ROATE(16), fontWeight: "400", color: "#000"
                    } }, isEdit ? "完成" : "管理"))),
        react_1["default"].createElement(native_base_1.FlatList, { renderItem: function (_a) {
                var item = _a.item, index = _a.index;
                return react_1["default"].createElement(ListRenderItem, { index: index, item: item, changeDefault: changeDefault });
            }, data: addressList }),
        react_1["default"].createElement(react_native_2.TouchableOpacity, { onPressOut: function () {
                setDeletAddr(function () { return true; });
            }, style: {
                position: "absolute", width: size_1.ROATE(275), height: size_1.ROATE(44), left: size_1.ROATE(50),
                bottom: size_1.ROATE(80), backgroundColor: "#000", borderRadius: size_1.ROATE(12), justifyContent: "center", flexDirection: "row",
                alignItems: "center"
            } },
            react_1["default"].createElement(react_native_1.Icon, { name: 'file-add', size: size_1.ROATE(22), style: { marginRight: size_1.ROATE(6) }, color: '#fff' }),
            react_1["default"].createElement(native_base_1.Text, { style: { color: "#fff", fontSize: size_1.ROATE(20) } }, "\u6DFB\u52A0\u6536\u8D27\u5730\u5740")),
        react_1["default"].createElement(native_base_1.Modal, { isOpen: deleteAddr },
            react_1["default"].createElement(native_base_1.Modal.Content, null,
                react_1["default"].createElement(react_native_2.View, { style: { width: size_1.ROATE(300), padding: size_1.ROATE(16), height: size_1.ROATE(117), backgroundColor: "#fff" } },
                    react_1["default"].createElement(native_base_1.Text, { style: { fontSize: size_1.ROATE(16), textAlign: "center", color: "#000", marginTop: size_1.ROATE(14) } }, "\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u5730\u5740\u5417\uFF1F"),
                    react_1["default"].createElement(react_native_2.View, { style: { flexDirection: "row", marginTop: size_1.ROATE(20) } },
                        react_1["default"].createElement(react_native_2.TouchableOpacity, { style: __assign(__assign({}, styles.btnWrap), { backgroundColor: "#fff", marginRight: size_1.ROATE(12), borderWidth: 1 }) },
                            react_1["default"].createElement(native_base_1.Text, { style: __assign(__assign({}, styles.btnFont), { color: "#000" }) }, "\u53D6\u6D88")),
                        react_1["default"].createElement(react_native_2.TouchableOpacity, { onPressOut: function () {
                                setDeletAddr(function () { return false; });
                                // 删除地址
                                setAddressList(function (prev) { return prev.filter(function (item, i) { return i !== selectIndex; }); });
                            }, style: __assign(__assign({}, styles.btnWrap), { backgroundColor: "#000", borderWidth: 1 }) },
                            react_1["default"].createElement(native_base_1.Text, { style: __assign(__assign({}, styles.btnFont), { color: "#fff" }) }, "\u5220\u9664"))))))));
}
exports["default"] = AddressManager;
var styles = react_native_2.StyleSheet.create({
    container: {
        height: react_native_2.Dimensions.get("screen").height,
        backgroundColor: "#d7d7d7"
    },
    header: {
        // height: ROATE(151),
        backgroundColor: "#d7d7d7"
    },
    headerLine: {
        height: size_1.ROATE(44),
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
    }
});
