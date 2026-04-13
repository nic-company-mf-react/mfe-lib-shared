import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Toaster } from '@nic/mfe-lib-shared/components/ui';
import { ThemeProvider } from '@nic/mfe-lib-shared/context';
import React from 'react';
import { toast } from 'sonner';

const positionOptions = [
	'top-left',
	'top-center',
	'top-right',
	'bottom-left',
	'bottom-center',
	'bottom-right',
] as const;

const meta = {
	title: 'Components/Sonner',
	component: Toaster,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
\`Toaster\`는 \`@nic/mfe-lib-shared\`에서 제공하는 토스트(알림) 영역입니다. ([shadcn/ui Sonner (Base UI)](https://ui.shadcn.com/docs/components/base/sonner) · [Sonner](https://github.com/emilkowalski/sonner) 기반)

앱 레이아웃(또는 Provider 트리) 하단에 \`<Toaster />\`를 한 번 마운트하고, 화면 어디서든 \`toast()\`로 알림을 띄웁니다. 테마는 \`ThemeProvider\`(\`@nic/mfe-lib-shared/context\`)와 연동됩니다.

### 임포트

\`\`\`tsx
import { Toaster } from '@nic/mfe-lib-shared/components/ui';
import { toast } from 'sonner';
// 레이아웃 예시
// import { ThemeProvider } from '@nic/mfe-lib-shared/context';
\`\`\`

### 기본 사용법

\`\`\`tsx
// 루트 레이아웃 등
<ThemeProvider>
  {children}
  <Toaster />
</ThemeProvider>

// 이벤트 핸들러 등
toast('이벤트가 생성되었습니다.');
\`\`\`
        `,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		position: {
			control: 'select',
			options: [...positionOptions],
			description: '토스트가 쌓이는 위치',
			table: {
				defaultValue: { summary: 'bottom-right' },
			},
		},
		expand: {
			control: 'boolean',
			description: '호버 시 토스트 영역 확장',
			table: {
				defaultValue: { summary: 'false' },
			},
		},
		richColors: {
			control: 'boolean',
			description: '타입별 색상 강조',
			table: {
				defaultValue: { summary: 'false' },
			},
		},
		closeButton: {
			control: 'boolean',
			description: '닫기 버튼 표시',
			table: {
				defaultValue: { summary: 'false' },
			},
		},
		duration: {
			control: 'number',
			description: '자동 사라짐 시간(ms). Infinity면 수동 닫기까지 유지',
			table: {
				defaultValue: { summary: '4000' },
			},
		},
		visibleToasts: {
			control: 'number',
			description: '동시에 보이는 토스트 개수 상한',
			table: {
				defaultValue: { summary: '3' },
			},
		},
		className: {
			control: 'text',
			description: '토스터 컨테이너 클래스',
			table: {
				defaultValue: { summary: '' },
			},
		},
	},
	args: {
		position: 'bottom-right',
		expand: false,
		richColors: false,
		closeButton: false,
	},
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 메시지 토스트입니다. [문서의 기본 예시](https://ui.shadcn.com/docs/components/base/sonner)와 같습니다.
 */
export const Default: Story = {
	name: 'Default',
	render: (args) => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '12px',
			}}
		>
			<Button
				variant="default"
				onClick={() => toast('이벤트가 생성되었습니다.')}
			>
				토스트 표시
			</Button>
			<Toaster {...args} />
		</div>
	),
	parameters: {
		docs: {
			source: {
				code: `import { Toaster } from '@nic/mfe-lib-shared/components/ui';
import { toast } from 'sonner';

<Button onClick={() => toast('이벤트가 생성되었습니다.')}>토스트 표시</Button>
<Toaster />
`,
			},
		},
	},
};

/**
 * success · info · warning · error 등 타입별 토스트입니다.
 */
export const Types: Story = {
	name: '타입별 토스트',
	parameters: {
		controls: { disable: true },
		docs: {
			source: {
				code: `toast.success('저장되었습니다.');
toast.info('참고 사항입니다.');
toast.warning('확인이 필요합니다.');
toast.error('요청에 실패했습니다.');`,
			},
		},
	},
	render: (args) => (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				gap: '8px',
				justifyContent: 'center',
				maxWidth: '420px',
			}}
		>
			<Button
				variant="default"
				onClick={() => toast.success('저장되었습니다.')}
			>
				Success
			</Button>
			<Button
				variant="secondary"
				onClick={() => toast.info('참고 사항입니다.')}
			>
				Info
			</Button>
			<Button
				variant="outline"
				onClick={() => toast.warning('확인이 필요합니다.')}
			>
				Warning
			</Button>
			<Button
				variant="destructive"
				onClick={() => toast.error('요청에 실패했습니다.')}
			>
				Error
			</Button>
			<Toaster {...args} />
		</div>
	),
};

/**
 * 제목과 설명(description)을 함께 표시합니다.
 */
export const WithDescription: Story = {
	name: '설명 포함',
	parameters: {
		controls: { disable: true },
		docs: {
			source: {
				code: `toast('새 메시지', {
  description: '1분 전 · Alice',
});`,
			},
		},
	},
	render: (args) => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '12px',
			}}
		>
			<Button
				variant="default"
				onClick={() =>
					toast('새 메시지', {
						description: '1분 전 · Alice',
					})
				}
			>
				설명 있는 토스트
			</Button>
			<Toaster {...args} />
		</div>
	),
};

/**
 * 비동기 작업 결과를 로딩 → 성공/실패로 표시합니다.
 */
export const PromiseToast: Story = {
	name: 'Promise',
	parameters: {
		controls: { disable: true },
		docs: {
			source: {
				code: `toast.promise(
  fetch('/api').then((r) => r.json()),
  {
    loading: '불러오는 중…',
    success: '완료되었습니다.',
    error: '실패했습니다.',
  },
);`,
			},
		},
	},
	render: (args) => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '12px',
			}}
		>
			<Button
				variant="default"
				onClick={() => {
					const fakeRequest = new Promise<{ name: string }>((resolve) => {
						setTimeout(() => resolve({ name: 'Sonner' }), 1500);
					});
					toast.promise(fakeRequest, {
						loading: '불러오는 중…',
						success: (data) => `${data.name} 준비 완료`,
						error: '요청에 실패했습니다.',
					});
				}}
			>
				Promise 토스트
			</Button>
			<Toaster {...args} />
		</div>
	),
};

/**
 * Controls의 position · expand · richColors 등이 토스터에 실시간 반영됩니다.
 */
export const InteractiveExample: Story = {
	name: '인터랙티브 예시',
	parameters: {
		docs: {
			source: {
				code: `<Toaster
  position="bottom-right"
  expand={false}
  richColors={false}
/>
<Button onClick={() => toast('Controls로 Toaster 옵션을 바꿔 보세요.')}>
  토스트 표시
</Button>`,
			},
		},
	},
	render: (args) => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '12px',
			}}
		>
			<Button
				variant="default"
				onClick={() => toast('Controls로 Toaster 옵션을 바꿔 보세요.')}
			>
				토스트 표시
			</Button>
			<Toaster {...args} />
		</div>
	),
};

/**
 * 액션 버튼이 있는 토스트입니다.
 */
export const WithAction: Story = {
	name: '액션 버튼',
	parameters: {
		controls: { disable: true },
		docs: {
			source: {
				code: `toast('파일이 준비되었습니다.', {
  action: {
    label: '열기',
    onClick: () => console.log('열기'),
  },
});`,
			},
		},
	},
	render: (args) => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '12px',
			}}
		>
			<Button
				variant="default"
				onClick={() =>
					toast('파일이 준비되었습니다.', {
						action: {
							label: '열기',
							onClick: () => {
								// Storybook Actions 대신 콘솔
								console.log('열기 클릭');
							},
						},
					})
				}
			>
				액션 토스트
			</Button>
			<Toaster {...args} />
		</div>
	),
};
