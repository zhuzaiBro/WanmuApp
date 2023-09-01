/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill-opacity=".7" fill="#000" d="M3.5 4.75a.25.25 0 0 0-.25.25v10.19l3.72-3.72a.75.75 0 0 1 .999-.056l1.933 1.547 2.529-2.95a.75.75 0 0 1 1.025-.107l7.294 5.578V5a.25.25 0 0 0-.25-.25h-17ZM22.25 17v2a1.75 1.75 0 0 1-1.75 1.75h-17A1.75 1.75 0 0 1 1.75 19V5c0-.966.784-1.75 1.75-1.75h17c.966 0 1.75.784 1.75 1.75v12Zm-1.5.37-7.642-5.843-2.539 2.961a.75.75 0 0 1-1.038.098l-1.975-1.581-4.306 4.306V19c0 .138.112.25.25.25h17a.25.25 0 0 0 .25-.25v-1.63Zm-15-9.12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/></svg>
`

let IconZhaopian = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconZhaopian.defaultProps = {
  size: 18,
};

IconZhaopian = React.memo ? React.memo(IconZhaopian) : IconZhaopian;

export default IconZhaopian;
