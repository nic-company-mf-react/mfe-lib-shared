import e from "./base.js";
import t from "eslint-plugin-react";
import n from "eslint-plugin-react-hooks";
import r from "eslint-plugin-react-refresh";
import i from "eslint-plugin-import-x";
//#region src/config/eslint/react.ts
var a = [
	...e,
	n.configs.flat.recommended,
	r.configs.vite,
	{
		files: ["**/*.{ts,tsx,jsx}"],
		plugins: {
			react: t,
			import: i
		},
		rules: {
			"jsx-quotes": ["error", "prefer-double"],
			"react/jsx-max-props-per-line": ["error", { maximum: 1 }],
			"react-hooks/exhaustive-deps": "off",
			"react-hooks/incompatible-library": "off",
			"react-hooks/set-state-in-effect": "off",
			"react/no-unescaped-entities": "off",
			"import/no-anonymous-default-export": ["warn", {
				allowArray: !1,
				allowArrowFunction: !1,
				allowAnonymousClass: !1,
				allowAnonymousFunction: !1,
				allowCallExpression: !0,
				allowNew: !0,
				allowLiteral: !1,
				allowObject: !1
			}],
			"no-empty-pattern": "off"
		}
	}
];
//#endregion
export { a as default };
