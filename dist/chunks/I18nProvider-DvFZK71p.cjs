const require_chunk = require("./chunk-C6SnN1q4.cjs");
let react_jsx_runtime = require("react/jsx-runtime");
require("react");
let react_i18next = require("react-i18next");
let i18next = require("i18next");
i18next = require_chunk.__toESM(i18next);
//#region src/i18n/i18n-instance.ts
var i18n = i18next.default.createInstance();
//#endregion
//#region src/i18n/I18nProvider.tsx
function I18nProvider({ children, i18n: i18n$1 = i18n }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_i18next.I18nextProvider, {
		i18n: i18n$1,
		children
	});
}
//#endregion
Object.defineProperty(exports, "I18nProvider", {
	enumerable: true,
	get: function() {
		return I18nProvider;
	}
});
Object.defineProperty(exports, "i18n", {
	enumerable: true,
	get: function() {
		return i18n;
	}
});
