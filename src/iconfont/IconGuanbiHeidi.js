/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill-opacity=".7" fill="#000" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/><path fill="#fff" d="M15.36 9.702a.75.75 0 0 0-1.062-1.06L12 10.94 9.702 8.642a.75.75 0 0 0-1.06 1.06L10.94 12l-2.298 2.298a.75.75 0 0 0 1.06 1.061L12 13.061l2.298 2.298a.75.75 0 0 0 1.061-1.06L13.061 12l2.298-2.298Z" clip-rule="evenodd" fill-rule="evenodd"/></svg>
`

let IconGuanbiHeidi = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconGuanbiHeidi.defaultProps = {
  size: 18,
};

IconGuanbiHeidi = React.memo ? React.memo(IconGuanbiHeidi) : IconGuanbiHeidi;

export default IconGuanbiHeidi;
