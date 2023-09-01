import React, { useCallback, useContext, useState } from 'react';
import { Modal } from 'native-base';
import { View, Text, StyleSheet } from 'react-native';
import { ROATE } from '../../assets/size';
import { Icon } from '@ant-design/react-native';
import {CodeField} from 'react-native-confirmation-code-field';
import {Gctx} from '../../context';
import {useGoPage} from '../../utils/RouterHelper';

export default function InputPwd({ onClose, paySuccess, navigation, closeActionSheet, isOpen }) {

    const useGetVisible = useCallback(() => {
        onClose(prev => !prev);
    }, []);
const statusColor = useContext(Gctx);
    const [pwd, setPwd] = useState("");

    return (
        <Modal isOpen={isOpen} onClose={useGetVisible}>
            <Modal.Content>
                <View style={{ height: ROATE(162), width: ROATE(286), backgroundColor: "#fff" }}>
                    <Icon onPress={useGetVisible}
                        color="#000" style={{ marginTop: ROATE(17.6), marginLeft: ROATE(17.6), marginBottom: ROATE(11.6) }} name="step-backward" />
                    <Text style={{ fontSize: ROATE(14), color: "#000", fontWeight: "400", textAlign: "center" }}>支付密码</Text>
                   
                    <CodeField autoFocus={isOpen} value={pwd} onChangeText={(e)=> {
                        setPwd(e);
                        if(pwd.length === 5) {
                            onClose();
                            closeActionSheet();
                            setTimeout(() => {
                                statusColor.setStatusBarBg(() => "transparent")
                            }, 300); 
                            paySuccess();
                        }
                    }}
                     keyboardType="number-pad"  passwordRules={""} rootStyle={{ justifyContent: "center", width: ROATE(230), height: ROATE(44), marginRight: "auto", marginLeft: "auto", marginTop: ROATE(16), }} cellCount={6} renderCell={({ index, symbol, isFocused }) => (

                        <View style={[styles.cell, index === 0 && styles.firstCell, index === 5 && styles.lastCell, isFocused && styles.focusCell]}>
                            <View style={{display: (index <= pwd.length  - 1)? "flex": "none", borderRadius: ROATE(4), height: ROATE(8), width: ROATE(8), backgroundColor: "#000"}}/>
                        </View>
                    )} />

                </View>
            </Modal.Content>
        </Modal>
    )
}

const styles = StyleSheet.create({
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFiledRoot: { marginTop: 20 },
    // 里面每个密码小框的样式
    cell: {
        width: ROATE(39),
        height: ROATE(38),
        lineHeight: ROATE(28),
        fontSize: ROATE(24),
        borderWidth: ROATE(1.1),
        borderColor: '#00000030',
        justifyContent: 'center',
        alignItems: "center",
    },
    firstCell: {
        borderTopLeftRadius: ROATE(8),
        borderBottomLeftRadius: ROATE(8)
    },
    lastCell: {
        borderTopRightRadius: ROATE(8),
        borderBottomRightRadius: ROATE(8)
    },
    // 当里面的每个密码小框被选中之后的样式
    focusCell: {
        // borderColor: '#000',
    },
});
