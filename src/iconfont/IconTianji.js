/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill-opacity=".9" fill="#000" d="M12.78 5.001a.75.75 0 0 0-1.5-.002l-.008 6.251H5a.75.75 0 0 0 0 1.5h6.27l-.008 6.249a.75.75 0 0 0 1.5.002l.008-6.251H19a.75.75 0 0 0 0-1.5h-6.228l.008-6.249Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/></svg>
`

let IconTianji = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconTianji.defaultProps = {
  size: 18,
};

IconTianji = React.memo ? React.memo(IconTianji) : IconTianji;

export default IconTianji;
