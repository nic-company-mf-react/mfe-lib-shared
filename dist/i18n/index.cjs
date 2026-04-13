Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../chunks/chunk-C6SnN1q4.cjs");
const require_I18nProvider = require("../chunks/I18nProvider-BvIjD_y8.cjs");
let react_i18next = require("react-i18next");
exports.I18nProvider = require_I18nProvider.I18nProvider;
exports.i18n = require_I18nProvider.i18n;
Object.defineProperty(exports, "useTranslation", {
	enumerable: true,
	get: function() {
		return react_i18next.useTranslation;
	}
});
