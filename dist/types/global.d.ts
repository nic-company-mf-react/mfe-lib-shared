import { IRouter } from './router/app-router-types';
declare global {
    interface Window {
        $router: IRouter;
    }
}
export {};
