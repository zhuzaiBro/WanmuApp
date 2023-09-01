import React from 'react';
import { ImageBackground, Image, Text, Pressable } from 'react-native';
import { Actionsheet, Box, ScrollView, useDisclose, View } from 'native-base';
import { ROATE } from '../../assets/size';
import Icon from '../../iconfont';

function TicKet({ isSelected = false, item }) {
    return (
        <View style={{ height: ROATE(88), marginTop: ROATE(20), width: ROATE(343), }}>
            <ImageBackground style={{ height: ROATE(88), flexDirection: "row", width: ROATE(343) }} source={require("../../assets/pictures/shop/ticket.png")}>
                <View style={{ width: ROATE(89), height: ROATE(88), }}>
                    <Text style={{ color: "#A6E284", fontSize: ROATE(18), lineHeight: ROATE(18), letterSpacing: ROATE(-1), textAlign: "center", marginTop: ROATE(20), fontWeight: "600" }}>￥{item.price}.00</Text>
                    <Text style={{ marginBottom: ROATE(22), marginTop: "auto", color: "#ffffffb3", textAlign: "center", fontSize: ROATE(12) }}>{item.option}</Text>
                </View>
                <View style={{ width: ROATE(252), flexDirection: "row", alignItems: "center", height: ROATE(88) }}>
                    <View style={{ width: ROATE(173), marginLeft: ROATE(18), marginRight: ROATE(26), height: ROATE(88) }}>
                        <Text style={{ fontSize: ROATE(16), lineHeight: ROATE(16), letterSpacing: ROATE(-2), color: "#ffffffe6", marginTop: ROATE(10) }}>{item.title}</Text>
                        <Text style={{ marginTop: ROATE(4), fontSize: ROATE(12), color: "#ffffff73" }}>{item.date}</Text>
                        <Text style={{ color: "#ffffffe6", fontSize: ROATE(12), marginTop: "auto", marginBottom: ROATE(10) }}>{item.info}</Text>
                    </View>
                    <View style={{ width: ROATE(50), height: ROATE(88) }}>
                        <Pressable onPress={() => {
                        }}>
                            <Image source={require("../../assets/pictures/shop/whiteCircle.png")} style={{ width: ROATE(20), height: ROATE(20), position: "absolute", top: ROATE(34), display: isSelected ? "flex" : "none" }} />
                        </Pressable>
                        <Icon onPress={() => {
                        }} size={ROATE(20)} style={{ position: "absolute", top: ROATE(34), display: isSelected ? "none" : "flex" }} name="chengong" />
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}

export default function TicketAction({ onClose, isOpen }) {
    const ticketList = [
        {
            price: 2,
            title: "买平台自营商品专享红包",
            option: "满40元可用",
            date: "06.11 17:45-09.21 17:45",
            info: "仅限余额消费"
        },
        {
            price: 2,
            title: "买平台自营商品专享红包",
            option: "满40元可用",
            date: "06.11 17:45-09.21 17:45",
            info: "仅限余额消费"
        },{
            price: 2,
            title: "买平台自营商品专享红包",
            option: "满40元可用",
            date: "06.11 17:45-09.21 17:45",
            info: "仅限余额消费"
        },
        {
            price: 2,
            title: "买平台自营商品专享红包",
            option: "满40元可用",
            date: "06.11 17:45-09.21 17:45",
            info: "仅限余额消费"
        }
    ];
    const tickets = ticketList.map((it) =>
        <TicKet item={it} />)
    return (
        <Actionsheet hideDragIndicator isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content>
                <Box style={{ height: ROATE(441), paddingHorizontal: ROATE(16), paddingVertical: ROATE(6), width: ROATE(375), }}>
                    <View style={{}}>
                        <Icon onPress={onClose} name='guangbi' size={ROATE(24)} />
                        <Text style={{ height: ROATE(22), position: "absolute", width: ROATE(60), left: ROATE(152), fontSize: ROATE(16), fontWeight: "500", color: "#000000e6" }}>优惠券</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} bounces={false} >
                         {tickets}
                    </ScrollView>
                   

                </Box>
            </Actionsheet.Content>
        </Actionsheet>
    )
}
