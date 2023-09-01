import { Icon } from '@ant-design/react-native';
import { View, Text, Checkbox } from 'native-base';
import React, { useCallback, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ROATE } from '../../../assets/size';
import { SwipeListView } from 'react-native-swipe-list-view';
import DefineHeader from '../components/DefineHeader';



export default function LikeItem({ navigation }) {

    const [listViewData, setListData] = useState(Array(11)
        .fill("")
        .map((_, i) => ({ key: `${i}`, text: `item #${i}` })));

    const goShopPage = useCallback(() => {
        navigation.navigate("Shop");
    }, []);
    const allCheck:any[] = [];

    let selectItems: any[] = [];
    const [isAllChecked, setIsAllChecked] = useState(false);

    const RenderLikeItem = ({data}) => {

        const [isOK, setOK] = useState(false);
        // 放入全选集合中
        allCheck.push(setOK);
        
        const addItems = useCallback(()=> {
            selectItems.push(data.item);
            setOK(prev => !prev);
        }, []);

        
        return (<View style={styles.rowFront}>
            <Checkbox  style={{ marginRight: ROATE(12), }} onChange={addItems} 
               isChecked={ isOK ||isAllChecked} value="ok"/>
            <Image source={{ uri: "http://www.zhuzaibrother.cn/static/upload/2022-5-7-20-40-55-739-99447.jpg" }}
                style={{ width: ROATE(80), height: ROATE(80), borderRadius: 2, marginRight: ROATE(10) }} />
            <View style={{ flexDirection: "row" } as any}>
                <Text style={{ fontSize: ROATE(14), fontWeight: "400" }}>I am {data.item.text} in a SwipeListView</Text>
                <Text style={{ marginTop: "auto", fontSize: ROATE(20) }}>¥ 20</Text>
            </View>
        </View>)
    };

function deleteData() {
    setListData( prev => prev.filter((it: any)=> selectItems.includes(it)))
}

    return (
        <View>
            {/* 头部信息 */}
            <DefineHeader navigation={navigation} title="我的收藏" />


            {/* 内容信息 */}
            <SwipeListView style={{ padding: ROATE(16), height: ROATE(610) }}
                data={listViewData}
                renderItem={(data: any, rowMap) => (
                    <RenderLikeItem data={data}  />
                )}
                renderHiddenItem={(data, rowMap) => (
                    <View style={styles.rowBack}>

                        <TouchableOpacity style={{
                            // display: "none",
                            height: ROATE(107), width: ROATE(64),
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            justifyContent: "center", alignItems: "center"
                        }}>
                            <Text style={{ color: "#fff" }}>批量删除</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPressOut={() => {
                            setListData((prev) => prev.filter((it, index) => index !== data.index))
                        }}
                            style={{
                                height: ROATE(107), width: ROATE(64),
                                backgroundColor: "rgba(0, 0, 0, 0.7)",
                                justifyContent: "center", alignItems: "center"
                            }}>
                            <Text style={{ color: "#fff", textAlign: "center" }}>删除</Text>
                        </TouchableOpacity>

                    </View>
                )}
                leftOpenValue={75}
                rightOpenValue={-ROATE(130)}
            />

            {/* 操作底栏 */}
            <View style={{
                backgroundColor: "#fff",
                marginBottom: 0, height: ROATE(120), flexDirection: "row", padding: ROATE(22)
            }}>
                <Checkbox isChecked={ listViewData && isAllChecked} onChange={() => {
                    setIsAllChecked(prev=>!prev);
                    selectItems = listViewData;
                    allCheck.forEach((item:Function)=> {
                      
                        item(prev=>!prev)
                    })
                }} value={'false'}>
                    <Text>全选</Text></Checkbox>
                <TouchableOpacity style={{
                    marginLeft: "auto", width: ROATE(80), borderRadius: ROATE(100),
                    justifyContent: "center", alignItems: 'center',
                    height: ROATE(36), borderWidth: 1,
                    marginRight: ROATE(16)
                }}>
                    <Text>取消订单</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={deleteData}
                 style={{
                    width: ROATE(80), borderRadius: ROATE(100),
                    justifyContent: "center", alignItems: 'center',
                    height: ROATE(36), backgroundColor: "rgba(0,0,0,0.6)"
                }}>
                    <Text style={{ color: "#fff" }}>删除已选</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("screen").height,
        backgroundColor: "#f5f5f5",
    },
    header: {
        backgroundColor: "#d7d7d7"
    },
    headerLine: {
        height: ROATE(38),
        zIndex: 1
    },
    rowFront: {
        alignItems: "center",
        backgroundColor: "#fff",
        marginBottom: ROATE(16),
        height: ROATE(107),
        flexDirection: "row",
        padding: ROATE(12),
        borderRadius: ROATE(4)
    },
    rowBack: {
        overflow: "hidden",
        height: ROATE(107),
        width: ROATE(343),
        borderRadius: ROATE(4),
        flexDirection: "row",
        justifyContent: 'flex-end'
    }
})