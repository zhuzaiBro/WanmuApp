/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill-opacity=".9" fill="#000" d="M6.667 3.333H17.5v1.666H6.667V3.333ZM3.75 5.416a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm0 5.833a1.25 1.25 0 1 1 0-2.499 1.25 1.25 0 0 1 0 2.5Zm0 5.75a1.25 1.25 0 1 1 0-2.499 1.25 1.25 0 0 1 0 2.5Zm2.917-7.833H17.5v1.667H6.667V9.166Zm0 5.833H17.5v1.667H6.667v-1.667Z" data-follow-fill="#000"/></svg>
`

let IconDianpuFeilei = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconDianpuFeilei.defaultProps = {
  size: 18,
};

IconDianpuFeilei = React.memo ? React.memo(IconDianpuFeilei) : IconDianpuFeilei;

export default IconDianpuFeilei;
