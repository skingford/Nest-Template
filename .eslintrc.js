/*
 * @Author: kingford
 * @Date: 2021-05-19 22:41:53
 * @LastEditTime: 2021-05-19 23:31:40
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/eslint-plugin',
    'prettier'
  ],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': 'off',
    'semi': ['error', 'always'],
    'max-len': 0,
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-misused-promises': 'off'
  }
}
