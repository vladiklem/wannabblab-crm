module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'max-len': ['error', { code: 80, tabWidth: 2 }],
    quotes: ['error', 'single'],
    'import/prefer-default-export': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': ['error', 'after'],
    'no-confusing-arrow': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-unused-expressions': ["error", { "allowTernary": true }],
  },
};
