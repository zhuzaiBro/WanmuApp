/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#fff" d="M10.343 11.812 4.956 6.424a.834.834 0 0 0-1.18 1.179l6.567 6.566 6.566-6.566a.833.833 0 1 0-1.178-1.178l-5.388 5.388v-.002Z" data-follow-fill="#fff"/></svg>
`

let IconXiangxiajiantouBaise = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconXiangxiajiantouBaise.defaultProps = {
  size: 18,
};

IconXiangxiajiantouBaise = React.memo ? React.memo(IconXiangxiajiantouBaise) : IconXiangxiajiantouBaise;

export default IconXiangxiajiantouBaise;
