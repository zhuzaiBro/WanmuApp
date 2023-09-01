/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill-opacity=".9" fill="#000" d="M1.25 4.5A.75.75 0 0 1 2 3.75h20a.75.75 0 0 1 .75.75v5.156c0 .318-.2.6-.498.707a2 2 0 0 0-1.32 1.887 2 2 0 0 0 1.32 1.887.75.75 0 0 1 .498.707V20a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-5.156c0-.318.2-.6.498-.707a2 2 0 0 0 1.32-1.887 2 2 0 0 0-1.32-1.887.75.75 0 0 1-.498-.707V4.5Zm1.5.75v3.924a3.502 3.502 0 0 1 1.818 3.076 3.502 3.502 0 0 1-1.818 3.076v3.924h18.5v-3.924a3.502 3.502 0 0 1-1.818-3.076c0-1.327.734-2.483 1.818-3.076V5.25H2.75Zm6.22 2.22a.75.75 0 0 1 1.06 0L12 9.44l1.97-1.97a.75.75 0 1 1 1.06 1.06l-1.72 1.72H15a.75.75 0 0 1 0 1.5h-2.25v1.584H15a.75.75 0 0 1 0 1.5h-2.25V17a.75.75 0 0 1-1.5 0v-2.166H9a.75.75 0 0 1 0-1.5h2.25V11.75H9a.75.75 0 0 1 0-1.5h1.69L8.97 8.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/></svg>
`

let IconYouhuiquan = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconYouhuiquan.defaultProps = {
  size: 18,
};

IconYouhuiquan = React.memo ? React.memo(IconYouhuiquan) : IconYouhuiquan;

export default IconYouhuiquan;
