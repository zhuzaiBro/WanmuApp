"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var size_1 = require("../../assets/size");
var react_native_2 = require("@ant-design/react-native");
var Item = function (_a) {
    var item = _a.item, navigation = _a.navigation;
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
    var searchImg = function () {
        setIsOpen(function () {
            setImgUrls(function () {
                return [{ url: item.pictures[0].uri }, { url: item.pictures[0].uri }];
            });
            return true;
        });
    };
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
                react_1["default"].createElement(react_native_1.Text, { style: { lineHeight: size_1.ROATE(36), paddingHorizontal: size_1.ROATE(12), backgroundColor: "rgba(0,0,0,0.06)" } }, "\u5415\u94ED\u6D32\uFF1A \u725B\u554A")))));
};
var HeaderComp = function (_a) {
    var navigation = _a.navigation;
    return (react_1["default"].createElement(react_native_1.View, { style: { height: size_1.ROATE(200), paddingBottom: size_1.ROATE(25) } },
        react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row" } },
            react_1["default"].createElement(react_native_1.Image, { style: { height: size_1.ROATE(100), marginRight: size_1.ROATE(15), marginLeft: size_1.ROATE(16), borderRadius: size_1.ROATE(50), width: size_1.ROATE(100) }, source: { uri: "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" } }),
            react_1["default"].createElement(react_native_1.View, { style: { flexGrow: 1, marginRight: size_1.ROATE(16) } },
                react_1["default"].createElement(react_native_1.Text, { style: { marginTop: size_1.ROATE(20), textAlign: "right", marginBottom: size_1.ROATE(12) } }, "\u6731\u6770"),
                react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(12), textAlign: "right", marginBottom: size_1.ROATE(18) } }, "sfdsfsdfsefwefdfsdfsdf"),
                react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(12), textAlign: "right" } }, "\u7537\u751F \u00B7 \u672C\u79D1 \u00B7 \u6D59\u6C5F\u7406\u5DE5\u5927\u5B66"))),
        react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", paddingHorizontal: size_1.ROATE(16), alignItems: "center" } },
            react_1["default"].createElement(react_native_1.View, { style: { justifyContent: "center", alignItems: "center", marginRight: size_1.ROATE(18) } },
                react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(18) } }, "19"),
                react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(12) } }, "\u7C89\u4E1D")),
            react_1["default"].createElement(react_native_1.View, { style: { justifyContent: "center", alignItems: "center", marginRight: size_1.ROATE(18) } },
                react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(18) } }, "19"),
                react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(12) } }, "\u7C89\u4E1D")),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: { height: size_1.ROATE(31), marginLeft: "auto", marginRight: size_1.ROATE(12.5), width: size_1.ROATE(68), flexDirection: "row",
                    justifyContent: "center", alignItems: "center", borderRadius: size_1.ROATE(5), backgroundColor: "#fff", borderWidth: 1 } },
                react_1["default"].createElement(react_native_2.Icon, { name: 'comment', size: size_1.ROATE(12), color: "#000", style: { marginRight: size_1.ROATE(6) } }),
                react_1["default"].createElement(react_native_1.Text, { style: { color: "#000", fontSize: size_1.ROATE(13) } }, "\u804A\u5929")),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: { height: size_1.ROATE(31), width: size_1.ROATE(68), flexDirection: "row",
                    justifyContent: "center", alignItems: "center", borderRadius: size_1.ROATE(5), backgroundColor: "#202020" } },
                react_1["default"].createElement(react_native_1.Text, { style: { color: "#fff", fontSize: size_1.ROATE(13) } }, "\u5173\u6CE8")))));
};
function MyInfo(_a) {
    var route = _a.route, navigation = _a.navigation;
    var DATA = [];
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
    var Header = function () { return react_1["default"].createElement(HeaderComp, { navigation: navigation }); };
    return (react_1["default"].createElement(react_native_1.VirtualizedList, { ListHeaderComponent: Header, style: { backgroundColor: "#fff" }, getItem: getItem, getItemCount: function () { return 20; }, StickyHeaderComponent: function () { return react_1["default"].createElement(react_native_1.View, { style: { backgroundColor: "#f40", height: size_1.ROATE(122) } }); }, renderItem: function (_a) {
            var index = _a.index, item = _a.item;
            return react_1["default"].createElement(Item, { navigation: navigation, item: item });
        }, data: DATA }));
}
exports["default"] = MyInfo;
var styles = react_native_1.StyleSheet.create({
    container: {
        // marginTop: 60,
        paddingTop: 60,
        overflow: "visible"
    },
    defaultFont: {
        fontSize: 15,
        color: "#202020"
    }
});
