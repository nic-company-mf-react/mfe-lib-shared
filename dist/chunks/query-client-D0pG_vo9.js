import { QueryClient } from "@tanstack/react-query";
//#region src/query/query-key-factory.ts
var createQueryKey = (endpoint, params) => {
	const pathSegments = endpoint.split("/").filter(Boolean);
	if (!params || Object.keys(params).length === 0) return pathSegments;
	const cleanParams = Object.entries(params).reduce((acc, [key, value]) => {
		if (value !== void 0 && value !== null) acc[key] = value;
		return acc;
	}, {});
	if (Object.keys(cleanParams).length === 0) return pathSegments;
	return [...pathSegments, cleanParams];
};
//#endregion
//#region src/query/query-client.ts
var defaultQueryConfig = {
	queries: {
		retry: 0,
		refetchOnWindowFocus: true,
		refetchOnReconnect: true,
		staleTime: 0,
		gcTime: 0
	},
	mutations: { retry: 0 }
};
function makeQueryClient(config) {
	return new QueryClient({
		...config,
		defaultOptions: {
			...defaultQueryConfig,
			...config?.defaultOptions ?? {}
		}
	});
}
var browserQueryClient = void 0;
function getQueryClient(config) {
	if (typeof window === "undefined") return makeQueryClient(config);
	if (!browserQueryClient) browserQueryClient = makeQueryClient(config);
	return browserQueryClient;
}
//#endregion
export { makeQueryClient as n, createQueryKey as r, getQueryClient as t };
