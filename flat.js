// ESLint Flat Config for @eddlondon/eslint-config-react
// For ESLint v9+

// Helper function to safely require optional plugins
function safeRequire(moduleName) {
  try {
    return require(moduleName);
  } catch (error) {
    console.warn(`Warning: Optional plugin '${moduleName}' not found. Install it for full functionality.`);
    return null;
  }
}

const js = safeRequire('@eslint/js');
const jsxA11y = safeRequire('eslint-plugin-jsx-a11y');
const importPlugin = safeRequire('eslint-plugin-import');
const unicorn = safeRequire('eslint-plugin-unicorn');
const prettier = safeRequire('eslint-plugin-prettier');
const storybook = safeRequire('eslint-plugin-storybook');
const mdx = safeRequire('eslint-plugin-mdx');

const config = [];

// Add base ESLint recommended rules if available
if (js?.configs?.recommended) {
  config.push(js.configs.recommended);
}

// Main configuration for JavaScript/TypeScript/React files
const mainConfig = {
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
      localStorage: 'readonly',
      sessionStorage: 'readonly',
      fetch: 'readonly',
      Headers: 'readonly',
      Request: 'readonly',
      Response: 'readonly',
      URL: 'readonly',
      URLSearchParams: 'readonly',
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
      // Jest globals
      describe: 'readonly',
      it: 'readonly',
      test: 'readonly',
      expect: 'readonly',
      beforeEach: 'readonly',
      beforeAll: 'readonly',
      afterEach: 'readonly',
      afterAll: 'readonly',
      jest: 'readonly',
    },
  },
  plugins: {},
  rules: {
    // Core ESLint rules
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
};

// Add plugins and their rules if available
if (jsxA11y) {
  mainConfig.plugins['jsx-a11y'] = jsxA11y;
  if (jsxA11y.configs?.recommended?.rules) {
    Object.assign(mainConfig.rules, jsxA11y.configs.recommended.rules);
  }
}

if (importPlugin) {
  mainConfig.plugins['import'] = importPlugin;
  if (importPlugin.configs?.errors?.rules) {
    Object.assign(mainConfig.rules, importPlugin.configs.errors.rules);
  }
  if (importPlugin.configs?.warnings?.rules) {
    Object.assign(mainConfig.rules, importPlugin.configs.warnings.rules);
  }
  if (importPlugin.configs?.typescript?.rules) {
    Object.assign(mainConfig.rules, importPlugin.configs.typescript.rules);
  }
  
  // Import specific rules
  mainConfig.rules['import/order'] = [
    'error',
    {
      'newlines-between': 'always',
    },
  ];
  mainConfig.rules['import/no-cycle'] = 'error';
  
  // Import resolver settings
  mainConfig.settings['import/resolver'] = {
    typescript: {},
  };
}

if (unicorn) {
  mainConfig.plugins['unicorn'] = unicorn;
  if (unicorn.configs?.recommended?.rules) {
    Object.assign(mainConfig.rules, unicorn.configs.recommended.rules);
  }
  
  // Unicorn rule overrides
  mainConfig.rules['unicorn/no-null'] = 'off';
  mainConfig.rules['unicorn/prevent-abbreviations'] = 'off';
  mainConfig.rules['unicorn/filename-case'] = [
    'error',
    {
      cases: {
        kebabCase: true,
        pascalCase: true,
      },
      ignore: ['setupTests.ts', 'reportWebVitals.ts'],
    },
  ];
  mainConfig.rules['unicorn/catch-error-name'] = [
    'error',
    {
      name: 'exception',
    },
  ];
  mainConfig.rules['unicorn/no-useless-undefined'] = ['error', { checkArguments: false }];
}

if (prettier) {
  mainConfig.plugins['prettier'] = prettier;
  if (prettier.configs?.recommended?.rules) {
    Object.assign(mainConfig.rules, prettier.configs.recommended.rules);
  }
  
  mainConfig.rules['prettier/prettier'] = [
    'error',
    {
      endOfLine: 'auto',
    },
  ];
}

config.push(mainConfig);

// TypeScript specific configuration
config.push({
  files: ['**/*.{ts,tsx}'],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
  },
});

// Storybook files configuration
if (storybook) {
  config.push({
    files: ['**/*.stories.{js,jsx,ts,tsx,mdx}'],
    plugins: {
      storybook: storybook,
    },
    rules: storybook.configs?.recommended?.rules || {},
  });
}

// MDX files configuration
if (mdx) {
  config.push({
    files: ['**/*.mdx'],
    plugins: {
      mdx: mdx,
    },
    rules: {
      ...(mdx.configs?.recommended?.rules || {}),
      'import/namespace': 'off',
    },
    settings: {
      'mdx/code-blocks': true,
    },
  });
}

module.exports = config;