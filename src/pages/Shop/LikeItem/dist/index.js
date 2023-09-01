"use strict";
exports.__esModule = true;
var native_base_1 = require("native-base");
var react_1 = require("react");
var react_native_1 = require("react-native");
var size_1 = require("../../../assets/size");
var react_native_swipe_list_view_1 = require("react-native-swipe-list-view");
var DefineHeader_1 = require("../components/DefineHeader");
function LikeItem(_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(Array(11)
        .fill("")
        .map(function (_, i) { return ({ key: "" + i, text: "item #" + i }); })), listViewData = _b[0], setListData = _b[1];
    var goShopPage = react_1.useCallback(function () {
        navigation.navigate("Shop");
    }, []);
    var allCheck = [];
    var selectItems = [];
    var _c = react_1.useState(false), isAllChecked = _c[0], setIsAllChecked = _c[1];
    var RenderLikeItem = function (_a) {
        var data = _a.data;
        var _b = react_1.useState(false), isOK = _b[0], setOK = _b[1];
        // 放入全选集合中
        allCheck.push(setOK);
        var addItems = react_1.useCallback(function () {
            selectItems.push(data.item);
            setOK(function (prev) { return !prev; });
        }, []);
        return (react_1["default"].createElement(native_base_1.View, { style: styles.rowFront },
            react_1["default"].createElement(native_base_1.Checkbox, { style: { marginRight: size_1.ROATE(12) }, onChange: addItems, isChecked: isOK || isAllChecked, value: "ok" }),
            react_1["default"].createElement(react_native_1.Image, { source: { uri: "http://www.zhuzaibrother.cn/static/upload/2022-5-7-20-40-55-739-99447.jpg" }, style: { width: size_1.ROATE(80), height: size_1.ROATE(80), borderRadius: 2, marginRight: size_1.ROATE(10) } }),
            react_1["default"].createElement(native_base_1.View, { style: { flexDirection: "row" } },
                react_1["default"].createElement(native_base_1.Text, { style: { fontSize: size_1.ROATE(14), fontWeight: "400" } },
                    "I am ",
                    data.item.text,
                    " in a SwipeListView"),
                react_1["default"].createElement(native_base_1.Text, { style: { marginTop: "auto", fontSize: size_1.ROATE(20) } }, "\u00A5 20"))));
    };
    function deleteData() {
        setListData(function (prev) { return prev.filter(function (it) { return selectItems.includes(it); }); });
    }
    return (react_1["default"].createElement(native_base_1.View, null,
        react_1["default"].createElement(DefineHeader_1["default"], { navigation: navigation, title: "\u6211\u7684\u6536\u85CF" }),
        react_1["default"].createElement(react_native_swipe_list_view_1.SwipeListView, { style: { padding: size_1.ROATE(16), height: size_1.ROATE(610) }, data: listViewData, renderItem: function (data, rowMap) { return (react_1["default"].createElement(RenderLikeItem, { data: data })); }, renderHiddenItem: function (data, rowMap) { return (react_1["default"].createElement(native_base_1.View, { style: styles.rowBack },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: {
                        // display: "none",
                        height: size_1.ROATE(107), width: size_1.ROATE(64),
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        justifyContent: "center", alignItems: "center"
                    } },
                    react_1["default"].createElement(native_base_1.Text, { style: { color: "#fff" } }, "\u6279\u91CF\u5220\u9664")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPressOut: function () {
                        setListData(function (prev) { return prev.filter(function (it, index) { return index !== data.index; }); });
                    }, style: {
                        height: size_1.ROATE(107), width: size_1.ROATE(64),
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        justifyContent: "center", alignItems: "center"
                    } },
                    react_1["default"].createElement(native_base_1.Text, { style: { color: "#fff", textAlign: "center" } }, "\u5220\u9664")))); }, leftOpenValue: 75, rightOpenValue: -size_1.ROATE(130) }),
        react_1["default"].createElement(native_base_1.View, { style: {
                backgroundColor: "#fff",
                marginBottom: 0, height: size_1.ROATE(120), flexDirection: "row", padding: size_1.ROATE(22)
            } },
            react_1["default"].createElement(native_base_1.Checkbox, { isChecked: listViewData && isAllChecked, onChange: function () {
                    setIsAllChecked(function (prev) { return !prev; });
                    selectItems = listViewData;
                    allCheck.forEach(function (item) {
                        item(function (prev) { return !prev; });
                    });
                }, value: 'false' },
                react_1["default"].createElement(native_base_1.Text, null, "\u5168\u9009")),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: {
                    marginLeft: "auto", width: size_1.ROATE(80), borderRadius: size_1.ROATE(100),
                    justifyContent: "center", alignItems: 'center',
                    height: size_1.ROATE(36), borderWidth: 1,
                    marginRight: size_1.ROATE(16)
                } },
                react_1["default"].createElement(native_base_1.Text, null, "\u53D6\u6D88\u8BA2\u5355")),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: deleteData, style: {
                    width: size_1.ROATE(80), borderRadius: size_1.ROATE(100),
                    justifyContent: "center", alignItems: 'center',
                    height: size_1.ROATE(36), backgroundColor: "rgba(0,0,0,0.6)"
                } },
                react_1["default"].createElement(native_base_1.Text, { style: { color: "#fff" } }, "\u5220\u9664\u5DF2\u9009")))));
}
exports["default"] = LikeItem;
var styles = react_native_1.StyleSheet.create({
    container: {
        height: react_native_1.Dimensions.get("screen").height,
        backgroundColor: "#f5f5f5"
    },
    header: {
        backgroundColor: "#d7d7d7"
    },
    headerLine: {
        height: size_1.ROATE(38),
        zIndex: 1
    },
    rowFront: {
        alignItems: "center",
        backgroundColor: "#fff",
        marginBottom: size_1.ROATE(16),
        height: size_1.ROATE(107),
        flexDirection: "row",
        padding: size_1.ROATE(12),
        borderRadius: size_1.ROATE(4)
    },
    rowBack: {
        overflow: "hidden",
        height: size_1.ROATE(107),
        width: size_1.ROATE(343),
        borderRadius: size_1.ROATE(4),
        flexDirection: "row",
        justifyContent: 'flex-end'
    }
});
