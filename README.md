# EDD Eslint Config

Our default export contains ESLint rules, including ECMAScript 6+ and React. This package supports ESLint v9+ with the new flat configuration format.

[https://www.npmjs.com/package/@eddlondon/eslint-config-react](https://www.npmjs.com/package/@eddlondon/eslint-config-react)

## Prerequisites

`npm install npm@latest -g`  
`yarn install --global yarn`

`eslint extension`

**Requirements:**

- ESLint 9+
- Prettier 2+
- TypeScript 5+ (for TypeScript projects)

## Installation

```bash
npm install @eddlondon/eslint-config-react @eslint/js eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-unicorn eslint-plugin-prettier eslint-import-resolver-typescript eslint-config-prettier --save-dev
```

### Optional Plugins

For additional functionality, you can also install:

```bash
npm install eslint-plugin-storybook eslint-plugin-mdx --save-dev
```

## Usage

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

### Alternative Import

You can also explicitly import the flat config:

```javascript
const config = require('@eddlondon/eslint-config-react/flat');
module.exports = config;
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
