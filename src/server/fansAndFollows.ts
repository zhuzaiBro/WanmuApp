import Mock from 'mockjs';

export async function getFans() {
    return await Mock.mock({
        "data|22": [{
            user_name: "@cname()",
            avatar: "https://profile.csdnimg.cn/B/4/8/3_cl61917380",
            dec: "@paragraph()"
        }]
    }).data;
}