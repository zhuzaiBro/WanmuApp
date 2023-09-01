/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path fill-opacity=".7" fill="#000" d="M1.164 4.668h10.5v5.833h-10.5z"/><path fill="#767063" d="M1.747 1.75h10.5a.583.583 0 0 1 .584.583v9.334a.583.583 0 0 1-.584.583h-10.5a.583.583 0 0 1-.583-.583V2.333a.583.583 0 0 1 .583-.583Zm4.667 3.208v4.084h1.167V4.958H6.414Zm-.166 0H5.015l-.874 2.4-.873-2.4H2.035l1.523 4.063h1.167l1.523-4.063ZM9.33 7.875h.875a1.458 1.458 0 1 0 0-2.917H8.164v4.084h1.167V7.875Zm0-1.167v-.583h.875a.292.292 0 1 1 0 .583H9.33Z"/><path fill="url(#a)" d="M1.747 1.75h10.5a.583.583 0 0 1 .584.583v9.334a.583.583 0 0 1-.584.583h-10.5a.583.583 0 0 1-.583-.583V2.333a.583.583 0 0 1 .583-.583Zm4.667 3.208v4.084h1.167V4.958H6.414Zm-.166 0H5.015l-.874 2.4-.873-2.4H2.035l1.523 4.063h1.167l1.523-4.063ZM9.33 7.875h.875a1.458 1.458 0 1 0 0-2.917H8.164v4.084h1.167V7.875Zm0-1.167v-.583h.875a.292.292 0 1 1 0 .583H9.33Z"/><defs><linearGradient gradientUnits="userSpaceOnUse" y2="7" x2="1.164" y1="7" x1="12.831" id="a"><stop stop-color="#CDE5FF"/><stop stop-color="#D6FFF2" offset=".601"/><stop stop-color="#E7FFD7" offset="1"/><stop stop-color="#E6FFD5" offset="1"/></linearGradient></defs></svg>
`

let IconHuiyuanbiaoqian = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconHuiyuanbiaoqian.defaultProps = {
  size: 18,
};

IconHuiyuanbiaoqian = React.memo ? React.memo(IconHuiyuanbiaoqian) : IconHuiyuanbiaoqian;

export default IconHuiyuanbiaoqian;
