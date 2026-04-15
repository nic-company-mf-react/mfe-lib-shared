import { useCallback } from 'react';
import { create } from 'zustand';
import { useStore } from 'zustand/react';

/** `initial` 옵션에 함수를 넘길 때의 lazy 초기값 */
type Initializer<T> = T | (() => T);

interface IUseClientStateOptions<T> {
	/** 해당 키에 아직 값이 없을 때만 적용. 함수면 그때 한 번 호출합니다. */
	initial?: Initializer<T>;
}

interface ClientStateSlice {
	values: Record<string, unknown>;
	/** `reset` 시 되돌릴 기본값(또는 lazy). `initial`을 한 번이라도 적용한 키만 존재합니다. */
	defaults: Record<string, Initializer<unknown>>;
	setValue: (key: string, value: unknown) => void;
	updateValue: (key: string, updater: (prev: unknown) => unknown) => void;
	initKey: (key: string, initial: Initializer<unknown>) => void;
	resetKey: (key: string) => void;
}

function omitKey(record: Record<string, unknown>, key: string): Record<string, unknown> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { [key]: _removed, ...rest } = record;
	return rest;
}

function omitKeyInitializer(
	record: Record<string, Initializer<unknown>>,
	key: string,
): Record<string, Initializer<unknown>> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { [key]: _removed, ...rest } = record;
	return rest;
}

const clientStateStore = create<ClientStateSlice>((set, get) => ({
	values: {},
	defaults: {},
	setValue: (key, value) =>
		set((s) => ({
			values: { ...s.values, [key]: value },
		})),
	updateValue: (key, updater) => {
		const prev = get().values[key];
		const next = updater(prev);
		set((s) => ({
			values: { ...s.values, [key]: next },
		}));
	},
	initKey: (key, initial) => {
		const { values, defaults } = get();
		if (Object.prototype.hasOwnProperty.call(values, key)) return;
		const resolved = typeof initial === 'function' ? (initial as () => unknown)() : initial;
		set({
			values: { ...values, [key]: resolved },
			defaults: { ...defaults, [key]: initial },
		});
	},
	resetKey: (key) => {
		const { values, defaults } = get();
		const initial = defaults[key];
		if (initial === undefined) {
			set({
				values: omitKey(values, key),
				defaults: omitKeyInitializer(defaults, key),
			});
			return;
		}
		const resolved = typeof initial === 'function' ? (initial as () => unknown)() : initial;
		set((s) => ({
			values: { ...s.values, [key]: resolved },
		}));
	},
}));

/**
 * REST·서버 캐시와 무관한 클라이언트 전역 상태를 문자열 키로 구획해 둡니다.
 * host·remote가 서로 다른 `zustand` 복사본을 쓰면 스토어가 갈라질 수 있으므로,
 * 필요 시 Module Federation `shared`에서 `zustand`를 singleton으로 맞추세요.
 */
function useClientState<T>(key: string, options?: IUseClientStateOptions<T>): {
	data: T | undefined;
	setData: (next: T | ((prev: T | undefined) => T)) => void;
	reset: () => void;
} {
	if (options?.initial !== undefined) {
		const { values } = clientStateStore.getState();
		if (!Object.prototype.hasOwnProperty.call(values, key)) {
			clientStateStore.getState().initKey(key, options.initial as Initializer<unknown>);
		}
	}

	const data = useStore(clientStateStore, (s) => s.values[key] as T | undefined);

	const setData = useCallback(
		(next: T | ((prev: T | undefined) => T)) => {
			if (typeof next === 'function') {
				clientStateStore.getState().updateValue(key, (prev) =>
					(next as (p: T | undefined) => T)(prev as T | undefined),
				);
			} else {
				clientStateStore.getState().setValue(key, next);
			}
		},
		[key],
	);

	const reset = useCallback(() => {
		clientStateStore.getState().resetKey(key);
	}, [key]);

	return { data, setData, reset };
}

export { useClientState };
export type { IUseClientStateOptions, Initializer };
