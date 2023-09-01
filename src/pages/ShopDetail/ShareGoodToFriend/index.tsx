import { FlatList, Modal } from 'native-base';
import React from 'react'
import { Pressable, StyleSheet, View , Text, TextInput, Image} from 'react-native'
import { ROATE } from '../../../assets/size';
import Icon from '../../../iconfont';

export default function ShareGoodToFriends({navigation, route}) {

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

    const RenderFrend = ({it}) => {
        const { avatar, user_name } = it;
        return (
            <Pressable style={{ flexDirection: "row", marginBottom: ROATE(14.17), alignItems: "center" }}>
                <Image source={{ uri: avatar }} style={{ width: ROATE(45.83), height: ROATE(45.83), borderRadius: ROATE(22.92), marginRight: ROATE(11.08) }} />
                <Text numberOfLines={1} style={{ fontSize: ROATE(14), maxWidth: ROATE(288), color: "#000000e5", }}>{user_name}</Text>
            </Pressable>
        )
    }

    return (
        <View>
            <View style={styles.header}>
                <View style={{justifyContent: "center", alignItems :"center"}}>
                    <Pressable onPress={() => {
                        navigation.goBack();
                    }} style={{position: "absolute", left: ROATE(0)}}>
                        <Icon name='fanhuianniu-zuo' size={ROATE(24)} />
                    </Pressable>
                    <Text style={{fontSize: ROATE(16), fontWeight: "500", color: "#000000e5"}}>分享至</Text>
                </View>
                <View style={{flexDirection: "row", marginTop: ROATE(22)}}>
                    <View style={{flexDirection: "row", alignItems: "center", paddingHorizontal: ROATE(12), height: ROATE(36), width: ROATE(302), backgroundColor: "#fff", borderRadius: ROATE(4)}}>
                        <Icon name='sousuo'/>
                        <TextInput style={{marginLeft: ROATE(6)}} placeholder='搜索用户' placeholderTextColor="#00000072"/>
                    </View>
                    <Pressable style={{ marginLeft: "auto", alignItems: "center", justifyContent: "center"}}>
                        <Text style={{fontSize: ROATE(14), color: "#000000e5"}}>搜索</Text>
                    </Pressable>
                </View>
            </View>
            <FlatList style={{height: ROATE(654)}} data={friendList} renderItem={({item, index}) => <RenderFrend it={item} key={index}/>}/>
            <Modal isOpen={false}>
                    <Modal.Body style={{height: ROATE(186), width: ROATE(260)}}>
                        
                    </Modal.Body>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#0000000A",
        height: ROATE(158),
        paddingTop: ROATE(64),
        paddingHorizontal: ROATE(16),

    }
})