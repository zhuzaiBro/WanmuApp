import { Animated } from "react-native";

export default function (y: Animated.Value, callback1, callback2, callback3 = () => {}) {

    return function (e) {
        callback1();
        setTimeout(() => {
            callback2();
            Animated.timing(y, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start(({ finished }) => {
                if (finished) {
                    callback3();
                }
            });
        }, 700);
    }

}
