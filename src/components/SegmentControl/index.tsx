import React, { useEffect, useState } from 'react';
import { StyleProp, Text, View, ViewStyle,TextStyle, ScrollView, Pressable } from 'react-native'
import Swiper from 'react-native-swiper';
import { ROATE } from '../../assets/size';

interface IProps {
    tags: string[];
    tagDefaultStyle?: StyleProp<TextStyle>;
    tagWrapperStyle?: StyleProp<ViewStyle>;
    tagWrapperActiveStyle?: StyleProp<ViewStyle>;
    tagActiveStyle?: StyleProp<TextStyle>;
    headerStyle?: StyleProp<ViewStyle>;
    bodyStyle?: StyleProp<ViewStyle>;
    children?: JSX.Element[];
    onChangeIndex? :Function;
}

const SegmentControl = (props: IProps) => {

    const [tags, setTags] = useState([]) as any;

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        setTags(props.tags.map((item: string, i: number) =>
            <Pressable
                onPress={() => {
                    setCurrentIndex(() => i);
                }}
                key={i}
                style={currentIndex == i ? { ...props.tagWrapperStyle as any, ...props.tagWrapperActiveStyle as any } : props.tagWrapperStyle}>
                <Text style={currentIndex == i ?
                    { ...props.tagDefaultStyle as any, ...props.tagActiveStyle as any }
                    : props.tagDefaultStyle
                }>{item}</Text>
            </Pressable>
        ));

    }, [currentIndex])


    return (

        <>
            <View  style={props.headerStyle}>
                {tags}
            </View>
            <Swiper loop={false} dot={<></>} activeDot={<></>}
                onIndexChanged={(i: number) => {
                    // currentIndex = i;
                    setCurrentIndex(() => i);
                    // console.log(currentIndex, i);
                }} index={currentIndex}>
                {props.children}
            </Swiper>
        </>

    )
}

export default SegmentControl