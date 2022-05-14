import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "Alps Finance",
    brandUrl: "https://alps.finance",
    brandImage:
      "https://bafkreiggef554tmc3akxk5lt3ekite667hjxf6bahrlfamvy6njlru5sze.ipfs.nftstorage.link/",
  }),
});
