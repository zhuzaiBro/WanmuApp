"use strict";
exports.__esModule = true;
exports.Download = exports.ArrowRight = exports.MessageA = exports.MessageD = exports.CommunityA = exports.CommunityD = exports.HomeA = exports.HomeD = exports.MeA = exports.MeD = exports.ShopA = exports.ShopD = exports.LoginLogo = exports.LoginBack = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var bg_svg_1 = require("../pictures/login/bg.svg");
var logo_svg_1 = require("../pictures/login/logo.svg");
var home_svg_1 = require("../pictures/tabbar/default/home.svg");
var home_svg_2 = require("../pictures/tabbar/active/home.svg");
var community_svg_1 = require("../pictures/tabbar/default/community.svg");
var community_svg_2 = require("../pictures/tabbar/active/community.svg");
var me_svg_1 = require("../pictures/tabbar/default/me.svg");
var me_svg_2 = require("../pictures/tabbar/active/me.svg");
var shop_svg_1 = require("../pictures/tabbar/default/shop.svg");
var shop_svg_2 = require("../pictures/tabbar/active/shop.svg");
var message_svg_1 = require("../pictures/tabbar/default/message.svg");
var message_svg_2 = require("../pictures/tabbar/active/message.svg");
var arrowR_svg_1 = require("../pictures/oneserver/arrowR.svg");
var addfile_svg_1 = require("../pictures/oneserver/addfile.svg");
var size_1 = require("../size");
var TabbarIconStyle = {
    width: size_1.ROATE(18),
    height: size_1.ROATE(18.73)
};
function LoginBack() {
    return (react_1["default"].createElement(bg_svg_1["default"], { style: { position: "absolute", left: -1, top: -1 }, width: react_native_1.Dimensions.get("screen").width + 2, height: react_native_1.Dimensions.get("screen").height + 2 }));
}
exports.LoginBack = LoginBack;
function LoginLogo() {
    return (react_1["default"].createElement(logo_svg_1["default"], null));
}
exports.LoginLogo = LoginLogo;
function ShopD() {
    return (react_1["default"].createElement(shop_svg_1["default"], { style: TabbarIconStyle }));
}
exports.ShopD = ShopD;
function ShopA() {
    return (react_1["default"].createElement(shop_svg_2["default"], { style: TabbarIconStyle }));
}
exports.ShopA = ShopA;
function MeD() {
    return (react_1["default"].createElement(me_svg_1["default"], { style: TabbarIconStyle }));
}
exports.MeD = MeD;
function MeA() {
    return (react_1["default"].createElement(me_svg_2["default"], { style: TabbarIconStyle }));
}
exports.MeA = MeA;
function HomeD() {
    return (react_1["default"].createElement(home_svg_1["default"], { style: TabbarIconStyle }));
}
exports.HomeD = HomeD;
function HomeA() {
    return (react_1["default"].createElement(home_svg_2["default"], { style: TabbarIconStyle }));
}
exports.HomeA = HomeA;
function CommunityD() {
    return (react_1["default"].createElement(community_svg_1["default"], { style: TabbarIconStyle }));
}
exports.CommunityD = CommunityD;
function CommunityA() {
    return (react_1["default"].createElement(community_svg_2["default"], { style: TabbarIconStyle }));
}
exports.CommunityA = CommunityA;
function MessageD() {
    return (react_1["default"].createElement(message_svg_1["default"], { style: TabbarIconStyle }));
}
exports.MessageD = MessageD;
function MessageA() {
    return (react_1["default"].createElement(message_svg_2["default"], { style: TabbarIconStyle }));
}
exports.MessageA = MessageA;
function ArrowRight() {
    return (react_1["default"].createElement(arrowR_svg_1["default"], null));
}
exports.ArrowRight = ArrowRight;
function Download() {
    return (react_1["default"].createElement(addfile_svg_1["default"], null));
}
exports.Download = Download;
