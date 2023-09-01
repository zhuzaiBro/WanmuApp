import { FlatList, Tooltip, Text, useDisclose, Modal, useToast } from 'native-base';
import React, {  useCallback, useContext, useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Pressable } from 'react-native'
import { ROATE } from '../../../assets/size';
import Clipboard from '@react-native-community/clipboard';
import Icon from '../../../iconfont';
import {Gctx} from '../../../context';
import { useGoPage, useBackTo } from '../../../utils/RouterHelper';
import { ParamListBase, Route, StackNavigationState } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export default function AddressManager({ navigation, route } : { navigation: BottomTabNavigationProp<ParamListBase, string, undefined>, route: Route<string, object | undefined>}) {

    const toast = useToast();
    const ctx = useContext(Gctx);
    // 用于打开提示复制消息
    const { isOpen, onOpen, onClose } = useDisclose();
    // 用于记录被复制的地址索引
    const [copyAddr, setAddr] = useState(0);
    // 用于记录是否在编辑内容
    const [deleteAddr, setDeletAddr] = useState(false);
    // 表示被选中的地址的索引，用于删除操作
    const [selectIndex, setSelectIndex] = useState(0);
    const {addr, add_addr,setDefault, delete_addr} = ctx;
    //  复制地址的操作
    const copyAddress = (index: number, str: string) => {
        onOpen();
        // 执行复制操作
        Clipboard.setString(str);
        setTimeout(() => {
            onClose();
        }, 800);
    }

    const goAddAddr = useGoPage(navigation, route, {add_addr}, "AddAddr")
    // 更改默认地址
    const back = useBackTo(navigation, route, null);
 
    function ListRenderItem({ item, index }) {
        const changeDefault = useCallback(() => {
            setDefault(index);
            toast.show({
                title: "修改默认地址成功",
                bottom: ROATE(300)
            })
        }, [addr]);
        return (
            <>
                <View
                    style={{
                        flexDirection: "row", backgroundColor: "#fff",
                        marginLeft: "auto", marginRight: "auto", height: ROATE(86),
                        padding: ROATE(16), marginBottom: ROATE(8)
                    }}>
                    <View style={{
                        width: ROATE(50),
                        height: ROATE(50),
                        backgroundColor: "#eee",
                        alignItems: "center", justifyContent: "center",
                        borderRadius: ROATE(25),
                        overflow: "hidden",
                        marginTop: "auto", marginBottom: "auto", marginRight: ROATE(13)
                    }} ><Text style={{ fontSize: ROATE(24), lineHeight: ROATE(16), fontWeight: "500" }}>{item.name[0]}</Text></View>
                    <View style={{ flexGrow: 1, }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontSize: ROATE(16), color: "#000", fontWeight: "700", marginRight: ROATE(10) }}>{item.name}</Text>
                            <Text style={{ fontSize: ROATE(12), lineHeight: ROATE(16), color: "#00000072", marginRight: ROATE(10) }}>{item.phone}</Text>
                            <Text style={{
                                fontSize: ROATE(10), fontWeight: "400", lineHeight: ROATE(13), display: item.isDefault ? "flex" : "none", borderRadius: 2, height: ROATE(16),
                                width: ROATE(40), textAlign: "center", backgroundColor: "#0000000A", color: "#64A23DFF"
                            }}>默认</Text>
                        </View>
                        <Tooltip label='复 制' style={{ bottom: ROATE(70) }} isOpen={copyAddr === index && isOpen} openDelay={1} bg="black" _text={{
                            color: "#fff"
                        }} >
                            <Text numberOfLines={2} onPress={() => {
                                setAddr(() => index);
                                copyAddress(index, item.location);
                            }
                            } style={{
                                marginTop: ROATE(9), width: ROATE(234), color: "#000000b2", fontSize: ROATE(12), fontWeight: "400"
                            }}>{item.location}</Text>
                        </Tooltip>
                       

                    </View>
                    <TouchableOpacity
                        onPressOut={() => { navigation.navigate("EditAddress", { ...item, index, }) }}
                    >
                        <Icon name='bianjidizhi' size={ROATE(15)}

                            style={{
                                marginRight: ROATE(12),
                                marginTop: ROATE(39.5)
                            }} />
                    </TouchableOpacity>


                </View>
                <View style={{ height: ROATE(48), width: ROATE(343), borderTopWidth: 1, marginLeft: "auto", marginRight: "auto", marginTop: ROATE(9), borderColor: "#0000000A", flexDirection: "row", alignItems: "center" }}>

                    <Pressable style={{flexDirection:"row", alignItems:"center"}} onPress={changeDefault}>
                        <Icon size={ROATE(16)} style={{ display: item.isDefault ? "none" : "flex" }} name='weixuanzhong' />
                        <Icon size={ROATE(16)} style={{ display: item.isDefault ? "flex" : "none" }} name='chengong' />

                        <Text style={{
                            marginLeft: ROATE(12), zIndex: 1, fontSize: ROATE(12)
                        }}>默认地址</Text>
                    </Pressable>
                    <Pressable onPress={() => {
                        setTimeout(() => {
                            ctx.setStatusBarBg(() => "rgba(0,0,0,0.3)")
                            
                        }, 350);
                        setSelectIndex(() => index);
                        setDeletAddr(() => true)
                    }} style={{ marginLeft: "auto" }}>
                        <Text style={{ fontSize: ROATE(12), color: "#00000072" }}>删除</Text>
                    </Pressable>

                </View>
                <View style={{ backgroundColor: "#0000000a", height: ROATE(8) }} />
            </>


        )


    }

    return (
        <View style={styles.container}>
            {/* 头部信息 */}
            <View style={styles.header}>
                <View style={{
                    ...styles.headerLine,
                }}>
                    <Pressable onPress={back}>
                        <Icon  style={{width: ROATE(24), height :ROATE(24)}}
                        size={ROATE(24)} name='fanhuianniu-zuo'/>
                    </Pressable>
                    
                    <Text style={{
                        fontSize: ROATE(16), marginLeft: ROATE(4), marginRight: "auto",
                        color: "#000"
                    }}>添加地址</Text>

                </View>
            </View>

            <FlatList style={{flexGrow: 1, marginBottom: ROATE(120)}}renderItem={({ item, index }) =>
                <ListRenderItem index={index} item={item} />}
                data={addr} />
            <TouchableOpacity onPress={goAddAddr}
                style={{
                    position: "absolute", width: ROATE(275), height: ROATE(44), left: ROATE(50),
                    bottom: ROATE(80), backgroundColor: "#9FE284FF", borderRadius: ROATE(12), justifyContent: "center", flexDirection: "row",
                    alignItems: "center"
                }}>
                <Icon name='jia' size={ROATE(24)} style={{ marginRight: ROATE(12), }} color='#fff' />
                <Text style={{ color: "#000000E6", fontSize: ROATE(16) }}>添加收货地址</Text>
            </TouchableOpacity>
            <Modal isOpen={deleteAddr}>
                <Modal.Content width={ROATE(260)}  borderRadius={ROATE(16)}>
                    <View style={{ width: ROATE(260),  borderRadius: ROATE(16), height: ROATE(100), backgroundColor: "#fff", }}>
                        <Text style={{ fontSize: ROATE(16), borderBottomWidth: 1, borderColor: "#f5f5f5", textAlign: "center", color: "#000", paddingBottom: ROATE(15), marginTop: ROATE(14) }}>确认删除此收货地址</Text>
                        <View style={{ flexDirection: "row", width: ROATE(260), }}>
                            <Pressable onPress={() => {
                                ctx.setStatusBarBg(() => "transparent");
                                setDeletAddr(() => false)}} style={{ paddingLeft: ROATE(51), marginTop: "auto", paddingBottom: ROATE(14),height: ROATE(50)  }}>
                                <Text style={{ ...styles.btnFont,lineHeight: ROATE(38),  color: "#000" }}>取消</Text>
                            </Pressable>
                            <Pressable onPress={() => {
                                ctx.setStatusBarBg(() => "transparent")
                                setDeletAddr(() => false);
                                delete_addr(selectIndex);
                            }}
                                style={{marginLeft: "auto",paddingLeft: ROATE(51), height: ROATE(50), paddingBottom: ROATE(14), borderLeftWidth: 1, borderColor: "#f5f5f5",paddingRight: ROATE(51)}}>
                                <Text style={{ ...styles.btnFont, lineHeight: ROATE(38), color: "#64A23DFF" }}>删除</Text>
                            </Pressable>
                        </View>
                    </View>

                </Modal.Content>
            </Modal>
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
        backgroundColor: "#fff"
    },
    headerLine: {
        height: ROATE(44),
        zIndex: 1,
        flexDirection: "row",
        paddingHorizontal: ROATE(12),
        alignItems:"center"
    },
    addressList: {

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

    }
})