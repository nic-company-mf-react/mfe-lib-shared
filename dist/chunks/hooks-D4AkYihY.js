import { n as callApi } from "./api-BsBbjEmd.js";
import { r as createQueryKey, t as getQueryClient } from "./query-client-BKMXW0cG.js";
import { useCallback } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { create } from "zustand";
import { useStore } from "zustand/react";
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
//#region src/hooks/use-client-state.ts
function omitKey(record, key) {
	const { [key]: _removed, ...rest } = record;
	return rest;
}
function omitKeyInitializer(record, key) {
	const { [key]: _removed, ...rest } = record;
	return rest;
}
var clientStateStore = create((set, get) => ({
	values: {},
	defaults: {},
	setValue: (key, value) => set((s) => ({ values: {
		...s.values,
		[key]: value
	} })),
	updateValue: (key, updater) => {
		const prev = get().values[key];
		const next = updater(prev);
		set((s) => ({ values: {
			...s.values,
			[key]: next
		} }));
	},
	initKey: (key, initial) => {
		const { values, defaults } = get();
		if (Object.prototype.hasOwnProperty.call(values, key)) return;
		const resolved = typeof initial === "function" ? initial() : initial;
		set({
			values: {
				...values,
				[key]: resolved
			},
			defaults: {
				...defaults,
				[key]: initial
			}
		});
	},
	resetKey: (key) => {
		const { values, defaults } = get();
		const initial = defaults[key];
		if (initial === void 0) {
			set({
				values: omitKey(values, key),
				defaults: omitKeyInitializer(defaults, key)
			});
			return;
		}
		const resolved = typeof initial === "function" ? initial() : initial;
		set((s) => ({ values: {
			...s.values,
			[key]: resolved
		} }));
	}
}));
/**
* REST·서버 캐시와 무관한 클라이언트 전역 상태를 문자열 키로 구획해 둡니다.
* host·remote가 서로 다른 `zustand` 복사본을 쓰면 스토어가 갈라질 수 있으므로,
* 필요 시 Module Federation `shared`에서 `zustand`를 singleton으로 맞추세요.
*/
function useClientState(key, options) {
	if (options?.initial !== void 0) {
		const { values } = clientStateStore.getState();
		if (!Object.prototype.hasOwnProperty.call(values, key)) clientStateStore.getState().initKey(key, options.initial);
	}
	return {
		data: useStore(clientStateStore, (s) => s.values[key]),
		setData: useCallback((next) => {
			if (typeof next === "function") clientStateStore.getState().updateValue(key, (prev) => next(prev));
			else clientStateStore.getState().setValue(key, next);
		}, [key]),
		reset: useCallback(() => {
			clientStateStore.getState().resetKey(key);
		}, [key])
	};
}
//#endregion
export { useApi as n, useClientState as t };
