/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28"><circle fill="#ADEE89" r="10" cy="14" cx="14"/><path fill-opacity=".9" fill="#000" d="M14.722 10.86h1v4.72h1.08v.87h-1.08V18h-1.04v-1.55h-3.48v-1.03l3.52-4.56Zm-.07 1.38-2.56 3.34h2.59v-3.34h-.03Z"/></svg>
`

let IconZhaopianxuhao4 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconZhaopianxuhao4.defaultProps = {
  size: 18,
};

IconZhaopianxuhao4 = React.memo ? React.memo(IconZhaopianxuhao4) : IconZhaopianxuhao4;

export default IconZhaopianxuhao4;
