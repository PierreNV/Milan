module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": ["error", "unix"],
    "jsx-quotes": ["error", "prefer-double"],
    semi: ["error", "always"],
    "no-multiple-empty-lines": "error",
    "react/prop-types": ["off"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
