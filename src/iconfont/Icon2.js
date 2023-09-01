/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28"><circle fill="#ADEE89" r="10" cy="14" cx="14"/><path fill-opacity=".9" fill="#000" d="M14.11 10.72c.692 0 1.256.197 1.69.59.432.4.65.914.65 1.54 0 .607-.234 1.17-.7 1.69-.28.287-.774.67-1.48 1.15-.768.507-1.228.957-1.38 1.35h3.57V18h-4.92c0-.713.236-1.336.71-1.87.246-.293.782-.726 1.61-1.3.486-.346.826-.62 1.02-.82.326-.366.49-.756.49-1.17 0-.4-.11-.7-.33-.9-.22-.2-.544-.3-.97-.3-.454 0-.794.154-1.02.46-.234.294-.36.73-.38 1.31h-1.09c.012-.8.242-1.44.69-1.92.452-.513 1.066-.77 1.84-.77Z"/></svg>
`

let Icon2 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

Icon2.defaultProps = {
  size: 18,
};

Icon2 = React.memo ? React.memo(Icon2) : Icon2;

export default Icon2;
