/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 37 16"><path fill="#fff" d="m8 8 .38-2.84h-5.3l.26-1.9h2.7l-.9-1.84-.72-.64h3.82l1.22 2.48h2.16L13.5.78h3.48l-1.96 2.48h2.76l-.26 1.9h-5.34L11.8 8h6.08l-.26 1.9h-5.66l5.28 5.28h-4.56l-3.26-3.24-3.96 3.24H.52l6.8-5.28H1.66L1.92 8H8Z" data-follow-fill="#fff"/><path fill="url(#a)" d="m8 8 .38-2.84h-5.3l.26-1.9h2.7l-.9-1.84-.72-.64h3.82l1.22 2.48h2.16L13.5.78h3.48l-1.96 2.48h2.76l-.26 1.9h-5.34L11.8 8h6.08l-.26 1.9h-5.66l5.28 5.28h-4.56l-3.26-3.24-3.96 3.24H.52l6.8-5.28H1.66L1.92 8H8Z"/><path fill="#fff" d="m28.978 2.8.18-1.28-.66-.72h4.58l-.28 2h3.4l-.3 2.08h-3.4l-.36 2.56h3.1l-.3 2.08h-3.1l-.46 3.22h3.86l-.3 2.08h-11.26l.3-2.08h3.58l.46-3.22h-2.86l.3-2.08h2.86l.36-2.56h-3.2l.3-2.08h3.2Zm-9.98 12.38 1.8-5.66h3.26l-1.8 5.66h-3.26Zm1.9-6.42-.24-3.42h3.26l.24 3.42h-3.26Zm.62-4.16-.24-3.42h3.26l.24 3.42h-3.26Z" data-follow-fill="#fff"/><path fill="url(#b)" d="m28.978 2.8.18-1.28-.66-.72h4.58l-.28 2h3.4l-.3 2.08h-3.4l-.36 2.56h3.1l-.3 2.08h-3.1l-.46 3.22h3.86l-.3 2.08h-11.26l.3-2.08h3.58l.46-3.22h-2.86l.3-2.08h2.86l.36-2.56h-3.2l.3-2.08h3.2Zm-9.98 12.38 1.8-5.66h3.26l-1.8 5.66h-3.26Zm1.9-6.42-.24-3.42h3.26l.24 3.42h-3.26Zm.62-4.16-.24-3.42h3.26l.24 3.42h-3.26Z"/><defs><linearGradient gradientUnits="userSpaceOnUse" y2="8.842" x2="34.778" y1="8" x1="-2.137" id="a"><stop stop-color="#F9FD80"/><stop stop-color="#73E5BB" offset="1"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="8.842" x2="34.778" y1="8" x1="-2.137" id="b"><stop stop-color="#F9FD80"/><stop stop-color="#73E5BB" offset="1"/></linearGradient></defs></svg>
`

let IconTabGuangzhu = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconTabGuangzhu.defaultProps = {
  size: 18,
};

IconTabGuangzhu = React.memo ? React.memo(IconTabGuangzhu) : IconTabGuangzhu;

export default IconTabGuangzhu;
