/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 18"><path fill="#000" d="M8.059 13.615a4.615 4.615 0 1 0 0-9.23 4.615 4.615 0 0 0 0 9.23Zm0 1.385a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/><path fill="#000" d="M11.726 12.665c.27-.27.709-.27.98 0l.922.923a.692.692 0 1 1-.979.979l-.923-.923a.692.692 0 0 1 0-.98Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/></svg>
`

let IconSousuo111 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconSousuo111.defaultProps = {
  size: 18,
};

IconSousuo111 = React.memo ? React.memo(IconSousuo111) : IconSousuo111;

export default IconSousuo111;
