require("./chunk-C6SnN1q4.cjs");
const require_api = require("./api-BjYqtIQj.cjs");
const require_query_client = require("./query-client-KbBH-o5g.cjs");
let _tanstack_react_query = require("@tanstack/react-query");
//#region src/hooks/use-api.ts
function useApi(endpoint, options) {
	const isQuery = (options?.type ?? (!options?.method || options.method === "GET" ? "query" : "mutation")) === "query";
	const queryOpts = options;
	const mutationOpts = options;
	const queryResult = (0, _tanstack_react_query.useQuery)({
		queryKey: require_query_client.createQueryKey(endpoint, queryOpts?.body ?? queryOpts?.params),
		queryFn: async () => {
			return (await require_api.callApi(endpoint, {
				method: options?.method ?? "GET",
				params: options?.params,
				body: options?.body,
				headers: options?.headers,
				timeout: options?.timeout
			})).data;
		},
		enabled: isQuery,
		...queryOpts?.queryOptions
	});
	const mutation = (0, _tanstack_react_query.useMutation)({
		mutationFn: async (variables) => {
			const body = normalizeBody(variables);
			return (await require_api.callApi(endpoint, {
				method: options?.method ?? "POST",
				params: options?.params,
				body,
				headers: options?.headers,
				timeout: options?.timeout
			})).data;
		},
		...mutationOpts?.mutationOptions
	});
	if (isQuery) return queryResult;
	return {
		...mutation,
		invalidateQueries: (ep) => require_query_client.getQueryClient().invalidateQueries({ queryKey: require_query_client.createQueryKey(ep) })
	};
}
/**
* FormData를 일반 객체로 변환합니다.
* File/Blob은 그대로 유지하고, 나머지는 string으로 변환합니다.
*/
function normalizeBody(variables) {
	const v = variables;
	if (typeof FormData !== "undefined" && typeof v === "object" && v !== null && v instanceof FormData) {
		const result = {};
		v.forEach((value, key) => {
			const val = value;
			result[key] = val instanceof File || val instanceof Blob ? val : String(value);
		});
		return result;
	}
	return variables;
}
//#endregion
Object.defineProperty(exports, "useApi", {
	enumerable: true,
	get: function() {
		return useApi;
	}
});
