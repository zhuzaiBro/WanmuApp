/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill-opacity=".7" fill="#000" d="M3.836 1.332a.5.5 0 0 1 .5-.5h5.667a.5.5 0 0 1 .396.196l3.608 3.935c.1.092.162.223.162.369v7.333a.5.5 0 0 1-.5.5H4.336a.5.5 0 0 1-.5-.5V1.332Zm6.667 3.5V2.62l2.027 2.212h-2.027Zm-5.667-3v10.333h8.333V5.832h-3.166a.5.5 0 0 1-.5-.5v-3.5H4.836Zm-2 4.834a.5.5 0 1 0-1 0v8a.5.5 0 0 0 .5.5h7a.5.5 0 1 0 0-1h-6.5v-7.5Zm3 0a.5.5 0 0 1 .5-.5h1.333a.5.5 0 1 1 0 1H6.336a.5.5 0 0 1-.5-.5Zm.5 2.166a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1h-4Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/></svg>
`

let IconFuzhi = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconFuzhi.defaultProps = {
  size: 18,
};

IconFuzhi = React.memo ? React.memo(IconFuzhi) : IconFuzhi;

export default IconFuzhi;
