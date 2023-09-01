import React from 'react';
import { Actionsheet, View } from 'native-base';
import { ROATE } from '../../../assets/size';
import { Pressable, Text, Image } from 'react-native';
import Icon from '../../../iconfont';

export default function ShareActionSheet({ isOpen, onClose, GoMoreFriend }) {

    const friendList = [{
        avatar: "https://portrait.gitee.com/uploads/avatars/user/618/1854498_xj89959853_1623812131.png!avatar60",
        user_name: "谢杰"
    }, {
        avatar: "https://portrait.gitee.com/uploads/avatars/user/386/1160598_hangang9558_1578943615.png!avatar60",
        user_name: "朱杰"
    }, {
        avatar: "https://portrait.gitee.com/uploads/avatars/user/386/1160598_hangang9558_1578943615.png!avatar60",
        user_name: "json"
    }, {
        avatar: "http://www.zhuzaibrother.cn/static/upload/2022-5-7-20-40-55-739-99447.jpg",
        user_name: "棒棒鸡"
    }, {
        avatar: "http://www.zhuzaibrother.cn/static/upload/2022-5-7-20-40-55-739-99447.jpg",
        user_name: "吕粥粥"
    }, {
        avatar: "http://www.zhuzaibrother.cn/static/upload/2022-5-7-20-40-55-739-99447.jpg",
        user_name: "David"
    },]

    const RenderFrend = friendList.map((it) => {
        const { avatar, user_name } = it;
        return (
            <Pressable style={{ flexDirection: "row", marginBottom: ROATE(14.17), alignItems: "center" }}>
                <Image source={{ uri: avatar }} style={{ width: ROATE(45.83), height: ROATE(45.83), borderRadius: ROATE(22.92), marginRight: ROATE(11.08) }} />
                <Text style={{ fontSize: ROATE(14), color: "#000000e5", }}>{user_name}</Text>
            </Pressable>
        )
    })

    return (
        <Actionsheet hideDragIndicator onClose={onClose} isOpen={isOpen}>
            <Actionsheet.Content p={0} style={{ height: ROATE(600), width: ROATE(375), alignItems: "flex-start" }}>
                <View style={{ width: ROATE(375), marginTop: ROATE(16), marginBottom: ROATE(21) }}>
                    <Pressable onPress={onClose} style={{ zIndex: 2, position: "absolute", left: ROATE(16), top: 0 }}>
                        <Icon size={ROATE(24)} name='guangbi' />
                    </Pressable>
                    <Text style={{ textAlign: "center", color: "#000000e5", fontSize: ROATE(16), fontWeight: "500" }}>分享至</Text>
                </View>
                {/* 三个分享链接 */}
                <View style={{ width: ROATE(375), flexDirection: "row", paddingHorizontal: ROATE(16), paddingBottom: ROATE(20), borderBottomWidth: ROATE(1.2), borderColor: "#0000000A", marginBottom: ROATE(20) }}>
                    <Pressable style={{ justifyContent: "center", marginRight: ROATE(37), alignItems: "center", }}>
                        <Pressable style={{ backgroundColor: "#F5F5F5", width: ROATE(48), height: ROATE(48), borderRadius: ROATE(24), marginBottom: ROATE(6), justifyContent: "center", alignItems: "center" }}>
                            <Icon size={ROATE(28)} name='lianjie' />
                        </Pressable>

                        <Text style={{ fontSize: ROATE(14), color: "#333" }}>链接</Text>
                    </Pressable>
                    <Pressable style={{ justifyContent: "center", marginRight: ROATE(37), alignItems: "center" }}>
                        <Pressable style={{ backgroundColor: "#F5F5F5", width: ROATE(48), height: ROATE(48), borderRadius: ROATE(24), marginBottom: ROATE(6), justifyContent: "center", alignItems: "center" }}>
                            <Icon size={ROATE(28)} name='weixing' />
                        </Pressable>

                        <Text style={{ fontSize: ROATE(14), color: "#333" }}>微信好友</Text>
                    </Pressable><Pressable style={{ justifyContent: "center", alignItems: "center" }}>
                        <Pressable style={{ backgroundColor: "#F5F5F5", width: ROATE(48), height: ROATE(48), borderRadius: ROATE(24), marginBottom: ROATE(6), justifyContent: "center", alignItems: "center" }}>
                            <Icon size={ROATE(28)} name='QQ' />
                        </Pressable>

                        <Text style={{ fontSize: ROATE(14), color: "#333" }}>QQ</Text>
                    </Pressable>
                </View>
                {/* 选择好友 */}
                <View style={{ paddingHorizontal: ROATE(16) }}>
                    <Text style={{ marginBottom: ROATE(15), fontSize: ROATE(14), color: "#00000072", fontWeight: "400" }}>分享给好友</Text>
                    {RenderFrend}
                    <Pressable onPress={() => {
                        onClose();
                        GoMoreFriend();
                    }} style={{ flexDirection: "row", marginBottom: ROATE(14.17), alignItems: "center" }}>
                        <Pressable style={{ width: ROATE(44), height: ROATE(44), borderRadius: ROATE(22), backgroundColor: "#f5f5f5", justifyContent: "center", alignItems: "center", marginRight: ROATE(11.08) }}>
                            <Icon name='gengduo' />
                        </Pressable>

                        <Text style={{ fontSize: ROATE(14), color: "#000000e5", }}>更多好友</Text>
                    </Pressable>
                </View>
            </Actionsheet.Content>
        </Actionsheet>
    )
}
