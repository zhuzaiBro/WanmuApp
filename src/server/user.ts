import ajax from '../ajax';
import { storeData } from '../utils';
import store from '../store';
import { getLoginOutType } from '../store/user/actionFuncs'

export const loginOut = async () => {
    store.dispatch(getLoginOutType());
    // 删除本地缓存的token
    await storeData("");
}

export const userLogin = async (data: object) => {
    // console.log(data);
    try {
        const res = await fetch("http://www.discosoul.com.cn:8009/api/user/login", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        // console.log(res);
        
        await storeData((res.headers as any).map.authorization);
        return await res.json()
    } catch (e) {
        console.log(e);

    }

}