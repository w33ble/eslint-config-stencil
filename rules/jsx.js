module.exports = {
  plugins: ['react', 'jsx-a11y', 'idiomatic-jsx'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
  },
  settings: {
    react: {
      pragma: 'h',
    },
  },
  rules: {
    'react/jsx-key': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-unknown-property': 'error',
    'react/react-in-jsx-scope': 'error',
  },
};
