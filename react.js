module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    'jam3',
    'jsx-a11y',
    '@typescript-eslint',
    'import'
  ],
  rules: {
    'prettier/prettier': ['error', {
      'printWidth': 80,
      'tabWidth': 2,
      'singleQuote': true,
      'trailingComma': 'all',
      'arrowParens': 'always',
      'semi': false,
    }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'camelcase': 'off',
    'no-unused-expressions': 'off',
    'react/no-children-prop': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-uses-react': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        'checksVoidReturn': {
          'arguments': false,
          'attributes': false
        }
      }
    ],
    'jam3/no-sanitizer-with-danger': [
      2,
      {
        'wrapperName': ['sanitizer']
      }
    ],
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': ['.tsx']
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        'argsIgnorePattern': '_'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/prefer-default-export': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  }
}