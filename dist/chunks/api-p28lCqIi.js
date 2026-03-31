import e from "axios";
//#region src/api/api-config.ts
var t = (e) => {
	window.__MF_APP_CONFIG__ = {
		...window.__MF_APP_CONFIG__ ?? {},
		...e
	};
}, n = () => {
	let e = window.__MF_APP_CONFIG__ ?? {};
	return {
		...e,
		baseURL: e.baseURL ?? window.location.origin
	};
}, r = class t {
	static instance;
	axiosInstance;
	constructor(e = {}) {
		this.axiosInstance = this.createAxiosInstance(e), this.axiosInstance.defaults.withCredentials = !0, this.axiosInstance.interceptors.request.use(this.requestInterceptor), this.axiosInstance.interceptors.response.use(this.responseInterceptor, this.errorInterceptor);
	}
	static getInstance() {
		return t.instance ||= new t(), t.instance;
	}
	createAxiosInstance(t) {
		let r = n();
		return e.create({
			baseURL: t.baseURL || r.baseURL || "",
			timeout: t.timeout ?? 3e4,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				...t.headers ?? {}
			}
		});
	}
	requestInterceptor(e) {
		return e;
	}
	responseInterceptor(e) {
		return e;
	}
	errorInterceptor(e) {
		return Promise.reject(e);
	}
	makeRequestConfig(e, t) {
		let { method: r = "GET", params: i, headers: a = {}, body: o, timeout: s } = t, c = n(), l;
		l = /^https?:\/\//.test(e) ? new URL(e) : c.baseURL ? new URL(e, c.baseURL) : new URL(e, window.location.origin), r.toUpperCase() === "GET" && i && Object.entries(i).forEach(([e, t]) => {
			t != null && l.searchParams.append(e, String(t));
		});
		let u = {
			method: r,
			url: l.toString(),
			headers: a,
			timeout: s ?? 3e4
		};
		return [
			"POST",
			"PUT",
			"PATCH",
			"DELETE"
		].includes(r.toUpperCase()) && o && (u.data = JSON.stringify(o)), u;
	}
	async request(t, n = null) {
		try {
			n && (t.headers = {
				...t.headers,
				Authorization: `Bearer ${n}`
			});
			let e = await this.axiosInstance.request(t);
			return {
				success: !0,
				data: e.data,
				statusCode: e.status
			};
		} catch (t) {
			if (e.isAxiosError(t)) {
				let e = t;
				return e.code === "ECONNABORTED" ? {
					success: !1,
					error: "요청 시간이 초과되었습니다",
					statusCode: 408
				} : {
					success: !1,
					error: e.response?.data?.message || e.response?.data?.error || e.message || "API 요청 실패",
					statusCode: e.response?.status ?? 500
				};
			}
			return {
				success: !1,
				error: "알 수 없는 오류가 발생했습니다",
				statusCode: 500
			};
		}
	}
}.getInstance(), i = class extends Error {
	status;
	data;
	constructor(e, t, n) {
		super(t), this.name = "ApiError", this.status = e, this.data = n;
	}
};
async function a(e, t = {}) {
	try {
		let n = r.makeRequestConfig(e, t), a = await r.request(n, null);
		if (!a.success) throw new i(a.statusCode ?? 500, a.error ?? "알 수 없는 오류", a);
		return {
			data: a.data,
			statusCode: a.statusCode ?? 200,
			message: a.data?.message
		};
	} catch (e) {
		throw e instanceof i ? e : new i(500, e instanceof Error ? e.message : "알 수 없는 오류", e);
	}
}
//#endregion
export { t as i, a as n, n as r, i as t };
