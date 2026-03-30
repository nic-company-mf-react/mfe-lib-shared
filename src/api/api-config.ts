type ApiLibConfig = {
	baseURL?: string;
};

let _config: ApiLibConfig = {};

export const initApiConfig = (config: ApiLibConfig): void => {
	_config = { ..._config, ...config };
};

export const getApiConfig = (): ApiLibConfig => {
	return {
		..._config,
		baseURL: _config.baseURL ?? (typeof window !== 'undefined' ? window.location.origin : ''),
	};
};
