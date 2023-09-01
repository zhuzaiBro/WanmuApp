/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 24"><path fill="#A6E284" d="M5.001 11.501h11.615l.417-1.666H6.668V8.168h11.433a.833.833 0 0 1 .809 1.036l-2.084 8.333a.833.833 0 0 1-.808.631H4.168a.833.833 0 0 1-.833-.833v-10H1.668V5.668h2.5a.833.833 0 0 1 .833.833v5Zm0 11.667a1.667 1.667 0 1 1 0-3.333 1.667 1.667 0 0 1 0 3.333Zm10 0a1.667 1.667 0 1 1 0-3.333 1.667 1.667 0 0 1 0 3.333Z" data-follow-fill="#A6E284"/><path fill="#A6E284" d="M23 1a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0V5h2a1 1 0 1 0 0-2h-2V1Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#A6E284"/></svg>
`

let IconGouwucheMianxing = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconGouwucheMianxing.defaultProps = {
  size: 18,
};

IconGouwucheMianxing = React.memo ? React.memo(IconGouwucheMianxing) : IconGouwucheMianxing;

export default IconGouwucheMianxing;
