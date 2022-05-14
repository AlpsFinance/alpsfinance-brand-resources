import React from "react";
import { storiesOf } from "@storybook/react";
import Logo from "./Logo";
import { AlpsLogoVariant } from "./types";

// ==================== BASE LOGO ====================
const BaseStories = storiesOf("Brand Resources/Logo/Base", module).addParameters({
  component: Logo,
  controls: { hideNoControlsWarning: true },
  docs: {
    source: {
      type: "dynamic",
    },
  },
});


Array.from({ length: 4 }, (_, i) => i + 1).forEach((type: number) => {
  BaseStories.add(
    `${AlpsLogoVariant.BASE} #${type}`,
    () => <Logo variant={AlpsLogoVariant.BASE} type={type} />
  );
});

// ==================== CIRCLE LOGO ====================
const CircleStories = storiesOf("Brand Resources/Logo/Circle", module).addParameters({
  component: Logo,
  controls: { hideNoControlsWarning: true },
  docs: {
    source: {
      type: "dynamic",
    },
  },
});

Array.from({ length: 12 }, (_, i) => i + 1).forEach((type: number) => {
  CircleStories.add(
    `${AlpsLogoVariant.CIRCLE} #${type}`,
    () => <Logo variant={AlpsLogoVariant.CIRCLE} type={type} />
  );
});

// ==================== ROUNDED LOGO ====================
const RoundedStories = storiesOf("Brand Resources/Logo/Rounded", module).addParameters({
  component: Logo,
  controls: { hideNoControlsWarning: true },
  docs: {
    source: {
      type: "dynamic",
    },
  },
});

Array.from({ length: 12 }, (_, i) => i + 1).forEach((type: number) => {
  RoundedStories.add(
    `${AlpsLogoVariant.ROUNDED} #${type}`,
    () => <Logo variant={AlpsLogoVariant.ROUNDED} type={type} />
  );
});

// ==================== SQUARE LOGO ====================
const SquareStories = storiesOf("Brand Resources/Logo/Square", module).addParameters({
  component: Logo,
  controls: { hideNoControlsWarning: true },
  docs: {
    source: {
      type: "dynamic",
    },
  },
});

Array.from({ length: 12 }, (_, i) => i + 1).forEach((type: number) => {
  SquareStories.add(
    `${AlpsLogoVariant.SQUARE} #${type}`,
    () => <Logo variant={AlpsLogoVariant.SQUARE} type={type} />
  );
});
