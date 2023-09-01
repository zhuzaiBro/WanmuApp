"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_native_1 = require("@ant-design/react-native");
var native_base_1 = require("native-base");
var react_1 = require("react");
var react_native_2 = require("react-native");
var _a = require('react-native-audio'), AudioRecorder = _a.AudioRecorder, AudioUtils = _a.AudioUtils;
var react_native_sound_1 = require("react-native-sound");
var socket_1 = require("../../server/socket");
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hasPermission: undefined,
            audioPath: AudioUtils.DocumentDirectoryPath + ("/quick_audio_" + new Date().getTime() + ".aac"),
            stop: true,
            currentTime: 0,
            listOptionData: void 0,
            willCancled: false
        };
        /**
         * AudioRecorder.prepareRecordingAtPath(path,option)
         * 录制路径
         * path 路径
         * option 参数
         */
        _this.prepareRecordingPath = function (path) {
            var option = {
                SampleRate: 44100.0,
                Channels: 2,
                AudioQuality: 'High',
                AudioEncoding: 'aac',
                OutputFormat: 'mpeg_4',
                MeteringEnabled: false,
                MeasurementMode: false,
                AudioEncodingBitRate: 32000,
                IncludeBase64: true,
                AudioSource: 0
            };
            AudioRecorder.prepareRecordingAtPath(path, option);
        };
        // 开始录音
        _this.handleStartAudio = function () { return __awaiter(_this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ audioPath: AudioUtils.DocumentDirectoryPath + ("/quick_audio_" + new Date().getTime() + ".aac"), stop: false });
                        native_base_1.Toast.show({
                            render: function () {
                                return react_1["default"].createElement(native_base_1.Center, { w: 220 },
                                    react_1["default"].createElement(native_base_1.VStack, { padding: 12, backgroundColor: "rgba(0, 0, 0, 0.6)", w: "100%", maxW: "400", borderWidth: "1", space: 8, overflow: "hidden", rounded: "md", _dark: {
                                            borderColor: "coolGray.100"
                                        }, _light: {
                                            borderColor: "coolGray.200"
                                        } },
                                        react_1["default"].createElement(native_base_1.Skeleton.Text, { px: "1" }),
                                        react_1["default"].createElement(react_native_2.Text, { style: { fontSize: 20, textAlign: "center", color: "#fff" } }, "\u677E\u5F00\u53D1\u9001")));
                            }
                        });
                        if (!this.state.hasPermission) {
                            return [2 /*return*/, alert('APP需要使用录音，请打开录音权限允许APP使用')];
                        }
                        console.log('录音开始');
                        if (this.state.stop) {
                            // 初始化录音
                            this.prepareRecordingPath(this.state.audioPath);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, AudioRecorder.startRecording()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        // 停止录音
        _this.handleStopAudio = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var y, res, base_1, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        y = (e.nativeEvent.pageY);
                        native_base_1.Toast.closeAll();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, AudioRecorder.stopRecording()];
                    case 2:
                        res = _a.sent();
                        this.setState({ stop: true, recording: false });
                        // 上滑表示取消发送
                        if (y < react_native_2.Dimensions.get("screen").height - 80)
                            return [2 /*return*/];
                        AudioRecorder.onFinished = function (data) {
                            // data 录音数据，可以在此存储需要传给接口的路径数据
                            base_1 = data.base64;
                        };
                        // const base = await RNFS.readFile( this.state.audioPath, "aac");
                        setTimeout(function () {
                            socket_1["default"].emit("data", __assign(__assign({ type: "audio", user_id: _this.props.user_info.id, user_name: _this.props.user_info.nickname, avatar: _this.props.user_info.avatar }, _this.state), { base: [base_1] }));
                            _this.props.setChatInfo(function (prev) { return __spreadArrays(prev, [
                                __assign({ type: "audio", user_id: _this.props.user_info.id, user_name: _this.props.user_info.nickname, avatar: _this.props.user_info.avatar }, _this.state)
                            ]); });
                        }, 0);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        // 播放录音
        _this.handlePlayAudio = function () { return __awaiter(_this, void 0, void 0, function () {
            var self;
            return __generator(this, function (_a) {
                self = this;
                console.log('正在播放');
                self.whoosh = new react_native_sound_1["default"](this.state.audioPath, '', function (err) {
                    if (err) {
                        console.log('加载音频失败');
                        return console.warn(err);
                    }
                    self.whoosh.play(function (success) {
                        if (success) {
                            console.warn('success - 播放成功');
                            console.log('播放完毕');
                        }
                        else {
                            console.warn('fail - 播放失败');
                            console.log('播放失败');
                        }
                    });
                });
                return [2 /*return*/];
            });
        }); };
        // 删除录音
        _this.handleDelAudio = function () { return __awaiter(_this, void 0, void 0, function () {
            var listOptionData;
            return __generator(this, function (_a) {
                // 初始化录音
                this.prepareRecordingPath(this.state.audioPath);
                listOptionData = this.state.listOptionData;
                listOptionData[11].value = '';
                this.setState({
                    currentTime: 0,
                    stop: false,
                    listOptionData: listOptionData
                });
                return [2 /*return*/];
            });
        }); };
        return _this;
    }
    Test.prototype.getState = function () {
        return this.state;
    };
    Test.prototype.componentDidMount = function () {
        var _this = this;
        AudioRecorder.onProgress = function (data) {
            _this.setState({
                currentTime: Math.ceil(data.currentTime)
            });
        };
        this.getAudioAuthorize();
        this.prepareRecordingPath(this.state.audioPath);
    };
    // 请求录音授权
    Test.prototype.getAudioAuthorize = function () {
        var _this = this;
        AudioRecorder.requestAuthorization()
            .then(function (isAuthor) {
            console.log('是否授权: ' + isAuthor);
            if (!isAuthor) {
                return alert('APP需要使用录音，请打开录音权限允许APP使用');
            }
            _this.setState({ hasPermission: isAuthor });
            _this.prepareRecordingPath(_this.state.audioPath);
            // 录音进展
            AudioRecorder.onProgress = function (data) {
                _this.setState({
                    currentTime: Math.ceil(data.currentTime)
                });
            };
            // 完成录音
            AudioRecorder.onFinished = function (data) {
                // data 录音数据，可以在此存储需要传给接口的路径数据
                console.log(_this.state.currentTime);
            };
        });
    };
    // 注意⚠️，在此处调用接口，传递录音
    Test.prototype.handlesubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, stop, audioPath, params, audioResult;
            return __generator(this, function (_b) {
                _a = this.state, stop = _a.stop, audioPath = _a.audioPath;
                if (stop) {
                    params = {
                        path: audioPath // 根据自己项目修改参数哈
                    };
                    audioResult = 222;
                    console.log('audioResult----请求接口后返回的数据：', audioResult);
                }
                return [2 /*return*/];
            });
        });
    };
    Test.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement(react_native_2.View, { onTouchEnd: this.handleStopAudio, onTouchMove: function (e) {
                var y = (e.nativeEvent.pageY);
                if (y < react_native_2.Dimensions.get("screen").height - 80) {
                    _this.setState({
                        willCancled: true
                    });
                    return;
                }
                _this.setState({
                    willCancled: false
                });
            }, onTouchStart: this.handleStartAudio },
            react_1["default"].createElement(native_base_1.Center, { onTouchMove: function () { return _this.setState({ willCancled: true }); }, bgColor: this.state.willCancled ? "#f40" : "#rgba(0,0,0,0.4)", w: 50, style: { borderRadius: 5, position: "absolute", zIndex: 1, left: -20, top: -60, display: this.state.stop ? "none" : "flex" } },
                react_1["default"].createElement(react_native_2.Text, { style: { color: this.state.willCancled ? "#f5f5f5" : "#fff" } }, "\u53D6\u6D88"),
                react_1["default"].createElement(react_native_1.Icon, { color: this.state.willCancled ? "#f5f5f5" : "#fff", name: 'fall' })),
            react_1["default"].createElement(react_native_2.TouchableOpacity, { activeOpacity: .8 },
                react_1["default"].createElement(react_native_1.Icon, { name: 'video-camera' }))));
    };
    return Test;
}(react_1.Component));
exports["default"] = Test;
