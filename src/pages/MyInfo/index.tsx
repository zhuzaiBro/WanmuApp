import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, Image, View, VirtualizedList, TouchableOpacity } from 'react-native'
import store from '../../store';
import { gerPersonalDynamics } from '../../server/dynamic';
import { ROATE } from '../../assets/size';
import { Icon } from '@ant-design/react-native';


const Item = ({ item, navigation }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [imgUrls, setImgUrls] = useState([ {
        url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
       },
       {
        url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
       },
       {
        url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
       },]);


    const searchImg = () => {
        setIsOpen(() => {
            setImgUrls(()=>
            [{ url: item.pictures[0].uri }, { url: item.pictures[0].uri }]);

            return true;
        })
    };

    return (
        <View onTouchEnd={()=> {navigation.navigate("DynamicDetail", item)}}
        style={{ flexDirection: "row", padding: ROATE(17) }}>
            <Image style={{ height: ROATE(32), marginRight: ROATE(8.88), width: ROATE(32), borderRadius: ROATE(16) }}
                source={{ uri: "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" }} />
            <View style={{ width: ROATE(297) }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <Text style={{ fontWeight: "400", fontSize: ROATE(14) }}>{item.name}</Text>
                    <Icon style={{ transform: [{ rotate: "90deg" }] }} name='more' color='#000' />
                </View>

                {/* 图片 */}
                <View onTouchEnd={(e)=> {
                    e.stopPropagation();
                    searchImg()}
                    } style={{ flexDirection: "row", marginTop: ROATE(9) }}>
                    <Image style={{ height: ROATE(97), borderRadius: ROATE(4), marginRight: ROATE(4), width: ROATE(97) }} source={{ uri: item.pictures[0].uri }} />
                    <Image style={{ height: ROATE(97), borderRadius: ROATE(4), marginRight: ROATE(4), width: ROATE(97) }} source={{ uri: item.pictures[0].uri }} />
                    <Image style={{ height: ROATE(97), borderRadius: ROATE(4), width: ROATE(97) }} source={{ uri: item.pictures[0].uri }} />
                    <View style={{ position: "absolute", flexDirection: "row", bottom: ROATE(5), backgroundColor: "rgba(0,0,0,0.45)", right: ROATE(21) }}>
                        <Icon color='#fff' name='picture' size={ROATE(12)} />
                        <Text style={{ fontSize: ROATE(10), color: "#fff" }}>9</Text>
                    </View>
                </View>

                <Text style={{ width: ROATE(300), fontSize: ROATE(14), fontWeight: "400", marginTop: ROATE(12) }}>{item.content}</Text>
                <View style={{ flexDirection: "row", }}>
                    <Text style={{ borderWidth: 1, backgroundColor: "rgba(0,0,0,0.03)", overflow: "hidden", marginTop: ROATE(20), marginBottom: ROATE(23), borderColor: "#e5e5e5", borderRadius: ROATE(13), padding: ROATE(8), paddingTop: ROATE(3), paddingBottom: ROATE(3) }}>
                        # {item.title}</Text>
                </View>
                <View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={{ height: ROATE(22), width: ROATE(22), borderRadius: ROATE(11), marginRight: ROATE(-8) }} source={{ uri: item.pictures[0].uri }} />
                        <Image style={{ height: ROATE(22), borderRadius: ROATE(11), width: ROATE(22) }} source={{ uri: item.pictures[0].uri }} />
                        <Text style={{ marginLeft: ROATE(12) }}>04-02评论</Text>
                        <View style={{ flexDirection: "row", marginLeft: "auto", marginRight: ROATE(21), alignItems: "center" }}>
                            <Icon name='comment' />
                            <Text>2</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Icon name='like' />
                            <Text>2</Text>
                        </View>
                    </View>
                </View>
                {/* 评论框 */}
                <View style={{ height: ROATE(36), marginTop: ROATE(10), width: ROATE(299), borderRadius: ROATE(12), overflow: "hidden" }}>
                    <Text style={{ lineHeight: ROATE(36), paddingHorizontal: ROATE(12), backgroundColor: "rgba(0,0,0,0.06)" }}>
                        吕铭洲： 牛啊
                    </Text>
                </View>


            </View>
        </View>
    );
}


const HeaderComp = ({ navigation }) => {
    return (
        <View style={{ height: ROATE(200),paddingBottom: ROATE(25) }}>
           
            <View style={{flexDirection: "row"}}>
                <Image style={{ height: ROATE(100),marginRight:ROATE(15), marginLeft: ROATE(16), borderRadius: ROATE(50), width: ROATE(100) }} source={{ uri: "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" }} />
                <View style={{flexGrow: 1, marginRight:ROATE(16)}}>
                    <Text style={{marginTop: ROATE(20), textAlign: "right", marginBottom: ROATE(12)}}>朱杰</Text>
                    <Text style={{fontSize: ROATE(12), textAlign: "right", marginBottom:ROATE(18)}}>sfdsfsdfsefwefdfsdfsdf</Text>
                    <Text style={{fontSize: ROATE(12), textAlign: "right"}}>男生 · 本科 · 浙江理工大学</Text>
                </View>
            </View>
            <View style={{flexDirection: "row", paddingHorizontal: ROATE(16), alignItems: "center"}}>
                <View style={{justifyContent: "center", alignItems: "center", marginRight: ROATE(18)}}>
                    <Text style={{fontSize: ROATE(18)}}>19</Text>
                    <Text style={{fontSize: ROATE(12)}}>粉丝</Text>
                </View>
                <View style={{justifyContent: "center", alignItems: "center", marginRight: ROATE(18)}}>
                    <Text style={{fontSize: ROATE(18)}}>19</Text>
                    <Text style={{fontSize: ROATE(12)}}>粉丝</Text>
                </View>
                <TouchableOpacity style={{height: ROATE(31), marginLeft: "auto",marginRight: ROATE(12.5), width:ROATE(68), flexDirection:"row",
                justifyContent: "center", alignItems:"center", borderRadius: ROATE(5), backgroundColor: "#fff", borderWidth: 1}}>
                    <Icon name='comment' size={ROATE(12)} color="#000" style={{marginRight: ROATE(6)}}/>
                    <Text style={{color: "#000", fontSize: ROATE(13)}}>聊天</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: ROATE(31), width:ROATE(68), flexDirection:"row",
                justifyContent: "center", alignItems:"center", borderRadius: ROATE(5), backgroundColor: "#202020"}}>
                    <Text style={{color: "#fff", fontSize: ROATE(13)}}>关注</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default function MyInfo({ route, navigation }) {

    const DATA = [];

    const getItem = (data, index: number) => {
        const obj = {
            id: Math.random().toString(12).substring(0),
            name: `吕铭洲的小号 ${index + 1}`,
            title: `Item ${index + 1}`,
            content: "最近一直吃饭睡觉打豆豆～，芜湖起飞，最近一直吃饭睡觉打豆豆～，芜湖起飞最近一直吃饭睡觉打豆豆～，芜湖起飞最近一直吃饭睡觉打豆豆～，芜湖起飞最近一直吃饭睡觉打豆豆～，芜湖起飞最近一直吃饭睡觉打豆豆～，芜湖起飞"
            , pictures: [{ uri: "http://www.discosoul.com.cn/upload/1650270484598-swai3a.jpg" }]
        }

        return obj
    }

    const Header = () => <HeaderComp navigation={navigation} />

    return (
        <VirtualizedList ListHeaderComponent={Header} style={{ backgroundColor: "#fff" }} getItem={getItem} getItemCount={() => 20}
            StickyHeaderComponent={() => <View style={{ backgroundColor: "#f40", height: ROATE(122) }}></View>} renderItem={({ index, item }) => <Item navigation={navigation} item={item} />} data={DATA}>

        </VirtualizedList>
    )
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 60,
        paddingTop: 60,
        overflow: "visible",
    },
    defaultFont: {
        fontSize: 15,
        color: "#202020",
    }
});