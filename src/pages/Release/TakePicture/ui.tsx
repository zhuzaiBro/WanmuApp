import React, { useEffect, useRef, useState } from 'react'
import { Pressable, StyleSheet, View, Image, Text, ImageBackground } from 'react-native';
import { RNCamera, TakePictureOptions, RecordOptions } from 'react-native-camera'
import { ROATE, ScreenHeight } from '../../../assets/size';
import Icon from '../../../iconfont';
import CameraRoll from '@react-native-community/cameraroll';
import VideoComp from '../../../components/VideoComp';

export interface IState {
    navigation: any;
    route: any;
    imgList: any[];
    video: any;
}
export interface IDispatch {
    addImgs: Function;
    setVideo: Function;
}
interface IProps {
    navigation: any;
    route: any;
    imgList: any[];
    video: any;
    addImgs: Function;
    setVideo: Function;
}


export default function Ui({ navigation, route, imgList, addImgs, setVideo, video }: IProps) {
    let camera;
    let o = useRef({}).current;
    const [first, setFirst] = useState("");
    //控制摄像头前后
    const [isFront, setIsFront] = useState("back") as any;
    const [take, setTake] = useState("");
    useEffect(() => {
        console.log(camera)
        CameraRoll.getPhotos({
            first: 1,
        }).then(r => {
            console.log(r.edges[0].node.image)
            setFirst(() => r.edges[0].node.image.uri)
        })
    }, [first]);
    const takePicture = () => {
        if (camera) {
            const options: TakePictureOptions = {
                base64: true,
                doNotSave: false,
                quality: 1
            }
            camera.takePictureAsync(options).then(r => {
                console.log(first)
                o = r;
                setTake(r.uri);
            });
        }
    }
    const takeVideoStart = () => {
        if (camera) {
            const options: RecordOptions = {
                quality: "1080p",
                maxDuration: 60 * 1000,
            };
            camera.recordAsync(options).then(r => {
                setVideo(r);
                console.log(r, 90990)
            })
        }
    }
    const confirm = () => {
        if (take) {
            CameraRoll.save(take, {
                album: "YoungKrApp",
                type: "photo"
            }).then(r => {
                addImgs(imgList, [{ ...o, uri: r }])
                navigation.goBack();
            })
        } else {
            CameraRoll.save(video.uri, {
                album: "YoungKrApp",
                type: "video"
            }).then(r => {
                navigation.goBack()
            })
        }

    }
    return (
        <View style={styles.container}>
            <View style={{ height: ROATE(88), paddingTop: ROATE(44) }}>
                <Pressable onPress={() => {
                    navigation.goBack();
                }} style={{ display: take || video.uri ? "none" : "flex", position: "absolute", left: ROATE(16), bottom: ROATE(16) }}>
                    <Icon name="guanbi-baise" size={ROATE(24)} />
                </Pressable>
                <Pressable onPress={() => {
                    setTake(() => "")
                    setVideo({})
                }} style={{ display: take || video.uri ? "flex" : "none", position: "absolute", left: ROATE(16), bottom: ROATE(16) }}>
                    <Icon name='cehui' size={ROATE(24)} />
                </Pressable>
            </View>
            <RNCamera type={isFront} ref={ref => camera = ref} style={{ height: ROATE(660), display: take || video.uri ? "none" : "flex" }} >
                <View style={{ flexDirection: "row", marginTop: "auto", height: ROATE(70), }}>
                    {/* 打开相册 */}
                    <Pressable onPress={() => {
                        navigation.navigate("Picker");
                    }} style={{ height: ROATE(50), width: ROATE(50), position: "absolute", left: ROATE(16), bottom: ROATE(32) }}>
                        <ImageBackground blurRadius={ROATE(3)} style={{ height: ROATE(50), width: ROATE(50), justifyContent: "center", alignItems: "center", }} source={{ uri: first }} >
                            <Icon size={ROATE(24)} name='xiangxiajiantou-baise' />
                        </ImageBackground>
                    </Pressable>
                    {/* 拍摄按钮 */}
                    <Pressable onPressOut={() => {
                        if (take || !camera) return;
                        camera.stopRecording();
                    }} onLongPress={takeVideoStart} onPress={takePicture} style={{ height: ROATE(70), marginLeft: "auto", marginRight: "auto", width: ROATE(70), borderRadius: ROATE(35), borderWidth: ROATE(10), borderColor: "#ffffff73" }}>
                        <View style={{ height: ROATE(50), width: ROATE(50), borderRadius: ROATE(25), backgroundColor: "#fff" }} />
                    </Pressable>
                    {/* 开启前摄像头 */}
                    <Pressable onPress={() => {
                        setIsFront(prev => prev === "back" ? "front" : "back")
                    }} style={{ position: "absolute", right: ROATE(16), bottom: ROATE(32), }}>
                        <Icon name='xuanzhuang' size={ROATE(36)} />
                    </Pressable>
                </View>
            </RNCamera>
            <ImageBackground style={{ height: ROATE(660), width: ROATE(375), display: take ? "flex" : "none" }} source={{ uri: take }} >

            </ImageBackground>

            <VideoComp styles={{ content: { height: ROATE(660) }, ctrl_area: { bottom: ROATE(20), left: 0, zIndex: 2 }, video: { height: ROATE(660), display: video.uri ? "flex" : "none" } }} uri={video.uri} />


            <Text style={{ textAlign: "center", marginTop: ROATE(4), display: take || video?.uri ? "none" : "flex", color: "#ffffff73" }}>
                轻触拍摄，按住摄影
            </Text>
            <Pressable onPress={confirm} style={{ marginTop: "auto", marginBottom: ROATE(66), marginLeft: "auto", marginRight: ROATE(16), backgroundColor: "#ADEE89", width: ROATE(72), display: take || video.uri ? "flex" : "none" , height: ROATE(36), borderRadius: ROATE(4), justifyContent: "center", alignItems: "center" }}>
                <Text>完成</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: ScreenHeight,
        backgroundColor: "#000"
    }
})