"use strict";
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
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var context_1 = require("./context");
var reg = /[d]/;
function FormInput(props) {
    var formCtx = react_1.useContext(context_1.Formctx);
    return (react_1["default"].createElement(react_native_1.TextInput, __assign({ placeholder: props.placeholder, value: formCtx.form[props.name], style: props.style, onChangeText: function (text) {
            var _a;
            text = text.replace(/[^\d]/g, "");
            formCtx.setForm(__assign(__assign({}, formCtx.form), (_a = {}, _a[props.name] = text, _a)));
            if (text) {
                props.disabled && props.disabled(function () { return false; });
            }
        } }, props)));
}
exports["default"] = FormInput;
