import { Icon } from '@ant-design/react-native'
import { View } from 'native-base'
import React, { useCallback } from 'react'
import { Dimensions, StyleSheet,Text } from 'react-native'
import { ROATE } from '../../../assets/size';

export default function DefineHeader({navigation, title, iconName= ""}) {

    const goShopPage = useCallback(() => {
        navigation.navigate("Index");
    }, []);


    return (
        <View style={styles.header}>
            <View style={{
                ...styles.headerLine,
            }}>
                <Icon onPress={goShopPage}
                    style={{
                        marginLeft: ROATE(8), position: "absolute", top: ROATE(-1),
                        left: ROATE(12)
                    }} name='arrow-left' color='#000' />
                <Text style={{
                    fontSize: ROATE(16), marginLeft: "auto", marginRight: "auto",
                    color: "#000"
                }}>{title}</Text>
                <Icon style={{ position: "absolute", right: ROATE(16) }} name='search' color='#000' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("screen").height,
        backgroundColor: "#f5f5f5",
    },
    header: {
        backgroundColor: "#d7d7d7"
    },
    headerLine: {
        height: ROATE(38),
        zIndex: 1
    },
})