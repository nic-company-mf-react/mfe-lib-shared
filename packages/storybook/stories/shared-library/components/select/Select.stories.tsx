import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from '@axiom/mfe-lib-shared/components/ui';
import React from 'react';

const themeItems = [
	{ label: '라이트', value: 'light' },
	{ label: '다크', value: 'dark' },
	{ label: '시스템', value: 'system' },
] as const;

const meta = {
	title: 'Components/Select',
	component: Select,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
\`Select\` 컴포넌트는 버튼을 눌러 옵션 목록에서 값을 고르는 UI입니다. [shadcn/ui Select (Base UI)](https://ui.shadcn.com/docs/components/base/select) 및 [Base UI Select API](https://base-ui.com/react/components/select)를 참고했습니다.

### 임포트

\`\`\`tsx
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@axiom/mfe-lib-shared/components/ui';
// 또는
import { Select, SelectContent, ... } from '@axiom/mfe-lib-shared/components';
\`\`\`

### 기본 사용법 (\`items\` + 구성 요소)

루트에 \`items\`를 넘기면 \`SelectValue\`가 선택된 항목의 라벨을 표시하기 쉽습니다.

\`\`\`tsx
const items = [
  { label: '라이트', value: 'light' },
  { label: '다크', value: 'dark' },
  { label: '시스템', value: 'system' },
];

<Select items={items} defaultValue="system">
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="테마" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      {items.map((item) => (
        <SelectItem key={item.value} value={item.value}>
          {item.label}
        </SelectItem>
      ))}
    </SelectGroup>
  </SelectContent>
</Select>
\`\`\`
        `,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		disabled: {
			control: 'boolean',
			description: '선택 UI 전체 비활성화',
			table: {
				defaultValue: { summary: 'false' },
			},
		},
		defaultValue: {
			control: 'text',
			description: '비제어 모드에서 초기 값',
		},
		onValueChange: {
			action: 'valueChange',
			description: '값이 바뀔 때 호출됩니다.',
		},
	},
	args: {
		disabled: false,
		onValueChange: fn(),
	},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 공식 문서와 같이 `items`와 `defaultValue`를 사용하는 기본 예시입니다.
 */
export const Default: Story = {
	name: 'Default',
	render: (args) => (
		<Select
			{...args}
			items={[...themeItems]}
			defaultValue="system"
			onValueChange={args.onValueChange}
		>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="테마" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{themeItems.map((item) => (
						<SelectItem
							key={item.value}
							value={item.value}
						>
							{item.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	),
};

/**
 * `SelectContent`에 `alignItemWithTrigger={true}`(기본)와 `false`를 비교합니다.
 * `true`이면 선택된 항목이 트리거 위에 맞춰지고, `false`이면 트리거 가장자리에 맞춰집니다.
 */
export const AlignItemWithTrigger: Story = {
	name: 'AlignItemWithTrigger',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				gap: '24px',
				alignItems: 'flex-start',
			}}
		>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
				<span style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>alignItemWithTrigger: true (기본)</span>
				<Select
					items={[...themeItems]}
					defaultValue="light"
				>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="테마" />
					</SelectTrigger>
					<SelectContent alignItemWithTrigger>
						<SelectGroup>
							{themeItems.map((item) => (
								<SelectItem
									key={item.value}
									value={item.value}
								>
									{item.label}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
				<span style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>alignItemWithTrigger: false</span>
				<Select
					items={[...themeItems]}
					defaultValue="light"
				>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="테마" />
					</SelectTrigger>
					<SelectContent alignItemWithTrigger={false}>
						<SelectGroup>
							{themeItems.map((item) => (
								<SelectItem
									key={item.value}
									value={item.value}
								>
									{item.label}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</div>
	),
};

/**
 * `SelectGroup`, `SelectLabel`, `SelectSeparator`로 옵션을 구분합니다.
 */
export const Groups: Story = {
	name: 'Groups',
	parameters: {
		controls: { disable: true },
	},
	render: () => {
		const fruits = [
			{ label: '사과', value: 'apple' },
			{ label: '바나나', value: 'banana' },
			{ label: '블루베리', value: 'blueberry' },
		];
		const vegetables = [
			{ label: '양상추', value: 'lettuce' },
			{ label: '오이', value: 'cucumber' },
			{ label: '토마토', value: 'tomato' },
		];
		const allItems = [...fruits, ...vegetables];
		return (
			<Select
				items={allItems}
				defaultValue="apple"
			>
				<SelectTrigger className="w-[220px]">
					<SelectValue placeholder="과일·채소 선택" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>과일</SelectLabel>
						{fruits.map((item) => (
							<SelectItem
								key={item.value}
								value={item.value}
							>
								{item.label}
							</SelectItem>
						))}
					</SelectGroup>
					<SelectSeparator />
					<SelectGroup>
						<SelectLabel>채소</SelectLabel>
						{vegetables.map((item) => (
							<SelectItem
								key={item.value}
								value={item.value}
							>
								{item.label}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		);
	},
};

const manyZones = Array.from({ length: 40 }, (_, i) => {
	const offset = String(Math.floor(i / 2) - 12).padStart(2, '0');
	const half = i % 2 === 0 ? '00' : '30';
	const value = `utc${i}`;
	return {
		label: `UTC${i % 2 === 0 ? '+' : '-'}${offset}:${half} · 구역 ${i + 1}`,
		value,
	};
});

/**
 * 항목이 많을 때 목록이 스크롤됩니다.
 */
export const Scrollable: Story = {
	name: 'Scrollable',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<Select
			items={manyZones}
			defaultValue={manyZones[0].value}
		>
			<SelectTrigger className="w-[280px]">
				<SelectValue placeholder="타임존" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{manyZones.map((z) => (
						<SelectItem
							key={z.value}
							value={z.value}
						>
							{z.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	),
};

/**
 * 루트 `disabled`로 전체 선택을 막은 상태입니다.
 */
export const Disabled: Story = {
	name: 'Disabled',
	args: {
		disabled: true,
	},
	render: (args) => (
		<Select
			{...args}
			items={[...themeItems]}
			defaultValue="light"
		>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="테마" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{themeItems.map((item) => (
						<SelectItem
							key={item.value}
							value={item.value}
						>
							{item.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	),
};

/**
 * 특정 `SelectItem`에 `disabled`를 준 예시입니다.
 */
export const DisabledItem: Story = {
	name: 'DisabledItem',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<Select
			items={[...themeItems]}
			defaultValue="light"
		>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="테마" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{themeItems.map((item) => (
						<SelectItem
							key={item.value}
							value={item.value}
							disabled={item.value === 'dark'}
						>
							{item.label}
							{item.value === 'dark' ? ' (비활성)' : ''}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	),
};

/**
 * `SelectTrigger`의 `size="sm"` 입니다.
 */
export const SmallTrigger: Story = {
	name: 'Small (trigger)',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<Select
			items={[...themeItems]}
			defaultValue="light"
		>
			<SelectTrigger
				className="w-[160px]"
				size="sm"
			>
				<SelectValue placeholder="테마" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{themeItems.map((item) => (
						<SelectItem
							key={item.value}
							value={item.value}
						>
							{item.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	),
};

/**
 * 제어 컴포넌트로 값이 바뀔 때마다 아래에 표시합니다.
 */
export const Controlled: Story = {
	name: '제어(Controlled) 예시',
	parameters: {
		controls: { disable: true },
		docs: {
			source: {
				code: `const [value, setValue] = React.useState<string | null>("light");

<Select
  items={[...themeItems]}
  value={value}
  onValueChange={setValue}
>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="테마" />
  </SelectTrigger>
  <SelectContent>...</SelectContent>
</Select>
<p>선택된 값: {value ?? "(없음)"}</p>`,
			},
		},
	},
	render: () => {
		const [value, setValue] = React.useState<string | null>('light');
		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
				<Select
					items={[...themeItems]}
					value={value}
					onValueChange={setValue}
				>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="테마" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							{themeItems.map((item) => (
								<SelectItem
									key={item.value}
									value={item.value}
								>
									{item.label}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
				<p style={{ margin: 0, fontSize: '14px' }}>선택된 값: {value ?? '(없음)'}</p>
			</div>
		);
	},
};

/**
 * `SelectTrigger`에 `aria-invalid`를 주어 오류 상태를 나타낼 수 있습니다. (폼 검증 연동 시)
 */
export const Invalid: Story = {
	name: 'Invalid (aria-invalid)',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
			<label
				htmlFor="select-invalid-demo"
				style={{ fontSize: '14px', fontWeight: 500 }}
			>
				테마
			</label>
			<Select items={[...themeItems]}>
				<SelectTrigger
					id="select-invalid-demo"
					className="w-[180px]"
					aria-invalid
				>
					<SelectValue placeholder="선택하세요" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{themeItems.map((item) => (
							<SelectItem
								key={item.value}
								value={item.value}
							>
								{item.label}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
			<p
				role="alert"
				style={{ margin: 0, fontSize: '12px', color: 'var(--destructive)' }}
			>
				테마를 선택해 주세요.
			</p>
		</div>
	),
};
