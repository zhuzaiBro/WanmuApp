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
exports.TimeComp = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var native_base_1 = require("native-base");
var size_1 = require("../../assets/size");
var react_native_2 = require("@ant-design/react-native");
var ShopBanner_1 = require("./ShopBanner");
var ShopBanner_2 = require("./ShopBanner");
var ShoppingAction_1 = require("./ShoppingAction");
function TimeComp(_a) {
    var _b = _a.show, show = _b === void 0 ? true : _b, _c = _a.time, time = _c === void 0 ? "" : _c;
    return (react_1["default"].createElement(react_native_1.View, { style: {
            display: show ? "flex" : "none",
            height: size_1.ROATE(53), width: size_1.ROATE(125), position: "absolute", backgroundColor: "rgba(255,255,255,0.45)", paddingHorizontal: size_1.ROATE(25),
            borderTopRightRadius: size_1.ROATE(22), bottom: 0, left: 0, zIndex: 1
        } },
        react_1["default"].createElement(react_native_1.Text, { style: styles.defaultFont }, "\u62A2\u8D2D\u5012\u8BA1\u65F6"),
        react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", marginTop: size_1.ROATE(7) } },
            react_1["default"].createElement(react_native_1.View, { style: __assign(__assign({}, styles.timeBlock), { marginLeft: 0 }) },
                react_1["default"].createElement(react_native_1.Text, { style: styles.defaultFont }, "05")),
            react_1["default"].createElement(react_native_1.Text, { style: styles.defaultFont }, " : "),
            react_1["default"].createElement(react_native_1.View, { style: __assign(__assign({}, styles.timeBlock), { marginRight: 0 }) },
                react_1["default"].createElement(react_native_1.Text, { style: styles.defaultFont }, "46")))));
}
exports.TimeComp = TimeComp;
function GoodHeader(_a) {
    var imgUrlList = _a.imgUrlList;
    var _b = react_1.useState(1), current = _b[0], setCurrent = _b[1];
    var changeIndex = react_1.useCallback(function (index) { setCurrent(index + 1); }, []);
    return (react_1["default"].createElement(react_native_1.View, { style: { height: size_1.ROATE(280), width: size_1.ROATE(375) } },
        react_1["default"].createElement(TimeComp, { show: true }),
        react_1["default"].createElement(ShopBanner_2.Pager, { current: current, total: imgUrlList.length }),
        react_1["default"].createElement(ShopBanner_1["default"], { onChange: changeIndex, imgUrlList: imgUrlList })));
}
function TabBar(_a) {
    var onOpen = _a.onOpen;
    return (react_1["default"].createElement(react_native_1.View, { style: {
            height: size_1.ROATE(84), width: size_1.ROATE(375), bottom: 0, left: 0, backgroundColor: "#fff", borderTopWidth: 1, borderColor: "#EBEBEB",
            paddingHorizontal: size_1.ROATE(16), paddingVertical: size_1.ROATE(17), flexDirection: "row", position: "absolute", zIndex: 2
        } },
        react_1["default"].createElement(react_native_1.View, { style: { justifyContent: "center", marginRight: size_1.ROATE(28), alignItems: "center" } },
            react_1["default"].createElement(react_native_2.Icon, { color: 'rgba(0,0,0,0.8)', name: 'shop' }),
            react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(10), fontWeight: "400" } }, "\u5E97\u94FA")),
        react_1["default"].createElement(react_native_1.View, { style: { justifyContent: "center", marginRight: size_1.ROATE(28), alignItems: "center" } },
            react_1["default"].createElement(react_native_2.Icon, { color: 'rgba(0,0,0,0.8)', name: 'comment' }),
            react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(10), fontWeight: "400" } }, "\u5BA2\u670D")),
        react_1["default"].createElement(react_native_1.View, { style: { justifyContent: "center", alignItems: "center" } },
            react_1["default"].createElement(react_native_2.Icon, { color: 'rgba(0,0,0,0.8)', name: 'star' }),
            react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(10), fontWeight: "400" } }, "\u6536\u85CF")),
        react_1["default"].createElement(react_native_1.View, { style: {
                height: size_1.ROATE(41), flexDirection: "row", marginLeft: "auto", overflow: "hidden", borderRadius: size_1.ROATE(35),
                width: size_1.ROATE(131)
            } },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: { width: size_1.ROATE(49), backgroundColor: "rgba(0,0,0,0.9)", justifyContent: "center", alignItems: "center" } },
                react_1["default"].createElement(react_native_2.Icon, { name: 'shopping-cart', color: "#A6E284", size: size_1.ROATE(26) })),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onOpen, style: { width: size_1.ROATE(83), backgroundColor: "#A6E284", justifyContent: "center", alignItems: "center" } },
                react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(13), fontStyle: 'italic' } }, "\u7ACB\u5373\u8D2D\u4E70")))));
}
function Detail(_a) {
    var route = _a.route, navigation = _a.navigation;
    var imgUrlList = ["https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/image_1753.png",
        "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/22.png",
        "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/11.png",];
    var _b = native_base_1.useDisclose(), isOpen = _b.isOpen, onOpen = _b.onOpen, onClose = _b.onClose;
    return (react_1["default"].createElement(react_native_1.View, { style: { height: react_native_1.Dimensions.get("screen").height, paddingBottom: size_1.ROATE(81) } },
        react_1["default"].createElement(react_native_1.ScrollView, null,
            react_1["default"].createElement(GoodHeader, { imgUrlList: imgUrlList }),
            react_1["default"].createElement(react_native_1.View, { style: styles.contentWrap },
                react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: size_1.ROATE(10) } },
                    react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(16) } }, "\uFFE5"),
                    react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(24), fontWeight: "600", marginRight: size_1.ROATE(12) } }, "9.9"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.defaultFont }, "\u539F\u4EF7 \uFFE5 23"),
                    react_1["default"].createElement(react_native_1.Text, { style: __assign(__assign({}, styles.defaultFont), { marginLeft: "auto" }) },
                        "\u5DF2\u552E",
                        12,
                        "\u4EF6")),
                react_1["default"].createElement(react_native_1.View, { style: {
                        width: size_1.ROATE(222), backgroundColor: "#f5f5f5", marginTop: size_1.ROATE(11), justifyContent: "center", alignItems: "center",
                        borderRadius: size_1.ROATE(8), flexDirection: "row", height: size_1.ROATE(24)
                    } },
                    react_1["default"].createElement(react_native_2.Icon, { size: size_1.ROATE(12), color: "#938e84", name: "wallet" }),
                    react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(12), color: "#938e84", marginLeft: size_1.ROATE(6) } }, "\u5F00\u901A\u4F1A\u5458\u53EF\u514D\u8D39\u9001\u8D27\u4E0A\u95E8")),
                react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(14), color: "rgba(0,0,0,0.8)", marginTop: size_1.ROATE(15), fontWeight: "700" } }, "\u7EAF\u725B\u5976200g*10\u76D2\u9AD8\u539F\u7267\u573A \u7CBE\u9009\u597D\u725B\u5976"),
                react_1["default"].createElement(react_native_1.Text, { style: styles.defaultFont }, "\u5F15\u8FDB\u7EAF\u6B63\u8377\u65AF\u5766\u5976\u725B\uFF0C\u98DF\u7528\u5929\u7136\u5AE9\u7267\u8349\uFF0C\u7EAF\u51C0\u9AD8\u539F\uFF0C\u8FDC\u79BB\u6C61\u67D3")),
            react_1["default"].createElement(react_native_1.View, { style: __assign(__assign({}, styles.contentWrap), { paddingTop: 0, paddingHorizontal: 0 }) },
                react_1["default"].createElement(react_native_1.View, { style: {
                        flexDirection: "row", backgroundColor: "#202020", paddingHorizontal: size_1.ROATE(13),
                        alignItems: "center", paddingVertical: size_1.ROATE(6)
                    } },
                    react_1["default"].createElement(react_native_2.Icon, { color: "#fff", size: size_1.ROATE(12), name: "mac-command" }),
                    react_1["default"].createElement(react_native_1.Text, { style: { color: "#fff", fontSize: size_1.ROATE(12), marginLeft: size_1.ROATE(6) } }, "\u5206\u4EAB\u8D5A\u4F63\u91D1")),
                react_1["default"].createElement(react_native_1.Text, { style: __assign(__assign({}, styles.s14w6), { paddingHorizontal: size_1.ROATE(12), marginBottom: size_1.ROATE(4) }) }, "\u4F63\u91D10.3%(\u9884\u8BA1\u6536\u76CA\u00A50.60)"),
                react_1["default"].createElement(react_native_1.Text, { style: __assign(__assign({}, styles.s14w6), { paddingHorizontal: size_1.ROATE(12) }) }, "\u5206\u4EAB\u4E00\u4EBA\u4E0B\u5355\u6210\u529F\u5C06\u83B7\u5F9715\u7ECF\u9A8C\u503C")),
            react_1["default"].createElement(react_native_1.View, { style: {
                    height: size_1.ROATE(84), backgroundColor: "#fff", marginLeft: "auto", marginRight: "auto", marginTop: size_1.ROATE(10),
                    borderRadius: size_1.ROATE(8), width: size_1.ROATE(343), padding: size_1.ROATE(10), overflow: "hidden"
                } },
                react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row" } },
                    react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(14), fontWeight: "500", color: "rgba(0,0,0,0.8)" } },
                        "\u5546\u54C1\u8BC4\u4EF7 ",
                        2),
                    react_1["default"].createElement(react_native_2.Icon, { style: { marginLeft: "auto" }, name: "arrow-right" })),
                react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", marginTop: size_1.ROATE(8), alignItems: "center" } },
                    react_1["default"].createElement(react_native_1.Image, { style: { height: size_1.ROATE(22), borderRadius: size_1.ROATE(11), marginRight: size_1.ROATE(-9), width: size_1.ROATE(22) }, source: { uri: "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" } }),
                    react_1["default"].createElement(react_native_1.Image, { style: { height: size_1.ROATE(22), borderRadius: size_1.ROATE(11), marginRight: size_1.ROATE(-9), width: size_1.ROATE(22) }, source: { uri: "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" } }),
                    react_1["default"].createElement(react_native_1.Image, { style: { height: size_1.ROATE(22), borderRadius: size_1.ROATE(11), marginRight: size_1.ROATE(-9), width: size_1.ROATE(22) }, source: { uri: "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" } }),
                    react_1["default"].createElement(react_native_1.Text, { style: __assign(__assign({}, styles.defaultFont), { marginLeft: size_1.ROATE(14) }) }, "\u70ED***\u67D0\uFF1A"),
                    react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(10) } }, "\u4EF7\u683C\u5B9E\u60E0\uFF0C\u5305\u88C5\u5B8C\u597D\u65E0\u635F\uFF0C\u6027\u4EF7\u6BD4\u5F88\u9AD8\uFF01ss"))),
            react_1["default"].createElement(react_native_1.View, { style: {
                    height: size_1.ROATE(201), backgroundColor: "#fff", padding: size_1.ROATE(10), marginLeft: "auto", marginRight: "auto", marginTop: size_1.ROATE(10),
                    borderRadius: size_1.ROATE(8), width: size_1.ROATE(343), overflow: "hidden"
                } },
                react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(14), color: "rgba(0,0,0,0.9)", marginBottom: size_1.ROATE(14), fontWeight: "600" } }, "\u5546\u54C1\u53C2\u6570"),
                react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", marginBottom: size_1.ROATE(20) } },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.s14w4 }, "\u54C1\u724C"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.describeFont }, "\u4F0A\u7281")),
                react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", marginBottom: size_1.ROATE(20) } },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.s14w4 }, "\u4FDD\u8D28\u671F"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.describeFont }, "12\u4E2A\u6708")),
                react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", marginBottom: size_1.ROATE(20) } },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.s14w4 }, "\u51C0\u542B\u91CF"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.describeFont }, "3KG")),
                react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", marginBottom: size_1.ROATE(20) } },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.s14w4 }, "\u4EA7\u5730"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.describeFont }, "\u65B0\u7586"))),
            react_1["default"].createElement(react_native_1.View, { style: {
                    height: size_1.ROATE(280), backgroundColor: "#fff",
                    marginBottom: size_1.ROATE(30), padding: size_1.ROATE(10), marginLeft: "auto", marginRight: "auto", marginTop: size_1.ROATE(10),
                    borderRadius: size_1.ROATE(8), width: size_1.ROATE(343), overflow: "hidden"
                } },
                react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(16), fontWeight: "600", margin: size_1.ROATE(10) } }, "\u5546\u54C1\u5C55\u793A"),
                react_1["default"].createElement(react_native_1.Image, { style: { height: size_1.ROATE(218), width: size_1.ROATE(327) }, source: { uri: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/image_1753.png" } }))),
        react_1["default"].createElement(TabBar, { onOpen: onOpen }),
        react_1["default"].createElement(ShoppingAction_1["default"], { navigation: navigation, isOpen: isOpen, onClose: onClose })));
}
exports["default"] = Detail;
var styles = react_native_1.StyleSheet.create({
    container: {
        padding: 22,
        paddingTop: 10
    },
    defaultFont: {
        fontSize: size_1.ROATE(12),
        fontWeight: "400"
    },
    timeBlock: {
        backgroundColor: "#fff",
        width: size_1.ROATE(24),
        height: size_1.ROATE(24),
        borderRadius: size_1.ROATE(4),
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: size_1.ROATE(8)
    },
    contentWrap: {
        backgroundColor: "#fff",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: size_1.ROATE(8),
        paddingHorizontal: size_1.ROATE(10),
        paddingVertical: size_1.ROATE(12),
        width: size_1.ROATE(343),
        marginTop: size_1.ROATE(10),
        overflow: "hidden"
    },
    s14w6: {
        fontSize: size_1.ROATE(14),
        fontWeight: "600"
    },
    s14w4: {
        fontSize: size_1.ROATE(14),
        fontWeight: "400"
    },
    describeFont: {
        width: size_1.ROATE(125),
        marginLeft: "auto",
        marginRight: size_1.ROATE(81),
        color: "rgba(0,0,0,0.9)"
    }
});
