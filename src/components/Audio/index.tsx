import { Icon } from '@ant-design/react-native';
import { Toast, Skeleton, Center, VStack } from 'native-base';
import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Dimensions, DeviceEventEmitter, } from 'react-native';
const { AudioRecorder, AudioUtils } = require('react-native-audio');
import Sound from 'react-native-sound';
import io from '../../server/socket';
import RNFS from 'react-native-fs';


interface IProps {
    status: any;
    setStatus: Function;
    setChatInfo: Function;
    user_info: any;
}

export default class Test extends Component<IProps> {


    getState() {
        return this.state;
    }

    state = {
        hasPermission: undefined, //录音 授权状态  
        audioPath: AudioUtils.DocumentDirectoryPath + `/quick_audio_${new Date().getTime()}.aac`, // 文件路径  
        stop: true,     //录音是否停止  
        currentTime: 0,  //录音时长  
        listOptionData: void 0,
        willCancled: false, // 是否取消发送语音
    }
    whoosh: Sound;

    componentDidMount() {

        AudioRecorder.onProgress = (data) => {
            this.setState({
                currentTime: Math.ceil(data.currentTime)
            });
        };
        this.getAudioAuthorize();
        this.prepareRecordingPath(this.state.audioPath);
    }

    // 请求录音授权
    getAudioAuthorize() {
        AudioRecorder.requestAuthorization()
            .then(isAuthor => {
                console.log('是否授权: ' + isAuthor)
                if (!isAuthor) {
                    return alert('APP需要使用录音，请打开录音权限允许APP使用')
                }
                this.setState({ hasPermission: isAuthor })
                this.prepareRecordingPath(this.state.audioPath);
                // 录音进展
                AudioRecorder.onProgress = (data) => {
                    this.setState({
                        currentTime: Math.ceil(data.currentTime)
                    });
                };
                // 完成录音
                AudioRecorder.onFinished = (data) => {
                    // data 录音数据，可以在此存储需要传给接口的路径数据
                    console.log(this.state.currentTime)
                };
            })
    }

    /**
     * AudioRecorder.prepareRecordingAtPath(path,option)
     * 录制路径
     * path 路径
     * option 参数
     */
    prepareRecordingPath = (path) => {
        const option = {
            SampleRate: 44100.0, //采样率
            Channels: 2, //通道
            AudioQuality: 'High', //音质
            AudioEncoding: 'aac', //音频编码 aac
            OutputFormat: 'mpeg_4', //输出格式
            MeteringEnabled: false, //是否计量
            MeasurementMode: false, //测量模式
            AudioEncodingBitRate: 32000, //音频编码比特率
            IncludeBase64: true, //是否是base64格式
            AudioSource: 0, //音频源
        }
        AudioRecorder.prepareRecordingAtPath(path, option)
    }

    // 开始录音
    handleStartAudio = async () => {
        this.setState({ audioPath: AudioUtils.DocumentDirectoryPath + `/quick_audio_${new Date().getTime()}.aac`, stop: false });
        Toast.show({
            render: () => {
                return <Center w={220} >
                    <VStack padding={12} backgroundColor="rgba(0, 0, 0, 0.6)" w="100%" maxW="400" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
                        borderColor: "coolGray.100"
                    }} _light={{
                        borderColor: "coolGray.200"
                    }}>
                        <Skeleton.Text px="1"></Skeleton.Text>
                        <Text style={{ fontSize: 20, textAlign: "center", color: "#fff" }}>松开发送</Text>
                    </VStack>
                </Center>
            }
        })
        if (!this.state.hasPermission) {
            return alert('APP需要使用录音，请打开录音权限允许APP使用')
        }
        console.log('录音开始')
        if (this.state.stop) {
            // 初始化录音
            this.prepareRecordingPath(this.state.audioPath)
        }
        try {
            await AudioRecorder.startRecording()
        } catch (err) {
            console.error(err)
        }
    }

    // 停止录音
    handleStopAudio = async (e) => {
      
        const y = (e.nativeEvent.pageY);
        Toast.closeAll();
        try {
            const res = await AudioRecorder.stopRecording();
            this.setState({ stop: true, recording: false });
            // 上滑表示取消发送
            if (y < Dimensions.get("screen").height - 80) return;
            // 向服务器发送信息
            let base: string;
            AudioRecorder.onFinished = (data) => {
                // data 录音数据，可以在此存储需要传给接口的路径数据
                base = data.base64;
            };
            // const base = await RNFS.readFile( this.state.audioPath, "aac");
            setTimeout(() => {
                io.emit("data", {
                    type: "audio",
                    user_id: this.props.user_info.id,
                    user_name: this.props.user_info.nickname,
                    avatar: this.props.user_info.avatar,
                    ...this.state,
                    base:[base]
                })

                this.props.setChatInfo((prev: any[]) => [
                    ...prev, {
                        type: "audio",
                        user_id: this.props.user_info.id,
                        user_name: this.props.user_info.nickname,
                        avatar: this.props.user_info.avatar,
                        ...this.state,
                    }
                ]
                );
            }, 0);

        } catch (error) {
            console.error(error);
        }
    }

    // 播放录音
    handlePlayAudio = async () => {
        let self = this
        console.log('正在播放')
        self.whoosh = new Sound(this.state.audioPath, '', (err) => {
            if (err) {
                console.log('加载音频失败')
                return console.warn(err)
            }
            self.whoosh.play(success => {
                if (success) {
                    console.warn('success - 播放成功')
                    console.log('播放完毕')
                } else {
                    console.warn('fail - 播放失败')
                    console.log('播放失败')
                }
            })
        })
    }

    // 删除录音
    handleDelAudio = async () => {
        // 初始化录音
        this.prepareRecordingPath(this.state.audioPath)
        let { listOptionData } = this.state
        listOptionData[11].value = ''
        this.setState({
            currentTime: 0,
            stop: false,
            listOptionData
        })
    }


    // 注意⚠️，在此处调用接口，传递录音
    async handlesubmit() {
        let { stop, audioPath } = this.state
        if (stop) {
            // 有录音
            let params = {
                path: audioPath // 根据自己项目修改参数哈
            }

            let audioResult = 222; // requestAudio 是封装的请求接口的函数，具体内容在下面

            console.log('audioResult----请求接口后返回的数据：', audioResult)
        }
    }


    render() {
        return (
            <View onTouchEnd={this.handleStopAudio} onTouchMove={(e) => {
                const y = (e.nativeEvent.pageY);
                if (y < Dimensions.get("screen").height - 80) {
                    this.setState({
                        willCancled: true
                    });
                    return;
                }
                this.setState({
                    willCancled: false
                });
            }} onTouchStart={this.handleStartAudio}>
                <Center onTouchMove={() => this.setState({ willCancled: true })}
                    bgColor={this.state.willCancled ? "#f40" : "#rgba(0,0,0,0.4)"} w={50} style={{ borderRadius: 5, position: "absolute", zIndex: 1, left: -20, top: -60, display: this.state.stop ? "none" : "flex" }}>
                    <Text style={{ color: this.state.willCancled ? "#f5f5f5" : "#fff" }}>取消</Text>
                    <Icon color={this.state.willCancled ? "#f5f5f5" : "#fff"} name='fall' />
                </Center>
                <TouchableOpacity
                    activeOpacity={.8}


                >
                    <Icon name='video-camera' />
                </TouchableOpacity>


                {/* <TouchableOpacity
                    activeOpacity={.8}
                    onPress={this.handleStopAudio}
                >
                    <Text> 停止录音 </Text>
                </TouchableOpacity> */}
                {/* <TouchableOpacity
                    activeOpacity={.8}
                    onPress={this.handlePlayAudio}
                >
                    <Text> 播放录音 </Text>
                </TouchableOpacity> */}
                {/* <TouchableOpacity
                    activeOpacity={.8}
                    onPress={this.handleDelAudio}
                >
                    <Text> 删除录音 </Text>
                </TouchableOpacity> */}

                {/* <TouchableOpacity
                    activeOpacity={.8}
                    onPress={() => this.handlesubmit()}
                >
                    <Text> 提交录音 </Text>
                </TouchableOpacity> */}
            </View>

        )
    }


}