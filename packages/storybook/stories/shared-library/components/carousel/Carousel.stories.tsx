import type { Meta, StoryObj } from '@storybook/react-vite';
import {
	type CarouselApi,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@axiom/mfe-lib-shared/components/ui';
import React from 'react';

const orientationOptions = ['horizontal', 'vertical'] as const;

const slideIndices = [1, 2, 3, 4, 5];

const meta = {
	title: 'Components/Carousel',
	component: Carousel,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
\`Carousel\` 컴포넌트는 Embla 기반 슬라이드 UI입니다. (\`@axiom/mfe-lib-shared\`)

\`Carousel\`, \`CarouselContent\`, \`CarouselItem\`, \`CarouselPrevious\`, \`CarouselNext\` 를 조합해 사용합니다.

### 임포트

\`\`\`tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@axiom/mfe-lib-shared/components/ui';
\`\`\`

### 기본 사용법
\`\`\`tsx
<Carousel className="w-full max-w-xs">
  <CarouselContent>
    <CarouselItem>슬라이드 1</CarouselItem>
    <CarouselItem>슬라이드 2</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
\`\`\`
        `,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		orientation: {
			control: 'select',
			options: [...orientationOptions],
			description: '슬라이드 스크롤 방향',
			table: {
				defaultValue: { summary: 'horizontal' },
			},
		},
		className: {
			control: 'text',
			description: '루트 캐러셀 컨테이너 className',
			table: {
				defaultValue: { summary: '' },
			},
		},
		style: {
			control: 'object',
			description: '루트 캐러셀 컨테이너 인라인 스타일',
			table: {
				defaultValue: { summary: '{}' },
			},
		},
		opts: {
			control: 'object',
			description: 'Embla 옵션 (예: loop, align, slidesToScroll 등)',
			table: {
				defaultValue: { summary: 'undefined' },
			},
		},
	},
	args: {
		orientation: 'horizontal',
	},
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 가로 방향 기본 캐러셀입니다. 이전·다음 버튼으로 슬라이드를 넘깁니다.
 */
export const Default: Story = {
	name: 'Default',
	render: (args) => (
		<div
			style={{
				paddingLeft: '3rem',
				paddingRight: '3rem',
				width: '100%',
				maxWidth: '28rem',
			}}
		>
			<Carousel
				{...args}
				className={args.className ?? 'w-full'}
			>
				<CarouselContent>
					{slideIndices.map((n) => (
						<CarouselItem key={n}>
							<div style={{ padding: '0.25rem' }}>
								<div
									style={{
										display: 'flex',
										aspectRatio: '16 / 9',
										alignItems: 'center',
										justifyContent: 'center',
										borderRadius: '0.5rem',
										border: '1px solid hsl(var(--border))',
										background: 'hsl(var(--muted))',
										fontSize: '1.5rem',
										fontWeight: 500,
									}}
								>
									{n}
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	),
};

/**
 * \`orientation="vertical"\` 인 세로 스크롤 캐러셀입니다. 뷰포트 높이를 고정합니다.
 */
export const Vertical: Story = {
	name: '세로 방향',
	args: {
		orientation: 'vertical',
	},
	render: (args) => (
		<div
			style={{
				paddingTop: '3rem',
				paddingBottom: '3rem',
				width: '100%',
				maxWidth: '20rem',
			}}
		>
			<Carousel
				{...args}
				className={args.className ?? 'w-full'}
			>
				<CarouselContent style={{ height: '200px' }}>
					{slideIndices.map((n) => (
						<CarouselItem key={n}>
							<div style={{ padding: '0.25rem' }}>
								<div
									style={{
										display: 'flex',
										minHeight: '120px',
										alignItems: 'center',
										justifyContent: 'center',
										borderRadius: '0.5rem',
										border: '1px solid hsl(var(--border))',
										background: 'hsl(var(--muted))',
										fontSize: '1.25rem',
										fontWeight: 500,
									}}
								>
									슬라이드 {n}
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	),
};

/**
 * \`opts.loop\` 가 켜지면 끝에서 처음으로 이어집니다.
 */
export const Loop: Story = {
	name: '루프(무한)',
	args: {
		opts: { loop: true },
	},
	render: (args) => (
		<div
			style={{
				paddingLeft: '3rem',
				paddingRight: '3rem',
				width: '100%',
				maxWidth: '28rem',
			}}
		>
			<Carousel
				{...args}
				className={args.className ?? 'w-full'}
			>
				<CarouselContent>
					{slideIndices.map((n) => (
						<CarouselItem key={n}>
							<div style={{ padding: '0.25rem' }}>
								<div
									style={{
										display: 'flex',
										aspectRatio: '16 / 9',
										alignItems: 'center',
										justifyContent: 'center',
										borderRadius: '0.5rem',
										border: '1px solid hsl(var(--border))',
										background: 'hsl(var(--muted))',
										fontSize: '1.5rem',
										fontWeight: 500,
									}}
								>
									{n}
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	),
};

/**
 * \`setApi\` 로 Embla API를 받아 현재 슬라이드 번호를 표시하는 예시입니다.
 */
export const WithSlideCounter: Story = {
	name: '슬라이드 번호 표시',
	parameters: {
		docs: {
			source: {
				code: `
const [api, setApi] = React.useState<CarouselApi>();
const [current, setCurrent] = React.useState(0);
const [count, setCount] = React.useState(0);

React.useEffect(() => {
  if (!api) return;
  setCount(api.scrollSnapList().length);
  setCurrent(api.selectedScrollSnap() + 1);
  api.on("select", () => {
    setCurrent(api.selectedScrollSnap() + 1);
  });
}, [api]);

return (
  <>
    <p>{current} / {count}</p>
    <Carousel setApi={setApi}>...</Carousel>
  </>
);
`,
			},
		},
	},
	render: (args) => {
		const [api, setApi] = React.useState<CarouselApi>();
		const [current, setCurrent] = React.useState(0);
		const [count, setCount] = React.useState(0);

		React.useEffect(() => {
			if (!api) return;

			setCount(api.scrollSnapList().length);
			setCurrent(api.selectedScrollSnap() + 1);

			const onSelect = () => {
				setCurrent(api.selectedScrollSnap() + 1);
			};
			api.on('select', onSelect);
			return () => {
				api.off('select', onSelect);
			};
		}, [api]);

		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '0.75rem',
				}}
			>
				<p style={{ margin: 0, fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>
					{current} / {count}
				</p>
				<div
					style={{
						paddingLeft: '3rem',
						paddingRight: '3rem',
						width: '100%',
						maxWidth: '28rem',
					}}
				>
					<Carousel
						{...args}
						setApi={setApi}
						className={args.className ?? 'w-full'}
					>
						<CarouselContent>
							{slideIndices.map((n) => (
								<CarouselItem key={n}>
									<div style={{ padding: '0.25rem' }}>
										<div
											style={{
												display: 'flex',
												aspectRatio: '16 / 9',
												alignItems: 'center',
												justifyContent: 'center',
												borderRadius: '0.5rem',
												border: '1px solid hsl(var(--border))',
												background: 'hsl(var(--muted))',
												fontSize: '1.5rem',
												fontWeight: 500,
											}}
										>
											{n}
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
		);
	},
};

/**
 * Controls 패널에서 orientation 등을 바꿔 동작을 확인할 수 있습니다.
 */
export const InteractiveExample: Story = {
	name: '인터랙티브 예시',
	render: (args) => (
		<div
			style={{
				paddingLeft: args.orientation === 'horizontal' ? '3rem' : undefined,
				paddingRight: args.orientation === 'horizontal' ? '3rem' : undefined,
				paddingTop: args.orientation === 'vertical' ? '3rem' : undefined,
				paddingBottom: args.orientation === 'vertical' ? '3rem' : undefined,
				width: '100%',
				maxWidth: args.orientation === 'vertical' ? '20rem' : '28rem',
			}}
		>
			<Carousel
				{...args}
				className={args.className ?? 'w-full'}
			>
				<CarouselContent style={args.orientation === 'vertical' ? { height: '200px' } : undefined}>
					{slideIndices.map((n) => (
						<CarouselItem key={n}>
							<div style={{ padding: '0.25rem' }}>
								<div
									style={{
										display: 'flex',
										...(args.orientation === 'vertical' ? { minHeight: '120px' } : { aspectRatio: '16 / 9' }),
										alignItems: 'center',
										justifyContent: 'center',
										borderRadius: '0.5rem',
										border: '1px solid hsl(var(--border))',
										background: 'hsl(var(--muted))',
										fontSize: '1.25rem',
										fontWeight: 500,
									}}
								>
									{args.orientation === 'vertical' ? `슬라이드 ${n}` : n}
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	),
};
