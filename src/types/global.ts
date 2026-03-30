// 이 파일은 라이브러리 빌드 산출물(dist)에 포함되어, 사용하는 앱에서 별도 선언 없이 아래 선언언 타입이 자동으로 인식된다.

import type { ApiLibConfig } from '@/api/api-config';
import type { IRouter } from './router/app-router-types';

declare global {
	interface Window {
		$router: IRouter;
		__TANSTACK_QUERY_CLIENT__: import('@tanstack/query-core').QueryClient;
		__MF_APP_CONFIG__: ApiLibConfig;
	}
	const $router: IRouter;
	const __TANSTACK_QUERY_CLIENT__: import('@tanstack/query-core').QueryClient;
	const __MF_APP_CONFIG__: ApiLibConfig;
}

export {};
