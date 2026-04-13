import { n as callApi } from "./api-DnmdqnsE.js";
import { r as createQueryKey, t as getQueryClient } from "./query-client-D0pG_vo9.js";
import { useMutation, useQuery } from "@tanstack/react-query";
//#region src/hooks/use-api.ts
function useApi(endpoint, options) {
	const isQuery = (options?.type ?? (!options?.method || options.method === "GET" ? "query" : "mutation")) === "query";
	const queryOpts = options;
	const mutationOpts = options;
	const queryResult = useQuery({
		queryKey: createQueryKey(endpoint, queryOpts?.body ?? queryOpts?.params),
		queryFn: async () => {
			return (await callApi(endpoint, {
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
	const mutation = useMutation({
		mutationFn: async (variables) => {
			const body = normalizeBody(variables);
			return (await callApi(endpoint, {
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
		invalidateQueries: (ep) => getQueryClient().invalidateQueries({ queryKey: createQueryKey(ep) })
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
export { useApi as t };
