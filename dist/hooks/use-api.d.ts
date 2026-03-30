import { UseQueryResult, UseQueryOptions, UseMutationResult, UseMutationOptions } from '@tanstack/react-query';
import { THttpMethod, QueryParams } from '../types/api-types';
interface IUseApiBaseOptions {
    /** HTTP Method (기본값: 'GET') */
    method?: THttpMethod;
    /** Query string parameters */
    params?: QueryParams;
    /** Request body */
    body?: Record<string, unknown>;
    /** Custom headers */
    headers?: Record<string, string>;
    /** Request timeout (ms) */
    timeout?: number;
}
interface IUseApiQueryOptions<TData> extends IUseApiBaseOptions {
    /** 'query': useQuery 동작 (자동 실행, 캐싱) */
    type?: 'query';
    /** TanStack Query useQuery 옵션 (queryKey/queryFn 제외) */
    queryOptions?: Omit<UseQueryOptions<TData, Error, TData>, 'queryKey' | 'queryFn'>;
}
interface IUseApiMutationOptions<TData, TVariables> extends IUseApiBaseOptions {
    /** 'mutation': useMutation 동작 (수동 실행) */
    type: 'mutation';
    /** TanStack Query useMutation 옵션 (mutationFn 제외) */
    mutationOptions?: Omit<UseMutationOptions<TData, Error, TVariables>, 'mutationFn'>;
}
type UseApiMutationResult<TData, TVariables> = UseMutationResult<TData, Error, TVariables> & {
    /** 특정 endpoint의 TanStack Query 캐시를 무효화합니다 */
    invalidateQueries: (endpoint: string) => Promise<void>;
};
/**
 * 조회용 오버로드 (type: 'query' 또는 생략)
 *
 * @example
 * // GET 조회 (type 생략 → query 자동)
 * const { data, isLoading } = useApi<User[]>('/api/users')
 *
 * // GET + params
 * const { data } = useApi<User>('/api/users', { params: { id: 1 } })
 *
 * // POST로 복잡한 검색 조회 (type 명시)
 * const { data } = useApi<SearchResult>('/api/search', {
 *   method: 'POST',
 *   body: { keyword: 'react' },
 *   type: 'query',
 * })
 */
declare function useApi<TData>(endpoint: string, options?: IUseApiQueryOptions<TData>): UseQueryResult<TData, Error>;
/**
 * 변경용 오버로드 (type: 'mutation')
 *
 * @example
 * // POST 생성 (type 생략 → mutation 자동)
 * const { mutate, isPending } = useApi<User, CreateUserDto>('/api/users', { method: 'POST' })
 * mutate({ name: 'John', email: 'john@example.com' })
 *
 * // PUT 수정
 * const { mutate } = useApi<User, UpdateUserDto>('/api/users/1', { method: 'PUT' })
 *
 * // DELETE + 캐시 무효화
 * const { mutate, invalidateQueries } = useApi('/api/users/1', { method: 'DELETE' })
 * mutate({}, { onSuccess: () => invalidateQueries('/api/users') })
 */
declare function useApi<TData = unknown, TVariables = Record<string, unknown>>(endpoint: string, options: IUseApiMutationOptions<TData, TVariables>): UseApiMutationResult<TData, TVariables>;
export { useApi };
export type { IUseApiQueryOptions, IUseApiMutationOptions, UseApiMutationResult };
