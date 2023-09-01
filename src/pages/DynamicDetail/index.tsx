import { } from 'native-base'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { StyleSheet, ScrollView, View, Text, Image, Dimensions, TextInput, TouchableOpacity, Animated } from 'react-native';
import { Button, Icon } from '@ant-design/react-native'
import { ROATE } from '../../assets/size';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import Comment from '../../components/Comment/comment';
import { Gctx } from '../../context';
import {useBackTo} from '../../utils/RouterHelper';

function Banner({ pictures }) {
    const [current, setCurrent] = useState(1);

    const images = pictures.map((it) => <Image style={{ height: ROATE(356) }} source={{ uri: it.uri }} />)

    return (
        <View style={{ marginLeft: "auto", marginRight: "auto", width: ROATE(343), }}>
            <Swiper dot={<></>} activeDot={<></>} containerStyle={{ width: ROATE(343), overflow: "hidden", borderRadius: ROATE(16), height: ROATE(280) }}
            >
                {images}{images}
            </Swiper>
            <View style={{
                backgroundColor: "rgba(0,0,0,0.45)", height: ROATE(20), borderRadius: ROATE(3),
                position: "absolute", bottom: ROATE(17.3), right: ROATE(17.3), width: ROATE(38)
            }}>
                <Text style={{
                    fontSize: ROATE(12), fontWeight: "400", textAlign: "center", lineHeight: ROATE(20),
                    color: "rgba(255,255,255, 0.6)"
                }}>{current}/{pictures.length}</Text>
            </View>

        </View>

    )
}

export default function DynamicDetail({ route, navigation }) {

    const ctx = useContext(Gctx);
    useEffect(() => {
        Animated.timing(ctx.x, {
            toValue: 0,
            useNativeDriver: true,
            duration: 200
        }).start();
        console.log(route);

    }, []);


    return (
        <Animated.View style={{ height: Dimensions.get("screen").height - ROATE(100), }}>

            <ScrollView style={styles.container}>
                {/* 轮博图 */}
                <Banner pictures={route.params.pictures} />
                <View style={{ flexDirection: "row", marginTop: ROATE(16), paddingHorizontal: ROATE(17) }}>
                    <View style={{ height: ROATE(50), width: ROATE(187), flexDirection: "row", borderBottomLeftRadius: ROATE(12), borderTopLeftRadius: ROATE(12), overflow: "hidden" }}>
                        <Image resizeMode='cover' style={{ width: ROATE(56), height: ROATE(50) }} source={{ uri: "http://www.zhuzaibrother.cn/static/upload/2022-5-7-20-40-55-739-99447.jpg" }} />
                        <View style={{ backgroundColor: "rgba(0,0,0,0.04)", paddingHorizontal: ROATE(12), width: ROATE(131) }}>
                            <Text style={{ fontSize: ROATE(15.1), marginVertical: ROATE(4), fontWeight: "400" }}>
                                CHANEL护手霜
                            </Text>
                            <Text style={{ fontSize: ROATE(14), fontWeight: "600" }}>
                                ¥ 315
                            </Text>
                        </View>
                    </View>
                </View>


                <Text  style={{ marginHorizontal: ROATE(17), lineHeight: ROATE(20), marginTop: ROATE(16), }}>
                    {route.params.content}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ padding: ROATE(3), paddingHorizontal: ROATE(6), borderWidth: 1, borderRadius: ROATE(12), marginHorizontal: ROATE(17), marginTop: ROATE(15), borderColor: "rgba(0,0,0,0.3)" }}>
                        <Text>
                            # {route.params.title}
                        </Text>
                    </View>
                </View>
                <Text style={{
                    marginTop: ROATE(12), marginRight: ROATE(16), marginLeft: ROATE(16), fontSize: ROATE(12), fontWeight: "400",
                    lineHeight: ROATE(22), color: "rgba(0,0,0,0.45)", marginBottom: ROATE(16)
                }}>06-25</Text>

                <View style={{ padding: ROATE(16), }}>
                    <Text style={{ color: "rgba(0,0,0,0.9)", fontSize: ROATE(12), lineHeight: ROATE(22) }}>评论 2</Text>
                    <View style={{ marginBottom: ROATE(88) }}>
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />

                    </View>

                </View>

            </ScrollView>

            <View style={{
                backgroundColor: "#fff", borderTopWidth: ROATE(1.2), borderColor: "#ebebeb", position: "absolute", bottom: 0, left: 0,
                paddingTop: ROATE(25), paddingHorizontal: ROATE(15), height: ROATE(78), flexDirection: "row", width: Dimensions.get("screen").width
            }}>
                <View style={{
                    backgroundColor: "#f6f6f6", width: ROATE(157), flexDirection: "row",
                    alignItems: "center", height: ROATE(33), borderRadius: ROATE(30),
                }}>
                    <Icon style={{ marginLeft: ROATE(18) }} name='edit' />
                    <TextInput placeholder='说点什么' />
                </View>
                <View style={{ flexDirection: "row", marginTop: ROATE(6), marginLeft: "auto" }}>
                    <Icon name='like' />
                    <Text>4</Text>
                </View>

            </View>
        </Animated.View>







    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("screen").height,
        backgroundColor: "#fff",
        flexGrow: 1,
    },
    header: {
        flexDirection: "row",
        paddingBottom: ROATE(10),
        paddingHorizontal: ROATE(16),
        alignItems: "center",
        backgroundColor: "#fff",
        height: ROATE(124),
        width: ROATE(375),
        paddingTop: ROATE(44),
    },
    avatar: {
        marginLeft: ROATE(11),
        height: ROATE(51),
        width: ROATE(52),
        borderRadius: ROATE(25.5)
    }
})