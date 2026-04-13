import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Badge, badgeVariantsConfig, Button } from '@nic/mfe-lib-shared/components/ui';
import React from 'react';

const variantOptions = Object.keys(badgeVariantsConfig.variant) as (keyof typeof badgeVariantsConfig.variant)[];

const meta = {
	title: 'Components/Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
\`Badge\` 컴포넌트는 \`@nic/mfe-lib-shared\` 에서 제공하는 라벨·상태 표시용 배지 UI입니다.

일반적으로 **제목·문장 옆의 개수·상태**, **탭·메뉴 라벨 모서리의 알림 숫자**, **버튼 위 작은 카운트**, **표·그리드 셀의 상태값** 등 보조 정보를 붙일 때 씁니다.

### 임포트

\`\`\`tsx
import { Badge } from '@nic/mfe-lib-shared/components/ui';
// 또는
import { Badge } from '@nic/mfe-lib-shared/components';
\`\`\`

### 기본 사용법
\`\`\`tsx
<Badge>라벨</Badge>
\`\`\`
        `,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: variantOptions,
			description: '배지의 시각적 스타일',
			table: {
				defaultValue: { summary: 'default' },
			},
		},
		children: {
			control: 'text',
			description: '배지 내부 텍스트 또는 노드',
		},
		className: {
			control: 'text',
			description: '배지의 클래스 이름',
			table: {
				defaultValue: { summary: '' },
			},
		},
		style: {
			control: 'object',
			description: '배지의 스타일',
			table: {
				defaultValue: { summary: '{}' },
			},
		},
		render: {
			control: 'text',
			description:
				'렌더링할 요소를 바꿀 때 사용합니다.<br />예: 링크(\`&lt;a&gt;\`)나 다른 컴포넌트로 감쌀 때 `render` prop을 사용합니다.',
			table: {
				defaultValue: { summary: 'undefined' },
			},
		},
		onClick: {
			action: 'clicked',
			description: '클릭 이벤트 핸들러 (포인터 이벤트가 가능한 경우)',
		},
	},
	args: {
		children: '배지',
		variant: 'default',
		onClick: fn(),
	},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본(Default) 스타일 배지입니다.
 */
export const Default: Story = {
	name: 'Default',
	args: {
		children: '기본 배지',
		variant: 'default',
	},
};

export const BadgeOnClick: Story = {
	name: '클릭 예시',
	args: {
		variant: 'default',
	},
	parameters: {
		docs: {
			source: {
				code: `
<Badge onClick={() => alert('배지가 클릭되었습니다!')}>
  클릭해보세요
</Badge>
`,
			},
		},
	},
	render: (args) => (
		<Badge
			{...args}
			onClick={() => alert('배지가 클릭되었습니다!')}
		>
			클릭해보세요
		</Badge>
	),
};

/**
 * 클릭 횟수와 Controls의 variant가 함께 반영되는 예시입니다.
 */
export const InteractiveExample: Story = {
	name: '인터랙티브 예시',
	args: {
		children: '초기화',
		variant: 'default',
	},
	parameters: {
		docs: {
			source: {
				code: `const [count, setCount] = React.useState(0);

<div
	style={{
		display: 'flex',
		flexDirection: 'column',
		gap: '12px',
		alignItems: 'center',
	}}
>
	<p>클릭 횟수: {count}</p>
	<div style={{ display: 'flex', gap: '8px' }}>
		<Badge
			variant="default"
			onClick={() => setCount((c) => c + 1)}
		>
			증가
		</Badge>
		<Badge
			{...args}
			onClick={() => setCount(0)}
		>
			{args.children}
		</Badge>
	</div>
</div>
`,
			},
		},
	},
	render: (args) => {
		const [count, setCount] = React.useState(0);
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '12px',
					alignItems: 'center',
				}}
			>
				<p>클릭 횟수: {count}</p>
				<div style={{ display: 'flex', gap: '8px' }}>
					<Badge
						variant="default"
						onClick={() => setCount((c) => c + 1)}
					>
						증가
					</Badge>
					<Badge
						{...args}
						onClick={() => setCount(0)}
					>
						{args.children}
					</Badge>
				</div>
			</div>
		);
	},
};

/**
 * 비활성에 가깝게 보이도록 한 예시입니다. (\`aria-disabled\` + 시각적 비활성)
 */
export const Disabled: Story = {
	name: '비활성 스타일',
	args: {
		children: '비활성 배지',
		variant: 'default',
	},
	render: (args) => (
		<Badge
			{...args}
			aria-disabled
			className={[args.className, 'pointer-events-none opacity-50'].filter(Boolean).join(' ')}
		/>
	),
};

/**
 * 아이콘과 텍스트를 함께 쓰는 예시입니다.
 */
export const WithIcon: Story = {
	name: '아이콘 포함',
	args: {
		variant: 'secondary',
	},
	render: (args) => (
		<Badge {...args}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				aria-hidden
			>
				<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
			</svg>
			보안
		</Badge>
	),
};

/**
 * 제목·본문과 나란히 두어 개수나 태그를 표시할 때 흔한 패턴입니다.
 */
export const BesideTitle: Story = {
	name: '제목·텍스트 옆',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<div className="flex max-w-lg flex-col gap-4 text-left">
			<div className="flex flex-wrap items-baseline gap-2">
				<h2 className="text-lg font-semibold tracking-tight">프로젝트 개요</h2>
				<Badge variant="secondary">초안</Badge>
				<Badge variant="outline">v2</Badge>
			</div>
			<p className="text-muted-foreground text-sm leading-relaxed">
				문단 안에서도{' '}
				<Badge variant="secondary">베타</Badge> 처럼 인라인으로 상태를 짧게 붙일 수 있습니다.
			</p>
		</div>
	),
};

/**
 * 메뉴·탭 라벨 등에 겹쳐 올려 읽지 않은 건수를 표시하는 패턴입니다. (\`relative\` + \`absolute\`)
 */
export const OverlaidCount: Story = {
	name: '라벨 모서리 숫자',
	parameters: {
		controls: { disable: true },
		docs: {
			source: {
				code: `<span className="relative inline-block pr-2">
  받은편지함
  <Badge
    variant="destructive"
    className="absolute -top-2 -right-1 min-w-5 justify-center px-1 text-[10px] leading-none"
    aria-label="읽지 않음 12건"
  >
    12
  </Badge>
</span>`,
			},
		},
	},
	render: () => (
		<div className="flex flex-wrap gap-6 text-sm">
			<span className="relative inline-block pr-2">
				받은편지함
				<Badge
					variant="destructive"
					className="absolute -top-2 -right-1 min-w-5 justify-center px-1 text-[10px] leading-none"
					aria-label="읽지 않음 12건"
				>
					12
				</Badge>
			</span>
			<span className="relative inline-block pr-2">
				팀 채팅
				<Badge
					variant="default"
					className="absolute -top-2 -right-1 min-w-5 justify-center px-1 text-[10px] leading-none"
					aria-label="새 메시지 3건"
				>
					3
				</Badge>
			</span>
		</div>
	),
};

/**
 * 버튼은 그대로 두고, 우측 상단에만 작은 수치를 올려 두는 패턴입니다.
 */
export const OnButtonCorner: Story = {
	name: '버튼 위 작은 숫자',
	parameters: {
		controls: { disable: true },
		docs: {
			source: {
				code: `<div className="relative inline-block">
  <Button type="button">알림</Button>
  <Badge
    variant="destructive"
    className="absolute -top-2 -right-2 min-w-5 justify-center px-1 text-[10px] leading-none"
    aria-hidden
  >
    9
  </Badge>
</div>`,
			},
		},
	},
	render: () => (
		<div className="flex flex-wrap items-center gap-8">
			<div className="relative inline-block">
				<Button type="button">알림</Button>
				<Badge
					variant="destructive"
					className="absolute -top-2 -right-2 min-w-5 justify-center px-1 text-[10px] leading-none"
					aria-hidden
				>
					9
				</Badge>
			</div>
			<div className="relative inline-block">
				<Button
					type="button"
					variant="outline"
				>
					장바구니
				</Button>
				<Badge
					variant="secondary"
					className="absolute -top-2 -right-2 min-w-5 justify-center px-1 text-[10px] leading-none"
					aria-hidden
				>
					2
				</Badge>
			</div>
		</div>
	),
};

/**
 * 데이터 그리드·표에서 한 셀 안에 상태·등급만 짧게 넣는 예시입니다.
 */
export const InDataGrid: Story = {
	name: '표·그리드 셀',
	parameters: {
		layout: 'padded',
		controls: { disable: true },
	},
	render: () => (
		<div className="text-muted-foreground w-full max-w-3xl overflow-hidden rounded-lg border text-sm">
			<div className="bg-muted/50 grid grid-cols-[1fr_100px_80px] gap-2 border-b px-3 py-2 font-medium">
				<span>항목</span>
				<span className="text-center">상태</span>
				<span className="text-right">수량</span>
			</div>
			<div className="divide-y">
				<div className="grid grid-cols-[1fr_100px_80px] items-center gap-2 px-3 py-2.5">
					<span className="text-foreground">주문 #1042</span>
					<div className="flex justify-center">
						<Badge variant="outline">처리중</Badge>
					</div>
					<span className="text-right tabular-nums">3</span>
				</div>
				<div className="grid grid-cols-[1fr_100px_80px] items-center gap-2 px-3 py-2.5">
					<span className="text-foreground">주문 #1041</span>
					<div className="flex justify-center">
						<Badge variant="secondary">배송중</Badge>
					</div>
					<span className="text-right tabular-nums">1</span>
				</div>
				<div className="grid grid-cols-[1fr_100px_80px] items-center gap-2 px-3 py-2.5">
					<span className="text-foreground">주문 #1040</span>
					<div className="flex justify-center">
						<Badge variant="destructive">지연</Badge>
					</div>
					<span className="text-right tabular-nums">12</span>
				</div>
			</div>
		</div>
	),
};

/**
 * 모든 variant를 한눈에 비교하는 예시입니다.
 */
export const AllVariants: Story = {
	name: '모든 Variant 비교',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
			{variantOptions.map((variant) => (
				<Badge
					key={variant}
					variant={variant}
				>
					{variant}
				</Badge>
			))}
		</div>
	),
};

/**
 * 각 variant에 비활성 스타일을 적용한 비교입니다.
 */
export const DisabledVariants: Story = {
	name: '비활성 × Variant 비교',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
			{variantOptions.map((variant) => (
				<Badge
					key={variant}
					variant={variant}
					aria-disabled
					className="pointer-events-none opacity-50"
				>
					{variant}
				</Badge>
			))}
		</div>
	),
};
