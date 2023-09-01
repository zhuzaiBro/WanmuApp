import React, { useEffect, useMemo, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { Carousel, Icon } from '@ant-design/react-native';
import { ROATE } from '../../../assets/size';
import useShopList from './hooks/shopList';

export default function Banner(props) {
    const rotate = useShopList();
  
    let imgs;

    

    function Picture({ item }) {
        return (
            <View style={{ height: props.height || ROATE(127), overflow:"hidden", borderRadius: 12 , width: ROATE(343),}}>
                 
                <Image style={{ height: props.height || ROATE(127), width: ROATE(343), borderRadius: 12 }} key={item.id}
                    source={{ uri:  item.imgUrl }} />
                <Text style={{ position: "absolute", left: ROATE(12), backgroundColor: "rgba(245, 245,245, 0.4)",
                fontSize: ROATE(16), fontWeight: "500", borderColor: "#000000e6", top: ROATE(54), color: "rgba(0,0,0,0.8)" }}>
                    上门物流</Text>
            </View>

        )
    }

    function Imgs(pictures) {
        return (
            pictures.map((item: any) => (<Picture key={item.id} item={item} />)
            )

        )
    }




    return useMemo(() => (
        <Carousel style={{ height: props.height || ROATE(127),width: ROATE(375),paddingLeft: ROATE(16), overflow: 'hidden', marginLeft: "auto", marginRight: "auto" }}
            dotActiveStyle={{ backgroundColor: "#f40" }} dotStyle={{ width: 10, height: 3, backgroundColor: "#ccc" }} >
            {Imgs(rotate)}
        </Carousel>
    ), [rotate])
}
