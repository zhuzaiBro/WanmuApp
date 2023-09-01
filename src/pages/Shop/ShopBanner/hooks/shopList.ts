import {useState, useEffect} from 'react';

export default function() {
    const [rotate, setRotate] = useState([]) as any;
    useEffect(() => {
        let flag = false;
        if (!flag) {
            (async () => {
                try{
                    const res = (await fetch('http://www.discosoul.com.cn/api/banner'));
                const result = await (res.json());
                throw new Error()
                setRotate(result.data.datas);
                } catch {
                    setRotate([{
                        imgUrl: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/banner.png",
                        id: 1
                      }, {
                        imgUrl: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/22.png",
                        id: 2
                      }, {
                        imgUrl: "https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/TestData/IM.png",
                        id: 3
                      }]);
                }
                
            })();

        }
        return () => {
            flag = true
        }
    }, []);

    return rotate;
}