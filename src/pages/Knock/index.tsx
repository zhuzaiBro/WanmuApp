import React, { useState } from 'react'
import { ScrollView, View, StyleSheet, Image, Animated, } from 'react-native';
import { Avatar, Box, Center, Heading, HStack, Icon, Pressable, Spacer, Text, VStack, } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import VideoComp from '../../components/VideoComp';



export default function Knock({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={{ backgroundColor: "#fff", borderWidth: 2, borderRadius: 12 }}>
        <Text style={styles.titleFont}>
          消息盒子
        </Text>
        <View style={{ flexDirection: 'row', margin: 8 }} onTouchEnd={() => { navigation.navigate("Chat") }}>
          <View style={{ alignItems: "center" }} >
            <Image style={{ width: 36, height: 36 }} source={{ uri: "https://cdn.wanmu.club//user_files/2/avatar/11840081_1637472759.jpg" }} />
            <Text>玩目代拿</Text>
          </View>
          <View style={{ marginRight: 8, backgroundColor: "#f5f5f5", flexGrow: 1, padding: 8, borderRadius: 8 }}>
            <Text>
              你的外卖到啦!
            </Text>
          </View>
        </View>
      </View>

  
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  titleFont: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: "#202020",
    borderBottomWidth: 2,
    borderColor: "#aaa"
  }
})
