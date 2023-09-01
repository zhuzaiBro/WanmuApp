/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill-opacity=".01" fill="#fff" d="M20 0H0v20h20V0Z" data-follow-fill="#fff"/><path stroke-linejoin="round" stroke-width="1.25" stroke-opacity=".9" stroke="#000" d="M10.001 18.333a8.333 8.333 0 1 0 0-16.667 8.333 8.333 0 0 0 0 16.667Z" data-follow-stroke="#000"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.25" stroke-opacity=".9" stroke="#000" d="M10 6.666v6.667M6.668 10h6.667" data-follow-stroke="#000"/></svg>
`

let IconTianjiaLiaotianchuangkou = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconTianjiaLiaotianchuangkou.defaultProps = {
  size: 18,
};

IconTianjiaLiaotianchuangkou = React.memo ? React.memo(IconTianjiaLiaotianchuangkou) : IconTianjiaLiaotianchuangkou;

export default IconTianjiaLiaotianchuangkou;
