import React, { LegacyRef, memo, PureComponent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { StyleSheet, View, Image, Text, Dimensions, Modal, Pressable, Animated, PanResponder } from 'react-native';
import { ROATE, ScreenHeight } from '../../assets/size';
import ImageViewer from 'react-native-image-zoom-viewer';
import Icon from '../../iconfont';
import ScrollList from './scrollList';
import { useGoPage } from '../../utils/RouterHelper';
import DynamicList from './DynamicList';
import Header from './ListHeader';


export interface IState {
    navigation: any;
    route: any;
    imgViewList: any[];
    recommand_dynamics: any[];
    scrollListData: any[];
}
export interface IDispatch {
    setImgViewList: any;
    getItem: Function;
    getScrollListData: Function;
}
interface IProps {
    navigation: any;
    route: any;
    imgViewList: any[];
    setImgViewList?: any;
    recommand_dynamics: any[];
    getItem: Function;
    scrollListData: any[];
    getScrollListData: Function
}

export default function BlackHole({ navigation, route, imgViewList, getItem, setImgViewList, recommand_dynamics, scrollListData, getScrollListData }: IProps) {

    const [isOpen, setIsOpen] = useState(false);
    const y = useRef(new Animated.Value(0)).current;
    const [tip, setTip] = useState('下拉刷新');
   
    function Item({ item, index }) {
        const searchImg = () => {
            setIsOpen(() => {
                setImgViewList(() =>
                    [{ url: item?.pictures[0].uri|| "" }, { url: item?.pictures[0].uri|| "" }]);

                return true;
            })
        }
        const flag = index === 0;
        const goPage = useGoPage(navigation, route, item, "DynamicDetail");
        const visitTa = useGoPage(navigation, route, item, "OtherUserPage")

        return (<Pressable onPress={goPage}
            style={{ flexDirection: "row", padding: ROATE(17), borderTopRightRadius: flag ? ROATE(12) : 0, borderTopLeftRadius: flag ? ROATE(12) : 0, backgroundColor: "#fff" }
            }>
                {/* 头像点击进入个人主页 */}
                <Pressable onPress={visitTa}>
                    <Image style={{ height: ROATE(32), marginRight: ROATE(8.88), width: ROATE(32), borderRadius: ROATE(16) }}
                source={{ uri: "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" }} />
                </Pressable>
            
            <View style={{ width: ROATE(297) }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    {/* 点击名称进入个人主页 */}
                    <Pressable onPress={visitTa}>
                        <Text numberOfLines={1} style={{ fontWeight: "400", width: ROATE(260), fontSize: ROATE(14) }}>{item?.name || "daas"}</Text>
                    </Pressable>
                    
                    <Icon name='gengduo'/>
                </View>

                {/* 图片 */}
                <Pressable onPress={(e) => {
                    e.stopPropagation();
                    searchImg()
                }
                } style={{ flexDirection: "row", marginTop: ROATE(9) }}>
                    <Image style={{ height: ROATE(97), borderRadius: ROATE(4), marginRight: ROATE(4), width: ROATE(97) }} source={{ uri: item?.pictures[0].uri || "" }} />
                    <Image style={{ height: ROATE(97), borderRadius: ROATE(4), marginRight: ROATE(4), width: ROATE(97) }} source={{ uri: item?.pictures[0].uri || "" }} />
                    <Image style={{ height: ROATE(97), borderRadius: ROATE(4), width: ROATE(97) }} source={{ uri: item?.pictures[0].uri || "" }} />
                    <View style={{ position: "absolute", flexDirection: "row", bottom: ROATE(5), backgroundColor: "rgba(0,0,0,0.45)", right: ROATE(21) }}>
                        <Icon color='#fff' name='tousu' size={ROATE(12)} />
                        <Text style={{ fontSize: ROATE(10), color: "#fff" }}>9</Text>
                    </View>
                </Pressable>

                <Text style={{ width: ROATE(300), fontSize: ROATE(14), color: "#000000e6", lineHeight: ROATE(22), fontWeight: "400", marginTop: ROATE(12) }}>{item?.content}</Text>
                <View style={{ flexDirection: "row", }}>
                    <Text style={{
                        borderWidth: ROATE(1.2), overflow: "hidden", marginTop: ROATE(20), color: "#000000b3", fontSize: ROATE(12),
                        height: ROATE(24),
                        marginBottom: ROATE(23), borderColor: "#00000073", borderRadius: ROATE(12), padding: ROATE(8), paddingTop: ROATE(3), paddingBottom: ROATE(3)
                    }}>
                        # {item?.title}</Text>
                </View>
                <View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={{ height: ROATE(22), width: ROATE(22), borderRadius: ROATE(11), marginRight: ROATE(-8) }} source={{ uri: item?.pictures[0].uri|| "" }} />
                        <Image style={{ height: ROATE(22), borderRadius: ROATE(11), width: ROATE(22) }} source={{ uri: item?.pictures[0].uri || "" }} />
                        <Text style={{ marginLeft: ROATE(8), color: "#00000073", fontSize: ROATE(12), lineHeight: ROATE(22) }}>04-02评论</Text>
                        <View style={{ flexDirection: "row", marginLeft: "auto", marginRight: ROATE(21), alignItems: "center" }}>
                            <Icon name='pinglun' size={ROATE(20)}/>
                            <Text style={{
                                marginLeft: ROATE(5),
                                fontSize: ROATE(12), color: "#00000073"
                            }}>2</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Icon size={ROATE(20)} name='dianzan-weidianji(1)' />
                            <Text style={{
                                marginLeft: ROATE(5),
                                fontSize: ROATE(12), color: "#00000073"
                            }}>2</Text>
                        </View>
                    </View>
                </View>
                {/* 评论框 */}
                <View style={{
                    height: ROATE(36), paddingHorizontal: ROATE(8), paddingVertical: ROATE(9), marginTop: ROATE(10), flexDirection: "row",
                    width: ROATE(301), borderRadius: ROATE(4), overflow: "hidden", backgroundColor: "#0000000a"
                }}>
                    <Text style={{ lineHeight: ROATE(22), fontWeight: "500", color: "#000000e6", fontSize: ROATE(12) }}>
                        吕铭洲：
                    </Text>
                    <Text style={{ fontSize: ROATE(12), color: "#000000b3", lineHeight: ROATE(22) }}>
                        可以啊
                    </Text>
                </View>


            </View>
        </Pressable >
        );

    }
     
    return (
        <View style={{ backgroundColor: "#fff",  position: "relative", height: ScreenHeight }}>
            <View style={{ height: ROATE(88), paddingTop: ROATE(44), justifyContent: "space-between", paddingVertical: ROATE(14), paddingHorizontal: ROATE(16), flexDirection: "row", backgroundColor: "#03151f", alignItems: "center",  }}>
                <Header />
                <Pressable>
                    <Icon name='sousuo(1)(1)'/>
                </Pressable>
                <Icon style={{position: "absolute",   zIndex:10,  }} name='beijin' size={ROATE(375)}/>
            </View>
            <View style={{
                height: ROATE(46), top: ROATE(88), justifyContent: "center", alignItems: "center", zIndex: -1, width: ROATE(375), backgroundColor:"#03151f",
                left: 0, position: "absolute",
            }}>
                <Text  style={{ color: "#fff", textAlign: "center" }}>{tip}</Text>
            </View>
            {/* 内容区域 */}
            <Animated.View style={{ transform: [{ translateY: y }] }}>

                <DynamicList tip={setTip} y={y} onTouchEnd={() => {
                    setTip(() => "正在刷新")
                    Animated.timing(y, {
                        toValue: 0,
                        useNativeDriver: true,
                        duration: 350
                    }).start(({finished}) => {
                        finished && setTip("下拉刷新")
                    });
                }} stickTopComp={() =>
                    <View style={styles.advertise}>
                        <ScrollList getScrollListData={getScrollListData} ListData={scrollListData} route={route} navigation={navigation} duration={30000}/>
                        <ScrollList  getScrollListData={getScrollListData} ListData={scrollListData} route={route} navigation={navigation} duration={20000} />
                    </View>
                }
                    DATA={recommand_dynamics} getItem={getItem}  RenderItem={({item, index}) => <Item index={index} item={item}/>} />
            </Animated.View>
            <Modal visible={isOpen} transparent={true}>
                <ImageViewer onClick={() => {
                    setIsOpen(() => false);
                }} imageUrls={imgViewList} />
            </Modal>
            <Pressable onPress={() => {
                navigation.navigate("Release")
            }} style={{
                position: "absolute", justifyContent: "center", alignItems: "center", right: ROATE(18), bottom: ROATE(99), borderRadius: ROATE(22), height: ROATE(44), width: ROATE(44), zIndex: 1,
            }}>
                <Icon size={ROATE(44)} name='tianji(1)' />
            </Pressable>
            
        </View>

    )
}

const styles = StyleSheet.create({
    headerFont: {
        fontSize: ROATE(16),
        marginLeft: ROATE(9),
        marginRight: ROATE(9),
        padding: ROATE(8)
    },
    advertise: {
        padding: 0,
        backgroundColor: "#03151f",
        height: ROATE(112),
        paddingLeft: 0,
        paddingBottom: ROATE(18),
    },
    item: {
        backgroundColor: '#f9c2ff',
        height: 150,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
    },
})