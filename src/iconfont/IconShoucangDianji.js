/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22"><path fill-opacity=".8" fill="#000" d="m11.001.918 3.874 5.668 6.588 1.933-4.194 5.436.197 6.862-6.465-2.308-6.465 2.308.197-6.862L.539 8.519l6.588-1.933L11.001.918Z"/><path fill="#fff" d="M9.168 11.46a1.833 1.833 0 1 0 3.666 0h1.834a3.667 3.667 0 0 1-7.334 0h1.834Z"/></svg>
`

let IconShoucangDianji = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconShoucangDianji.defaultProps = {
  size: 18,
};

IconShoucangDianji = React.memo ? React.memo(IconShoucangDianji) : IconShoucangDianji;

export default IconShoucangDianji;
