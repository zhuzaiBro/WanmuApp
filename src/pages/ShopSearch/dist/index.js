"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_2 = require("@ant-design/react-native");
var size_1 = require("../../assets/size");
// 左边搜索的区域
function SearchTagArea() {
    var _a = react_1.useState(0), currentIndex = _a[0], setCurrentIndex = _a[1];
    // 测试数据，后面用ajax请求
    var tagList = [
        {
            tagName: "热销"
        },
        { tagName: "食品" },
        { tagName: "洗护" }
    ];
    function Tag(_a) {
        var tag = _a.tag, index = _a.index;
        var changeTag = react_1.useCallback(function () {
            setCurrentIndex(function () { return index; });
        }, []);
        return react_1["default"].createElement(react_native_1.Text, { onPress: changeTag, style: index === currentIndex ? [styles.tag, styles.activeTag] :
                styles.tag }, tag.tagName);
    }
    function TagList(tagList) {
        return tagList.map(function (it, index) {
            return react_1["default"].createElement(Tag, { tag: it, key: index, index: index });
        });
    }
    return (react_1["default"].createElement(react_native_1.View, { style: styles.contentLeft }, TagList(tagList)));
}
// 右边主区域
function TagItem(_a) {
    var item = _a.item, nav = _a.nav;
    // 跳转到商品详细页面
    var goShopDetailPage = react_1.useCallback(function () {
        // console.log(nav);
        nav.navigate("ShopDetail", { name: 'zhujie' });
    }, []);
    return (react_1["default"].createElement(react_native_1.View, { onTouchEnd: goShopDetailPage, style: styles.tagItem },
        react_1["default"].createElement(react_native_1.Image, { style: styles.tagImg, source: { uri: item.uri } }),
        react_1["default"].createElement(react_native_1.Text, { style: styles.tagItemFont }, item.title)));
}
// 右边主区域
function TagItemContainer(_a) {
    var tagItemList = _a.tagItemList, nav = _a.nav;
    var renmderLists = tagItemList.map(function (it, index) {
        return react_1["default"].createElement(TagItem, { nav: nav, key: index, item: it });
    });
    return react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row" } }, renmderLists);
}
function ShopSearch(_a) {
    var navigation = _a.navigation;
    var goShopPage = react_1.useCallback(function () {
        navigation.navigate("Shop");
    }, []);
    var tagItemList = [{
            uri: "http://www.zhuzaibrother.cn/static/upload/2022-2-13-19-58-31-3-a22ab.jpg",
            title: "泡面"
        }, {
            uri: "http://www.zhuzaibrother.cn/static/upload/2022-2-13-19-58-31-3-a22ab.jpg",
            title: "泡面"
        }, {
            uri: "http://www.zhuzaibrother.cn/static/upload/2022-2-13-19-58-31-3-a22ab.jpg",
            title: "泡面"
        }, {
            uri: "http://www.zhuzaibrother.cn/static/upload/2022-2-13-19-58-31-3-a22ab.jpg",
            title: "泡面"
        },];
    return (react_1["default"].createElement(react_native_1.ScrollView, { style: { backgroundColor: "#EDEDED" } },
        react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", marginTop: size_1.ROATE(6) } },
            react_1["default"].createElement(react_native_2.Icon, { onPress: goShopPage, style: { marginRight: size_1.ROATE(14), marginLeft: size_1.ROATE(14) }, name: 'arrow-left', color: '#000' }),
            react_1["default"].createElement(react_native_1.View, { style: styles.searchBar },
                react_1["default"].createElement(react_native_2.Icon, { name: 'search', color: '#000' }),
                react_1["default"].createElement(react_native_1.TextInput, { style: styles.search, placeholder: '\u641C\u7D22\u5546\u54C1' }))),
        react_1["default"].createElement(react_native_1.View, { style: styles.content },
            react_1["default"].createElement(SearchTagArea, null),
            react_1["default"].createElement(react_native_1.View, { style: styles.contentRight },
                react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(14), color: "#000", marginBottom: size_1.ROATE(14) } }, "\u7545\u9500\u699C\u5355"),
                react_1["default"].createElement(TagItemContainer, { tagItemList: tagItemList, nav: navigation })))));
}
exports["default"] = ShopSearch;
var styles = react_native_1.StyleSheet.create({
    searchBar: {
        backgroundColor: "#fff",
        borderRadius: size_1.ROATE(12),
        borderWidth: 1,
        borderColor: "#333333",
        width: size_1.ROATE(309),
        height: size_1.ROATE(32),
        paddingRight: size_1.ROATE(8),
        paddingLeft: size_1.ROATE(8),
        flexDirection: "row",
        marginRight: size_1.ROATE(16)
    },
    tag: {
        fontSize: size_1.ROATE(14),
        marginLeft: size_1.ROATE(20),
        color: "#000",
        backgroundColor: "f40",
        marginBottom: size_1.ROATE(25),
        height: size_1.ROATE(32)
    },
    activeTag: {
        fontSize: size_1.ROATE(16),
        fontWeight: "700"
    },
    search: {
        paddingTop: size_1.ROATE(6),
        paddingBottomL: 0,
        alignItems: "center",
        height: size_1.ROATE(32),
        fontSize: size_1.ROATE(12)
    },
    content: {
        marginTop: size_1.ROATE(14),
        height: react_native_1.Dimensions.get("screen").height,
        flexDirection: "row"
    },
    contentLeft: {
        width: size_1.ROATE(71),
        backgroundColor: "#EDEDED",
        paddingTop: size_1.ROATE(45)
    },
    contentRight: {
        backgroundColor: "#fff",
        marginRight: size_1.ROATE(16),
        width: size_1.ROATE(288),
        height: react_native_1.Dimensions.get("screen").height,
        padding: size_1.ROATE(24)
    },
    tagItem: {
        margin: size_1.ROATE(6),
        marginRight: size_1.ROATE(36),
        alignItems: "center"
    },
    tagItemFont: {
        fontSize: size_1.ROATE(12),
        margin: size_1.ROATE(4)
    },
    tagImg: {
        width: size_1.ROATE(56),
        height: size_1.ROATE(56),
        borderRadius: 2
    }
});
