/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22"><g clip-path="url(#a)"><path fill-opacity=".9" fill="#000" d="M11.875 12.75h-1.75a7.875 7.875 0 0 0-6.972 4.209A8.75 8.75 0 0 1 11.875 7.5V2.687l9.188 7.438-9.188 7.438V12.75ZM10.125 11h3.5v2.895l4.656-3.77-4.656-3.77V9.25h-1.75a6.984 6.984 0 0 0-5.3 2.426 9.616 9.616 0 0 1 3.55-.676Z"/></g><defs><clipPath id="a"><path transform="translate(.5 .5)" fill="#fff" d="M0 0h21v21H0z"/></clipPath></defs></svg>
`

let IconFenxiang = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconFenxiang.defaultProps = {
  size: 18,
};

IconFenxiang = React.memo ? React.memo(IconFenxiang) : IconFenxiang;

export default IconFenxiang;
