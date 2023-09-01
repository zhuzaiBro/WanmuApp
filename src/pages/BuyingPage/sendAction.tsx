import { Actionsheet, Box } from 'native-base'
import React, { SetStateAction, useMemo, useState } from 'react'
import { View, Text,  Pressable } from 'react-native';
import { ROATE } from '../../assets/size';
import Icon from '../../iconfont';


function ChooseItem({ item, index, flag, setCurrent }: {item:any, index: number, flag: boolean, setCurrent: React.Dispatch<SetStateAction<number>> }) {
    const Container = useMemo(() => (props) => (<View style={{ flexDirection: "row", marginBottom: ROATE(24) }}>
        <Text style={{ fontSize: ROATE(14), letterSpacing: ROATE(-1), width: ROATE(88), color: "#00000073", fontWeight: "400" }}>{item.type}</Text>
        <Text style={{ fontSize: ROATE(14), width: ROATE(100), letterSpacing: ROATE(-1), marginRight: "auto", marginLeft: ROATE(28), color: "#000000e6", fontWeight: "500" }}>{item.price || "剩余4次"}</Text>
        {props.children}
    </View>), [])
    return (
        <Container>
            <Pressable style={{padding: ROATE(4) }} onPress={() => {
                setCurrent(() => index)
            }}>
                <Icon style={{  display: flag? "none" : "flex"}} name="weixuanzhong" size={ROATE(24)}/>
                <Icon style={{display: flag ?"flex" :"none"}} size={ROATE(24)} name='xuanzhong-heise' />
            </Pressable>
        </Container>
    )
}

export default function SendAction({onClose, isOpen}) {

    const [current, setCurrent] = useState(0);

    const itemList = [
        {
            type: "付费配送",
            price: 2.00,
        }, {
            type: "会员免费配送",
            price: void 0,
        }
    ];

    const list = itemList.map((it, index) => <ChooseItem index={index} setCurrent={setCurrent} flag={index === current} item={it} />)
    return (
        <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
            <Actionsheet.Content>
                <Box style={{ height: ROATE(309), paddingVertical: ROATE(6), paddingHorizontal: ROATE(16), width: ROATE(375), }}>
                    <View style={{ marginBottom: ROATE(39) }}>
                        <Icon size={ROATE(24)}  onPress={onClose} name="guangbi" />
                        <Text style={{ width: ROATE(106), color: "#000000e6", left: ROATE(135), position: "absolute", fontSize: ROATE(16), fontWeight: "500" }}>配送选择</Text>
                    </View>
                    {list}
                </Box>
            </Actionsheet.Content>
        </Actionsheet>
    )
}
