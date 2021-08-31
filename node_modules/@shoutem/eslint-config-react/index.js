module.exports = {
  extends: [
    "airbnb",
    "plugin:react-hooks/recommended",
    "@shoutem/base",
    // custom rules
    require.resolve("./rules/custom"),
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {},
};
