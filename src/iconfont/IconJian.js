/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill-opacity=".45" fill="#000" d="M1.043 10a8.958 8.958 0 1 1 17.917 0 8.958 8.958 0 0 1-17.917 0Zm8.958-7.709a7.708 7.708 0 1 0 0 15.417 7.708 7.708 0 0 0 0-15.417Z" clip-rule="evenodd" fill-rule="evenodd"/><path fill-opacity=".9" fill="#333" d="M6.043 10c0-.345.28-.625.625-.625h6.667a.625.625 0 1 1 0 1.25H6.668A.625.625 0 0 1 6.043 10Z" clip-rule="evenodd" fill-rule="evenodd"/></svg>
`

let IconJian = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconJian.defaultProps = {
  size: 18,
};

IconJian = React.memo ? React.memo(IconJian) : IconJian;

export default IconJian;
