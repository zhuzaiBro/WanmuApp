/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#EFD370" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm-.8-5.6V12h1.6v-1.6H7.2Zm0-6.4v4.8h1.6V4H7.2Z" data-follow-fill="#EFD370"/></svg>
`

let IconJinshi = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconJinshi.defaultProps = {
  size: 18,
};

IconJinshi = React.memo ? React.memo(IconJinshi) : IconJinshi;

export default IconJinshi;
