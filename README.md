# EDD Eslint Config

Our default export contains ESLint rules, including ECMAScript 6+ and React. This package supports both ESLint v8 (legacy format) and ESLint v9+ (flat config format) with automatic detection.

[https://www.npmjs.com/package/@eddlondon/eslint-config-react](https://www.npmjs.com/package/@eddlondon/eslint-config-react)

## Prerequisites

`npm install npm@latest -g`  
`yarn install --global yarn`

`eslint extension`

**Requirements:**

- ESLint 8+ (supports both v8 and v9+)
- Prettier 2+
- TypeScript 5+ (for TypeScript projects)

## Installation

### For ESLint v9+ (Flat Config)

```bash
npm install @eddlondon/eslint-config-react @eslint/js eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-unicorn eslint-plugin-prettier eslint-import-resolver-typescript eslint-config-prettier --save-dev
```

Create `eslint.config.js` in your project root:

```javascript
import config from '@eddlondon/eslint-config-react';

export default config;
```

Or with CommonJS:

```javascript
const config = require('@eddlondon/eslint-config-react');

module.exports = config;
```

### For ESLint v8 (Legacy Config)

```bash
npm install @eddlondon/eslint-config-react eslint-config-react-app eslint-config-prettier eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-unicorn eslint-plugin-prettier eslint-import-resolver-typescript --save-dev
```

Create `.eslintrc.json` in your project root:

```json
{
  "extends": ["@eddlondon/eslint-config-react"]
}
```

### Optional Plugins

For additional functionality, you can also install:

```bash
npm install eslint-plugin-storybook eslint-plugin-mdx --save-dev
```

## Usage

The package automatically detects your ESLint version and provides the appropriate configuration format:

- **ESLint v9+**: Uses flat config format (`eslint.config.js`)
- **ESLint v8**: Uses legacy format (`.eslintrc.*`)

### Manual Format Selection

You can also explicitly import a specific format:

```javascript
// For flat config (ESLint v9+)
const config = require('@eddlondon/eslint-config-react/flat');

// For legacy config (ESLint v8)
const config = require('@eddlondon/eslint-config-react/legacy');
```

## Features

This configuration includes:

- React and JSX support
- TypeScript support
- Import/export linting
- Accessibility rules (jsx-a11y)
- Code quality rules (unicorn)
- Prettier integration
- Storybook support (when plugin is installed)
- MDX support (when plugin is installed)

## Publish

Run the following command:

`npm run push-minor`

`yarn push-minor`

Or update the version in the package.json and then run:

`npm run publish`
`yarn publish`
