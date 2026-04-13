import { jsx } from "react/jsx-runtime";
import "react";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
//#region src/i18n/i18n-instance.ts
var i18n = i18next.createInstance();
//#endregion
//#region src/i18n/I18nProvider.tsx
function I18nProvider({ children, i18n: i18n$1 = i18n }) {
	return /* @__PURE__ */ jsx(I18nextProvider, {
		i18n: i18n$1,
		children
	});
}
//#endregion
export { i18n as n, I18nProvider as t };
