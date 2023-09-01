/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#fff" d="M3.646 5.313a.5.5 0 0 1 .708 0L8 8.96l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#fff"/></svg>
`

let IconSaixuanjiantou = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconSaixuanjiantou.defaultProps = {
  size: 18,
};

IconSaixuanjiantou = React.memo ? React.memo(IconSaixuanjiantou) : IconSaixuanjiantou;

export default IconSaixuanjiantou;
