# 表单组件
## 使用方法
    调用**Form.Input, Form.Buttom**等内置组件，然后Form表单可以添加一个回调函数
``` ts
FormInput的属性，不带问号的是必须传递的属性
interface IProps {
    // 写入的input类型
    name: string;
    placeholder: string;
    // 自定义样式
    style: StyleProp<TextStyle>
}
```

```ts
FormButton的属性，不带问号的是必须传递的属性
interface IProps {
    submit?: (body:object)=> void,
    titleColor? :string, // 按钮标题的颜色
    titleSize? : number, // 按钮标题的字体大小
    title: string; // 按钮标题文字
    style?: StyleProp<ViewStyle> // 按钮的样式
}

```