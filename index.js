import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import unicorn from 'eslint-plugin-unicorn';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import * as mdx from 'eslint-plugin-mdx';
import storybook from 'eslint-plugin-storybook';

// @ts-check
/** @type {import('eslint').Linter.Config[]} */
const config = [
  // Base JavaScript config
  js.configs.recommended,
  
  // Global ignores
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/build/**']
  },
  
  // Base config for all files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      unicorn,
      import: importPlugin,
      prettier,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...unicorn.configs.recommended.rules,
      'unicorn/no-null': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: true,
            pascalCase: true,
          },
          ignore: ['setupTests.ts', 'reportWebVitals.ts'],
        },
      ],
      'unicorn/catch-error-name': [
        'error',
        {
          name: 'exception',
        },
      ],
      'unicorn/no-useless-undefined': ['error', { checkArguments: false }],
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
        },
      ],
      'import/no-cycle': 'error',
      'array-callback-return': [
        'error',
        {
          allowImplicit: true,
        },
      ],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.stories.{js,jsx,ts,tsx,mdx}'],
    ...storybook.configs['flat/recommended'][0], 
  },
  {
    files: ['**/*.mdx'],
    plugins: {
      mdx,
    },
    rules: {
      ...mdx.configs.recommended.rules,
      'import/namespace': 'off',
    },
    settings: {
      'mdx/code-blocks': true,
    },
  },
  
  // Needs to be last to override other formatting rules
  prettierConfig,
];

export default config;
