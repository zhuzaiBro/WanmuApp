/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28"><circle fill="#ADEE89" r="10" cy="14" cx="14"/><path fill-opacity=".9" fill="#000" d="M14.102 10.72c1.387 0 2.17.647 2.35 1.94h-1.06c-.147-.693-.58-1.04-1.3-1.04-.5 0-.893.243-1.18.73-.287.453-.43 1.03-.43 1.73 0 .047.003.09.01.13h.04c.2-.32.453-.553.76-.7.273-.147.603-.22.99-.22.7 0 1.26.22 1.68.66.413.453.62 1.03.62 1.73 0 .713-.237 1.3-.71 1.76-.487.467-1.08.7-1.78.7-.873 0-1.54-.32-2-.96-.44-.613-.66-1.463-.66-2.55 0-1.173.237-2.113.71-2.82.48-.727 1.133-1.09 1.96-1.09Zm-.04 3.45c-.447 0-.8.14-1.06.42-.26.28-.39.653-.39 1.12 0 .467.133.837.4 1.11.26.28.607.42 1.04.42.44 0 .79-.147 1.05-.44.273-.307.41-.68.41-1.12 0-.467-.13-.83-.39-1.09-.26-.28-.613-.42-1.06-.42Z"/></svg>
`

let IconZhaopianxuhao6 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconZhaopianxuhao6.defaultProps = {
  size: 18,
};

IconZhaopianxuhao6 = React.memo ? React.memo(IconZhaopianxuhao6) : IconZhaopianxuhao6;

export default IconZhaopianxuhao6;
