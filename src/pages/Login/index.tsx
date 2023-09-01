import React, { useContext, useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Animated, Image } from 'react-native';
import Form from '../../components/Form';
import * as Wechat from 'react-native-wechat-lib';
import store from '../../store';
import * as Actions from '../../store/user/actionFuncs';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ParamListBase } from '@react-navigation/routers';
import { userLogin } from '../../server/user';
import { ROATE } from '../../assets/size';
import { useToast } from 'native-base';
import LoginLogo from '../../assets/pictures/login/logo.svg';
import Agree from '../../assets/pictures/login/agree.svg';
import DisAgree from '../../assets/pictures/login/disagree.svg';
import { Gctx } from '../../context';
import Circle from '../../assets/pictures/login/circle.svg';
import LoginHeader from './LoginHeader';
import { RouteProp } from '@react-navigation/native';
import { userStatus } from '../../utils';

const appid = "wxd632bd1a7463921d";
const secretID = "714456dabfb313c08d019bab2bef24e0";
Wechat.registerApp(appid, "www.baidu.com");

const reg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/; // 关于手机号的正则表达式
const WAIT = 60; //等待60秒


export default function Login({ navigation, route }: { navigation: BottomTabNavigationProp<ParamListBase, string, undefined>, route: RouteProp<ParamListBase, string>}) {
    navigation as BottomTabNavigationProp<ParamListBase, string, any>
    const [time, setTime] = useState(0);
    const [disabled, setDisabled] = useState(true);
    const [agree, setAgree] = useState(false);
    let timer: any = void 0;
    const toast = useToast();

    const ctx = useContext(Gctx);
    useEffect(() => {
       

        return () => {
            clearInterval(timer);

        }
    }
        , [])



    async function login(body: any) {
        // 如果正在计时，没有输入验证码，或者没有填写手机号直接返回
        if (!body.phone) {
            toast.show({
                description: "请输入手机号",
                duration: 2000,
                style: { marginBottom: ROATE(300) }
            });
            return;
        }
        if (!body.clientCode) {
            toast.show({ description: "请输入验证码", duration: 2000, style: { marginBottom: ROATE(300) } })
            return;
        }
        if (!agree) {
            toast.show({
                description: "请同意用户协议",
                duration: 2000,
                style: { marginBottom: ROATE(300) }
            });
            return;
        }

        const data = { ...body, phone: "86" + body.phone }
        const res = await userLogin(data);
        if (res?.data) {
            clearInterval(timer);
            store.dispatch(Actions.getLoginType(res.data));
            navigation.navigate("Index");
        }
    }
    async function getClientCode(body: any) {
        let timer;
        if (time > 0) {
            return;
        }
        if (!reg.test(body.phone)) {
            toast.show({
                duration: 2000,
                description: "请输入正确的手机号!",
                style: { marginBottom: ROATE(300) }
            });
            return;
        }
        setTime(() => WAIT);
        // clearInterval(timer);
        for (let i = 0; i < WAIT; i++) {
            setTimeout(() => {
                setTime(prev => prev - 1);
            }, i * 1000);
        }
        // 向服务端发送请求
        await userLogin({ phone: "86" + body.phone });
    }

    return (
        <View >
            <LoginHeader iOSHeight={ROATE(44)} navigation={navigation} route={route}/>
            <View style={{ height: 200, backgroundColor: "#008c8c", position: "absolute", top: 20 }}></View>
            <Form containerStyle={{ height: Dimensions.get("screen").height, width: "100%", position: "relative" }}>

                
                <Image style={{width: Dimensions.get("screen").width, position: "absolute", left: 0, top: 0, zIndex: 0, height: Dimensions.get("screen").height}}
                 source={require("../../assets/pictures/login/loginbackgroundBg.png")}/>
                <View style={{ width: ROATE(327), height: ROATE(556), borderRadius: ROATE(14), backgroundColor: "#fff", marginTop: ROATE(132), marginRight: "auto", marginLeft: "auto" }}>
                    <View style={{
                        height: ROATE(86), backgroundColor: "#fff", marginLeft: "auto", marginRight: "auto", marginTop: ROATE(-40),
                        justifyContent: "center", alignItems: "center", width: ROATE(86), borderRadius: ROATE(43), marginBottom: ROATE(40)
                    }}>
                        <Circle style={{ position: "absolute", zIndex: 11 }} />
                        <LoginLogo style={{ position: "absolute", zIndex: 1 }} />
                    </View>

                    <View style={styles.inpWrap}>
                        <Text style={{ paddingRight: ROATE(16), borderRightWidth: 1, marginRight: ROATE(16) }}>+86</Text>
                        <Form.Input placeholder='请输入账号/手机号' style={{ fontSize: ROATE(14), padding: 0 }} name='phone' />
                    </View>

                    <View style={styles.inpWrap}>
                        <Form.Input placeholder='请输入验证码' disabled={setDisabled}
                            style={{ fontSize: ROATE(12), padding: 0 }} name="clientCode" />
                        <Form.Button submit={getClientCode} style={{ marginLeft: "auto", }} titleColor="#202020" title={time ? `重新发送(${time})` : '获取验证码'} />
                    </View>

                    <Form.Button submit={login} style={[styles.btn, disabled && styles.disabled]}
                        titleSize={ROATE(18)} titleColor='#fff' title="登录" />



                    <View style={{ flexDirection: "row", marginLeft: "auto", marginRight: "auto", alignItems: "center", marginTop: ROATE(29) }}>

                        <DisAgree style={{ padding: ROATE(8), }} onPress={() => {
                            setAgree(prev => !prev);
                        }} />
                        <Agree onPress={() => {
                            setAgree(prev => !prev);
                        }} style={{ position: "absolute", display: agree ? "flex" : "none" }} />

                        <View style={{ marginLeft: ROATE(12), }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: ROATE(12) }}>
                                    同意
                                </Text>
                                <Text style={{ fontSize: ROATE(12), fontWeight: "700", color: "#000" }}>
                                    《用户协议》
                                </Text>
                                <Text style={{ fontSize: ROATE(12) }}>和</Text>
                                <Text style={{ fontSize: ROATE(12), fontWeight: "700", color: "#000" }}>
                                    《隐私政策》
                                </Text>
                            </View>
                            <Text style={{ fontSize: ROATE(12) }}>未注册手机号将自动创建账号</Text>
                        </View>
                    </View>
                </View>
            </Form>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
    },
    inp: {
        width: ROATE(83),
        height: ROATE(20)
    },
    inpWrap: {
        flexDirection: "row", padding: ROATE(12), alignItems: "center", backgroundColor: "#F0F0F0", borderRadius: ROATE(8), marginLeft: "auto", marginRight: "auto",
        height: ROATE(44), width: ROATE(264), marginBottom: ROATE(24)
    },
    disabled: {
        backgroundColor: "#D9D9D9"
    },
    btn: {
        backgroundColor: "#202020",
        alignItems: 'center',
        padding: 8,
        marginTop: ROATE(16),
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: ROATE(8),
        width: ROATE(264),
        maxHeight: ROATE(42)
    }
})