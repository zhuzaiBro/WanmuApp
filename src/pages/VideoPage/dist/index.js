"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var VideoComp_1 = require("../../components/VideoComp");
function VideoPage() {
    var _a = react_1.useState(0), seek = _a[0], setSeek = _a[1];
    var _b = react_1.useState(0), duration = _b[0], setDuration = _b[1];
    return (react_1["default"].createElement(react_native_1.ScrollView, { key: 1 },
        react_1["default"].createElement(VideoComp_1["default"], { uri: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/picture%20material/b96d91ea228f14896720b5afb3c99487.mp4" })));
}
exports["default"] = VideoPage;
