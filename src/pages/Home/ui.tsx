import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, VirtualizedList, RefreshControl } from 'react-native';
import Banner from './components/banner';
import { Button, Icon, NoticeBar } from '@ant-design/react-native';
import { ROATE } from '../../assets/size';
import { Download } from '../../assets/imgs';
// import { RefreshNormalHeader } from 'react-native-smart-refresh';
import TitleLine from './titleLine';
import ResrouceBag from './resrouceBag';
import Window from './Window';
import RecommandBox, { Tag } from './recommandBox';
import TitleControl from './TitleControl';
import Lottie from 'lottie-react-native';


export default function Home({ navigation, route, schoolList }) {

    const [refreshing, setRefreshing] = useState(false);
    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }
    const onRefresh = useCallback(() => {
        setRefreshing(() => true);
        wait(1000).then(() => setRefreshing(() => false));
    }, []);

    const getItem = () => {
        return ({
            title: "考验在每个时间段应该做什么事情？",
            tags: ["大一"],
            content: "考验在每个时间段应该做什么事情？考验在每个时间段应该做什么事情？考验在每个时间段应该做什么事情？考验在每个时间段应该做什么事情？考验在每个时间段应该做什么事情？考验在每个时间段应该做什么事情？考验在每个时间段应该做什么事情？考验在每个时间段应该做什么事情？考验在每个时间段应该做什么事情？"
            , user: {
                avatar: "https://profile.csdnimg.cn/7/6/9/3_qq_36438460"
            }
        })
    }

    function RenderItem({ item }) {

        const tags = item.tags.map((it, index) => {
            return (<Tag key={index} text={it} />)
        })
        return (
            <View style={{
                flexDirection: "row", marginHorizontal: ROATE(16), borderBottomWidth: ROATE(1.2),
                borderColor: "#0000001f", paddingVertical: ROATE(16),
            }}>
                <Image style={{ height: ROATE(44), borderRadius: ROATE(22), width: ROATE(44), marginRight: ROATE(12) }}
                    source={{ uri: item?.user?.avatar }} />
                <View style={{ width: ROATE(287), }}>
                    <Text numberOfLines={1} style={{ fontSize: ROATE(14), fontWeight: "500", marginBottom: ROATE(4), color: "#000000e6" }}>
                        {item.title}
                    </Text>
                    <Text numberOfLines={1} style={{ width: ROATE(287), fontSize: ROATE(12), fontWeight: "400", marginBottom: ROATE(15), color: "#00000073" }}>
                        {item.content}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        {tags}
                    </View>

                </View>
            </View>

        )
    }

    return (
        <>
        {/* <Lottie autoPlay={true} loop={true} source={require("../../assets/animtion.json")}/> */}
            <View style={{
                height: ROATE(54), flexDirection: "row", zIndex: 1, width: Dimensions.get("screen").width, paddingHorizontal: ROATE(16),
                alignItems: "center", backgroundColor: "#1F231D",
            }}>
                <View style={{}}>

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={{ height: ROATE(18), width: ROATE(18), borderRadius: ROATE(9), marginRight: ROATE(4) }}
                            source={{ uri: "https://t15.baidu.com/it/u=1862413376,2714316349&fm=179&app=42&size=w54&n=0&f=JPEG&fmt=auto?s=AB73609219D6C7E11CC37A56030010F4&sec=1656176400&t=c41f0bf1fbf6eed1c1bb58d5031a9166" }} />
                        <Text style={{ fontSize: ROATE(12), color: "#fff" }}>浙江理工大学</Text>
                    </View>
                </View>
                <Download />

            </View>

            <VirtualizedList bounces={false} showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl 
                    refreshing={refreshing} onRefresh={onRefresh} />} data={[]} getItem={getItem} getItemCount={() => 50}
                renderItem={({ item, index }) => <RenderItem item={item} key={index} />} 
                ListHeaderComponent={() =>  
                    <View style={{ backgroundColor: "#1c1e1b", }}>
                        <View style={{ backgroundColor: "#fff",
                            flexDirection: "row", paddingHorizontal: ROATE(23), paddingVertical: ROATE(9), alignItems: "center",
                            width: ROATE(343), borderRadius: ROATE(4), marginLeft: "auto", marginRight: "auto", height: ROATE(36)
                        }}>
                            <Icon name='search' color="#000" size={ROATE(16.2)} />
                            <Text style={{ marginLeft: ROATE(6), color: "rgba(0,0,0,0.3)", fontSize: ROATE(12), }}>搜索商品</Text>
                        </View>
                        <View style={{ paddingBottom: ROATE(20), paddingHorizontal: ROATE(17), backgroundColor: "#fff", marginTop: ROATE(16),
                        borderTopRightRadius: ROATE(16),  borderTopLeftRadius: ROATE(16) }}>
                            <TitleLine route={route} navigation={navigation} title={"资源包精选"} />
                            <ResrouceBag />
                            <TitleLine route={route} navigation={navigation} title={"成长橱窗"} />
                            <Window />

                            <TitleLine route={route} navigation={navigation} title={"青氪推荐.精选干货"} />
                            <RecommandBox />

                        </View>
                        <TitleControl titles={["全部", "一站式推送"]} />
                    </View>

               }
                style={{ backgroundColor: "#fff", height: Dimensions.get("screen").height }} />
        </>)

}

const styles = StyleSheet.create({
    
    img: {
        height: ROATE(105),
        width: ROATE(105),
        marginRight: ROATE(13.2),
        borderRadius: ROATE(5.6)
    },
    contentItem: {
        backgroundColor: "#F0F0F0",
        padding: ROATE(18),
        marginTop: ROATE(16),
        borderRadius: ROATE(6)
    }
})
