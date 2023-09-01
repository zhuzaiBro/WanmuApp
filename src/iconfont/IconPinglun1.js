/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill-opacity=".45" fill="#000" d="M1.043 2.5c0-.345.28-.625.625-.625h16.667c.345 0 .625.28.625.625V15c0 .345-.28.625-.625.625H9.732l-4.035 2.017a.625.625 0 0 1-.904-.559v-1.458H1.668A.625.625 0 0 1 1.043 15V2.5Zm1.25.625v11.25h3.125c.345 0 .625.28.625.625v1.072l3.262-1.631a.625.625 0 0 1 .28-.066h8.125V3.125H2.293Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/></svg>
`

let IconPinglun1 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconPinglun1.defaultProps = {
  size: 18,
};

IconPinglun1 = React.memo ? React.memo(IconPinglun1) : IconPinglun1;

export default IconPinglun1;
