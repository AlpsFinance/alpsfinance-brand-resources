import React, { FC } from "react";
import AlpsLogo from "./collections/base/alps-logo-base-1";
import { AlpsLogoProps, AlpsLogoVariant } from "./types";

const Logo: FC<AlpsLogoProps> = ({ variant = AlpsLogoVariant.BASE }) => {
  switch (variant) {
    case AlpsLogoVariant.BASE:
    case AlpsLogoVariant.SQUARE:
    case AlpsLogoVariant.ROUNDED:
    case AlpsLogoVariant.CIRCLE:
    default:
      return <AlpsLogo width={100} />;
  }
};

export default Logo;
