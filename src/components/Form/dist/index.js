"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var context_1 = require("./context");
var FormInput_1 = require("./FormInput");
var FormButton_1 = require("./FormButton");
function Form(props) {
    var _a = react_1.useState({}), form = _a[0], setForm = _a[1];
    return (react_1["default"].createElement(react_native_1.View, { style: props.containerStyle },
        react_1["default"].createElement(context_1.Formctx.Provider, { value: { form: form, setForm: setForm } }, props.children)));
}
exports["default"] = Form;
Form.Input = FormInput_1["default"];
Form.Button = FormButton_1["default"];
