"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var RefreshScrollView_1 = require("../../components/RefreshScrollView");
function Follow(_a) {
    var navigation = _a.navigation, route = _a.route;
    var _b = react_1.useState([]), follows = _b[0], setFollows = _b[1];
    var list = ["朱杰", "吕铭洲", "小铭哥", "猪宰", "路人甲", "路人乙", "路人丙"];
    react_1.useEffect(function () {
        setFollows(list.map(function (item, i) {
            return (react_1["default"].createElement(react_native_1.View, { key: i, style: { flexDirection: "row", padding: 12, backgroundColor: "#f5f5aa", borderRadius: 12, marginBottom: 12 } },
                react_1["default"].createElement(react_native_1.Image, { style: { height: 80, borderRadius: 40, width: 80, marginRight: 12 }, source: { uri: "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" } }),
                react_1["default"].createElement(react_native_1.View, { style: { flexGrow: 1 } },
                    react_1["default"].createElement(react_native_1.Text, { style: { color: "#f40" } }, item),
                    react_1["default"].createElement(react_native_1.Text, null, "\u84DD\u4E5F\u662F\u4E00\u79CD\u6001\u5EA6\u554A  ")),
                react_1["default"].createElement(react_native_1.Text, { style: {
                        marginTop: "auto", marginBottom: "auto", height: 38, backgroundColor: "#202020", padding: 8, color: "#fff",
                        borderRadius: 5
                    } }, "\u4E92\u5173")));
        }));
        // 发送一个请求得到这个user的关注列表
    }, []);
    return (react_1["default"].createElement(RefreshScrollView_1["default"], { title: '\u7D2F\u554A,\u522B\u5237\u4E86', style: { backgroundColor: "#fff", padding: 24, paddingTop: 12 } },
        react_1["default"].createElement(react_native_1.View, { style: { borderWidth: 2, padding: 8, borderColor: "#202020", borderRadius: 6, paddingTop: 12 } }, follows)));
}
exports["default"] = Follow;
