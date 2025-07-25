# EDD Eslint Config

Our default export contains ESlint rules, including ECMAScript 6+ and React.

[https://www.npmjs.com/package/@eddlondon/eslint-config-react](https://www.npmjs.com/package/@eddlondon/eslint-config-react)

## Prerequisites

`npm install npm@latest -g`  
`npm install --global yarn`

`eslint extension`

**Requirements:**

- ESLint 8+
- Prettier 2+
- TypeScript 5+ (for TypeScript projects)

## Installation

`npm i @eddlondon/eslint-config-react`  
`yarn add @eddlondon/eslint-config-react`

## Usage

- create a file called `.eslintrc.json` in root directory of application
- paste the following snippet `{ extends: ['@eddlondon/eslint-config-react'];}`

## Publish

run the following command

`npm run push-minor`

`yarn push-minor`

or update the version in the package.json and the run

`npm run publish`
`yarn publish`
