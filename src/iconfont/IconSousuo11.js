/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 14"><path fill="#fff" d="M6.95 2.295a4.654 4.654 0 1 0-.001 9.308 4.654 4.654 0 0 0 0-9.308ZM0 6.95a6.949 6.949 0 1 1 13.898 0A6.949 6.949 0 0 1 0 6.949Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#fff"/><path fill="#fff" d="M12.59 10.95a1.16 1.16 0 0 0-1.64 1.64l1.64-1.64Zm-.57 2.71a1.16 1.16 0 0 0 1.641-1.64l-1.64 1.64Zm-1.07-1.07 1.07 1.07 1.641-1.64-1.07-1.07-1.642 1.64Z" data-follow-fill="#fff"/></svg>
`

let IconSousuo11 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconSousuo11.defaultProps = {
  size: 18,
};

IconSousuo11 = React.memo ? React.memo(IconSousuo11) : IconSousuo11;

export default IconSousuo11;
