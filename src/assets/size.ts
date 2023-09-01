import {Dimensions, StyleProp, TextStyle} from 'react-native';
const R = Dimensions.get("screen").width / 375

export const ROATE = (size: number)=>{
    return Math.floor(R * size);
}; 

export const ScreenHeight = Dimensions.get("screen").height;

export const ScreenWidth = Dimensions.get("screen").width;