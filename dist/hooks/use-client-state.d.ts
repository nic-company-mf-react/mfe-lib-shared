/** `initial` 옵션에 함수를 넘길 때의 lazy 초기값 */
type Initializer<T> = T | (() => T);
interface IUseClientStateOptions<T> {
    /** 해당 키에 아직 값이 없을 때만 적용. 함수면 그때 한 번 호출합니다. */
    initial?: Initializer<T>;
}
/**
 * REST·서버 캐시와 무관한 클라이언트 전역 상태를 문자열 키로 구획해 둡니다.
 * host·remote가 서로 다른 `zustand` 복사본을 쓰면 스토어가 갈라질 수 있으므로,
 * 필요 시 Module Federation `shared`에서 `zustand`를 singleton으로 맞추세요.
 */
declare function useClientState<T>(key: string, options?: IUseClientStateOptions<T>): {
    data: T | undefined;
    setData: (next: T | ((prev: T | undefined) => T)) => void;
    reset: () => void;
};
export { useClientState };
export type { IUseClientStateOptions, Initializer };
