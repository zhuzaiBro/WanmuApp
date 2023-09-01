"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
function DynamicList(_a) {
    var DATA = _a.DATA, getItemCount = _a.getItemCount, getItem = _a.getItem, renderItem = _a.renderItem;
    return (React.createElement(react_native_1.VirtualizedList, { style: { backgroundColor: "#fff" }, showsVerticalScrollIndicator: false, disableVirtualization: true, data: DATA, initialNumToRender: 12, renderItem: renderItem, keyExtractor: function (item) { return item.id; }, getItemCount: getItemCount, getItem: getItem }));
}
exports["default"] = DynamicList;
