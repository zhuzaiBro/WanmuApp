# 分段控件
## 需要下载的依赖 
import Swiper from 'react-native-swiper';

## 传入多的参数

带问号就是可以不传递的，使用默认的
``` ts
interface IProps {
    tags: string[]; //上面的标题
    tagDefaultStyle?: StyleProp<TextStyle>; // 标题文字的样式
    tagWrapperStyle?: StyleProp<ViewStyle>; // 标题外层包装的样式
    tagWrapperActiveStyle?: StyleProp<ViewStyle>; // 标题外层包装的激活样式
    tagActiveStyle?: StyleProp<TextStyle>; // 激活的标题样式
    headerStyle?: StyleProp<ViewStyle>; // 头部样式
    bodyStyle?: StyleProp<ViewStyle>; // body样式
    children?: JSX.Element[]; // 传入body的组件内容 
}
```