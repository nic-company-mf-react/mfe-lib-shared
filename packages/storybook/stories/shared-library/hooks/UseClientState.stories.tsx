import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@axiom/mfe-lib-shared/components/ui';
import { useClientState } from '@axiom/mfe-lib-shared/hooks';
import React from 'react';

type CounterState = { count: number };

const GUIDE = `
\`useClientState\`는 REST·TanStack Query 캐시와 **무관한** 클라이언트 전역 상태를 문자열 **키**로 나누어 보관합니다. 내부적으로 Zustand 단일 스토어를 사용합니다.

### 설치 (소비자 앱)

\`zustand\`는 **peer dependency**입니다. host·remote 앱의 \`dependencies\`에 설치 되어있어야 합니다.

\`\`\`bash
npm install zustand
\`\`\`

마이크로 프론트엔드 아키텍처에서 전역 상태를 공유하고 일관되게 관리하려면, vite module federation의 shared 옵션에서 \`zustand\`를 singleton으로 설정하는 방식을 사용하는 것을 권장합니다.

\`\`\`json
shared: {
	// ...
	zustand: {
		singleton: true,
		requiredVersion: '^5.0.0', // package.json과 맞춤
	},
}
\`\`\`

### 임포트

\`\`\`tsx
import { useClientState } from '@axiom/mfe-lib-shared/hooks';
\`\`\`

루트 진입점을 쓰는 경우:

\`\`\`tsx
import { useClientState } from '@axiom/mfe-lib-shared';
\`\`\`

### 기본 사용법

\`\`\`tsx
type MyState = { count: number };

function Example() {
  const { data, setData, reset } = useClientState<MyState>('my-feature/counter', {
    initial: { count: 0 },
  });

  return (
    <div>
      <p>{data?.count}</p>
      <button type="button" onClick={() => setData((prev) => ({ count: (prev?.count ?? 0) + 1 }))}>
        +1
      </button>
      <button type="button" onClick={reset}>
        초기화
      </button>
    </div>
  );
}
\`\`\`

- **\`key\`**: 같은 문자열을 쓰는 컴포넌트는 **동일한 슬라이스**를 구독합니다. 기능·도메인별로 네임스페이스를 나누세요 (예: \`shell/sidebar/open\`, \`cart/items\`).
- **\`initial\`**: 해당 키에 값이 **아직 없을 때만** 한 번 적용됩니다. 함수를 넘기면 그 시점에 호출해 lazy 초기화할 수 있습니다.
- **\`data\`**: 현재 값. \`initial\`을 주지 않으면 설정 전까지 \`undefined\`일 수 있습니다.
- **\`setData\`**: 값을 통째로 바꾸거나, 이전 값을 받는 updater 함수를 넘길 수 있습니다.
- **\`reset\`**: \`initial\`이 있으면 그때의 기준값으로 되돌리고, 없었으면 키를 제거합니다.

### Module Federation

host와 remote가 **서로 다른** \`zustand\` 번들을 쓰면 스토어 인스턴스가 갈라질 수 있습니다. 전역 상태를 진짜로 공유하려면 Federation \`shared\`에서 \`zustand\`를 **singleton** 등으로 맞추는 방식을 검토하세요.
`;

/** 단일 패널: 초기값·증가·리셋·JSON 표시 */
function SinglePanelDemo() {
	const { data, setData, reset } = useClientState<CounterState>('storybook/useClientState/demo', {
		initial: { count: 0 },
	});

	return (
		<div className="max-w-md space-y-4 rounded-lg border border-border bg-card p-4 text-card-foreground shadow-sm">
			<p className="text-sm text-muted-foreground">
				키 <code className="rounded bg-muted px-1.5 py-0.5 text-xs">storybook/useClientState/demo</code>
			</p>
			<p className="text-2xl font-semibold tabular-nums">count: {data?.count ?? '—'}</p>
			<div className="flex flex-wrap gap-2">
				<Button
					type="button"
					size="sm"
					onClick={() =>
						setData((prev) => ({
							count: (prev?.count ?? 0) + 1,
						}))
					}
				>
					+1
				</Button>
				<Button
					type="button"
					size="sm"
					variant="secondary"
					onClick={() => setData({ count: 0 })}
				>
					0으로 설정
				</Button>
				<Button
					type="button"
					size="sm"
					variant="outline"
					onClick={reset}
				>
					reset
				</Button>
			</div>
			<pre className="overflow-x-auto rounded-md bg-muted p-3 text-left text-xs leading-relaxed">
				{JSON.stringify(data, null, 2)}
			</pre>
		</div>
	);
}

/** 동일 키를 두 패널에서 구독 — 한쪽 변경이 다른 쪽에도 반영되는지 확인 */
function TwoPanelsSameKey() {
	return (
		<div className="flex flex-col gap-6 md:flex-row md:items-start">
			<div className="space-y-2">
				<p className="text-sm font-medium">패널 A</p>
				<SinglePanelDemo />
			</div>
			<div className="space-y-2">
				<p className="text-sm font-medium">패널 B (동일 키)</p>
				<SinglePanelDemo />
			</div>
		</div>
	);
}

/** initial 없음 — setData로만 채움 */
function WithoutInitialDemo() {
	const { data, setData, reset } = useClientState<{ label: string }>('storybook/useClientState/no-initial');

	return (
		<div className="max-w-md space-y-4 rounded-lg border border-dashed border-border bg-card p-4 text-card-foreground">
			<p className="text-sm text-muted-foreground">
				키 <code className="rounded bg-muted px-1.5 py-0.5 text-xs">storybook/useClientState/no-initial</code>—{' '}
				<code className="text-xs">initial</code> 없음
			</p>
			<p className="text-sm">
				현재 data:{' '}
				<code className="rounded bg-muted px-1.5 py-0.5 text-xs">
					{data === undefined ? 'undefined' : JSON.stringify(data)}
				</code>
			</p>
			<div className="flex flex-wrap gap-2">
				<Button
					type="button"
					size="sm"
					onClick={() => setData({ label: 'hello' })}
				>
					setData 설정
				</Button>
				<Button
					type="button"
					size="sm"
					variant="outline"
					onClick={reset}
				>
					reset (키 제거)
				</Button>
			</div>
		</div>
	);
}

const meta = {
	title: 'Shared Library/Hooks/useClientState',
	component: SinglePanelDemo,
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: GUIDE,
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof SinglePanelDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 기본 데모: `initial`, `setData`, `reset`을 한 화면에서 확인합니다. */
export const Default: Story = {
	name: '기본 데모',
	render: () => <SinglePanelDemo />,
};

/** 같은 키를 쓰는 두 패널 — 전역 스토어가 공유되는지 시각적으로 확인합니다. */
export const SharedAcrossPanels: Story = {
	name: '동일 키 · 두 패널',
	render: () => <TwoPanelsSameKey />,
	parameters: {
		docs: {
			description: {
				story: '같은 `key` 문자열을 사용하면 서로 다른 컴포넌트 트리에서도 동일한 상태를 구독합니다.',
			},
		},
	},
};

/** `initial` 없이 `undefined`에서 시작한 뒤 `setData`로만 채우는 경우 */
export const WithoutInitial: Story = {
	name: 'initial 없음',
	render: () => <WithoutInitialDemo />,
	parameters: {
		docs: {
			description: {
				story:
					'`initial`을 생략하면 값을 넣기 전까지 `data`가 `undefined`일 수 있습니다. `reset`은 기본값이 없으면 해당 키를 스토어에서 제거합니다.',
			},
		},
	},
};
