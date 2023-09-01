/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28"><circle fill-opacity=".45" fill="#000" r="10" cy="14" cx="14"/><path fill-opacity=".6" fill="#fff" d="M12.5 16.118 19 10l1 .941L12.5 18 8 13.765l1-.941 3.5 3.294Z"/></svg>
`

let IconShaixuan = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconShaixuan.defaultProps = {
  size: 18,
};

IconShaixuan = React.memo ? React.memo(IconShaixuan) : IconShaixuan;

export default IconShaixuan;
