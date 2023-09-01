"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_2 = require("@ant-design/react-native");
var size_1 = require("../../assets/size");
var imgs_1 = require("../../assets/imgs");
// import { RefreshNormalHeader } from 'react-native-smart-refresh';
var titleLine_1 = require("./titleLine");
var resrouceBag_1 = require("./resrouceBag");
var Window_1 = require("./Window");
var recommandBox_1 = require("./recommandBox");
var TitleControl_1 = require("./TitleControl");
function Home(_a) {
    var navigation = _a.navigation, route = _a.route;
    var _b = react_1.useState(false), refreshing = _b[0], setRefreshing = _b[1];
    var wait = function (timeout) {
        return new Promise(function (resolve) {
            setTimeout(resolve, timeout);
        });
    };
    var onRefresh = react_1.useCallback(function () {
        setRefreshing(function () { return true; });
        wait(1000).then(function () { return setRefreshing(function () { return false; }); });
    }, []);
    var getItem = function () {
        return ({
            title: "考验在每个时间段应该做什么事情？",
            tags: ["大一"],
            content: "考验在每个时间段应该做什么事情？考验在每个时间段应该做什么事情？考验在每个时间段应该做什么事情？考验在每个时间段应该做什么事情？考验在每个时间段应该做什么事情？考验在每个时间段应该做什么事情？考验在每个时间段应该做什么事情？考验在每个时间段应该做什么事情？考验在每个时间段应该做什么事情？",
            user: {
                avatar: "https://profile.csdnimg.cn/7/6/9/3_qq_36438460"
            }
        });
    };
    function RenderItem(_a) {
        var _b;
        var item = _a.item;
        var tags = item.tags.map(function (it, index) {
            return (react_1["default"].createElement(recommandBox_1.Tag, { key: index, text: it }));
        });
        return (react_1["default"].createElement(react_native_1.View, { style: {
                flexDirection: "row", marginHorizontal: size_1.ROATE(16), borderBottomWidth: size_1.ROATE(1.2),
                borderColor: "#0000001f", paddingVertical: size_1.ROATE(16)
            } },
            react_1["default"].createElement(react_native_1.Image, { style: { height: size_1.ROATE(44), borderRadius: size_1.ROATE(22), width: size_1.ROATE(44), marginRight: size_1.ROATE(12) }, source: { uri: (_b = item === null || item === void 0 ? void 0 : item.user) === null || _b === void 0 ? void 0 : _b.avatar } }),
            react_1["default"].createElement(react_native_1.View, { style: { width: size_1.ROATE(287) } },
                react_1["default"].createElement(react_native_1.Text, { numberOfLines: 1, style: { fontSize: size_1.ROATE(14), fontWeight: "500", marginBottom: size_1.ROATE(4), color: "#000000e6" } }, item.title),
                react_1["default"].createElement(react_native_1.Text, { numberOfLines: 1, style: { width: size_1.ROATE(287), fontSize: size_1.ROATE(12), fontWeight: "400", marginBottom: size_1.ROATE(15), color: "#00000073" } }, item.content),
                react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row" } }, tags))));
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.View, { style: {
                height: size_1.ROATE(54), flexDirection: "row", zIndex: 1, width: react_native_1.Dimensions.get("screen").width, paddingHorizontal: size_1.ROATE(16),
                alignItems: "center", backgroundColor: "#1F231D"
            } },
            react_1["default"].createElement(react_native_1.View, { style: {} },
                react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", alignItems: "center" } },
                    react_1["default"].createElement(react_native_1.Image, { style: { height: size_1.ROATE(18), width: size_1.ROATE(18), borderRadius: size_1.ROATE(9), marginRight: size_1.ROATE(4) }, source: { uri: "https://t15.baidu.com/it/u=1862413376,2714316349&fm=179&app=42&size=w54&n=0&f=JPEG&fmt=auto?s=AB73609219D6C7E11CC37A56030010F4&sec=1656176400&t=c41f0bf1fbf6eed1c1bb58d5031a9166" } }),
                    react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(12), color: "#fff" } }, "\u6D59\u6C5F\u7406\u5DE5\u5927\u5B66"))),
            react_1["default"].createElement(imgs_1.Download, null)),
        react_1["default"].createElement(react_native_1.VirtualizedList, { showsVerticalScrollIndicator: false, refreshControl: react_1["default"].createElement(react_native_1.RefreshControl, { refreshing: refreshing, onRefresh: onRefresh }), data: [], getItem: getItem, getItemCount: function () { return 50; }, renderItem: function (_a) {
                var item = _a.item, index = _a.index;
                return react_1["default"].createElement(RenderItem, { item: item, key: index });
            }, ListHeaderComponent: function () {
                return react_1["default"].createElement(react_native_1.View, { style: { backgroundColor: "#1c1e1b" } },
                    react_1["default"].createElement(react_native_1.View, { style: { backgroundColor: "#fff",
                            flexDirection: "row", paddingHorizontal: size_1.ROATE(23), paddingVertical: size_1.ROATE(9), alignItems: "center",
                            width: size_1.ROATE(343), borderRadius: size_1.ROATE(4), marginLeft: "auto", marginRight: "auto", height: size_1.ROATE(36)
                        } },
                        react_1["default"].createElement(react_native_2.Icon, { name: 'search', color: "#000", size: size_1.ROATE(16.2) }),
                        react_1["default"].createElement(react_native_1.Text, { style: { marginLeft: size_1.ROATE(6), color: "rgba(0,0,0,0.3)", fontSize: size_1.ROATE(12) } }, "\u641C\u7D22\u5546\u54C1")),
                    react_1["default"].createElement(react_native_1.View, { style: { paddingBottom: size_1.ROATE(20), paddingHorizontal: size_1.ROATE(17), backgroundColor: "#fff", marginTop: size_1.ROATE(16),
                            borderTopRightRadius: size_1.ROATE(16), borderTopLeftRadius: size_1.ROATE(16) } },
                        react_1["default"].createElement(titleLine_1["default"], { route: route, navigation: navigation, title: "资源包精选" }),
                        react_1["default"].createElement(resrouceBag_1["default"], null),
                        react_1["default"].createElement(titleLine_1["default"], { route: route, navigation: navigation, title: "成长橱窗" }),
                        react_1["default"].createElement(Window_1["default"], null),
                        react_1["default"].createElement(titleLine_1["default"], { route: route, navigation: navigation, title: "青氪推荐.精选干货" }),
                        react_1["default"].createElement(recommandBox_1["default"], null)),
                    react_1["default"].createElement(TitleControl_1["default"], { titles: ["全部", "一站式推送"] }));
            }, style: { backgroundColor: "#fff", height: react_native_1.Dimensions.get("screen").height } })));
}
exports["default"] = Home;
var styles = react_native_1.StyleSheet.create({
    img: {
        height: size_1.ROATE(105),
        width: size_1.ROATE(105),
        marginRight: size_1.ROATE(13.2),
        borderRadius: size_1.ROATE(5.6)
    },
    contentItem: {
        backgroundColor: "#F0F0F0",
        padding: size_1.ROATE(18),
        marginTop: size_1.ROATE(16),
        borderRadius: size_1.ROATE(6)
    }
});
