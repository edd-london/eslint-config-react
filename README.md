# EDD Eslint Config

Our default export contains ESLint v9 flat config rules, including ECMAScript 6+ and React.

[https://www.npmjs.com/package/@eddlondon/eslint-config-react](https://www.npmjs.com/package/@eddlondon/eslint-config-react)

## Prerequisites

`npm install npm@latest -g`  
`npm install --global yarn`

`eslint extension`

**Requirements:**

- ESLint 9+
- @eslint/js 9+
- typescript-eslint 8+
- Prettier 3+
- TypeScript 5+
- Storybook 8+ (if using Storybook files)

## Installation

`npm i @eddlondon/eslint-config-react`  
`yarn add @eddlondon/eslint-config-react`

## Usage

### Basic Usage

- Create a file called `eslint.config.js` in root directory of application
- Add the following content:

```javascript
import eddConfig from '@eddlondon/eslint-config-react';

export default [
  ...eddConfig,
  // Add your custom overrides here if needed
];
```

### Usage with TypeScript ESLint

For projects using TypeScript ESLint's `tseslint.config()` utility:

```javascript
import eddConfig from '@eddlondon/eslint-config-react';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...eddConfig,
  // Add your custom TypeScript configs here
);
```

### For Projects with Storybook

If your project uses Storybook, ensure you have the required peer dependency:

```bash
npm install --save-dev eslint@^9 @eslint/js@^9 typescript-eslint@^8 prettier@^3 typescript@^5 storybook@^8
# or
yarn add --dev eslint@^9 @eslint/js@^9 typescript-eslint@^8 prettier@^3 typescript@^5 storybook@^8
```

### TypeScript Projects

For TypeScript projects, ensure you have the required peer dependencies:

```bash
npm install --save-dev eslint@^9 @eslint/js@^9 typescript-eslint@^8 prettier@^3 typescript@^5
# or
yarn add --dev eslint@^9 @eslint/js@^9 typescript-eslint@^8 prettier@^3 typescript@^5
```

### Migration from v4 (ESLint v8)

If you're upgrading from v4, you'll need to:

1. Update ESLint to v9+
2. Replace `.eslintrc.json` with `eslint.config.js`
3. Update your configuration to use the new flat config format (see usage above)

## Features

This config includes:

- **TypeScript ESLint**: Full TypeScript support with recommended rules
- **React**: React and React Hooks rules
- **JSX Accessibility**: a11y rules for accessible React components
- **Import/Export**: Proper import ordering and cycle detection
- **Unicorn**: Additional helpful ESLint rules
- **Prettier**: Code formatting integration
- **Storybook**: Support for Storybook files
- **MDX**: Support for MDX files

## Publish

run the following command

`npm run push-minor`

`yarn push-minor`

or update the version in the package.json and the run

`npm run publish`
`yarn publish`
