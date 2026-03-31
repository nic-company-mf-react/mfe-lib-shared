import "react";
import { jsx as e } from "react/jsx-runtime";
import { I18nextProvider as t } from "react-i18next";
import n from "i18next";
//#region src/i18n/i18n-instance.ts
var r = n.createInstance();
//#endregion
//#region src/i18n/I18nProvider.tsx
function i({ children: n, i18n: i = r }) {
	return /* @__PURE__ */ e(t, {
		i18n: i,
		children: n
	});
}
//#endregion
export { r as n, i as t };
