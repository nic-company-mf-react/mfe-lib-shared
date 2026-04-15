import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import {
	Button,
	ButtonGroup,
	ButtonGroupSeparator,
	ButtonGroupText,
	buttonGroupVariantsConfig,
} from '@axiom/mfe-lib-shared/components/ui';
import React from 'react';

const orientationOptions = Object.keys(
	buttonGroupVariantsConfig.orientation,
) as (keyof typeof buttonGroupVariantsConfig.orientation)[];

const meta = {
	title: 'Components/ButtonGroup',
	component: ButtonGroup,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
\`ButtonGroup\` 은 \`@axiom/mfe-lib-shared\` 에서 제공하는 연결된 버튼 그룹 UI입니다. \`Button\` 과 함께 쓰며, 필요 시 \`ButtonGroupText\`, \`ButtonGroupSeparator\` 로 라벨·구분선을 넣을 수 있습니다.

### 임포트

\`\`\`tsx
import {
  ButtonGroup,
  ButtonGroupText,
  ButtonGroupSeparator,
  Button,
} from '@axiom/mfe-lib-shared/components/ui';
\`\`\`

### 기본 사용법
\`\`\`tsx
<ButtonGroup>
  <Button variant="outline">이전</Button>
  <Button variant="outline">다음</Button>
</ButtonGroup>
\`\`\`
        `,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		orientation: {
			control: 'select',
			options: orientationOptions,
			description: '버튼을 가로로 이을지, 세로로 쌓을지',
			table: {
				defaultValue: { summary: 'horizontal' },
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
		orientation: 'horizontal',
	},
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 가로로 붙은 기본 그룹입니다.
 */
export const Default: Story = {
	name: 'Default',
	args: {
		orientation: 'horizontal',
	},
	render: (args) => (
		<ButtonGroup {...args}>
			<Button
				variant="outline"
				onClick={fn()}
			>
				이전
			</Button>
			<Button
				variant="outline"
				onClick={fn()}
			>
				다음
			</Button>
		</ButtonGroup>
	),
};

/**
 * \`orientation="vertical"\` 로 세로 배치입니다.
 */
export const Vertical: Story = {
	name: '세로 배치',
	args: {
		orientation: 'vertical',
	},
	render: (args) => (
		<ButtonGroup {...args}>
			<Button
				variant="outline"
				onClick={fn()}
			>
				위
			</Button>
			<Button
				variant="outline"
				onClick={fn()}
			>
				아래
			</Button>
		</ButtonGroup>
	),
};

/**
 * 그룹 앞에 설명 라벨을 붙일 때 \`ButtonGroupText\` 를 사용합니다.
 */
export const WithLabel: Story = {
	name: '라벨(Text) 포함',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<ButtonGroup>
			<ButtonGroupText>보기</ButtonGroupText>
			<Button
				variant="outline"
				onClick={fn()}
			>
				목록
			</Button>
			<Button
				variant="outline"
				onClick={fn()}
			>
				갤러리
			</Button>
		</ButtonGroup>
	),
};

/**
 * \`ButtonGroupSeparator\` 로 버튼 사이를 시각적으로 나눕니다. (가로 그룹에서는 세로 구분선)
 */
export const WithSeparator: Story = {
	name: '구분선',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<ButtonGroup>
			<Button
				variant="outline"
				onClick={fn()}
			>
				저장
			</Button>
			<ButtonGroupSeparator />
			<Button
				variant="outline"
				onClick={fn()}
			>
				취소
			</Button>
		</ButtonGroup>
	),
};

/**
 * 세로 그룹에서는 구분선에 \`orientation="horizontal"\` 을 맞춥니다.
 */
export const VerticalWithSeparator: Story = {
	name: '세로 + 구분선',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<ButtonGroup orientation="vertical">
			<Button
				variant="outline"
				onClick={fn()}
			>
				항목 A
			</Button>
			<ButtonGroupSeparator orientation="horizontal" />
			<Button
				variant="outline"
				onClick={fn()}
			>
				항목 B
			</Button>
		</ButtonGroup>
	),
};

/**
 * Controls의 orientation 변경이 그룹에 바로 반영됩니다.
 */
export const InteractiveExample: Story = {
	name: '인터랙티브 예시',
	args: {
		orientation: 'horizontal',
	},
	parameters: {
		docs: {
			source: {
				code: `const [last, setLast] = React.useState<string | null>(null);

<ButtonGroup {...args}>
  <Button variant="outline" onClick={() => setLast('왼쪽')}>
    왼쪽
  </Button>
  <Button variant="outline" onClick={() => setLast('오른쪽')}>
    오른쪽
  </Button>
</ButtonGroup>
<p className="text-muted-foreground text-sm">마지막 클릭: {last ?? '없음'}</p>
`,
			},
		},
	},
	render: (args) => {
		const [last, setLast] = React.useState<string | null>(null);
		return (
			<div className="flex flex-col items-center gap-3">
				<ButtonGroup {...args}>
					<Button
						variant="outline"
						onClick={() => setLast('왼쪽')}
					>
						왼쪽
					</Button>
					<Button
						variant="outline"
						onClick={() => setLast('오른쪽')}
					>
						오른쪽
					</Button>
				</ButtonGroup>
				<p className="text-muted-foreground text-sm">마지막 클릭: {last ?? '없음'}</p>
			</div>
		);
	},
};

/**
 * orientation 값을 나란히 비교합니다.
 */
export const AllOrientations: Story = {
	name: 'orientation 비교',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<div className="flex flex-col items-start gap-6">
			{orientationOptions.map((orientation) => (
				<div
					key={orientation}
					className="flex flex-col gap-2"
				>
					<span className="text-muted-foreground text-xs font-medium uppercase">{orientation}</span>
					<ButtonGroup orientation={orientation}>
						<Button variant="outline">하나</Button>
						<Button variant="outline">둘</Button>
						<Button variant="outline">셋</Button>
					</ButtonGroup>
				</div>
			))}
		</div>
	),
};
