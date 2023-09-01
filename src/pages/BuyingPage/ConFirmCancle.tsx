import { Modal } from "native-base";
import React, { useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ROATE } from "../../assets/size";



export default function ConFiremCancle({ visible = true, setVisible, callback }) {
    const onClose = useCallback(() => {
        setVisible(prev => !prev);
        callback();
    }, []);

    const CloseConfirm = useCallback(()=> {
        setVisible(prev => !prev);
    }, [])


    return (<Modal isOpen={visible} onClose={CloseConfirm}>
        <Modal.Content style={{ width: ROATE(260), height: ROATE(115), borderRadius: ROATE(16), backgroundColor: "#fff" }}>
            <View style={{ width: ROATE(260), height: ROATE(115) }}>
                <Text style={{
                    marginLeft: "auto", marginRight: "auto", fontSize: ROATE(14), fontWeight: "400", color: "#000",
                    marginTop: ROATE(27), marginBottom: ROATE(20)
                }}>是否放弃本次支付</Text>
                <View style={{ borderTopWidth: ROATE(2), flexDirection: "row",height:"100%", borderColor: "#BFBFBF" }}>
                    <TouchableOpacity onPress={onClose} style={{width: ROATE(129), }}>
                        <Text style={{textAlign: "center", lineHeight: ROATE(40), ...styles.f14w4, color: "#000"}}>
                            放弃
                        </Text>
                    </TouchableOpacity>
                    <View style={{height: ROATE(48), width: ROATE(2), backgroundColor: "#BFBFBF"}}/>
                    <TouchableOpacity onPress={CloseConfirm} style={{width :ROATE(129)}}>
                        <Text style={{textAlign: "center", lineHeight: ROATE(40), ...styles.f14w4, color: "#000"}}>
                            继续付款
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal.Content>
    </Modal>)
}


const styles = StyleSheet.create({
    f14w4: {
        fontSize: ROATE(14),
        fontWeight: "400",
        color: "rgba(0,0,0,0.45)"
    },
})