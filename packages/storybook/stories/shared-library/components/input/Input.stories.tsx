import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button, Input } from '@nic/mfe-lib-shared/components/ui';
import React from 'react';

const typeOptions = [
	'text',
	'search',
	'email',
	'password',
	'number',
	'tel',
	'url',
	'file',
	'date',
	'time',
] as const;

const meta = {
	title: 'Components/Input',
	component: Input,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
\`Input\` 컴포넌트는 \`@nic/mfe-lib-shared\` 에서 제공하는 텍스트 입력 UI입니다. ([shadcn/ui Input (Base UI)](https://ui.shadcn.com/docs/components/base/input), [Base UI Input](https://base-ui.com/react/components/input) 기반)

폼·검색·설정 화면 등에서 사용자 문자열을 받을 때 사용합니다. \`type\`, \`placeholder\`, \`disabled\`, \`aria-invalid\` 등 표준 \`<input>\` 속성을 그대로 쓸 수 있습니다.

### 임포트

\`\`\`tsx
import { Input } from '@nic/mfe-lib-shared/components/ui';
// 또는
import { Input } from '@nic/mfe-lib-shared/components';
\`\`\`

### 기본 사용법

\`\`\`tsx
<Input placeholder="이메일" type="email" />
\`\`\`
        `,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: 'select',
			options: [...typeOptions],
			description: 'HTML input type',
			table: {
				defaultValue: { summary: 'text' },
			},
		},
		placeholder: {
			control: 'text',
			description: '플레이스홀더 텍스트',
		},
		defaultValue: {
			control: 'text',
			description: '비제어(uncontrolled) 모드 초기값',
		},
		value: {
			control: 'text',
			description: '제어(controlled) 모드 값 (`defaultValue`와 동시 사용 비권장)',
		},
		disabled: {
			control: 'boolean',
			description: '비활성화 상태',
			table: {
				defaultValue: { summary: 'false' },
			},
		},
		readOnly: {
			control: 'boolean',
			description: '읽기 전용',
			table: {
				defaultValue: { summary: 'false' },
			},
		},
		required: {
			control: 'boolean',
			description: '필수 입력(`required` 속성)',
			table: {
				defaultValue: { summary: 'false' },
			},
		},
		'aria-invalid': {
			control: 'boolean',
			description: '유효성 오류 시각 표시(`aria-invalid`)',
			table: {
				defaultValue: { summary: 'false' },
			},
		},
		name: {
			control: 'text',
			description: '폼 전송 시 필드 이름',
		},
		autoComplete: {
			control: 'text',
			description: '자동완성 힌트',
		},
		className: {
			control: 'text',
			description: '추가 클래스 이름',
			table: {
				defaultValue: { summary: '' },
			},
		},
		style: {
			control: 'object',
			description: '인라인 스타일',
			table: {
				defaultValue: { summary: '{}' },
			},
		},
		onChange: {
			action: 'change',
			description: '값이 바뀔 때 호출됩니다.',
		},
	},
	args: {
		type: 'text',
		placeholder: '입력하세요…',
		disabled: false,
		readOnly: false,
		required: false,
		'aria-invalid': false,
		onChange: fn(),
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 텍스트 입력입니다.
 */
export const Default: Story = {
	name: 'Default',
	args: {
		type: 'text',
		placeholder: 'placeholder',
	},
};

/**
 * [문서의 Field 예시](https://ui.shadcn.com/docs/components/base/input)와 같이 라벨·설명과 함께 씁니다. (라이브러리에 Field 컴포넌트가 없을 때는 일반 `label`·문단으로 동일한 패턴을 구성합니다.)
 */
export const WithLabelAndDescription: Story = {
	name: '라벨·설명',
	parameters: {
		controls: { disable: true },
		docs: {
			source: {
				code: `
<div className="grid w-full max-w-sm gap-1.5">
  <label htmlFor="username" className="text-sm font-medium">
    사용자 이름
  </label>
  <Input id="username" placeholder="jane.doe" autoComplete="username" />
  <p className="text-muted-foreground text-sm">
    계정에 사용할 고유한 이름을 정하세요.
  </p>
</div>
`,
			},
		},
	},
	render: () => (
		<div className="grid w-full max-w-sm gap-1.5">
			<label
				htmlFor="story-username"
				className="text-sm font-medium"
			>
				사용자 이름
			</label>
			<Input
				id="story-username"
				placeholder="jane.doe"
				autoComplete="username"
			/>
			<p className="text-muted-foreground text-sm">계정에 사용할 고유한 이름을 정하세요.</p>
		</div>
	),
};

/**
 * Controls의 type·placeholder·disabled·aria-invalid 등이 입력에 실시간 반영되는 예시입니다.
 */
export const InteractiveExample: Story = {
	name: '인터랙티브 예시',
	args: {
		type: 'text',
		placeholder: '값을 입력해 보세요',
	},
	parameters: {
		docs: {
			source: {
				code: `const [value, setValue] = React.useState('');

<Input
  {...args}
  value={value}
  onChange={(e) => {
    setValue(e.target.value);
    args.onChange?.(e);
  }}
/>
<p className="text-muted-foreground text-sm">현재 값: {value || '(비어 있음)'}</p>
`,
			},
		},
	},
	render: (args) => {
		const [value, setValue] = React.useState('');
		return (
			<div className="flex w-full max-w-sm flex-col gap-2">
				<Input
					{...args}
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
						args.onChange?.(e);
					}}
				/>
				<p className="text-muted-foreground text-sm">현재 값: {value || '(비어 있음)'}</p>
			</div>
		);
	},
};

/**
 * 비활성화된 입력입니다.
 */
export const Disabled: Story = {
	args: {
		placeholder: '비활성화됨',
		disabled: true,
		defaultValue: '수정할 수 없습니다',
	},
};

/**
 * `aria-invalid`로 오류 상태 스타일을 켭니다. ([문서: Invalid](https://ui.shadcn.com/docs/components/base/input))
 */
export const Invalid: Story = {
	name: '유효성 오류',
	args: {
		placeholder: '잘못된 값',
		defaultValue: '!!!',
		'aria-invalid': true,
	},
};

/**
 * `type="file"` 파일 선택 입력입니다.
 */
export const File: Story = {
	args: {
		type: 'file',
		placeholder: undefined,
	},
	parameters: {
		docs: {
			description: {
				story: '파일 입력은 브라우저 기본 UI를 사용합니다. 스토리에서는 `accept` 등 필요 시 추가하세요.',
			},
		},
	},
};

/**
 * 가로 배치와 버튼을 곁들인 검색 입력입니다. ([문서: Inline](https://ui.shadcn.com/docs/components/base/input))
 */
export const InlineWithButton: Story = {
	name: '인라인 검색',
	parameters: {
		controls: { disable: true },
		docs: {
			source: {
				code: `
<div className="flex w-full max-w-md items-center gap-2">
  <Input type="search" placeholder="검색…" className="flex-1" />
  <Button type="button">검색</Button>
</div>
`,
			},
		},
	},
	render: () => (
		<div className="flex w-full max-w-md items-center gap-2">
			<Input
				type="search"
				placeholder="검색…"
				className="flex-1"
			/>
			<Button type="button">검색</Button>
		</div>
	),
};

/**
 * 나란히 두 필드를 배치합니다. ([문서: Grid](https://ui.shadcn.com/docs/components/base/input))
 */
export const GridTwoColumns: Story = {
	name: '그리드 (2열)',
	parameters: {
		controls: { disable: true },
		docs: {
			source: {
				code: `
<div className="grid w-full max-w-md grid-cols-2 gap-4">
  <div className="grid gap-1.5">
    <label htmlFor="first" className="text-sm font-medium">이름</label>
    <Input id="first" placeholder="길동" autoComplete="given-name" />
  </div>
  <div className="grid gap-1.5">
    <label htmlFor="last" className="text-sm font-medium">성</label>
    <Input id="last" placeholder="홍" autoComplete="family-name" />
  </div>
</div>
`,
			},
		},
	},
	render: () => (
		<div className="grid w-full max-w-md grid-cols-2 gap-4">
			<div className="grid gap-1.5">
				<label
					htmlFor="story-first"
					className="text-sm font-medium"
				>
					이름
				</label>
				<Input
					id="story-first"
					placeholder="길동"
					autoComplete="given-name"
				/>
			</div>
			<div className="grid gap-1.5">
				<label
					htmlFor="story-last"
					className="text-sm font-medium"
				>
					성
				</label>
				<Input
					id="story-last"
					placeholder="홍"
					autoComplete="family-name"
				/>
			</div>
		</div>
	),
};

/**
 * `required`와 라벨에 별표를 붙인 예시입니다. ([문서: Required](https://ui.shadcn.com/docs/components/base/input))
 */
export const Required: Story = {
	name: '필수 입력',
	parameters: {
		controls: { disable: true },
		docs: {
			source: {
				code: `
<div className="grid w-full max-w-sm gap-1.5">
  <label htmlFor="req" className="text-sm font-medium">
    필수 항목 <span className="text-destructive">*</span>
  </label>
  <Input id="req" required placeholder="반드시 입력" />
  <p className="text-muted-foreground text-sm">제출 전에 이 필드를 채워야 합니다.</p>
</div>
`,
			},
		},
	},
	render: () => (
		<div className="grid w-full max-w-sm gap-1.5">
			<label
				htmlFor="story-required"
				className="text-sm font-medium"
			>
				필수 항목 <span className="text-destructive">*</span>
			</label>
			<Input
				id="story-required"
				required
				placeholder="반드시 입력"
			/>
			<p className="text-muted-foreground text-sm">제출 전에 이 필드를 채워야 합니다.</p>
		</div>
	),
};

/**
 * 자주 쓰는 `type` 값을 한 화면에서 비교합니다.
 */
export const CommonTypes: Story = {
	name: '입력 타입 비교',
	parameters: {
		controls: { disable: true },
	},
	render: () => {
		const demos: { type: (typeof typeOptions)[number]; label: string; placeholder?: string }[] = [
			{ type: 'text', label: 'text', placeholder: '일반 텍스트' },
			{ type: 'email', label: 'email', placeholder: 'you@example.com' },
			{ type: 'password', label: 'password', placeholder: '비밀번호' },
			{ type: 'search', label: 'search', placeholder: '검색…' },
			{ type: 'number', label: 'number', placeholder: '0' },
			{ type: 'tel', label: 'tel', placeholder: '010-0000-0000' },
			{ type: 'url', label: 'url', placeholder: 'https://' },
		];
		return (
			<div className="flex w-full max-w-md flex-col gap-4">
				{demos.map(({ type, label, placeholder }) => (
					<div
						key={type}
						className="grid gap-1.5"
					>
						<span className="text-muted-foreground text-xs font-mono">{label}</span>
						<Input
							type={type}
							placeholder={placeholder}
						/>
					</div>
				))}
			</div>
		);
	},
};
