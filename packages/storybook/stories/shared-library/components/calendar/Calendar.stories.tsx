import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Calendar, buttonVariantsConfig } from '@nic/mfe-lib-shared/components/ui';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import type { DateRange } from 'react-day-picker';
import { Calendar as CalendarIcon } from 'lucide-react';
import React from 'react';
import { createPortal } from 'react-dom';

const buttonVariantOptions = Object.keys(buttonVariantsConfig.variant) as (keyof typeof buttonVariantsConfig.variant)[];

const captionLayoutOptions = ['label', 'dropdown', 'dropdown-months', 'dropdown-years'] as const;

/** 비교용 스토리에서 훅 규칙을 지키기 위한 단일 날짜 캘린더 래퍼 */
function SingleCalendar(props: React.ComponentProps<typeof Calendar>) {
	const [selected, setSelected] = React.useState<Date | undefined>();
	return (
		<Calendar
			{...props}
			mode="single"
			selected={selected}
			onSelect={setSelected}
		/>
	);
}

const ANCHORED_POPOVER_PANEL_BOX_STYLE: React.CSSProperties = {
	position: 'fixed',
	zIndex: 99999,
	borderRadius: 'var(--radius-md, 0.5rem)',
	border: '1px solid var(--border)',
	background: 'var(--popover)',
	color: 'var(--popover-foreground)',
	boxShadow: '0 4px 12px color-mix(in oklch, black 12%, transparent)',
};

/**
 * Storybook/overflow 이슈를 피하기 위해 `document.body` 포털 + `position: fixed`로 패널을 띄웁니다.
 * shadcn Date Picker는 [Popover + Calendar](https://ui.shadcn.com/docs/components/base/date-picker) 조합입니다.
 */
function useAnchoredPopoverPanel(open: boolean, onRequestClose: () => void) {
	const triggerWrapRef = React.useRef<HTMLDivElement>(null);
	const popoverRef = React.useRef<HTMLDivElement>(null);
	const [panelPos, setPanelPos] = React.useState({ top: 0, left: 0 });

	const updatePanelPosition = React.useCallback(() => {
		const el = triggerWrapRef.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		setPanelPos({ top: rect.bottom + 8, left: rect.left });
	}, []);

	React.useLayoutEffect(() => {
		if (!open) return;
		updatePanelPosition();
	}, [open, updatePanelPosition]);

	React.useEffect(() => {
		if (!open) return;
		window.addEventListener('scroll', updatePanelPosition, true);
		window.addEventListener('resize', updatePanelPosition);
		return () => {
			window.removeEventListener('scroll', updatePanelPosition, true);
			window.removeEventListener('resize', updatePanelPosition);
		};
	}, [open, updatePanelPosition]);

	React.useEffect(() => {
		if (!open) return;
		const onDocMouseDown = (e: MouseEvent) => {
			const t = e.target as Node;
			if (triggerWrapRef.current?.contains(t)) return;
			if (popoverRef.current?.contains(t)) return;
			onRequestClose();
		};
		document.addEventListener('mousedown', onDocMouseDown);
		return () => document.removeEventListener('mousedown', onDocMouseDown);
	}, [open, onRequestClose]);

	React.useEffect(() => {
		if (!open) return;
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onRequestClose();
		};
		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [open, onRequestClose]);

	return { triggerWrapRef, popoverRef, panelPos };
}

const meta = {
	title: 'Components/Calendar',
	component: Calendar,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
\`Calendar\` 컴포넌트는 \`react-day-picker\` 기반의 날짜 선택 UI입니다. (\`@nic/mfe-lib-shared\`)

### 임포트

\`\`\`tsx
import { Calendar } from '@nic/mfe-lib-shared/components/ui';
// 또는
import { Calendar } from '@nic/mfe-lib-shared/components';
\`\`\`

### 기본 사용법 (단일 날짜)
\`mode\`, \`selected\`, \`onSelect\` 를 함께 사용합니다.

\`\`\`tsx
const [selected, setSelected] = React.useState<Date | undefined>();

<Calendar
  mode="single"
  selected={selected}
  onSelect={setSelected}
/>
\`\`\`

---

### Date Picker

[shadcn/ui Date Picker](https://ui.shadcn.com/docs/components/base/date-picker)는 별도 \`DatePicker\` 루트 컴포넌트 없이 **Popover + Calendar**를 조합해 만듭니다.

\`\`\`txt
Popover
├── PopoverTrigger
└── PopoverContent
    └── Calendar
\`\`\`

이 패키지에서 Popover를 쓰지 않는 경우, 스토리의 **트리거 버튼 + 포털 패널** 예시가 동일한 UX를 참고용으로 제공합니다.
        `,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		mode: {
			control: 'select',
			options: ['single', 'multiple', 'range'],
			description: '선택 모드',
			table: {
				defaultValue: { summary: 'single' },
			},
		},
		captionLayout: {
			control: 'select',
			options: [...captionLayoutOptions],
			description: '월/연 표시 방식',
			table: {
				defaultValue: { summary: 'label' },
			},
		},
		showOutsideDays: {
			control: 'boolean',
			description: '이전·다음 달에 걸친 날짜 셀 표시 여부',
			table: {
				defaultValue: { summary: 'true' },
			},
		},
		buttonVariant: {
			control: 'select',
			options: buttonVariantOptions,
			description: '이전/다음 월 네비게이션 버튼의 시각적 스타일',
			table: {
				defaultValue: { summary: 'ghost' },
			},
		},
		className: {
			control: 'text',
			description: '루트에 추가할 클래스',
			table: {
				defaultValue: { summary: '' },
			},
		},
	},
	args: {
		mode: 'single',
		captionLayout: 'label',
		showOutsideDays: true,
		buttonVariant: 'ghost',
	},
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 단일 날짜 선택. 선택된 날짜는 내부 state로 관리됩니다.
 */
export const Default: Story = {
	name: 'Default',
	render: (args) => {
		const [selected, setSelected] = React.useState<Date | undefined>(new Date());
		return (
			<Calendar
				{...args}
				mode="single"
				selected={selected}
				onSelect={setSelected}
			/>
		);
	},
};

export const DateSelectAlert: Story = {
	name: '날짜 선택 알림',
	args: {},
	parameters: {
		docs: {
			source: {
				code: `
const [selected, setSelected] = React.useState<Date | undefined>();

<Calendar
  mode="single"
  selected={selected}
  onSelect={(date) => {
    setSelected(date);
    if (date) alert(\`선택한 날짜: \${date.toLocaleDateString()}\`);
  }}
/>
`,
			},
		},
	},
	render: (args) => {
		const [selected, setSelected] = React.useState<Date | undefined>();
		return (
			<Calendar
				{...args}
				mode="single"
				selected={selected}
				onSelect={(date) => {
					setSelected(date);
					if (date) alert(`선택한 날짜: ${date.toLocaleDateString()}`);
				}}
			/>
		);
	},
};

/**
 * Controls의 captionLayout, showOutsideDays, buttonVariant 변경이 캘린더에 반영됩니다.
 * 날짜 선택은 내부 state로 유지됩니다.
 */
export const InteractiveExample: Story = {
	name: '인터랙티브 예시',
	render: (args) => {
		const [selected, setSelected] = React.useState<Date | undefined>(new Date());
		return (
			<Calendar
				{...args}
				mode="single"
				selected={selected}
				onSelect={setSelected}
			/>
		);
	},
};

/**
 * 트리거 버튼을 누르면 아래에 캘린더 패널이 열리는 흔한 날짜 선택 UI입니다.
 * 날짜를 고르면 패널이 닫히고, 바깥을 클릭하거나 Esc로도 닫을 수 있습니다.
 */
export const OpenWithButton: Story = {
	name: '버튼으로 캘린더 열기',
	parameters: {
		controls: { disable: true },
		docs: {
			description: {
				story:
					'Storybook 등 부모에 `overflow: hidden`이 있으면 `absolute` 패널이 잘립니다. `createPortal`로 `document.body`에 두고 `position: fixed`로 버튼 위치에 맞춥니다.',
			},
			source: {
				code: `
const [open, setOpen] = React.useState(false);
const [pos, setPos] = React.useState({ top: 0, left: 0 });
const btnRef = React.useRef<HTMLButtonElement>(null);
const popoverRef = React.useRef<HTMLDivElement>(null);

React.useLayoutEffect(() => {
  if (!open || !btnRef.current) return;
  const r = btnRef.current.getBoundingClientRect();
  setPos({ top: r.bottom + 8, left: r.left });
}, [open]);

{open &&
  createPortal(
    <div ref={popoverRef} style={{ position: 'fixed', top: pos.top, left: pos.left, zIndex: 99999 }}>
      <Calendar ... />
    </div>,
    document.body
  )}
`,
			},
		},
	},
	render: (args) => {
		const [open, setOpen] = React.useState(false);
		const [selected, setSelected] = React.useState<Date | undefined>();
		const close = React.useCallback(() => setOpen(false), []);
		const { triggerWrapRef, popoverRef, panelPos } = useAnchoredPopoverPanel(open, close);

		const panel = open ? (
			<div
				ref={popoverRef}
				data-slot="popover-content"
				role="dialog"
				aria-label="날짜 선택"
				style={{
					...ANCHORED_POPOVER_PANEL_BOX_STYLE,
					top: panelPos.top,
					left: panelPos.left,
				}}
			>
				<Calendar
					{...args}
					mode="single"
					selected={selected}
					onSelect={(date) => {
						setSelected(date);
						setOpen(false);
					}}
				/>
			</div>
		) : null;

		return (
			<div
				ref={triggerWrapRef}
				style={{ display: 'inline-block' }}
			>
				<Button
					type="button"
					variant="outline"
					onClick={() => setOpen((o) => !o)}
					aria-expanded={open}
					aria-haspopup="dialog"
				>
					{selected ? selected.toLocaleDateString('ko-KR') : '날짜 선택'}
				</Button>
				{panel && typeof document !== 'undefined' ? createPortal(panel, document.body) : null}
			</div>
		);
	},
};

/**
 * 기간(range) 선택입니다.
 */
export const Range: Story = {
	name: '기간 선택',
	parameters: {
		controls: { disable: true },
	},
	render: (args) => {
		const [range, setRange] = React.useState<DateRange | undefined>();
		return (
			<Calendar
				{...args}
				mode="range"
				selected={range}
				onSelect={setRange}
			/>
		);
	},
};

/**
 * 여러 날짜를 동시에 선택합니다.
 */
export const Multiple: Story = {
	name: '다중 날짜 선택',
	parameters: {
		controls: { disable: true },
	},
	render: (args) => {
		const [days, setDays] = React.useState<Date[] | undefined>();
		return (
			<Calendar
				{...args}
				mode="multiple"
				selected={days}
				onSelect={setDays}
			/>
		);
	},
};

/**
 * 특정 요일(예: 일요일)을 선택할 수 없게 합니다.
 */
export const WithDisabledDays: Story = {
	name: '비활성 요일',
	parameters: {
		controls: { disable: true },
	},
	render: (args) => {
		const [selected, setSelected] = React.useState<Date | undefined>();
		return (
			<Calendar
				{...args}
				mode="single"
				selected={selected}
				onSelect={setSelected}
				disabled={{ dayOfWeek: [0] }}
			/>
		);
	},
};

/**
 * captionLayout 값별 비교입니다.
 */
export const AllCaptionLayouts: Story = {
	name: 'Caption 레이아웃 비교',
	parameters: {
		controls: { disable: true },
	},
	render: (args) => (
		<div
			style={{
				display: 'flex',
				gap: '24px',
				alignItems: 'flex-start',
				flexWrap: 'wrap',
				justifyContent: 'center',
			}}
		>
			{captionLayoutOptions.map((captionLayout) => (
				<div
					key={captionLayout}
					style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}
				>
					<span style={{ fontSize: '12px', color: 'var(--muted-foreground, #737373)' }}>{captionLayout}</span>
					<SingleCalendar
						{...args}
						captionLayout={captionLayout}
						defaultMonth={new Date()}
					/>
				</div>
			))}
		</div>
	),
};

/**
 * 네비게이션(이전/다음) 버튼의 buttonVariant 비교입니다.
 */
export const AllNavButtonVariants: Story = {
	name: 'Nav 버튼 Variant 비교',
	parameters: {
		controls: { disable: true },
	},
	render: (args) => (
		<div
			style={{
				display: 'flex',
				gap: '24px',
				alignItems: 'flex-start',
				flexWrap: 'wrap',
				justifyContent: 'center',
			}}
		>
			{buttonVariantOptions.map((buttonVariant) => (
				<div
					key={buttonVariant}
					style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}
				>
					<span style={{ fontSize: '12px', color: 'var(--muted-foreground, #737373)' }}>{buttonVariant}</span>
					<SingleCalendar
						{...args}
						buttonVariant={buttonVariant}
						defaultMonth={new Date()}
					/>
				</div>
			))}
		</div>
	),
};

const sectionDividerStyle: React.CSSProperties = {
	border: 'none',
	borderTop: '1px solid var(--border, #e5e5e5)',
	margin: '32px 0 24px',
};

/**
 * [Date Picker 문서](https://ui.shadcn.com/docs/components/base/date-picker)와 동일한 조합 개념을 안내합니다.
 */
export const DatePickerDocsDivider: Story = {
	name: 'Date Picker ────────',
	parameters: {
		controls: { disable: true },
		docs: {
			description: {
				story:
					'[shadcn/ui Date Picker](https://ui.shadcn.com/docs/components/base/date-picker): Popover + Calendar 조합. 아래 스토리는 Popover 대신 포털 패널로 같은 패턴을 보여 줍니다.',
			},
		},
	},
	render: () => (
		<div style={{ maxWidth: 520, padding: '8px 4px', textAlign: 'left' }}>
			<hr style={sectionDividerStyle} />
			<h3 style={{ margin: '0 0 12px', fontSize: '1.05rem', fontWeight: 600 }}>Date Picker</h3>
			<p style={{ margin: '0 0 12px', fontSize: '14px', lineHeight: 1.55, color: 'var(--muted-foreground, #737373)' }}>
				shadcn/ui에서는 Popover 트리거 안에 <code style={{ fontSize: '0.9em' }}>Calendar</code>를 넣어 날짜를 고릅니다.
				자세한 코드는{' '}
				<a
					href="https://ui.shadcn.com/docs/components/base/date-picker"
					target="_blank"
					rel="noreferrer"
					style={{ color: 'var(--primary, #171717)', textDecoration: 'underline' }}
				>
					Date Picker 공식 문서
				</a>
				를 참고하세요.
			</p>
			<hr style={{ ...sectionDividerStyle, margin: '0' }} />
		</div>
	),
};

/**
 * 공식 문서의 기본 Date Picker에 가깝게: 아이콘 + `date-fns` 포맷, 빈 값일 때 플레이스홀더 스타일.
 */
export const DatePickerBasic: Story = {
	name: 'Date Picker — 단일',
	parameters: {
		controls: { disable: true },
		docs: {
			description: {
				story:
					'[기본 예시](https://ui.shadcn.com/docs/components/base/date-picker)와 같이 트리거에 선택된 날짜를 표시하고, 패널 안에 `mode="single"` Calendar를 둡니다.',
			},
		},
	},
	render: (args) => {
		const [open, setOpen] = React.useState(false);
		const [date, setDate] = React.useState<Date | undefined>();
		const close = React.useCallback(() => setOpen(false), []);
		const { triggerWrapRef, popoverRef, panelPos } = useAnchoredPopoverPanel(open, close);
		const empty = !date;

		const panel = open ? (
			<div
				ref={popoverRef}
				data-slot="popover-content"
				className="w-auto p-0"
				role="dialog"
				aria-label="날짜 선택"
				style={{
					...ANCHORED_POPOVER_PANEL_BOX_STYLE,
					top: panelPos.top,
					left: panelPos.left,
					padding: 0,
					width: 'auto',
				}}
			>
				<Calendar
					{...args}
					mode="single"
					selected={date}
					onSelect={(d) => {
						setDate(d);
						setOpen(false);
					}}
				/>
			</div>
		) : null;

		return (
			<div
				ref={triggerWrapRef}
				style={{ display: 'inline-block' }}
			>
				<Button
					type="button"
					variant="outline"
					data-empty={empty ? 'true' : undefined}
					className="justify-start gap-2 text-left font-normal data-empty:text-muted-foreground"
					onClick={() => setOpen((o) => !o)}
					aria-expanded={open}
					aria-haspopup="dialog"
				>
					<CalendarIcon
						className="size-4 shrink-0 opacity-70"
						aria-hidden
					/>
					{date ? format(date, 'PPP', { locale: ko }) : <span>날짜 선택</span>}
				</Button>
				{panel && typeof document !== 'undefined' ? createPortal(panel, document.body) : null}
			</div>
		);
	},
};

/**
 * 공식 문서의 Range Picker 예시와 같은 역할: 기간 선택 후 시작·종료가 모두 있으면 패널을 닫습니다.
 */
export const DatePickerRange: Story = {
	name: 'Date Picker — 기간',
	parameters: {
		controls: { disable: true },
		docs: {
			description: {
				story:
					'[Range Picker](https://ui.shadcn.com/docs/components/base/date-picker)처럼 `mode="range"`와 `DateRange` 상태를 사용합니다.',
			},
		},
	},
	render: (args) => {
		const [open, setOpen] = React.useState(false);
		const [range, setRange] = React.useState<DateRange | undefined>();
		const close = React.useCallback(() => setOpen(false), []);
		const { triggerWrapRef, popoverRef, panelPos } = useAnchoredPopoverPanel(open, close);
		const label =
			range?.from && range?.to
				? `${format(range.from, 'PPP', { locale: ko })} — ${format(range.to, 'PPP', { locale: ko })}`
				: null;

		const panel = open ? (
			<div
				ref={popoverRef}
				data-slot="popover-content"
				className="w-auto p-0"
				role="dialog"
				aria-label="기간 선택"
				style={{
					...ANCHORED_POPOVER_PANEL_BOX_STYLE,
					top: panelPos.top,
					left: panelPos.left,
					padding: 0,
					width: 'auto',
				}}
			>
				<Calendar
					{...args}
					mode="range"
					selected={range}
					onSelect={(r) => {
						setRange(r);
						if (r?.from && r?.to) setOpen(false);
					}}
				/>
			</div>
		) : null;

		return (
			<div
				ref={triggerWrapRef}
				style={{ display: 'inline-block' }}
			>
				<Button
					type="button"
					variant="outline"
					data-empty={!label ? 'true' : undefined}
					className="justify-start gap-2 text-left font-normal data-empty:text-muted-foreground"
					onClick={() => setOpen((o) => !o)}
					aria-expanded={open}
					aria-haspopup="dialog"
				>
					<CalendarIcon
						className="size-4 shrink-0 opacity-70"
						aria-hidden
					/>
					{label ?? <span>기간 선택</span>}
				</Button>
				{panel && typeof document !== 'undefined' ? createPortal(panel, document.body) : null}
			</div>
		);
	},
};
