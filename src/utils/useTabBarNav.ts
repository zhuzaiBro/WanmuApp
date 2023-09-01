import { CommunityA, CommunityD, HomeA, HomeD, MeA, MeD, MessageA, MessageD, ShopA, ShopD } from '../assets/imgs';


export default [

    {
        Active: HomeA,
        UnActive: HomeD,
        title: "首页",
        to: "Home"
    }, {
        Active: CommunityA,
        UnActive: CommunityD,
        title: "社区",
        to: "BlackHole"
    }, {
        Active: ShopA,
        UnActive: ShopD,
        title: "商城",
        to: "Shop"
    }, {
        Active: MessageA,
        UnActive: MessageD,
        title: "消息",
        to: "Message",
    }, {
        Active: MeA,
        UnActive: MeD,
        title: "我的",
        to: "Me"
    },
];
