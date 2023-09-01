/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill-opacity=".9" fill="#000" d="M12.713 1.307a.75.75 0 0 1 .817.163l9 9a.75.75 0 0 1-.015 1.075l-9 8.5a.75.75 0 0 1-1.265-.545v-4.718c-2.817.241-4.887 1.82-6.308 3.46a14.645 14.645 0 0 0-2.12 3.253 8.214 8.214 0 0 0-.12.271l-.005.012v.001A.75.75 0 0 1 2.25 21.5c0-4.296.626-7.972 2.306-10.592 1.61-2.512 4.128-3.963 7.694-4.14V2a.75.75 0 0 1 .463-.693ZM3.876 18.45c.273-.385.583-.787.932-1.19C6.514 15.29 9.203 13.25 13 13.25a.75.75 0 0 1 .75.75v3.76l7.174-6.775L13.75 3.81V7.5a.75.75 0 0 1-.75.75c-3.535 0-5.777 1.277-7.181 3.467-1.076 1.678-1.696 3.948-1.943 6.732Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/></svg>
`

let IconFenxiang1 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconFenxiang1.defaultProps = {
  size: 18,
};

IconFenxiang1 = React.memo ? React.memo(IconFenxiang1) : IconFenxiang1;

export default IconFenxiang1;
