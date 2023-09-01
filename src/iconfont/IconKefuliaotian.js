/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22"><path fill-opacity=".8" fill="#000" d="M1.832 10.999a9.166 9.166 0 0 1 9.167-9.167 9.166 9.166 0 0 1 9.166 9.167A9.167 9.167 0 0 1 11 20.165H1.832l2.685-2.685A9.137 9.137 0 0 1 1.832 11Zm4.426 7.333h4.74a7.333 7.333 0 1 0-5.185-2.148L7.11 17.48l-.851.852Z" data-follow-fill="#000"/><path fill-opacity=".45" fill="#000" d="M7.336 11.916h7.333a3.666 3.666 0 1 1-7.333 0Z" data-follow-fill="#000"/></svg>
`

let IconKefuliaotian = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconKefuliaotian.defaultProps = {
  size: 18,
};

IconKefuliaotian = React.memo ? React.memo(IconKefuliaotian) : IconKefuliaotian;

export default IconKefuliaotian;
