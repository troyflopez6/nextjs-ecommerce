import { FlatCompat } from '@eslint/eslintrc'
const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})
const eslintConfig = [
  ...compat.config({
    extends: ['next'],
  }),
  {
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'no-unused-vars': ['error', { 'args': 'none' }],
      'prefer-const': 'error',
      'no-var': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      'no-console': 'warn',
      'object-curly-spacing': ['error', 'always'],
      indent: ['error', 2],
      'arrow-parens': ['error', 'always'],
      'template-curly-spacing': ['error', 'never'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      eqeqeq: 'error',
      'prefer-template': 'error',
      'no-useless-concat': 'error',
      'func-style': ['error', 'expression'],
      'no-shadow-restricted-names': 'error',
    },
  },
  
]
export default eslintConfig