module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    './rules/jsx',
    './rules/typescript',
    './rules/imports',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    node: true,
    es6: true,
  },
};
