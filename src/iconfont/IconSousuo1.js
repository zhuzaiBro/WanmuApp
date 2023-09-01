/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill-opacity=".9" fill="#000" d="M15.847 10.074a5.77 5.77 0 1 1-11.538 0 5.77 5.77 0 0 1 11.538 0Zm-1.113 5.88a7.5 7.5 0 1 1 1.224-1.224l1.077 1.077a.866.866 0 0 1-1.223 1.224l-1.078-1.077Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/></svg>
`

let IconSousuo1 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconSousuo1.defaultProps = {
  size: 18,
};

IconSousuo1 = React.memo ? React.memo(IconSousuo1) : IconSousuo1;

export default IconSousuo1;
