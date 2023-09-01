import React, { Component, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, Image, Pressable, FlatList, Animated, PanResponder, Vibration } from 'react-native';
import { ROATE, ScreenHeight } from '../../assets/size';
import { useGoTo } from '../../utils/RouterHelper';
import Thumb from '../../assets/pictures/messages/thumb.svg';
import ShopSvg from '../../assets/pictures/messages/shop.svg';
import CommentsSvg from '../../assets/pictures/messages/comments.svg';
import { debounce } from '../../utils';


function InfoBox({ to = "", rcycle, index = 1, unRead = 0, title = "商城", icon = "shop", children = <></> }) {
    console.log(unRead, 999)
    return (<View style={{ alignItems: "center" }}>
        <View style={{ height: ROATE(48), width: ROATE(48), borderRadius: ROATE(16.5), justifyContent: "center", alignItems: "center", backgroundColor: "#1A1A1A" }}>

            {children}
            <View style={{ position: "absolute", display: unRead ? "flex" : "none", right: ROATE(3), top: ROATE(-4), padding: 0, width: ROATE(18), height: ROATE(18), backgroundColor: "#ff5858", marginBottom: ROATE(-4), zIndex: 2, marginRight: ROATE(-4), borderWidth: ROATE(1.2), borderColor: "#fff", justifyContent: "center", alignItems: "center", borderRadius: ROATE(9) }}
            ><Text style={{ fontSize: ROATE(8), color: "#fff", lineHeight: ROATE(16) }}>
                    {unRead}
                </Text>

            </View>
        </View>
        <Text style={{ fontSize: ROATE(14), fontWeight: "500", color: "rgba(0,0,0,0.9)", marginTop: ROATE(8) }}>{title}</Text>
    </View>
    )
}

function MessageComp({ item, navigation, route, readMessage }) {

    const go = useGoTo(navigation, route, item, "Chat");
    const [render, setRender] = useState({});
    const goPage = () => {
        readMessage();
        go();
        setRender(() => { });
    };
    const Avatar = useMemo(() => <Image style={{ width: ROATE(44), borderRadius: ROATE(22), marginRight: ROATE(8), height: ROATE(44) }} source={{ uri: item?.from?.avatar }} />, [])
    return (
        useMemo(() => (<Pressable onPress={goPage}
            style={{ height: ROATE(44), width: ROATE(343), overflow: "hidden", marginBottom: ROATE(20), paddingHorizontal: ROATE(16), flexDirection: "row", }}>
            {Avatar}

            <View style={{
                width: ROATE(10), borderRadius: ROATE(5), backgroundColor: "#ff5858", position: "absolute", display: item.isRead ? "none" : "flex",
                borderWidth: ROATE(1), borderColor: "#fff", left: ROATE(50), top: ROATE(2), padding: 0, height: ROATE(10)
            }}
            />
            <View>
                <View style={{ flexDirection: 'row', alignItems: "center", width: ROATE(289), justifyContent: "space-between" }}>
                    <Text style={{ color: "rgba(0,0,0,0.9)", fontSize: ROATE(14), fontWeight: "500" }}>{item?.from?.user_name}</Text>
                    <Text style={{
                        marginRight: ROATE(12), marginLeft: "auto", color: "#00000073", width: ROATE(70),
                        fontSize: ROATE(12)
                    }}>{item?.time}</Text>
                </View>

                <Text numberOfLines={1}
                    style={{ fontSize: ROATE(12), width: ROATE(290), fontWeight: "400", lineHeight: ROATE(12), marginTop: ROATE(4) }}>
                    {item?.content}</Text>
            </View>
        </Pressable>), [render])
    )
}


export interface IState {
    navigation: any;
    route: any;
    messages: any[];
    un_read: number;
}
export interface IDispatch {
    usdate_messages: Function;
    fetch_messages: (arr: any[], index: number) => {};
}

interface IProps {
    navigation: any;
    route: any;
    messages: any[];
    usdate_messages: Function;
    fetch_messages: Function;
    un_read: number;
}
export default function Ui({ navigation, route, messages, usdate_messages, fetch_messages, un_read }: IProps) {
    const [enabled, setEnabled] = useState("下拉刷新");
    let flag: boolean;
    let innerScrollTop = useRef(0).current;
    let y = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        (async () => {
            await fetch_messages();
        })();

    }, []);
    const MsgWrapper = ({ item, index }) => {
        const readMsg = useCallback(() => { usdate_messages(messages, index) }, [])

        return <MessageComp readMessage={readMsg} key={index} item={item} navigation={navigation} route={route} />
    }

    const vibrate = debounce(80, () => {
        Vibration.vibrate([0, 18]);
    })
    const pan =useRef(PanResponder.create({
        onMoveShouldSetPanResponder(e, gestureState) {
            if (innerScrollTop <= 0 && gestureState.dy > 50) {
                return true;
            }
            return false;
        },
        onPanResponderMove(event, gestureState) {
            if (innerScrollTop > 0) return;
            let dy = Math.max(0, gestureState.dy);
            if (dy >= 88) {
                flag = true;
                y.setValue(88);
                setEnabled(() => "松开刷新")
            } else if (dy === 0) {
                flag = false;
                Animated.timing(y, {
                    toValue: 0,
                    useNativeDriver: true
                }).start();
            } else {
                vibrate();
                y.setValue(dy)
            }

        },
    })).current;
    const [rcycle, setRcycle] = useState({});
    return (
        <View style={{ height: ScreenHeight - ROATE(88) }}>
            <View style={{ top: 0, position: "absolute", width: ROATE(375), height: ROATE(90), zIndex: 0, backgroundColor: "#d6f2db", justifyContent: "center", alignItems: "center" }}>
                <Text>{enabled}</Text>
            </View>
            <Animated.View  {...pan.panHandlers} style={{ backgroundColor: "#fff", transform: [{ translateY: y }], height: ScreenHeight - ROATE(88) }}>
                <View onTouchEnd={() => {
                    if (innerScrollTop <= 0) {
                        setEnabled(() => "正在刷新");
                        setTimeout(() => {
                            setEnabled(() => "刷新完成")
                            Animated.timing(y, {
                                toValue: 0,
                                duration: 800,
                                useNativeDriver: true,
                            }).start(({ finished }) => {
                                if (finished) {
                                    // setAble(() => true)
                                    setEnabled(() => "下拉刷新")
                                }
                            });
                        }, 1000);
                    }


                }} style={{
                    marginTop: ROATE(77), flexDirection: "row", justifyContent: "space-between",
                    marginBottom: ROATE(25), paddingHorizontal: ROATE(44),
                }}>
                    {useMemo(() => (<><InfoBox rcycle={rcycle} unRead={un_read} title='商城通知' >
                        <ShopSvg />
                    </InfoBox>
                        <InfoBox rcycle={rcycle} title='赞和收藏' >
                            <Thumb />
                        </InfoBox>
                        <InfoBox rcycle={rcycle} title='评论和@' >
                            <CommentsSvg />
                        </InfoBox></>), [un_read])}

                </View>
                <FlatList onTouchEnd={() => {
                    if (innerScrollTop <= 0) {
                        // if(!flag) {
                        //     y.setValue(0);
                        //     return;
                        // }
                        setEnabled(() => "正在刷新");
                        setTimeout(() => {
                            setEnabled(() => "刷新完成")
                            Animated.timing(y, {
                                toValue: 0,
                                duration: 800,
                                useNativeDriver: true,
                            }).start(({ finished }) => {
                                if (finished) {
                                    // setAble(() => true)
                                    setEnabled(() => "下拉刷新")
                                }
                            });
                        }, 1000);
                    }
                }}
                    onScrollToTop={() => {
                        innerScrollTop = 0;
                    }} scrollEventThrottle={200} showsVerticalScrollIndicator
                    bounces={false}
                    onScroll={({ nativeEvent }) => {
                        innerScrollTop = nativeEvent.contentOffset.y;
                    }} style={{ backgroundColor: "#fff", }} data={messages} renderItem={({ item, index }) => <MsgWrapper index={index} item={item} />} />
            </Animated.View>


        </View>



    )
}
