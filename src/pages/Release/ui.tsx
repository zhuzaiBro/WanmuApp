import { Actionsheet } from 'native-base';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, PermissionsAndroid, TouchableOpacity, Pressable, Keyboard } from 'react-native';
import Video from 'react-native-video';
import { ROATE, ScreenHeight } from '../../assets/size';
import VideoComp from '../../components/VideoComp';
import Icon from '../../iconfont';


(async () => {

    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);

})();

export interface IState {
    navigation: any;
    route: any;
    imgList: any[];
    video: any;
}

export interface IDispatch {
    deletePictures: Function;
    deleteVideo: Function;
}

interface IProps {
    navigation: any;
    route: any;
    deletePictures: Function;
    imgList: any[];
    video: any;
    deleteVideo: Function;
}
// const reg = /^s*|s*$/;
const initialWord = "尽情发挥吧～"
export default function Relaese({ navigation, route, deletePictures, imgList, video, deleteVideo }: IProps) {



    const [content, setContent] = useState(initialWord);
    const [chooseImg, setChooseImg] = useState(false);
    const [edit, setEdit] = useState(false);
    let inp;
    // 控制用户输入的话题
    const [title, setTitle] = useState([]) as any[];
    useEffect(() => {
        Keyboard.addListener("keyboardWillHide", () => {
            setEdit(() => false);

        })
    }, [])


    const imgs = imgList.map((it: any, index) => {
        const delete_pic = () => {
            deletePictures(index, imgList);
        }
        return (
            <View style={{ marginTop: ROATE(3) }}>
                <Pressable onPress={delete_pic} style={{ position: "absolute", right: ROATE(4), top: ROATE(4), zIndex: 2 }}>
                    <Icon name='guanbi-heidi' size={ROATE(24)} />
                </Pressable>

                <Image key={index} style={{ marginHorizontal: ROATE(2), width: ROATE(122), height: ROATE(122) }} source={{ uri: it.uri }} />
            </View>

        )
    });

    const Videos = ({ video }) => {
        if (video.uri) {
            return (<Pressable>
                <Pressable onPress={deleteVideo as any} style={{ position: "absolute", zIndex: 1, top: ROATE(4), right: ROATE(4) }}><Icon name='guangbi-heidi' size={ROATE(24)} /></Pressable>
                <Video resizeMode='cover' source={{ uri: video.uri }} style={{ width: ROATE(122), height: ROATE(122) }} />
            </Pressable>)
        }
        return <></>
    }
    const ShowVideoOrImgs = () => {
        if (imgList.length > 0) {
            return <>{imgs}</>
        } else {
            return <Videos video={video} />
        }
    }
    const TextInfo = () => {
        const str1 = content.split(/\s/g);
        const txt = str1.map((it, i) => {
            if (it.startsWith("#")) {
                return <Text key={i} numberOfLines={20} style={[styles.defFont, styles.keyWord]}>{it}</Text>
            }
            return <Text key={i} style={styles.defFont}>{it}</Text>
        })
        return (
            <ScrollView style={{ padding: 0, height: ROATE(140), display: edit ? "none" : "flex", }}>
                <Pressable onPress={() => {
                    setEdit(() => true);
                    if (inp) {
                        inp.focus();
                    }
                }} style={{ flexDirection: "row", flexWrap: "wrap", minHeight: ROATE(140) }}>
                    {txt}
                </Pressable>
            </ScrollView>)
    }
    return (
        <View style={styles.container}>
            <View onTouchStart={() => {
                Keyboard.dismiss();
            }} style={{ flexDirection: "row", height: ROATE(44), paddingHorizontal: ROATE(16), alignItems: "center" }}>
                <Pressable onPress={() => {
                    navigation.goBack();
                }}><Icon name='fanhuianniu-zuo' size={ROATE(28)} />
                </Pressable>
                <Pressable style={styles.btn} >
                    <Text style={{ fontSize: ROATE(14), color: "#ffffffe6", textAlign: "center" }}>发布</Text>
                </Pressable>
            </View>
            <View style={styles.textArea} >
                {/* 用户文本输入 */}
                <TextInput ref={(ref) => inp = ref} style={{ display: edit ? "flex" : "none", height: ROATE(140), lineHeight: ROATE(20) }} multiline={true} value={content}
                    onChangeText={(text) => {
                        const reg = /^#[[\u4e00-\u9FA5]]+ $/;
                        let res;
                        while (res = reg.exec(text)) {
                            console.log(res[1]);
                        }
                        setContent(() => text)
                    }}
                    textAlignVertical="top" placeholder='尽情发挥吧～' />
                <TextInfo />
                <View style={{ flexDirection: "row", marginTop: "auto" }}>
                    <Pressable onPress={() => {
                    }} style={styles.chooose}>
                        <Icon name='huati' size={ROATE(28)} />
                    </Pressable>
                    <View style={{ marginHorizontal: ROATE(8), height: ROATE(24), width: ROATE(1.2), backgroundColor: "#aaa", marginTop: ROATE(2) }} />
                    <Pressable onPress={() => {
                        navigation.navigate("SearchLocation")
                    }} style={styles.chooose}>
                        <Icon name='dingwei' size={ROATE(28)} />
                    </Pressable>
                </View>
            </View>
            <View onTouchStart={() => {
                Keyboard.dismiss();
            }} style={{ flexWrap: "wrap", width: ROATE(375), marginTop: ROATE(20), flexDirection: "row" }}>

                <ShowVideoOrImgs />
                <Pressable style={{
                    width: ROATE(122), height: ROATE(122), justifyContent: "center", alignItems: "center", display: imgList.length >= 9 || video.uri ? "none" : "flex"
                }}
                    onPress={() => setChooseImg(() => true)}>
                    <Icon name='tianjia' size={ROATE(36)} />
                </Pressable>
            </View>
            <Actionsheet hideDragIndicator isOpen={chooseImg} onClose={() => {
                setChooseImg(() => false);
            }}>
                <Actionsheet.Content style={{ height: ROATE(205), backgroundColor: "#fff" }}>
                    <Pressable onPress={() => {
                        setChooseImg(() => false);
                        navigation.navigate("TakePicture")
                    }} style={{ height: ROATE(52), borderColor: "#ececec", borderBottomWidth: ROATE(1.2), justifyContent: "center", width: ROATE(375) }}>
                        <Text style={styles.fontS14W5}>
                            拍照
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => {
                        navigation.navigate("Picker");
                        setChooseImg(() => false);
                    }} style={{ height: ROATE(52), borderColor: "#ececec", borderBottomWidth: ROATE(1.2), justifyContent: "center", width: ROATE(375) }}>
                        <Text style={styles.fontS14W5}>
                            从相册选择
                        </Text>
                    </Pressable>
                    <View style={{ height: ROATE(6), width: ROATE(375), backgroundColor: "#f5f5f5" }} />
                    <Pressable onPress={() => {
                        setChooseImg(() => false);
                    }} style={{ justifyContent: "center", marginTop: ROATE(30), width: ROATE(375) }}>
                        <Text style={styles.fontS14W5}>取消</Text>
                    </Pressable>
                </Actionsheet.Content>
            </Actionsheet>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: ScreenHeight,
        backgroundColor: "#fff",
        paddingTop: ROATE(44)
    },
    textArea: {
        height: ROATE(220),
        backgroundColor: "#fff",
        borderTopWidth: ROATE(1.2),
        borderBottomWidth: ROATE(1.2),
        borderColor: "#ececec",
        padding: ROATE(16)
    },
    btn: {
        backgroundColor: "#000000e5",
        width: ROATE(64),
        marginLeft: "auto",
        height: ROATE(28),
        borderRadius: (4),
        justifyContent: "center",
        alignItems: "center"
    },
    chooose: {
        // backgroundColor: "#000000e6",
        // height: ROATE(28),
        // width: ROATE(28),
        borderRadius: ROATE(8),
        justifyContent: 'center',
        alignItems: "center",
    },
    fontS14W5: {
        fontSize: ROATE(14),
        fontWeight: "500",
        color: "#000000e5",
        textAlign: "center",
    },
    keyWord: {
        color: "#5B764A"
    },
    defFont: {
        fontSize: ROATE(14),
        color: "#000000e5",
        lineHeight: ROATE(20),
    }
})
