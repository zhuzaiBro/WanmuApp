import { FlatList } from 'native-base';
import React from 'react'
import { Pressable, StyleSheet, View, Image, Text } from 'react-native'
import { ROATE, ScreenHeight } from '../../assets/size';
import Icon from '../../iconfont';
import { useBackTo, useGoPage } from '../../utils/RouterHelper';
import { Counter } from '../ShopDetail/ShoppingAction';

export default function Ui({ navigation, route, shopList }) {
    const RenderItem = ({ item, index }) => {
        const goods = item.goods.map((it, index) => {
            const goGoodDetail = useGoPage(navigation, route, void 0, "ShopDetail");

            return <Pressable onPress={goGoodDetail} style={{ flexDirection: "row", paddingTop: ROATE(12), }}>
                <Pressable style={{ marginTop: "auto", marginBottom: ROATE(44) }}>
                    <Icon size={ROATE(24)} name='weixuanzhong' />
                </Pressable>
                <View style={{ flexDirection: 'row', }}>
                    <Image style={{ height: ROATE(80), marginHorizontal: ROATE(8), width: ROATE(80), borderRadius: ROATE(8) }} source={{ uri: item.shop?.avatar || "" }} />
                    <View>
                        <Text numberOfLines={1} style={{ width: ROATE(224), fontSize: ROATE(14), color: "000000e6", fontWeight: "500" }}>纯牛奶200g*10盒瓶装</Text>
                        <View style={{ flexDirection: "row", marginTop: ROATE(4), alignItems: "center" }}>
                            <Pressable style={{ flexDirection: "row", backgroundColor: "#00000005", paddingHorizontal: ROATE(8), paddingVertical: ROATE(2), borderRadius: ROATE(4) }}>
                                <Text style={{ fontSize: ROATE(12), color: "#00000072", marginRight: ROATE(4) }}>原味；24盒</Text>
                                <Icon size={ROATE(12)} name='jiangtou-xia' />
                            </Pressable>
                        </View>

                        <View>
                            <Text style={{ fontSize: ROATE(16), color: "#000000e5", width: ROATE(130), marginTop: ROATE(12) }}>¥15</Text>
                            <Counter callback={(() => { })} num={1} />
                        </View>
                    </View>
                </View>

            </Pressable>
        })
        return (
            <View style={{ paddingHorizontal: ROATE(24), paddingBottom: ROATE(16), backgroundColor: "#fff" }}>
                <View style={{ flexDirection: "row", marginTop: ROATE(12), }}>
                    <Pressable>
                        <Icon size={ROATE(24)} name='weixuanzhong' />
                    </Pressable>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={{ height: ROATE(24), borderRadius: ROATE(12), marginHorizontal: ROATE(8), width: ROATE(24) }} source={{ uri: "http://www.zhuzaibrother.cn/static/upload/2022-4-30-15-43-32-650-c3a8b.jpg" }} />
                        <Text style={{ fontSize: ROATE(16), fontWeight: "500", color: "#000000e6" }}>{item.shop.name}</Text>
                    </View>

                </View>
                {goods}
            </View>
        )
    }
    const goBack = useBackTo(navigation, route, void 0);
    const goPay = useGoPage(navigation, route, void 0, "BuyingPage");
    return (
        <View style={styles.container}>
            {/* 头部信息 */}
            <View style={styles.header}>
                <Pressable style={{ position: "absolute", left: ROATE(12), bottom: ROATE(10) }} onPress={goBack}>
                    <Icon name='fanhuianniu-zuo' size={ROATE(24)} />
                </Pressable>
                <Text style={{ fontSize: ROATE(16), fontWeight: "500", color: "#000000e5", textAlign: "center" }}>购物车</Text>
                <Pressable style={{ position: "absolute", bottom: ROATE(13), right: ROATE(12) }}>
                    <Text style={{ fontSize: ROATE(14), color: "#000000e5" }}>管理</Text>
                </Pressable>
            </View>

            <FlatList data={shopList} renderItem={({ index, item }) => <RenderItem index={index} item={item} />} />

            <View style={{ height: ROATE(100), paddingHorizontal: ROATE(16), width: ROATE(375), position: "absolute", left: 0, bottom: 0, backgroundColor: "#fff", flexDirection: "row", borderTopWidth: ROATE(1.2), borderColor: "#ececec" }}>
                <Pressable style={{ flexDirection: "row", marginTop: ROATE(18) }}>
                    <Icon name='weixuanzhong' size={ROATE(24)} />
                    <Text style={{ fontSize: ROATE(16), fontWeight: "500" }}>全选</Text>
                </Pressable>
                <View style={{ flexDirection: "row", marginTop: ROATE(21), marginLeft: ROATE(43) }}>
                    <Text>0件商品 | 合计:</Text>
                    <Text style={{ fontSize: ROATE(18), marginTop: ROATE(-2), marginLeft: ROATE(6), fontWeight: "500" }}>0元</Text>
                </View>
                <Pressable onPress={goPay} style={{ width: ROATE(90), height: ROATE(36), backgroundColor: "#A6E284", borderRadius: ROATE(36), justifyContent: "center", alignItems: "center", marginLeft: "auto", marginTop: ROATE(12) }}>
                    <Text style={{ fontSize: ROATE(16), fontWeight: "500", color: "#000000e6" }}>结算</Text>
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f5f5f5",
        height: ScreenHeight
    },
    header: {
        height: ROATE(88),
        paddingTop: ROATE(44),
        backgroundColor: "#f5f5f5",
        justifyContent: "center"
    }
})