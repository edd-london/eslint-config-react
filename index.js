module.exports = {
  extends: [
    "react-app",
    "react-app/jest",
    "plugin:jsx-a11y/recommended",
    "plugin:unicorn/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  plugins: ["jsx-a11y"],
  rules: {
    "unicorn/no-null": 0,
    "import/order": [
      "error",
      {
        "newlines-between": "always-and-inside-groups",
      },
    ],
    "unicorn/prevent-abbreviations": "off",
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
        ignore: ["setupTests.ts", "reportWebVitals.ts"],
      },
    ],
    "array-callback-return": [
      "error",
      {
        allowImplicit: true,
      },
    ],
    "unicorn/catch-error-name": [
      "error",
      {
        name: "exception",
      },
    ],
    "unicorn/no-useless-undefined": ["error", { checkArguments: false }],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "import/no-cycle": "error"
  },
  overrides: [
    {
      files: ['*.(tsx|ts)'],
      rules: {
        "@typescript-eslint/consistent-type-imports": "error"
      }
    },
    {
      files: ["**/*.stories.(mdx|tsx)"],
      extends: ["plugin:storybook/recommended"],
    },
    {
      files: ["*.mdx"],
      extends: ["plugin:mdx/recommended"],
      // optional, if you want to lint code blocks at the same time
      settings: {
        "mdx/code-blocks": true,
      },
      rules: {
        "import/namespace": "off",
      },
    },
  ],
};
