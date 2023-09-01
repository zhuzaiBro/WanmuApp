/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#fff" d="M16.47 0H3.53C1.58 0 0 1.679 0 3.75v12.5C0 18.321 1.58 20 3.53 20h12.94c1.95 0 3.53-1.679 3.53-3.75V3.75C20 1.679 18.42 0 16.47 0Z"/><path fill="#FF5858" d="M11.277 13.108c-.012.778-.08 1.262-.025 2.095l1.226-.052-.04-2.038-1.16-.005ZM7.86 9.304V8.16s-.779.184-1.145.276V7.434c.403.01 1.145 0 1.145 0V6.29c-.45.036-.733-.01-1.145 0V4H5.57v2.29c-.714 0-.449.054-1.144 0v1.144c.55-.073.283 0 1.144 0V8.58c-.632.128-.71.264-1.57.392.146.357.256.765.33 1.223.512-.21.48-.278 1.24-.47v1.144c0 .578-.43.647-1.102.585.247.34.585.591.658 1.076.252-.044.837.07 1.143-.035.385-.134.468-.487.468-.487l-.022-1.139V9.581c.009-.143 1.145-.277 1.145-.277ZM4.36 15.333l1.171.062.125-2.262-1.068-.024-.229 2.224ZM7.774 13.164c.147.66-.049 1.39-.067 2.26l1.346-.056c-.095-1.55-.104-2.194-.104-2.194l-1.175-.01ZM14.277 13.14s.035 1.198.374 2.16l1.518.02-.812-2.216-1.08.036ZM15.385 9.988c-.174.824-.339 1.236-.494 1.236-.11 0-.222-.153-.251-.542-.094-1.234.012-1.918.086-4.392-.614-.061-1.137-.02-2.29 0 .2-1.944 0-2.29 0-2.29s-.76.083-1.145 0c.037.403.019 1.218 0 2.29-.56.015-1.975.012-2.29 0v1.144c.358-.064 1.558.064 2.29 0-.055.65-.122.98-.374 1.332-.303-.228-.87-.54-1.081-.687l-.66.728c.266.164.623.42 1.072.769-.486 1.007-1.287 1.808-2.404 2.404.42.146.8.366 1.14.66.673-.466 1.507-1.32 2.144-2.226.366.33.576.49.878.838l.838-.866c-.586-.476-.763-.74-1.12-1.005.399-.635.487-.96.712-1.947h1.145s-.46 3.295.286 4.285c.417.485.818.728 1.202.728.55 0 .994-.6 1.333-1.8-.376-.046-.715-.265-1.017-.66Z"/></svg>
`

let IconRe = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconRe.defaultProps = {
  size: 18,
};

IconRe = React.memo ? React.memo(IconRe) : IconRe;

export default IconRe;
