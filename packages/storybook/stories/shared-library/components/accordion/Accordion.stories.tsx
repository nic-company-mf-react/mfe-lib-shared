import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@nic/mfe-lib-shared/components/ui';
import React from 'react';

const singleValue = { 'basic-1': 'basic-1', 'basic-2': 'basic-2' };

const meta = {
	title: 'Components/Accordion',
	component: Accordion,
	// 선택: Docs에서 하위 컴포넌트 설명 블록을 쓰는 경우
	//subcomponents: {
	//	AccordionItem,
	//	AccordionTrigger,
	//	AccordionContent,
	//},
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `
\`Accordion\` 은 \`@nic/mfe-lib-shared\` 의 접이식 패널 UI입니다. \`AccordionItem\`, \`AccordionTrigger\`, \`AccordionContent\` 와 함께 사용합니다.

### 임포트

\`\`\`tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@nic/mfe-lib-shared/components/ui';
\`\`\`

### 기본 사용법 (단일 열림)

\`\`\`tsx
<Accordion defaultValue={['faq-1']}>
  <AccordionItem value="faq-1">
    <AccordionTrigger>질문</AccordionTrigger>
    <AccordionContent>답변</AccordionContent>
  </AccordionItem>
</Accordion>
\`\`\`
`,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		defaultValue: {
			control: 'object',
			description: '초기 열림 항목',
			table: {
				type: { summary: 'string[]' },
				defaultValue: { summary: '[]' },
			},
		},
		multiple: {
			control: 'boolean',
			description: '여러 패널을 동시에 열 수 있는지',
		},
		className: {
			control: 'text',
			description: '루트 className',
		},
	},
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 한 번에 하나만 열리는 기본 모드, 초기 열림 항목 지정 */
export const Single: Story = {
	name: '단일 열림',
	args: {
		multiple: false,
		defaultValue: ['basic-1'],
	},
	render: (args) => {
		const { defaultValue: dv, ...rest } = args;
		const open =
			typeof dv === 'string'
				? dv
						.split(',')
						.map((s) => s.trim())
						.filter(Boolean)
				: dv;
		return (
			<div className="w-full max-w-xl">
				<Accordion
					{...rest}
					defaultValue={open}
				>
					<AccordionItem value="basic-1">
						<AccordionTrigger>첫 번째 항목</AccordionTrigger>
						<AccordionContent>첫 번째 패널 내용입니다.</AccordionContent>
					</AccordionItem>
					<AccordionItem value="basic-2">
						<AccordionTrigger>두 번째 항목</AccordionTrigger>
						<AccordionContent>두 번째 패널 내용입니다.</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		);
	},
};

/** multiple + 기본으로 두 패널 열림 */
export const Multiple: Story = {
	name: '다중 열기',
	render: () => (
		<div className="w-full max-w-xl">
			<Accordion
				multiple
				defaultValue={['a', 'c']}
			>
				<AccordionItem value="a">
					<AccordionTrigger>항목 A</AccordionTrigger>
					<AccordionContent>내용 A</AccordionContent>
				</AccordionItem>
				<AccordionItem value="b">
					<AccordionTrigger>항목 B</AccordionTrigger>
					<AccordionContent>내용 B</AccordionContent>
				</AccordionItem>
				<AccordionItem value="c">
					<AccordionTrigger>항목 C</AccordionTrigger>
					<AccordionContent>내용 C</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	),
};

/** Playground와 동일한 제어 컴포넌트 패턴 */
export const Controlled: Story = {
	name: '제어 모드',
	render: () => {
		const [openItems, setOpenItems] = React.useState<string[]>([]);
		return (
			<div className="w-full max-w-xl space-y-2">
				<p className="text-sm text-muted-foreground">
					열린 항목: {openItems.length === 0 ? '없음' : openItems.join(', ')}
				</p>
				<Accordion
					multiple
					value={openItems}
					onValueChange={setOpenItems}
				>
					<AccordionItem value="item-1">
						<AccordionTrigger>질문 1</AccordionTrigger>
						<AccordionContent>답변 1</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>질문 2</AccordionTrigger>
						<AccordionContent>답변 2</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		);
	},
};

export const WithDisabledItem: Story = {
	name: '비활성 항목',
	render: () => (
		<div className="w-full max-w-xl">
			<Accordion>
				<AccordionItem value="d1">
					<AccordionTrigger>일반 항목</AccordionTrigger>
					<AccordionContent>열 수 있습니다.</AccordionContent>
				</AccordionItem>
				<AccordionItem
					value="d2"
					disabled
				>
					<AccordionTrigger>비활성 항목</AccordionTrigger>
					<AccordionContent>이 내용은 트리거가 비활성입니다.</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	),
};
