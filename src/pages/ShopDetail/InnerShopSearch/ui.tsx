import { Route } from '@react-navigation/native';
import React, { useCallback } from 'react'
import { Pressable, TextInput, View, Text, StyleSheet } from 'react-native';
import { ROATE } from '../../../assets/size';
import Icon from '../../../iconfont';
import { useBackTo } from '../../../utils/RouterHelper';

export interface IDispatch{
    searchGood: Function
    changeWord: ((text: string) => void)
}
export interface IState {
    navigation: any,
    searchWold: string,
    result: any[],
    route: Route<string, object | undefined>
}

export interface IProps {
    navigation: any,
    searchWold: string,
    result: any[],
    route: Route<string, object | undefined>
    searchGood :Function
    changeWord: ((text: string) => void)
}

export default function Ui({ navigation, searchWold, result, route, searchGood, changeWord }: IProps) {

    const goback = useCallback(() => {
        useBackTo(navigation, route, undefined)();
    }, [route.params])
    return (
        <View>
            <View style={{ flexDirection: "row", marginTop: ROATE(54), paddingHorizontal: ROATE(12), alignItems: "center" }}>
                <Pressable onPress={goback}>
                    <Icon size={ROATE(24)} name='fanhuianniu-zuo' />
                </Pressable>
                <View style={styles.inp}>
                    <Icon name='sousuo' />
                    <TextInput placeholderTextColor="#00000045" onChangeText={changeWord} value={searchWold} style={{ marginLeft: ROATE(12), fontSize: ROATE(10), flexGrow: 1,  height: ROATE(34), padding: 0 }} blurOnSubmit placeholder='搜索店内商品' />

                </View>
                <Pressable onPress={searchGood as any}>
                    <Text style={{ fontSize: ROATE(14), color: "#000000e5" }}>搜索</Text>
                </Pressable>
            </View>
            {
                result.length === 0 ? <Icon style={{ marginLeft: "auto", marginRight: "auto", marginTop: ROATE(48) }} size={ROATE(122)} name={'queshengye' as any} /> : ""
            }
        </View>
    )
}

const styles = StyleSheet.create({
    inp: {
        width: ROATE(266),
        height: ROATE(36),
        paddingHorizontal: ROATE(12),
        alignItems: "center",
        marginLeft: ROATE(6),
        marginRight: ROATE(16),
        borderColor: "#000000e5",
        borderWidth: ROATE(1.2),
        borderRadius: ROATE(4),
        flexDirection: "row"
    }
})