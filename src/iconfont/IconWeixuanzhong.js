/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill-opacity=".45" fill="#000" d="M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm0 1.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/></svg>
`

let IconWeixuanzhong = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconWeixuanzhong.defaultProps = {
  size: 18,
};

IconWeixuanzhong = React.memo ? React.memo(IconWeixuanzhong) : IconWeixuanzhong;

export default IconWeixuanzhong;
