import React, { useCallback, useEffect, useState } from 'react'
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, Text, View, Image, Modal, Dimensions } from 'react-native'
import store from "../../store";
import { loginOut } from '../../server/user';
import {  StatusBar } from 'native-base';
import { Icon } from '@ant-design/react-native';
import { ROATE } from '../../assets/size';

export default function Setting({ navigation }) {

  const [userInfo, setUserInfo] = useState(null) as any;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {

      setUserInfo(store.getState());
    }, 1000);
  }, []);

  const userLoginOut = useCallback(
    () => {
      (async () => {
        await loginOut();
        navigation.navigate("Index")
      })();
    },
    [],
  )

  const controlModel = useCallback(() => {
    setVisible(!visible)
  }, [])



  return (
    <>
    <StatusBar barStyle="light-content" />
      <ScrollView style={styles.container}>
        <Icon name="backward" size={ROATE(24)} onPress={()=> {
          navigation.navigate("Me")
        }}
        style={{paddingBottom:ROATE(12), paddingHorizontal: ROATE(12)}}/>
        <View style={styles.contentBox}>
          <Text style={{ ...styles.defaultFont, fontSize: 18 }}>个人资料</Text>
          <View style={{ ...styles.infoItem }}>
            <Text style={styles.defaultFont}>头像
            </Text>
            <Image style={{ width: 52, height: 52, borderRadius: 6 }} source={{ uri: userInfo?.avatar }} />
          </View>
          <View style={{ ...styles.infoItem }}>
            <Text style={styles.defaultFont}>账号
            </Text>
            <Text style={styles.defaultFont}>{userInfo?.phone}</Text>
          </View>
          <View style={{ ...styles.infoItem }}>
            <Text style={styles.defaultFont}>昵称
            </Text>
            <Text onPress={controlModel} style={styles.defaultFont}>{userInfo?.nickname}</Text>
          </View>
          {/* <View style={{ ...styles.infoItem }}>
          <Text style={styles.defaultFont}>二维码
          </Text>
          <Text style={styles.defaultFont}>{userInfo?.phone}</Text>
        </View> */}
          <View style={{ ...styles.infoItem }}>
            <Text style={styles.defaultFont}>更多
            </Text>
            <Text></Text>
          </View>
        </View>

        <View style={{ borderRadius: 6, overflow: 'hidden', backgroundColor: "#6D6F7B", marginTop: 12 }}>
          <View style={{ ...styles.infoItem }}>
            <Text style={styles.defaultFont}>个性签名
            </Text>
            <Text style={styles.defaultFont}>{userInfo?.description}</Text>
          </View>

        </View>
        <TouchableOpacity onPressOut={userLoginOut} style={styles.btn}>
          <Text style={styles.defaultFont}>退出登录</Text>
        </TouchableOpacity>

      </ScrollView>
      <View style={{}}>
        <View style={{
          display: visible ? "flex" : "none", height: 200, width: Dimensions.get("screen").width, position: "absolute", bottom: 0, left: 0, backgroundColor: "#f5f5aa",
          overflow: "hidden"
        }}>
          <TextInput placeholder='修改昵称' />
          <View style={{
            flexDirection: "row", justifyContent: "space-between", position: "absolute", bottom: 12, width: Dimensions.get("screen").width,
            padding: 12
          }}>
            <TouchableOpacity onPress={controlModel} style={{ backgroundColor: "#008c8c", padding: 5 }}>
              <Text style={{ fontSize: 15 }}>取消</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "#008c8c", padding: 5 }}>
              <Text style={{ fontSize: 15 }}>确定</Text>
            </TouchableOpacity>

          </View>

        </View>
      </View>
    </>

  )
}

const styles = StyleSheet.create({
  defaultFont: {
    color: "#0cc4c4",
    fontSize: 15
  },
  container: {
    padding: 12,
    backgroundColor: "#202020"
  },
  contentBox: {
    borderWidth: 1,
    borderColor: "#0cc4c4",
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: "#6D6F7B",
    padding: 14
  }
  ,
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    // backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#0cc4c4"
  },
  btn: {
    backgroundColor: "#6D6F7B",
    height: 52,
    borderRadius: 8,
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center"
  }
})