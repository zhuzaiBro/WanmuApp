import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Image, StyleSheet, View, Text, Dimensions, Pressable, VirtualizedList } from 'react-native';
import store from '../../store';
import { ROATE } from '../../assets/size';
import { Icon } from '@ant-design/react-native';
import { useGoPage } from '../../utils/RouterHelper';
import Header from './aboutMeHeader';
import LinearGradient from 'react-native-linear-gradient';
import MemberBox from './memberBox';
import ListHeader from './listHeader';

export interface IState {
    navigation: any;
    route: any;
    fans: any[];
    follows: any[];
    userInfo: any;
}
interface IProps {
    navigation: any;
    route: any;
    fans: any[];
    follows: any[];
    userInfo: any;
    fech_follows: Function
}
export interface IDispatch {
    fech_follows: Function
}

export default function AboutMe({ navigation, route, fans, follows, userInfo, fech_follows }: IProps) {

    const DATA: any[] = []; //用于记录动态
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
    useEffect(() => {
        (async () => { fech_follows() })()
    }, []);
    const getItemCount = (data) => {
        return 50;
    }
    const Item = ({ item }) => {
        const goDyanmic = useGoPage(navigation, route, item, "DynamicDetail");

        return (
            <Pressable onPress={goDyanmic}
                style={{ backgroundColor: "#fff", flexDirection: "row", padding: ROATE(17) }}>
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
                    <Pressable onPress={(e) => {
                        e.stopPropagation();
                    }
                    } style={{ flexDirection: "row", marginTop: ROATE(9) }}>
                        <Image style={{ height: ROATE(97), borderRadius: ROATE(4), marginRight: ROATE(4), width: ROATE(97) }} source={{ uri: item.pictures[0].uri }} />
                        <Image style={{ height: ROATE(97), borderRadius: ROATE(4), marginRight: ROATE(4), width: ROATE(97) }} source={{ uri: item.pictures[0].uri }} />
                        <Image style={{ height: ROATE(97), borderRadius: ROATE(4), width: ROATE(97) }} source={{ uri: item.pictures[0].uri }} />
                        <View style={{ position: "absolute", flexDirection: "row", bottom: ROATE(5), backgroundColor: "rgba(0,0,0,0.45)", right: ROATE(21) }}>
                            <Icon color='#fff' name='picture' size={ROATE(12)} />
                            <Text style={{ fontSize: ROATE(10), color: "#fff" }}>9</Text>
                        </View>
                    </Pressable>

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
                            吕铭洲： 可以啊
                        </Text>
                    </View>


                </View>
            </Pressable>
        );
    }
    const [visible, setNameVisible] = useState(false);

    const judgeShow = useCallback(
        ({ nativeEvent }) => {
            if (nativeEvent.contentOffset.y >= 50) {
                setNameVisible(() => true);
                return;
            }
            setNameVisible(() => false)
        }
        , []);

    const pureHeader = useMemo(() => (
        <>
            <View style={{ backgroundColor: "#fff", marginBottom: ROATE(6), paddingHorizontal: ROATE(16), paddingBottom: ROATE(24) }}>
                <LinearGradient useAngle angle={111} style={{
                    zIndex: -1, width: Dimensions.get("screen").width, height: 24
                }} colors={["#f3ffe7", "#dbfff6"]} />
                <View style={styles.header}>

                    <Pressable style={{
                        marginTop: ROATE(-24), width: ROATE(80), height: ROATE(80),
                        backgroundColor: "#fff", borderRadius: ROATE(40), justifyContent: "center", alignItems: "center", marginRight: ROATE(8), zIndex: 2
                    }}>
                        <Image style={styles.avatar} source={{ uri: userInfo?.avatar || "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/userAvatar/0b16eadb7decb5de63dfcefb787dbe8.jpg" }} />
                    </Pressable>
                    <Pressable style={{}}>
                        <View>
                            <Text numberOfLines={1} style={{
                                fontSize: ROATE(16), marginBottom: ROATE(4), marginTop: ROATE(8),
                                maxWidth: ROATE(170), fontWeight: "600", color: "rgba(0,0,0,0.9)"
                            }}>
                                {userInfo?.nickname || "吕粥粥 "}
                            </Text>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Image style={{ height: ROATE(18), width: ROATE(18), borderRadius: ROATE(9), marginRight: ROATE(4) }}
                                    source={{ uri: "https://t15.baidu.com/it/u=1862413376,2714316349&fm=179&app=42&size=w54&n=0&f=JPEG&fmt=auto?s=AB73609219D6C7E11CC37A56030010F4&sec=1656176400&t=c41f0bf1fbf6eed1c1bb58d5031a9166" }} />
                                <Text style={{ fontSize: ROATE(12), color: "#00000073" }}>浙江理工大学</Text>
                            </View>
                        </View>
                    </Pressable>
                    <Image style={{ marginLeft: "auto", marginTop: ROATE(8), height: ROATE(24), width: ROATE(24) }} source={require("../../assets/pictures/aboutme/to.png")} />
                </View>
                <Text numberOfLines={1} style={{
                    fontSize: ROATE(12), backgroundColor: "#fff",
                    paddingTop: ROATE(12), color: "rgba(0,0,0,0.45)", fontWeight: "400"
                }}>
                    {userInfo?.describe || "什么都没有，可能是个神秘外星人"}
                </Text>

                <View style={{ flexDirection: "row", height: ROATE(40), alignItems: "center", marginVertical: ROATE(12) }}>

                    <Pressable onPress={() => {
                        navigation.navigate("FollowsAndFans")
                    }} style={{
                        justifyContent: "center", alignItems: 'center', marginRight: ROATE(10), width: ROATE(80), height: ROATE(44),
                        borderRadius: ROATE(12),
                    }}>
                        <Text numberOfLines={1} style={{ fontSize: ROATE(14), fontWeight: "600", color: "#000" }}>{fans.length}</Text>
                        <Text style={{ fontSize: ROATE(12), color: "#000" }}>粉丝</Text>
                    </Pressable>

                    <Pressable onPress={() => {
                        navigation.navigate("FollowsAndFans")
                    }} style={{
                        justifyContent: "center", alignItems: 'center', marginRight: ROATE(10), width: ROATE(80), height: ROATE(44),
                        borderRadius: ROATE(12),
                    }}>
                        <Text numberOfLines={1} style={{ fontSize: ROATE(14), fontWeight: "600", color: "#000" }}>{follows.length}</Text>
                        <Text style={{ fontSize: ROATE(12), color: "#000" }}>关注</Text>
                    </Pressable>
                    <Pressable style={{
                        marginLeft: "auto",
                        flexDirection: "row", backgroundColor: "#0000000a", alignItems: "center",
                        width: ROATE(98), height: ROATE(40), padding: 6, paddingRight: ROATE(8)
                    }}>
                        <View style={{ width: ROATE(28), backgroundColor: "#fff", borderRadius: ROATE(3.11), marginRight: ROATE(8), justifyContent: "center", alignItems: "center", height: ROATE(28) }}>
                            <Image style={{
                                width: ROATE(21.78), height: ROATE(21.78),

                            }} source={require("../../assets/pictures/aboutme/vector.png")} />
                        </View>

                        <Text style={{ fontSize: ROATE(12), lineHeight: ROATE(12), color: "#000000b3" }}>成长橱窗</Text>
                    </Pressable>
                </View>
                <MemberBox navigation={navigation} route={route} userInfo={userInfo} />
            </View>

            <ListHeader list={[{ name: "动态", to: "收藏" }, {
                name: "收藏", to: ""
            }]}
                wrapStyle={{ backgroundColor: "#fff" }} />

        </>
    ), [fans, follows]);
    const pureList = useMemo(() => (<VirtualizedList disableVirtualization scrollEventThrottle={200} bounces={false} onScroll={judgeShow}
        style={{ zIndex: 20 }} ListHeaderComponent={pureHeader}
        data={DATA} getItem={getItem} getItemCount={getItemCount} renderItem={({ item }) => <Item item={item} />} />), []);

    return (
        <View style={styles.content}>
            <Header visible={visible} navigation={navigation} route={route} />
            {pureList}
        </View>
    )
}

{/* 粉丝和关注 */ }


const styles = StyleSheet.create({
    container: {
        backgroundColor: "##E5E5E5",
        height: Dimensions.get("screen").height
    },
    content: {
        backgroundColor: "#F5F5F5",
        position: "relative"
    },
    header: {
        height: ROATE(56),
        backgroundColor: "#FFFFFF",
        paddingLeft: ROATE(9),
        paddingRight: ROATE(-1),
        flexDirection: "row"
    },

    avatar: {
        width: ROATE(72),
        height: ROATE(72),
        borderRadius: ROATE(36),

    },
    tag: {
        height: ROATE(18),
        borderRadius: ROATE(20),
        flexDirection: "row",
        paddingLeft: ROATE(3),
        paddingRight: ROATE(3),
        paddingVertical: ROATE(1),
        marginRight: ROATE(10),
        alignItems: "center",
    },
    userName: {
        fontWeight: '600',
        fontSize: ROATE(20),
        marginRight: ROATE(12),
    },
    chooseItem: {
        margin: 18,
        flexDirection: 'row',
        marginEnd: 0,
        marginStart: 120,
        justifyContent: 'space-around'
    },
    itemInfo: {
        alignItems: 'center'
    },
    expContainer: {
        borderWidth: 2,
        borderColor: '#333333',
        backgroundColor: '#fff',
        height: 90,
        borderRadius: 18,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20
    },
    emoj: {
        position: 'absolute',
        left: 20,
        top: -12
    },
    expContent: {
        backgroundColor: '#F6F7FB', padding: 12,
        flexDirection: 'row',
        borderRadius: 22
    }
})