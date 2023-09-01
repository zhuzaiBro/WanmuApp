import { Geolocation, init, Position } from 'react-native-amap-geolocation';
import { useState, useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';

export default function Pos() {

    const [location, setLocation] = useState(null) as any ;

    useEffect(() => {
        (async () => {
            await PermissionsAndroid.requestMultiple([
                'android.permission.ACCESS_FINE_LOCATION',
                "android.permission.ACCESS_COARSE_LOCATION"
            ])
            await init({
                android: "f83d5d5d8455364eb586c4fcdf41b986",
                ios: "e80ef18eacff77b3ce3195777ab47d36"
            });
            
            Geolocation.getCurrentPosition((location) => { 
            setLocation(() => location) }, (err) => {
                console.log(err);
            }, {
                distanceFilter: 1000,
                enableHighAccuracy: false,
                maximumAge: 1000,
                timeout: 1000,
            })
        })()
    
    }, [])
        return location;
};