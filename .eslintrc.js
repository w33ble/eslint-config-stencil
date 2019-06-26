module.exports = {
  extends: ['./index.js', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'script',
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
