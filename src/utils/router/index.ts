import type { DataRouter, To, NavigateOptions } from 'react-router';
import type { IRouter } from '@/types/router/app-router-types';

export function createWindowRouter(router: DataRouter): IRouter {
	return {
		push(to: To, options?: NavigateOptions) {
			router.navigate(to, options);
		},
		replace(to: To, options?: NavigateOptions) {
			router.navigate(to, { ...options, replace: true });
		},
		back() {
			router.navigate(-1);
		},
	};
}

export function registerWindowRouter(router: DataRouter): void {
	window.$router = createWindowRouter(router);
}
