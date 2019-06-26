# eslint-config-stencil

eslint config for stencil component projects.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/w33ble/eslint-config-stencil/master/LICENSE)
[![npm](https://img.shields.io/npm/v/eslint-config-stencil.svg)](https://www.npmjs.com/package/eslint-config-stencil)
[![Project Status](https://img.shields.io/badge/status-experimental-orange.svg)](https://nodejs.org/api/documentation.html#documentation_stability_index)

## Features

- Uses `eslint-airbnb-airbnb-base`
- Supports typescript
- Lints JSX

## Usage

Start by installing the package and its peer dependencies.

```
yarn add -D eslint-config-stecil
npx install-peerdeps --dev eslint-config-stecil
```

Then create an eslint file with at least the following:

```
{
  "extends": [
    "stencil"
  ],
  "parserOptions": {
    "project": "./tsconfig.json",
    "tsconfigRootDir": "."
  }
}
```

Note that this does not include a formatter, so you'll need to add one yourself. [Prettier](https://prettier.io/) is a fine choice.

## Configuration

This config makes use of `eslint-plugin-idiomatic-jsx`, which you can use to require or prevent attributes on specific components, as well as prevent components from being used. This requires that you add some rules to your eslintrc file. You can find more about configuring these features in the [eslint-plugin-idiomatic-jsx docs](https://github.com/danrigsby/eslint-plugin-idiomatic-jsx/tree/master/docs/rules).

#### License

MIT © [w33ble](https://github.com/w33ble)