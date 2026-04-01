const require_chunk = require("../../chunks/chunk-C6SnN1q4.cjs");
const require_config_eslint_base = require("./base.cjs");
let eslint_plugin_react = require("eslint-plugin-react");
eslint_plugin_react = require_chunk.__toESM(eslint_plugin_react);
let eslint_plugin_react_hooks = require("eslint-plugin-react-hooks");
eslint_plugin_react_hooks = require_chunk.__toESM(eslint_plugin_react_hooks);
let eslint_plugin_react_refresh = require("eslint-plugin-react-refresh");
eslint_plugin_react_refresh = require_chunk.__toESM(eslint_plugin_react_refresh);
let eslint_plugin_import_x = require("eslint-plugin-import-x");
eslint_plugin_import_x = require_chunk.__toESM(eslint_plugin_import_x);
//#region src/config/eslint/react.ts
/**
* React 앱 전용 ESLint 설정
* base 설정을 확장하고 React 관련 규칙 추가
*/
var reactConfig = [
	...require_config_eslint_base,
	eslint_plugin_react_hooks.default.configs.flat.recommended,
	eslint_plugin_react_refresh.default.configs.vite,
	{
		files: ["**/*.{ts,tsx,jsx}"],
		plugins: {
			react: eslint_plugin_react.default,
			import: eslint_plugin_import_x.default
		},
		rules: {
			"jsx-quotes": ["error", "prefer-double"],
			"react/jsx-max-props-per-line": ["error", { maximum: 1 }],
			"react-hooks/exhaustive-deps": "off",
			"react-hooks/incompatible-library": "off",
			"react-hooks/set-state-in-effect": "off",
			"react/no-unescaped-entities": "off",
			"import/no-anonymous-default-export": ["warn", {
				allowArray: false,
				allowArrowFunction: false,
				allowAnonymousClass: false,
				allowAnonymousFunction: false,
				allowCallExpression: true,
				allowNew: true,
				allowLiteral: false,
				allowObject: false
			}],
			"no-empty-pattern": "off"
		}
	}
];
//#endregion
module.exports = reactConfig;
