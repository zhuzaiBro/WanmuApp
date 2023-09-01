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
var react_native_swiper_1 = require("react-native-swiper");
var SegmentControl = function (props) {
    var _a = react_1.useState([]), tags = _a[0], setTags = _a[1];
    var _b = react_1.useState(0), currentIndex = _b[0], setCurrentIndex = _b[1];
    react_1.useEffect(function () {
        // console.log("改变一下");
        setTags(props.tags.map(function (item, i) {
            return react_1["default"].createElement(react_native_1.View, { onTouchEnd: function () {
                    setCurrentIndex(function () { return i; });
                    // console.log(i, currentIndex.current)
                }, key: i, style: currentIndex == i ? __assign(__assign({}, props.tagWrapperStyle), props.tagWrapperActiveStyle) : props.tagWrapperStyle },
                react_1["default"].createElement(react_native_1.Text, { style: currentIndex == i ? __assign(__assign({}, props.tagDefaultStyle), props.tagActiveStyle) : props.tagDefaultStyle }, item));
        }));
    }, [currentIndex]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false, style: props.headerStyle }, tags),
        react_1["default"].createElement(react_native_swiper_1["default"], { loop: false, dot: react_1["default"].createElement(react_1["default"].Fragment, null), activeDot: react_1["default"].createElement(react_1["default"].Fragment, null), onIndexChanged: function (i) {
                // currentIndex = i;
                setCurrentIndex(function () { return i; });
                // console.log(currentIndex, i);
            }, index: currentIndex }, props.children)));
};
exports["default"] = SegmentControl;
