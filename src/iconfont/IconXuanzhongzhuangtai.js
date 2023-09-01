/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M2.879 3.84h10.56v7.68H2.879z"/><path fill="#A6E284" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm-.798-4.8 5.656-5.657-1.132-1.13-4.524 4.525L4.94 6.675l-1.131 1.13L7.202 11.2Z"/></svg>
`

let IconXuanzhongzhuangtai = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconXuanzhongzhuangtai.defaultProps = {
  size: 18,
};

IconXuanzhongzhuangtai = React.memo ? React.memo(IconXuanzhongzhuangtai) : IconXuanzhongzhuangtai;

export default IconXuanzhongzhuangtai;
