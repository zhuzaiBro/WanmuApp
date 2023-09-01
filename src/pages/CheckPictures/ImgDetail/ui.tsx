import { Pressable, View, Text } from 'react-native'
import React, { useEffect } from 'react';
import { ROATE, ScreenHeight } from '../../../assets/size';
import ImageViewer from 'react-native-image-zoom-viewer';
import Icon from '../../../iconfont';
import Video from 'react-native-video';

export interface IState {
    navigation: any;
    route: any;
    ImgDetail: any;
    imgList: any[];
    // video: any;
}

export interface IDispatch {
    addImgs: Function;
}

interface IProps {
    navigation: any;
    route: any;
    ImgDetail: any;
    addImgs: Function;
    imgList: any[];
    video? :any;
}

export default function Ui({ navigation, route, ImgDetail, addImgs,  imgList }: IProps) {
    const { uri, playableDuration, filename,directory  } = ImgDetail;
    console.log(directory + filename);
    console.log( ImgDetail, uri );
    useEffect(() => {
    }, [])
    // file:///var/mobile/Containers/Data/Application/A3FD8058-B81E-42B6-86C9-09070388EE52/tmp/IMG_6107.mov
    // file:///var/mobile/Containers/Data/Application/A3FD8058-B81E-42B6-86C9-09070388EE52/tmp/IMG_6107.mov
    return (
        <View style={{ height: ScreenHeight, backgroundColor: "#fff" }}>
            <View style={{ backgroundColor: "#fff", paddingTop: ROATE(48), paddingHorizontal: ROATE(16), width: ROATE(375), height: ROATE(88), top: 0, left: 0 }}>
                <Pressable onPress={() => {
                    navigation.goBack();
                }}>
                    <Icon name='fanhuianniu-zuo' size={ROATE(28)} />
                </Pressable>
            </View>
           
            <ImageViewer style={{ width: ROATE(375), height: ROATE(660), display: playableDuration ? "none" : "flex" }} backgroundColor='#000' renderIndicator={() => <></>} enableImageZoom enableSwipeDown={false} useNativeDriver imageUrls={[{ url: uri }]} />
            <Video onError={(e) => {
                console.log(e.error)  
            }} controls style={{height: ROATE(660), display:  "flex", width: ROATE(375)}} source={{
                uri:"file:///var/mobile/Containers/Data/Application/A3FD8058-B81E-42B6-86C9-09070388EE52/tmp/IMG_6107.mov"}}/>
            <View style={{ position: "absolute", left: 0, bottom: 0, zIndex: 2, backgroundColor: "#fff", width: ROATE(375), height: ROATE(100), paddingHorizontal: ROATE(12), flexDirection: "row" }}>
                <Pressable style={{ height: ROATE(20), marginTop: ROATE(24), flexDirection: "row", alignItems: "center" }}>
                    <Icon name='weixuanzhong(1)' size={ROATE(24)} />
                    <Text style={{ fontSize: ROATE(14), color: "#000000e6" }}>原图</Text> 
                </Pressable>
                <Pressable onPress={() => {
                    if (!imgList) { imgList = [] }
                    addImgs(imgList, [ImgDetail]);
                    navigation.goBack();
                }} style={{ marginTop: ROATE(12), backgroundColor: "#A6E284", borderRadius: ROATE(5), justifyContent: "center", alignItems: "center", height: ROATE(36), width: ROATE(90), marginLeft: "auto" }}>
                    <Text>确定</Text>
                </Pressable>
            </View>
        </View>
    )
}
