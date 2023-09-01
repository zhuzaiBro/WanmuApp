/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill-opacity=".9" fill="#000" d="M6 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM18 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" data-follow-fill="#000"/></svg>
`

let IconGengduo1 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconGengduo1.defaultProps = {
  size: 18,
};

IconGengduo1 = React.memo ? React.memo(IconGengduo1) : IconGengduo1;

export default IconGengduo1;
