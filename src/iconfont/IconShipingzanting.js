/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 56 56"><path fill-opacity=".01" fill="#fff" d="M56 0H0v56h56V0Z"/><path fill-opacity=".45" fill="#000" d="M28.001 51.334c12.887 0 23.334-10.447 23.334-23.334C51.335 15.114 40.888 4.667 28 4.667 15.115 4.667 4.668 15.114 4.668 28c0 12.887 10.447 23.334 23.333 23.334Z"/><path fill="#fff" d="M23.707 19.267a.75.75 0 0 0-1.125.65v16.166a.75.75 0 0 0 1.125.65l14-8.084a.75.75 0 0 0 0-1.299l-14-8.083Z" clip-rule="evenodd" fill-rule="evenodd"/></svg>
`

let IconShipingzanting = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconShipingzanting.defaultProps = {
  size: 18,
};

IconShipingzanting = React.memo ? React.memo(IconShipingzanting) : IconShipingzanting;

export default IconShipingzanting;
