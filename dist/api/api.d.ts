import { ApiRequestConfig, ApiResponse } from '../types/api-types';
export declare class ApiError extends Error {
    status: number;
    data?: unknown;
    constructor(status: number, message: string, data?: unknown);
}
export declare function callApi<T = unknown>(endpoint: string, config?: ApiRequestConfig): Promise<ApiResponse<T>>;
