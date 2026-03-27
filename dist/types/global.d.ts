import { IRouter } from './router/app-router-types';
declare global {
    interface Window {
        $router: IRouter;
    }
    const $router: IRouter;
}
export {};
