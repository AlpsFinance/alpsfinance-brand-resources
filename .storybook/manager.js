import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "Alps Finance",
    brandUrl: "https://alps.finance",
    brandImage:
      "https://bafkreia4fqjyfdyerens3q7nvx2c36lpcpbb2r65tnoa4etzq5jgdb3lca.ipfs.nftstorage.link/",
  }),
});
