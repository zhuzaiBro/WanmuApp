import { Actionsheet, Modal, ScrollView, Switch, Text, useDisclose } from 'native-base';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { ROATE } from '../../../assets/size';
import Icon from '../../../iconfont';
import { Gctx } from '../../../context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, Route } from '@react-navigation/native';
const reg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;

function ProvinceItem({ province, isFirst = false, }) {
    return (
        <Pressable style={{
            height: ROATE(38), alignItems: "center",
            flexDirection: "row", paddingLeft: ROATE(24), paddingRight: ROATE(24)
        }}>
            <View style={{ width: 1, height: "100%", backgroundColor: "#8c8c8c", }}>
                <View style={{ width: ROATE(5), height: ROATE(5), borderRadius: ROATE(2), backgroundColor: "#000", position: "absolute", bottom: 0, left: ROATE(-1) }} />
                <View style={{
                    width: ROATE(5), height: ROATE(5), borderRadius: ROATE(2), backgroundColor: "#000", position: "absolute", top: 0,
                    display: isFirst ? "flex" : "none", left: ROATE(-1)
                }} />
            </View>
            <Text style={{ marginLeft: ROATE(22) }}>{province}</Text>
            <Icon name='fanghuijiantou' style={{ marginLeft: "auto" }} />
        </Pressable>
    )
}

export default function EditAddr({ navigation, route }: { navigation: NativeStackNavigationProp<ParamListBase, string, undefined>, route: Route<string, object | undefined> }) {
    const stutusBg = useContext(Gctx);

    const datas = { ...route.params } as any;
    console.log(datas);
    const { isOpen, onOpen, onClose } = useDisclose();

    let name = datas.name;
    let phone = datas.phone;
    let detail = datas.location;
    const [nameHasError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    // 详细地址是否有错误
    const [detailError, setDetailError] = useState(false);

    const goShopPage = useCallback(() => {
        navigation.navigate("AddressManager");
    }, []);

    return (
        <View style={styles.container}>
            {/* 头部信息 */}
            <View style={styles.header}>
                <View style={{
                    ...styles.headerLine, flexDirection: 'row', alignItems: "center"
                }}>
                    <Icon onPress={goShopPage}
                        style={{
                            paddingLeft: ROATE(8),
                            left: ROATE(12), paddingRight: ROATE(13), 
                        }} name='fanhuianniu-zuo' size={ROATE(24)} color='#000' />
                    <Text style={{
                        fontSize: ROATE(16), fontWeight: "500", marginLeft: ROATE(13),
                        color: "#000000e6"
                    }}>编辑收货地址</Text>
                    <Text
                        style={{
                            position: "absolute", right: ROATE(16), zIndex: 10,
                            fontSize: ROATE(14), fontWeight: "400", color: "#000000e6"
                        }}>删除</Text>
                </View>
            </View>

            {/* 内容区域 */}
            <View style={styles.content}>
                <View style={styles.contentLine}>
                    <Text style={styles.contentInfo}>收货人</Text>
                    <TextInput onChangeText={t => name = t} style={styles.contentInput} defaultValue={datas.name} />
                </View>
                <View style={styles.errorContent}>
                    <Text style={{ ...styles.errorWorld, display: nameHasError ? "flex" : "none" }}>收货人不可为空</Text>
                </View>

                <View style={styles.contentLine}>
                    <Text style={styles.contentInfo}>手机号码</Text>
                    <TextInput onChangeText={t => phone = t} style={styles.contentInput} defaultValue={datas.phone} />
                </View>
                <View style={styles.errorContent}>
                    <Text style={{ ...styles.errorWorld, display: phoneError ? "flex" : "none" }}>请输入符合规则的手机号</Text>
                </View>
                <View style={styles.contentLine}>
                    <Text style={styles.contentInfo}>所在地区</Text>
                    <Pressable onPress={() => {
                        setTimeout(() => {
                            stutusBg.setStatusBarBg(() => "rgba(0,0,0,0.3)");
                        }, 350);
                        onOpen();
                    }} style={{ ...styles.contentInput, flexDirection: "row" }}>
                        <Text numberOfLines={1} style={{ fontSize: ROATE(14), lineHeight: ROATE(14) }}>{datas.location}</Text>
                        <Icon style={{ marginLeft: "auto", }} size={ROATE(16)} name='fanhuianniu' />
                    </Pressable>
                </View>
                <View style={styles.errorContent}>
                </View>
                <View style={{ ...styles.contentLine, height: "auto" }}>
                    <Text style={styles.contentInfo}>详细地址</Text>
                    <TextInput multiline onChangeText={t => detail = t} placeholder='小区楼栋号、单元室' style={{
                        ...styles.contentInput,
                        padding: ROATE(9), height: ROATE(80),

                    }} >
                        <Text  >{datas.location} </Text>
                    </TextInput>
                </View>
                <View style={styles.errorContent}>
                    <Text style={{ ...styles.errorWorld, display: detailError ? "flex" : "none" }}>详细地址不可为空</Text>
                </View>
                <View style={styles.contentLine}>
                    <Text style={styles.contentInfo}>设置为默认收货地址</Text>
                    <Switch size="md" defaultIsChecked={datas.isDefault} onChange={() => {
                        datas.isDefault = !datas.isDefault
                    }} onTrackColor="#9FE284FF" />
                </View>

                <TouchableOpacity onPress={() => {
                    // route.params.setAddressList((prev:any[])=> 
                    // prev[route.params.index]
                    // )
                    // 发送ajax请求更该数据
                    if (!name) {
                        setNameError(() => true);
                    } else {
                        setNameError(() => false);
                    }
                    if (!reg.test(phone)) {
                        setPhoneError(() => true);
                    } else {
                        setPhoneError(() => false);
                    }
                    if (!detail) {
                        setDetailError(() => true);
                    } else {
                        setDetailError(() => false);
                    }
                    // datas.setAddressList(prev => {
                    //     // console.log(datas.index);

                    //     prev[datas.index] = datas;
                    //     // console.log(prev[datas.index]);
                    //     return prev;
                    // })
                }}
                    style={styles.saveBtn}>
                    <Text style={{ color: "#000000e6", fontSize: ROATE(16), fontWeight: "400" }}>保存</Text>
                </TouchableOpacity>
                <Actionsheet onClose={() => {
                    onClose();
                    stutusBg.setStatusBarBg(() => "transparent")
                }} isOpen={isOpen}>
                    <Actionsheet.Content>
                        <View style={{
                            flexDirection: "row", width: ROATE(375),
                            justifyContent: "center", alignItems: "center"
                        }}>
                            <Icon style={{ position: "absolute", left: ROATE(16) }}
                                name="QQ" color='#000' />
                            <Text style={{ textAlign: 'center' }}>请选择所在地区</Text>
                        </View>
                        <ScrollView style={{ width: ROATE(375), }}>
                            <ProvinceItem isFirst province={"浙江"} />
                            <ProvinceItem province={"南京"} />
                        </ScrollView>
                        <Text style={{ width: ROATE(375), margin: ROATE(10), fontSize: ROATE(16), marginLeft: ROATE(40) }}>选择城市</Text>

                        <ScrollView style={{ width: ROATE(375) }}>
                            <ProvinceItem isFirst province={"杭州"} />
                            <ProvinceItem province={"嘉兴"} />
                            <ProvinceItem province={"宁波"} />


                        </ScrollView>
                    </Actionsheet.Content>

                </Actionsheet>
            </View>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("screen").height,
        backgroundColor: "#fff",
    },
    header: {
        // height: ROATE(151),
        backgroundColor: "#d7d7d7"
    },
    headerLine: {
        backgroundColor: "#fff",
        height: ROATE(38),
        zIndex: 1
    },
    addressList: {

    },
    errorContent: {
        height: ROATE(24)
    },
    errorWorld: {
        color: "#FF5858FF",
        fontSize: ROATE(12),
        marginLeft: ROATE(109),
    },
    btnWrap: {
        width: ROATE(120),
        height: ROATE(29),
        borderRadius: ROATE(45),
        justifyContent: "center",
        alignItems: "center",
    },
    btnFont: {
        fontSize: ROATE(14),

    },
    content: {
        padding: ROATE(16),
    },
    contentInfo: {
        fontSize: ROATE(16)
    },
    contentLine: {
        height: ROATE(44),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    contentInput: {
        backgroundColor: "#0000000A",
        width: ROATE(262),
        fontSize: ROATE(14),
        height: ROATE(44),
        padding: ROATE(12),
        borderRadius: ROATE(8),
        textAlign: "left",
        textAlignVertical: "top"
    },
    saveBtn: {
        width: ROATE(275),
        height: ROATE(44),
        backgroundColor: "#9FE284FF",
        borderRadius: ROATE(12),
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center",
        justifyContent: "center",
        marginTop: ROATE(29)
    }
})