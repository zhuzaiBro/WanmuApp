/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 19"><path fill-opacity=".8" fill="#fff" d="m16 0 1.89 4.433L25.137.594l-4.577 6.08 4.577 1.584-4.577 1.584 4.577 6.08-7.249-3.839-1.889 3.4-1.889-3.4-8.573 6.498 4.308-8.258L0 9.368l11.077-2.694L8 1.548l6.111 2.065L16.001 0Z" data-follow-fill="#fff"/></svg>
`

let IconHuiyuanbiaoqianbaisedianzui = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconHuiyuanbiaoqianbaisedianzui.defaultProps = {
  size: 18,
};

IconHuiyuanbiaoqianbaisedianzui = React.memo ? React.memo(IconHuiyuanbiaoqianbaisedianzui) : IconHuiyuanbiaoqianbaisedianzui;

export default IconHuiyuanbiaoqianbaisedianzui;
