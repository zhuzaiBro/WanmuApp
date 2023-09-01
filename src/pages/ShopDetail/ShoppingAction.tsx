import React, { useEffect, useState } from 'react';
import { Actionsheet, Box, ScrollView, StatusBar } from 'native-base';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ROATE } from '../../assets/size';
import { Dimensions } from 'react-native';
import Icon from '../../iconfont';

function SelecrtTag({ title, list = [{ title: "原味" }, { title: "原味" }, { title: "原味" }, { title: "原味" }, { title: "原味" }, { title: "原味" }
    , { title: "原味" }, { title: "原味" }] }) {

    const [current, setCurrent] = useState(0);

    function Tag({ item, current, index }) {
        const flag = current === index
        return (
            <Pressable onPress={() => setCurrent(() => index)}
                style={{
                    backgroundColor: flag ? "transparent" : "#f5f5f5", borderRadius: ROATE(4), paddingHorizontal: ROATE(12), justifyContent: "center", alignItems: "center",
                    marginRight: ROATE(12), paddingVertical: ROATE(3), height: flag ? ROATE(26) : ROATE(28), borderWidth: ROATE(2), borderColor: flag? "#A6E284": "#f5f5f5"
                }}>
                <Text style={{ fontSize: ROATE(14), color: "rgba(0,0,0,0.9)", fontWeight: "400" }}>{item.title}</Text>
            </Pressable>)
    }
    const tags = list.map((it, i) => {
        return <Tag index={i} current={current} key={i} item={it} />
    })
    return (<View style={{ paddingHorizontal: ROATE(16), marginBottom: ROATE(24) }}>
        <Text style={{ fontSize: ROATE(16), color: "rgba(0,0,0,0.9)", marginBottom: ROATE(12) }}>{title}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {tags}
        </ScrollView>

    </View>)
}


export function Counter({ num, callback } : {num: number, callback: React.Dispatch<React.SetStateAction<number>>}) {

    useEffect(() => {
        callback(prev => {
            if (num) {
                return num;
            }
            return prev;
        }
        )
    }, [])

    return (
    <View style={{flexDirection: "row", alignItems: "center"}}>
        <TouchableOpacity onPress={() =>
            callback(prev => {
                if (prev === 1) return prev;
                return prev - 1;
            })}
            style={{
                marginLeft: "auto", width: ROATE(20), height: ROATE(20), borderRadius: ROATE(10),
                borderWidth: ROATE(3), borderColor: "rgba(0,0,0,0.45)", justifyContent: 'center', alignItems: "center"
            }}>
                <Icon name='jian' />
        </TouchableOpacity>
        <Text style={{ fontSize: ROATE(16), color: "rgba(0,0,0,0.9)", marginHorizontal: ROATE(14) }}>
            {num}
        </Text>
        <TouchableOpacity onPress={() => callback(prev => prev + 1)}
            style={{
                width: ROATE(20), height: ROATE(20), borderRadius: ROATE(10),
                backgroundColor: "#A6E284", justifyContent: 'center', alignItems: "center"
            }}>
             <Icon name='jia'/>
        </TouchableOpacity>
    </View>

    )
}

export default function ShoppingAction({ isOpen, onClose, navigation }) {
    const [num, setNum] = useState(1);
    return (
        <Actionsheet hideDragIndicator isOpen={isOpen} onClose={onClose}>
            <StatusBar backgroundColor="rgba(0,0,0,0.3)" />
            <Actionsheet.Content height={ROATE(629)} backgroundColor="#fff" p={0}  >
                <Box height={ROATE(629)} w={Dimensions.get("screen").width} justifyContent="flex-start">
                    <ScrollView height={ROATE(201)} horizontal showsHorizontalScrollIndicator={false}>
                        <Image style={styles.img} source={{ uri: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/22.png" }} />
                        <Image style={styles.img} source={{ uri: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/22.png" }} />
                        <Image style={styles.img} source={{ uri: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/22.png" }} />
                    </ScrollView>
                    <SelecrtTag title="口味" />

                    <SelecrtTag title="规格" />
                    <View style={{ height: ROATE(188), marginTop: "auto", marginBottom: 0, borderTopWidth: ROATE(2), borderTopColor: "#E0E0E0" }}>
                        <View style={{ flexDirection: "row", paddingHorizontal: ROATE(16), alignItems: "flex-end", paddingVertical: ROATE(15) }}>
                            <Text style={{ fontSize: ROATE(16), fontWeight: "400", color: "rgba(0,0,0,0.95)" }}>￥</Text>
                            <Text style={{ fontSize: ROATE(24), fontWeight: "600", color: "rgba(0,0,0,0.95)" }}>
                                30
                            </Text>
                            <View style={{marginLeft: "auto"}}>
                                <Counter callback={setNum} num={num} />
                            </View>
                            
                        </View>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("BuyingPage", {});
                            onClose();
                        }}
                            style={{
                                marginLeft: "auto", width: ROATE(192), height: ROATE(44), marginRight: "auto", borderRadius: ROATE(10),
                                borderWidth: ROATE(3), padding: 0, marginTop: ROATE(16), backgroundColor: "rgba(0,0,0,0.9)", justifyContent: 'center', alignItems: "center"
                            }}>
                            <Text style={{
                                color: "rgba(255,255,255, 0.9)", fontSize: ROATE(16), fontStyle: "italic",
                                padding: 0
                            }}>确认购买</Text>
                        </TouchableOpacity>

                    </View>
                </Box>
            </Actionsheet.Content>
        </Actionsheet>
    )
}

const styles = StyleSheet.create({
    img: {
        width: ROATE(250),
        height: ROATE(201),
        marginRight: ROATE(12)
    }
})