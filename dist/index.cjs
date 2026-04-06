Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("./chunks/chunk-C6SnN1q4.cjs");
const require_button = require("./chunks/button-C2yIfINY.cjs");
const require_context = require("./chunks/context-DF0kIuyF.cjs");
const require_I18nProvider = require("./chunks/I18nProvider-DQwVP4kQ.cjs");
const require_CodeBlockClient = require("./chunks/CodeBlockClient-CDGPMomJ.cjs");
const require_router = require("./chunks/router-B5Vhkv5f.cjs");
const require_api = require("./chunks/api-B8wtOuFg.cjs");
const require_query_client = require("./chunks/query-client-Cd83_jP2.cjs");
const require_hooks = require("./chunks/hooks-CKfowT9Y.cjs");
require("./api/index.cjs");
require("./query/index.cjs");
require("./i18n/index.cjs");
let react_i18next = require("react-i18next");
exports.ApiError = require_api.ApiError;
exports.AppProviders = require_CodeBlockClient.AppProviders;
exports.Button = require_button.Button;
exports.CodeBlockClient = require_CodeBlockClient.CodeBlockClient;
exports.I18nProvider = require_I18nProvider.I18nProvider;
exports.ThemeProvider = require_context.ThemeProvider;
exports.buttonVariants = require_button.buttonVariants;
exports.callApi = require_api.callApi;
exports.cn = require_button.cn;
exports.createQueryKey = require_query_client.createQueryKey;
exports.createWindowRouter = require_router.createWindowRouter;
exports.getApiConfig = require_api.getApiConfig;
exports.getQueryClient = require_query_client.getQueryClient;
exports.i18n = require_I18nProvider.i18n;
exports.initApiConfig = require_api.initApiConfig;
exports.makeQueryClient = require_query_client.makeQueryClient;
exports.registerWindowRouter = require_router.registerWindowRouter;
exports.useApi = require_hooks.useApi;
exports.useTheme = require_context.useTheme;
Object.defineProperty(exports, "useTranslation", {
	enumerable: true,
	get: function() {
		return react_i18next.useTranslation;
	}
});
