/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill-opacity=".45" fill="#000" d="m9.45 7.724-4.31 4.31a.667.667 0 0 0 .943.943l5.253-5.253L6.083 2.47a.667.667 0 1 0-.943.943l4.31 4.31Z" data-follow-fill="#000"/></svg>
`

let IconPeisongjiantou = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconPeisongjiantou.defaultProps = {
  size: 18,
};

IconPeisongjiantou = React.memo ? React.memo(IconPeisongjiantou) : IconPeisongjiantou;

export default IconPeisongjiantou;
