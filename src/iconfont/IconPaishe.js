/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill-opacity=".7" fill="#000" d="M8.33 2.665A.75.75 0 0 1 9 2.25h6a.75.75 0 0 1 .67.415l1.293 2.585H20.5a2.25 2.25 0 0 1 2.25 2.25v12a2.25 2.25 0 0 1-2.25 2.25h-17a2.25 2.25 0 0 1-2.25-2.25v-12A2.25 2.25 0 0 1 3.5 5.25h3.536L8.33 2.665Zm6.207 1.085.75 1.5H8.713l.75-1.5h5.072ZM3.5 6.75h17a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75h-17a.75.75 0 0 1-.75-.75v-12a.75.75 0 0 1 .75-.75Zm8.5 2a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5ZM8.75 13.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/></svg>
`

let IconPaishe = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconPaishe.defaultProps = {
  size: 18,
};

IconPaishe = React.memo ? React.memo(IconPaishe) : IconPaishe;

export default IconPaishe;
