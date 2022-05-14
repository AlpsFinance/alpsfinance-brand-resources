# 🎉 AlpsFinance Brand Resources

Find all our Brand Resources under the [`logo`](https://github.com/AlpsFinance/alpsfinance-brand-resources/tree/main/logo) folder.

For development use in React applications, you can install `@alpsfinance/brand`:

```bash
# NPM
npm i @alpsfinance/brand

# Yarn
yarn @alpsfinance/brand
```

and check out all the documentation in our [Storybook](https://main--627f805dd17b65003a388ca0.chromatic.com).

Built with 💙 by Alps Finance.

## Components

### `<Logo />`

#### 1. Base Logo

```js
import { Logo, AlpsLogoVariant } from "@alpsfinance/brand";

const Component = () => {
    return (
        <Logo variant={AlpsLogoVariant.BASE} type={1}>
    );
};
```

#### 2. Circle Logo

```js
import { Logo, AlpsLogoVariant } from "@alpsfinance/brand";

const Component = () => {
    return (
        <Logo variant={AlpsLogoVariant.CIRCLE} type={1}>
    );
};
```

#### 3. Rounded Logo

```js
import { Logo, AlpsLogoVariant } from "@alpsfinance/brand";

const Component = () => {
    return (
        <Logo variant={AlpsLogoVariant.ROUNDED} type={1}>
    );
};
```

### `<LogoWithText />`

Coming soon.

## License

[Creative Commons Zero v1.0 Universal](https://github.com/AlpsFinance/alpsfinance-brand-resources/blob/main/LICENSE)
