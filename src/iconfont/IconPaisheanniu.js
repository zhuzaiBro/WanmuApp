/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 70 70"><circle fill="#E6E6E6" r="35" cy="35" cx="35"/><circle fill="#fff" r="25" cy="35" cx="35"/></svg>
`

let IconPaisheanniu = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconPaisheanniu.defaultProps = {
  size: 18,
};

IconPaisheanniu = React.memo ? React.memo(IconPaisheanniu) : IconPaisheanniu;

export default IconPaisheanniu;
