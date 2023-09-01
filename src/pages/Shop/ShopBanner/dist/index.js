"use strict";
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
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_2 = require("@ant-design/react-native");
var size_1 = require("../../../assets/size");
function Banner(props) {
    var _this = this;
    var _a = react_1.useState([]), rotate = _a[0], setRotate = _a[1];
    var imgs;
    react_1.useEffect(function () {
        var flag = false;
        if (!flag) {
            (function () { return __awaiter(_this, void 0, void 0, function () {
                var res, result, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, fetch('http://www.discosoul.com.cn/api/banner')];
                        case 1:
                            res = (_b.sent());
                            return [4 /*yield*/, (res.json())];
                        case 2:
                            result = _b.sent();
                            throw new Error();
                        case 3:
                            _a = _b.sent();
                            setRotate([{
                                    imgUrl: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/banner.png",
                                    id: 1
                                }, {
                                    imgUrl: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/22.png",
                                    id: 2
                                }, {
                                    imgUrl: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/IM.png",
                                    id: 3
                                }]);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); })();
        }
        return function () {
            flag = true;
        };
    }, []);
    function Picture(_a) {
        var item = _a.item;
        return (react_1["default"].createElement(react_native_1.View, { style: { height: props.height || size_1.ROATE(127), borderWidth: 1, overflow: "hidden", borderRadius: 12, width: size_1.ROATE(337) } },
            react_1["default"].createElement(react_native_1.Image, { style: { height: props.height || size_1.ROATE(127), width: size_1.ROATE(337), borderRadius: 12 }, key: item.id, source: { uri: item.imgUrl } }),
            react_1["default"].createElement(react_native_1.Text, { style: { position: "absolute", left: size_1.ROATE(18.25), backgroundColor: "rgba(245, 245,245, 0.4)", top: size_1.ROATE(101), color: "rgba(0,0,0,0.8)" } }, "\u7CBE\u9009\u597D\u725B\u5976"),
            react_1["default"].createElement(react_native_2.Icon, { style: { position: "absolute", top: size_1.ROATE(101), right: size_1.ROATE(40.33) }, name: "arrow-right", color: 'rgba(0, 0, 0, 0.9)' })));
    }
    function Imgs(pictures) {
        return (pictures.map(function (item) { return (react_1["default"].createElement(Picture, { key: item.id, item: item })); }));
    }
    return (react_1["default"].createElement(react_native_2.Carousel, { style: { height: props.height || size_1.ROATE(127), width: size_1.ROATE(375), paddingLeft: size_1.ROATE(19), overflow: 'hidden', marginLeft: "auto", marginRight: "auto" }, dotActiveStyle: { backgroundColor: "#f40" }, dotStyle: { width: 10, height: 3, backgroundColor: "#ccc" } }, Imgs(rotate)));
}
exports["default"] = Banner;
