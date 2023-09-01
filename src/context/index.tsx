import React from "react";
import { Animated } from "react-native";

export const Gctx = React.createContext({
    setStatusBarColor: (prev) => void 0,
    setStatusBarBg: (prev) => void 0,
    x: new Animated.Value(0),
    y: new Animated.Value(0),
    add_addr: (a) => {},
    addr: [],
    delete_addr: (a) => {}, 
    edit_addr: (a) => {}, 
    setDefault: (a) =>{}
})