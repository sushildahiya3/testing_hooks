import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    rules:{"no-undef-init": [
      "error"
  ],
  "no-undefined": [
      "error"
  ],
  "no-unreachable": [
      "error"
  ],
  "no-debugger": [
      "error"
  ],
  "no-undef": [
      "error"
  ]},
    languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];