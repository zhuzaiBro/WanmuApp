import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View, BackHandler, Image, Pressable, TouchableOpacity } from 'react-native';
import { useDisclose } from 'native-base';
import { ROATE } from '../../assets/size';
import ShopBanner from './ShopBanner';
import { Pager } from './ShopBanner';
import ShoppingAction from './ShoppingAction';
import {useGoPage, useBackTo} from '../../utils/RouterHelper';
import ShareActionSheet from './ShareActionSheet';
import ReportAction from './ReportAction';
import Header from './ShopDetailHeader';
import Icon from '../../iconfont';

export function TimeComp({ show = false, time = 1000 * 3600 }) {
    const date = new Date(time);
    const [showHour, setShowHour] = useState(date.getHours());
    const date2 = new Date(time - showHour * 3600 * 1000)
    const [minutes, setMinutes] = useState(date2.getMinutes())
   

    return (
        <View style={{
            display: show ? "flex" : "none",
            height: ROATE(53), width: ROATE(125), position: "absolute", backgroundColor: "rgba(255,255,255,0.45)", paddingHorizontal: ROATE(25),
            borderTopRightRadius: ROATE(22), bottom: 0, left: 0, zIndex: 1
        }}>
            <Text style={styles.defaultFont}>
                抢购倒计时
            </Text>
            <View style={{ flexDirection: "row", marginTop: ROATE(7) }}>
                <View style={{ ...styles.timeBlock, marginLeft: 0 }}>
                    <Text style={styles.defaultFont}>{showHour}</Text>
                </View>
                <Text style={styles.defaultFont}> : </Text>
                <View style={{ ...styles.timeBlock, marginRight: 0 }}>
                <Text style={styles.defaultFont}>{minutes}</Text>
                </View>
            </View>
        </View>
    )
}

function GoodHeader({ imgUrlList }) {
    const [current, setCurrent] = useState(1);
    const changeIndex = useCallback((index) => { setCurrent(index + 1) }, [])
    return (
        <View style={{ height: ROATE(280), width: ROATE(375) }}>
            {/* 用于记录时间的组件 */}
            <TimeComp time={1000 * 3600} show={false} />
            {/* 记录页码数 */}
            <Pager current={current} total={imgUrlList.length} />
            <ShopBanner onChange={changeIndex} imgUrlList={imgUrlList} />
        </View>
    )
}
function TabBar({ onOpen, navigation, route }) {
    const vistShop = useGoPage(navigation, route, {shop_name: "青氪自营店"}, "ShopInfo");
    const chatWithKfu = useGoPage(navigation, route, {from: { avatar : "https://img-blog.csdnimg.cn/20201014180756754.png?x-oss-process=image/resize,m_fixed,h_64,w_64", user_name: "吕粥粥"}}, "Chat")
    return (<View style={{
        height: ROATE(84), width: ROATE(375), bottom: 0, left: 0, backgroundColor: "#fff", borderTopWidth: 1, borderColor: "#EBEBEB",
        paddingHorizontal: ROATE(16), paddingVertical: ROATE(17), flexDirection: "row", position: "absolute", zIndex: 2
    }}>
        <Pressable onPress={vistShop} style={{ justifyContent: "center", marginRight: ROATE(28), alignItems: "center" }}>
            <Icon color='rgba(0,0,0,0.8)' name='dianpu' size={ROATE(20)}/>
            <Text style={{ fontSize: ROATE(10), fontWeight: "400", color: "#00000080" }}>店铺</Text>
        </Pressable>
        <Pressable onPress={chatWithKfu} style={{ justifyContent: "center", marginRight: ROATE(28), alignItems: "center" }}>
            <Icon color='rgba(0,0,0,0.8)' size={ROATE(20)} name='kefuliaotian' />
            <Text style={{ fontSize: ROATE(10), fontWeight: "400", color: "#00000080" }}>客服</Text>
        </Pressable>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Icon color='rgba(0,0,0,0.8)' size={ROATE(20)} name='shoucang-weidianji' />
            <Text style={{ fontSize: ROATE(10), fontWeight: "400", color: "#00000080" }}>收藏</Text>
        </View>
        <View style={{
            height: ROATE(41), flexDirection: "row", marginLeft: "auto", overflow: "hidden", borderRadius: ROATE(35),
            width: ROATE(131)
        }}>
            <TouchableOpacity style={{ width: ROATE(49), backgroundColor: "rgba(0,0,0,0.9)", justifyContent: "center", alignItems: "center" }}>
                <Icon name='gouwuche-mianxing' color="#A6E284" size={ROATE(26)} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onOpen}
                style={{ width: ROATE(83), backgroundColor: "#A6E284", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: ROATE(13), fontWeight: "700", fontStyle: 'italic' }}>立即购买</Text>
            </TouchableOpacity>
        </View>

    </View>)
}

function FootImgs({imgList}: {imgList: any[]}) {
    const imgs = imgList.map((it, index) => {
        return (
              <Image key={index} style={{ height: ROATE(218), marginBottom: ROATE(12), width: ROATE(323), borderRadius: ROATE(4) }} source={{ uri: it }} />
        )
    })
    return (
        <View style={{
            backgroundColor: "#fff", paddingVertical: ROATE(12), paddingBottom: 0,
            marginBottom: ROATE(30), paddingHorizontal: ROATE(10), marginLeft: "auto", marginRight: "auto", marginTop: ROATE(10),
            borderRadius: ROATE(8), width: ROATE(343), overflow: "hidden"
        }}>
            <Text style={{ fontSize: ROATE(14), color: "#000000E6", fontWeight: "600", marginBottom: ROATE(12) }}>商品展示</Text>
            {imgs}

        </View>
    )
}

export default function Detail({ route, navigation }) {

    const imgUrlList = ["https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/image_1753.png",
        "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/22.png",
        "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/11.png",];
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();
    const goComments = useGoPage(navigation, route, undefined, "CommentsOfGood");
    const [share, setShare] = useState(false);
    const [report, setReport] = useState(false);
    const closReport = useCallback(()=> {
        setReport(()=> false);
    }, []);
    const openReport = useCallback(()=> {
        setReport(()=> true);
    }, [])

    return (
        <View style={{ height: Dimensions.get("screen").height, paddingBottom: ROATE(81) }}>
            <Header route={route} iOSHeight={ROATE(44)} navigation={navigation} />
            <ScrollView bounces={false}>

                <GoodHeader imgUrlList={imgUrlList} />

                <View style={styles.contentWrap}>
                    <View style={{ flexDirection: "row", alignItems: "flex-end", paddingHorizontal: ROATE(10) }}>
                        <Text style={{ fontSize: ROATE(16), color: "#000000f2" }}>￥</Text>
                        <Text style={{ fontSize: ROATE(24), lineHeight: ROATE(29.04), fontWeight: "600", color: "#000000f2", marginRight: ROATE(12) }}>9.9</Text>
                        <Text style={{...styles.defaultFont, color: "#00000073"}}>原价 ￥ 23</Text>
                        <Text style={{ ...styles.defaultFont, marginLeft: "auto", color: "#00000073" }}>已售{12}件</Text>

                    </View>
                    <View style={{
                        width: ROATE(222), backgroundColor: "#f5f5f5", marginTop: ROATE(11),paddingHorizontal: ROATE(6), alignItems: "center", paddingVertical: ROATE(5),
                        borderRadius: ROATE(8), flexDirection: "row", height: ROATE(24)
                    }}>
                        <Icon size={ROATE(14)} name="huiyuanbiaoqian" />
                        <Text style={{ lineHeight: ROATE(10), fontSize: ROATE(10), color: "#00000073", marginLeft: ROATE(6) }}>开通会员可免费送货上门</Text>
                    </View>
                    <Text style={{ fontSize: ROATE(14), color: "#000000cc", letterSpacing: ROATE(-1), marginTop: ROATE(15), fontWeight: "600" }}>
                        纯牛奶200g*10盒高原牧场 精选好牛奶 引进纯正荷斯坦奶牛，食用天然嫩牧草，纯净高原，远离污染
                    </Text>
                    
                </View>
                <Pressable onPress={() => {}}
                style={{ ...styles.contentWrap, backgroundColor: "#4E514D", paddingVertical: ROATE(4),  paddingHorizontal: ROATE(4) }}>
                    <View style={{
                        flexDirection: "row",  paddingLeft: ROATE(12), marginBottom:ROATE(8),
                        alignItems: "center", paddingTop: ROATE(4), 
                    }}>
                        <Text style={{ color: "#ffffffe6", fontSize: ROATE(14), fontWeight: "500", marginLeft: ROATE(6) }}>会员专享</Text>
                        <Text style={{ color: "#ffffffe6",  marginRight: ROATE(8), fontSize: ROATE(14), fontWeight: "500", marginLeft: "auto" }}>开通会员 ￥9.99</Text>
                        <Icon style={{marginRight: ROATE(6)}} size={ROATE(16)} name="fanhuianniu(1)" />
                    </View>
                    <View style={{backgroundColor: "#fff", alignItems: "center", flexDirection: "row",height: ROATE(42), borderRadius: ROATE(8)}}>
                         <Icon style={{marginLeft: ROATE(63), }} size={ROATE(13)} name='xaindanfanxiang'/>
                         <Text style={{ ...styles.s14w6, color: "#000000b3", marginRight: ROATE(24), marginLeft: ROATE(4) }}>
                        下单立即返现
                    </Text>
                    <Icon size={ROATE(13)} name='songhuoshangmen'/>
                    <Text style={{ ...styles.s14w6,color: "#000000b3", marginLeft: ROATE(4) }}>
                        送货上门
                    </Text>
                    </View>
                   
                </Pressable>

                <Pressable onPress={goComments} style={{
                    height: ROATE(84), backgroundColor: "#fff", marginLeft: "auto", marginRight: "auto", marginTop: ROATE(10),
                    borderRadius: ROATE(8), width: ROATE(343), padding: ROATE(10), overflow: "hidden"
                }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: ROATE(14), fontWeight: "500", color: "#000000e6" }}>商品评价 {2}</Text>
                        <Icon style={{ marginLeft: "auto" }} name="fanhuianniu" />
                    </View>
                    <View style={{ flexDirection: "row", marginTop: ROATE(8), alignItems: "center" }}>
                        <Image style={{ height: ROATE(24), borderRadius: ROATE(11), marginRight: ROATE(8), width: ROATE(24) }}
                            source={{ uri: "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" }} />
                        
                        <Text style={{ ...styles.defaultFont, color: "#333333FF" }}>
                            热***某：
                        </Text>
                        <Text style={{ fontSize: ROATE(10) }}>价格实惠，包装完好无损，性价比很高！ss</Text>
                    </View>
                </Pressable>

                <View style={{
                    height: ROATE(201), backgroundColor: "#fff", padding: ROATE(10), marginLeft: "auto", marginRight: "auto", marginTop: ROATE(10),
                    borderRadius: ROATE(8), width: ROATE(343), overflow: "hidden"
                }}>
                    <Text style={{ fontSize: ROATE(14), color: "#000000e6", marginBottom: ROATE(14), fontWeight: "600" }}>商品参数</Text>
                    <View style={{ flexDirection: "row", marginBottom: ROATE(20) }}>
                        <Text style={styles.s14w4}>品牌</Text>
                        <Text style={styles.describeFont}>伊犁</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: ROATE(20) }}>
                        <Text style={styles.s14w4}>保质期</Text>
                        <Text style={styles.describeFont}>12个月</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: ROATE(20) }}>
                        <Text style={styles.s14w4}>净含量</Text>
                        <Text style={styles.describeFont}>3KG</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: ROATE(20) }}>
                        <Text style={styles.s14w4}>产地</Text>
                        <Text style={styles.describeFont}>新疆</Text>
                    </View>

                </View>

                
                <FootImgs imgList={imgUrlList}/>

            </ScrollView>
            {useMemo(() => (<TabBar navigation={navigation} route={route} onOpen={onOpen} />), [])}
            {useMemo(() => (<ShoppingAction navigation={navigation} isOpen={isOpen} onClose={onClose} />),[isOpen])}
            {useMemo(() => (<ShareActionSheet isOpen={share} setIsOpen={setShare}/>), [share])}
            {useMemo(() => (<ReportAction isOpen={report} onClose={closReport}/>), [report])}
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        padding: 22,
        paddingTop: 10,
        // paddingBottom: 200
    },
    defaultFont: {
        fontSize: ROATE(12),
        fontWeight: "400"
    },
    timeBlock: {
        backgroundColor: "#fff",
        width: ROATE(24),
        height: ROATE(24),
        borderRadius: ROATE(4),
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: ROATE(8)
    },
    contentWrap: {
        backgroundColor: "#fff",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: ROATE(8),
        paddingHorizontal: ROATE(10),
        paddingVertical: ROATE(12),
        width: ROATE(343),
        marginTop: ROATE(10),
        overflow: "hidden",
    },
    s14w6: {
        fontSize: ROATE(14),
        fontWeight: "600",
    },
    s14w4: {
        fontSize: ROATE(14),
        fontWeight: "400"
    },
    describeFont: {
        width: ROATE(125),
        marginLeft: "auto",
        marginRight: ROATE(81),
        color: "rgba(0,0,0,0.9)"
    }
})