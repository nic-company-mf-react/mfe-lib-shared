import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@axiom/mfe-lib-shared/components/ui';
import { useApi } from '@axiom/mfe-lib-shared/hooks';
import { getQueryClient } from '@axiom/mfe-lib-shared/query';
import { QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';

/** Storybook에는 기본적으로 QueryClientProvider가 없으므로, 라이브러리 싱글톤과 동일한 클라이언트로 감쌉니다. */
function QueryClientStoryShell({ children }: { children: React.ReactNode }) {
	const [client] = useState(() => getQueryClient());
	return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

const JSON_PLACEHOLDER_POST =
	'https://jsonplaceholder.typicode.com/posts/1' as const;

type JsonPlaceholderPost = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

type JsonPlaceholderCreate = {
	title: string;
	body: string;
	userId: number;
};

const GUIDE = `
\`useApi\`는 내부에서 **TanStack Query**의 \`useQuery\` / \`useMutation\`을 사용해 HTTP 요청을 캐싱·상태 관리합니다. \`callApi\`·\`createQueryKey\`·\`getQueryClient\`와 연동됩니다.

### peer dependency

소비자 앱에 \`@tanstack/react-query\`가 설치되어 있어야 하며, **앱 루트**에 \`QueryClientProvider\`로 \`getQueryClient()\`(또는 직접 만든 \`QueryClient\`)를 감싸야 합니다. Storybook 본 스토리는 데모용으로 \`QueryClientStoryShell\`을 씁니다.

### type 기본 동작

- \`type\`을 생략하면 \`method\`가 없거나 \`GET\`이면 **query**, \`POST\` / \`PUT\` / \`PATCH\` / \`DELETE\`면 **mutation**으로 처리됩니다.
- 명시적으로 \`type: 'query'\`를 주면 \`POST\`로 조회하는 등의 패턴도 가능합니다.

### 임포트

\`\`\`tsx
import { useApi } from '@axiom/mfe-lib-shared/hooks';
\`\`\`

### query 예시 (GET)

\`\`\`tsx
const { data, isPending, error } = useApi<User[]>('/api/users');
\`\`\`

### mutation 예시

TypeScript에서 mutation 반환 타입(\`mutate\`, \`invalidateQueries\` 등)을 쓰려면 옵션에 \`type: 'mutation'\`을 명시하세요. 런타임에서는 \`POST\` 등만으로도 mutation으로 동작합니다.

\`\`\`tsx
const { mutate, isPending, invalidateQueries } = useApi<User, CreateDto>('/api/users', {
  method: 'POST',
  type: 'mutation',
});
mutate({ name: 'Jane' }, { onSuccess: () => invalidateQueries('/api/users') });
\`\`\`

아래 데모는 **CORS가 허용된** JSONPlaceholder (\`jsonplaceholder.typicode.com\`)에 실제로 요청합니다. 네트워크·방화벽 환경에 따라 실패할 수 있습니다.
`;

/** GET query — 로딩·에러·데이터 표시 */
function QueryDemo() {
	const { data, isPending, error, refetch, isFetching } = useApi<JsonPlaceholderPost>(JSON_PLACEHOLDER_POST);

	return (
		<div className="max-w-lg space-y-4 rounded-lg border border-border bg-card p-4 text-card-foreground shadow-sm">
			<p className="text-sm text-muted-foreground">
				<code className="rounded bg-muted px-1.5 py-0.5 text-xs">GET {JSON_PLACEHOLDER_POST}</code>
			</p>
			<div className="flex flex-wrap gap-2">
				<Button
					type="button"
					size="sm"
					variant="secondary"
					onClick={() => refetch()}
					disabled={isFetching}
				>
					다시 가져오기
				</Button>
			</div>
			{isPending ? (
				<p className="text-sm text-muted-foreground">로딩 중…</p>
			) : error ? (
				<p className="text-sm text-destructive">에러: {error.message}</p>
			) : (
				<pre className="overflow-x-auto rounded-md bg-muted p-3 text-left text-xs leading-relaxed">
					{JSON.stringify(data, null, 2)}
				</pre>
			)}
		</div>
	);
}

/** POST mutation — 성공 시 응답 JSON 표시 */
function MutationDemo() {
	const { mutate, isPending, data, error, reset } = useApi<JsonPlaceholderCreate & { id?: number }, JsonPlaceholderCreate>(
		'https://jsonplaceholder.typicode.com/posts',
		{ method: 'POST', type: 'mutation' },
	);

	return (
		<div className="max-w-lg space-y-4 rounded-lg border border-border bg-card p-4 text-card-foreground shadow-sm">
			<p className="text-sm text-muted-foreground">
				<code className="rounded bg-muted px-1.5 py-0.5 text-xs">POST https://jsonplaceholder.typicode.com/posts</code>
			</p>
			<div className="flex flex-wrap gap-2">
				<Button
					type="button"
					size="sm"
					onClick={() =>
						mutate({
							title: 'useApi story',
							body: 'mutation demo',
							userId: 1,
						})
					}
					disabled={isPending}
				>
					{isPending ? '요청 중…' : 'POST 실행'}
				</Button>
				<Button
					type="button"
					size="sm"
					variant="outline"
					onClick={() => reset()}
				>
					reset
				</Button>
			</div>
			{error ? (
				<p className="text-sm text-destructive">에러: {error.message}</p>
			) : data ? (
				<pre className="overflow-x-auto rounded-md bg-muted p-3 text-left text-xs leading-relaxed">
					{JSON.stringify(data, null, 2)}
				</pre>
			) : (
				<p className="text-sm text-muted-foreground">아직 응답 없음</p>
			)}
		</div>
	);
}

/** mutation 성공 후 동일 엔드포인트 query 캐시 무효화 → GET이 다시 fetch되는지 확인 */
function InvalidateDemo() {
	const getUrl = JSON_PLACEHOLDER_POST;
	const { data, isPending, error, dataUpdatedAt } = useApi<JsonPlaceholderPost>(getUrl);
	const { mutate, isPending: isMutating, invalidateQueries } = useApi<JsonPlaceholderCreate & { id?: number }, JsonPlaceholderCreate>(
		'https://jsonplaceholder.typicode.com/posts',
		{ method: 'POST', type: 'mutation' },
	);

	return (
		<div className="max-w-lg space-y-6">
			<div className="space-y-2 rounded-lg border border-border bg-card p-4 text-card-foreground shadow-sm">
				<p className="text-sm font-medium">GET 캐시</p>
				<p className="text-xs text-muted-foreground">
					dataUpdatedAt: {dataUpdatedAt ? new Date(dataUpdatedAt).toISOString() : '—'}
				</p>
				{isPending ? (
					<p className="text-sm text-muted-foreground">로딩 중…</p>
				) : error ? (
					<p className="text-sm text-destructive">에러: {error.message}</p>
				) : (
					<pre className="max-h-40 overflow-auto rounded-md bg-muted p-3 text-left text-xs leading-relaxed">
						{JSON.stringify(data, null, 2)}
					</pre>
				)}
			</div>
			<div className="space-y-2 rounded-lg border border-dashed border-border bg-card p-4">
				<p className="text-sm text-muted-foreground">
					POST 후 <code className="rounded bg-muted px-1 py-0.5 text-xs">invalidateQueries(&apos;{getUrl}&apos;)</code> 호출
				</p>
				<Button
					type="button"
					size="sm"
					onClick={() =>
						mutate(
							{ title: 'invalidate', body: 'demo', userId: 1 },
							{
								onSuccess: async () => {
									await invalidateQueries(getUrl);
								},
							},
						)
					}
					disabled={isMutating}
				>
					{isMutating ? 'POST 중…' : 'POST 후 GET 무효화'}
				</Button>
			</div>
		</div>
	);
}

const meta = {
	title: 'Shared Library/Hooks/useApi',
	component: QueryDemo,
	decorators: [
		(Story: React.ComponentType) => (
			<QueryClientStoryShell>
				<Story />
			</QueryClientStoryShell>
		),
	],
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: GUIDE,
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof QueryDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Query: Story = {
	name: 'Query (GET)',
	render: () => <QueryDemo />,
	parameters: {
		docs: {
			description: {
				story: '기본 조회 모드입니다. `type` 생략 + `GET`(또는 method 생략)일 때 `useQuery`가 실행됩니다.',
			},
		},
	},
};

export const Mutation: Story = {
	name: 'Mutation (POST)',
	render: () => <MutationDemo />,
	parameters: {
		docs: {
			description: {
				story: '`method: "POST"`이면 기본적으로 mutation으로 동작합니다.',
			},
		},
	},
};

export const InvalidateAfterMutation: Story = {
	name: '무효화 (invalidateQueries)',
	render: () => <InvalidateDemo />,
	parameters: {
		docs: {
			description: {
				story:
					'mutation 결과에서 `invalidateQueries`로 특정 엔드포인트의 query 캐시를 무효화하면, 해당 키를 쓰는 GET이 다시 요청됩니다. `dataUpdatedAt`으로 갱신 시점을 확인할 수 있습니다.',
			},
		},
	},
};
