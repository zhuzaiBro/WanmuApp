import { Actionsheet, ScrollView, Switch, Text, useDisclose } from 'native-base';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { ROATE } from '../../../assets/size';
import Icon from '../../../iconfont';
import { Gctx } from '../../../context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, Route } from '@react-navigation/native';
const reg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
import { useBackTo } from '../../../utils/RouterHelper';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import AreaAction from '../components/AreaAction';


export default function AddAddr({ navigation, route }: { navigation: BottomTabNavigationProp<ParamListBase, string, undefined>, route: Route<string, object | undefined> }) {
    const ctx = useContext(Gctx);
    const { isOpen, onOpen, onClose } = useDisclose();
    const back = useBackTo(navigation, route, undefined);
    const [name, setName] = useState('')
    const [phone, setPhone] = useState("");
    const [detail, setDetail] = useState('');
    const [isDefault, setIsDefault] = useState(false);
    const [nameHasError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    // 详细地址是否有错误
    const [detailError, setDetailError] = useState(false);
    const [selectAddr, setSelectAddr] = useState(false);
    const [location, setLocation] = useState("");

    const goShopPage = useCallback(() => {
        navigation.goBack();
    }, []);

    return (
        <View  style={styles.container}>
            {/* 头部信息 */}
            <View style={styles.header}>
                <View style={{
                    ...styles.headerLine, flexDirection: 'row', alignItems: "center"
                }}>
                    <Pressable onPress={goShopPage} style={{marginLeft: ROATE(8), width:ROATE(40)}}>
                        <Icon
                            style={{
                                
                                paddingLeft: ROATE(8),
                               paddingRight: ROATE(13),
                            }} name='fanhuianniu-zuo' size={ROATE(24)}/>

                    </Pressable>

                    <Text style={{
                        fontSize: ROATE(16), fontWeight: "500",  
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
                    <TextInput blurOnSubmit placeholder='收件人姓名' onChangeText={t => {
                        setName(() => t)
                    }} style={styles.contentInput} defaultValue={name} />
                </View>
                <View style={styles.errorContent}>
                    <Text style={{ ...styles.errorWorld, display: nameHasError ? "flex" : "none" }}>收货人不可为空</Text>
                </View>

                <View style={styles.contentLine}>
                    <Text style={styles.contentInfo}>手机号码</Text>
                    <TextInput blurOnSubmit placeholder='收件人手机号码' onChangeText={t => {
                        setPhone(() => t)
                    }} style={styles.contentInput} defaultValue={phone} />
                </View>
                <View style={styles.errorContent}>
                    <Text style={{ ...styles.errorWorld, display: phoneError ? "flex" : "none" }}>请输入符合规则的手机号</Text>
                </View>
                <View style={styles.contentLine}>
                    <Text style={styles.contentInfo}>所在地区</Text>
                    <Pressable onPress={() => {
                        setTimeout(() => {
                            ctx.setStatusBarBg(() => "rgba(0,0,0,0.3)");
                        }, 350);
                        setSelectAddr(() => true);
                    }} style={{ ...styles.contentInput, flexDirection: "row" }}>
                        <Text numberOfLines={1} style={{ fontSize: ROATE(14), lineHeight: ROATE(14) }}>{location}</Text>
                        <Icon style={{ marginLeft: "auto", }} size={ROATE(16)} name='fanhuianniu' />
                    </Pressable>
                </View>
                <View style={styles.errorContent}>
                </View>
                <View style={{ ...styles.contentLine, height: "auto" }}>
                    <Text style={styles.contentInfo}>详细地址</Text>
                    <TextInput multiline blurOnSubmit onChangeText={t => {
                        setDetail(() => t)
                    }} placeholder='小区楼栋号、单元室' style={{
                        ...styles.contentInput,
                        padding: ROATE(9), height: ROATE(80),

                    }} >
                        <Text>{detail}</Text>
                    </TextInput>
                </View>
                <View style={styles.errorContent}>
                    <Text style={{ ...styles.errorWorld, display: detailError ? "flex" : "none" }}>详细地址不可为空</Text>
                </View>
                <View style={styles.contentLine}>
                    <Text style={styles.contentInfo}>设置为默认收货地址</Text>
                    <Switch size="md" defaultIsChecked={isDefault} onChange={() => {
                        setIsDefault(prev => !prev);
                    }} onTrackColor="#9FE284FF" />
                </View>

                <TouchableOpacity onPress={() => {
                    console.log(name, phone, detail)
                    if (!name) {
                        setNameError(() => true);
                        return;
                    } else {
                        setNameError(() => false);
                    }
                    if (!reg.test(phone)) {
                        setPhoneError(() => true);
                        return;
                    } else {
                        setPhoneError(() => false);
                    }
                    if (!detail) {
                        setDetailError(() => true);
                        return;
                    } else {
                        setDetailError(() => false);
                    }
                    ctx.add_addr({
                        isDefault,
                        location: detail,
                        name, phone
                    });
                    back();
                }}
                    style={styles.saveBtn}>
                    <Text style={{ color: "#000000e6", fontSize: ROATE(16), fontWeight: "400" }}>保存</Text>
                </TouchableOpacity>
                <AreaAction isOpen={selectAddr} callback={setLocation} onClose={() => {
                    setSelectAddr(() => false);
                }} />
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