import React, { useContext } from 'react';
import { StyleProp, TextInput, TextInputProps, TextStyle } from 'react-native';
import { Formctx } from './context'
const reg = /[d]/

interface IProps {
    // 写入的input类型
    name: string;
    placeholder?: string;
    // 自定义样式
    style?: StyleProp<TextStyle>
    disabled?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FormInput(props: IProps) {

    const formCtx = useContext(Formctx) as any;
    return (
        <TextInput placeholder={props.placeholder}
            value={formCtx.form[props.name]}
            style={props.style}
            onChangeText={
                text => {
                    text = text.replace(/[^\d]/g, "");
                    formCtx.setForm({
                        ...formCtx.form,
                        [props.name]: text
                    });
                    if (text) {
                        props.disabled && props.disabled(() => false);
                    }

                }

            } {...props} />
    )
}
