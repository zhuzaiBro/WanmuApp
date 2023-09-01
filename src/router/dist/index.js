"use strict";
exports.__esModule = true;
exports.Tab = void 0;
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var react_native_1 = require("react-native");
exports.Tab = bottom_tabs_1.createBottomTabNavigator();
var useGetIOSStatusBarHeight_1 = require("../hooks/useGetIOSStatusBarHeight");
var Messages_1 = require("../pages/Messages");
var HomeHeader_1 = require("../pages/Home/HomeHeader");
var AboutMe_1 = require("../pages/AboutMe");
var Home_1 = require("../pages/Home");
var BlackHole_1 = require("../pages/BlackHole");
var Login_1 = require("../pages/Login");
var Setting_1 = require("../pages/Setting");
var App_1 = require("../../App");
var Shop_1 = require("../pages/Shop");
var MyInfo_1 = require("../pages/MyInfo");
var Release_1 = require("../pages/Release");
var SearchCode_1 = require("../pages/SearchCode");
var ShopDetail_1 = require("../pages/ShopDetail");
var ShopDetailHeader_1 = require("../pages/ShopDetail/ShopDetailHeader");
var Chat_1 = require("../pages/Chat");
var ChatHeader_1 = require("../pages/Chat/ChatHeader");
var CheckPictures_1 = require("../pages/CheckPictures");
var size_1 = require("../assets/size");
var react_native_2 = require("@ant-design/react-native");
var ShopSearch_1 = require("../pages/ShopSearch");
var MemberAssets_1 = require("../pages/MemberAssets");
var Wthdrawal_1 = require("../pages/Wthdrawal");
var AddressManager_1 = require("../pages/Shop/AddressManager");
var EditAddr_1 = require("../pages/Shop/EditAddr");
var LikeItem_1 = require("../pages/Shop/LikeItem");
var DynamicDetail_1 = require("../pages/DynamicDetail");
var DynamicDetailHeader_1 = require("../pages/DynamicDetail/DynamicDetailHeader");
var BuyingPage_1 = require("../pages/BuyingPage");
var MemberCenterHeader_1 = require("../pages/MemberCenter/MemberCenterHeader");
var TabScreenList_1 = require("./TabScreenList");
var MemberCenter_1 = require("../pages/MemberCenter");
var CommentsOfGood_1 = require("../pages/ShopDetail/CommentsOfGood");
var imgs_1 = require("../assets/imgs");
var LoginHeader_1 = require("../pages/Login/LoginHeader");
var defaultOptions = {};
var defaultTabFnot = {
    color: "#000",
    fontSize: size_1.ROATE(12),
    marginTop: size_1.ROATE(-2)
};
function Router() {
    var _a = react_1.useState(false), login = _a[0], setLogin = _a[1];
    // app创建的上下文,强制渲染
    var refresh = react_1.useContext(App_1.visibalCtx);
    var iOSHeight = useGetIOSStatusBarHeight_1.useGetIOSStatusBarHeight();
    var list = [
        {
            comp: Chat_1["default"],
            name: "Chat",
            options: {
                tabBarItemStyle: { display: 'none' },
                title: '聊天',
                header: function (_a) {
                    var navigation = _a.navigation, route = _a.route;
                    return react_1["default"].createElement(ChatHeader_1["default"], { route: route, iOSHeight: iOSHeight, navigation: navigation });
                },
                tabBarStyle: { display: "none" }
            }
        },
        {
            comp: Home_1["default"],
            name: "Index",
            listeners: {
                focus: function () { refresh.setStatusBarColor(function () { return "light-content"; }); },
                blur: function () { refresh.setStatusBarColor(function () { return "dark-content"; }); }
            },
            options: {
                title: '首页',
                unmountOnBlur: false,
                header: function (_a) {
                    var navigation = _a.navigation;
                    return react_1["default"].createElement(HomeHeader_1["default"], { iosHeight: iOSHeight, navigation: navigation });
                },
                // tabBarActiveTintColor: "#9473EF",
                tabBarLabelStyle: defaultTabFnot,
                tabBarIcon: function (_a) {
                    var focused = _a.focused, color = _a.color, size = _a.size;
                    var icon;
                    icon = focused ? react_1["default"].createElement(imgs_1.HomeA, null) : react_1["default"].createElement(imgs_1.HomeD, null);
                    return icon;
                }
            }
        }, {
            comp: Login_1["default"],
            name: "Login",
            listeners: {
                focus: function () { refresh.setStatusBarColor(function () { return "light-content"; }); },
                blur: function () { refresh.setStatusBarColor(function () { return "dark-content"; }); }
            },
            options: {
                tabBarItemStyle: { display: 'none' },
                title: '登录',
                header: function (_a) {
                    var navigation = _a.navigation, route = _a.route;
                    return react_1["default"].createElement(LoginHeader_1["default"], { route: route, iOSHeight: iOSHeight, navigation: navigation });
                },
                tabBarStyle: { display: "none" }
            }
        }, {
            name: 'MyInfo',
            comp: MyInfo_1["default"],
            options: {
                tabBarItemStyle: { display: 'none' },
                title: '我的信息',
                header: function (_a) {
                    var navigation = _a.navigation;
                    return react_1["default"].createElement(InfoHeader, { iOSHeight: iOSHeight, navigation: navigation });
                },
                tabBarStyle: { display: "none" }
            }
        }, {
            name: "BlackHole",
            comp: BlackHole_1["default"],
            listeners: {
                focus: function () { refresh.setStatusBarColor(function () { return "light-content"; }); },
                blur: function () { refresh.setStatusBarColor(function () { return "dark-content"; }); }
            },
            options: {
                title: '社区',
                header: function () { return react_1["default"].createElement(react_native_1.View, { style: {
                        backgroundColor: "#1c1e1b",
                        paddingTop: react_native_1.StatusBar.currentHeight || iOSHeight
                    } }); },
                unmountOnBlur: false,
                tabBarLabelStyle: defaultTabFnot,
                tabBarIcon: function (_a) {
                    var focused = _a.focused, color = _a.color, size = _a.size;
                    var icon;
                    icon = focused ? react_1["default"].createElement(imgs_1.CommunityA, null) : react_1["default"].createElement(imgs_1.CommunityD, null);
                    return icon;
                }
            }
        }, {
            comp: Shop_1["default"],
            name: "Shop",
            options: {
                lazy: true,
                title: '商城',
                unmountOnBlur: false,
                header: function (_a) {
                    var navigation = _a.navigation;
                    return react_1["default"].createElement(react_1["default"].Fragment, null);
                },
                tabBarLabelStyle: defaultTabFnot,
                tabBarIcon: function (_a) {
                    var focused = _a.focused, color = _a.color, size = _a.size;
                    var icon;
                    icon = focused ?
                        react_1["default"].createElement(imgs_1.ShopA, null) : react_1["default"].createElement(imgs_1.ShopD, null);
                    return icon;
                }
            }
        }, {
            comp: Messages_1["default"],
            name: "Message",
            options: {
                title: '消息',
                header: function () { return react_1["default"].createElement(react_1["default"].Fragment, null); },
                unmountOnBlur: false,
                tabBarLabelStyle: defaultTabFnot,
                tabBarIcon: function (_a) {
                    var focused = _a.focused, color = _a.color, size = _a.size;
                    var icon;
                    icon = focused ?
                        react_1["default"].createElement(imgs_1.MessageA, null) : react_1["default"].createElement(imgs_1.MessageD, null);
                    return icon;
                }
            }
        }, {
            comp: AboutMe_1["default"],
            name: "Me",
            options: {
                tabBarVisibilityAnimationConfig: { show: { animation: "timing" } },
                title: '我的',
                header: function (_a) {
                    var navigation = _a.navigation;
                    return react_1["default"].createElement(AboutHeader, { navigation: navigation, iOSHeight: iOSHeight });
                },
                tabBarLabelStyle: defaultTabFnot,
                unmountOnBlur: false,
                tabBarIcon: function (_a) {
                    var focused = _a.focused, color = _a.color, size = _a.size;
                    var icon;
                    icon = focused ?
                        react_1["default"].createElement(imgs_1.MeA, null) : react_1["default"].createElement(imgs_1.MeD, null);
                    return icon;
                }
            }
        }, {
            comp: SearchCode_1["default"],
            name: "SearchCode",
            options: {
                tabBarItemStyle: { display: 'none' },
                title: '扫码',
                header: function (_a) {
                    var navigation = _a.navigation, route = _a.route;
                    return react_1["default"].createElement(LoginHeader_1["default"], { route: route, iOSHeight: iOSHeight, navigation: navigation });
                },
                tabBarStyle: { display: "none" }
            }
        }, {
            comp: Release_1["default"],
            name: "Release",
            options: {
                tabBarItemStyle: { display: 'none' },
                title: '扫码',
                header: function (_a) {
                    var navigation = _a.navigation, route = _a.route;
                    return react_1["default"].createElement(LoginHeader_1["default"], { route: route, iOSHeight: iOSHeight, navigation: navigation });
                },
                tabBarStyle: { display: "none" }
            }
        }, {
            comp: MemberCenter_1["default"],
            name: "MemberCenter",
            listeners: {
                focus: function () { refresh.setStatusBarColor(function () { return "light-content"; }); },
                blur: function () { refresh.setStatusBarColor(function () { return "dark-content"; }); }
            },
            options: {
                tabBarItemStyle: { display: 'none' },
                title: '会员中心',
                header: function (_a) {
                    var navigation = _a.navigation, route = _a.route;
                    return react_1["default"].createElement(MemberCenterHeader_1["default"], { navigation: navigation, route: route });
                },
                tabBarStyle: { display: "none" }
            }
        }, {
            comp: Setting_1["default"],
            name: "Setting",
            options: {
                tabBarItemStyle: { display: 'none' },
                title: '设置',
                header: function (_a) {
                    var navigation = _a.navigation, route = _a.route;
                    return react_1["default"].createElement(react_native_1.View, { style: {
                            paddingTop: (react_native_1.StatusBar.currentHeight || iOSHeight) + size_1.ROATE(11),
                            backgroundColor: "#202020", zIndex: -1
                        } });
                },
                tabBarStyle: { display: "none" }
            }
        }, {
            comp: ShopDetail_1["default"],
            name: "ShopDetail",
            options: {
                tabBarItemStyle: { display: 'none' },
                title: '商品详情',
                header: function (_a) {
                    var navigation = _a.navigation;
                    return react_1["default"].createElement(ShopDetailHeader_1["default"], { iOSHeight: iOSHeight, navigation: navigation });
                },
                tabBarStyle: { display: "none" }
            }
        }, {
            name: "Picker",
            comp: CheckPictures_1["default"],
            options: {
                tabBarVisibilityAnimationConfig: {
                    show: {
                        animation: "spring",
                        config: {}
                    }
                },
                title: '我的',
                tabBarItemStyle: { display: 'none' },
                header: function (_a) {
                    var navigation = _a.navigation, route = _a.route;
                    return (react_1["default"].createElement(react_native_1.View, { style: {
                            backgroundColor: "#4D4D4D", flexDirection: "row", justifyContent: "space-between",
                            padding: 18,
                            paddingTop: (react_native_1.StatusBar.currentHeight || iOSHeight) + size_1.ROATE(10)
                        } },
                        react_1["default"].createElement(react_native_2.Icon, { onPress: function () { return navigation.navigate(route.params.title); }, color: '#FFFFFF', size: size_1.ROATE(18), name: 'arrow-left' }),
                        react_1["default"].createElement(react_native_1.Text, { onPress: function () { return navigation.goBack(); }, style: { fontSize: size_1.ROATE(14), color: "#FFFFFF" } }, "\u786E\u5B9A")));
                },
                tabBarStyle: { display: "none" }
            }
        }, {
            comp: ShopSearch_1["default"],
            name: "ShopSearch",
            options: {
                title: '搜索商品',
                tabBarItemStyle: { display: 'none' },
                header: function (_a) {
                    var navigation = _a.navigation, route = _a.route;
                    return (react_1["default"].createElement(react_native_1.View, { style: {
                            paddingTop: react_native_1.StatusBar.currentHeight || iOSHeight
                        } }));
                },
                tabBarStyle: { display: "none" }
            }
        }, {
            name: "MemberAssets",
            comp: MemberAssets_1["default"],
            options: {
                title: '会员资产',
                tabBarItemStyle: { display: 'none' },
                header: function (_a) {
                    var navigation = _a.navigation, route = _a.route;
                    return (react_1["default"].createElement(react_native_1.View, { style: {
                            paddingTop: (react_native_1.StatusBar.currentHeight || iOSHeight) + size_1.ROATE(11),
                            backgroundColor: "#D7D7D7"
                        } }));
                },
                tabBarStyle: { display: "none" }
            }
        }, {
            comp: Wthdrawal_1["default"],
            name: "Wthdrawal",
            options: {
                title: '提现',
                tabBarItemStyle: { display: 'none' },
                header: function (_a) {
                    var navigation = _a.navigation, route = _a.route;
                    return (react_1["default"].createElement(react_native_1.View, { style: {
                            paddingTop: (react_native_1.StatusBar.currentHeight || iOSHeight) + size_1.ROATE(11),
                            backgroundColor: "#D7D7D7"
                        } }));
                },
                tabBarStyle: { display: "none" }
            }
        }, {
            comp: AddressManager_1["default"],
            name: "AddressManager",
            options: {
                title: '地址管理',
                tabBarItemStyle: { display: 'none' },
                header: function (_a) {
                    var navigation = _a.navigation, route = _a.route;
                    return (react_1["default"].createElement(react_native_1.View, { style: {
                            paddingTop: (react_native_1.StatusBar.currentHeight || iOSHeight) + size_1.ROATE(11),
                            backgroundColor: "#D7D7D7", zIndex: -1
                        } }));
                },
                tabBarStyle: { display: "none" }
            }
        }, {
            comp: EditAddr_1["default"],
            name: "EditAddress",
            options: {
                title: '编辑地址',
                tabBarItemStyle: { display: 'none' },
                header: function (_a) {
                    var navigation = _a.navigation, route = _a.route;
                    return (react_1["default"].createElement(react_native_1.View, { style: {
                            paddingTop: (react_native_1.StatusBar.currentHeight || iOSHeight) + size_1.ROATE(11),
                            backgroundColor: "#D7D7D7", zIndex: -1
                        } }));
                },
                tabBarStyle: { display: "none" }
            }
        }, {
            comp: LikeItem_1["default"],
            name: "LikeItem",
            options: {
                title: '收藏',
                tabBarItemStyle: { display: 'none' },
                header: function (_a) {
                    var navigation = _a.navigation, route = _a.route;
                    return (react_1["default"].createElement(react_native_1.View, { style: {
                            paddingTop: (react_native_1.StatusBar.currentHeight || iOSHeight) + size_1.ROATE(11),
                            backgroundColor: "#D7D7D7", zIndex: -1
                        } }));
                },
                tabBarStyle: { display: "none" }
            }
        }, {
            name: "DynamicDetail",
            comp: DynamicDetail_1["default"],
            options: {
                title: '收藏',
                tabBarItemStyle: { display: 'none' },
                header: function (_a) {
                    var navigation = _a.navigation, route = _a.route;
                    return react_1["default"].createElement(DynamicDetailHeader_1["default"], { navigation: navigation, route: route });
                },
                tabBarStyle: { display: "none" }
            }
        }, {
            name: "BuyingPage",
            comp: BuyingPage_1["default"],
            options: {
                title: '收藏',
                tabBarItemStyle: { display: 'none' },
                header: function (_a) {
                    var navigation = _a.navigation, route = _a.route;
                    return (react_1["default"].createElement(react_native_1.View, { style: {
                            paddingTop: (react_native_1.StatusBar.currentHeight || iOSHeight) + size_1.ROATE(11),
                            backgroundColor: "#F5F5F5", zIndex: -1
                        } }));
                },
                tabBarStyle: { display: "none" }
            }
        }, {
            name: "CommentsOfGood",
            comp: CommentsOfGood_1["default"],
            options: {
                title: '收藏',
                tabBarItemStyle: { display: 'none' },
                header: function (_a) {
                    var navigation = _a.navigation, route = _a.route;
                    return (react_1["default"].createElement(react_native_1.View, { style: {
                            paddingTop: (react_native_1.StatusBar.currentHeight || iOSHeight) + size_1.ROATE(11),
                            backgroundColor: "#fff", zIndex: -1, alignItems: "center", flexDirection: "row", paddingHorizontal: size_1.ROATE(20)
                        } },
                        react_1["default"].createElement(react_native_2.Icon, { onPress: function () {
                                navigation.navigate("ShopDetail", { name: "zhujie" });
                            }, style: { marginLeft: size_1.ROATE(17) }, color: '#000', name: 'backward' }),
                        react_1["default"].createElement(react_native_1.Text, { style: { color: "#000", fontWeight: "600", fontSize: size_1.ROATE(16) } }, "\u5B9D\u8D1D\u8BC4\u4EF7")));
                },
                tabBarStyle: { display: "none" }
            }
        }
    ];
    var screens = TabScreenList_1["default"](list);
    return (react_1["default"].createElement(native_1.NavigationContainer, null,
        react_1["default"].createElement(exports.Tab.Navigator, { backBehavior: 'history', screenOptions: { unmountOnBlur: true }, sceneContainerStyle: { backgroundColor: "transparent" }, screenListeners: {
                tabPress: function () {
                    // Vibration.vibrate([0,5,5], false);
                }
            }, initialRouteName: "Index" }, screens)));
}
exports["default"] = Router;
// 关于我的状态栏
function AboutHeader(_a) {
    var navigation = _a.navigation, iOSHeight = _a.iOSHeight;
    return (react_1["default"].createElement(react_native_1.View, { style: {
            backgroundColor: "#fff", paddingTop: react_native_1.StatusBar.currentHeight || iOSHeight,
            flexDirection: 'row'
        } },
        react_1["default"].createElement(react_native_1.Image, { style: { width: size_1.ROATE(26), height: size_1.ROATE(26), margin: size_1.ROATE(8), marginLeft: "auto" }, source: require("../assets/icons/card.png") }),
        react_1["default"].createElement(react_native_1.View, { onTouchEnd: function () {
                navigation.navigate('Setting');
            } },
            react_1["default"].createElement(react_native_1.Image, { style: { width: 26, height: 26, margin: 8 }, source: require("../assets/icons/setting.png") }))));
}
// 关于我的顶栏
function InfoHeader(_a) {
    var navigation = _a.navigation, iOSHeight = _a.iOSHeight;
    return (react_1["default"].createElement(react_native_1.View, { style: {
            backgroundColor: "#fff", paddingTop: react_native_1.StatusBar.currentHeight || iOSHeight + size_1.ROATE(10),
            flexDirection: 'row', justifyContent: 'space-between', padding: 8
        } },
        react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", width: "100%", alignItems: "center", paddingTop: size_1.ROATE(10) } },
            react_1["default"].createElement(react_native_2.Icon, { onPress: function () { return navigation.navigate("Me"); }, name: 'backward', style: { marginLeft: size_1.ROATE(12) }, color: '#202020', size: size_1.ROATE(22) }),
            react_1["default"].createElement(react_native_2.Icon, { style: { marginLeft: "auto", marginRight: size_1.ROATE(8) }, name: 'zhihu', color: '#202020' }),
            react_1["default"].createElement(react_native_2.Icon, { style: { marginRight: size_1.ROATE(12) }, name: 'account-book', color: '#202020' }))));
}
