import React, { useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, } from 'react-native';
import { RNCamera, FaceDetector } from 'react-native-camera';


export default function Relaese() {


    useEffect(() => {
        // request(PERMISSIONS.IOS.CAMERA).then(r => {
        //     console.log(r);
        // })
        FaceDetector.detectFacesAsync("/app/public/image", {
            mode: "accurate",
        }).then(r => console.log(r)).catch(e=> console.log(e))
    }, []) 


    return (
        <>
            <View style={{ height: Dimensions.get("screen").height }}>

                <RNCamera
               
                    onBarCodeRead={(res) => {
                        console.log(res.data, res.rawData, res.type);
                    }} 
                    style={{ height: 520 }} 
                    autoFocus='on'>
                    <View style={{ height: 150, backgroundColor: "rgba(0,0,0,0.6)" }}></View>
                    <View style={{ flexDirection: "row", height: 220, marginLeft: "auto", marginRight: "auto", overflow: "hidden" }}>
                        <View style={{ width: (Dimensions.get("screen").width - 220) / 2, height: 220, backgroundColor: "rgba(0,0,0,0.6)" }}></View>
                        <View style={{ flexGrow: 1, height: 220 }}></View>
                        <View style={{ width: (Dimensions.get("screen").width - 220) / 2, height: 220, backgroundColor: "rgba(0,0,0,0.6)" }}></View>
                    </View>
                    <View style={{ height: 150, backgroundColor: "rgba(0,0,0,0.6)" }}></View>
                </RNCamera>


                <View style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: "#f5f5f5" }}>
                    <Text style={{ fontSize: 18, textAlign: "center", margin: 12 }}>玩目扫一扫</Text>

                    <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 12 }}>
                        <Text style={styles.defaultFont}>好友</Text>
                        <Text style={{
                            ...styles.defaultFont,
                            borderBottomWidth: 3, borderBottomEndRadius: 3,
                            borderBottomStartRadius: 3
                        }}>学习资料</Text>
                        <Text style={styles.defaultFont}>商品</Text>

                    </View>
                </View>
            </View>


        </>

    )
}

const styles = StyleSheet.create({
    defaultFont: {
        fontSize: 15,
        color: "#202020",
        padding: 4
    }
})