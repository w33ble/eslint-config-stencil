module.exports = {
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
  },
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        'vars-on-top': 'off',
        'no-var': 'off',
      },
    },
    {
      files: ['*.spec.ts', '*.e2e.ts'],
      env: {
        node: true,
        jest: true,
      },
    },
  ],
};
