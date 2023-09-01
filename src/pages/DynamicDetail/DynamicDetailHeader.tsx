import { Box, useToast } from 'native-base';
import React, { useCallback, useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, Animated } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { Gctx } from '../../context';
import { ROATE } from '../../assets/size';
import {useBackTo} from '../../utils/RouterHelper';
import Icon from '../../iconfont';


export default function Header({ navigation, route }) {
    const ctx = useContext(Gctx);
    const [isLike, setLike] = useState(false);
    const toast = useToast();
    const [isShowing, setShow] = useState(false);
    const goback = useBackTo(navigation, route, null);

    const showMessage = useCallback((isLike: boolean) => {
        isLike ? toast.show({
            render: () => {
                return <Box bgColor="#404040" alignItems="center" justifyContent="center" p={ROATE(8)} borderRadius={ROATE(6)}>
                    <Icon color='#f5f5f5' size={ROATE(22)} name='chengong' />
                    <Text style={{fontSize: ROATE(13), color: "#f5f5f5"}}>关注成功</Text>
                </Box>
            }
        }) : toast.show({
            description: "取关成功",
            duration: 1200
        })
    }, []);

    return (
        <Animated.View style={{ ...styles.header,  }}>
            <Pressable onPress={goback} >
                 <Icon name='fanhuianniu-zuo' size={ROATE(24)}/>
            </Pressable>
           
            <Image style={styles.avatar} source={{ uri: route.params?.avatar || "http://www.zhuzaibrother.cn/static/upload/2022-4-20-0-49-8-274-99414.jpg" }} />
            <Text style={{ fontSize:ROATE(14), color: "rgba(0,0,0,0.7)", fontWeight: "400"}}>吕铭洲</Text>
            <Pressable onPress={() => {
                if(isShowing) return;
                setLike(prev => {
                setShow(()=> true);
                setTimeout(() => {
                    setShow (()=> false);
                }, 1200);
                showMessage(prev)
                return !prev
            })}
            } style={{
                overflow: "hidden",
                marginLeft: "auto", alignItems: "center", justifyContent: "center", borderRadius: ROATE(90),
                marginRight: ROATE(17), width: ROATE(67), height: ROATE(28), backgroundColor: "transparent"
            }}>
                <LinearGradient colors={["#f9fd80", "#73e5bb"]} style={{
                    height: ROATE(28), width: ROATE(67),
                    position: "absolute", top: 0, left: 0,
                }} />
                <Text style={{ fontSize: ROATE(14) }}>
                    {isLike ? "关注" : "取关"}
                </Text>

            </Pressable>
            <Pressable>
                <Icon name='gengduo' size={ROATE(24)}/>
            </Pressable>
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    container: {
        // padding: RAOTE()
        backgroundColor: "#fff",
        flexGrow: 1
    },
    header: {
        flexDirection: "row",
        paddingBottom: ROATE(10),
        paddingHorizontal: ROATE(16),
        alignItems: "center",
        backgroundColor: "#fff",
        height: ROATE(100),
        width: ROATE(375),
        paddingTop: ROATE(44),
    },
    avatar: {
        marginLeft: ROATE(12),
        marginRight: ROATE(8),
        height: ROATE(32),
        width: ROATE(32),
        borderRadius: ROATE(16)
    }
})