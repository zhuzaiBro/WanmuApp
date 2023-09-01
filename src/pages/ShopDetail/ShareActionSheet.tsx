import React from 'react';
import { Actionsheet, Box, useDisclose, View } from 'native-base';
import { ROATE } from '../../assets/size';
import { Dimensions, Pressable, StyleSheet, Text } from 'react-native';
import { Icon } from '@ant-design/react-native';

export default function ShareActionSheet({ isOpen, setIsOpen }) {

    function CommandBox() {
        return (
            <Pressable style={{ alignItems: "center" }}>
                <View style={styles.itemBox}>
                    <Icon color='#333' name='link' />
                </View>
                <Text style={{ fontSize: ROATE(14), color: "#333", marginTop: ROATE(9.5) }}>链接</Text>
            </Pressable>
        )
    }

    return (
        <Actionsheet hideDragIndicator isOpen={isOpen} onClose={() => { setIsOpen(() => false) }}>
            <Actionsheet.Content >
                <Box height={ROATE(249)}>
                    <Text style={{ fontSize: ROATE(16), marginBottom: ROATE(18.75), textAlign: "center", fontWeight: "600" }}>
                        分享获佣
                    </Text>
                    <Box height={ROATE(249)} justifyContent="space-around" width={Dimensions.get("screen").width} flexDirection={"row"}>
                        <CommandBox /><CommandBox /><CommandBox /><CommandBox />

                    </Box>

                </Box>
                <Text onPress={() => { setIsOpen(() => false) }} style={{marginTop: ROATE(-30), fontSize: ROATE(20), fontWeight: "600"}}>取消</Text>
            </Actionsheet.Content>
        </Actionsheet>
    )
}

const styles = StyleSheet.create({
    itemBox: {
        height: ROATE(54),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: ROATE(27),
        backgroundColor: "#f1f1f1",
        width: ROATE(54)

    }
})