/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M12.678 8.06a4.615 4.615 0 1 1-9.231 0 4.615 4.615 0 0 1 9.23 0Zm-.892 4.705a6 6 0 1 1 .98-.979l.862.863a.692.692 0 1 1-.979.98l-.863-.864Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/></svg>
`

let IconSousuo1111 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconSousuo1111.defaultProps = {
  size: 18,
};

IconSousuo1111 = React.memo ? React.memo(IconSousuo1111) : IconSousuo1111;

export default IconSousuo1111;
