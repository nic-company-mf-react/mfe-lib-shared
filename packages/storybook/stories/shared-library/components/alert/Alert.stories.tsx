import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, AlertAction, AlertDescription, AlertTitle, Button } from '@axiom/mfe-lib-shared/components/ui';
import React from 'react';

const variantOptions = ['default', 'destructive'] as const;

const meta = {
	title: 'Components/Alert',
	component: Alert,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
\`Alert\` 컴포넌트는 \`@axiom/mfe-lib-shared\` 에서 제공하는 알림(안내·경고) UI입니다. \`AlertTitle\`, \`AlertDescription\`, 필요 시 \`AlertAction\` 과 함께 사용합니다.

### 임포트

\`\`\`tsx
import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertAction,
} from '@axiom/mfe-lib-shared/components/ui';
// 또는
import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertAction,
} from '@axiom/mfe-lib-shared/components';
\`\`\`

### 기본 사용법
\`\`\`tsx
<Alert>
  <AlertTitle>제목</AlertTitle>
  <AlertDescription>설명 문구입니다.</AlertDescription>
</Alert>
\`\`\`
        `,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: [...variantOptions],
			description: '알림의 시각적 강조(기본·위험)',
			table: {
				defaultValue: { summary: 'default' },
			},
		},
		className: {
			control: 'text',
			description: '루트 요소 className',
			table: {
				defaultValue: { summary: '' },
			},
		},
		style: {
			control: 'object',
			description: '루트 요소 인라인 스타일',
			table: {
				defaultValue: { summary: '{}' },
			},
		},
	},
	args: {
		variant: 'default',
	},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본(default) 스타일 알림입니다.
 */
export const Default: Story = {
	name: 'Default',
	args: {
		variant: 'default',
	},
	render: (args) => (
		<Alert
			{...args}
			className="w-full max-w-xl"
		>
			<AlertTitle>알림 제목</AlertTitle>
			<AlertDescription>추가 설명이나 부가 정보를 여기에 표시합니다.</AlertDescription>
		</Alert>
	),
};

/**
 * 위험·오류 등 강조가 필요할 때 사용하는 destructive 변형입니다.
 */
export const Destructive: Story = {
	name: 'Destructive',
	args: {
		variant: 'destructive',
	},
	render: (args) => (
		<Alert
			{...args}
			className="w-full max-w-xl"
		>
			<AlertTitle>문제가 발생했습니다</AlertTitle>
			<AlertDescription>작업을 완료할 수 없습니다. 입력값을 확인한 뒤 다시 시도해 주세요.</AlertDescription>
		</Alert>
	),
};

/**
 * 아이콘을 선행 요소로 두면 레이아웃이 그리드로 맞춰집니다.
 */
export const WithIcon: Story = {
	name: '아이콘 포함',
	args: {
		variant: 'default',
	},
	render: (args) => (
		<Alert
			{...args}
			className="w-full max-w-xl"
		>
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
				<circle
					cx="12"
					cy="12"
					r="10"
				/>
				<path d="M12 16v-4" />
				<path d="M12 8h.01" />
			</svg>
			<AlertTitle>안내</AlertTitle>
			<AlertDescription>중요한 변경 사항이 있습니다. 자세한 내용은 문서를 참고하세요.</AlertDescription>
		</Alert>
	),
};

/**
 * 우측 상단에 \`AlertAction\` 으로 버튼 등 보조 동작을 둘 수 있습니다.
 */
export const WithAction: Story = {
	name: '액션 영역',
	args: {
		variant: 'default',
	},
	parameters: {
		docs: {
			source: {
				code: `
<Alert>
  <AlertTitle>저장되지 않은 변경</AlertTitle>
  <AlertDescription>이 페이지를 나가면 수정 내용이 사라질 수 있습니다.</AlertDescription>
  <AlertAction>
    <Button size="sm" variant="outline" onClick={() => alert('확인되었습니다.')}>
      확인
    </Button>
  </AlertAction>
</Alert>
`,
			},
		},
	},
	render: (args) => (
		<Alert
			{...args}
			className="w-full max-w-xl"
		>
			<AlertTitle>저장되지 않은 변경</AlertTitle>
			<AlertDescription>이 페이지를 나가면 수정 내용이 사라질 수 있습니다.</AlertDescription>
			<AlertAction>
				<Button
					size="sm"
					variant="outline"
					onClick={() => alert('확인되었습니다!')}
				>
					확인
				</Button>
			</AlertAction>
		</Alert>
	),
};

/**
 * Controls의 variant 변경이 알림에 실시간 반영되고, 액션 버튼 클릭 횟수를 함께 표시합니다.
 */
export const InteractiveExample: Story = {
	name: '인터랙티브 예시',
	args: {
		variant: 'default',
	},
	parameters: {
		docs: {
			source: {
				code: `const [count, setCount] = React.useState(0);

<div className="flex w-full max-w-xl flex-col items-center gap-3">
  <p className="text-sm text-muted-foreground">액션 클릭 횟수: {count}</p>
  <Alert {...args} className="w-full">
    <AlertTitle>알림</AlertTitle>
    <AlertDescription>Controls에서 variant를 바꿔 보세요.</AlertDescription>
    <AlertAction>
      <Button size="sm" variant="outline" onClick={() => setCount((c) => c + 1)}>
        액션
      </Button>
    </AlertAction>
  </Alert>
</div>
`,
			},
		},
	},
	render: (args) => {
		const [count, setCount] = React.useState(0);
		return (
			<div className="flex w-full max-w-xl flex-col items-center gap-3">
				<p className="text-sm text-muted-foreground">액션 클릭 횟수: {count}</p>
				<Alert
					{...args}
					className="w-full"
				>
					<AlertTitle>알림</AlertTitle>
					<AlertDescription>Controls에서 variant를 바꿔 보세요.</AlertDescription>
					<AlertAction>
						<Button
							size="sm"
							variant="outline"
							onClick={() => setCount((c) => c + 1)}
						>
							액션
						</Button>
					</AlertAction>
				</Alert>
			</div>
		);
	},
};

/**
 * 모든 variant를 한눈에 비교합니다.
 */
export const AllVariants: Story = {
	name: '모든 Variant 비교',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<div className="flex w-full max-w-3xl flex-col gap-4">
			{variantOptions.map((variant) => (
				<Alert
					key={variant}
					variant={variant}
					className="w-full"
				>
					<AlertTitle>{variant}</AlertTitle>
					<AlertDescription>variant가 &quot;{variant}&quot; 일 때의 스타일입니다.</AlertDescription>
				</Alert>
			))}
		</div>
	),
};
