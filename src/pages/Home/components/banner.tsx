import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { Carousel } from '@ant-design/react-native';
import { ROATE } from '../../../assets/size';
import Swiper from "react-native-swiper";


export default function Banner(props) {

  const [rotate, setRotate] = useState([]) as any;
  // const [imgs, setImgs] = useState([]);
  let imgs;

  useEffect(() => {
    let flag = false;
    if (!flag) {
      (async () => {
        try {
          const res = (await fetch('http://www.discosoul.com.cn:7001/api/banner', {
            headers: {

            }
          }));


          const result = await (res.json());

          setRotate(result.data.datas);
        } catch (e) {

          setRotate([{
            imgUrl: "/upload/1650270733283-cxvymj.jpg",
            id: 1
          }, {
            imgUrl: "/upload/1650270484598-swai3a.jpg",
            id: 2
          }, {
            imgUrl: "/upload/1650270767207-rkrqzd.jpg",
            id: 3
          }]);
        }

      })();

    }
    return () => {
      flag = true
    }
  }, []);

  function Picture({ item }) {
    return (
      <Image style={{ height: props.height || ROATE(120), width: ROATE(360), borderRadius: 12 }} key={item.id}
        source={{ uri: 'http://www.discosoul.com.cn' + item.imgUrl }} />
    )
  }

  const renderImgs = rotate.map((item: any) => (<Picture key={item.id} item={item} />));


  return (
    <Carousel contentContainerStyle={{ alignSelf: "center", padding: ROATE(7.5) }}
      style={{ height: props.height || ROATE(120), width: ROATE(375), overflow: 'hidden', marginLeft: "auto", marginRight: "auto" }}
      dotActiveStyle={{ backgroundColor: "#f40" }} dotStyle={{ width: 10, height: 3, backgroundColor: "#ccc" }} >
      {renderImgs}
    </Carousel>
  )
}
