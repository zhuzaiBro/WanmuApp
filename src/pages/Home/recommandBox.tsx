import React, { useMemo } from 'react'
import { View, Text } from 'react-native'
import { ROATE } from '../../assets/size';

export function Tag({ text }) {
    return (
        <View style={{
            height: ROATE(24), backgroundColor: "#459d1d0a", borderRadius: ROATE(4),
            marginRight: ROATE(8), paddingVertical: ROATE(3), paddingHorizontal: ROATE(8)
        }}>
            <Text style={{ color: "#459d1d", fontSize: ROATE(10), lineHeight: ROATE(18) }}>
                {text}
            </Text>
        </View>
    )
}

export default function recommandBox() {



    function RecommandInfo({ item }) {
        const tags = item.tags.map((it, index) => {
            return (<Tag key={index} text={it} />)
        })

        return (
            <View style={{ marginBottom: ROATE(20),width: ROATE(287) }}>
                <Text style={{ fontSize: ROATE(14), color: "#000000E6",  lineHeight: ROATE(20) }} numberOfLines={1}>
                    {item.info}
                </Text>
                <View  style={{ flexDirection: "row", marginTop: ROATE(4)  }}>
                    {tags}
                </View>
            </View>
        )
    }
    const recommandList = [
        {
            info: "如何在大广赛中获得国赛金奖的，附参赛达大厦大厦大厦接口方式的快捷方式发送到发就是风景说浪费多少",
            tags: ["青氪推荐", "大一"]
        }, {
            info: "超强艺设选课推荐，最完整红黑榜表单",
            tags: ["大一"]
        },
    ];

    const recommands = useMemo(() => recommandList.map((it, index) => {
        return <RecommandInfo item={it} key={index} />
    }), [])

    return (
        <View style={{
            backgroundColor: "#f7faf9", paddingHorizontal: ROATE(12), paddingTop: ROATE(10),
            paddingBottom: ROATE(13), height: ROATE(138), borderRadius: ROATE(16)
        }}>
            {recommands}
        </View>
    )
}
