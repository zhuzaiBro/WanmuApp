import { ScrollView, useDisclose, } from 'native-base'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Image, View, Text, Dimensions, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import { Gctx } from '../../context';
import { ROATE } from '../../assets/size';
import usePos from '../../hooks/usePosition';
import BuyingActionSheet from './BuyingActionSheet';
import ConFiremCancle from './ConFirmCancle';
import InputPwd from './InputPwd';
import TicketAction from './TicketAction';
import Icon from '../../iconfont';
import SendAction from './sendAction';
import { Counter } from '../ShopDetail/ShoppingAction';
import { useGoPage, useBackTo } from '../../utils/RouterHelper';

function TabBar({ onOpen, allPrice = 10, }) {
    return (<View style={{
        height: ROATE(130), width: ROATE(375), backgroundColor: "#fff",
        paddingHorizontal: ROATE(16), borderTopWidth: ROATE(1.2), borderColor: "#D7D7D7", paddingTop: ROATE(24),
        flexDirection: "row", position: "absolute", bottom: 0, left: 0
    }}>
        <Text style={styles.f14w4}>已选{1}件</Text>
        <Text style={{ marginLeft: ROATE(77), ...styles.f14w4 }}>合计：</Text>
        <Text style={{ fontSize: ROATE(20), marginTop: ROATE(-5), color: "rgba(0,0,0,0.9)", fontWeight: "600" }}>￥{allPrice}</Text>
        <TouchableOpacity onPress={onOpen} style={{
            backgroundColor: "#A6E284", marginLeft: "auto", width: ROATE(97),
            marginTop: ROATE(-8), height: ROATE(36), borderRadius: ROATE(48), justifyContent: "center", alignItems: "center"
        }}>
            <Text style={{ fontSize: ROATE(16), fontWeight: "400", color: "rgba(0,0,0,0.9)" }}>
                提交订单
            </Text>
        </TouchableOpacity>
    </View>)
}


export default function BuyingPage({ navigation, route }) {


    const ctx = useContext(Gctx);
    const [visible, setVisible] = useState(false);
    const [ticketVisible, setTicketVisible] = useState(false);
    const [pwdVisible, setPwdVisible] = useState(false);
    const [sendVisible, setSendVisible] = useState(false);
    const [allPrice, setAllPrice] = useState(10);
    const [goodNum, setGoodNum] = useState(1);
    const { isOpen, onOpen, onClose } = useDisclose();
    const { addr, add_addr, edit_addr, delete_addr } = ctx;
    const useAddr = addr.filter((it: any) => it.isDefault)[0] as any;
    const goChangeAddr = useGoPage(navigation, route, null, "AddressManager");
    const goBack = useBackTo(navigation, route, void 0);
    const pyaSuccess = useGoPage(navigation, route, { allPrice: allPrice - 1 }, "PaySuccess")

    useEffect(() => {
        setAllPrice(() => 10 * goodNum)
    }, [goodNum])
    const pos = usePos();
 
    return (
        <View style={{ height: Dimensions.get("screen").height }}>
            {/* <StatusBar backgroundColor={transparent} /> */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Pressable style={{ marginLeft: ROATE(12) }} onPress={() => {
                    navigation.goBack()
                    }}>
                    <Icon name='fanhuianniu-zuo'
                        style={{}} size={ROATE(24)} color="rgba(0,0,0,0.9)" />
                </Pressable>
                <Text style={{ fontSize: ROATE(16), fontWeight: "500", width: ROATE(65), marginRight: ROATE(155), marginLeft: "auto", marginTop: ROATE(6), textAlign: "center", color: "rgba(0,0,0,0.9)" }}>确认下单</Text>
            </View>

            <ScrollView>
                {/* 记录地址 */}
                <View style={{ ...styles.wrapper, flexDirection: "row" }}>
                    <View style={{ width: ROATE(291) }}>
                        <Text numberOfLines={2} style={{ width: ROATE(260), fontSize: ROATE(16), color: "rgba(0,0,0,0.9)" }}>
                            {useAddr.location}
                        </Text>
                        <Text style={{ fontSize: ROATE(12), marginTop: ROATE(8), fontWeight: "400" }}>
                            {useAddr.name} {useAddr.phone}
                        </Text>
                    </View>
                    <Pressable onPress={goChangeAddr} style={{}}>
                        <Icon style={{ marginTop: "auto", marginBottom: "auto" }} color="rgba(0,0,0,0.9)" size={ROATE(18)} name='fanghuijiantou' />
                    </Pressable>

                </View>

                <View style={{ ...styles.wrapper, }}>
                    <View style={{ flexDirection: "row", marginBottom: ROATE(12), alignItems: "center" }}>
                        <Image resizeMode='stretch' style={{ width: ROATE(24), height: ROATE(9.6) }} source={{ uri: "https://p26-passport.byteacctimg.com/img/mosaic-legacy/3791/5070639578~120x256.image" }} />
                        <Text style={{ fontSize: ROATE(16), lineHeight: ROATE(16), marginLeft: ROATE(8), fontWeight: "500", color: "#000000e6" }}>青氪自营店</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <Image style={styles.gooodImg} source={{ uri: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/22.png" }} />
                        <View style={{ marginLeft: ROATE(8), marginRight: ROATE(16) }}>
                            <Text style={{ fontSize: ROATE(14), marginBottom: ROATE(4), color: "rgba(0,0,0,0.9)", fontWeight: "400" }}>纯牛奶原味</Text>
                            <Text style={{ fontSize: ROATE(12), color: "#00000073", fontWeight: "400" }}>原味24盒</Text>
                            <Text style={{ fontSize: ROATE(16), lineHeight: ROATE(16), marginTop: ROATE(6), color: "#000000e6" }}>￥10.00</Text>
                        </View>
                        <View style={{ marginTop: "auto", marginLeft: "auto" }}>
                            <Counter callback={setGoodNum} num={goodNum} />
                        </View>
                    </View>
                </View>


                <View style={styles.wrapper}>
                    <View style={styles.line}>
                        <Text style={styles.f14w4}>商品总价</Text>
                        <Text style={styles.f14w6}>￥{allPrice}</Text>
                    </View>
                    <View style={{ ...styles.line, justifyContent: "flex-start" }}>
                        <Text style={styles.f14w4}>优惠券</Text>
                        <Pressable onPress={() => {
                            setTicketVisible(() => {
                                setTimeout(() => {
                                    ctx.setStatusBarBg(() => "rgba(0,0,0,0.3)")
                                }, 300);
                                return true
                            })
                        }} style={{ marginLeft: "auto", flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ ...styles.f14w6, marginRight: ROATE(6), color: "#FF7E52" }}>-￥2.00</Text>
                            <Icon size={ROATE(18)} name='fanghuijiantou' />
                        </Pressable>

                    </View>
                    <View style={styles.line}>
                        <Text style={styles.f14w4}>完成订单返额</Text>
                        <Text style={styles.f14w6}>￥{2}.00</Text>
                    </View>
                    <Pressable onPress={() => {
                        setSendVisible(() => {
                            setTimeout(() => {
                                ctx.setStatusBarBg(() => "rgba(0,0,0,0.3)")

                            }, 300);
                            return true;
                        });
                    }}
                        style={{ ...styles.line, marginBottom: 0 }}>
                        <Text style={styles.f14w4}>配送选择</Text>
                        <Text style={styles.f14w6}>付费配送￥{1}.00</Text>
                    </Pressable>
                </View>
            </ScrollView>
            <TabBar allPrice={allPrice - 1} onOpen={() => {
                setTimeout(() => {
                    ctx.setStatusBarBg("rgba(0,0,0,0.3)")
                }, 300);
                onOpen();
            }} />
            <BuyingActionSheet price={allPrice - 1} setPwdVisible={setPwdVisible} isOpen={isOpen} setModalVisible={setVisible} navigation={navigation} onClose={() => {
                ctx.setStatusBarBg("transparent");
                onClose();
            }} />
            <ConFiremCancle callback={onClose} setVisible={setVisible} visible={visible} />
            <InputPwd paySuccess={pyaSuccess} closeActionSheet={onClose} navigation={navigation} isOpen={pwdVisible} onClose={setPwdVisible} />
            <TicketAction isOpen={ticketVisible} onClose={() => {
                setTicketVisible(() => {
                    setTimeout(() => {
                        ctx.setStatusBarBg(() => "transparent")
                    }, 0);
                    return false
                })
            }} />
            <SendAction isOpen={sendVisible} onClose={() => {
                setSendVisible(() => {
                    ctx.setStatusBarBg(() => "transparent")
                    return false;
                }
                )
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#fff",
        borderRadius: ROATE(12),
        width: ROATE(343),
        paddingVertical: ROATE(20),
        paddingHorizontal: ROATE(12),
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: ROATE(16),
    },
    gooodImg: {
        height: ROATE(70),
        width: ROATE(70),
        borderRadius: ROATE(8)
    },
    line: {
        flexDirection: "row",
        marginBottom: ROATE(12),
        justifyContent: "space-between",
        alignItems: "center",
    },
    f14w4: {
        fontSize: ROATE(14),
        fontWeight: "400",
        color: "rgba(0,0,0,0.45)",
        letterSpacing: 0
    },
    f14w6: {
        fontSize: ROATE(14),
        fontWeight: "600",
        color: "rgba(0,0,0,0.9)",
        letterSpacing: 0
    }
})