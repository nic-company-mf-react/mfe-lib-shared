import baseConfig from "./base.js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import-x";
//#region src/config/eslint/react.ts
/**
* React 앱 전용 ESLint 설정
* base 설정을 확장하고 React 관련 규칙 추가
*/
var reactConfig = [
	...baseConfig,
	reactHooks.configs.flat.recommended,
	reactRefresh.configs.vite,
	{
		files: ["**/*.{ts,tsx,jsx}"],
		plugins: {
			react,
			import: importPlugin
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
export { reactConfig as default };
