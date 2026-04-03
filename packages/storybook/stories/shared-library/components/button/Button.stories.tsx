import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { Button, buttonVariantsConfig } from '@nic/mfe-lib-shared/components/ui';
import React from 'react';

const variantOptions = Object.keys(buttonVariantsConfig.variant) as (keyof typeof buttonVariantsConfig.variant)[];
const sizeOptions = Object.keys(buttonVariantsConfig.size) as (keyof typeof buttonVariantsConfig.size)[];

const meta = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
\`Button\` 컴포넌트는 \`@nic/mfe-lib-shared\` 에서 제공하는 기본 버튼 UI입니다.

### 임포트

\`\`\`tsx
import { Button } from '@nic/mfe-lib-shared/components/ui';
// 또는
import { Button } from '@nic/mfe-lib-shared/components';
\`\`\`

### 기본 사용법

\`\`\`tsx
<Button variant="default" size="default" onClick={() => console.log('clicked')}>
  버튼 텍스트
</Button>
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
			description: '버튼의 시각적 스타일',
			table: {
				defaultValue: { summary: 'default' },
			},
		},
		size: {
			control: 'select',
			options: sizeOptions,
			description: '버튼의 크기',
			table: {
				defaultValue: { summary: 'default' },
			},
		},
		children: {
			control: 'text',
			description: '버튼 내부 텍스트 또는 노드',
		},
		disabled: {
			control: 'boolean',
			description: '비활성화 상태',
			table: {
				defaultValue: { summary: 'false' },
			},
		},
		onClick: {
			action: 'clicked',
			description: '클릭 이벤트 핸들러',
		},
	},
	args: {
		children: '버튼',
		variant: 'default',
		size: 'default',
		disabled: false,
		onClick: fn(),
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본(Primary) 스타일 버튼입니다. 주요 행동 유도에 사용합니다.
 */
export const Primary: Story = {
	name: 'Primary',
	args: {
		children: '기본 버튼',
		variant: 'default',
	},
};

export const AlertOnClick: Story = {
	name: '버튼 클릭 예시',
	render: (args) => (
		<Button
			{...args}
			onClick={() => alert('버튼이 클릭되었습니다!')}
		>
			클릭해보세요
		</Button>
	),
};

/**
 * 클릭 이벤트가 발생할 때 버튼 상태가 변하는 인터랙티브 예시입니다.
 * Controls 패널의 variant, size, disabled 변경이 "초기화" 버튼에 실시간 반영됩니다.
 */
export const InteractiveExample: Story = {
	name: '인터랙티브 예시',
	args: {
		children: '초기화',
		variant: 'default',
		size: 'default',
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
					<Button
						variant="default"
						size="default"
						onClick={() => setCount((c) => c + 1)}
					>
						증가
					</Button>
					<Button
						{...args}
						onClick={() => setCount(0)}
					>
						{args.children}
					</Button>
				</div>
			</div>
		);
	},
};

/**
 * 보조(Secondary) 스타일 버튼입니다. 부차적인 행동에 사용합니다.
 */
export const Secondary: Story = {
	args: {
		children: '보조 버튼',
		variant: 'secondary',
	},
};

/**
 * 아웃라인(Outline) 스타일 버튼입니다. 덜 강조된 행동에 사용합니다.
 */
export const Outline: Story = {
	args: {
		children: '아웃라인 버튼',
		variant: 'outline',
	},
};

/**
 * 작은 크기(Small) 버튼입니다.
 */
export const Small: Story = {
	args: {
		children: '작은 버튼',
		size: 'xs',
	},
};

/**
 * 중간 크기(Medium) 버튼입니다.
 */
export const Medium: Story = {
	args: {
		children: '중간 버튼',
		size: 'sm',
	},
};

/**
 * 큰 크기(Large) 버튼입니다.
 */
export const Large: Story = {
	args: {
		children: '큰 버튼',
		size: 'lg',
	},
};

/**
 * 비활성화(Disabled) 상태의 버튼입니다. 상호작용이 불가능합니다.
 */
export const Disabled: Story = {
	args: {
		children: '비활성화 버튼',
		disabled: true,
	},
};

/**
 * 모든 variant를 한눈에 비교하는 예시입니다.
 * buttonVariantsConfig에서 동적으로 variant 목록을 가져옵니다.
 */
export const AllVariants: Story = {
	name: '모든 Variant 비교',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
			{variantOptions.map((variant) => (
				<Button
					key={variant}
					variant={variant}
				>
					{variant}
				</Button>
			))}
		</div>
	),
};

/**
 * 모든 size를 한눈에 비교하는 예시입니다.
 * buttonVariantsConfig에서 동적으로 size 목록을 가져옵니다.
 * icon 계열 size는 아이콘 전용이므로 단축 레이블로 표시합니다.
 */
export const AllSizes: Story = {
	name: '모든 Size 비교',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
			{sizeOptions.map((size) => (
				<Button
					key={size}
					size={size}
				>
					{size.startsWith('icon') ? '★' : size}
				</Button>
			))}
		</div>
	),
};

/**
 * Disabled 상태를 각 variant와 함께 비교합니다.
 * buttonVariantsConfig에서 동적으로 variant 목록을 가져옵니다.
 */
export const DisabledVariants: Story = {
	name: 'Disabled 상태 비교',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
			{variantOptions.map((variant) => (
				<Button
					key={variant}
					variant={variant}
					disabled
				>
					{variant}
				</Button>
			))}
		</div>
	),
};
