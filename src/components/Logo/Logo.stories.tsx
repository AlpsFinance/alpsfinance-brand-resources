import React from "react";
import { storiesOf } from "@storybook/react";
import Logo from "./Logo";
import { AlpsLogoVariant } from "./types";

const stories = storiesOf("Brand Resources/Logo", module).addParameters({
  component: Logo,
  controls: { hideNoControlsWarning: true },
  docs: {
    source: {
      type: "dynamic",
    },
  },
});

[AlpsLogoVariant.BASE, AlpsLogoVariant.CIRCLE].forEach((variant: AlpsLogoVariant) => {
  Array.from({ length: variant === AlpsLogoVariant.BASE ? 4 : 12 }, (_, i) => i + 1).forEach((type: number) => {
    stories.add(`${variant} #${type}`, () => <Logo variant={variant} type={type} />);
  })
});
