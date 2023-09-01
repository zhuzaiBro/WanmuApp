"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var native_base_1 = require("native-base");
var native_base_2 = require("native-base");
var react_native_video_1 = require("react-native-video");
var defaultStyles = {
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
};
function VideoComp(_a) {
    var _b = _a.uri, uri = _b === void 0 ? "" : _b, _c = _a.poster, poster = _c === void 0 ? "https://cdn.wanmu.club/2021/06/QQRD2M4@@OW8ONRI1.png" : _c, _d = _a.styles, styles = _d === void 0 ? defaultStyles : _d, _e = _a.isModal, isModal = _e === void 0 ? false : _e, _f = _a.currentTime, currentTime = _f === void 0 ? Date.now() : _f;
    var videoRef = react_1.useRef(react_native_video_1["default"]);
    var _g = react_1.useState(0), seek = _g[0], setSeek = _g[1]; // 视频播放进度
    var _h = react_1.useState(false), showCtrl = _h[0], setShowCtrl = _h[1];
    var _j = react_1.useState(false), paused = _j[0], setPaused = _j[1];
    var _k = react_1.useState(0), duration = _k[0], setDuration = _k[1]; // 视频时间长度
    var timer;
    // 显示自定义控件
    var changeShowCtrl = react_1.useCallback(function () {
        setShowCtrl(function (prev) { return !prev; });
        clearTimeout(timer);
        timer = setTimeout(function () {
            setShowCtrl(function () { return false; });
        }, 10000);
    }, []);
    // 手机屏幕横过来
    var layoutHandle = react_1.useCallback(function () {
        console.log('改变布局');
    }, []);
    // 视频加载完成,得到视频总时间
    var loadHandle = react_1.useCallback(function (data) {
        setDuration(function (prev) { return Math.floor(data.duration); });
    }, []);
    // 处理视频正在播放
    var progressHandle = react_1.useCallback(function (data) {
        // console.log(data.currentTime, duration);
        setSeek(function () { return (data.currentTime); });
        if (duration !== 0 && duration - data.currentTime < 0.1) {
            setPaused(function () { return true; });
            setSeek(function () { return 0; });
        }
    }, [seek]);
    var endVideo = react_1.useCallback(function () {
        console.log(233);
    }, []);
    var changePausedCtrl = react_1.useCallback(function () {
        if (seek === duration) {
            // 放完了从新开始
            setSeek(function () { return 0; });
        }
        setPaused(function (prev) { return !prev; });
    }, [seek]);
    return (react_1["default"].createElement(react_native_1.Pressable, { style: [
            styles.content,
            //这里之所以这么写是为了适配全屏模式，全屏模式也是用这个组件
            isModal && { width: '100%', height: '100%' }
        ], 
        // 额，，这个是我用来动态获取父级元素尺寸来设置视频组件尺寸用的。。。
        onLayout: layoutHandle, onPress: changeShowCtrl },
        react_1["default"].createElement(react_native_video_1["default"], { ref: function () { return videoRef; }, source: { uri: uri }, poster: poster, paused: paused, repeat: !paused, onLoad: loadHandle, onEnd: endVideo, onProgress: progressHandle, 
            // onSeek={(data) => setSeek(() => data.seekTime)}r
            resizeMode: "cover", posterResizeMode: "cover", style: styles.video }),
        react_1["default"].createElement(react_native_1.View, { style: [styles.ctrl_area, { display: showCtrl ? "flex" : "none" }] },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: { alignItems: "center" }, onPress: changePausedCtrl },
                react_1["default"].createElement(native_base_1.Image, { source: paused
                        ? require('../../assets/icons/earth.png')
                        : require('../../assets/icons/earth_active.png'), style: styles.pause_icon }),
                react_1["default"].createElement(react_native_1.Text, { style: styles.time_text }, paused ? "继续" : "暂停")),
            react_1["default"].createElement(react_native_1.View, { style: styles.pregress_area },
                react_1["default"].createElement(native_base_2.Box, { alignItems: "center", w: "80%" },
                    react_1["default"].createElement(native_base_2.Slider, { onChange: (function (seek) {
                            // 先暂停视频
                            setPaused(function (prev) { return true; });
                            videoRef.current.seek(seek);
                            setSeek(function (prev) { return seek; });
                        }), onChangeEnd: function () {
                            setPaused(function (prev) { return false; });
                        }, w: "3/4", maxW: "300", value: seek, minValue: 0, maxValue: duration, step: 1 },
                        react_1["default"].createElement(native_base_2.Slider.Track, null,
                            react_1["default"].createElement(native_base_2.Slider.FilledTrack, null)),
                        react_1["default"].createElement(native_base_2.Slider.Thumb, null))),
                react_1["default"].createElement(react_native_1.Text, { style: [styles.time_text, {}] },
                    Math.floor(seek),
                    "/",
                    duration)))));
}
exports["default"] = VideoComp;
