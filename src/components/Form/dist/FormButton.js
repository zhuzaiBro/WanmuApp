"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var context_1 = require("./context");
function FormButton(props) {
    var formctx = react_1.useContext(context_1.Formctx);
    function giveData() {
        return formctx.form;
    }
    var styles = react_native_1.StyleSheet.create({
        innerText: {
            color: props.titleColor,
            fontSize: props.titleSize
        }
    });
    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: props.style, onPress: function () {
            props.submit(giveData());
        } },
        react_1["default"].createElement(react_native_1.Text, { style: styles.innerText }, props.title)));
}
exports["default"] = FormButton;
