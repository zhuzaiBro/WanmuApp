import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { StyleSheet, View, Image, Text, Pressable, FlatList, Animated, TextInput, PanResponder } from 'react-native';
import { ROATE, ScreenHeight } from '../../../assets/size';
import SelectBg from '../../../assets/pictures/blackhole/selectedBg.svg';
import Icon from '../../../iconfont';
import { useBackTo, useGoPage } from '../../../utils/RouterHelper';
export interface IState {
    navigation: any;
    route: any;
    fans: any[];
    follows: any[];
}
interface IProps {
    navigation: any;
    route: any;
    fans: any[];
    follows: any[];
    fech_follows: Function;
}
export interface IDispatch {
    fech_follows: Function
}

function Empty() {
    return (<View style={{ height: ScreenHeight - ROATE(300), alignItems: "center", width: ROATE(375) }}>
        <Icon style={{ marginTop: ROATE(85) }} size={ROATE(90)} name='queshengye' />
        <Text style={{ fontSize: ROATE(12), color: "#00000072" }}>暂时没有数据</Text>
    </View>)
}

export default function Ui({ navigation, route, fans, follows, fech_follows }: IProps) {

    const [current, setCurrent] = useState(0);
    const x = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        (async () => { fech_follows() })()
    }, []);
    useEffect(() => {
        Animated.timing(x, {
            toValue: -ROATE(375 * current),
            useNativeDriver: true,
            duration: 350
        }).start()
    }, [current]);
    function InfoCard({ item }) {

        function Relation() {
            const [isLike, setIsLike] = useState(false);
            return (<Pressable onPress={() => {
                setIsLike(prev => !prev);
            }} style={{ marginTop: "auto", marginBottom: "auto", borderRadius: ROATE(6), width: ROATE(64), justifyContent: "center", alignItems: "center", backgroundColor: isLike ? "#0000000A" : "#A6E284", height: ROATE(32) }}>
                <Text>{isLike ? "已关注" : "关注"}</Text>
            </Pressable>)
        }
        return (useMemo(() => <View style={{ width: ROATE(375), paddingHorizontal: ROATE(16), flexDirection: "row", marginBottom: ROATE(28) }}>
            <Image style={{ width: ROATE(48), height: ROATE(48), borderRadius: ROATE(24) }} source={{ uri: "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" }} />
            <View style={{ flexGrow: 1, marginLeft: ROATE(8) }}>
                <Text numberOfLines={1} style={{ marginTop: ROATE(3), lineHeight: ROATE(20), color: "#000000e5", fontSize: ROATE(14),  maxWidth: ROATE(186), fontWeight: "500" }}>{item.user_name}</Text>
                <Text numberOfLines={1} style={{ fontSize: ROATE(12), lineHeight: ROATE(20), maxWidth: ROATE(186), marginTop: ROATE(4), color: "#00000072" }}>{item.dec || "这个人很懒啥都没有留下"}</Text>
            </View>
            <Relation />
        </View>, [item]))
    }

    function FollowList({ follows }) {
        return (
            <View style={{ width: ROATE(375), height: ScreenHeight - ROATE(170) }}>
                <View style={{ flexDirection: "row", marginHorizontal: ROATE(16), marginBottom: ROATE(28), backgroundColor: "#00000005", height: ROATE(36), paddingHorizontal: ROATE(14.06), alignItems: "center", borderRadius: ROATE(4) }}>
                    <Icon size={ROATE(12)} style={{ marginRight: ROATE(6.06) }} name='sousuo' />
                    <TextInput placeholder='搜索已关注的人' placeholderTextColor="#00000073" />
                </View>
                <FlatList data={follows} style={{ width: ROATE(375) }} renderItem={({ item, index }) => {
                    return (<InfoCard item={item} key={index} />)
                }} />
            </View>

        )
    }
    
    function FanList({fans}) {
        return <FlatList data={fans} renderItem={({ item, index }) => {
            return (<InfoCard item={item} key={index} />)
        }} />
    }

    return (
        <View style={{ paddingTop: ROATE(54), }}>
            <View style={{ marginBottom: ROATE(10) }}>
                <Pressable onPress={() => {
                    navigation.goBack()
                }} style={{ position: "absolute", zIndex: 2, left: ROATE(16) }}>
                    <Icon size={ROATE(24)} name="fanhuianniu-zuo" />
                </Pressable>
                <Text style={{ textAlign: "center", fontSize: ROATE(16), color: "#000000e5", fontWeight: "500" }}>爱穿高跟鞋</Text>
            </View>
            <View style={styles.headerStyle}>
                <Pressable onPress={() => setCurrent(() => 0)}>
                    <Text style={{ color: current === 0 ? "#000000e5" : "#00000072", fontSize: ROATE(16), fontWeight: "400" }} >关注</Text>
                    <SelectBg style={{ position: "absolute", zIndex: -1, display: current === 0 ? "flex" : "none" }} />
                </Pressable>
                <Pressable onPress={() => setCurrent(() => 1)}>
                    <Text style={{ color: current === 1 ? "#000000e5" : "#00000072", fontSize: ROATE(16), fontWeight: "400" }} >粉丝</Text>
                    <SelectBg style={{ position: "absolute", zIndex: -1, display: current === 1 ? "flex" : "none" }} />
                </Pressable>

            </View>

            <Animated.View style={{ transform: [{ translateX: x }], width: ROATE(750), flexDirection: "row" }}>
                {follows.length !== 0 ? <FollowList follows={follows} />: <Empty />}
                

                {fans.length !==0 ? <FanList fans={fans}/> : <Empty />}
            </Animated.View>

        </View>
    )
}


const styles = StyleSheet.create({
    headerStyle: {
        height: ROATE(40),
        width: ROATE(375),
        // backgroundColor: "#f49",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: ROATE(1.2),
        borderColor: "#0000000A",
        marginBottom: ROATE(25),
    }
})