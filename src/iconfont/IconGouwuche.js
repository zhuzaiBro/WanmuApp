/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22"><path fill-opacity=".9" fill="#000" d="M4.413 13.72V4.389H2.836V2.832H5.2c.209 0 .41.082.557.228.148.146.231.344.231.55v9.333h9.805l1.576-6.222H7.566V5.165H18.38a.798.798 0 0 1 .621.3.772.772 0 0 1 .144.667l-1.971 7.778a.777.777 0 0 1-.28.424.795.795 0 0 1-.485.165H5.2a.794.794 0 0 1-.557-.228.773.773 0 0 1-.23-.55Zm1.576 5.445c-.418 0-.819-.163-1.115-.455a1.545 1.545 0 0 1 0-2.2 1.587 1.587 0 0 1 1.115-.456c.418 0 .82.164 1.115.456a1.545 1.545 0 0 1 0 2.2 1.588 1.588 0 0 1-1.115.455Zm9.46 0c-.419 0-.82-.163-1.115-.455a1.545 1.545 0 0 1 0-2.2 1.587 1.587 0 0 1 1.115-.456c.418 0 .819.164 1.114.456a1.545 1.545 0 0 1 0 2.2 1.588 1.588 0 0 1-1.114.455Z" data-follow-fill="#000"/></svg>
`

let IconGouwuche = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconGouwuche.defaultProps = {
  size: 18,
};

IconGouwuche = React.memo ? React.memo(IconGouwuche) : IconGouwuche;

export default IconGouwuche;
