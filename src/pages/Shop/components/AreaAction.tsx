import { Actionsheet } from 'native-base'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View, Text, ScrollView, Pressable, FlatList, StyleSheet, Animated } from 'react-native';
import { ROATE } from '../../../assets/size';
import Icon from '../../../iconfont';
import Swiper from 'react-native-swiper';

export default function AreaAction({ onClose, callback, isOpen }) {

    const [currentStep, setCurrentStep] = useState(0);
    const [city, setCity] = useState([]) as any[];
    const [xian, setXian] = useState([]) as any[];
    const [province, setProvince] = useState([]) as any[];
    // const [location, staLocation] = useState("");
    let translatex = useRef(new Animated.Value(375)).current;
    let c: any[];
    let x: any[];
     const closeWindow = () => {
        onClose();
        setCurrentStep(() => 0);
        setTimeout(() => {
            translatex.setValue(ROATE(375));
        }, 200);
        
    }
    function StepItem({ step = "", index }) {
        return (
            <Pressable style={{ flexDirection: "row", paddingHorizontal: ROATE(16) }}>
                <Text style={{ color: currentStep === index ? "#64a23d" : "", marginBottom: ROATE(16) }}>{step}</Text>
                <Icon name='fanghuijiantou' style={{ marginLeft: "auto" }} />
            </Pressable>
        )
    }

    c = require("../../../utils/city.json");
    x = require("../../../utils/xian.json");
    // console.log(x)
    function ProvinceItem({ level = 1, ParentnodeID = "", province, AreaID, isFirst = false, }) {

        const change = useCallback(() => {
            setCurrentStep(prev => {
                if (level == 1) {
                    setCity(() => c.filter(it => it.ParentnodeID === AreaID));
                    callback(prev => {
                        if(prev) {
                            return province;
                        }
                        return prev + ` ${province}`
                    });
                    Animated.timing(translatex, {
                        toValue: 0,
                        useNativeDriver: true
                    }).start();
                    return prev + 1;
                    // console.log(city);
                } else if (level == 2) {
                    // console.log(x, x.filter(it => it.ParentnodeID === AreaID), 2222);
                    setXian(() => x.filter(it => it.ParentnodeID === AreaID));
                    Animated.timing(translatex, {
                        toValue: ROATE(-375),
                        useNativeDriver: true
                    }).start();
                } else {
                    // callback(() => province);
                    closeWindow();
                }
                callback(prev => prev + ` ${province}`);
                return prev + 1
            });

        }, [currentStep, city, xian]);
        return (
            <Pressable onPress={change} style={{
                height: ROATE(38), alignItems: "center",
                flexDirection: "row", paddingLeft: ROATE(24), paddingRight: ROATE(24)
            }}>
                <View style={{ width: 1, height: "100%", backgroundColor: "#8c8c8c", }}>
                    <View style={{ width: ROATE(5), height: ROATE(5), borderRadius: ROATE(2), backgroundColor: "#000", position: "absolute", bottom: 0, left: ROATE(-1) }} />
                    <View style={{
                        width: ROATE(5), height: ROATE(5), borderRadius: ROATE(2), backgroundColor: "#000", position: "absolute", top: 0,
                        display: isFirst ? "flex" : "none", left: ROATE(-1)
                    }} />
                </View>
                <Text style={{ marginLeft: ROATE(22) }}>{province}</Text>

            </Pressable>
        )
    }
   
    useEffect(() => {
        setProvince(() => require("../../../utils/province.json"));
    }, []);

    const arr = [
        <View>
            <Text style={{ width: ROATE(375), margin: ROATE(10), fontSize: ROATE(16), marginLeft: ROATE(40) }}>选择城市</Text>
            <View>
                <Text style={{ fontSize: ROATE(14), fontWeight: "500", color: "#000000e6", marginBottom: ROATE(14) }}>常用城市</Text>
                <View style={{ flexDirection: 'row', marginBottom: ROATE(24) }}>

                    <Pressable style={styles.often}>
                        <Text>杭州</Text>
                    </Pressable>
                    <Pressable style={styles.often}>
                        <Text>上海</Text>
                    </Pressable>
                </View>

            </View>
            <FlatList alwaysBounceVertical style={{ width: ROATE(375), }} data={province} renderItem={({ index, item }) => (<ProvinceItem AreaID={item.AreaID} province={item.AreaName} />)} />
        </View>,
        <View>
            <FlatList alwaysBounceVertical style={{ width: ROATE(375), height: ROATE(352) }} data={city} renderItem={({ index, item }) => (<ProvinceItem AreaID={item.AreaID} province={item.AreaName} level={2} />)} />
        </View>,
        <View>
            { xian.length !=0 ? <FlatList alwaysBounceVertical style={{ width: ROATE(375), height: ROATE(352) }} data={xian} renderItem={({ index, item }) => (<ProvinceItem AreaID={item.AreaID} province={item.AreaName} level={3} />)} />: <Text style={{ width: ROATE(375), height: ROATE(352) }}>暂无数据，请输入详细地址</Text>}
        </View>
    ]


    return (
        <Actionsheet isOpen={isOpen} onClose={closeWindow} hideDragIndicator>
            <Actionsheet.Content justifyContent={"flex-start"}>
                <View style={{
                    flexDirection: "row", width: ROATE(375),
                    justifyContent: "center", alignItems: "center"
                }}>

                    <Text style={{ textAlign: 'center' }}>请选择所在地区</Text>
                </View>
                <View style={{ width: ROATE(375), }}>
                    <StepItem index={0} step="请选择省" />
                    <StepItem index={1} step="请选择市" />
                    <StepItem index={2} step="请选择县区" />
                    {/* <StepItem index={3} step="请选择街道" /> */}


                </View>
                <View style={{ height: ROATE(8), backgroundColor: "#f5f5f5", width: ROATE(375) }} />


                {/* <Swiper loop={false} pagingEnabled={false} scrollEnabled={false} onIndexChanged={() => setCurrentStep(prev => prev)} activeDot={<></>} dot={<></>} index={currentStep} containerStyle={{}}>

                        {arr}
                    </Swiper> */}
                <Animated.View style={{ width: ROATE(375 * 3), transform: [{ translateX: translatex }], height: ROATE(352), justifyContent: "flex-start", flexDirection: "row", }}>
                    {/* {arr} */}
                    <View style={{ width: ROATE(375) }}>
                        <Text style={{ width: ROATE(375), margin: ROATE(10), fontSize: ROATE(16), marginLeft: ROATE(40) }}>选择城市</Text>
                        <View>
                            <Text style={{ fontSize: ROATE(14), fontWeight: "500", color: "#000000e6", marginBottom: ROATE(14) }}>常用城市</Text>
                            <View style={{ flexDirection: 'row', marginBottom: ROATE(24) }}>

                                <Pressable style={styles.often}>
                                    <Text>杭州</Text>
                                </Pressable>
                                <Pressable style={styles.often}>
                                    <Text>上海</Text>
                                </Pressable>
                            </View>

                        </View>
                        <FlatList alwaysBounceVertical style={{ width: ROATE(375), }} data={province} renderItem={({ index, item }) => (<ProvinceItem AreaID={item.AreaID} province={item.AreaName} />)} />


                    </View>

                    {/* <View> */}
                    <FlatList alwaysBounceVertical style={{ width: ROATE(375), height: ROATE(352) }} data={city} renderItem={({ index, item }) => (<ProvinceItem AreaID={item.AreaID} province={item.AreaName} level={2} />)} />
                    <FlatList alwaysBounceVertical style={{ width: ROATE(375), height: ROATE(352) }} data={xian} renderItem={({ index, item }) => (<ProvinceItem AreaID={item.AreaID} province={item.AreaName} level={3} />)} />
                    {/* </View> */}

                </Animated.View>


            </Actionsheet.Content>
        </Actionsheet>
    )
}

const styles = StyleSheet.create({
    often: {
        backgroundColor: "#0000000a",
        width: ROATE(56),
        height: ROATE(24),
        borderRadius: ROATE(42),
        justifyContent: "center",
        alignItems: "center",
        marginLeft: ROATE(16)
    }
})