import React from 'react';
import { connect } from 'react-redux';
import Ui from './ui';

export default function ShopCar({ navigation, route }) {
    const mapState2Props = (sate) => ({
        navigation,
        route,
        shopList: [{
            shop: {
                avatar: "http://www.zhuzaibrother.cn/static/upload/2022-4-30-15-43-32-650-c3a8b.jpg",
                name: "朱杰的小店"
            },
            goods: [{
                name: "adsasd",
                price: 15.00,

            }, {
                name: "adsasd",
                price: 15.00,

            }]
        }]
    });
    const mapDispatch2Props = () => ({
        computedPrice() {

        }
    })
    const Show = connect(mapState2Props, mapDispatch2Props)(Ui)
    return (
        <Show />
    )
}
