import { Icon } from '@ant-design/react-native';
import React, { useCallback, useEffect, useState } from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import { ROATE } from '../../assets/size';
import {useBackTo} from '../../utils/RouterHelper';

export default function Header({navigation, route}) {

    const [back, setBack] = useState(void 0) as any;
  
    useEffect(()=> {
        setBack(() => useBackTo(navigation, route, null));
    }, []);

    return (
        <View style={{paddingTop : ROATE(44), backgroundColor: "#222"}}>
<View style={styles.header}>
            <Icon onPress={back} color='#fff' style={{ marginRight: ROATE(119.5) }} name='backward' />
            <Text style={{
                fontSize: ROATE(16), fontWeight: "600", color: "#fff",
                lineHeight: ROATE(22.4)
            }}>青氪中心</Text>
            <Icon color='#fff' style={{ marginLeft: "auto" }} name='wifi' />
        </View>

        </View>
        
    )
}


const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("screen").height,
        backgroundColor: "#222222",

    },
    header: {
        
        height: ROATE(44),
        paddingVertical: ROATE(10),
        paddingHorizontal: ROATE(12),
        flexDirection: "row",
       
    },
    font12w4: {
        fontSize: ROATE(12),
        fontWeight: "400",
        color: "rgba(255,255,255, 0.7)"
    },
    contentLine: {
        width: ROATE(343),
        borderRadius: ROATE(12),
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: ROATE(16),
        backgroundColor: "#353535",
        paddingHorizontal: ROATE(23),
        paddingVertical: ROATE(17),
    }
});