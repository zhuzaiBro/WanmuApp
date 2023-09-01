/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 60 60"><path fill-opacity=".01" fill="#fff" d="M60 0H0v60h60V0Z"/><path fill-opacity=".45" fill="#000" d="M30.008 55.002c13.806 0 25-11.194 25-25 0-13.807-11.194-25-25-25-13.807 0-25 11.193-25 25s11.193 25 25 25Z"/><path stroke-linejoin="round" stroke-width="1.5" stroke="#fff" fill="#fff" d="M24.992 30v-8.66l7.5 4.329 7.5 4.33-7.5 4.33-7.5 4.331V30Z" data-follow-stroke="#fff"/></svg>
`

let IconBofang1 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconBofang1.defaultProps = {
  size: 18,
};

IconBofang1 = React.memo ? React.memo(IconBofang1) : IconBofang1;

export default IconBofang1;
