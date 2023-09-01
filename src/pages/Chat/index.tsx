import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
    Keyboard, View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Image, FlatList, Animated,
} from 'react-native';
import '../../server/socket';
import store from '../../store';
import io from '../../server/socket'
import { Progress, } from 'native-base';
import Sound from 'react-native-sound';
import { ROATE, ScreenWidth } from '../../assets/size';
import Header from './ChatHeader';
import Icon from '../../iconfont';

export default function Chat({ navigation, route }) {
    const user_info = store.getState().userReducer as any;
    const [chatInfo, setChatInfo] = useState([]) as any;
    let content = "";
    let height = 0;
    let y = useRef(new Animated.Value(0)).current;
    const [text, setText] = useState("");
    const flatList = useRef(FlatList) as any;
    let contentHeight = useRef(0).current;
    const [r, forceRender] = useState(false);
    useEffect(() => {


        io.on("msg", (chunk) => {
            setChatInfo((prev) => [
                ...prev, {
                    user_id: chunk.id || 0,
                    content: chunk,
                    user_name: "玩目机器人",
                    avatar: null
                }]
            );

        });

    }, []);

    Keyboard.addListener("keyboardWillShow", ({ duration, endCoordinates }) => {
        // console.log(endCoordinates);
        Animated.timing(y, {
            toValue: -endCoordinates.height,
            useNativeDriver: true,
            duration: duration- 16
        }).start(() => {
            setTimeout(() => {
                flatList.current && flatList.current.scrollToEnd();
            }, 0);
        });

    });
    Keyboard.addListener("keyboardWillHide", ({ duration }) => {
        Animated.timing(y, {
            toValue: 0,
            useNativeDriver: true,
            duration: duration - 16
        }).start(() => {
        });
    })
    useEffect(() => {
        return () => {
            Keyboard.removeAllListeners("keyboardDidShow");
            Keyboard.removeAllListeners("keyboardDidHide");
        }
    }, [])

    const edit = useCallback((text: string) => {
        setText(() => text)
        content = text;
    }, [])

    const send_message = useCallback(
        () => {
            if (!content) return;
            try {

                setChatInfo((prev) => {

                    return [
                        ...prev, {
                            user_id: user_info?.id,
                            content,
                            user_name: user_info?.nickname,
                            avatar: user_info?.avatar
                        }]
                });
                io.emit("data", {
                    user_id: user_info?.id,
                    content,
                    user_name: user_info.nickname,
                    avatar: user_info.avatar
                });
                setText(() => "")
            } catch (e) {
                console.log(e);
            }

        },


        [],
    )

    const RenderMsg = ({ item }) => {
        const isMe = item.user_id === user_info.id;
        if (item.type === "audio") {
            console.log(item.audioPath);
            const play = useCallback(() => {
                const s = new Sound(item.audioPath, '', (err) => {
                    if (err) {
                        console.log('加载音频失败')
                        return console.warn(err)
                    }
                    s.play(success => {
                        if (success) {
                            console.warn('success - 播放成功')
                            console.log('播放完毕')
                        } else {
                            console.warn('fail - 播放失败')
                            console.log('播放失败')
                        }
                    })
                });
            }, [])
            return (
                <View key={Math.random().toString(36).slice(2, 4)}
                    style={{ marginBottom: ROATE(32), padding: ROATE(12), flexDirection: user_info.id === item.user_id ? "row-reverse" : "row" }}>
                    <Image style={styles.avatar}
                        source={{ uri: item.avatar || "https://img-blog.csdnimg.cn/20201014180756754.png?x-oss-process=image/resize,m_fixed,h_64,w_64" }} />
                    <View style={{ marginLeft: 12 }}>
                        <Text>{item.user_name || "新用户"}</Text>
                        <View style={{ backgroundColor: "#f5f5aa", margin: 10, maxWidth: 280, padding: 8, borderRadius: 8, alignItems: "center" }}>
                            <View style={{ height: 12, width: 12, position: "absolute", top: 12, right: -6, transform: [{ rotate: "45deg" }], backgroundColor: "#f5f5aa" }}></View>
                            <Text onPress={play} >语音消息 {item?.currentTime} s</Text>
                            <Progress mb={4} value={75} />
                            <Progress bg="coolGray.100" _filledTrack={{
                                bg: "lime.500"
                            }} value={75} mx="4" />
                        </View>
                    </View>
                </View>
            )
        }
        const addHeight = useCallback(({ nativeEvent }) => {
            contentHeight += nativeEvent.layout.height;
            if (contentHeight > 210) {
                forceRender(() => true)
            }
            console.log(contentHeight)
        }, [])
        return (
            useMemo(() => (<View onLayout={addHeight} key={Math.random().toString(36).slice(2, 4) + Date.now()}
                style={{ flexDirection: user_info.id === item.user_id ? "row-reverse" : "row", zIndex: 0, marginBottom: ROATE(32) }}>
                <Image style={styles.avatar}
                    source={{ uri: isMe ? user_info.avatar|| "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/userAvatar/0b16eadb7decb5de63dfcefb787dbe8.jpg" : route.params.from.avatar || "https://img-blog.csdnimg.cn/20201014180756754.png?x-oss-process=image/resize,m_fixed,h_64,w_64" }} />
                <View style={{ marginLeft: ROATE(10), marginRight: ROATE(8), marginBottom: "auto", marginTop: 0 }}>
                    <View style={{
                        backgroundColor: isMe ? "#A6E284" : "#FFFFFF", borderTopLeftRadius: isMe ? ROATE(12) : 0,
                        borderTopRightRadius: isMe ? 0 : ROATE(12),
                        maxWidth: ROATE(200), padding: ROATE(12), borderRadius: ROATE(12), alignItems: "center"
                    }}>
                        <Text style={{ fontSize: ROATE(14), color: "#000", lineHeight: ROATE(18) }}>{item?.content}</Text>

                    </View>
                </View>
            </View>), [])
        )
    }

    const AnimatedList = useMemo(() => (
        <Animated.FlatList onLayout={() => {
            console.log("first")
            if (r) return;
            flatList.current && flatList.current.scrollToEnd();
        }} ref={flatList} data={chatInfo} style={{ padding: ROATE(16), zIndex: 0, transform: [{ translateY: r ? 0 : y }] }}
            renderItem={({ index, item }) => <RenderMsg key={index} item={item} />}>

        </Animated.FlatList>
    ), [chatInfo, r])

    return (
        <View style={{ ...styles.container, }}>
            <Header iOSHeight={ROATE(44)} navigation={navigation} route={route} />


            {AnimatedList}

            <Animated.View onLayout={({ nativeEvent }) => {
                const preHeight = height;
                height = nativeEvent.layout.height;
            }} style={{ ...styles.sendContainer, transform: [{ translateY: y }], }}>
                {/* <Audio setStatus={setStatus} user_info={user_info} setChatInfo={setChatInfo} status={status} /> */}
                <TextInput multiline keyboardType='default' value={text} onChangeText={edit} style={styles.TextInput} placeholder='输入消息' />
                <Icon name='dianpumianxing' onPress={send_message} />
                {/* <TouchableOpacity onPress={send_message} style={{ width: 80, justifyContent: "center", zIndex: 10, alignItems: "center", height: 38, borderRadius: 8, backgroundColor: "#202020" }}>
                    <Text style={{ color: "#fff", fontSize: 15 }}>发送</Text>
                </TouchableOpacity> */}
            </Animated.View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("screen").height,
        backgroundColor: "#f5f5f5"
    },
    sendContainer: {
        flexDirection: "row",
        minHeight: ROATE(84),
        backgroundColor: "#fff",
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 20,
        alignItems: "center",
        paddingLeft: ROATE(28),
        paddingRight: ROATE(26),
        width: ScreenWidth
    },
    TextInput: {
        textAlignVertical: "top",
        backgroundColor: "#f5f5f5",
        borderRadius: ROATE(4),
        fontSize: ROATE(12),
        paddingHorizontal: ROATE(12),
        paddingVertical: ROATE(9),
        width: ROATE(307)
    },
    avatar: {
        height: ROATE(40),
        width: ROATE(40),
        borderRadius: ROATE(20)
    }
})