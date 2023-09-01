/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36"><path fill-opacity=".9" fill="#000" d="M19.17 7.502a1.124 1.124 0 1 0-2.25-.003l-.012 9.376H7.5a1.125 1.125 0 1 0 0 2.25h9.405l-.012 9.373a1.125 1.125 0 1 0 2.25.003l.012-9.376H28.5a1.125 1.125 0 1 0 0-2.25h-9.342l.012-9.373Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/></svg>
`

let IconTianjia = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconTianjia.defaultProps = {
  size: 18,
};

IconTianjia = React.memo ? React.memo(IconTianjia) : IconTianjia;

export default IconTianjia;
