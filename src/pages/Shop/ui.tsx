import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Image, View, StyleSheet, VirtualizedList, Pressable, Dimensions, Animated, PanResponder, FlatList, Vibration, } from 'react-native'
import Banner from './ShopBanner';
import { Text, Actionsheet, useDisclose, Box } from 'native-base';
import { ROATE, ScreenHeight } from '../../assets/size';
import ShopItem from './shopItem';
import store from '../../store';
import SegmontControl from '../../components/SegmentControl';
import { useGoPage, useGoTo } from '../../utils/RouterHelper';
import Icon from '../../iconfont';
import { Gctx } from '../../context';
import { debounce } from '../../utils';
import { ParamListBase } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

function GoodContainer({ navigation, goodList }) {
    const showList = goodList.map((it, i) => {
        return (<ShopItem key={i} item={it} nav={navigation} show />)
    })
    console.log(showList)
    return (
        <View style={styles.content}>
            {showList}
        </View>
    )
}


export interface IState {
    navigation: BottomTabNavigationProp<ParamListBase, string, undefined>;
    route: any;
    goodList: any[];
    UserInfo: any
}
export interface IDispatch {
    getGoodList: Function
}


export default function Ui({ navigation, UserInfo, route, goodList, getGoodList }) {
    const { isOpen, onOpen, onClose } = useDisclose();
    const [refreshInfo, setRefreshInfo] = useState("下拉刷新");
    const goOther = useGoPage(navigation, route, undefined, "MemberCenter");
    const goShopCar = useGoPage(navigation, route, void 0, "ShopCar");
    let y = useRef(new Animated.Value(0)).current;
    const StatusColor = useContext(Gctx);
    useEffect(() => {
        getGoodList()
    }, []);
    let flag = false;
    const [innerScrollTop, setInnerScrollTop] = useState(0);
    function ActionItem({ to = "Shop", iconName = "wallet", title = "会员中心" }) {
        const goto = useGoPage(navigation, route, undefined, to)
        const goPage = useCallback(() => {
            StatusColor.setStatusBarBg(() => "transparent");
            onClose();
            goto();
        }, [goto]);

        return (
            <Box onTouchEnd={goPage} style={styles.actionItem}>
                <View style={{ width: ROATE(54), height: ROATE(54), alignItems: "center", justifyContent: "center", backgroundColor: "#F5F5F5", borderRadius: ROATE(27), marginBottom: ROATE(4) }}>
                    <Icon size={ROATE(24)} name={iconName as any} color='#000' style={{
                    }} />
                </View>
                <Text style={{ fontSize: ROATE(14), letterSpacing: ROATE(-1), fontWeight: "500", color: "#000000E6", textAlign: "center" }}>{title}</Text>
            </Box>
        )
    }

    const goSearch = useCallback(
        () => {
            navigation.navigate("ShopSearch");
        },
        [],
    );
    const vibrate = debounce(80, () => {
        Vibration.vibrate([0, 18]);
    })
    // const resetContainerPosition = usePanBack(y);
    const pan = useRef(PanResponder.create({
        onMoveShouldSetPanResponder(e, gestureState) {
            if (gestureState.dy > 0 && innerScrollTop <= 0) {
                flag = true;
                return true;
            }
            return false;
        },
        onPanResponderMove(event, gestureState) {
            if (innerScrollTop > 0) return;
            console.log(666)
            let dy = Math.max(0, gestureState.dy);
            if (dy >= 88) {
                flag = true;
                y.setValue(88);
                setRefreshInfo(() => "松开刷新")
            } else if (dy === 0) {
                flag = false;
                Animated.timing(y, {
                    toValue: 0,
                    useNativeDriver: true
                }).start();
            } else {
                vibrate()
                y.setValue(dy)
            }
        },
    })).current;


    return (
        <>
            <View style={{ position: "absolute", justifyContent: "center", alignItems: "center", height: ROATE(88), width: ROATE(375), backgroundColor: "#d8f3df", zIndex: 0 }}>
                <Text>{refreshInfo}</Text>
            </View>
            <Animated.View onTouchEnd={() => {
                if (innerScrollTop <= 0) {
                    if (!flag) return;
                    setRefreshInfo(() => "正在刷新");

                }
                setTimeout(() => {
                    setRefreshInfo(() => "刷新完成")
                    Animated.timing(y, {
                        toValue: 0,
                        duration: 300,
                        useNativeDriver: true,
                    }).start(({ finished }) => {
                        if (finished) {
                            setRefreshInfo(() => "下拉刷新")
                        }
                    });
                }, 1000);


            }}  style={{ height: ScreenHeight - ROATE(42), paddingBottom: ROATE(168), transform: [{ translateY: y }] }}>
                <View style={{ paddingTop: ROATE(44), backgroundColor: "#fff", }}>
                    <Image resizeMode='cover' source={require("../../assets/pictures/shop/bg.png")}
                        style={{ position: "absolute", height: ROATE(400), width: Dimensions.get("screen").width, left: 0, top: 0 }} />
                    {/* 会员中心那一行 */}
                    <View style={{
                        flexDirection: "row", justifyContent: "space-between", marginBottom: ROATE(7),
                        paddingHorizontal: ROATE(16), paddingTop: ROATE(9), paddingBottom: ROATE(7)
                    }}>
                        <Pressable onPress={goOther} style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontSize: ROATE(17), fontWeight: "600" }}>会员中心</Text>
                            <Image style={{ width: ROATE(16), height: ROATE(16) }}
                                source={require("../../assets/pictures/shop/to.png")} />
                        </Pressable>

                        <Pressable onPress={goShopCar} style={{ marginLeft: "auto", paddingHorizontal: ROATE(6) }}>
                            <Image style={{ ...styles.topIcons, }} source={require("../../assets/pictures/shop/shoppingcar.png")} />
                        </Pressable>
                        <Pressable style={{ paddingHorizontal: ROATE(6) }}>
                            <Image style={{ ...styles.topIcons, }} source={require("../../assets/pictures/shop/list.png")} />
                        </Pressable>
                        <Pressable onPress={() => {
                            StatusColor.setStatusBarBg(() => "rgba(0,0,0,0.3)")
                            onOpen();
                        }} style={{ paddingHorizontal: ROATE(6) }}>
                            <Image style={{ ...styles.topIcons, }} source={require("../../assets/pictures/shop/more.png")} />
                        </Pressable>

                    </View>
                    {/* 搜索框那一行 */}
                    <View style={{ flexDirection: "row", zIndex: 0, alignItems: "center", paddingHorizontal: ROATE(16) }}>
                        <Pressable onPress={goSearch} style={styles.searchInput}>
                            <Icon name='sousuo' style={{ marginLeft: ROATE(23) }} color='#333333' />
                            <Text style={{
                                fontSize: ROATE(12), height: ROATE(32), lineHeight: ROATE(32), color: "#ABABAB",
                                width: ROATE(204), marginLeft: ROATE(6),
                            }}>搜索商品</Text>
                        </Pressable>
                        <Pressable style={{ marginLeft: "auto", marginTop: ROATE(-3), paddingLeft: ROATE(12) }}>
                            <Image style={{ ...styles.topIcons, marginLeft: "auto" }}
                                source={require("../../assets/pictures/shop/all.png")} />
                            <Text style={{ fontSize: ROATE(12), lineHeight: ROATE(12) }}>分类</Text>
                        </Pressable>
                    </View>

                </View>
                <View>

                    <FlatList  {...pan.panHandlers} style={{ backgroundColor: "#f1f1f1",  paddingBottom: ROATE(50) }} data={[]}
                        onScroll={({ nativeEvent }) => {
                            if (nativeEvent) {
                                setInnerScrollTop(() => nativeEvent.contentOffset.y);
                            }
                        }} bounces={false} renderItem={() => <></>}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={useMemo(() => (
                            <>
                                <View style={{
                                    position: "relative", paddingTop: ROATE(22), backgroundColor: "#fff", overflow: "hidden",
                                    paddingBottom: ROATE(20), marginBottom: ROATE(16), borderBottomLeftRadius: ROATE(18), borderBottomRightRadius: ROATE(18)
                                }}>
                                    <Image resizeMode='cover' source={require("../../assets/pictures/shop/bg.png")}
                                        style={{
                                            position: "absolute", height: ROATE(400), width: Dimensions.get("screen").width,
                                            left: 0, top: -ROATE(134)
                                        }} />
                                    {/* 轮播图 */}
                                    <Banner />
                                    <View style={{
                                        flexDirection: "row", marginTop: ROATE(17), marginLeft: "auto",
                                        borderBottomLeftRadius: ROATE(22), borderBottomRightRadius: ROATE(22), marginRight: "auto", height: ROATE(57)
                                    }}>
                                        <Pressable style={{
                                            height: ROATE(68), borderRadius: ROATE(4), alignItems: "center", paddingHorizontal: ROATE(16),
                                            width: ROATE(168), backgroundColor: "#00000005", flexDirection: "row", marginRight: ROATE(7)
                                        }}>
                                            <Text numberOfLines={2} style={{
                                                fontSize: ROATE(16), textAlign: "center",
                                                width: ROATE(66), fontWeight: "600", color: "#000000e6"
                                            }}>
                                                会员好价专区
                                            </Text>
                                            <Image style={{ width: ROATE(48), borderRadius: ROATE(4), marginLeft: "auto", height: ROATE(48) }}
                                                source={{ uri: "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" }} />
                                        </Pressable>
                                        <Pressable style={{
                                            height: ROATE(68), borderRadius: ROATE(4), alignItems: "center", paddingHorizontal: ROATE(16),
                                            width: ROATE(168), backgroundColor: "#00000005", flexDirection: "row"
                                        }}>
                                            <View>
                                                <Text style={{ fontSize: ROATE(16), color: "#000000e6", fontWeight: "600" }}>
                                                    即刻到寝
                                                </Text>
                                                <Text style={{
                                                    fontSize: ROATE(12), lineHeight: ROATE(12),
                                                    color: "#566a17ff", marginTop: ROATE(4)
                                                }}>跳转到小程序</Text>
                                            </View>

                                            <Image style={{
                                                width: ROATE(48), borderRadius: ROATE(4),
                                                marginLeft: "auto", marginRight: ROATE(-2), height: ROATE(48)
                                            }} source={{ uri: "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" }} />
                                        </Pressable>
                                    </View>
                                </View>

                                <GoodContainer navigation={navigation} goodList={goodList} />

                            </>

                        ), [goodList])} />
                </View>

            </Animated.View>



            <Actionsheet hideDragIndicator isOpen={isOpen} onClose={() => {
                StatusColor.setStatusBarBg(() => "transparent");
                onClose();
            }}>
                <Actionsheet.Content height={ROATE(304)}>
                    <Pressable onPress={() => {
                        StatusColor.setStatusBarBg(() => "transparent");
                        onClose();
                    }} style={{ width: ROATE(375), paddingHorizontal: ROATE(16), paddingVertical: ROATE(6) }}>
                        <Icon name='guangbi' size={ROATE(24)} />
                    </Pressable>
                    <Box style={{
                        width: ROATE(375),
                        paddingTop: 0,
                        padding: ROATE(31),
                        paddingBottom: ROATE(120),
                        flexDirection: "row",
                        justifyContent: "flex-start", flexWrap: "wrap"
                    }}>

                        <ActionItem iconName='huiyuanzhongxing' title='我的账户' to='MemberAssets' />
                        <ActionItem iconName='dizhiguangli' title='地址管理' to='AddressManager' />
                        <ActionItem to='LikeItem' iconName='kaidian' title='我要开店' />
                        <ActionItem to='ShopDetail' iconName='youhuiquan' title='优惠券' />
                        <ActionItem to='ShopDetail' iconName='fankuizhongxin' title='反馈中心' />
                    </Box>


                </Actionsheet.Content>

            </Actionsheet>
        </>

    )
}


const styles = StyleSheet.create({
    content: {
        padding: ROATE(12),
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        marginTop: ROATE(15),
    },
    topIcons: {
        height: ROATE(24),
        width: ROATE(24),
    },
    searchInput: {
        height: ROATE(32),
        width: ROATE(300),
        borderWidth: ROATE(1.6),
        borderRadius: ROATE(2),

        flexDirection: "row",
        alignItems: "center",
        marginBottom: ROATE(3),
        backgroundColor: "#fff"
    },

    clickIcon: {
        width: ROATE(36),
        height: ROATE(36),
        backgroundColor: "#FFFFFF",
        padding: ROATE(8),

    },
    TagItem: {
        height: ROATE(28),
        width: ROATE(80),
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: ROATE(33),
        marginHorizontal: ROATE(10),
    },
    actionItem: {
        width: ROATE(76),
        alignItems: "center",
        padding: 0,
        height: ROATE(94),
    }
})