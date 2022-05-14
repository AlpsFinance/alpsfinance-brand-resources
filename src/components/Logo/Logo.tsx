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
import { AlpsLogoProps, AlpsLogoVariant } from "./types";

const Logo: FC<AlpsLogoProps> = ({ variant = AlpsLogoVariant.BASE, type = 1 }) => {
  switch (variant) {
    case AlpsLogoVariant.SQUARE:
    case AlpsLogoVariant.ROUNDED:
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
