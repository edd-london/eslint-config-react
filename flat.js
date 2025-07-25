// ESLint Flat Config for @eddlondon/eslint-config-react
// For ESLint v9+

module.exports = [
  // Base configuration for all files
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
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        navigator: 'readonly',
        // Node.js globals
        global: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        // React globals
        React: 'readonly',
        JSX: 'readonly',
      },
    },
    rules: {
      // Basic rules that don't require plugins
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'array-callback-return': [
        'error',
        {
          allowImplicit: true,
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];