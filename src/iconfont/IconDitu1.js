/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><rect fill-opacity=".06" fill="#000" rx="8" height="16" width="16"/><path fill="#A6E284" d="M11.182 10.682 8 13.864l-3.182-3.182a4.5 4.5 0 1 1 6.364 0ZM8 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>
`

let IconDitu1 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconDitu1.defaultProps = {
  size: 18,
};

IconDitu1 = React.memo ? React.memo(IconDitu1) : IconDitu1;

export default IconDitu1;
