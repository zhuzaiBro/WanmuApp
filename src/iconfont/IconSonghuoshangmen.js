/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#A6E284" d="M2 12V3.5l1-1h4.5L10 3l3 3 .5 6h-3L9 11.5l-.5-1L7 10l-1.5 2H2Z"/><path fill-opacity=".9" fill="#000" d="M9.45 2c.354 0 .693.14.943.39l3.219 3.22c.25.25.39.589.39.942v4.781h1.334v1.334H9.919a2.668 2.668 0 0 1-5.166 0h-2.75A.667.667 0 0 1 1.336 12V3.333C1.336 2.597 1.933 2 2.669 2h6.782Zm-2.114 8.667a1.333 1.333 0 1 0 0 2.666 1.333 1.333 0 0 0 0-2.666ZM9.45 3.333H2.669v8h2.084a2.668 2.668 0 0 1 5.166 0h2.75V6.552L9.451 3.333Zm-.115 1.334v4H4.003v-4h5.333ZM8.003 6H5.336v1.333h2.667V6Z"/></svg>
`

let IconSonghuoshangmen = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconSonghuoshangmen.defaultProps = {
  size: 18,
};

IconSonghuoshangmen = React.memo ? React.memo(IconSonghuoshangmen) : IconSonghuoshangmen;

export default IconSonghuoshangmen;
