import React, { useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import {Formctx} from './context';
import FormInput from './FormInput';
import FormButton from './FormButton';
interface IProps {
   containerStyle?: StyleProp<ViewStyle>
   children?: any
}


export default function Form(props:IProps) {

    const [form, setForm] = useState({

    })

  return (
     <View style={props.containerStyle}>
         <Formctx.Provider value={{form, setForm}}>
            {props.children}
         </Formctx.Provider>
     </View>
  )
}

Form.Input = FormInput;
Form.Button = FormButton;


