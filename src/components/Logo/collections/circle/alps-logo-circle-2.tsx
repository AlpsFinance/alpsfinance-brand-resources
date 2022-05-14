import React, { FC } from "react";
import AlpsLogoCircleProps from "./types";

const AlpsLogoCircle2: FC<AlpsLogoCircleProps> = ({
  width = "auto",
  height = "auto",
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={width}
    height={height}
    viewBox="0 0 512 512"
    style={style}
  >
    <defs>
      <clipPath id="clip-path">
        <rect
          id="Rectangle_78"
          data-name="Rectangle 78"
          width="250"
          height="309.021"
          fill="#fff"
        />
      </clipPath>
    </defs>
    <g id="Group_140" data-name="Group 140" transform="translate(-1092 -3226)">
      <rect
        id="Rectangle_160"
        data-name="Rectangle 160"
        width="512"
        height="512"
        rx="256"
        transform="translate(1092 3226)"
      />
      <g
        id="ALPS_LOGO_WHITE"
        data-name="ALPS LOGO WHITE"
        transform="translate(1223 3327.489)"
      >
        <g id="Group_31" data-name="Group 31" clip-path="url(#clip-path)">
          <path
            id="Path_8"
            data-name="Path 8"
            d="M4.756,50.65c-9.282,26.863,2.139,60.885,23.214,81.225L164.752,254.49a248.088,248.088,0,0,1,40,45.841l4.2,6.218.258-.282c14.467-15.7,23.851-31.273,30.033-50.374,9.276-26.864-2.145-60.885-23.22-81.225L79.242,52.059A248.06,248.06,0,0,1,39.247,6.212L35.048,0l-.258.282C20.322,15.977,11.311,30.821,4.756,50.65"
            transform="translate(7.5 0.001)"
            fill="#fff"
          />
          <path
            id="Path_9"
            data-name="Path 9"
            d="M98.912,134.552C166.284,41.2,95.241,53.709,63.075,0c0,0-56.684,38.2-32.815,76.145,13,25.783,60.469,34.708,68.652,58.407"
            transform="translate(122.16 0.001)"
            fill="#fff"
          />
          <path
            id="Path_10"
            data-name="Path 10"
            d="M4.308,180.636C81.251,206.108,151.381,127.99,51.446,60.253,17.429,35.022,20.908,25.339,20.908,25.339c-52.034,75.376,13.205,111.576-16.6,155.3"
            transform="translate(-0.001 123.447)"
            fill="#fff"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default AlpsLogoCircle2;
