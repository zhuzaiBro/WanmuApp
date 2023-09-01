import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { EventListenerCallback, RouteProp } from "@react-navigation/core/lib/typescript/src/types";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import React from "react";
import { Tab } from ".";

type Listener = {
    tabPress?: EventListenerCallback<BottomTabNavigationEventMap, "tabPress">;
    tabLongPress?: EventListenerCallback<BottomTabNavigationEventMap, "tabLongPress">;
    focus?: any;
    blur?: any;
    state?: any;
    beforeRemove?: any;
}


export interface TabObj {
    comp: React.ComponentType<any>
    name: any
    listeners?: Listener
    options?: NativeStackNavigationOptions | ((props: {
        route: RouteProp<ParamListBase, "dadsa">;
        navigation: any;
    }) => NativeStackNavigationOptions) | undefined
}

 