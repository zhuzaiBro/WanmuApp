import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { ROATE, ScreenHeight } from '../../../assets/size';
import Icon from '../../../iconfont';
import usePos from '../../../hooks/usePosition';
import WebView from 'react-native-webview';

export default function Ui() {
  const pos = usePos();
  console.log(pos)
  return (
    <View style={styles.container}>
      {/* <WebView source={{uri :"http://www.discosoul.com.cn"}}/> */}
      <View style={styles.header}>
        <Pressable>
          <Icon name="fanhuianniu-zuo" size={ROATE(24)} />
        </Pressable>
        <View style={{ flexDirection: "row", height: ROATE(36), width: ROATE(288), borderWidth: ROATE(1.2), borderRadius: ROATE(6), marginLeft: ROATE(6), alignItems: "center" }}>
          <Icon name='sousuo' size={ROATE(24)} />
          <TextInput placeholder='搜索地点' placeholderTextColor="#00000073" />

        </View>
        <Pressable style={{marginLeft: "auto"}}>
          <Text style={{fontSize: ROATE(14), color: "#000000e6"}}>搜索</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: ScreenHeight,
    backgroundColor: "#fff",
    paddingHorizontal: ROATE(12)
  },
  header: {
    height: ROATE(88),
    paddingTop: ROATE(44),
    flexDirection: "row",
    alignItems: "center"
  }
})