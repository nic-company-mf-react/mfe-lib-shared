import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import {
	Combobox,
	ComboboxChip,
	ComboboxChips,
	ComboboxChipsInput,
	ComboboxCollection,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxGroup,
	ComboboxInput,
	ComboboxItem,
	ComboboxLabel,
	ComboboxList,
	ComboboxSeparator,
	ComboboxValue,
} from '@axiom/mfe-lib-shared/components/ui';
import React from 'react';

/** [shadcn/ui Combobox (Base UI)](https://ui.shadcn.com/docs/components/base/combobox) 예시와 동일한 데이터 */
const frameworks = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro'] as const;

type Framework = {
	label: string;
	value: string;
};

const frameworksAsObjects: Framework[] = [
	{ label: 'Next.js', value: 'next' },
	{ label: 'SvelteKit', value: 'sveltekit' },
	{ label: 'Nuxt', value: 'nuxt' },
];

const frontendStacks = ['React', 'Vue', 'Svelte'] as const;
const metaFrameworks = ['Next.js', 'Nuxt', 'SvelteKit'] as const;

const meta = {
	title: 'Components/Combobox',
	component: Combobox,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
\`Combobox\`는 입력과 제안 목록을 결합한 자동완성 UI입니다. [@base-ui/react](https://base-ui.com/react/components/combobox)의 Combobox를 쓰며, [shadcn/ui Combobox (Base UI)](https://ui.shadcn.com/docs/components/base/combobox) 구성 방식을 따릅니다.

### 임포트

\`\`\`tsx
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '@axiom/mfe-lib-shared/components/ui';
// 또는
import { Combobox, ComboboxContent, ... } from '@axiom/mfe-lib-shared/components';
\`\`\`

### 기본 사용법 (\`items\` + 목록 렌더 함수)

루트에 \`items\`를 넘기고, \`ComboboxList\` 자식으로 항목을 그립니다.

\`\`\`tsx
const items = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro'];

<Combobox items={[...items]}>
  <ComboboxInput placeholder="프레임워크 선택" className="w-[240px]" />
  <ComboboxContent>
    <ComboboxEmpty>항목이 없습니다.</ComboboxEmpty>
    <ComboboxList>
      {(item) => (
        <ComboboxItem key={item} value={item}>
          {item}
        </ComboboxItem>
      )}
    </ComboboxList>
  </ComboboxContent>
</Combobox>
\`\`\`
        `,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		disabled: {
			control: 'boolean',
			description: '콤보박스 전체 비활성화',
			table: {
				defaultValue: { summary: 'false' },
			},
		},
		multiple: {
			control: 'boolean',
			description: '다중 선택(칩 UI와 함께 사용)',
			table: {
				defaultValue: { summary: 'false' },
			},
		},
		onValueChange: {
			action: 'valueChange',
			description: '선택 값이 바뀔 때 호출됩니다.',
		},
	},
	args: {
		disabled: false,
		multiple: false,
		onValueChange: fn(),
	},
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 공식 문서의 단일 행 입력 + 평면 목록 구조입니다.
 */
export const Default: Story = {
	name: 'Default',
	render: (args) => (
		<Combobox
			{...args}
			items={[...frameworks]}
			onValueChange={args.onValueChange}
		>
			<ComboboxInput
				placeholder="프레임워크를 선택하세요"
				className="w-[260px]"
			/>
			<ComboboxContent>
				<ComboboxEmpty>항목이 없습니다.</ComboboxEmpty>
				<ComboboxList>
					{(item) => (
						<ComboboxItem
							key={item}
							value={item}
						>
							{item}
						</ComboboxItem>
					)}
				</ComboboxList>
			</ComboboxContent>
		</Combobox>
	),
};

/**
 * `ComboboxInput`의 `showClear`로 선택/입력 값을 지울 수 있습니다.
 */
export const WithClear: Story = {
	name: 'Clear 버튼',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<Combobox items={[...frameworks]}>
			<ComboboxInput
				placeholder="프레임워크 검색"
				className="w-[260px]"
				showClear
			/>
			<ComboboxContent>
				<ComboboxEmpty>항목이 없습니다.</ComboboxEmpty>
				<ComboboxList>
					{(item) => (
						<ComboboxItem
							key={item}
							value={item}
						>
							{item}
						</ComboboxItem>
					)}
				</ComboboxList>
			</ComboboxContent>
		</Combobox>
	),
};

/**
 * `multiple`과 칩 영역(`ComboboxChips` 등)을 사용한 다중 선택입니다.
 */
export const Multiple: Story = {
	name: '다중 선택 (칩)',
	parameters: {
		controls: { disable: true },
		docs: {
			source: {
				code: `const [value, setValue] = React.useState<string[]>([]);

<Combobox
  items={[...frameworks]}
  multiple
  value={value}
  onValueChange={setValue}
>
  <ComboboxChips className="w-[320px]">
    <ComboboxValue>
      {value.map((item) => (
        <ComboboxChip key={item}>{item}</ComboboxChip>
      ))}
    </ComboboxValue>
    <ComboboxChipsInput placeholder="프레임워크 추가" />
  </ComboboxChips>
  <ComboboxContent>
    <ComboboxEmpty>항목이 없습니다.</ComboboxEmpty>
    <ComboboxList>
      {(item) => (
        <ComboboxItem key={item} value={item}>
          {item}
        </ComboboxItem>
      )}
    </ComboboxList>
  </ComboboxContent>
</Combobox>`,
			},
		},
	},
	render: () => {
		const [value, setValue] = React.useState<string[]>([]);
		return (
			<Combobox
				items={[...frameworks]}
				multiple
				value={value}
				onValueChange={setValue}
			>
				<ComboboxChips className="w-[320px]">
					<ComboboxValue>
						{value.map((item) => (
							<ComboboxChip key={item}>{item}</ComboboxChip>
						))}
					</ComboboxValue>
					<ComboboxChipsInput placeholder="프레임워크 추가" />
				</ComboboxChips>
				<ComboboxContent>
					<ComboboxEmpty>항목이 없습니다.</ComboboxEmpty>
					<ComboboxList>
						{(item) => (
							<ComboboxItem
								key={item}
								value={item}
							>
								{item}
							</ComboboxItem>
						)}
					</ComboboxList>
				</ComboboxContent>
			</Combobox>
		);
	},
};

/**
 * `ComboboxGroup`, `ComboboxLabel`, `ComboboxCollection`, `ComboboxSeparator`로 그룹을 나눕니다.
 */
export const Groups: Story = {
	name: '그룹',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<Combobox
			items={[...frontendStacks, ...metaFrameworks]}
			itemToStringValue={(item) => item}
		>
			<ComboboxInput
				placeholder="스택 또는 메타 프레임워크"
				className="w-[280px]"
			/>
			<ComboboxContent>
				<ComboboxEmpty>항목이 없습니다.</ComboboxEmpty>
				<ComboboxList>
					<ComboboxGroup>
						<ComboboxLabel>UI 라이브러리</ComboboxLabel>
						<ComboboxCollection items={[...frontendStacks]}>
							{(item) => (
								<ComboboxItem
									key={item}
									value={item}
								>
									{item}
								</ComboboxItem>
							)}
						</ComboboxCollection>
					</ComboboxGroup>
					<ComboboxSeparator />
					<ComboboxGroup>
						<ComboboxLabel>메타 프레임워크</ComboboxLabel>
						<ComboboxCollection items={[...metaFrameworks]}>
							{(item) => (
								<ComboboxItem
									key={item}
									value={item}
								>
									{item}
								</ComboboxItem>
							)}
						</ComboboxCollection>
					</ComboboxGroup>
				</ComboboxList>
			</ComboboxContent>
		</Combobox>
	),
};

/**
 * 객체 배열을 쓸 때는 `itemToStringValue`로 필터/표시용 문자열을 지정합니다.
 */
export const CustomItems: Story = {
	name: '객체 항목 (itemToStringValue)',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<Combobox
			items={frameworksAsObjects}
			itemToStringValue={(f) => f.label}
		>
			<ComboboxInput
				placeholder="프레임워크 선택"
				className="w-[260px]"
			/>
			<ComboboxContent>
				<ComboboxEmpty>항목이 없습니다.</ComboboxEmpty>
				<ComboboxList>
					{(framework) => (
						<ComboboxItem
							key={framework.value}
							value={framework}
						>
							{framework.label}
						</ComboboxItem>
					)}
				</ComboboxList>
			</ComboboxContent>
		</Combobox>
	),
};

/**
 * 루트 `disabled`로 입력·목록 상호작용을 막습니다.
 */
export const Disabled: Story = {
	name: 'Disabled',
	args: {
		disabled: true,
	},
	render: (args) => (
		<Combobox
			{...args}
			items={[...frameworks]}
			defaultValue="Next.js"
		>
			<ComboboxInput
				placeholder="비활성화됨"
				className="w-[260px]"
			/>
			<ComboboxContent>
				<ComboboxEmpty>항목이 없습니다.</ComboboxEmpty>
				<ComboboxList>
					{(item) => (
						<ComboboxItem
							key={item}
							value={item}
						>
							{item}
						</ComboboxItem>
					)}
				</ComboboxList>
			</ComboboxContent>
		</Combobox>
	),
};

/**
 * `ComboboxInput`에 `aria-invalid`를 주어 오류 상태를 나타낼 수 있습니다.
 */
export const Invalid: Story = {
	name: 'Invalid (aria-invalid)',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
			<label
				htmlFor="combobox-invalid-demo"
				style={{ fontSize: '14px', fontWeight: 500 }}
			>
				프레임워크
			</label>
			<Combobox items={[...frameworks]}>
				<ComboboxInput
					id="combobox-invalid-demo"
					placeholder="선택하세요"
					className="w-[260px]"
					aria-invalid
				/>
				<ComboboxContent>
					<ComboboxEmpty>항목이 없습니다.</ComboboxEmpty>
					<ComboboxList>
						{(item) => (
							<ComboboxItem
								key={item}
								value={item}
							>
								{item}
							</ComboboxItem>
						)}
					</ComboboxList>
				</ComboboxContent>
			</Combobox>
			<p
				role="alert"
				style={{ margin: 0, fontSize: '12px', color: 'var(--destructive)' }}
			>
				값을 선택해 주세요.
			</p>
		</div>
	),
};

/**
 * 제어 모드로 단일 값을 상태에 반영해 표시합니다.
 */
export const Controlled: Story = {
	name: '제어(Controlled) 예시',
	parameters: {
		controls: { disable: true },
		docs: {
			source: {
				code: `const [value, setValue] = React.useState<string | null>(null);

<Combobox
  items={[...frameworks]}
  value={value}
  onValueChange={setValue}
>
  <ComboboxInput placeholder="프레임워크" className="w-[260px]" />
  <ComboboxContent>...</ComboboxContent>
</Combobox>
<p>선택된 값: {value ?? '(없음)'}</p>`,
			},
		},
	},
	render: () => {
		const [value, setValue] = React.useState<string | null>(null);
		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
				<Combobox
					items={[...frameworks]}
					value={value}
					onValueChange={setValue}
				>
					<ComboboxInput
						placeholder="프레임워크"
						className="w-[260px]"
					/>
					<ComboboxContent>
						<ComboboxEmpty>항목이 없습니다.</ComboboxEmpty>
						<ComboboxList>
							{(item) => (
								<ComboboxItem
									key={item}
									value={item}
								>
									{item}
								</ComboboxItem>
							)}
						</ComboboxList>
					</ComboboxContent>
				</Combobox>
				<p style={{ margin: 0, fontSize: '14px' }}>선택된 값: {value ?? '(없음)'}</p>
			</div>
		);
	},
};

/**
 * 필터 시 첫 항목을 자동으로 하이라이트합니다. ([문서의 Auto Highlight](https://ui.shadcn.com/docs/components/base/combobox))
 */
export const AutoHighlight: Story = {
	name: 'AutoHighlight',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<Combobox
			items={[...frameworks]}
			autoHighlight
		>
			<ComboboxInput
				placeholder="입력 시 첫 항목 강조"
				className="w-[260px]"
			/>
			<ComboboxContent>
				<ComboboxEmpty>항목이 없습니다.</ComboboxEmpty>
				<ComboboxList>
					{(item) => (
						<ComboboxItem
							key={item}
							value={item}
						>
							{item}
						</ComboboxItem>
					)}
				</ComboboxList>
			</ComboboxContent>
		</Combobox>
	),
};
