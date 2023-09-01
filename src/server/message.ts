import Mock from "mockjs"

export async function getMessages() {
    const res = await Mock.mock({
        "data|22": [{
            from: {
                avatar: "https://profile.csdnimg.cn/8/5/D/3_rongyuliu951080er",
                user_name: "@cname",
            },
            time: "@date()",
            content: "@paragraph()",
            isRead: () => Math.random() > 0.5
        } ]
    })
    return res.data;
}