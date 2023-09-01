/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28"><circle fill="#ADEE89" r="10" cy="14" cx="14"/><path fill-opacity=".9" fill="#000" d="M11.556 10.86h4.8v.88L13.826 18h-1.16l2.59-6.15h-3.7v-.99Z"/></svg>
`

let IconZhaopianxuhao7 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconZhaopianxuhao7.defaultProps = {
  size: 18,
};

IconZhaopianxuhao7 = React.memo ? React.memo(IconZhaopianxuhao7) : IconZhaopianxuhao7;

export default IconZhaopianxuhao7;
