import { View } from 'native-base'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { FlatList, StyleSheet, Text, Image, Pressable, Animated, PanResponder } from 'react-native'
import { ROATE, ScreenHeight } from '../../../assets/size'
import ShopDetailHeader from '../ShopDetailHeader';
import Icon from '../../../iconfont';
import ShopItem from '../../Shop/shopItem';
import {useGoPage} from '../../../utils/RouterHelper';
import ShareAction from './shareActionSheet';
import InnerShopAction from './InnerShopAction';

const SelectTag = ({ listInfo, navigation, route}: { listInfo: any[], navigation: any, route:any }) => {
    const [current, setCurrent] = useState(0);
    const goSearch = useGoPage(navigation ,route, void 0, "InnerShopSearch")
    const Item = ({ item, index }) => {
        const { txt } = item;
        const flag = index === current;
        const changeSelect = () => {
            setCurrent(() => index);
        }
        return (<Pressable onPress={changeSelect} style={{ height: ROATE(24), width: ROATE(56), borderWidth: ROATE(1.2), marginRight: ROATE(14), backgroundColor: flag ? "#000000e5" : "#fff", justifyContent: "center", alignItems: "center", borderRadius: ROATE(61) }}>
            <Text style={{ fontSize: ROATE(14), fontWeight: '500', color: flag ? "#fff" : "#000000e5" }}>{txt}</Text>
        </Pressable>)
    }
    const list = listInfo.map((it, i) => (<Item key={i} index={i} item={it} />));

    return <View style={{ flexDirection: "row", alignItems: "center", paddingBottom: ROATE(14) }}>
        {list}
        <Pressable style={{ marginLeft: "auto", marginRight: ROATE(21.08) }}>
            <Icon size={ROATE(15)} name='dianpu-feilei' />
        </Pressable>
        <Pressable onPress={goSearch}>
            <Icon size={ROATE(15)} name='sousuo' />
        </Pressable>

    </View>
}

export default function Ui({ goodList, navigation, route, fetchDatas }) {
    
    const goInnerShop= useGoPage(navigation, route, void 0, "InnerShopDetail")
    let y = useRef(new Animated.Value(0)).current;
    const [shareAction, setShareAction] = useState(false);
    const [innerShop, setInnerShop] = useState(false);
    const GoMoreFriend = useGoPage(navigation, route, void 0, "ShareGoodToFriends")
    useEffect(() => {
        fetchDatas();
    }, [])
    const RenderI = ({ index, item }) => useMemo(() => <ShopItem item={item} defineStyle={{ width: ROATE(166), marginLeft: 0, marginRight: index % 2 ? 0 : ROATE(10) }} nav={navigation} show />, []);



    const pan = useRef(PanResponder.create({
        onMoveShouldSetPanResponder() {
            return true
        },
        onPanResponderMove(e, gestureState) {
            const { dy } = gestureState;
            if (dy < 0) {
                Animated.timing(y, {
                    toValue: ROATE(-186),
                    useNativeDriver: true,
                    duration: 350
                }).start();
            } else {
                Animated.timing(y, {
                    toValue: 0,
                    useNativeDriver: true,
                    duration: 200
                }).start();
                // setShow(() => true)
            }
        },
    })).current;
    const AnimatedInfo = () => {
        return (useMemo(() => <View  style={{position: "absolute", left: ROATE(16), top: ROATE(100)}}>
            <View style={{ flexDirection: "row", }}>
                <Image style={{ height: ROATE(80), width: ROATE(80), borderRadius: ROATE(40), }} source={{ uri: "http://www.zhuzaibrother.cn/static/upload/2022-4-30-15-43-32-650-c3a8b.jpg" }} />
                <View style={{ marginLeft: ROATE(35), paddingTop: ROATE(20) }}>
                    <Text style={{ fontSize: ROATE(18), color: "#000000e6", fontWeight: "500" }}>青氪自营店</Text>
                    <Text style={{ width: ROATE(228), fontSize: ROATE(12), color: "#00000073", marginTop: ROATE(12) }} numberOfLines={2}>青氪自营业务覆盖了学生起居生活、学生学习用品，细致坚果、肉脯、果干、膨化食品啊dasd</Text>
                </View>

            </View>
            <View style={{ flexDirection: "row", width: ROATE(375), marginLeft: ROATE(-16), paddingHorizontal: ROATE(16), marginTop: ROATE(22), paddingBottom: ROATE(12), borderColor: "#0000000A", borderBottomWidth: ROATE(1.2) }}>
                <Pressable style={{ flexDirection: "row", backgroundColor: "#0000000a", height: ROATE(32), width: ROATE(163), alignItems: "center", justifyContent: "center", marginRight: "auto" }}>
                    <Text style={{ fontSize: ROATE(12), color: "#000000e6" }}>关联账号：青氪官方平台</Text>
                    <Icon size={ROATE(14)} name="fanhuianniu" />
                </Pressable>
                <Pressable style={{ flexDirection: "row", borderRadius: ROATE(6), width: ROATE(64), height: ROATE(32), alignItems: "center", justifyContent: "center", backgroundColor: "#000000e6" }}>
                    <Icon size={ROATE(13.33)} name="liaotian" />
                    <Text style={{ color: "#fff", marginLeft: ROATE(5.33) }}>聊天</Text>
                </Pressable>
                <Pressable style={{ marginLeft: ROATE(12), flexDirection: "row", borderRadius: ROATE(6), width: ROATE(64), height: ROATE(32), alignItems: "center", justifyContent: "center", backgroundColor: "#00000014" }}>
                    <Text style={{ color: "#000000e6" }}>已关注</Text>
                </Pressable>
            </View>
        </View>, []))
    }


    return (
        <View style={styles.container}>
            <ShopDetailHeader zhuanfaCallback={() => {setShareAction(() => true)}} iOSHeight={ROATE(44)} moreCallback={() => {
                setInnerShop(() => true)
            }} navigation={navigation} />
            <AnimatedInfo />
            <Animated.View style={{ backgroundColor: "#f2f2f2",  marginTop: ROATE(186), transform: [{translateY: y}]}}>
                <SelectTag navigation={navigation} route={route} listInfo={[{ txt: "综合" }, { txt: "新品" }, { txt: "销量" }]} />
            <FlatList style={{height: ROATE(700), backgroundColor: "#f2f2f2"}} {...pan.panHandlers} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", width: ROATE(343), flexWrap: "wrap" }} data={goodList} renderItem={({ item, index }) => <RenderI index={index} item={item} />} />
            </Animated.View>
            <ShareAction GoMoreFriend={GoMoreFriend} isOpen={shareAction} onClose={() => {
                setShareAction(() => false);
            }}/>
            <InnerShopAction goInnerShop={goInnerShop} isOpen={innerShop} onClose={() => {
                setInnerShop(() => false);
            }}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: ROATE(16),
        paddingTop: ROATE(88),
    }
})