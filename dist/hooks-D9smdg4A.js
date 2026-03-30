import { n as e } from "./api-CP9PpY9C.js";
import { r as t, t as n } from "./query-client-CsAuVXSk.js";
import { useMutation as r, useQuery as i } from "@tanstack/react-query";
//#region src/hooks/use-api.ts
function a(a, s) {
	let c = (s?.type ?? (!s?.method || s.method === "GET" ? "query" : "mutation")) === "query", l = s, u = s, d = i({
		queryKey: t(a, l?.body ?? l?.params),
		queryFn: async () => (await e(a, {
			method: s?.method ?? "GET",
			params: s?.params,
			body: s?.body,
			headers: s?.headers,
			timeout: s?.timeout
		})).data,
		enabled: c,
		...l?.queryOptions
	}), f = r({
		mutationFn: async (t) => {
			let n = o(t);
			return (await e(a, {
				method: s?.method ?? "POST",
				params: s?.params,
				body: n,
				headers: s?.headers,
				timeout: s?.timeout
			})).data;
		},
		...u?.mutationOptions
	});
	return c ? d : {
		...f,
		invalidateQueries: (e) => n().invalidateQueries({ queryKey: t(e) })
	};
}
function o(e) {
	let t = e;
	if (typeof FormData < "u" && typeof t == "object" && t && t instanceof FormData) {
		let e = {};
		return t.forEach((t, n) => {
			let r = t;
			e[n] = r instanceof File || r instanceof Blob ? r : String(t);
		}), e;
	}
	return e;
}
//#endregion
export { a as t };
