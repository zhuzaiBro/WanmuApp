"use strict";
exports.__esModule = true;
exports.useGetIOSStatusBarHeight = void 0;
var react_native_1 = require("react-native");
var react_1 = require("react");
var StatusBarManager = react_native_1.NativeModules.StatusBarManager;
// iOS Only
function useGetIOSStatusBarHeight() {
    var _a = react_1.useState(44), iOSStatusBarHeight = _a[0], setiOSStatusBarHeight = _a[1];
    react_1.useEffect(function () {
        try {
            StatusBarManager.getHeight(function (statusBarHeight) {
                setiOSStatusBarHeight(function () { return statusBarHeight.height; });
            });
        }
        catch (_a) {
        }
    }, []);
    return iOSStatusBarHeight;
}
exports.useGetIOSStatusBarHeight = useGetIOSStatusBarHeight;
