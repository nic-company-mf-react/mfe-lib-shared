import { AxiosRequestConfig } from 'axios';
import { ApiRequestConfig, ApiResponse } from '../types/api-types';
declare class BaseAxiosClient {
    private static instance;
    private axiosInstance;
    private constructor();
    static getInstance(): BaseAxiosClient;
    private createAxiosInstance;
    private requestInterceptor;
    private responseInterceptor;
    private errorInterceptor;
    makeRequestConfig(endpoint: string, config: ApiRequestConfig): AxiosRequestConfig;
    request<T>(config: AxiosRequestConfig, token?: string | null): Promise<ApiResponse<T>>;
}
declare const _default: BaseAxiosClient;
export default _default;
