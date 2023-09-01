/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><circle fill="#A6E284" r="5.333" cy="8.001" cx="7.997"/><path fill-opacity=".9" fill="#000" d="M12.917 10.068a5.334 5.334 0 0 0-7.563-6.7L4.693 2.21a6.664 6.664 0 0 1 6.641.016 6.667 6.667 0 0 1 2.745 8.514l.894.516-2.776 1.476-.11-3.143.83.48ZM3.084 5.931a5.334 5.334 0 0 0 7.563 6.7l.662 1.158a6.664 6.664 0 0 1-6.642-.016A6.667 6.667 0 0 1 1.923 5.26l-.896-.516 2.777-1.476.11 3.143-.83-.48Zm5.583 3.093h2v1.333h-2v1.333H7.334v-1.333h-2V9.024h2v-.667h-2V7.024h1.724L5.643 5.609l.944-.943L8.001 6.08l1.414-1.414.943.943-1.415 1.415h1.724v1.333h-2v.667Z"/></svg>
`

let IconXaindanfanxiang = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconXaindanfanxiang.defaultProps = {
  size: 18,
};

IconXaindanfanxiang = React.memo ? React.memo(IconXaindanfanxiang) : IconXaindanfanxiang;

export default IconXaindanfanxiang;
