/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22"><path fill-opacity=".8" fill="#000" d="m11.001.918 3.874 5.668 6.588 1.933-4.194 5.436.197 6.862-6.465-2.308-6.465 2.308.197-6.862L.539 8.519l6.588-1.933L11.001.918Zm0 3.249L8.271 8.16 3.628 9.523l2.956 3.83-.14 4.835 4.557-1.626 4.556 1.626-.14-4.835 2.956-3.83L13.73 8.16 11 4.167Z" data-follow-fill="#000"/><path fill-opacity=".45" fill="#000" d="M9.168 11.46a1.833 1.833 0 1 0 3.666 0h1.834a3.667 3.667 0 0 1-7.334 0h1.834Z" data-follow-fill="#000"/></svg>
`

let IconShoucangWeidianji = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconShoucangWeidianji.defaultProps = {
  size: 18,
};

IconShoucangWeidianji = React.memo ? React.memo(IconShoucangWeidianji) : IconShoucangWeidianji;

export default IconShoucangWeidianji;
