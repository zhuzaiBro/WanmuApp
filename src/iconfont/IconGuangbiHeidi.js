/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle fill="#1A1A1A" r="10" cy="12" cx="12"/><path fill="#fff" d="M16.207 7.793a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414l7-7a1 1 0 0 1 1.414 0Zm-8.414 0a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414Zm7.414 6a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1Z" clip-rule="evenodd" fill-rule="evenodd"/></svg>
`

let IconGuangbiHeidi = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconGuangbiHeidi.defaultProps = {
  size: 18,
};

IconGuangbiHeidi = React.memo ? React.memo(IconGuangbiHeidi) : IconGuangbiHeidi;

export default IconGuangbiHeidi;
