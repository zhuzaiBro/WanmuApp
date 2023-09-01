"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var ShopBanner_1 = require("./ShopBanner");
var native_base_1 = require("native-base");
var size_1 = require("../../assets/size");
var react_native_2 = require("@ant-design/react-native");
var shopItem_1 = require("./shopItem");
var store_1 = require("../../store");
var SegmentControl_1 = require("../../components/SegmentControl");
var react_native_linear_gradient_1 = require("react-native-linear-gradient");
var RouterHelper_1 = require("../../utils/RouterHelper");
// import { RefreshNormalHeader } from 'react-native-smart-refresh'
function GoodContainer(_a) {
    var navigation = _a.navigation;
    return (react_1["default"].createElement(react_native_1.View, { style: styles.content },
        react_1["default"].createElement(shopItem_1["default"], { item: { uri: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/11.png" }, nav: navigation }),
        react_1["default"].createElement(shopItem_1["default"], { item: { uri: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/22.png" }, nav: navigation }),
        react_1["default"].createElement(shopItem_1["default"], { item: { uri: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/IM.png" }, nav: navigation }),
        react_1["default"].createElement(shopItem_1["default"], { item: { uri: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/image_1753.png" }, nav: navigation }),
        react_1["default"].createElement(shopItem_1["default"], { item: { uri: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/IM.png" }, nav: navigation }),
        react_1["default"].createElement(shopItem_1["default"], { item: { uri: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/IM.png" }, nav: navigation }),
        react_1["default"].createElement(shopItem_1["default"], { item: { uri: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/IM.png" }, nav: navigation })));
}
function Shop(_a) {
    var navigation = _a.navigation, route = _a.route, setShopMark = _a.setShopMark;
    var _b = native_base_1.useDisclose(), isOpen = _b.isOpen, onOpen = _b.onOpen, onClose = _b.onClose;
    var goOther = RouterHelper_1.useGoPage(navigation, route, undefined, "MemberCenter");
    // const [goOther, setGoOther] = useState(void 0) as any;
    var UserInfo;
    react_1.useEffect(function () {
        // setGoOther (()=> useGoTo(navigation, route, undefined, ));
        UserInfo = store_1["default"].getState();
    }, []);
    var _c = react_1.useState(false), refresh = _c[0], setRefresh = _c[1];
    function ActionItem(_a) {
        var _b = _a.to, to = _b === void 0 ? "Shop" : _b, _c = _a.iconName, iconName = _c === void 0 ? "wallet" : _c, _d = _a.title, title = _d === void 0 ? "会员中心" : _d;
        var goto = RouterHelper_1.useGoTo(navigation, route, undefined, to);
        var goPage = react_1.useCallback(function () {
            onClose();
            goto();
        }, []);
        return (react_1["default"].createElement(native_base_1.Box, { onTouchEnd: goPage, style: styles.actionItem },
            react_1["default"].createElement(react_native_2.Icon, { size: size_1.ROATE(34), name: iconName, color: '#000', style: {
                    backgroundColor: "#F1F1F1",
                    width: size_1.ROATE(54),
                    height: size_1.ROATE(54),
                    textAlign: "center",
                    borderRadius: size_1.ROATE(27),
                    lineHeight: size_1.ROATE(54)
                } }),
            react_1["default"].createElement(native_base_1.Text, { style: { fontSize: size_1.ROATE(10), textAlign: "center" } }, title)));
    }
    var goSearch = react_1.useCallback(function () {
        navigation.navigate("ShopSearch");
    }, []);
    var wait = function (timeout) {
        return new Promise(function (resolve) {
            setTimeout(resolve, timeout);
        });
    };
    var onRefresh = react_1.useCallback(function () {
        setRefresh(function () { return true; });
        wait(1000).then(function () { return setRefresh(function () { return false; }); });
    }, []);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.VirtualizedList, { getItem: function () { return ({}); }, getItemCount: function () { return 0; }, renderItem: function () { return react_1["default"].createElement(react_1["default"].Fragment, null); }, showsVerticalScrollIndicator: false, refreshControl: react_1["default"].createElement(react_native_1.RefreshControl, { refreshing: refresh, onRefresh: onRefresh }), ListHeaderComponent: function () { return (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(react_native_1.View, { style: {
                        backgroundColor: "#fff", paddingTop: size_1.ROATE(44), position: "relative",
                        paddingBottom: size_1.ROATE(18), borderBottomLeftRadius: size_1.ROATE(18), borderBottomRightRadius: size_1.ROATE(18)
                    } },
                    react_1["default"].createElement(react_native_linear_gradient_1["default"], { style: {
                            position: "absolute", top: 0, left: 0, width: size_1.ROATE(375), height: size_1.ROATE(110)
                        }, colors: ["#F7F877", "#A0EAEF"], useAngle: true }),
                    react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", justifyContent: "space-between", padding: size_1.ROATE(16) } },
                        react_1["default"].createElement(native_base_1.Text, { onPress: goOther, style: { fontSize: size_1.ROATE(17), fontWeight: "600" } }, "\u9752\u6C2A\u4E2D\u5FC3 \u300B\u300B\u300B"),
                        react_1["default"].createElement(react_native_2.Icon, { name: 'shopping-cart', color: '#000', style: {
                                marginLeft: "auto",
                                paddingTop: "auto", paddingBottom: "auto", height: size_1.ROATE(32),
                                textAlign: "center", width: size_1.ROATE(32), lineHeight: size_1.ROATE(32)
                            } }),
                        react_1["default"].createElement(react_native_2.Icon, { name: 'ordered-list', color: '#000', style: {
                                height: size_1.ROATE(32),
                                paddingLeft: "auto", paddingRight: "auto", textAlign: "center", width: size_1.ROATE(32), lineHeight: size_1.ROATE(32)
                            } }),
                        react_1["default"].createElement(react_native_2.Icon, { name: 'more', color: '#000', onPress: onOpen, style: {
                                transform: [{ rotate: "-90deg" }], height: size_1.ROATE(32),
                                paddingLeft: "auto", paddingRight: "auto", textAlign: "center", width: size_1.ROATE(32)
                            } })),
                    react_1["default"].createElement(react_native_1.Pressable, { onPress: goSearch, style: styles.searchInput },
                        react_1["default"].createElement(react_native_2.Icon, { name: 'search', style: { marginLeft: size_1.ROATE(23) }, color: '#333333' }),
                        react_1["default"].createElement(native_base_1.Text, { style: {
                                fontSize: size_1.ROATE(12), height: size_1.ROATE(32), lineHeight: size_1.ROATE(32), color: "#ABABAB",
                                width: size_1.ROATE(204), marginLeft: size_1.ROATE(6), borderRightWidth: size_1.ROATE(2)
                            } }, "\u641C\u7D22\u5546\u54C1"),
                        react_1["default"].createElement(native_base_1.Text, { style: { fontSize: size_1.ROATE(14), flexGrow: 1, fontWeight: "600", textAlign: "center" } }, "All")),
                    react_1["default"].createElement(ShopBanner_1["default"], null)),
                react_1["default"].createElement(react_native_1.View, { style: {
                        flexDirection: "row", marginTop: size_1.ROATE(17), marginLeft: "auto",
                        borderBottomLeftRadius: size_1.ROATE(22), borderBottomRightRadius: size_1.ROATE(22), marginRight: "auto", height: size_1.ROATE(57)
                    } },
                    react_1["default"].createElement(react_native_1.View, { style: {
                            height: size_1.ROATE(40), borderRadius: size_1.ROATE(8), alignItems: "center", paddingHorizontal: size_1.ROATE(16), marginRight: size_1.ROATE(16),
                            width: size_1.ROATE(164), backgroundColor: "#F6F7FB", flexDirection: "row"
                        } },
                        react_1["default"].createElement(native_base_1.Text, { style: { fontSize: size_1.ROATE(16), fontWeight: "600" } }, "\u53D1\u73B0\u597D\u8D27"),
                        react_1["default"].createElement(react_native_1.Image, { style: { width: size_1.ROATE(32), borderRadius: size_1.ROATE(16), marginLeft: "auto", height: size_1.ROATE(32) }, source: { uri: "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" } }),
                        react_1["default"].createElement(react_native_1.Image, { style: { width: size_1.ROATE(32), borderRadius: size_1.ROATE(16), marginLeft: size_1.ROATE(-12), height: size_1.ROATE(32) }, source: { uri: "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" } })),
                    react_1["default"].createElement(react_native_1.View, { style: { height: size_1.ROATE(40), borderRadius: size_1.ROATE(8), alignItems: "center", paddingHorizontal: size_1.ROATE(16), width: size_1.ROATE(164), backgroundColor: "#F6F7FB", flexDirection: "row" } },
                        react_1["default"].createElement(native_base_1.Text, { style: { fontSize: size_1.ROATE(16), fontWeight: "600" } }, "\u9650\u65F6\u79D2\u6740"),
                        react_1["default"].createElement(react_native_1.Image, { style: { width: size_1.ROATE(32), borderRadius: size_1.ROATE(16), marginLeft: "auto", height: size_1.ROATE(32) }, source: { uri: "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" } }),
                        react_1["default"].createElement(react_native_1.Image, { style: { width: size_1.ROATE(32), borderRadius: size_1.ROATE(16), marginLeft: size_1.ROATE(-12), height: size_1.ROATE(32) }, source: { uri: "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" } }))),
                react_1["default"].createElement(SegmentControl_1["default"], { tagWrapperStyle: styles.TagItem, tagDefaultStyle: { color: "#202020", fontSize: size_1.ROATE(13) }, tagWrapperActiveStyle: { backgroundColor: "#202020" }, tagActiveStyle: { color: "#fff" }, headerStyle: {}, tags: ["猜你喜欢", "特价促销", "期末必备", "玩目优选", "特价商品"] },
                    react_1["default"].createElement(GoodContainer, { navigation: navigation }),
                    react_1["default"].createElement(GoodContainer, { navigation: navigation }),
                    react_1["default"].createElement(GoodContainer, { navigation: navigation }),
                    react_1["default"].createElement(GoodContainer, { navigation: navigation }),
                    react_1["default"].createElement(GoodContainer, { navigation: navigation })),
                react_1["default"].createElement(native_base_1.Actionsheet, { isOpen: isOpen, onClose: onClose },
                    react_1["default"].createElement(native_base_1.Actionsheet.Content, { height: size_1.ROATE(352) },
                        react_1["default"].createElement(native_base_1.Box, { w: "100%", h: size_1.ROATE(30), justifyContent: "center" },
                            react_1["default"].createElement(native_base_1.Text, { style: { fontSize: size_1.ROATE(16), textAlign: "center" } }, "\u66F4\u591A\u529F\u80FD")),
                        react_1["default"].createElement(native_base_1.Box, { style: {
                                width: size_1.ROATE(375),
                                paddingTop: 0,
                                padding: size_1.ROATE(31),
                                paddingBottom: size_1.ROATE(120),
                                flexDirection: "row",
                                justifyContent: "flex-start", flexWrap: "wrap"
                            } },
                            react_1["default"].createElement(ActionItem, { iconName: 'code', title: '\u6211\u7684\u8D26\u6237', to: 'MemberAssets' }),
                            react_1["default"].createElement(ActionItem, { iconName: 'home', title: '\u5730\u5740\u7BA1\u7406', to: 'AddressManager' }),
                            react_1["default"].createElement(ActionItem, { to: 'LikeItem', iconName: 'alipay', title: '\u6211\u7684\u6536\u85CF' }),
                            react_1["default"].createElement(ActionItem, { to: 'ShopDetail', iconName: 'code', title: '\u5F00\u53D1ing' }),
                            react_1["default"].createElement(ActionItem, { to: 'ShopDetail', iconName: 'code', title: '\u5F00\u53D1ing' })),
                        react_1["default"].createElement(react_native_2.Button, { onPressOut: onClose, style: {
                                width: size_1.ROATE(149), height: size_1.ROATE(45),
                                backgroundColor: "#fff",
                                borderWidth: (1),
                                borderColor: "#000",
                                borderRadius: size_1.ROATE(47),
                                position: "absolute", bottom: size_1.ROATE(44), left: size_1.ROATE(112)
                            } },
                            react_1["default"].createElement(native_base_1.Text, null, "\u53D6\u6D88")))))); } })));
}
exports["default"] = Shop;
var styles = react_native_1.StyleSheet.create({
    content: {
        padding: 12,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        marginTop: size_1.ROATE(15)
    },
    searchInput: {
        height: size_1.ROATE(32),
        width: size_1.ROATE(323),
        borderWidth: size_1.ROATE(2),
        borderRightWidth: size_1.ROATE(4),
        borderLeftWidth: size_1.ROATE(4),
        marginRight: "auto",
        marginLeft: "auto",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: size_1.ROATE(22),
        backgroundColor: "#fff"
    },
    shopItem: {
        marginBottom: 12,
        width: "46%",
        padding: 8,
        backgroundColor: "#fff",
        borderRadius: 12
    },
    clickIcon: {
        width: size_1.ROATE(36),
        height: size_1.ROATE(36),
        backgroundColor: "#FFFFFF",
        padding: size_1.ROATE(8)
    },
    TagItem: {
        height: size_1.ROATE(32),
        width: size_1.ROATE(90),
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: size_1.ROATE(33),
        marginHorizontal: size_1.ROATE(10)
    },
    actionItem: {
        width: size_1.ROATE(76),
        alignItems: "center",
        padding: 0,
        height: size_1.ROATE(94)
    }
});
