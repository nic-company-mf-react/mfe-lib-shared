import { ApiLibConfig } from '../api/api-config';
import { IRouter } from './router/app-router-types';
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
