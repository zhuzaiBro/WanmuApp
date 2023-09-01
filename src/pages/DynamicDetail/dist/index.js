"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_2 = require("@ant-design/react-native");
var size_1 = require("../../assets/size");
var react_native_swiper_1 = require("react-native-swiper");
var comment_1 = require("../../components/Comment/comment");
var App_1 = require("../../../App");
function Banner(_a) {
    var pictures = _a.pictures;
    var _b = react_1.useState(1), current = _b[0], setCurrent = _b[1];
    var images = pictures.map(function (it) { return react_1["default"].createElement(react_native_1.Image, { style: { height: size_1.ROATE(356) }, source: { uri: it.uri } }); });
    return (react_1["default"].createElement(react_native_1.View, { style: { marginLeft: "auto", marginRight: "auto", width: size_1.ROATE(343) } },
        react_1["default"].createElement(react_native_swiper_1["default"], { dot: react_1["default"].createElement(react_1["default"].Fragment, null), activeDot: react_1["default"].createElement(react_1["default"].Fragment, null), containerStyle: { width: size_1.ROATE(343), overflow: "hidden", borderRadius: size_1.ROATE(16), height: size_1.ROATE(280) } },
            images,
            images),
        react_1["default"].createElement(react_native_1.View, { style: {
                backgroundColor: "rgba(0,0,0,0.45)", height: size_1.ROATE(20), borderRadius: size_1.ROATE(3),
                position: "absolute", bottom: size_1.ROATE(17.3), right: size_1.ROATE(17.3), width: size_1.ROATE(38)
            } },
            react_1["default"].createElement(react_native_1.Text, { style: {
                    fontSize: size_1.ROATE(12), fontWeight: "400", textAlign: "center", lineHeight: size_1.ROATE(20),
                    color: "rgba(255,255,255, 0.6)"
                } },
                current,
                "/",
                pictures.length))));
}
function DynamicDetail(_a) {
    var route = _a.route, navigation = _a.navigation;
    var ctx = react_1.useContext(App_1.visibalCtx);
    react_1.useEffect(function () {
        react_native_1.Animated.timing(ctx.x, {
            toValue: 0,
            useNativeDriver: true,
            duration: 200
        }).start();
        console.log(route);
    }, []);
    return (react_1["default"].createElement(react_native_1.Animated.View, { style: { height: react_native_1.Dimensions.get("screen").height - size_1.ROATE(100), transform: [{ translateX: ctx.x }] } },
        react_1["default"].createElement(react_native_1.ScrollView, { style: styles.container },
            react_1["default"].createElement(Banner, { pictures: route.params.pictures }),
            react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", marginTop: size_1.ROATE(16), paddingHorizontal: size_1.ROATE(17) } },
                react_1["default"].createElement(react_native_1.View, { style: { height: size_1.ROATE(50), width: size_1.ROATE(187), flexDirection: "row", borderBottomLeftRadius: size_1.ROATE(12), borderTopLeftRadius: size_1.ROATE(12), overflow: "hidden" } },
                    react_1["default"].createElement(react_native_1.Image, { resizeMode: 'cover', style: { width: size_1.ROATE(56), height: size_1.ROATE(50) }, source: { uri: "http://www.zhuzaibrother.cn/static/upload/2022-5-7-20-40-55-739-99447.jpg" } }),
                    react_1["default"].createElement(react_native_1.View, { style: { backgroundColor: "rgba(0,0,0,0.04)", paddingHorizontal: size_1.ROATE(12), width: size_1.ROATE(131) } },
                        react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(15.1), marginVertical: size_1.ROATE(4), fontWeight: "400" } }, "CHANEL\u62A4\u624B\u971C"),
                        react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(14), fontWeight: "600" } }, "\u00A5 315")))),
            react_1["default"].createElement(react_native_1.Text, { style: { marginHorizontal: size_1.ROATE(17), marginTop: size_1.ROATE(16) } }, route.params.content),
            react_1["default"].createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                react_1["default"].createElement(react_native_1.View, { style: { padding: size_1.ROATE(3), paddingHorizontal: size_1.ROATE(6), borderWidth: 1, borderRadius: size_1.ROATE(12), marginHorizontal: size_1.ROATE(17), marginTop: size_1.ROATE(15), borderColor: "rgba(0,0,0,0.3)" } },
                    react_1["default"].createElement(react_native_1.Text, null,
                        "# ",
                        route.params.title))),
            react_1["default"].createElement(react_native_1.Text, { style: {
                    marginTop: size_1.ROATE(12), marginRight: size_1.ROATE(16), marginLeft: size_1.ROATE(16), fontSize: size_1.ROATE(12), fontWeight: "400",
                    lineHeight: size_1.ROATE(22), color: "rgba(0,0,0,0.45)", marginBottom: size_1.ROATE(16)
                } }, "06-25"),
            react_1["default"].createElement(react_native_1.View, { style: { padding: size_1.ROATE(16) } },
                react_1["default"].createElement(react_native_1.Text, { style: { color: "rgba(0,0,0,0.9)", fontSize: size_1.ROATE(12), lineHeight: size_1.ROATE(22) } }, "\u8BC4\u8BBA 2"),
                react_1["default"].createElement(react_native_1.View, { style: { marginBottom: size_1.ROATE(88) } },
                    react_1["default"].createElement(comment_1["default"], null),
                    react_1["default"].createElement(comment_1["default"], null),
                    react_1["default"].createElement(comment_1["default"], null),
                    react_1["default"].createElement(comment_1["default"], null)))),
        react_1["default"].createElement(react_native_1.View, { style: {
                backgroundColor: "#fff", borderTopWidth: size_1.ROATE(1.2), borderColor: "#ebebeb", position: "absolute", bottom: 0, left: 0,
                paddingTop: size_1.ROATE(25), paddingHorizontal: size_1.ROATE(15), height: size_1.ROATE(78), flexDirection: "row", width: react_native_1.Dimensions.get("screen").width
            } },
            react_1["default"].createElement(react_native_1.View, { style: {
                    backgroundColor: "#f6f6f6", width: size_1.ROATE(157), flexDirection: "row",
                    alignItems: "center", height: size_1.ROATE(33), borderRadius: size_1.ROATE(30)
                } },
                react_1["default"].createElement(react_native_2.Icon, { style: { marginLeft: size_1.ROATE(18) }, name: 'edit' }),
                react_1["default"].createElement(react_native_1.TextInput, { placeholder: '\u8BF4\u70B9\u4EC0\u4E48' })),
            react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", marginTop: size_1.ROATE(6), marginLeft: "auto" } },
                react_1["default"].createElement(react_native_2.Icon, { name: 'like' }),
                react_1["default"].createElement(react_native_1.Text, null, "4")))));
}
exports["default"] = DynamicDetail;
var styles = react_native_1.StyleSheet.create({
    container: {
        height: react_native_1.Dimensions.get("screen").height,
        backgroundColor: "#fff",
        flexGrow: 1
    },
    header: {
        flexDirection: "row",
        paddingBottom: size_1.ROATE(10),
        paddingHorizontal: size_1.ROATE(16),
        alignItems: "center",
        backgroundColor: "#fff",
        height: size_1.ROATE(124),
        width: size_1.ROATE(375),
        paddingTop: size_1.ROATE(44)
    },
    avatar: {
        marginLeft: size_1.ROATE(11),
        height: size_1.ROATE(51),
        width: size_1.ROATE(52),
        borderRadius: size_1.ROATE(25.5)
    }
});
