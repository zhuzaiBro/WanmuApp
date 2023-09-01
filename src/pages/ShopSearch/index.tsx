import { Dimensions, ScrollView, StyleSheet, TextInput, View, Image, Text } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Icon } from '@ant-design/react-native';
import { ROATE } from '../../assets/size';

// 左边搜索的区域
function SearchTagArea() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // 测试数据，后面用ajax请求
    const tagList = [
        {
            tagName: "热销",
        },
        { tagName: "食品" },
        { tagName: "洗护" }
    ]

    function Tag({ tag, index }) {
        const changeTag = useCallback(() => {
            setCurrentIndex(() => index);
        }, [])
        return <Text onPress={changeTag}
            style={index === currentIndex ? [styles.tag, styles.activeTag] :
                styles.tag}>
            {tag.tagName}
        </Text>
    }

    function TagList(tagList) {
        return tagList.map((it: any, index: number) => {
            return <Tag tag={it} key={index} index={index} />
        })
    }

    return (
        <View style={styles.contentLeft}>
            {TagList(tagList)}
        </View>
    )
}

// 右边主区域
function TagItem({ item, nav }) {
    // 跳转到商品详细页面
    const goShopDetailPage = useCallback(() => {
        // console.log(nav);
        nav.navigate("ShopDetail", {name: 'zhujie'})
    }, []);
    return (
        <View onTouchEnd={goShopDetailPage} style={styles.tagItem}>
            <Image
                style={styles.tagImg}
                source={{ uri: item.uri }} />
            <Text style={styles.tagItemFont}>
                {item.title}
            </Text>
        </View>
    )
}

// 右边主区域
function TagItemContainer({ tagItemList, nav }) {
    const renmderLists = tagItemList.map((it: any, index) => {
        return <TagItem nav={nav} key={index} item={it} />
    });
    return <View style={{ flexDirection: "row" }}>
        {renmderLists}
    </View>
}

export default function ShopSearch({ navigation }) {

    const goShopPage = useCallback(() => {
        navigation.navigate("Shop")
    }, []);

    const tagItemList = [{
        uri: "http://www.zhuzaibrother.cn/static/upload/2022-2-13-19-58-31-3-a22ab.jpg",
        title: "泡面"
    }, {
        uri: "http://www.zhuzaibrother.cn/static/upload/2022-2-13-19-58-31-3-a22ab.jpg",
        title: "泡面"
    }, {
        uri: "http://www.zhuzaibrother.cn/static/upload/2022-2-13-19-58-31-3-a22ab.jpg",
        title: "泡面"
    }, {
        uri: "http://www.zhuzaibrother.cn/static/upload/2022-2-13-19-58-31-3-a22ab.jpg",
        title: "泡面"
    },]

    return (
        <ScrollView style={{ backgroundColor: "#EDEDED" }}>
            <View style={{ flexDirection: "row", marginTop: ROATE(6) }}>
                <Icon onPress={goShopPage}
                    style={{ marginRight: ROATE(14), marginLeft: ROATE(14) }} name='arrow-left' color='#000' />
                <View style={styles.searchBar}>
                    <Icon name='search' color='#000' />
                    <TextInput style={styles.search} placeholder='搜索商品' />
                </View>
            </View>
            <View style={styles.content}>
                {/* 搜索侧边栏 */}
                <SearchTagArea />
                {/* 右边主区域 */}
                <View style={styles.contentRight}>
                    {/* 标题 */}
                    <Text style={{ fontSize: ROATE(14), color: "#000", marginBottom: ROATE(14), }}>畅销榜单</Text>
                    {/* 主要容器 */}
                    <TagItemContainer tagItemList={tagItemList} nav={navigation} />

                </View>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: "#fff",
        borderRadius: ROATE(12),
        borderWidth: 1,
        borderColor: "#333333",
        width: ROATE(309),
        height: ROATE(32),
        paddingRight: ROATE(8),
        paddingLeft: ROATE(8),
        flexDirection: "row",
        marginRight: ROATE(16)
    },
    tag: {
        fontSize: ROATE(14),
        marginLeft: ROATE(20),
        color: "#000",
        backgroundColor: "f40",
        marginBottom: ROATE(25),
        height: ROATE(32)
    },
    activeTag: {
        fontSize: ROATE(16),
        fontWeight: "700"
    },
    search: {
        paddingTop: ROATE(6),
        paddingBottomL: 0,
        alignItems: "center",
        height: ROATE(32),
        fontSize: ROATE(12),
        // lineHeight: ROATE(32)
    },
    content: {
        marginTop: ROATE(14),
        height: Dimensions.get("screen").height,
        flexDirection: "row",

    },
    contentLeft: {
        width: ROATE(71),
        backgroundColor: "#EDEDED",
        paddingTop: ROATE(45)
    },
    contentRight: {
        backgroundColor: "#fff",
        marginRight: ROATE(16),
        width: ROATE(288),
        height: Dimensions.get("screen").height,
        padding: ROATE(24)
    },
    tagItem: {
        margin: ROATE(6),
        marginRight: ROATE(36),
        alignItems: "center"
    },
    tagItemFont: {
        fontSize: ROATE(12),
        margin: ROATE(4),
    },
    tagImg: {
        width: ROATE(56),
        height: ROATE(56),
        borderRadius: 2
    },
})