"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var size_1 = require("../../../assets/size");
function HomeHeader(_a) {
    var navigation = _a.navigation, iosHeight = _a.iosHeight;
    // console.log(StatusBar.setTranslucent())
    var _b = react_1.useState(0), currentIndex = _b[0], setCurrentIndex = _b[1];
    var _c = react_1.useState([{}]), scrollItems = _c[0], setScrollItems = _c[1];
    var list = [{ title: "世界", to: "HomeContainer" }, { title: "视频", to: "Shop2" }, { title: "游戏", to: "Shop2" }];
    react_1.useEffect(function () {
        setScrollItems(function () { return list; });
    }, [currentIndex]);
    return (react_1["default"].createElement(react_native_1.View, { style: { backgroundColor: "#1F231D", paddingTop: size_1.ROATE(44) } }));
}
exports["default"] = HomeHeader;
var styles = react_native_1.StyleSheet.create({
    header: {
        height: 50,
        padding: 6
    },
    headerItem: {
        margin: 'auto',
        marginEnd: 10,
        padding: 6,
        borderRadius: 6,
        height: 38
    },
    headerFont: {
        fontSize: 16
    },
    active: {
        backgroundColor: "#202020",
        borderRadius: 6
    },
    activeFont: {
        color: "#fff"
    }
});
