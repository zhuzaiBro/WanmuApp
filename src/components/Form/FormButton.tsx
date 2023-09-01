import React, { useContext } from 'react'
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Formctx } from './context';


interface IProps {
    submit?: (body:object)=> void,
    titleColor? :string,
    titleSize? : number,
    title: string;
    style?: StyleProp<ViewStyle>
}

export default function FormButton(props: IProps) {

    const formctx = useContext(Formctx)

    function giveData():any {
        return (formctx as any).form
    }


    const styles = StyleSheet.create({
        innerText: {
            color: props.titleColor,
            fontSize: props.titleSize
        },
      
    })

    return (
        <TouchableOpacity style={props.style} onPress={()=>{
            props.submit(giveData())
        }}>
            <Text style={styles.innerText}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}


