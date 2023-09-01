// import { Icon } from '@ant-design/react-native';
import { ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react'
import { View, VirtualizedList, Image, Text, Pressable } from 'react-native';
import { ROATE } from '../../../assets/size';
import Icon from '../../../iconfont';
import {useBackTo} from '../../../utils/RouterHelper';


function RenderItem({ item }) {

    const R22 = ROATE(22)
    const imgs = item.pictures.map((it, index) => {
        if (index > 1) return;
        return (<Image source={{ uri: it }} style={{
            height: ROATE(167), marginRight: ROATE(5),
            borderBottomRightRadius: index === 0 ? 0 : R22,
            borderTopRightRadius: index === 0 ? 0 : R22,
            borderBottomLeftRadius: index === 1 ? 0 : R22,
            borderTopLeftRadius: index === 1 ? 0 : R22,
            width: ROATE(169)
        }} />)
    })
    return (
        <View style={{ marginBottom: ROATE(31), paddingHorizontal: ROATE(16) }}>
            <View style={{ flexDirection: "row", }}>

                <View style={{ flexDirection: "row" }}>
                    <Image style={{ height: ROATE(48), marginRight: ROATE(8.33), borderRadius: ROATE(24), width: ROATE(48) }} source={{ uri: item.avatar }} />
                    <View>
                        <Text style={{ fontSize: ROATE(12), color: "rgba(0,0,0,0.9)", marginBottom: ROATE(8.66) }}>{item.user_name}</Text>
                        <Text style={{ fontSize: ROATE(10), color: "rgba(0,0,0,0.45)" }}>{item.date}</Text>
                    </View>

                </View>
            </View>

            <View style={{ marginTop: ROATE(15.5) }}>
                <Text>{item.content}</Text>
                <View style={{ flexDirection: "row", marginTop: ROATE(10.66) }}>
                    {imgs}
                    <View style={{
                        display: item.pictures.length === 0 ? "none" : "flex",
                        width: ROATE(34), borderRadius: ROATE(6), backgroundColor: "rgba(0,0,0,0.6)",
                        position: "absolute", justifyContent: "center", alignItems: "center", right: ROATE(12), bottom: ROATE(12), height: ROATE(24)
                    }}>
                        <Text style={{ fontSize: ROATE(12), color: "#fff" }}>{item.pictures.length}图
                        </Text>
                    </View>
                </View>


            </View>
            <View style={{ flexDirection: "row", marginTop: ROATE(23.5) }}>
                <Text>{item.goodInfo}</Text>
                <Icon style={{ marginLeft: "auto", marginRight: ROATE(10) }} size={ROATE(16)} name='paishe' color='#000' />
                <Text>{item.comments}</Text>
            </View>
        </View>
    )
}

function Selects({ list }) {
    const [current, setCurrent] = useState(0);

    function SelectTag({ item, index }) {
        const flag = current === index;
        return (<Pressable onPress={() => {
            setCurrent(() => index)
        }} style={{
            height: ROATE(28), marginRight: ROATE(14.5), paddingHorizontal: ROATE(14), borderRadius: ROATE(14),
            backgroundColor: flag ? "rgba(0,0,0,0.9)" : "#fff", borderColor: "rgba(0,0,0,0.9)", borderWidth: ROATE(1.2), paddingVertical: ROATE(7)
        }}>
            <Text style={{ fontSize: ROATE(12), color: flag ? "#fff" : "rgba(0,0,0,0.9)" }}>{item.title}({item.count})</Text>
        </Pressable>)
    }
    const tags = list.map((it, index) => {
        return <SelectTag index={index} item={it} />
    })
    return (
            <ScrollView style={{ paddingHorizontal: ROATE(16), marginTop: ROATE(24), marginBottom: ROATE(16) }} horizontal showsHorizontalScrollIndicator={false}>
                {tags}
            </ScrollView>
    )
}

export default function CommentsOfGood({navigation, route}) {

    const [list, setList] = useState([]) as any;
    const back = useBackTo(navigation, route, undefined);
    const getItem = () => {
        const flag = Math.random() < 0.5
        return ({
            avatar: "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg",
            user_name: "朱杰",
            date: "03-12",
            content: "日期新鲜，口感不错！",
            pictures: flag ? ["https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/11.png",
                "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/11.png",
                "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/11.png"] : [],
            goodInfo: "原味 : 16盒装",
            comments: 2
        })
    };
    const getItemCount = () => 20;
    useEffect(() => {
        setList(() => [
            {
                title: "视频/图片", count: 12
            }, {
                title: "追评", count: 12
            }
        ]);

        return () => {

        }
    }, [])



    return (
        <>
            <View style={{ paddingTop: ROATE(44), paddingHorizontal: ROATE(16), flexDirection: "row", backgroundColor: "#fff" }}>
                <Pressable onPress={back} >
                    <Icon size={ROATE(24)} name='fanhuianniu-zuo' />
                </Pressable>
            </View>
            <VirtualizedList ListFooterComponent={() => <View style={{
                borderColor: "rgba(0,0,0,0.2)",
                borderBottomWidth: ROATE(1.2), marginHorizontal: ROATE(110), marginTop: ROATE(160), marginBottom: ROATE(61)
            }}>
                <Text style={{ fontSize: ROATE(14), color: "rgba(0,0,0,0.2)", position: "absolute", paddingHorizontal: ROATE(8.75), textAlign: "center", backgroundColor: "#fff", left: ROATE(36), bottom: -ROATE(10) }}>页面到底啦</Text>
            </View>} ListHeaderComponent={() => <Selects list={list} />}
                style={{ backgroundColor: "#fff" }} renderItem={RenderItem} getItem={getItem} getItemCount={getItemCount} />
        </>

    )
}
