/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill-opacity=".01" fill="#fff" d="M24 0H0v24h24V0Z"/><path fill-opacity=".9" fill="#000" d="M7.53 6.47a.75.75 0 0 0-1.06 1.06L10.94 12l-4.47 4.47a.75.75 0 1 0 1.06 1.06L12 13.06l4.47 4.47a.75.75 0 1 0 1.06-1.06L13.06 12l4.47-4.47a.75.75 0 0 0-1.06-1.06L12 10.94 7.53 6.47Z" clip-rule="evenodd" fill-rule="evenodd"/></svg>
`

let IconGuangbi = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconGuangbi.defaultProps = {
  size: 18,
};

IconGuangbi = React.memo ? React.memo(IconGuangbi) : IconGuangbi;

export default IconGuangbi;
