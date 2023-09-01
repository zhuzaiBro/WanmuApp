/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill-opacity=".9" fill="#fff" d="M7.995 1.334a6.667 6.667 0 0 0-4.714 11.38l-1.953 1.953h6.667a6.667 6.667 0 1 0 0-13.333Zm0 12H4.547l.62-.62-.944-.942a5.333 5.333 0 1 1 3.771 1.562Zm2.667-4.668H5.328a2.667 2.667 0 0 0 5.333 0Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#fff"/></svg>
`

let IconLiaotian1 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconLiaotian1.defaultProps = {
  size: 18,
};

IconLiaotian1 = React.memo ? React.memo(IconLiaotian1) : IconLiaotian1;

export default IconLiaotian1;
