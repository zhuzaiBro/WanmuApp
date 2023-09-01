import React, { useCallback, useEffect, useRef, useState } from "react";
import { Pressable, Image, Text, Animated, View, PanResponder } from "react-native";
import { ROATE } from "../../assets/size";
import { useGoPage } from '../../utils/RouterHelper';

function ScrolItem({ title = "", route, index = 0, length = 5, navigation,
    uri = "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" }) {

    const goPage = useGoPage(navigation, route, {
        id: Math.random().toString(12).substring(0),
        name: `吕铭洲的小号 ${index + 1}`,
        title: `Item ${index + 1}`,
        content: "最近一直吃饭睡觉打豆豆～，芜湖起飞，最近一直吃饭睡觉打豆豆～，芜湖起飞最近一直吃饭睡觉打豆豆～，芜湖起飞最近一直吃饭睡觉打豆豆～，芜湖起飞最近一直吃饭睡觉打豆豆～，芜湖起飞最近一直吃饭睡觉打豆豆～，芜湖起飞"
        , pictures: [{ uri: "http://www.discosoul.com.cn/upload/1650270484598-swai3a.jpg" }]
    }, "DynamicDetail");

   

    return (
        <Pressable onLayout={(e) => {
        }} onPress={goPage}
            style={{
                marginRight: ROATE(10),
                backgroundColor: "rgba(255,255,255,0.15)", alignItems: "center", marginLeft: ROATE(10),
                width: ROATE(200), flexDirection: "row", borderRadius: ROATE(6), height: ROATE(40),
            }}>
            <Image style={{ height: ROATE(32), width: ROATE(32), margin: ROATE(3), borderRadius: ROATE(8) }} source={{ uri }} />
            <Text numberOfLines={1} style={{ marginLeft: ROATE(5), fontSize: ROATE(14), width: ROATE(148), color: "rgba(255,255,255,0.9)", }}>#{title}</Text>

        </Pressable>
    )
}

export default function ScrollList({route, navigation, getScrollListData, duration = 20000, ListData = [] }: {
    route: any, navigation: any, getScrollListData:Function, duration: number, ListData: any[]
}) {

    let x = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        (async() => {
            await getScrollListData()
        })()
        
    }, [])
    const list = ListData.map((it, i) => (<ScrolItem navigation={navigation} route={route} title={it.title} index={i} key={i} uri={it.img}/>))
    let timer = useRef().current as any;
    let distance = useRef(0).current;

    useEffect(() => {
        setTimeout(() => {
            timer = setInterval(() => {
                distance -= 0.5;
                if (distance === ROATE(-1100)) {
                    distance = 0;
                }
                x.setValue(distance);
            }, 16)
        }, Math.random() * 2000);

        return ()=> {
            clearInterval(timer);
        }
    }, [])
    const pan = useRef(PanResponder.create({
        onMoveShouldSetPanResponder() {
            return true
        },
        onPanResponderMove(e, gs) {
            clearInterval(timer);
            const { dx } = gs;
            x.setOffset(dx);
        },
        onPanResponderRelease: (evt, gestureState) => {
            timer = setInterval(() => {
                distance -= 0.5;
                if (distance === ROATE(-1100)) {
                    distance = 0;
                }
                x.setValue(distance);
            }, 16);
        },

    })).current;


    return (
        <View
            style={{
                width: ROATE(375), overflow: "hidden",
                marginBottom: ROATE(8),
            }}>
            <Animated.View onTouchEnd={() => {
                if (!timer) {
                    timer = setInterval(() => {
                        distance -= 0.5;
                        if (distance === ROATE(-1100)) {
                            distance = 0;
                        }
                        x.setValue(distance);
                    }, 16)
                }

            }} style={{
                flexDirection: "row", width: ROATE(2200),
                transform: [{ translateX: x }]
            }} {...pan.panHandlers}>
                {list}{list}
            </Animated.View>


        </View>
    )
}
