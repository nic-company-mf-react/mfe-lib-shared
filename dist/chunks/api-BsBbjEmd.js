import axios from "axios";
//#region src/api/api-config.ts
var initApiConfig = (config) => {
	window.__MF_APP_CONFIG__ = {
		...window.__MF_APP_CONFIG__ ?? {},
		...config
	};
};
var getApiConfig = () => {
	const stored = window.__MF_APP_CONFIG__ ?? {};
	return {
		...stored,
		baseURL: stored.baseURL ?? window.location.origin
	};
};
var api_client_default = class BaseAxiosClient {
	static instance;
	axiosInstance;
	constructor(config = {}) {
		this.axiosInstance = this.createAxiosInstance(config);
		this.axiosInstance.defaults.withCredentials = true;
		this.axiosInstance.interceptors.request.use(this.requestInterceptor);
		this.axiosInstance.interceptors.response.use(this.responseInterceptor, this.errorInterceptor);
	}
	static getInstance() {
		if (!BaseAxiosClient.instance) BaseAxiosClient.instance = new BaseAxiosClient();
		return BaseAxiosClient.instance;
	}
	createAxiosInstance(config) {
		const apiConfig = getApiConfig();
		return axios.create({
			baseURL: config.baseURL || apiConfig.baseURL || "",
			timeout: config.timeout ?? 3e4,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				...config.headers ?? {}
			}
		});
	}
	requestInterceptor(requestConfig) {
		return requestConfig;
	}
	responseInterceptor(response) {
		return response;
	}
	errorInterceptor(error) {
		return Promise.reject(error);
	}
	makeRequestConfig(endpoint, config) {
		const { method = "GET", params, headers = {}, body, timeout } = config;
		const apiConfig = getApiConfig();
		let url;
		if (/^https?:\/\//.test(endpoint)) url = new URL(endpoint);
		else if (!apiConfig.baseURL) url = new URL(endpoint, window.location.origin);
		else url = new URL(endpoint, apiConfig.baseURL);
		if (method.toUpperCase() === "GET" && params) Object.entries(params).forEach(([key, value]) => {
			if (value !== void 0 && value !== null) url.searchParams.append(key, String(value));
		});
		const requestConfig = {
			method,
			url: url.toString(),
			headers,
			timeout: timeout ?? 3e4
		};
		if ([
			"POST",
			"PUT",
			"PATCH",
			"DELETE"
		].includes(method.toUpperCase()) && body) requestConfig.data = JSON.stringify(body);
		return requestConfig;
	}
	async request(config, token = null) {
		try {
			if (token) config.headers = {
				...config.headers,
				Authorization: `Bearer ${token}`
			};
			const response = await this.axiosInstance.request(config);
			return {
				success: true,
				data: response.data,
				statusCode: response.status
			};
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const axiosError = error;
				if (axiosError.code === "ECONNABORTED") return {
					success: false,
					error: "요청 시간이 초과되었습니다",
					statusCode: 408
				};
				return {
					success: false,
					error: axiosError.response?.data?.message || axiosError.response?.data?.error || axiosError.message || "API 요청 실패",
					statusCode: axiosError.response?.status ?? 500
				};
			}
			return {
				success: false,
				error: "알 수 없는 오류가 발생했습니다",
				statusCode: 500
			};
		}
	}
}.getInstance();
//#endregion
//#region src/api/api.ts
var ApiError = class extends Error {
	status;
	data;
	constructor(status, message, data) {
		super(message);
		this.name = "ApiError";
		this.status = status;
		this.data = data;
	}
};
async function callApi(endpoint, config = {}) {
	try {
		const reqConfig = api_client_default.makeRequestConfig(endpoint, config);
		const response = await api_client_default.request(reqConfig, null);
		if (!response.success) throw new ApiError(response.statusCode ?? 500, response.error ?? "알 수 없는 오류", response);
		return {
			data: response.data,
			statusCode: response.statusCode ?? 200,
			message: response.data?.message
		};
	} catch (error) {
		if (error instanceof ApiError) throw error;
		throw new ApiError(500, error instanceof Error ? error.message : "알 수 없는 오류", error);
	}
}
//#endregion
export { initApiConfig as i, callApi as n, getApiConfig as r, ApiError as t };
