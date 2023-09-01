/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill-opacity=".45" fill="#000" d="m8.276 9.45-4.31-4.31a.667.667 0 0 0-.943.943l5.253 5.253 5.253-5.253a.667.667 0 1 0-.943-.942l-4.31 4.31Z" data-follow-fill="#000"/></svg>
`

let IconJiangtouXia = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconJiangtouXia.defaultProps = {
  size: 18,
};

IconJiangtouXia = React.memo ? React.memo(IconJiangtouXia) : IconJiangtouXia;

export default IconJiangtouXia;
