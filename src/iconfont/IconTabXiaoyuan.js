/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 37 16"><path fill="#fff" d="M9.64 4.58h2.76l-1.42 2.26h.54l.9 1.5 1.38-1.52h.9l-.6-2.24h2.68l.8 3H16.4l-2.62 2.98 2.82 4.6h-3.36l-1.46-2.34-2.06 2.34H6.24l4.16-4.6L8.6 7.6h-.8l1.84-3.02Zm-6.36.56H1.5l.26-1.9h1.8l.26-1.84-.5-.58h3.56l-.34 2.42h1.7l-.26 1.9H6.26l-1.4 10.04H1.88l1.4-10.04Zm8.74-2.88.1-.7-.58-.76h4.02l-.22 1.46h3.02l-.26 1.9H8.66l.26-1.9h3.1Zm-12 12.2L1.6 5.78h1.34l-1.58 8.68H.02Zm5.64-1.14.72-7.54h1.34l-.7 7.54H5.66Z" data-follow-fill="#fff"/><path fill="url(#a)" d="M9.64 4.58h2.76l-1.42 2.26h.54l.9 1.5 1.38-1.52h.9l-.6-2.24h2.68l.8 3H16.4l-2.62 2.98 2.82 4.6h-3.36l-1.46-2.34-2.06 2.34H6.24l4.16-4.6L8.6 7.6h-.8l1.84-3.02Zm-6.36.56H1.5l.26-1.9h1.8l.26-1.84-.5-.58h3.56l-.34 2.42h1.7l-.26 1.9H6.26l-1.4 10.04H1.88l1.4-10.04Zm8.74-2.88.1-.7-.58-.76h4.02l-.22 1.46h3.02l-.26 1.9H8.66l.26-1.9h3.1Zm-12 12.2L1.6 5.78h1.34l-1.58 8.68H.02Zm5.64-1.14.72-7.54h1.34l-.7 7.54H5.66Z"/><path fill="#fff" d="M34.238 14.84h-15.2l1.82-12.94-.64-.74h15.94l-1.92 13.68Zm-2.78-1.9 1.4-9.88h-9.12l-1.4 9.88h9.12Zm-3.6-.48c-.227 0-.407-.113-.54-.34-.12-.24-.147-.58-.08-1.02l.42-3.02h-.54l-1.48 4.38h-2.72l1.54-4.38h-1.12l.28-2h8.42l-.28 2h-1.48l-.38 2.68h.92l.6-.48-.3 2.18h-3.26Zm4.14-9.02-.3 2h-7.56l.3-2h7.56Z" data-follow-fill="#fff"/><path fill="url(#b)" d="M34.238 14.84h-15.2l1.82-12.94-.64-.74h15.94l-1.92 13.68Zm-2.78-1.9 1.4-9.88h-9.12l-1.4 9.88h9.12Zm-3.6-.48c-.227 0-.407-.113-.54-.34-.12-.24-.147-.58-.08-1.02l.42-3.02h-.54l-1.48 4.38h-2.72l1.54-4.38h-1.12l.28-2h8.42l-.28 2h-1.48l-.38 2.68h.92l.6-.48-.3 2.18h-3.26Zm4.14-9.02-.3 2h-7.56l.3-2h7.56Z"/><defs><linearGradient gradientUnits="userSpaceOnUse" y2="8.842" x2="34.778" y1="8" x1="-2.137" id="a"><stop stop-color="#F9FD80"/><stop stop-color="#73E5BB" offset="1"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="8.842" x2="34.778" y1="8" x1="-2.137" id="b"><stop stop-color="#F9FD80"/><stop stop-color="#73E5BB" offset="1"/></linearGradient></defs></svg>
`

let IconTabXiaoyuan = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconTabXiaoyuan.defaultProps = {
  size: 18,
};

IconTabXiaoyuan = React.memo ? React.memo(IconTabXiaoyuan) : IconTabXiaoyuan;

export default IconTabXiaoyuan;
