/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36"><g filter="url(#a)"><rect shape-rendering="crispEdges" fill="#1A1A1A" rx="8" height="28" width="28" x="4"/><path fill="#fff" d="M24.579 9.98h-2.197l.66-2.863a.758.758 0 1 0-1.479-.34l-.739 3.203h-4.006l.661-2.863a.758.758 0 1 0-1.478-.34l-.74 3.204h-2.314a.758.758 0 1 0 0 1.517h1.964l-.933 4.046H11.43a.759.759 0 0 0 0 1.517h2.198l-.66 2.864a.758.758 0 0 0 1.478.34l.74-3.204h4.005l-.66 2.864a.759.759 0 1 0 1.479.34l.739-3.204h2.314a.759.759 0 0 0 0-1.517h-1.964l.933-4.046h2.548a.758.758 0 1 0 0-1.517l-.001-.001Zm-5.038 5.563h-4.006l.934-4.046h4.006l-.934 4.046Z"/></g><defs><filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="36" width="36" y="0" x="0" id="a"><feFlood result="BackgroundImageFix" flood-opacity="0"/><feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite operator="out" in2="hardAlpha"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend result="effect1_dropShadow_1130_21767" in2="BackgroundImageFix"/><feBlend result="shape" in2="effect1_dropShadow_1130_21767" in="SourceGraphic"/></filter></defs></svg>
`

let IconHuati = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconHuati.defaultProps = {
  size: 18,
};

IconHuati = React.memo ? React.memo(IconHuati) : IconHuati;

export default IconHuati;
