import React, { useEffect, useMemo, useRef, useState } from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import { ScrollView, Image, Text, View, Pressable, Modal } from 'react-native';
import { ROATE, ScreenHeight } from '../../assets/size';
import { Actionsheet, PresenceTransition, } from 'native-base';
import Icon from '../../iconfont';
import { ImageViewer } from 'react-native-image-zoom-viewer';
import RNFS from 'react-native-fs';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { Picker } from '@react-native-community/picker';

export interface IState {
    route: any;
    navigation: any;
    imgList: any[];
}
export interface IDispatch {
    addImgs: Function;
    setImgDetail: Function;
}
interface IProps {
    route: any;
    navigation: any;
    imgList: any[];
    addImgs: Function;
    setImgDetail: Function
}
export default function CheckPictures({ route, navigation, imgList, addImgs, setImgDetail }: IProps) {

    const IMAGE_SIZE = ROATE(122);
    let choosedList: any[] = useRef([]).current; // 记录选中的照片或者视频的索引，便于直接中photos数据中读取
    const [photos, setPhotos] = useState([]) as any;
    const [title, setTitle] = useState([]) as any[];
    const [visible, setVisible] = useState(false);

    useEffect(() => {

        CameraRoll.getAlbums({ assetType: "Photos" }).then(r => {
            setTitle(() => r);
        });

        launchImageLibrary({
            mediaType: "video",
            includeBase64: true,
        }, (r) => {
            console.log(r);
            if (r.assets) {
                setImgDetail(r.assets[0]);
                navigation.navigate("ImgDetail", { choosedList });
            }
        })

        CameraRoll.getPhotos({
            first: 120,
            assetType: "Photos",
            include: ["playableDuration"]
        }).then(r => {

            setPhotos(() => r.edges.map((item: CameraRoll.PhotoIdentifier) => ({
                ...item.node.image,
            })
            ));
        });
        return () => {
            setPhotos((prev) => [...prev])
        }
    }, []);


    function Img({ item, index }) {
        const [choosed, setChoosed] = useState(false);

        const chooseImage = () => {
            // 如果没有被选中, 加上
            if (!choosed) {
                choosedList.push(item);
                setChoosed(() => true);
                return;
            }
            setChoosed(() => false);
            const index = choosedList.indexOf(item);
            choosedList = choosedList.slice(0, index).concat(choosedList.slice(index + 1, choosedList[choosedList.length]));
        }
        const TimeComp = () => {
            if (!item.playableDuration) {
                return <></>
            } else {
                const hours = Math.floor(item.playableDuration / 3600) || null;
                const restM = item.playableDuration % 3600;
                const minute = Math.floor(restM / 60);
                const restS = Math.ceil(restM % 60);
                return (<View style={{ backgroundColor: "#00000073", zIndex: 2, position: "absolute", bottom: ROATE(4), right: ROATE(4), maxWidth: ROATE(60) }}>
                    <Text style={{ color: "#fff" }}>{hours}{hours ? ":" : ""}{minute < 10 ? "0" + minute : minute}:{restS < 10 ? "0" + restS : restS}</Text>
                </View>)
            }
        }

        return (<Pressable onPress={() => {
            chooseImage();
            setImgDetail(item);
            navigation.navigate("ImgDetail", { choosedList });
        }} style={{ width: IMAGE_SIZE, height: IMAGE_SIZE, padding: 0, marginHorizontal: (index !== 0 && index % 3 === 1) ? ROATE(6) : 0, marginBottom: ROATE(6) }}>
            {/* 选中的遮罩层样式 */}
            <Pressable onPress={chooseImage} style={{ position: "absolute", backgroundColor: choosed ? "#afec8e" : "transparent", width: ROATE(24), borderRadius: ROATE(12), height: ROATE(24), justifyContent: "center", alignItems: "center", zIndex: 2, right: ROATE(4), top: ROATE(4) }}>
                <Icon style={{ display: choosed ? "none" : "flex" }} name='shaixuan' size={ROATE(28)} />
                <Text style={{ display: choosed ? "flex" : "none" }}>{choosedList.indexOf(item) + 1}</Text>
            </Pressable>
            <TimeComp />
            <Image style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
                source={{ uri: item.uri }} />
        </Pressable>)
    }

    function Pictures() {
        // console.log(item);
        return (
            photos.map((item, index) => {
                return (<Img index={index} key={index} item={item} />)
            })
        )
    }



    return (

        <View onTouchStart={() => {
            setVisible(() => false);
        }} style={{ height: ScreenHeight }}>
            <View style={{
                backgroundColor: "#fff", flexDirection: "row", justifyContent: "space-between",
                padding: ROATE(18), paddingTop: ROATE(44), height: ROATE(88)
            }}>
                <Pressable style={{ position: "absolute", bottom: ROATE(16), left: ROATE(16) }} onPress={() => navigation.goBack()}>
                    <Icon color='#FFFFFF' size={ROATE(28)} name='fanhuianniu-zuo' />
                </Pressable>
                <Pressable onPress={() => {
                    setVisible(() => true)
                }} style={{ marginLeft: "auto", marginRight: "auto", }}>
                    <Text style={{ fontSize: ROATE(14), lineHeight: ROATE(20), color: "#000" }}>全部</Text>
                </Pressable>

            </View>
            <ScrollView style={{ height: ROATE(580) }} bounces={false}>

                <View style={{ paddingTop: ROATE(24), paddingBottom: ROATE(20), justifyContent: "space-around", flexDirection: "row", backgroundColor: "#fff" }}>
                    <Text style={{ textAlign: "center" }}>照片</Text>
                    <Pressable onPress={() => {
                        CameraRoll.getPhotos({
                            first: 120,
                            assetType: "Videos",
                        }).then(r => {

                            setPhotos(() => r.edges.map((item: any) => ({
                                ...item.node.image,
                                directory: item.node.directory
                            })
                            ));
                            console.log(r.edges[0], 9998);
                        });
                    }}>
                        <Text>视频</Text>
                    </Pressable>

                </View>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    {
                        useMemo(() => <Pictures />, [photos])
                    }
                </View>


            </ScrollView>
            <View style={{ position: "absolute", left: 0, bottom: 0, zIndex: 2, backgroundColor: "#fff", width: ROATE(375), height: ROATE(100), paddingHorizontal: ROATE(12), flexDirection: "row" }}>
                <Pressable style={{ height: ROATE(20), marginTop: ROATE(24), flexDirection: "row", alignItems: "center" }}>
                    <Icon name='weixuanzhong(1)' size={ROATE(24)} />
                    <Text style={{ fontSize: ROATE(14), color: "#000000e6" }}>原图</Text>
                </Pressable>
                <Pressable onPress={() => {
                    if (!imgList) { imgList = [] }
                    addImgs(imgList, choosedList);
                    navigation.goBack()
                }} style={{ marginTop: ROATE(12), backgroundColor: "#A6E284", borderRadius: ROATE(5), justifyContent: "center", alignItems: "center", height: ROATE(36), width: ROATE(90), marginLeft: "auto" }}>
                    <Text>确定</Text>
                </Pressable>
            </View>

            <PresenceTransition style={{ position: "absolute", height: ROATE(180), zIndex: 30, backgroundColor: "#fff", top: ROATE(128), width: ROATE(175), left: ROATE(100) }} initial={{
                opacity: 0,
            }} animate={{
                opacity: 1,
            }} visible={visible}>
                <ScrollView style={{}}>
                    {title.map((it, i) => {
                        return (<Pressable onPress={() => {
                            CameraRoll.getPhotos({
                                first: 100,
                                groupName: it.title,
                                assetType: "Photos",
                                groupTypes: 'Album'
                            }).then(r => {

                                setPhotos(() => r.edges.map((item: CameraRoll.PhotoIdentifier) => ({
                                    ...item.node.image,
                                })))


                            })
                        }} style={{ height: ROATE(32), flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Text>{it.title}</Text>
                            <Text>{it.count}</Text>
                        </Pressable>)
                    })}
                </ScrollView>
            </PresenceTransition>
        </View>

    )
}
