import Mock from 'mockjs';

Mock.mock("api/good", "get", {
    code: 0,
    msg: "",
    "data|10": [
        {
            "id|+1": "@guid",
            good_name: "@ctitle",
            "price|1-300": 0,
            "img_uri|0-4": Mock.Random.image("300x250", "#000", "#fff", "我是一件商品"),
            date: `@date('T')`,
        }
    ]
})