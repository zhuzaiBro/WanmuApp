import { Icon } from '@ant-design/react-native';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient'
import { View, Text, ScrollView, StyleSheet, Image, Dimensions, Pressable } from 'react-native'
import { ROATE } from '../../assets/size';
import { useGoTo } from '../../utils/RouterHelper';


function MemberBadge({ item }) {
    return (
        <View style={{ alignItems: "center", paddingTop: ROATE(11), paddingHorizontal: ROATE(18) }}>

            <View style={{
                width: ROATE(65), height: ROATE(65), borderRadius: ROATE(32.5)
                , backgroundColor: "#494947", alignItems: "center", justifyContent: "center"
            }}>
                <Icon size={ROATE(32)} color='#ffdc98' name={item.icon || 'shop'} />
            </View>
            <Text style={{
                marginTop: ROATE(6), color: "#fff", fontSize: ROATE(15),
                fontWeight: "500", lineHeight: ROATE(19.6)
            }}>{item.title}</Text>
            <Text style={styles.font12w4}>{item.describe}</Text>
        </View>
    )
}

function MemberBadgeList({ list }) {
    return list.map((it, index) => {
        return <MemberBadge item={it} key={index} />
    });
}

function MoneyBox() {
    return (
        <View style={{alignItems: "center"}}>
        <Text style={{fontSize: ROATE(29), fontWeight: "600", lineHeight: ROATE(40.6)
    , color: "#fff"}}>1479.00</Text>
        <Text style={{fontSize: ROATE(16), fontWeight: "400", lineHeight: ROATE(22.4), 
    color: "rgba(255,255,255,0.7)", marginTop: ROATE(7), marginBottom: ROATE(15)}}>余额</Text>
    </View>
    )
}

export default function MemberCenter() {
    let goto: Function, badgeList: any;
    const [badgeDataList, setList] = useState([]) as any[];

    useEffect(() => {
        setList(() => [
            {
                title: "上门配送",
                describe: "2次/月",
                icon: ""
            }, {
                title: "资源解锁",
                describe: "2次/月",
                icon: ""
            }, {
                title: "青稞畅游",
                describe: "",
                icon: ""
            }
        ]);

    }, []);




    return (
        <ScrollView style={styles.container}>

            <View style={{
                height: ROATE(90), width: ROATE(343), marginLeft: "auto", marginRight: "auto", marginTop: ROATE(12)
                , overflow: "hidden", borderRadius: ROATE(12), paddingLeft: ROATE(27), paddingTop: ROATE(20),
                marginBottom: ROATE(22.31), flexDirection: "row"
            }}>
                <LinearGradient style={{
                    height: ROATE(90), width: ROATE(343), position: "absolute", left: 0, top: 0
                }} colors={["rgba(255,255,255,0.23)", "rgba(255,255,255,0.44)"]} />
                <Image style={{ height: ROATE(48), width: ROATE(48), marginRight: ROATE(10), borderRadius: ROATE(24) }} source={{ uri: "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" }} />
                <View style={{ marginTop: ROATE(3), }}>

                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: ROATE(16), fontWeight: "600", marginRight: ROATE(7.89), color: "rgba(255,255,255,0.9)" }}>朱杰</Text>
                        <Pressable style={{
                            backgroundColor: "#ffdc98", height: ROATE(19), width: ROATE(56)
                            , borderRadius: ROATE(12), justifyContent: "center", alignItems: "center"
                        }}>
                            <Text style={{ fontSize: ROATE(10), lineHeight: ROATE(14), color: "rgba(0,0,0,0.9)" }}>会员Lv1</Text>
                        </Pressable>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: ROATE(7.5) }}>
                        <Text style={{ ...styles.font12w4, marginRight: ROATE(8.16) }}>浙江理工大学</Text>
                        <Text style={styles.font12w4}>学生认证</Text>
                    </View>
                </View>
            </View>

            <View style={styles.contentLine}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{
                        fontSize: ROATE(16), fontWeight: "600", lineHeight: ROATE(22.4),
                        color: "rgba(255,255,255,0.9)"
                    }}>
                        LV1/小青客
                    </Text>
                    <Icon style={{ marginLeft: "auto" }} name='arrow-right' />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: ROATE(4) }}>
                    <Text style={{ ...styles.font12w4, color: "rgba(255,255,255,0.45)" }}>当前特权</Text>
                    <Text style={{
                        ...styles.font12w4, marginLeft: "auto",
                        color: "rgba(255,255,255,0.45)"
                    }}>2022-09-03到期</Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <MemberBadgeList list={badgeDataList} />

                </View>
                <View style={{ marginTop: ROATE(11) }}>
                    <View style={{
                        height: ROATE(4), marginBottom: ROATE(2.45)
                        , backgroundColor: "rgba(255,255,255, 0.45)", borderRadius: ROATE(43)
                    }}>
                        <LinearGradient style={{
                            width: ROATE(120), position: "absolute",
                            left: 0, top: 0, borderRadius: ROATE(43), height: ROATE(4),
                        }} angle={-90} colors={["#9BF8CD", "#e9fa86"]} />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ ...styles.font12w4, lineHeight: ROATE(16.8) }}>Lv.1</Text>
                        <Text style={{ ...styles.font12w4, lineHeight: ROATE(16.8) }}>Lv.2</Text>
                    </View>
                </View>


            </View>
            <View style={styles.contentLine}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: ROATE(16), lineHeight: ROATE(22.4), fontWeight: "600", color: "rgba(255,255,255,0.9)" }}>会员资产</Text>
                    <Icon name='arrow-right' />
                </View>
                    <View style={{marginTop: ROATE(26), justifyContent: "space-between", paddingHorizontal :ROATE(12), flexDirection: "row"}}>
                    <MoneyBox /><MoneyBox />
                    </View>
            </View>

            <View style={styles.contentLine}>
                    <View style={{height: ROATE(102), backgroundColor: "#fff", 
                    justifyContent: "center", alignItems: "center", borderRadius: ROATE(8), width : ROATE(102)}}>
                        <Text numberOfLines={2} style={{fontSize: ROATE(42)}}>敬请期待</Text>
                    </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("screen").height,
        backgroundColor: "#222222",

    },
    header: {
        marginTop: ROATE(44),
        height: ROATE(44),
        paddingVertical: ROATE(10),
        paddingHorizontal: ROATE(12),
        flexDirection: "row"
    },
    font12w4: {
        fontSize: ROATE(12),
        fontWeight: "400",
        color: "rgba(255,255,255, 0.7)"
    },
    contentLine: {
        width: ROATE(343),
        borderRadius: ROATE(12),
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: ROATE(16),
        backgroundColor: "#353535",
        paddingHorizontal: ROATE(23),
        paddingVertical: ROATE(17),
    }
})