import React, { useCallback } from 'react'
import { Dimensions, Text, Pressable, Vibration, TouchableOpacity } from 'react-native'
import { ROATE } from '../assets/size';
import {debounce} from '../utils';

const vibrate2 = debounce(70, () => {
    Vibration.vibrate([0, 18]);
})

export default function Tabbar({ tabList, current, setCurrent, nav }) {

    const vibrate = useCallback(() => {
        vibrate2();
    }, [])
    
    function TabItem({ index, item }) {
        const goPage = () => {
            setCurrent(index);
            vibrate()
            nav.navigate(item.to);
        }
        const flag = index === current;
        return (
            
                 <TouchableOpacity onPress={goPage}
                style={{ alignItems: "center", zIndex: -1, marginTop: ROATE(8), width: ROATE(75), height: ROATE(49) }}>
                {flag ? <item.Active /> : <item.UnActive />}
                <Text style={{ fontSize: ROATE(12), color: "#000", lineHeight: ROATE(14.52), marginTop: ROATE(2) }}>{item.title}</Text>
            </TouchableOpacity>
            
           
        )
    }
   

    const list = tabList.map((it, index) => {
        return (
             <TabItem index={index} key={index} item={it} /> 
        )
    })

    return (
            <Pressable style={{
                width: Dimensions.get("screen").width, height: ROATE(83), 
                backgroundColor: "#fff", borderColor: "#ddd5ca", borderTopWidth: 1, flexDirection: "row", position: "absolute", bottom:0, left: 0
            }}>
                {list}
            </Pressable>


    )
}
