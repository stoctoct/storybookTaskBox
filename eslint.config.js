import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";


export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  {
    parserOptions: {
      ecmaVersion: 'latest',
      ecmaFeatures: {
        jsx: true,
      },
      sourceType: 'module',
      project: './tsconfig.eslint.json',
    }
  },
  {
    rules: {
      'react/jsx-uses-react': 'off',
    }
  },
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
];