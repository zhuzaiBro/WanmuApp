import { Button } from 'native-base';
import React, { useCallback } from 'react';
import { Dimensions, StyleSheet, View, Text, Pressable } from 'react-native';
import { ROATE } from '../../assets/size';
import { BoxShadow } from 'react-native-shadow';
import Icon from '../../iconfont';

export default function MemberAssets({ navigation }) {


    const shadowOpt = {
        width: ROATE(343), //包裹的子内容多宽这里必须多宽
        height: ROATE(185),//同上
        color: "#000",//阴影颜色
        border: 4,//阴影宽度
        radius: ROATE(16),//包裹的子元素圆角多少这里必须是多少
        opacity: 0.15,//透明度
        x: 0,
        y: 0,
        style: {
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: ROATE(-94),
        }
    }

    const goShopPage = useCallback(() => {
        navigation.navigate("Index");
    }, []);

    const gowWthdrawal = useCallback(()=> {
        navigation.navigate("Wthdrawal")
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={goShopPage} style={{marginLeft: ROATE(8), position: "absolute", top: ROATE(-1),
                        left: ROATE(12),}}>
                    <Icon
                    style={{
                        
                    }} name='fanhuianniu-zuo' size={ROATE(24)}/>
                </Pressable>
                
                <Text style={{
                    fontSize: ROATE(16), marginLeft: "auto", marginRight: "auto",
                    color: "#000"
                }}>会员资产</Text>
            </View>

            <BoxShadow setting={shadowOpt}>
                <View style={styles.content}>
                    <View style={styles.contentTop}>
                        <View style={{
                            width: ROATE(12), height: ROATE(12), marginTop: ROATE(3.4), marginRight: ROATE(3),
                            borderRadius: ROATE(6), backgroundColor: "#fff",
                        }}></View>
                        <Text style={styles.contentTopFont}>注：开通会员每月将得到600元消费资产，同时获得提现功能</Text>
                    </View>
                    <Text style={styles.contentTitle}>可用余额</Text>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.contentArea}>
                            <View style={styles.contentBox}>
                                <Text style={styles.contentBoxTitle}>2500</Text>
                                <Text style={styles.contentText}> 元</Text>
                            </View>
                            <Text style={{ marginTop: ROATE(6), fontSize: ROATE(12) }}>剩余余额</Text>
                            <Button style={styles.contentBtn}>
                                <Text style={{ color: "#3D3D3D", fontSize: ROATE(14), position: "absolute", left: ROATE(-13), top: ROATE(-9) }}>充值</Text>
                            </Button>
                        </View>

                        <View style={{
                            position: "absolute", left: ROATE(171), height: ROATE(93),
                            bottom: ROATE(25), width: 1, backgroundColor: "rgba(0,0,0,0.18)"
                        }}></View>

                        <View style={styles.contentArea}>
                            <View style={styles.contentBox}>
                                <Text style={styles.contentBoxTitle}>500</Text>
                                <Text style={styles.contentText}> 元</Text>
                            </View>
                            <Text style={{ marginTop: ROATE(6), fontSize: ROATE(12) }}>可提现余额</Text>
                            <Button onPress={gowWthdrawal}
                             style={{ ...styles.contentBtn, backgroundColor: "#000", overflow: "visible" }}>
                                <Text style={{ color: "#fff", fontSize: ROATE(14), position: "absolute", left: ROATE(-13), top: ROATE(-9) }}>提现</Text>
                            </Button>
                        </View>
                    </View>

                </View>
            </BoxShadow>

            <View style={styles.detailLine}>
                <Text style={{ fontSize: ROATE(16), color: "#000" }}>
                    交易变动明细
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: ROATE(12), marginBottom: ROATE(4), flexDirection: "row" }}>全部
                    </Text>
                    <Icon style={{ marginTop: "auto", marginBottom: "auto", marginLeft: ROATE(4) }} size={ROATE(16)} name='fanhuianniu-zuo' />

                </View>

            </View>
            {/* 资产流动记录 */}
            <View style={styles.mainView}>
                <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                    <View>
                        <Text style={{fontSize:ROATE(14), fontWeight: "400", color: "#000"}}>余额变现</Text>
                        <Text style={{fontSize: ROATE(10), fontWeight: "400", color:"#000"}}>2022-06-01 23:45</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:ROATE(14), fontWeight: "400", color: "#000"}}>
                            -230
                        </Text>
                        <Text style={{fontSize: ROATE(10), fontWeight: "400", color:"#000"}}>
                            余额 2500
                        </Text>
                    </View>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("screen").height,
        backgroundColor: "#fff"
    },
    header: {
        height: ROATE(151),
        backgroundColor: "#D7D7D7"
    },
    content: {
        height: ROATE(185),
        width: ROATE(343),
        backgroundColor: "#fff",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: ROATE(16),
        overflow: "hidden",
        shadowOffset: { width: 1, height: 2 },
        shadowColor: "#f30",
    },
    contentTop: {
        height: ROATE(24),
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        flexDirection: "row",
        justifyContent: "center",
        textAlignVertical: "center",
        alignItems: "center"
    },
    contentTopFont: {
        fontWeight: "400",
        fontSize: ROATE(10),
        color: "#fff"
    },
    contentTitle: {
        marginTop: ROATE(5),
        textAlign: "center",
        fontSize: ROATE(16),
        color: "#000",
        marginBottom: ROATE(15)
    },
    contentBox: {
        flexDirection: "row",
        alignItems: "center"
    },
    contentBoxTitle: {
        fontSize: ROATE(24),
        color: "#000",
        fontWeight: "700"
    },
    contentText: {
        fontSize: ROATE(14),
        color: "#000",
        fontWeight: "700"
    },
    contentArea: {
        flexGrow: 1,
        alignItems: "center"
    },
    contentBtn: {
        marginTop: ROATE(14),
        height: ROATE(35),
        borderRadius: ROATE(12),
        borderWidth: 1,
        backgroundColor: "transparent",
        width: ROATE(102),
    },
    detailLine: {
        marginTop: ROATE(32),
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: ROATE(16),
        paddingRight: ROATE(16),
        justifyContent: "space-between",
        height: ROATE(32),
        lineHeight: ROATE(32)
    },
    mainView: {
        padding: ROATE(16),

    }
})