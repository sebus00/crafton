module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': ['error', 'never'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        vue: 'never'
      }
    ],
    quotes: [2, 'single', { avoidEscape: true }],
    'max-len': ['error', { code: 150 }],
    'no-unused-vars': 'off',
    'no-trailing-spaces': 'off',
    'object-curly-newline': 'off',
    'no-param-reassign': 'off',
    'func-names': 'off',
    'no-plusplus': 'off'
  }
};
