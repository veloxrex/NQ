module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'unused-imports'],
  rules: {
    'no-console': 'error',
    'react/react-in-jsx-scope': 'off',
    'unused-imports/no-unused-imports-ts': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
