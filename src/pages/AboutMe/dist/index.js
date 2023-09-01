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
var react_1 = require("react");
var react_native_1 = require("react-native");
var store_1 = require("../../store");
var size_1 = require("../../assets/size");
var react_native_2 = require("@ant-design/react-native");
var BlackHole_1 = require("../BlackHole");
function AboutMe(_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(null), userInfo = _b[0], setUserInfo = _b[1];
    var DATA = []; //用于记录动态
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
    var Item = function (_a) {
        var item = _a.item;
        return (react_1["default"].createElement(react_native_1.View, { onTouchEnd: function () { navigation.navigate("DynamicDetail", item); }, style: { flexDirection: "row", padding: size_1.ROATE(17) } },
            react_1["default"].createElement(react_native_1.Image, { style: { height: size_1.ROATE(32), marginRight: size_1.ROATE(8.88), width: size_1.ROATE(32), borderRadius: size_1.ROATE(16) }, source: { uri: "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" } }),
            react_1["default"].createElement(react_native_1.View, { style: { width: size_1.ROATE(297) } },
                react_1["default"].createElement(react_native_1.View, { style: {
                        flexDirection: "row",
                        justifyContent: "space-between"
                    } },
                    react_1["default"].createElement(react_native_1.Text, { style: { fontWeight: "400", fontSize: size_1.ROATE(14) } }, item.name),
                    react_1["default"].createElement(react_native_2.Icon, { style: { transform: [{ rotate: "90deg" }] }, name: 'more', color: '#000' })),
                react_1["default"].createElement(react_native_1.View, { onTouchEnd: function (e) {
                        e.stopPropagation();
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
    };
    react_1.useEffect(function () {
        var timer = setInterval(function () {
            setUserInfo(store_1["default"].getState());
            console.log(userInfo);
            clearInterval(timer);
        }, 100);
    }, []);
    return (react_1["default"].createElement(react_native_1.View, { style: styles.content },
        react_1["default"].createElement(react_native_1.View, { style: styles.header },
            react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", marginBottom: size_1.ROATE(16) } },
                react_1["default"].createElement(react_native_1.Image, { style: styles.avatar, source: { uri: userInfo === null || userInfo === void 0 ? void 0 : userInfo.avatar } }),
                react_1["default"].createElement(react_native_1.View, { style: { width: size_1.ROATE(250) } },
                    react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(16), fontWeight: "600", color: "rgba(0,0,0,0.9)", textAlign: "right" } }, (userInfo === null || userInfo === void 0 ? void 0 : userInfo.nickname) || "空"),
                    react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(10), color: "rgba(0,0,0,0.45)", fontWeight: "400" } }, (userInfo === null || userInfo === void 0 ? void 0 : userInfo.describe) || "如果你能有意识地以天为单位逼迫自己刻意成长，一年一点儿都不短，它足足有365天之久，365天可以做···"))),
            react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", marginBottom: size_1.ROATE(11), alignItems: "center" } },
                react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(10), marginRight: size_1.ROATE(4), color: "rgba(0,0,0,0.45)" } },
                    "ID: ", userInfo === null || userInfo === void 0 ? void 0 :
                    userInfo.id),
                react_1["default"].createElement(react_native_2.Icon, { name: 'copy', size: size_1.ROATE(9) })),
            react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row" } },
                react_1["default"].createElement(react_native_1.View, { style: __assign({ backgroundColor: "#DA94FB" }, styles.tag) },
                    react_1["default"].createElement(react_native_2.Icon, { size: size_1.ROATE(8), color: "#fff", name: 'man' }),
                    react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(10), fontWeight: "700", color: "#fff" } }, "\u5973\u751F")),
                react_1["default"].createElement(react_native_1.View, { style: __assign({ backgroundColor: "#F6F7FB" }, styles.tag) },
                    react_1["default"].createElement(react_native_2.Icon, { size: size_1.ROATE(8), color: "#fff", name: 'file-image' }),
                    react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(10), fontWeight: "700", color: "rgba(0,0,0,0.7)" } }, "\u5B66\u751F")),
                react_1["default"].createElement(react_native_1.View, { style: __assign({ backgroundColor: "#F6F7FB" }, styles.tag) },
                    react_1["default"].createElement(react_native_2.Icon, { size: size_1.ROATE(8), color: "#fff", name: 'file-image' }),
                    react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(10), textAlign: "center", fontWeight: "700", color: "rgba(0,0,0,0.7)" } }, "\u6D59\u6C5F\u7406\u5DE5\u5927\u5B66"))),
            react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", marginVertical: size_1.ROATE(12) } },
                react_1["default"].createElement(react_native_1.View, { style: {
                        justifyContent: "center", alignItems: 'center', marginRight: size_1.ROATE(10), width: size_1.ROATE(80), height: size_1.ROATE(44),
                        backgroundColor: "#8493A3", borderRadius: size_1.ROATE(12)
                    } },
                    react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", alignItems: "center", justifyContent: "center" } },
                        react_1["default"].createElement(react_native_2.Icon, { name: 'like', color: '#FFFFFFB2', size: size_1.ROATE(14) }),
                        react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(12), color: "#FFFFFFB2" } }, "\u7C89\u4E1D")),
                    react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(14), fontWeight: "600", color: "#fff" } }, "201")),
                react_1["default"].createElement(react_native_1.View, { style: {
                        justifyContent: "center", alignItems: 'center', width: size_1.ROATE(80), height: size_1.ROATE(44),
                        backgroundColor: "#8493A3", borderRadius: size_1.ROATE(12)
                    } },
                    react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", alignItems: "center", justifyContent: "center" } },
                        react_1["default"].createElement(react_native_2.Icon, { name: 'like', color: '#FFFFFFB2', size: size_1.ROATE(14) }),
                        react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(12), color: "#FFFFFFB2" } }, "\u5173\u6CE8")),
                    react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(14), fontWeight: "600", color: "#fff" } }, "201"))),
            react_1["default"].createElement(react_native_1.View, { style: { borderTopWidth: size_1.ROATE(2), marginHorizontal: size_1.ROATE(-16), borderColor: "rgba(0, 0, 0, 0.04)" } },
                react_1["default"].createElement(react_native_1.View, { style: { marginTop: size_1.ROATE(9), width: size_1.ROATE(343), paddingHorizontal: size_1.ROATE(20), flexDirection: "row", marginHorizontal: size_1.ROATE(16), height: size_1.ROATE(68) } },
                    react_1["default"].createElement(react_native_1.View, { style: { justifyContent: "center", marginRight: size_1.ROATE(22), alignItems: "center" } },
                        react_1["default"].createElement(react_native_1.Image, { style: { width: size_1.ROATE(33), height: size_1.ROATE(25.6) }, source: { uri: "https://www.figma.com/file/mqUjjzmXs6LliY0ufRuxZu/image/3509e271fcd785696173bbe4fdbb85cef92c6126?fuid=1061441913266259540" } }),
                        react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(14), fontWeight: "700", color: "#000000B2" } }, "\u9752\u6C2A\u4E2D\u5FC3")),
                    react_1["default"].createElement(react_native_1.View, { style: { justifyContent: "center", marginRight: size_1.ROATE(22), alignItems: "center" } },
                        react_1["default"].createElement(react_native_1.Image, { style: { width: size_1.ROATE(33), height: size_1.ROATE(25.6) }, source: { uri: "https://www.figma.com/file/mqUjjzmXs6LliY0ufRuxZu/image/61547126e31b1ead8d9cd111741b22a084dbe17a?fuid=1061441913266259540" } }),
                        react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(14), fontWeight: "700", color: "#000000B2" } }, "\u6210\u957F\u6A71\u7A97")),
                    react_1["default"].createElement(react_native_1.View, { style: { justifyContent: "center", marginRight: size_1.ROATE(22), alignItems: "center" } },
                        react_1["default"].createElement(react_native_1.Image, { style: { width: size_1.ROATE(33), height: size_1.ROATE(25.6) }, source: { uri: "https://www.figma.com/file/mqUjjzmXs6LliY0ufRuxZu/image/9c702b71f0ed3b3f20f7b9226485a75b8511b68f?fuid=1061441913266259540" } }),
                        react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(14), fontWeight: "700", color: "#000000B2" } }, "\u5546\u54C1\u6A71\u7A97")),
                    react_1["default"].createElement(react_native_1.View, { style: { justifyContent: "center", marginRight: size_1.ROATE(22), alignItems: "center" } },
                        react_1["default"].createElement(react_native_1.Image, { style: { width: size_1.ROATE(33), height: size_1.ROATE(25.6) }, source: { uri: "https://www.figma.com/file/mqUjjzmXs6LliY0ufRuxZu/image/61547126e31b1ead8d9cd111741b22a084dbe17a" } }),
                        react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(14), fontWeight: "700", color: "#000000B2" } }, "\u4E2A\u4EBA\u6536\u85CF"))))),
        react_1["default"].createElement(react_native_1.View, { style: { backgroundColor: "#fff", marginTop: size_1.ROATE(6) } },
            react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(14), fontWeight: "500", color: "#000", marginTop: size_1.ROATE(22), marginLeft: size_1.ROATE(16) } },
                "\u52A8\u6001 ",
                getItemCount(1)),
            react_1["default"].createElement(BlackHole_1.DynamicList, { DATA: DATA, getItem: getItem, getItemCount: getItemCount, renderItem: function (_a) {
                    var item = _a.item;
                    return react_1["default"].createElement(Item, { item: item });
                } }))));
}
exports["default"] = AboutMe;
var styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: "##E5E5E5",
        height: react_native_1.Dimensions.get("screen").height
    },
    content: {
        backgroundColor: "#F5F5F5"
    },
    header: {
        height: size_1.ROATE(280),
        backgroundColor: "#FFFFFF",
        paddingHorizontal: size_1.ROATE(16),
        paddingRight: size_1.ROATE(16)
    },
    avatar: {
        width: size_1.ROATE(72),
        height: size_1.ROATE(72),
        borderRadius: size_1.ROATE(36),
        marginRight: size_1.ROATE(23)
    },
    tag: {
        height: size_1.ROATE(18),
        borderRadius: size_1.ROATE(20),
        flexDirection: "row",
        paddingLeft: size_1.ROATE(3),
        paddingRight: size_1.ROATE(3),
        paddingVertical: size_1.ROATE(1),
        marginRight: size_1.ROATE(10),
        alignItems: "center"
    },
    userName: {
        fontWeight: '600',
        fontSize: size_1.ROATE(20),
        marginRight: size_1.ROATE(12)
    },
    chooseItem: {
        margin: 18,
        flexDirection: 'row',
        marginEnd: 0,
        marginStart: 120,
        justifyContent: 'space-around'
    },
    itemInfo: {
        alignItems: 'center'
    },
    expContainer: {
        borderWidth: 2,
        borderColor: '#333333',
        backgroundColor: '#fff',
        height: 90,
        borderRadius: 18,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20
    },
    emoj: {
        position: 'absolute',
        left: 20,
        top: -12
    },
    expContent: {
        backgroundColor: '#F6F7FB', padding: 12,
        flexDirection: 'row',
        borderRadius: 22
    }
});
