/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill-opacity=".45" fill="#000" d="m7.724 6.55 4.31 4.31a.667.667 0 1 0 .942-.943L7.724 4.664 2.47 9.917a.667.667 0 0 0 .943.942l4.31-4.31Z" data-follow-fill="#000"/></svg>
`

let IconJiantouxiangshang = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconJiantouxiangshang.defaultProps = {
  size: 18,
};

IconJiantouxiangshang = React.memo ? React.memo(IconJiantouxiangshang) : IconJiantouxiangshang;

export default IconJiantouxiangshang;
