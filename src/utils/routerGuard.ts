import { useEffect, useState } from "react";
import store from '../store';

export default function userInfo() {
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
     setUserInfo(() => store.getState());
    }, []);
    return userInfo;
}