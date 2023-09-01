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
exports.DynamicList = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var size_1 = require("../../assets/size");
var react_native_2 = require("@ant-design/react-native");
var react_native_image_zoom_viewer_1 = require("react-native-image-zoom-viewer");
var scrollList_1 = require("./scrollList");
// import { RefreshNormalHeader } from 'react-native-smart-refresh'
var react_native_linear_gradient_1 = require("react-native-linear-gradient");
var assets_1 = require("./assets");
var RouterHelper_1 = require("../../utils/RouterHelper");
function DynamicList(_a) {
    var _b = _a.stickTopComp, stickTopComp = _b === void 0 ? function () { return react_1["default"].createElement(react_1["default"].Fragment, null); } : _b, DATA = _a.DATA, getItemCount = _a.getItemCount, getItem = _a.getItem, renderItem = _a.renderItem;
    var _c = react_1.useState(false), refresh = _c[0], setRefresh = _c[1];
    var wait = function (timeout) {
        return new Promise(function (resolve) {
            setTimeout(resolve, timeout);
        });
    };
    var onRefresh = react_1.useCallback(function () {
        setRefresh(function () { return true; });
        wait(1000).then(function () { return setRefresh(function () { return false; }); });
    }, []);
    return (react_1["default"].createElement(react_native_1.VirtualizedList, { refreshControl: react_1["default"].createElement(react_native_1.RefreshControl, { refreshing: refresh, onRefresh: onRefresh }), ListHeaderComponent: stickTopComp, style: { backgroundColor: "#fff" }, showsVerticalScrollIndicator: false, disableVirtualization: true, data: DATA, initialNumToRender: 12, renderItem: renderItem, keyExtractor: function (item) { return item.id; }, getItemCount: getItemCount, getItem: getItem }));
}
exports.DynamicList = DynamicList;
function Header() {
    var _a = react_1.useState(0), currentIndex = _a[0], setIndex = _a[1];
    var tagList = [
        {
            name: "推荐",
            to: ""
        },
        {
            name: "关注",
            to: ""
        },
        {
            name: "本校",
            to: ""
        }
    ];
    var RnederItem = function (_a) {
        var item = _a.item, index = _a.index;
        return (react_1["default"].createElement(react_native_1.Text, { onPress: function () {
                setIndex(function () { return index; });
            }, style: __assign(__assign({}, styles.headerFont), { fontWeight: currentIndex === index ? "700" : "400" }) }, item.name));
    };
    var List = tagList.map(function (it, i) {
        return (react_1["default"].createElement(RnederItem, { key: i, index: i, item: it }));
    });
    return (react_1["default"].createElement(react_native_1.View, { style: {
            height: size_1.ROATE(44),
            backgroundColor: "#1c1e1b"
        } },
        react_1["default"].createElement(react_native_1.View, { style: {
                borderTopRightRadius: size_1.ROATE(16), borderTopLeftRadius: size_1.ROATE(16),
                height: size_1.ROATE(44), flexDirection: "row", alignItems: "center",
                backgroundColor: "#fff"
            } }, List)));
}
function BlackHole(_a) {
    var navigation = _a.navigation, route = _a.route;
    var DATA = []; //用于记录动态
    var _b = react_1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = react_1.useState([{
            url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
        },
        {
            url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
        },
        {
            url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
        },]), imgUrls = _c[0], setImgUrls = _c[1];
    var getItem = function (data, index) {
        var obj = {
            id: Math.random().toString(12).substring(0),
            name: "\u5415\u94ED\u6D32\u7684\u5C0F\u53F7 " + (index + 1),
            title: "Item " + (index + 1),
            content: "最近一直吃饭睡觉打豆豆～，芜湖起飞，最近一直吃饭睡觉打豆豆～，芜湖起飞最近一直吃饭睡觉打豆豆～，芜湖起飞最近一直吃饭睡觉打豆豆～，芜湖起飞最近一直吃饭睡觉打豆豆～，芜湖起飞最近一直吃饭睡觉打豆豆～，芜湖起飞",
            pictures: [{ uri: "http://www.discosoul.com.cn/upload/1650270484598-swai3a.jpg" }]
        };
        return obj;
    };
    var getItemCount = function (data) {
        return 50;
    };
    function Item(_a) {
        var item = _a.item;
        var searchImg = function () {
            setIsOpen(function () {
                setImgUrls(function () {
                    return [{ url: item.pictures[0].uri }, { url: item.pictures[0].uri }];
                });
                return true;
            });
        };
        var goPage = RouterHelper_1.useGoPage(navigation, route, item, "DynamicDetail");
        return (react_1["default"].createElement(react_native_1.Pressable, { onPress: goPage, style: { flexDirection: "row", padding: size_1.ROATE(17) } },
            react_1["default"].createElement(react_native_1.Image, { style: { height: size_1.ROATE(32), marginRight: size_1.ROATE(8.88), width: size_1.ROATE(32), borderRadius: size_1.ROATE(16) }, source: { uri: "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" } }),
            react_1["default"].createElement(react_native_1.View, { style: { width: size_1.ROATE(297) } },
                react_1["default"].createElement(react_native_1.View, { style: {
                        flexDirection: "row",
                        justifyContent: "space-between"
                    } },
                    react_1["default"].createElement(react_native_1.Text, { style: { fontWeight: "400", fontSize: size_1.ROATE(14) } }, item.name),
                    react_1["default"].createElement(react_native_2.Icon, { style: { transform: [{ rotate: "90deg" }] }, name: 'more', color: '#000' })),
                react_1["default"].createElement(react_native_1.Pressable, { onPress: function (e) {
                        e.stopPropagation();
                        searchImg();
                    }, style: { flexDirection: "row", marginTop: size_1.ROATE(9) } },
                    react_1["default"].createElement(react_native_1.Image, { style: { height: size_1.ROATE(97), borderRadius: size_1.ROATE(4), marginRight: size_1.ROATE(4), width: size_1.ROATE(97) }, source: { uri: item.pictures[0].uri } }),
                    react_1["default"].createElement(react_native_1.Image, { style: { height: size_1.ROATE(97), borderRadius: size_1.ROATE(4), marginRight: size_1.ROATE(4), width: size_1.ROATE(97) }, source: { uri: item.pictures[0].uri } }),
                    react_1["default"].createElement(react_native_1.Image, { style: { height: size_1.ROATE(97), borderRadius: size_1.ROATE(4), width: size_1.ROATE(97) }, source: { uri: item.pictures[0].uri } }),
                    react_1["default"].createElement(react_native_1.View, { style: { position: "absolute", flexDirection: "row", bottom: size_1.ROATE(5), backgroundColor: "rgba(0,0,0,0.45)", right: size_1.ROATE(21) } },
                        react_1["default"].createElement(react_native_2.Icon, { color: '#fff', name: 'picture', size: size_1.ROATE(12) }),
                        react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(10), color: "#fff" } }, "9"))),
                react_1["default"].createElement(react_native_1.Text, { style: { width: size_1.ROATE(300), fontSize: size_1.ROATE(14), fontWeight: "400", marginTop: size_1.ROATE(12) } }, item.content),
                react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row" } },
                    react_1["default"].createElement(react_native_1.Text, { style: { borderWidth: 1, backgroundColor: "rgba(0,0,0,0.03)", overflow: "hidden", marginTop: size_1.ROATE(20), marginBottom: size_1.ROATE(23), borderColor: "#e5e5e5", borderRadius: size_1.ROATE(13), padding: size_1.ROATE(8), paddingTop: size_1.ROATE(3), paddingBottom: size_1.ROATE(3) } },
                        "# ",
                        item.title)),
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", alignItems: "center" } },
                        react_1["default"].createElement(react_native_1.Image, { style: { height: size_1.ROATE(22), width: size_1.ROATE(22), borderRadius: size_1.ROATE(11), marginRight: size_1.ROATE(-8) }, source: { uri: item.pictures[0].uri } }),
                        react_1["default"].createElement(react_native_1.Image, { style: { height: size_1.ROATE(22), borderRadius: size_1.ROATE(11), width: size_1.ROATE(22) }, source: { uri: item.pictures[0].uri } }),
                        react_1["default"].createElement(react_native_1.Text, { style: { marginLeft: size_1.ROATE(12) } }, "04-02\u8BC4\u8BBA"),
                        react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", marginLeft: "auto", marginRight: size_1.ROATE(21), alignItems: "center" } },
                            react_1["default"].createElement(react_native_2.Icon, { name: 'comment' }),
                            react_1["default"].createElement(react_native_1.Text, null, "2")),
                        react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", alignItems: "center" } },
                            react_1["default"].createElement(react_native_2.Icon, { name: 'like' }),
                            react_1["default"].createElement(react_native_1.Text, null, "2")))),
                react_1["default"].createElement(react_native_1.View, { style: { height: size_1.ROATE(36), marginTop: size_1.ROATE(10), width: size_1.ROATE(299), borderRadius: size_1.ROATE(12), overflow: "hidden" } },
                    react_1["default"].createElement(react_native_1.Text, { style: { lineHeight: size_1.ROATE(36), paddingHorizontal: size_1.ROATE(12), backgroundColor: "rgba(0,0,0,0.06)" } }, "\u5415\u94ED\u6D32\uFF1A \u53EF\u4EE5\u554A")))));
    }
    function MemoItem(_a) {
        var item = _a.item;
        return react_1.useMemo(function () { return (react_1["default"].createElement(Item, { item: item })); }, []);
    }
    return (react_1["default"].createElement(react_native_1.View, { style: { backgroundColor: "#1c1e1b" } },
        react_1["default"].createElement(react_native_1.View, { style: { height: size_1.ROATE(44), justifyContent: "space-between", paddingVertical: size_1.ROATE(14), paddingHorizontal: size_1.ROATE(16), flexDirection: "row", backgroundColor: "#1c1e1b" } },
            react_1["default"].createElement(assets_1.Logo, null),
            react_1["default"].createElement(react_native_2.Icon, { size: size_1.ROATE(18), color: "#fff", name: 'search' })),
        react_1["default"].createElement(DynamicList, { stickTopComp: function () {
                return react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(react_native_1.View, { style: { paddingTop: size_1.ROATE(4), backgroundColor: "#1c1e1b", alignItems: "center", paddingHorizontal: size_1.ROATE(16), paddingBottom: size_1.ROATE(13), flexDirection: "row" } },
                        react_1["default"].createElement(react_native_1.Text, { style: { color: "#f5f5f5" } }, "\u8BDD\u9898"),
                        react_1["default"].createElement(react_native_1.View, { style: { marginLeft: "auto", alignItems: "center", flexDirection: "row" } },
                            react_1["default"].createElement(react_native_1.Text, { style: { color: "#f5f5f5" } }, "\u53D1\u73B0\u66F4\u591A"),
                            react_1["default"].createElement(react_native_2.Icon, { size: size_1.ROATE(16), name: 'arrow-right', color: '#f5f5f5' }))),
                    react_1["default"].createElement(react_native_1.View, { style: styles.advertise },
                        react_1["default"].createElement(scrollList_1["default"], { navigation: navigation, duration: 20000, pl: 0, pr: size_1.ROATE(25) }),
                        react_1["default"].createElement(scrollList_1["default"], { navigation: navigation, duration: 20000 })),
                    react_1["default"].createElement(Header, null));
            }, DATA: DATA, getItem: getItem, getItemCount: getItemCount, renderItem: function (_a) {
                var item = _a.item, index = _a.index;
                return react_1["default"].createElement(MemoItem, { key: index, item: item });
            } }),
        react_1["default"].createElement(react_native_1.Modal, { visible: isOpen, transparent: true },
            react_1["default"].createElement(react_native_image_zoom_viewer_1["default"], { onClick: function () {
                    setIsOpen(function () { return false; });
                }, imageUrls: imgUrls })),
        react_1["default"].createElement(react_native_1.Pressable, { onPress: function () {
                navigation.navigate("Release");
            }, style: {
                position: "absolute", justifyContent: "center", alignItems: "center", right: size_1.ROATE(18), bottom: size_1.ROATE(62),
                borderRadius: size_1.ROATE(22), height: size_1.ROATE(44), width: size_1.ROATE(44), zIndex: 1
            } },
            react_1["default"].createElement(react_native_linear_gradient_1["default"], { angle: -90, colors: ["#f9fd80", "#73e5bb"], style: {
                    position: "absolute", left: 0, top: 0, borderRadius: size_1.ROATE(22), height: size_1.ROATE(44), width: size_1.ROATE(44)
                } }),
            react_1["default"].createElement(react_native_2.Icon, { color: '#202020', name: 'usergroup-add' }))));
}
exports["default"] = BlackHole;
var styles = react_native_1.StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: "#fff"
    },
    headerFont: {
        fontSize: size_1.ROATE(16),
        marginLeft: size_1.ROATE(9),
        marginRight: size_1.ROATE(9),
        padding: size_1.ROATE(8)
    },
    advertise: {
        padding: 0,
        backgroundColor: "#1c1e1b",
        height: size_1.ROATE(84),
        paddingLeft: 0,
        paddingBottom: size_1.ROATE(18)
    },
    item: {
        backgroundColor: '#f9c2ff',
        height: 150,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20
    },
    title: {
        fontSize: 32
    }
});
