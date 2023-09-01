/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill-opacity=".45" fill="#000" d="M1 8a7 7 0 1 0 7-7 7 7 0 0 0-7 7ZM0 8a8 8 0 0 0 8 8 8 8 0 1 0-8-8Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/></svg>
`

let IconSaixuanWeixuanzhongW = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconSaixuanWeixuanzhongW.defaultProps = {
  size: 18,
};

IconSaixuanWeixuanzhongW = React.memo ? React.memo(IconSaixuanWeixuanzhongW) : IconSaixuanWeixuanzhongW;

export default IconSaixuanWeixuanzhongW;
