module.exports = {
  extends: ['plugin:import/typescript'],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/core-modules': ['@stencil/core'],
    react: {
      pragma: 'h',
    },
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['src/**/*.spec.{ts,js}', 'src/**/*.e2e.{ts,js}'],
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
    'import/prefer-default-export': 'off',
  },
};
