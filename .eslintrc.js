module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'no-param-reassign': ['error', { props: false }],
    'react/jsx-props-no-spreading': ['off'],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'jsx-a11y/no-autofocus': ['off'],
    'jsx-a11y/label-has-associated-control': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/no-noninteractive-element-interactions': ['off'],
  },
};
