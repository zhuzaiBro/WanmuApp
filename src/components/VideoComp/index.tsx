import React, { useCallback, useRef, useState } from 'react'
import { TouchableOpacity, View, Text, StyleProp, ViewStyle, TextStyle, ImageStyle, Pressable } from 'react-native';
import { Image } from 'native-base';
import { Slider, Box } from 'native-base'
import Video, { OnLoadData, OnProgressData } from 'react-native-video';
import Icon from '../../iconfont';

interface defaultStyles {
    content?: StyleProp<ViewStyle>;
    video?: StyleProp<ViewStyle>;
    ctrl_area?: StyleProp<ViewStyle>;
    time_text?: StyleProp<TextStyle>;
    pause_icon?: StyleProp<ImageStyle>;
    pregress_area?: StyleProp<ViewStyle>
}
const defaultStyles: defaultStyles = {
    content: {
        width: 350,
        height: 350
    },
    video: {
        width: 350,
        height: 350
    },
    ctrl_area: {
        flexDirection: "row",
        width: "100%",
        // backgroundColor: " #f40",
        // height: 32,
        position: "absolute",
        bottom: 0,
        alignItems: "center",
        justifyContent: "space-around",
        padding: 12,
        zIndex: 1,
        backgroundColor: "rgba(0,0,0,0.3)"
    },
    time_text: {
        color: "#f5f5f5"
    },
    pause_icon: {
        width: 20,
        height: 20
    },
    pregress_area: {
        flexGrow: 1,
        // height: 20,
        flexDirection: "row",
        justifyContent: "space-around"
    }
}

export default function VideoComp({ uri = "", poster = "https://cdn.wanmu.club/2021/06/QQRD2M4@@OW8ONRI1.png", styles = defaultStyles, isModal = false, currentTime = Date.now(), }) {

    const videoRef = useRef(Video);
    const [seek, setSeek] = useState(0); // 视频播放进度
    const [showCtrl, setShowCtrl] = useState(false);
    const [paused, setPaused] = useState(false);
    const [duration, setDuration] = useState(0); // 视频时间长度
    let timer: NodeJS.Timeout

    // 显示自定义控件
    const changeShowCtrl = useCallback(() => {
        setShowCtrl(prev => !prev);
        clearTimeout(timer);
        timer = setTimeout(() => {
            setShowCtrl(() => false);
        }, 10000);
    }
        , [])

    // 手机屏幕横过来
    const layoutHandle =
        useCallback(() => {
            console.log('改变布局');
        }
            , [])

    // 视频加载完成,得到视频总时间
    const loadHandle = useCallback((data: OnLoadData) => {
        setDuration(prev => Math.floor(data.duration))
    }, [])

    // 处理视频正在播放
    const progressHandle = useCallback((data: OnProgressData) => {
        // console.log(data.currentTime, duration);
        setSeek(() => (data.currentTime));

        if (duration !== 0 && duration - data.currentTime < 0.1) {
            setPaused(() => true);
            setSeek(() => 0);
        }
    }
        , [seek]);

    const endVideo = useCallback(()=> {
        console.log( 233);
    }, [])


    const changePausedCtrl =
        useCallback(() => {
            if (seek === duration) {
                // 放完了从新开始
                setSeek(() => 0);
            }
            setPaused(prev => !prev);
        }, [seek])

    return (
        <Pressable

            style={[
                styles.content,
                //这里之所以这么写是为了适配全屏模式，全屏模式也是用这个组件
                isModal && { width: '100%', height: '100%' }
            ]}
            // 额，，这个是我用来动态获取父级元素尺寸来设置视频组件尺寸用的。。。
            onLayout={layoutHandle}
            onPress={changeShowCtrl}
        >
            <Video
                ref={() => videoRef}
                source={{ uri }}
                poster={poster}
                paused={paused}
                repeat={!paused}
                onLoad={loadHandle}
                onEnd={endVideo}
                onProgress={progressHandle}
                // onSeek={(data) => setSeek(() => data.seekTime)}r
                resizeMode="cover"
                posterResizeMode="cover"
                style={styles.video}
            />

            <View style={[styles.ctrl_area, { display: showCtrl ? "flex" : "none" }]}>
                <TouchableOpacity style={{ alignItems: "center" }} onPress={changePausedCtrl}>
                    <Icon name='kaidian' />
                    <Text style={styles.time_text}>{paused ? "继续" : "暂停"}</Text>


                </TouchableOpacity>
                <View style={styles.pregress_area}>
                    <Box alignItems="center" w="80%">
                        <Slider onChange={(seek => {
                            // 先暂停视频
                            setPaused(prev => true);
                            (videoRef.current as any).seek(seek);
                            setSeek(prev => seek);

                        })}
                            onChangeEnd={() => {
                                setPaused(prev => false);
                            }}
                            w="3/4" maxW="300" value={seek} minValue={0} maxValue={duration} step={1}>
                            <Slider.Track>
                                <Slider.FilledTrack />
                            </Slider.Track>
                            <Slider.Thumb />
                        </Slider>
                    </Box>
                    <Text style={[styles.time_text, {}]}>{Math.floor(seek)}/{duration}</Text>

                    {/* <TouchableOpacity onPress={this.changeOrientation}>
                            <Image source={require('./images/large_screen_icon.png')} style={{ width: 13.5, height: 13.5, marginRight: 5 }} />
                        </TouchableOpacity> */}
                </View>
            </View>

        </Pressable>

    )
}
