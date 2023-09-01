/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill-opacity=".9" fill="#000" d="M4.165 2.69a.75.75 0 0 1 .682-.44h14.306a.75.75 0 0 1 .682.44l2.848 6.25a.75.75 0 0 1-.112.796l-10 11.75a.75.75 0 0 1-1.142 0l-10-11.75a.75.75 0 0 1-.112-.797l2.848-6.25ZM5.33 3.75 2.88 9.127 12 19.843l9.12-10.716-2.45-5.377H5.33Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/><path fill-opacity=".9" fill="#000" d="M7.502 8.44a.75.75 0 0 1 1.059.062L12 12.372l3.44-3.87a.75.75 0 1 1 1.12.996l-4 4.5a.75.75 0 0 1-1.12 0l-4-4.5a.75.75 0 0 1 .062-1.059Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/></svg>
`

let IconHuiyuanzhongxing = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconHuiyuanzhongxing.defaultProps = {
  size: 18,
};

IconHuiyuanzhongxing = React.memo ? React.memo(IconHuiyuanzhongxing) : IconHuiyuanzhongxing;

export default IconHuiyuanzhongxing;
