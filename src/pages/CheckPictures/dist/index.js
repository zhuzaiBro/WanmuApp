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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var cameraroll_1 = require("@react-native-community/cameraroll");
var react_native_1 = require("react-native");
var size_1 = require("../../assets/size");
var react_native_2 = require("@ant-design/react-native");
function CheckPictures(_a) {
    var route = _a.route, _b = _a.choosedItem, choosedItem = _b === void 0 ? function (_a) {
        var item = _a.item, list = _a.list;
        return react_1["default"].createElement(react_1["default"].Fragment, null);
    } : _b, _c = _a.count, count = _c === void 0 ? 3 : _c, img_padding = _a.img_padding;
    var IMAGE_SIZE = size_1.ROATE(375 / count);
    var IMAGE_MARGIN = size_1.ROATE(img_padding || 5);
    var choosedList = []; // 记录选中的照片或者视频的索引，便于直接中photos数据中读取
    var _d = react_1.useState([]), photos = _d[0], setPhotos = _d[1];
    var ChoosedItem = function (_a) {
        var item = _a.item, list = _a.list;
        return react_1["default"].createElement(react_native_1.View, { style: {
                height: IMAGE_SIZE, width: IMAGE_SIZE, display: list.includes(item) ? "flex" : "none", justifyContent: "center", alignItems: "center",
                position: "absolute", left: 0, top: 0, zIndex: 1,
                backgroundColor: "rgba(245,245,245, 0.2)"
            } },
            react_1["default"].createElement(react_native_2.Icon, { size: size_1.ROATE(36), name: 'smile' }));
    };
    choosedItem = ChoosedItem;
    react_1.useEffect(function () {
        console.log(route, 222);
        cameraroll_1["default"].getPhotos({
            first: 120,
            assetType: "All"
        }).then(function (r) {
            setPhotos(function () { return r.edges.map(function (item) { return (__assign({}, item.node.image)); }); });
        });
        return function () {
            console.log(choosedList);
            setPhotos(function (prev) { return __spreadArrays(prev); });
        };
    }, []);
    function Img(_a) {
        var item = _a.item;
        var _b = react_1.useState(false), choosed = _b[0], setChoosed = _b[1];
        var chooseImage = function () {
            // 如果没有被选中, 加上
            if (!choosed) {
                choosedList.push(item);
                setChoosed(function () { return true; });
                route.params.callback(choosedList);
                return;
            }
            setChoosed(function () { return false; });
            var index = choosedList.indexOf(item);
            choosedList = choosedList.slice(0, index).concat(choosedList.slice(index + 1, choosedList[choosedList.length]));
            route.params.callback(choosedList);
        };
        return (react_1["default"].createElement(react_native_1.View, { onTouchEnd: chooseImage, style: { width: IMAGE_SIZE, height: IMAGE_SIZE, padding: IMAGE_MARGIN } },
            react_1["default"].createElement(react_native_1.View, { style: {
                    height: IMAGE_SIZE, width: IMAGE_SIZE, display: choosed ? "flex" : "none", justifyContent: "center", alignItems: "center",
                    position: "absolute", left: 0, top: 0, zIndex: 1,
                    backgroundColor: "rgba(245,245,245, 0.2)"
                } },
                react_1["default"].createElement(react_native_2.Icon, { size: size_1.ROATE(36), name: 'smile' })),
            react_1["default"].createElement(react_native_1.Image, { style: { width: IMAGE_SIZE - IMAGE_MARGIN * 2, height: IMAGE_SIZE - IMAGE_MARGIN * 2 }, source: { uri: item.uri } })));
    }
    function Pictures() {
        // console.log(item);
        return (photos.map(function (item, index) {
            return (react_1["default"].createElement(Img, { key: index, item: item }));
        }));
    }
    return (react_1["default"].createElement(react_native_1.ScrollView, null,
        react_1["default"].createElement(react_native_1.View, { style: { height: size_1.ROATE(220), backgroundColor: "#4D4D4D", alignItems: "center", justifyContent: "center" } },
            react_1["default"].createElement(react_native_2.Icon, { color: '#FFFFFF', size: size_1.ROATE(68), name: 'picture' }),
            react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(14), color: "#FFFFFF" } }, "\u70B9\u51FB\u62CD\u6444\u7167\u7247")),
        react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", flexWrap: "wrap" } }, Pictures())));
}
exports["default"] = CheckPictures;
