import React from "react";
import { storiesOf } from "@storybook/react";
import Logo from "./Logo";

const stories = storiesOf("Brand Resources/Logo", module).addParameters({
  component: Logo,
  controls: { hideNoControlsWarning: true },
  docs: {
    source: {
      type: "dynamic",
    },
  },
});

["Square", "Rounded", "Circle"].forEach((name) => {
  stories.add(name, () => <Logo />);
});
