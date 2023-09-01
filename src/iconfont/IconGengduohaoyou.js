/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28"><path fill-opacity=".01" fill="#fff" d="M28 0H0v28h28V0Z"/><path fill-opacity=".45" fill="#000" d="M7 15.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM14 15.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM21 15.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"/></svg>
`

let IconGengduohaoyou = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconGengduohaoyou.defaultProps = {
  size: 18,
};

IconGengduohaoyou = React.memo ? React.memo(IconGengduohaoyou) : IconGengduohaoyou;

export default IconGengduohaoyou;
