import { View } from 'native-base'
import React from 'react'
import { ROATE } from '../../assets/size';
import Badge from '../../assets/pictures/oneserver/badge.svg';


export default function Window() {
    return (
        <View style={{backgroundColor: "#f2f2dd", borderRadius: ROATE(18), flexDirection: "row",
        height: ROATE(77), paddingHorizontal: ROATE(20), paddingVertical: ROATE(9.5)}}>
            <Badge style={{height: ROATE(58), width: ROATE(58), marginRight :ROATE(25.83)}}/>
            <Badge style={{height: ROATE(58), width: ROATE(58), marginRight :ROATE(25.83)}}/>
            <Badge style={{height: ROATE(58), width: ROATE(58), marginRight :ROATE(25.83)}}/>
            <Badge style={{height: ROATE(58), width: ROATE(58), marginRight :ROATE(25.83)}}/>
        </View>
    )
}
