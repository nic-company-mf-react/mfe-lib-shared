const require_chunk = require("../../chunks/chunk-C6SnN1q4.cjs");
let _eslint_js = require("@eslint/js");
_eslint_js = require_chunk.__toESM(_eslint_js);
let globals = require("globals");
globals = require_chunk.__toESM(globals);
let typescript_eslint = require("typescript-eslint");
typescript_eslint = require_chunk.__toESM(typescript_eslint);
let eslint_config_prettier = require("eslint-config-prettier");
eslint_config_prettier = require_chunk.__toESM(eslint_config_prettier);
//#region src/config/eslint/base.ts
/**
* 모든 앱/패키지에 공통으로 적용되는 기본 ESLint 설정
* TypeScript, JavaScript 프로젝트에 사용
*/
var baseConfig = [
	_eslint_js.default.configs.recommended,
	...typescript_eslint.default.configs.recommended,
	{
		files: ["**/*.{js,ts,jsx,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.default.browser
		},
		rules: {
			"@typescript-eslint/no-explicit-any": "off",
			semi: ["error", "always"],
			"@typescript-eslint/no-empty-object-type": "off",
			"@typescript-eslint/no-unused-vars": "warn"
		}
	},
	eslint_config_prettier.default
];
//#endregion
module.exports = baseConfig;
