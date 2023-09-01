import React, { useContext } from 'react';
import { Gctx } from '../../context'
import { useGetIOSStatusBarHeight } from "../../hooks/useGetIOSStatusBarHeight";
import { TabObj } from "../TabScreen";
import { StatusBar, View } from "react-native";
import TabNavigator from "../TabScreenList";
import { ROATE } from "../../assets/size";
import LikeItem from "../../pages/Shop/LikeItem";
import EditAddr from "../../pages/Shop/EditAddr";
import AddressManager from "../../pages/Shop/AddressManager";
import Wthdrawal from "../../pages/Wthdrawal";
import MemberAssets from "../../pages/MemberAssets";
import ShopDetail from "../../pages/ShopDetail";
import MemberCenterHeader from "../../pages/MemberCenter/MemberCenterHeader";
import MemberCenter from "../../pages/MemberCenter";
import Chat from "../../pages/Chat";
import Shop from "../../pages/Shop";
import ShopDetailHdeader  from '../../pages/ShopDetail/ShopDetailHeader';
import BuyingPage from '../../pages/BuyingPage';
import Paysuccess from '../../pages/PaySuccess';
import ShopSearch from '../../pages/ShopSearch';
import CommentOfGood from '../../pages/ShopDetail/CommentsOfGood';
import AddAddr from '../../pages/Shop/AddAddr';
import ChangeAddr from '../../pages/BuyingPage/ChangeAddr';
import BuyingStatus from '../../pages/BuyingPage/BuyingStatus';
import ShopInfo from '../../pages/ShopDetail/ShopInfo';
import InnerShopSearch from '../../pages/ShopDetail/InnerShopSearch';
import InnerShopDetail from '../../pages/ShopDetail/InnerShopDetail';
import ShareGoodToFriends from '../../pages/ShopDetail/ShareGoodToFriend';
import ShopCar from '../../pages/ShopCar';

export default function Router() {
    const ctx = useContext(Gctx);
    const iOSHeight = useGetIOSStatusBarHeight();

     
    const shopPages: TabObj[] = [
        {
            comp: Shop,
            name: "Index",
            listeners: {
                focus: () => { ctx.setStatusBarColor(() => "dark-content") },
            },
            options: {
                title: '商城',
                animation: "none",
                header: () => <></>,
            }
        },{
            name: "CommentsOfGood",
            comp: CommentOfGood,
            options: {
                header: ({navigation, route}) => <ShopDetailHdeader navigation={navigation} iOSHeight={ROATE(44)}/>
            }
        }, {
            comp: Chat,
            name: "Chat",
            options: {
                title: '聊天',
                header: () => <></>,
            }
        },{
            comp: MemberCenter,
            name: "MemberCenter",
            listeners: {
                focus: () => { (ctx as any).setStatusBarColor(() => "light-content") },
                blur: () => { (ctx as any).setStatusBarColor(() => "dark-content") }
            },
            options: {
                title: '会员中心',
                header: ({ navigation, route }) => <MemberCenterHeader navigation={navigation}
                    route={route} />,
            }
        }, {
            comp: ShopDetail,
            name: "ShopDetail",
            options: {
                title: '商品详情',
                header: ({ navigation }) => <ShopDetailHdeader iOSHeight={iOSHeight} navigation={navigation} />,
            }
        }, {
            name: "MemberAssets",
            comp: MemberAssets,
            options: {
                headerTransparent: false,
                title: '会员资产',
                header: ({ navigation, route }) => {
                    return (<View style={{
                        paddingTop: ((StatusBar.currentHeight as number) || iOSHeight) + ROATE(11),
                        backgroundColor: "#D7D7D7"
                    }}></View>)
                },
            }
        }, {
            comp: Wthdrawal,
            name: "Wthdrawal",
            options: {
                title: '提现',
                header: ({ navigation, route }) => {
                    return (<View style={{
                        paddingTop: ((StatusBar.currentHeight as number) || iOSHeight) + ROATE(11),
                        backgroundColor: "#D7D7D7"
                    }}></View>)
                },
            }
        }, {
            comp: AddressManager,
            name: "AddressManager",
            options: {
                title: '地址管理',
                header: ({ navigation, route }) => {
                    return (<View style={{
                        paddingTop: ((StatusBar.currentHeight as number) || iOSHeight) + ROATE(11),
                        backgroundColor: "#fff", zIndex: -1
                    }}></View>)
                },
            }
        }, {
            comp: EditAddr,
            name: "EditAddress",
            options: {
                title: '编辑地址',
                header: ({ navigation, route }) => {
                    return (<View style={{
                        paddingTop: ((StatusBar.currentHeight as number) || iOSHeight) + ROATE(11),
                        backgroundColor: "#fff", zIndex: -1
                    }}></View>)
                },
            }
        },{
            name: "AddAddr",
            comp: AddAddr,
            options: {
                title: '添加地址',
                header: ({ navigation, route }) => {
                    return (<View style={{
                        paddingTop: ((StatusBar.currentHeight as number) || iOSHeight) + ROATE(11),
                        backgroundColor: "#fff", zIndex: -1
                    }}></View>)
                },
            }
        },{
            name: "BuyingPage",
            comp: BuyingPage,
            options: {
                header: ()=> <View style={{height: ROATE(44)}}></View>
            }
        },{
            name: "PaySuccess",
            comp: Paysuccess,
            options: {
                header: () => <></>
            }
        }, {
            comp: ShopSearch,
            name: "ShopSearch",
            options: {
                title: '搜索商品',
                header: ({ navigation, route }) => {
                    return (<View style={{
                        paddingTop: StatusBar.currentHeight || iOSHeight
                    }}></View>)
                },
            }
        }, {
            comp: LikeItem,
            name: "LikeItem",
            options: {
                title: '收藏',
                header: ({ navigation, route }) => {
                    return (<View style={{
                        paddingTop: ((StatusBar.currentHeight as number) || iOSHeight) + ROATE(11),
                        backgroundColor: "#D7D7D7", zIndex: -1
                    }}></View>)
                },
            }
        }, {
            comp: ChangeAddr,
            name: "ChangeAddr",
            options: {
                header: () => <></>,
                animation: "slide_from_bottom"
            },
        }, {
            comp: BuyingStatus,
            name: "BuyingStatus",
            options: {
                header: () => <></>
            }
        }, {
            comp: ShopInfo,
            name: "ShopInfo",
            options: {
                header: ({navigation, route}) =><></>
            }
        }, {
            comp: InnerShopSearch,
            name: "InnerShopSearch",
            options: {
                header: ()=> <></>
            }
        }, {
            comp: InnerShopDetail,
            name: "InnerShopDetail",
            options: {
                header: ()=> <></>
            }
        },{
            comp: ShareGoodToFriends,
            name: "ShareGoodToFriends",
            options: {
                header: ()=> <></>
            }
        }, {
            comp: ShopCar,
            name: "ShopCar",
            options: {
                header: () => <></>
            }
        }
    ]
    return (
        TabNavigator(shopPages as TabObj[])
    )
}
