module.exports = {
  root: true,

  env: {
    node: true
  },

  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'prettier/prettier': [
      'warn',
      {
        fix: true,
        singleQuote: true,
        semi: false,
        trailingComma: 'none'
      }
    ]
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  extends: ['plugin:vue/recommended', '@vue/prettier']
}
