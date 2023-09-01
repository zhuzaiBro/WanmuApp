import { Icon } from '@ant-design/react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { View, Image, Text, TouchableOpacity, GestureResponderEvent, Pressable, StyleProp, ViewStyle } from 'react-native'
import { ROATE } from '../../assets/size'
import { useGoPage } from '../../utils/RouterHelper';

export default function ShopItem({ show, defineStyle, nav, item }: { show: any, defineStyle?: StyleProp<ViewStyle>, nav: any, item: any }) {
  const [longPress, setLongPress] = useState(false);
  const { good_name, date, id, price, img_uri } = item
  const goShopDetailPage = useCallback((e: GestureResponderEvent) => {
    if (longPress) return;
    nav.navigate("ShopDetail", { name: 'zhujie' })
  }, [longPress]);
  const isShow = Math.random() > 0.5;
  const showDontLike = useCallback(() => {
    setLongPress(() => true)
  }, []);

  return (
    <Pressable onLongPress={showDontLike} onPress={goShopDetailPage}
      style={{
        width: ROATE(166), borderRadius: ROATE(12), overflow: "hidden", height: ROATE(222),
        backgroundColor: "#fff", marginLeft: ROATE(8), marginBottom: ROATE(8), ...(defineStyle as any)
      }}>
      <Image style={{ height: ROATE(170), position: "absolute", width: ROATE(166), top: 0, left: 0 }}
        source={{ uri: img_uri || "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/22.png" }} />
      <View style={{
         height: ROATE(52), marginTop: "auto",
        paddingVertical: ROATE(8), backgroundColor: "#ffffff",
         paddingHorizontal: ROATE(6)
      }}>

        <Text numberOfLines={1} style={{
            color: "#000000B2", lineHeight: ROATE(16), fontSize: ROATE(14),

        }}>{good_name || "纯牛奶"}</Text>
        {/* <View style={{ height: ROATE(10), marginHorizontal: ROATE(4), width: ROATE(1.2), backgroundColor: "#00000073" }} /> */}
        <Text style={{  marginTop: ROATE(4), fontSize: ROATE(16), lineHeight: ROATE(16), color: "#000000e5", fontWeight:"500" }}>￥{price || 24}</Text>
      </View>

      {/* 会员价控件 */}
      <View style={{
        position: "absolute", paddingVertical: ROATE(4), display: isShow ? "flex" : "none", alignItems: "center", left: 0, top: 0, height: ROATE(32), width: ROATE(56),
        backgroundColor: "#a6e284ff", borderTopRightRadius: ROATE(8), borderBottomRightRadius: ROATE(8)
      }}>
        <Text style={{
          fontSize: ROATE(10), lineHeight: ROATE(12.57), color: "#000000e6",
          fontWeight: "600", fontStyle: "italic"
        }}>会员价</Text>
        <Text numberOfLines={1} style={{ fontSize: ROATE(10), lineHeight: ROATE(12.57) }}>¥10.00</Text>
      </View>

      {/* 长按出现的遮罩层 */}
      <View style={{
        height: ROATE(222), backgroundColor: "rgba(216,216,216,0.7)", position: "absolute", top: 0, left: 0,
        zIndex: 1, width: ROATE(168), display: longPress ? "flex" : "none"
      }}>
        <Pressable style={{
          marginTop: ROATE(47), marginLeft: ROATE(26), marginRight: ROATE(18),
          flexDirection: "row", height: ROATE(26), alignItems: "center", paddingLeft: ROATE(8),
          borderRadius: ROATE(40), backgroundColor: "#fff"
        }}>
          <Icon color='#4646' size={ROATE(12)} name="lock" />
          <Text style={{ marginLeft: ROATE(4), fontSize: ROATE(10.8), color: "#464646", lineHeight: ROATE(15.13) }}>对此商品不感兴趣</Text>
        </Pressable>
        <Pressable style={{
          marginTop: ROATE(18), marginLeft: ROATE(26), marginRight: ROATE(18),
          flexDirection: "row", height: ROATE(26), alignItems: "center", paddingLeft: ROATE(8),
          borderRadius: ROATE(40), backgroundColor: "#fff"
        }}>
          <Icon color='#4646' size={ROATE(12)} name="lock" />
          <Text style={{ marginLeft: ROATE(4), fontSize: ROATE(10.8), color: "#464646", lineHeight: ROATE(15.13) }}>此商品引起不适</Text>
        </Pressable>
      </View>
    </Pressable >
  )
}
