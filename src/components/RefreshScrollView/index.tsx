import React, { useCallback, useState } from 'react';
import {
    ScrollView, Animated, Text, LayoutAnimation,
    Vibration,
    StyleProp,
    ViewStyle,
    TextStyle,
    NativeSyntheticEvent,
    NativeScrollEvent,

} from 'react-native';


interface IProps {
    style?: StyleProp<ViewStyle>;
    refreshStyle?: StyleProp<ViewStyle>;
    title: string;
    children?: any;
    titleStyle?: StyleProp<TextStyle>;
    duration?: number;
    height?: number;
    topCallback?: Function;
    bottomCallback?: Function; 
}

export default function RefreshScrollView(props: IProps) {

    const [visible, setVisible] = useState(false);
    const [y, setY] = useState(0);
    const [underY, setUnderY] = useState(0);


    const _onRefresh =
        useCallback((handler: React.Dispatch<React.SetStateAction<number>>, callback?:Function)=> {
        // Animate the update
        LayoutAnimation.spring();
        setVisible(true);
        handler(props.height || 52);
        callback && callback();
        setTimeout(() => {
            setVisible(false);
            handler(0);
        }, props.duration || 800);
    },[]);
    

    const judge = useCallback((e:NativeSyntheticEvent<NativeScrollEvent>)=> {
        // console.log(e);
         if (e.nativeEvent.contentOffset.y < 1 && !visible) {
             Vibration.vibrate([0, 12], false);
                _onRefresh(setY, props.topCallback);
                return;
            }
    },[]);
    
    const judgeBottom = useCallback(
      (e:NativeSyntheticEvent<NativeScrollEvent>) => {
        if (e.nativeEvent.contentOffset.y + e.nativeEvent.layoutMeasurement.height
            >= e.nativeEvent.contentSize.height - 60 && !visible) {
           _onRefresh(setUnderY, props.bottomCallback);
           return;
       }
      },
      [],
    )
    

    return (
        <ScrollView style={props.style} scrollEventThrottle={100}
        onScrollEndDrag={judge}>
            <Animated.View style={{overflow: "hidden",
                height: y, ...(props.refreshStyle as any)
            }}>
                <Text style={{ ...props.titleStyle as any, opacity: y }}>{props.title}</Text>
            </Animated.View>

            {props.children}
            <Animated.View style={{
                height: underY, ...(props.refreshStyle as any)
            }}>
                <Text style={{ ...props.titleStyle as any,
                    overflow: "hidden", opacity: underY }}>
                    {props.title}
                </Text>
            </Animated.View>
        </ScrollView>
    )
}
