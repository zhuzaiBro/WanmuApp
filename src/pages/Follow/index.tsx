import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import RefreshScrollView from '../../components/RefreshScrollView';

export default function Follow({ navigation, route }) {

    const [follows, setFollows] = useState([]) as any;

    const list = ["朱杰", "吕铭洲", "小铭哥", "猪宰", "路人甲", "路人乙", "路人丙"]

    useEffect(() => { 
        setFollows(list.map((item, i: number) => {
            return (
                <View key={i}
                 style={{ flexDirection: "row", padding: 12, backgroundColor: "#f5f5aa", borderRadius: 12, marginBottom: 12 }}>
                    <Image style={{ height: 80, borderRadius: 40, width: 80, marginRight: 12 }} source={{ uri: "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" }} />
                    <View style={{ flexGrow: 1 }}>
                        <Text style={{ color: "#f40" }}>{item}</Text>
                        <Text>蓝也是一种态度啊  </Text>
                    </View>
                    <Text style={{
                        marginTop: "auto", marginBottom: "auto", height: 38, backgroundColor: "#202020", padding: 8, color: "#fff"
                        , borderRadius: 5
                    }}>互关</Text>
                </View>)
        }))
        // 发送一个请求得到这个user的关注列表
    }, [])


    return (
        <RefreshScrollView title='累啊,别刷了' style={{backgroundColor: "#fff", padding: 24, paddingTop: 12 }}>
            <View style={{ borderWidth: 2, padding: 8, borderColor: "#202020", borderRadius: 6 , paddingTop: 12}}>
                {follows}
            </View>

        </RefreshScrollView>
    )
}
