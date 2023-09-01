
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Animated, FlatList, PanResponder, Text, View, VirtualizedList } from 'react-native';
import { ROATE } from '../../assets/size';

export const TipView = ({ y }) => {
    const [tip, setTip] = useState("下拉刷新")
    
    return (<View style={{
        height: ROATE(46), top: ROATE(88), justifyContent: "center", alignItems: "center", zIndex: -1, width: ROATE(375),
        left: 0, position: "absolute",
    }}>
        <Text style={{ color: "#fff", textAlign: "center" }}>{tip}</Text>
    </View>)
}

export default function DynamicList({ tip, y, onTouchEnd, stickTopComp, DATA, getItem, RenderItem }) {

    // const [scrollTop, setScrollTop] = useState(0);
    let scrollTop = useRef(0).current;
    const setScroll = useCallback(({ nativeEvent, }) => {

        if (nativeEvent) {
            scrollTop = nativeEvent.contentOffset.y;
            
        }
        if(nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height >= nativeEvent.contentSize.height - 30) {
                getItem()
            }
    }, []);
    useEffect(() => {
        (async () => {
            await getItem();
 
        })()
    }, []);

    const pan = useRef(PanResponder.create({
        onMoveShouldSetPanResponder(e, gs) {
            const {dx} = gs; 
            if(Math.abs(dx) >= 10) {
                return false
            }
            return scrollTop <= 0
        },
        onPanResponderMove(e, gs) {
            if (scrollTop > 0) return;
            
            const { dy, dx } = gs;
            if(Math.abs(dx) >= 100) {
                return;
            }
            if (dy < 0) {
                y.setValue(0)
                return;
            }
            else if (dy < 92 && scrollTop <= 0) {
                y.setValue(dy / 2)
            } else if (dy >= 92) {
                 tip(() => "松开刷新")
                return;
            } else {
            }
        },
        onPanResponderRelease(e, gs) {
            Animated.timing(y, {
                toValue: 0,
                useNativeDriver: true,
                duration: 350
            }).start();
        },
    })).current;

    return (


        useMemo(() => (<FlatList {...pan.panHandlers} onScrollEndDrag={onTouchEnd}
            onScroll={setScroll}
            bounces={false}
            ListHeaderComponent={stickTopComp}
            style={{ backgroundColor: "#03151f", height: ROATE(669), zIndex: 2 }}
            showsVerticalScrollIndicator={false}
            disableVirtualization
            data={DATA}
            renderItem={({ index, item }) => (
                <RenderItem item={item} index={index} key={index} />
            )}
        />), [DATA])
    )
}