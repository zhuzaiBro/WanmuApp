/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M5.491 2.949A.75.75 0 0 1 6.51 4.05L4.127 6.25h11.37c3.844 0 7.098 3.128 7.248 6.97.158 4.062-3.187 7.53-7.248 7.53H6.999a.75.75 0 0 1 0-1.5h8.498c3.212 0 5.874-2.762 5.749-5.97-.119-3.038-2.71-5.53-5.75-5.53H4.47l2.08 2.24a.75.75 0 1 1-1.1 1.02l-3.5-3.769a.75.75 0 0 1 .041-1.061l3.5-3.231Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#fff"/></svg>
`

let IconCehui = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconCehui.defaultProps = {
  size: 18,
};

IconCehui = React.memo ? React.memo(IconCehui) : IconCehui;

export default IconCehui;
