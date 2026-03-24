import e from "@eslint/js";
import t from "globals";
import n from "typescript-eslint";
import r from "eslint-config-prettier";
//#region src/config/eslint/base.ts
var i = [
	e.configs.recommended,
	...n.configs.recommended,
	{
		files: ["**/*.{js,ts,jsx,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: t.browser
		},
		rules: {
			"@typescript-eslint/no-explicit-any": "off",
			semi: ["error", "always"],
			"@typescript-eslint/no-empty-object-type": "off",
			"@typescript-eslint/no-unused-vars": "warn"
		}
	},
	r
];
//#endregion
export { i as default };
