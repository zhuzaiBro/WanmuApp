import ajax from '../ajax';
import Mock from 'mockjs';


export const getDynamics = async (page = 1, limit = 10) => {
    return await Mock.mock({
        "data|10": [{
                id: Math.random().toString(12).substring(0),
                name: `吕铭洲的小号`,
                title: `Item`,
                content: "最近一直吃饭睡觉打豆豆～，芜湖起飞，最近一直吃饭睡觉打豆豆～，芜湖起飞最近一直吃饭睡觉打豆豆～，芜湖起飞最近一直吃饭睡觉打豆豆～，芜湖起飞最近一直吃饭睡觉打豆豆～，芜湖起飞最近一直吃饭睡觉打豆豆～，芜湖起飞"
                , pictures: [{ uri: "http://www.discosoul.com.cn/upload/1650270484598-swai3a.jpg" }]
            }
        ]
    }).data
}

export const gerPersonalDynamics = async (page = 1, limit = 10) => {
    const result = await ajax("/api/dynamic", "get", undefined, { page, limit });
    if(result) {
        return result.json();
    }
}


export const postDynamic = async (dynamic: string) => {
        fetch("http://www.discosoul.com.cn:8009/api/dynamic",
            {
                method: "POST",
                headers: {
                    'Content-Type':'application/json;charset=utf-8'
                },
                body: (dynamic),
            }
        ).then(
            r => r.json
        ).then(
            res => console.log((res as any).data)
        )    
}

export const getScrollList = async () => {
    return await Mock.mock({
        "data|5": [
            {
                title: "@paragraph()",
                img: Mock.Random.image("300x250", "#000", "#fff", "我是一个标题")
            }
        ]
    }).data;
}