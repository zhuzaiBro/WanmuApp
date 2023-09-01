import { FlatList } from 'native-base';
import React, { useCallback, useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { ROATE, ScreenHeight } from '../../../assets/size';
import { Gctx } from '../../../context';
import Icon from '../../../iconfont';
import { useBackTo } from '../../../utils/RouterHelper';
import { Modal } from 'native-base';

export default function ChangeSddr({ navigation, route }) {
    const { addr, add_addr, edit_addr }: { addr: any, add_addr: Function, edit_addr: Function } = useContext(Gctx);
    const [selectedIndex, setSelected] = useState(0);
    const cancel = useBackTo(navigation, route, void 0);
    const [confirm, setConfirm] = useState(false);
    const setNewAddr = () => {

    }

    function ListRenderItem({ item, index }) {
        const flag = index === selectedIndex;
        const changeDefault = useCallback(() => {
            setSelected(() => index);
        }, [addr]);
        return (
            <View
                style={{
                    flexDirection: "row", backgroundColor: "#fff", borderRadius: ROATE(8), overflow: "hidden", width: ROATE(359),
                    marginLeft: "auto", marginRight: "auto", height: ROATE(86),
                    padding: ROATE(16), marginBottom: ROATE(8)
                }}>
                <View style={{
                    width: ROATE(40),
                    height: ROATE(40),
                    backgroundColor: "#eee",
                    alignItems: "center", justifyContent: "center",
                    borderRadius: ROATE(20),
                    overflow: "hidden",
                    marginTop: "auto", marginBottom: "auto", marginRight: ROATE(13)
                }} ><Text style={{ fontSize: ROATE(24), fontWeight: "500" }}>{item.name[0]}</Text></View>
                <View style={{ flexGrow: 1, }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: ROATE(16), color: "#000", fontWeight: "700", marginRight: ROATE(10) }}>{item.name}</Text>
                        <Text style={{ fontSize: ROATE(12), lineHeight: ROATE(16), color: "#00000072", marginRight: ROATE(10) }}>{item.phone}</Text>
                        <Text style={{
                            fontSize: ROATE(10), fontWeight: "400", lineHeight: ROATE(13), display: item.isDefault ? "flex" : "none", borderRadius: 2, height: ROATE(16),
                            width: ROATE(40), textAlign: "center", backgroundColor: "#0000000A", color: "#64A23DFF"
                        }}>默认</Text>
                    </View>

                    <Text numberOfLines={2}
                        style={{
                            marginTop: ROATE(9), width: ROATE(234), color: "#000000b2", fontSize: ROATE(12), fontWeight: "400"
                        }}>{item.location}</Text>

                </View>
                <TouchableOpacity onPress={changeDefault} style={{}}>
                    <Icon name={'weixuanzhong'} size={ROATE(16)}
                        style={{ marginRight: ROATE(12), marginTop: "auto", marginBottom: "auto", display: flag ? "none" : "flex" }} />
                    <Icon name={'xuanzhongzhuangtai'} size={ROATE(16)}
                        style={{ marginRight: ROATE(12), marginTop: "auto", marginBottom: "auto", display: flag ? "flex" : "none" }} />
                </TouchableOpacity>


            </View>
        )


    }

    return (
        <View style={{ height: ScreenHeight, paddingTop: ROATE(54), paddingHorizontal: ROATE(16), backgroundColor: "#f5f5f5" }}>
            <Pressable onPress={cancel} style={{ zIndex: 1, position: "absolute", left: ROATE(16), top: ROATE(54) }}>
                <Text style={{ fontSize: ROATE(16) }}>取消</Text>
            </Pressable>
            <Text style={{ textAlign: "center", fontSize: ROATE(16), marginBottom: ROATE(22) }}>修改地址</Text>
            <View >
                <Text style={{ fontSize: ROATE(16), fontWeight: "500", marginBottom: ROATE(12) }}>
                    现地址:
                </Text>
                <Text style={{ fontSize: ROATE(16), marginBottom: ROATE(8) }}>
                    {addr[selectedIndex].location}
                </Text>
                <Text style={{ fontSize: ROATE(12), color: "#000000e6" }}>
                    {addr[selectedIndex].name} {addr[selectedIndex].phone}
                </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: ROATE(16), marginTop: ROATE(24) }}>
                <Text>选择新地址</Text>
                <Pressable>
                    <Text>添加收货地址</Text>
                </Pressable>
            </View>

            <FlatList data={addr} renderItem={({ item, index }) => (<ListRenderItem index={index} item={item} />)} />

            <Pressable onPress={() => {
                setConfirm(() => true);
            }} style={{ backgroundColor: "#000000e6", position: "absolute", bottom: ROATE(43), left: ROATE(44), width: ROATE(300), height: ROATE(40), borderRadius: ROATE(71), justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "#fff", fontWeight: "500", fontSize: ROATE(16) }}>提交修改</Text>
            </Pressable>


            <Modal isOpen={confirm} onClose={() => {
                setConfirm(() => false)
            }}>
                <Modal.Body p={0} style={{ width: ROATE(260), height: ROATE(100), borderRadius: ROATE(16), backgroundColor: "#fff", top: ROATE(356) }}>
                    <Text style={{ paddingTop: ROATE(15), fontSize: ROATE(14), textAlign: "center", fontWeight: "500", paddingBottom: ROATE(16), }}>
                        是否确认将该地址设为新地址
                    </Text>
                    <View style={{ flexDirection: "row", borderTopWidth: ROATE(1.2), borderColor: "#ededed", width: ROATE(260), margin: 0 }}>
                        <Pressable onPress={() => {
                            setConfirm(() => false);
                        }} style={{height: ROATE(52), width: ROATE(130), justifyContent: "center", alignItems: "center",borderColor: "#ededed", borderRightWidth: ROATE(1.2)}}>
                            <Text style={{color: "00000073"}}>否</Text>
                        </Pressable>
                        <Pressable onPress={() => {
                            setConfirm(() => false);
                        }} style={{height: ROATE(52), width: ROATE(130),justifyContent: "center", alignItems: "center"}}>
                            <Text style={{color: "#64a23d"}}>是</Text>
                        </Pressable>
                    </View>
                </Modal.Body>
            </Modal>
        </View>
    )
}
