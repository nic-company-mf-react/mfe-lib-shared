import { IRouter } from './router/app-router-types';
declare global {
    interface Window {
        $router: IRouter;
        __TANSTACK_QUERY_CLIENT__: import('@tanstack/query-core').QueryClient;
    }
    const $router: IRouter;
    const __TANSTACK_QUERY_CLIENT__: import('@tanstack/query-core').QueryClient;
}
export {};
