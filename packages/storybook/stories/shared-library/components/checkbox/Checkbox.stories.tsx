import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Checkbox } from '@nic/mfe-lib-shared/components/ui';
import React from 'react';

const meta = {
	title: 'Components/Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
\`Checkbox\` 컴포넌트는 \`@nic/mfe-lib-shared\` 에서 제공하는 체크박스 UI입니다. ([Base UI Checkbox](https://base-ui.com/react/components/checkbox) 기반)

### 임포트

\`\`\`tsx
import { Checkbox } from '@nic/mfe-lib-shared/components/ui';
// 또는
import { Checkbox } from '@nic/mfe-lib-shared/components';
\`\`\`

### 기본 사용법
체크박스를 화면에 표시하기 위한 기본 사용법입니다.
\`\`\`tsx
<Checkbox defaultChecked={false} />
\`\`\`
        `,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		defaultChecked: {
			control: 'boolean',
			description: '비제어(uncontrolled) 모드에서 초기 선택 여부',
			table: {
				defaultValue: { summary: 'false' },
			},
		},
		checked: {
			control: 'boolean',
			description: '제어(controlled) 모드에서 선택 여부 (`defaultChecked`와 함께 쓰지 않음)',
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
			description: '읽기 전용(토글 불가)',
			table: {
				defaultValue: { summary: 'false' },
			},
		},
		required: {
			control: 'boolean',
			description: '폼 제출 시 필수 여부',
			table: {
				defaultValue: { summary: 'false' },
			},
		},
		indeterminate: {
			control: 'boolean',
			description: '부분 선택(중간) 상태',
			table: {
				defaultValue: { summary: 'false' },
			},
		},
		name: {
			control: 'text',
			description: '폼 전송 시 필드 이름',
		},
		value: {
			control: 'text',
			description: '선택된 체크박스의 값',
		},
		className: {
			control: 'text',
			description: '루트 요소에 적용할 클래스',
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
		onCheckedChange: {
			action: 'checkedChange',
			description: '선택 상태가 바뀔 때 호출됩니다.',
		},
	},
	args: {
		defaultChecked: false,
		disabled: false,
		readOnly: false,
		required: false,
		indeterminate: false,
		onCheckedChange: fn(),
	},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 체크박스입니다. 초기에는 선택되지 않습니다.
 */
export const Default: Story = {
	name: 'Default',
	args: {
		defaultChecked: false,
	},
};

/**
 * 초기값이 선택된 상태입니다.
 */
export const InitiallyChecked: Story = {
	name: '초기 선택',
	args: {
		defaultChecked: true,
	},
};

export const AlertOnChange: Story = {
	name: '상태 변경 예시',
	args: {},
	parameters: {
		docs: {
			source: {
				code: `
<Checkbox
  defaultChecked={false}
  onCheckedChange={(checked) => alert(\`선택 상태: \${checked}\`)}
/>
`,
			},
		},
	},
	render: (args) => (
		<Checkbox
			{...args}
			onCheckedChange={(checked, details) => {
				args.onCheckedChange?.(checked, details);
				alert(`선택 상태: ${checked}`);
			}}
		/>
	),
};

/**
 * Controls의 `checked` 변경이 체크박스에 실시간 반영되는 제어 컴포넌트 예시입니다.
 */
export const InteractiveExample: Story = {
	name: '인터랙티브 예시',
	args: {},
	parameters: {
		docs: {
			source: {
				code: `const [checked, setChecked] = React.useState(false);

<Checkbox checked={checked} onCheckedChange={(v) => setChecked(v)} />
`,
			},
		},
	},
	render: (args) => {
		const [checked, setChecked] = React.useState(false);
		const { defaultChecked: _defaultChecked, checked: _checkedArg, ...rest } = args;
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '12px',
					alignItems: 'center',
				}}
			>
				<p style={{ margin: 0 }}>선택됨: {checked ? '예' : '아니오'}</p>
				<Checkbox
					{...rest}
					checked={checked}
					onCheckedChange={(v, details) => {
						args.onCheckedChange?.(v, details);
						setChecked(v);
					}}
				/>
			</div>
		);
	},
};

/**
 * 비활성화된 체크박스입니다.
 */
export const Disabled: Story = {
	args: {
		disabled: true,
		defaultChecked: false,
	},
};

/**
 * 읽기 전용 체크박스입니다. 포커스는 가능하지만 토글할 수 없습니다.
 */
export const ReadOnly: Story = {
	name: '읽기 전용',
	args: {
		readOnly: true,
		defaultChecked: true,
	},
};

/**
 * 부분 선택(indeterminate) 상태입니다. 하위 항목 일부만 선택된 경우 등에 사용합니다.
 */
export const Indeterminate: Story = {
	name: '부분 선택(Indeterminate)',
	args: {
		indeterminate: true,
		defaultChecked: false,
	},
};

/**
 * 검증 오류 등에 사용할 수 있는 `aria-invalid` 상태 예시입니다.
 */
export const Invalid: Story = {
	name: '오류 상태(aria-invalid)',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<Checkbox
			defaultChecked={false}
			aria-invalid
		/>
	),
};

/**
 * 라벨 텍스트와 함께 쓰는 일반적인 배치 예시입니다.
 */
export const WithLabel: Story = {
	name: '라벨과 함께',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<label
			style={{
				display: 'inline-flex',
				alignItems: 'center',
				gap: '8px',
				cursor: 'pointer',
				userSelect: 'none',
			}}
		>
			<Checkbox defaultChecked={false} />
			<span>약관에 동의합니다</span>
		</label>
	),
};

/**
 * 주요 상태를 한눈에 비교합니다.
 */
export const AllStates: Story = {
	name: '상태 비교',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'auto 1fr',
				gap: '12px 16px',
				alignItems: 'center',
			}}
		>
			<span style={{ color: 'var(--muted-foreground, #737373)' }}>미선택</span>
			<Checkbox defaultChecked={false} />

			<span style={{ color: 'var(--muted-foreground, #737373)' }}>선택</span>
			<Checkbox defaultChecked />

			<span style={{ color: 'var(--muted-foreground, #737373)' }}>부분 선택</span>
			<Checkbox
				indeterminate
				defaultChecked={false}
			/>

			<span style={{ color: 'var(--muted-foreground, #737373)' }}>비활성(미선택)</span>
			<Checkbox
				disabled
				defaultChecked={false}
			/>

			<span style={{ color: 'var(--muted-foreground, #737373)' }}>비활성(선택)</span>
			<Checkbox
				disabled
				defaultChecked
			/>
		</div>
	),
};
