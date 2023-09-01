import { Icon } from '@ant-design/react-native';
import React, { useCallback } from 'react'
import { View, Text, StyleSheet, Dimensions, StatusBar, Pressable, TouchableOpacity } from 'react-native'
import { ROATE } from '../../assets/size'

export default function Wthdrawal({ navigation }) {

    const goShopPage = useCallback(() => {
        navigation.navigate("Shop");
    }, []);

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.headerLine}>
                    <Icon onPress={goShopPage}
                        style={{
                            marginLeft: ROATE(8), position: "absolute", top: ROATE(-1),
                            left: ROATE(12)
                        }} name='arrow-left' color='#000' />
                    <Text style={{
                        fontSize: ROATE(16), marginLeft: "auto", marginRight: "auto",
                        color: "#000"
                    }}>会员资产</Text>
                </View>

                <View style={styles.cardInfo}>
                    <Text style={{ fontSize: ROATE(14), fontWeight: "400", marginRight: ROATE(17.5) }}>到账卡号</Text>
                    <View style={{ flexGrow: 1 }}>
                        <View style={{ flexDirection: "row", }}>
                            <Icon name='credit-card' color='#000' />
                            <Text style={{ fontSize: ROATE(16), fontWeight: "500", color: "#000", marginLeft: ROATE(6.5) }}>农业银行 （5641）</Text>
                        </View>
                        <Text style={{ fontSize: ROATE(10), fontWeight: "400" }}>
                            单日交易限额¥XXXXX
                        </Text>
                    </View>
                    <Icon name='arrow-right' color='#000' />
                </View>
            </View>
            <View style={styles.main}>
                <Text style={{ marginBottom: ROATE(20), fontSize: ROATE(14), fontWeight: "400" }}>提现金额</Text>
                <Text style={{ fontSize: ROATE(28), fontWeight: "500", color: "#000" }}>
                    ￥ 17
                </Text>
                <View style={{ width: ROATE(303), height: 1, backgroundColor: "#000", marginTop: ROATE(20) }} />
                <Text style={{ marginTop: ROATE(5), fontSize: ROATE(12), fontWeight: "400", color: "#000" }}>可用余额 ￥518</Text>

                <Pressable style={{height:ROATE(35), width:ROATE(102), borderWidth: 1, borderRadius: ROATE(12), marginTop: ROATE(58),
                marginLeft: "auto", marginRight: "auto", justifyContent: "center"}}>
                    <Text style={{textAlign: "center", fontSize: ROATE(16), fontWeight:"400", color: "#000"}}>
                        提现
                    </Text>
                </Pressable>
            </View>



        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("screen").height,
        backgroundColor: "#d7d7d7",
        zIndex: 1
    },
    header: {
        // height: ROATE(151),
        backgroundColor: "#d7d7d7"
    },
    headerLine: {
        height: ROATE(44),
        marginTop: ROATE(37 - (StatusBar.currentHeight as number))
    },
    cardInfo: {
        height: ROATE(94),
        flexDirection: "row",
        paddingLeft: ROATE(36),
        paddingRight: ROATE(34)
    },
    main: {
        height: Dimensions.get("screen").height,
        backgroundColor: "#fff",
        borderTopLeftRadius: ROATE(22),
        borderTopRightRadius: ROATE(22),
        padding: ROATE(36),
        paddingTop: ROATE(20)
    }
})