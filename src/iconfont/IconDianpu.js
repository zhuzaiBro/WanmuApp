/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill-opacity=".45" fill="#000" d="M6 14h8v3H6v-3Z" data-follow-fill="#000"/><path fill-opacity=".8" fill="#000" d="M21 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7H2v-2l1-5h18l1 5v2h-1ZM5 13v6h14v-6H5ZM3 3h18v2H3V3Z" data-follow-fill="#000"/></svg>
`

let IconDianpu = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconDianpu.defaultProps = {
  size: 18,
};

IconDianpu = React.memo ? React.memo(IconDianpu) : IconDianpu;

export default IconDianpu;
