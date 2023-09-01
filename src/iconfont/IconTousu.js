/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill-opacity=".01" fill="#fff" d="M16 0H0v16h16V0Z"/><path fill-opacity=".45" fill="#000" d="M7.999.833a7.146 7.146 0 0 0-5.068 2.1A7.146 7.146 0 0 0 .832 8c0 1.979.803 3.77 2.1 5.067l.353-.353-.354.353A7.146 7.146 0 0 0 8 15.167a7.146 7.146 0 0 0 5.067-2.1A7.146 7.146 0 0 0 15.166 8a7.146 7.146 0 0 0-2.1-5.068l-.353.354.353-.354A7.146 7.146 0 0 0 8 .833Zm-4.36 2.806a6.146 6.146 0 0 1 4.36-1.806c1.703 0 3.244.69 4.36 1.806A6.146 6.146 0 0 1 14.165 8c0 1.704-.69 3.245-1.806 4.361A6.146 6.146 0 0 1 8 14.166a6.146 6.146 0 0 1-4.36-1.806A6.146 6.146 0 0 1 1.831 8c0-1.703.69-3.244 1.806-4.36Zm5.196.861a.833.833 0 1 0-1.667 0 .833.833 0 0 0 1.667 0ZM7 6.667a.5.5 0 0 1 .5-.5h.667a.5.5 0 0 1 .5.5v4.166h.666a.5.5 0 0 1 0 1h-1.14a.548.548 0 0 1-.052 0H7a.5.5 0 0 1 0-1h.667V7.167H7.5a.5.5 0 0 1-.5-.5Z" clip-rule="evenodd" fill-rule="evenodd"/></svg>
`

let IconTousu = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconTousu.defaultProps = {
  size: 18,
};

IconTousu = React.memo ? React.memo(IconTousu) : IconTousu;

export default IconTousu;
