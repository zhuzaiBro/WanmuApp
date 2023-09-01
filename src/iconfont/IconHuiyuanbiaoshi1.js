/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><circle stroke-width="1.5" stroke="#fff" fill="#1A1A1A" r="9.25" cy="10" cx="10" data-follow-stroke="#fff"/><path fill="#D5FB81" d="M9.99 12.017 11.984 6H14l-3.061 8h-1.89L6 6h2.01l1.98 6.017Z"/></svg>
`

let IconHuiyuanbiaoshi1 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconHuiyuanbiaoshi1.defaultProps = {
  size: 18,
};

IconHuiyuanbiaoshi1 = React.memo ? React.memo(IconHuiyuanbiaoshi1) : IconHuiyuanbiaoshi1;

export default IconHuiyuanbiaoshi1;
