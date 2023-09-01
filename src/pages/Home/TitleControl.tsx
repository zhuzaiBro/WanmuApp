import { ScrollView } from 'native-base'
import React, { useState } from 'react'
import { Pressable, View, Text } from 'react-native';
import Good from '../../assets/pictures/oneserver/good.svg';
import { ROATE } from '../../assets/size';

export default function TitleControl({ titles }) {

    const Rendertitles = titles.map((it, index) => {
        return (<Item index={index} key={index} it={it} />)
    });
    const [current, setCurrent] = useState(0);

    function Item({ it, index }) {
        return (
            <Pressable onPress={()=> {
                setCurrent(()=> index)
            }}
            style={{marginRight: ROATE(16), height: ROATE(24), overflow: "hidden"}}>
                <Text style={{fontSize: ROATE(16), color: "#000000e6", lineHeight: ROATE(24), fontWeight: "500"}}>
                    {it}
                </Text>
                
                <Good style={{ display: current === index? "flex":"none" , position: "absolute",
                  zIndex: -1}}/>
            </Pressable>
        )
    };

    return (
        <View style={{ flexDirection: "row", backgroundColor: "#fff", paddingBottom: ROATE(24.19) }}>
            <ScrollView style={{paddingHorizontal: ROATE(16)}} horizontal showsHorizontalScrollIndicator={false}>
                {Rendertitles}
            </ScrollView>
        </View>
    )
}
