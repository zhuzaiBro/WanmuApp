/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill-opacity=".01" fill="#fff" d="M16 0H0v16h16V0Z"/><path fill-opacity=".01" fill="#fff" d="M16 0H0v16h16V0Z"/><path fill-opacity=".7" fill="#000" d="M9.292 6.189V3.478c0-1.123-.873-2.033-1.948-2.033l-2.598 6.1V15h7.546c.647.008 1.201-.484 1.299-1.152l.896-6.1a1.397 1.397 0 0 0-.304-1.093c-.25-.3-.614-.47-.995-.466H9.292Z"/><path fill="#A6E284" d="M4.747 7.538H3.013c-.76-.014-1.411.638-1.513 1.418v4.7c.102.78.752 1.358 1.513 1.344h1.734V7.538ZM6.219 4.043l1.147-2.806a.127.127 0 0 1 .227-.018c.206.356.581 1.059.581 1.452 0 .458-.554 1.542-.725 1.866a.108.108 0 0 1-.144.045L6.22 4.043Z"/></svg>
`

let IconDianzanXuanzhong = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconDianzanXuanzhong.defaultProps = {
  size: 18,
};

IconDianzanXuanzhong = React.memo ? React.memo(IconDianzanXuanzhong) : IconDianzanXuanzhong;

export default IconDianzanXuanzhong;
