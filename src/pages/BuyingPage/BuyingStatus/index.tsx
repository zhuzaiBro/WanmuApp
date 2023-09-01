import { ScrollView, useDisclose, } from 'native-base'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Image, View, Text, Dimensions, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import { Gctx } from '../../../context';
import { ROATE } from '../../../assets/size';
import Icon from '../../../iconfont';
import { useGoPage } from '../../../utils/RouterHelper';
import CancelActionSheet from './CancelActionSheet';


function TabBar({ onOpen, allPrice = 10, setCancelActionVisible}) {
    return (<View style={{
        height: ROATE(90), width: ROATE(375), backgroundColor: "#fff",
        paddingHorizontal: ROATE(16), borderTopWidth: ROATE(1.2), borderColor: "#D7D7D7", paddingTop: ROATE(24),
        flexDirection: "row", position: "absolute", bottom: 0, left: 0
    }}>
        <TouchableOpacity onPress={onOpen} style={{
              marginLeft: "auto", width: ROATE(97), borderWidth: ROATE(1.2),
            marginTop: ROATE(-8), height: ROATE(36), borderRadius: ROATE(48), justifyContent: "center", alignItems: "center"
        }}>
            <Text style={{ fontSize: ROATE(16), fontWeight: "400", color: "rgba(0,0,0,0.9)" }}>
                修改地址
            </Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => {
            setCancelActionVisible(() => true);
        }}  style={{
              marginLeft: "auto", width: ROATE(97),borderWidth: ROATE(1.2),
            marginTop: ROATE(-8), height: ROATE(36), borderRadius: ROATE(48), justifyContent: "center", alignItems: "center"
        }}>
            <Text style={{ fontSize: ROATE(16), fontWeight: "400", color: "rgba(0,0,0,0.9)" }}>
                取消订单
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            backgroundColor: "#A6E284", marginLeft: "auto", width: ROATE(97),
            marginTop: ROATE(-8), height: ROATE(36), borderRadius: ROATE(48), justifyContent: "center", alignItems: "center"
        }}>
            <Text style={{ fontSize: ROATE(16), fontWeight: "400", color: "rgba(0,0,0,0.9)" }}>
                查看物流
            </Text>
        </TouchableOpacity>
    </View>)
}


export default function BuyingStatus({ navigation, route }) {


    const ctx = useContext(Gctx);
    const [sendVisible, setSendVisible] = useState(false);
    const [cancelActionVisible, setCancelActionVisible] = useState(false);
    const [allPrice, setAllPrice] = useState(10);
    const [goodNum, setGoodNum] = useState(1);
    const { isOpen, onOpen, onClose } = useDisclose();
    const { addr, add_addr, edit_addr, delete_addr } = ctx;
    const useAddr = addr.filter((it: any) => it.isDefault)[0] as any;
    const goChangeAddr = useGoPage(navigation, route, null, "ChangeAddr");
    const goChat = useGoPage(navigation, route, {to: "adasdas"}, "Chat");
    const date = new Date();
    useEffect(() => {
        setAllPrice(() => 10 * goodNum)
    }, [goodNum]);

    return (
        <View style={{ height: Dimensions.get("screen").height, paddingTop: ROATE(54) }}>
            {/* <StatusBar backgroundColor={transparent} /> */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Pressable style={{ marginLeft: ROATE(12) }} onPress={() => {
                    navigation.navigate("ShopDetail");
                }}>
                    <Icon name='fanhuianniu-zuo'
                        style={{}} size={ROATE(24)} color="rgba(0,0,0,0.9)" />
                </Pressable>
                <Text style={{ fontSize: ROATE(16), fontWeight: "500", width: ROATE(95), marginRight: ROATE(140), marginLeft: "auto", marginTop: ROATE(6), textAlign: "center", color: "rgba(0,0,0,0.9)" }}>等待商家发货</Text>

            </View>


            <ScrollView>
                {/* 记录地址 */}
                <View style={{ ...styles.wrapper, flexDirection: "row" }}>
                    <View style={{ width: ROATE(260) }}>
                        <Text numberOfLines={2} style={{ width: ROATE(260), fontSize: ROATE(16), color: "rgba(0,0,0,0.9)" }}>
                            {useAddr.location}
                        </Text>
                        <Text style={{ fontSize: ROATE(12), marginTop: ROATE(8), fontWeight: "400" }}>
                            {useAddr.name} {useAddr.phone}
                        </Text>
                    </View>
                    <Pressable onPress={goChangeAddr} style={{ width: ROATE(48), height: ROATE(24), borderRadius: ROATE(19), marginTop: "auto", marginBottom: "auto", justifyContent: "center", alignItems: 'center', borderWidth: ROATE(1.2) }}>
                        <Text>修改</Text>
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
                    </View>
                </View>


                <View style={styles.wrapper}>
                    <View style={styles.line}>
                        <Text style={styles.f14w4}>商品总价</Text>
                        <Text style={styles.f14w6}>￥{allPrice}</Text>
                    </View>
                    <View style={{ ...styles.line, justifyContent: "flex-start" }}>
                        <Text style={styles.f14w4}>优惠券</Text>
                        <Pressable style={{ marginLeft: "auto", flexDirection: "row", alignItems: "center" }}>
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

                <View style={styles.wrapper}>
                    <View style={styles.line}>
                        <Text style={styles.f14w4}>订单编号</Text>
                        <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ ...styles.f14w4, marginRight: ROATE(9) }}>1381293712893718371</Text>
                            <Icon name='fuzhi' size={ROATE(16)} />
                        </Pressable>

                    </View>
                    <View style={{ ...styles.line, }}>
                        <Text style={styles.f14w4}>创建时间</Text>

                        <Text style={{ ...styles.f14w4, }}>{
                            `${date.getFullYear()}-${date.getUTCMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</Text>

                    </View>
                    <Pressable onPress={goChat} style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Icon size={ROATE(16)} name='kefuliaotian' />
                        <Text style={{ marginLeft: ROATE(4) }}>联系客服</Text>
                    </Pressable>

                </View>
            </ScrollView>
            <TabBar setCancelActionVisible={setCancelActionVisible} allPrice={allPrice - 1} onOpen={() => {
                setTimeout(() => {
                    ctx.setStatusBarBg("rgba(0,0,0,0.3)")
                }, 300);
                onOpen();
            }} />
            <CancelActionSheet isOpen={cancelActionVisible} onClose={() => {
                setCancelActionVisible(() => false);
            }}/>
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