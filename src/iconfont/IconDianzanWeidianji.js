/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#8C8C8C" d="M8.679 2.246a.625.625 0 0 1 .571-.371 2.875 2.875 0 0 1 2.875 2.875v2.375h3.872a2.125 2.125 0 0 1 2.12 2.444l-1.034 6.75a2.125 2.125 0 0 1-2.121 1.806H6.25a.625.625 0 0 1-.625-.625V9.25c0-.087.018-.174.054-.254l3-6.75Zm.957.925L6.875 9.383v7.492h8.097a.875.875 0 0 0 .875-.744l1.035-6.75a.876.876 0 0 0-.875-1.006H11.5a.625.625 0 0 1-.625-.625v-3c0-.765-.528-1.406-1.24-1.579Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#8C8C8C"/><path fill="#8C8C8C" d="M4.253 8.541H6.25c.345 0 .625.28.625.625V17.5c0 .346-.28.625-.625.625H4.253a2.358 2.358 0 0 1-2.372-2.04.623.623 0 0 1-.006-.085v-5.25c0-.028.002-.056.006-.083.154-1.142 1.138-2.143 2.372-2.125Zm-1.128 2.255v5.157c.091.537.562.931 1.111.922H5.625V9.79H4.236c-.51-.009-1.014.425-1.111 1.005Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#8C8C8C"/></svg>
`

let IconDianzanWeidianji = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconDianzanWeidianji.defaultProps = {
  size: 18,
};

IconDianzanWeidianji = React.memo ? React.memo(IconDianzanWeidianji) : IconDianzanWeidianji;

export default IconDianzanWeidianji;
