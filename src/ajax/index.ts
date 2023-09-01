import { loadString } from "../utils";

const serverUrl = "http://www.discosoul.com.cn:8009";

/**
 * 没做相关校验,传path悠着点
 * @param path 
 * @param method 
 * @returns 
 */
export default async function (path: string, method: string, headers?: HeadersInit, params: any = {}, body: BodyInit = JSON.stringify({})) {

    const token = await loadString("token");
    if (token) {
        headers = {
            authorization: token
        }
    }


    if (method === "get") {
        let index = 0,
            str = "";
        for (const item in params) {
            if (index === 0) {
                str += "?" + item + "=" + params[item]
            } else {
                str += "&" + item + "=" + params[item]
            }
            index++;
        }

        // console.log(serverUrl + path + str, 233)

        const result = await fetch(serverUrl + path + str, {
            headers: headers  ? headers : undefined,
        });


        return result;
    } else if (method === "post") {
        console.log(serverUrl + path);
        const result = await fetch(serverUrl + path, {
            method: "post",
            headers: headers ? headers : undefined,
            body
        });

        return result;
    }

}