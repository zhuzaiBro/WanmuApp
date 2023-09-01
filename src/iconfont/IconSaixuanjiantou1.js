/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12"><path fill-opacity=".45" fill="#000" d="M2.735 4.235a.375.375 0 0 1 .53 0L6 6.97l2.735-2.735a.375.375 0 0 1 .53.53l-3 3a.375.375 0 0 1-.53 0l-3-3a.375.375 0 0 1 0-.53Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/></svg>
`

let IconSaixuanjiantou1 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconSaixuanjiantou1.defaultProps = {
  size: 18,
};

IconSaixuanjiantou1 = React.memo ? React.memo(IconSaixuanjiantou1) : IconSaixuanjiantou1;

export default IconSaixuanjiantou1;
