/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill-opacity=".9" fill="#000" d="M3.75 9.5a8.25 8.25 0 1 1 16.5 0c0 3.516-2.014 6.812-3.917 9.16a29.705 29.705 0 0 1-3.521 3.638c-.106.091-.19.162-.25.21-.028.025-.051.043-.067.056l-.019.015-.005.005h-.002v.001L12 22l-.469.585-.002-.001-.005-.005-.019-.015-.068-.055-.249-.211a29.708 29.708 0 0 1-3.52-3.638C5.762 16.312 3.75 13.016 3.75 9.5ZM12 22l-.469.586a.75.75 0 0 0 .938 0L12 22Zm0-.985a28.214 28.214 0 0 0 3.167-3.3c1.847-2.277 3.583-5.23 3.583-8.215a6.75 6.75 0 0 0-13.5 0c0 2.984 1.737 5.938 3.583 8.215a28.214 28.214 0 0 0 3.167 3.3Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/><path fill-opacity=".9" fill="#000" d="M8.25 9.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM12 7.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/></svg>
`

let IconDizhiguangli = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconDizhiguangli.defaultProps = {
  size: 18,
};

IconDizhiguangli = React.memo ? React.memo(IconDizhiguangli) : IconDizhiguangli;

export default IconDizhiguangli;
