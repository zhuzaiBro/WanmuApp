import React, { PureComponent } from 'react';
import { View, Image, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { ROATE } from '../../assets/size';

export function Pager({ total = 1, current = 1 }) {
    return (
        <View style={{
            width: ROATE(34), height: ROATE(19), position: "absolute", backgroundColor: "rgba(255,255,255,0.4)", zIndex: 1
            , right: ROATE(12), bottom: ROATE(12), borderRadius: ROATE(5), justifyContent: "center", alignItems: "center"
        }}>
            <Text style={{ fontSize: ROATE(12), fontWeight: "400" }}>{current}/{total}</Text>
        </View>
    )
}

interface IProps{
    imgUrlList : string[];
    onChange: (index: number)=> void
}

export default class ShopBanner extends PureComponent <IProps>{

    render(): React.ReactNode {
        const pictures = this.props.imgUrlList.map((it: any, index) => {
            return <Image resizeMode='cover' style={{ zIndex: 1, height: ROATE(280), width: ROATE(375) }}
                key={index} source={{ uri: it }} />
        })
        return (
            <Swiper onIndexChanged={this.props.onChange} contentContainerStyle={{ height: ROATE(280) }}
                activeDotStyle={{ width: ROATE(6), zIndex: 1, height: ROATE(6), borderRadius: ROATE(3), backgroundColor: "#fff" }}
                dotStyle={{ width: ROATE(6), height: ROATE(6), borderRadius: ROATE(3) }}>
                {pictures}
            </Swiper>
        )
    }
}
