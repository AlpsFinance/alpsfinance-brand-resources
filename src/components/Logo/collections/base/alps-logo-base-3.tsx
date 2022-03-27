import React, { FC } from "react";
import AlpsLogoBaseProps from "./types";

const AlpsLogoBase3: FC<AlpsLogoBaseProps> = ({
  width = "auto",
  height = "auto",
  style,
}) => (
  <svg
    id="ALPS_LOGO_WHITE"
    data-name="ALPS LOGO WHITE"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={width}
    height={height}
    viewBox="0 0 250 316.183"
    style={style}
  >
    <defs>
      <clipPath id="clip-path">
        <rect
          id="Rectangle_78"
          data-name="Rectangle 78"
          width="250"
          height="316.183"
          fill="#fff"
        />
      </clipPath>
    </defs>
    <g id="Group_31" data-name="Group 31" clip-path="url(#clip-path)">
      <path
        id="Path_8"
        data-name="Path 8"
        d="M4.756,51.824c-9.282,27.486,2.139,62.3,23.214,83.107L164.752,260.388a252.208,252.208,0,0,1,40,46.9l4.2,6.362.258-.288c14.467-16.059,23.851-32,30.033-51.542,9.276-27.486-2.145-62.3-23.22-83.107L79.242,53.266A252.182,252.182,0,0,1,39.247,6.356L35.048,0l-.258.288C20.322,16.347,11.311,31.535,4.756,51.824"
        transform="translate(7.5 0.001)"
        fill="#fff"
      />
      <path
        id="Path_9"
        data-name="Path 9"
        d="M98.912,137.671C166.284,42.157,95.241,54.954,63.075,0c0,0-56.684,39.087-32.815,77.91,13,26.381,60.469,35.513,68.652,59.76"
        transform="translate(122.16 0.001)"
        fill="#fff"
      />
      <path
        id="Path_10"
        data-name="Path 10"
        d="M4.308,184.235C81.251,210.3,151.381,130.369,51.446,61.062,17.429,35.246,20.908,25.339,20.908,25.339c-52.034,77.123,13.205,114.162-16.6,158.9"
        transform="translate(-0.001 126.895)"
        fill="#fff"
      />
    </g>
  </svg>
);

export default AlpsLogoBase3;
