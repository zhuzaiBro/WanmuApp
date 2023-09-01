/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#8C8C8C" d="M7.395 1a.5.5 0 0 0-.456.32L4.703 6.743H3.4c-.986-.016-1.772.847-1.895 1.83a.58.58 0 0 0-.005.073v4.523c0 .024.002.048.005.072.127 1.019.942 1.774 1.895 1.758h8.558c.846.01 1.569-.654 1.696-1.555l.827-5.815a1.931 1.931 0 0 0-.398-1.477 1.647 1.647 0 0 0-1.297-.629H9.692V3.477C9.692 2.109 8.664 1 7.395 1ZM5.497 7.468l2.206-5.351c.569.149.99.701.99 1.36v2.585c0 .297.224.538.5.538h3.601c.205-.003.401.092.536.26.134.166.194.388.163.607l-.827 5.815c-.052.372-.35.645-.699.641h-6.47V7.468ZM2.5 13.128V8.686c.077-.5.48-.874.888-.866h1.11v6.102H3.385c-.438.009-.814-.33-.887-.794Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#8C8C8C"/></svg>
`

let IconDianzanWeixuanzhong = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconDianzanWeixuanzhong.defaultProps = {
  size: 18,
};

IconDianzanWeixuanzhong = React.memo ? React.memo(IconDianzanWeixuanzhong) : IconDianzanWeixuanzhong;

export default IconDianzanWeixuanzhong;
