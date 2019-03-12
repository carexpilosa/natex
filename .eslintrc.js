module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    "indent": [2, 2, {"SwitchCase": 1}],
    'linebreak-style': ['error', 'unix'],
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'no-console': 'warn',
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
