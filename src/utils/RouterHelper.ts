import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";

/**
 * 用于返回到上一级路由
 * @param navigation 
 * @param route 
 * @returns 
 */
export function useBackTo(
    navigation: BottomTabNavigationProp<ParamListBase, string, undefined>,
    route: RouteProp<ParamListBase, string>,
    other: any // 其他要传递的参数
) {
    return function () {
        navigation.navigate((route.params as any)?.name, other);
    }
}

/**
 * 函数用于跳转路由之前绑定
 * @param route 
 * @returns 
 */
export function useGoTo(
    navigation: BottomTabNavigationProp<ParamListBase, string, undefined>,
    route: RouteProp<ParamListBase, string>,
    other: any,
    target: string
) {
    return function (): void {
        navigation.navigate(target, {
            ...other,
            name: route.name
        });
    }
}


export function useGoPage (navigation: BottomTabNavigationProp<ParamListBase, string, undefined>,
    route: RouteProp<ParamListBase, string>,
    other: any,
    target: string) {
    const [goto, setGoto] = useState(void 0) as any;
    useEffect(() => {
        setGoto(() => useGoTo(navigation, route, other, target))
    }, []);

    return goto;
}