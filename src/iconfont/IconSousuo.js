/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 18"><path fill="#000" d="M12.678 9a4.615 4.615 0 1 1-9.231 0 4.615 4.615 0 0 1 9.23 0Zm-.891 4.704a6 6 0 1 1 .98-.979l.861.863a.692.692 0 1 1-.979.979l-.862-.863Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/></svg>
`

let IconSousuo = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconSousuo.defaultProps = {
  size: 18,
};

IconSousuo = React.memo ? React.memo(IconSousuo) : IconSousuo;

export default IconSousuo;
