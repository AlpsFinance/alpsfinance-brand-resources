import React, { FC } from "react";
import AlpsLogoBase1 from "./collections/base/alps-logo-base-1";
import AlpsLogoBase2 from "./collections/base/alps-logo-base-2";
import AlpsLogoBase3 from "./collections/base/alps-logo-base-3";
import AlpsLogoBase4 from "./collections/base/alps-logo-base-4";
import AlpsLogoCircle1 from "./collections/circle/alps-logo-circle-1";
import AlpsLogoCircle2 from "./collections/circle/alps-logo-circle-2";
import AlpsLogoCircle3 from "./collections/circle/alps-logo-circle-3";
import AlpsLogoCircle4 from "./collections/circle/alps-logo-circle-4";
import AlpsLogoCircle5 from "./collections/circle/alps-logo-circle-5";
import AlpsLogoCircle6 from "./collections/circle/alps-logo-circle-6";
import AlpsLogoCircle7 from "./collections/circle/alps-logo-circle-7";
import AlpsLogoCircle8 from "./collections/circle/alps-logo-circle-8";
import AlpsLogoCircle9 from "./collections/circle/alps-logo-circle-9";
import AlpsLogoCircle10 from "./collections/circle/alps-logo-circle-10";
import AlpsLogoCircle11 from "./collections/circle/alps-logo-circle-11";
import AlpsLogoCircle12 from "./collections/circle/alps-logo-circle-12";
import AlpsLogoRounded1 from "./collections/rounded/alps-logo-rounded-1";
import AlpsLogoRounded2 from "./collections/rounded/alps-logo-rounded-2";
import AlpsLogoRounded3 from "./collections/rounded/alps-logo-rounded-3";
import AlpsLogoRounded4 from "./collections/rounded/alps-logo-rounded-4";
import AlpsLogoRounded5 from "./collections/rounded/alps-logo-rounded-5";
import AlpsLogoRounded6 from "./collections/rounded/alps-logo-rounded-6";
import AlpsLogoRounded7 from "./collections/rounded/alps-logo-rounded-7";
import AlpsLogoRounded8 from "./collections/rounded/alps-logo-rounded-8";
import AlpsLogoRounded9 from "./collections/rounded/alps-logo-rounded-9";
import AlpsLogoRounded10 from "./collections/rounded/alps-logo-rounded-10";
import AlpsLogoRounded11 from "./collections/rounded/alps-logo-rounded-11";
import AlpsLogoRounded12 from "./collections/rounded/alps-logo-rounded-12";
import AlpsLogoSquare1 from "./collections/square/alps-logo-square-1";
import AlpsLogoSquare2 from "./collections/square/alps-logo-square-2";
import AlpsLogoSquare3 from "./collections/square/alps-logo-square-3";
import AlpsLogoSquare4 from "./collections/square/alps-logo-square-4";
import AlpsLogoSquare5 from "./collections/square/alps-logo-square-5";
import AlpsLogoSquare6 from "./collections/square/alps-logo-square-6";
import AlpsLogoSquare7 from "./collections/square/alps-logo-square-7";
import AlpsLogoSquare8 from "./collections/square/alps-logo-square-8";
import AlpsLogoSquare9 from "./collections/square/alps-logo-square-9";
import AlpsLogoSquare10 from "./collections/square/alps-logo-square-10";
import AlpsLogoSquare11 from "./collections/square/alps-logo-square-11";
import AlpsLogoSquare12 from "./collections/square/alps-logo-square-12";

import { AlpsLogoProps, AlpsLogoVariant } from "./types";

const Logo: FC<AlpsLogoProps> = ({ variant = AlpsLogoVariant.BASE, type = 1 }) => {
  switch (variant) {
    case AlpsLogoVariant.SQUARE:
      switch (type) {
        case 1:
          return <AlpsLogoSquare1 width={250} />
        case 2:
          return <AlpsLogoSquare2 width={250} />
        case 3:
          return <AlpsLogoSquare3 width={250} />
        case 4:
          return <AlpsLogoSquare4 width={250} />
        case 5:
          return <AlpsLogoSquare5 width={250} />
        case 6:
          return <AlpsLogoSquare6 width={250} />
        case 7:
          return <AlpsLogoSquare7 width={250} />
        case 8:
          return <AlpsLogoSquare8 width={250} />
        case 9:
          return <AlpsLogoSquare9 width={250} />
        case 10:
          return <AlpsLogoSquare10 width={250} />
        case 11:
          return <AlpsLogoSquare11 width={250} />
        case 12:
        default:
          return <AlpsLogoSquare12 width={250} />
      }
    case AlpsLogoVariant.ROUNDED:
      switch (type) {
        case 1:
          return <AlpsLogoRounded1 width={250} />
        case 2:
          return <AlpsLogoRounded2 width={250} />
        case 3:
          return <AlpsLogoRounded3 width={250} />
        case 4:
          return <AlpsLogoRounded4 width={250} />
        case 5:
          return <AlpsLogoRounded5 width={250} />
        case 6:
          return <AlpsLogoRounded6 width={250} />
        case 7:
          return <AlpsLogoRounded7 width={250} />
        case 8:
          return <AlpsLogoRounded8 width={250} />
        case 9:
          return <AlpsLogoRounded9 width={250} />
        case 10:
          return <AlpsLogoRounded10 width={250} />
        case 11:
          return <AlpsLogoRounded11 width={250} />
        case 12:
        default:
          return <AlpsLogoRounded12 width={250} />
      }
    case AlpsLogoVariant.CIRCLE:
      switch (type) {
        case 1:
          return <AlpsLogoCircle1 width={250} />
        case 2:
          return <AlpsLogoCircle2 width={250} />
        case 3:
          return <AlpsLogoCircle3 width={250} />
        case 4:
          return <AlpsLogoCircle4 width={250} />
        case 5:
          return <AlpsLogoCircle5 width={250} />
        case 6:
          return <AlpsLogoCircle6 width={250} />
        case 7:
          return <AlpsLogoCircle7 width={250} />
        case 8:
          return <AlpsLogoCircle8 width={250} />
        case 9:
          return <AlpsLogoCircle9 width={250} />
        case 10:
          return <AlpsLogoCircle10 width={250} />
        case 11:
          return <AlpsLogoCircle11 width={250} />
        case 12:
        default:
          return <AlpsLogoCircle12 width={250} />
      }
    case AlpsLogoVariant.BASE:
    default:
      switch (type) {
        case 1:
          return <AlpsLogoBase1 width={100} />;
        case 2:
          return <AlpsLogoBase2 width={100} />;
        case 3:
          return <AlpsLogoBase3 width={100} />;
        case 4:
        default:
          return <AlpsLogoBase4 width={100} />;
      }
  }
};

export default Logo;
