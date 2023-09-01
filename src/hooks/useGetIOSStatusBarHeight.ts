
import { NativeModules } from 'react-native';
import { useEffect, useState } from 'react';
 
const { StatusBarManager } = NativeModules;


// iOS Only

export function useGetIOSStatusBarHeight() {

 const [iOSStatusBarHeight, setiOSStatusBarHeight] = useState(44)
 useEffect(()=> {
    try{
          StatusBarManager.getHeight(statusBarHeight => {
        setiOSStatusBarHeight(()=> statusBarHeight.height);
    })
    } catch {
        
    }
  
}, [])

    return iOSStatusBarHeight;
}
