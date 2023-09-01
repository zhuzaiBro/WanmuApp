"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Pager = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_swiper_1 = require("react-native-swiper");
var size_1 = require("../../assets/size");
function Pager(_a) {
    var _b = _a.total, total = _b === void 0 ? 1 : _b, _c = _a.current, current = _c === void 0 ? 1 : _c;
    return (react_1["default"].createElement(react_native_1.View, { style: {
            width: size_1.ROATE(34), height: size_1.ROATE(19), position: "absolute", backgroundColor: "rgba(255,255,255,0.4)", zIndex: 1,
            right: size_1.ROATE(12), bottom: size_1.ROATE(12), borderRadius: size_1.ROATE(5), justifyContent: "center", alignItems: "center"
        } },
        react_1["default"].createElement(react_native_1.Text, { style: { fontSize: size_1.ROATE(12), fontWeight: "400" } },
            current,
            "/",
            total)));
}
exports.Pager = Pager;
var ShopBanner = /** @class */ (function (_super) {
    __extends(ShopBanner, _super);
    function ShopBanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShopBanner.prototype.render = function () {
        var pictures = this.props.imgUrlList.map(function (it, index) {
            return react_1["default"].createElement(react_native_1.Image, { resizeMode: 'cover', style: { zIndex: 1, height: size_1.ROATE(280), width: size_1.ROATE(375) }, key: index, source: { uri: it } });
        });
        return (react_1["default"].createElement(react_native_swiper_1["default"], { onIndexChanged: this.props.onChange, contentContainerStyle: { height: size_1.ROATE(280) }, activeDotStyle: { width: size_1.ROATE(6), zIndex: 1, height: size_1.ROATE(6), borderRadius: size_1.ROATE(3), backgroundColor: "#fff" }, dotStyle: { width: size_1.ROATE(6), height: size_1.ROATE(6), borderRadius: size_1.ROATE(3) } }, pictures));
    };
    return ShopBanner;
}(react_1.PureComponent));
exports["default"] = ShopBanner;
