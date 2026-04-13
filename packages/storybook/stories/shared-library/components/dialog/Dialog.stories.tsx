import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import {
	Button,
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Input,
} from '@nic/mfe-lib-shared/components/ui';
import React from 'react';

const meta = {
	title: 'Components/Dialog',
	component: Dialog,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
\`Dialog\` 는 기본 창 위에 겹쳐지는 모달 대화상자 UI입니다. 열릴 때 뒤 콘텐츠는 비활성(inert) 처리되는 [Base UI Dialog](https://base-ui.com/react/components/dialog) 기반이며, 구성은 [shadcn/ui Dialog (Base UI)](https://ui.shadcn.com/docs/components/base/dialog) 문서와 동일한 패턴을 따릅니다.

공식 문서의 **폼 + Input** 예제는 \`Field\` / \`FieldGroup\` 컴포넌트로 묶지만, 이 패키지에는 해당 컴포넌트가 없어 동일한 레이아웃을 \`div\` 그리드와 \`label\` 로 구성한 스토리(\`프로필 편집 (폼·입력)\`, \`링크 공유 (입력)\`)로 대응합니다.

### 구성

\`Dialog\` → \`DialogTrigger\` + \`DialogContent\` → (\`DialogHeader\` → \`DialogTitle\`, \`DialogDescription\`) + \`DialogFooter\` (선택)

### 임포트

\`\`\`tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@nic/mfe-lib-shared/components/ui';
// 또는
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@nic/mfe-lib-shared/components';
\`\`\`

### 기본 사용법

\`\`\`tsx
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>제목</DialogTitle>
      <DialogDescription>설명</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
\`\`\`
`,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		defaultOpen: {
			control: 'boolean',
			description: '비제어 모드에서 초기 열림 여부',
			table: {
				defaultValue: { summary: 'false' },
			},
		},
		open: {
			control: 'boolean',
			description: '제어(controlled) 모드에서 열림 여부 (`defaultOpen`과 동시 사용 지양)',
		},
		modal: {
			control: 'select',
			options: [true, false, 'trap-focus'],
			description:
				'모달 동작: `true`면 포커스 트랩·스크롤 잠금·외부 클릭 차단, `false`면 비모달, `trap-focus`는 포커스만 트랩',
			table: {
				defaultValue: { summary: 'true' },
			},
		},
		disablePointerDismissal: {
			control: 'boolean',
			description: '바깥 영역 클릭으로 닫히지 않게 할지 여부',
			table: {
				defaultValue: { summary: 'false' },
			},
		},
		onOpenChange: {
			action: 'openChange',
			description: '열림/닫힘 상태가 바뀔 때 호출됩니다.',
		},
		onOpenChangeComplete: {
			action: 'openChangeComplete',
			description: '애니메이션까지 끝난 뒤 열림/닫힘 완료 시 호출됩니다.',
		},
	},
	args: {
		defaultOpen: false,
		modal: true,
		disablePointerDismissal: false,
		onOpenChange: fn(),
	},
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 트리거로 열고 닫는 기본 대화상자입니다.
 */
export const Default: Story = {
	name: 'Default',
	args: {
		defaultOpen: false,
	},
	render: (args) => (
		<Dialog {...args}>
			<DialogTrigger render={<Button variant="default" />}>대화상자 열기</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>정말 진행하시겠습니까?</DialogTitle>
					<DialogDescription>
						이 작업은 되돌릴 수 없습니다. 계정이 영구 삭제되고 서버에서 데이터가 제거됩니다.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	),
};

/**
 * [shadcn/ui 문서의 DialogDemo](https://ui.shadcn.com/docs/components/base/dialog)처럼 `form` 안에 트리거·본문·저장 버튼을 두는 복합 UI입니다. 공식 예제의 `Field` / `FieldGroup` 대신 `label` + 그리드로 같은 레이아웃을 맞췄습니다.
 */
export const EditProfileForm: Story = {
	name: '프로필 편집 (폼·입력)',
	parameters: {
		controls: { disable: true },
		docs: {
			description: {
				story:
					'공식 문서는 `Field`, `FieldGroup`으로 필드를 묶습니다. 이 라이브러리에는 해당 컴포넌트가 없어 시맨틱 `label`과 간격 유틸로 동일한 패턴을 재현했습니다.',
			},
			source: {
				code: `
<Dialog>
  <form onSubmit={(e) => { e.preventDefault(); /* 저장 처리 */ }}>
    <DialogTrigger render={<Button variant="outline" />}>Open Dialog</DialogTrigger>
    <DialogContent className="sm:max-w-sm">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>변경 후 저장을 누르세요.</DialogDescription>
      </DialogHeader>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium leading-none">Name</label>
          <Input id="name" name="name" defaultValue="Pedro Duarte" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="username" className="text-sm font-medium leading-none">Username</label>
          <Input id="username" name="username" defaultValue="@peduarte" />
        </div>
      </div>
      <DialogFooter>
        <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </form>
</Dialog>
`,
			},
		},
	},
	render: () => (
		<Dialog>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					alert('저장(데모): 실제 앱에서는 API 등으로 처리하면 됩니다.');
				}}
			>
				<DialogTrigger render={<Button variant="outline" />}>프로필 편집</DialogTrigger>
				<DialogContent className="sm:max-w-sm">
					<DialogHeader>
						<DialogTitle>프로필 편집</DialogTitle>
						<DialogDescription>여기서 프로필을 수정한 뒤 저장을 누르세요.</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4">
						<div className="grid gap-2">
							<label
								htmlFor="dialog-profile-name"
								className="text-sm leading-none font-medium"
							>
								이름
							</label>
							<Input
								id="dialog-profile-name"
								name="name"
								defaultValue="Pedro Duarte"
								autoComplete="name"
							/>
						</div>
						<div className="grid gap-2">
							<label
								htmlFor="dialog-profile-username"
								className="text-sm leading-none font-medium"
							>
								사용자 이름
							</label>
							<Input
								id="dialog-profile-username"
								name="username"
								defaultValue="@peduarte"
								autoComplete="username"
							/>
						</div>
					</div>
					<DialogFooter>
						<DialogClose render={<Button variant="outline" />}>취소</DialogClose>
						<Button type="submit">저장</Button>
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	),
};

/**
 * [문서의 Custom Close Button(링크 공유) 예제](https://ui.shadcn.com/docs/components/base/dialog)와 같이 읽기 전용 입력과 하단 닫기 버튼만 둡니다.
 */
export const ShareLinkWithInput: Story = {
	name: '링크 공유 (입력)',
	parameters: {
		controls: { disable: true },
		docs: {
			source: {
				code: `
<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>Share</DialogTrigger>
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>Share link</DialogTitle>
      <DialogDescription>이 링크를 아는 사람은 누구나 볼 수 있습니다.</DialogDescription>
    </DialogHeader>
    <div className="flex items-center gap-2">
      <div className="grid flex-1 gap-2">
        <label htmlFor="link" className="sr-only">Link</label>
        <Input id="link" defaultValue="https://…" readOnly />
      </div>
    </div>
    <DialogFooter className="sm:justify-start">
      <DialogClose render={<Button type="button" />}>Close</DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
`,
			},
		},
	},
	render: () => (
		<Dialog>
			<DialogTrigger render={<Button variant="outline" />}>링크 공유</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>링크 공유</DialogTitle>
					<DialogDescription>이 링크를 아는 사람은 누구나 내용을 볼 수 있습니다.</DialogDescription>
				</DialogHeader>
				<div className="flex items-center gap-2">
					<div className="grid flex-1 gap-2">
						<label
							htmlFor="dialog-share-link"
							className="sr-only"
						>
							링크
						</label>
						<Input
							id="dialog-share-link"
							defaultValue="https://ui.shadcn.com/docs/installation"
							readOnly
						/>
					</div>
				</div>
				<DialogFooter className="sm:justify-start">
					<DialogClose render={<Button type="button" />}>닫기</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
};

/**
 * 기본 우측 상단 닫기 버튼을 숨기고, 하단 액션으로만 닫습니다. ([문서: No Close Button](https://ui.shadcn.com/docs/components/base/dialog))
 */
export const NoCloseButton: Story = {
	name: '닫기 버튼 없음',
	parameters: {
		docs: {
			source: {
				code: `
<Dialog>
  <DialogTrigger render={<Button />}>열기</DialogTrigger>
  <DialogContent showCloseButton={false}>
    <DialogHeader>
      <DialogTitle>확인</DialogTitle>
      <DialogDescription>하단 버튼으로만 닫을 수 있습니다.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose render={<Button variant="outline" />}>닫기</DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
`,
			},
		},
	},
	render: () => (
		<Dialog>
			<DialogTrigger render={<Button variant="default" />}>열기</DialogTrigger>
			<DialogContent showCloseButton={false}>
				<DialogHeader>
					<DialogTitle>확인</DialogTitle>
					<DialogDescription>하단 버튼으로만 닫을 수 있습니다.</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<DialogClose render={<Button variant="outline" />}>닫기</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
};

/**
 * 기본 우측 상단 X 대신 헤더 안에 별도 닫기 컨트롤을 두는 변형입니다. 공식 문서 제목이 같은 **링크 + Input** 예제는 `링크 공유 (입력)` 스토리를 참고하세요. ([Dialog 문서](https://ui.shadcn.com/docs/components/base/dialog))
 */
export const CustomCloseButton: Story = {
	name: '헤더 사용자 정의 닫기',
	parameters: {
		docs: {
			source: {
				code: `
<Dialog>
  <DialogTrigger render={<Button />}>열기</DialogTrigger>
  <DialogContent showCloseButton={false}>
    <DialogHeader className="flex-row items-start justify-between space-y-0">
      <div className="space-y-2 pr-8">
        <DialogTitle>공유</DialogTitle>
        <DialogDescription>링크를 복사하거나 닫을 수 있습니다.</DialogDescription>
      </div>
      <DialogClose render={<Button variant="ghost" size="icon-sm" />}>
        ✕
      </DialogClose>
    </DialogHeader>
  </DialogContent>
</Dialog>
`,
			},
		},
	},
	render: () => (
		<Dialog>
			<DialogTrigger render={<Button variant="default" />}>열기</DialogTrigger>
			<DialogContent
				className="sm:max-w-md"
				showCloseButton={false}
			>
				<DialogHeader className="flex-row items-start justify-between space-y-0">
					<div className="space-y-2 pr-8">
						<DialogTitle>공유</DialogTitle>
						<DialogDescription>링크를 복사하거나 우측 버튼으로 닫을 수 있습니다.</DialogDescription>
					</div>
					<DialogClose
						render={
							<Button
								variant="ghost"
								size="icon-sm"
							/>
						}
					>
						✕
					</DialogClose>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	),
};

/**
 * 본문은 스크롤하고 푸터는 하단에 고정해 액션이 항상 보이게 합니다. ([문서: Sticky Footer](https://ui.shadcn.com/docs/components/base/dialog))
 */
export const StickyFooter: Story = {
	name: '고정 푸터',
	parameters: {
		controls: { disable: true },
		docs: {
			source: {
				code: `
<Dialog>
  <DialogTrigger render={<Button />}>열기</DialogTrigger>
  <DialogContent className="flex max-h-[min(80vh,520px)] flex-col gap-0 overflow-hidden p-0 sm:max-w-md">
    <DialogHeader className="shrink-0 border-b px-4 pt-4 pb-2">
      <DialogTitle>약관 동의</DialogTitle>
      <DialogDescription>아래 내용을 확인한 뒤 동의해 주세요.</DialogDescription>
    </DialogHeader>
    <div className="min-h-0 flex-1 overflow-y-auto px-4 py-3 text-sm text-muted-foreground">
      {/* 긴 본문 */}
    </div>
    <DialogFooter className="shrink-0 border-t-0 sm:justify-end">
      <DialogClose render={<Button variant="outline" />}>취소</DialogClose>
      <Button>동의</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
`,
			},
		},
	},
	render: () => (
		<Dialog>
			<DialogTrigger render={<Button variant="default" />}>열기</DialogTrigger>
			<DialogContent className="flex max-h-[min(80vh,520px)] flex-col gap-0 overflow-hidden p-0 sm:max-w-md">
				<DialogHeader className="shrink-0 border-b px-4 pt-4 pb-2">
					<DialogTitle>약관 동의</DialogTitle>
					<DialogDescription>아래 내용을 확인한 뒤 동의해 주세요.</DialogDescription>
				</DialogHeader>
				<div className="min-h-0 flex-1 overflow-y-auto px-4 py-3 text-sm text-muted-foreground">
					{Array.from({ length: 12 }, (_, i) => (
						<p
							key={i}
							className="mb-3"
						>
							{i + 1}. 서비스 이용과 관련된 안내 문단입니다. 스크롤하면 헤더는 유지되고 이 영역만 움직입니다.
						</p>
					))}
				</div>
				<DialogFooter className="mx-0 mb-0 shrink-0 rounded-none border-t bg-muted/50 sm:justify-end">
					<DialogClose render={<Button variant="outline" />}>취소</DialogClose>
					<Button>동의</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
};

/**
 * 긴 본문이 스크롤되는 예시입니다. ([문서: Scrollable Content](https://ui.shadcn.com/docs/components/base/dialog))
 */
export const ScrollableContent: Story = {
	name: '스크롤 본문',
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<Dialog>
			<DialogTrigger render={<Button variant="default" />}>긴 내용 보기</DialogTrigger>
			<DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
				<DialogHeader>
					<DialogTitle>긴 콘텐츠</DialogTitle>
					<DialogDescription>헤더 아래 영역 전체가 스크롤됩니다.</DialogDescription>
				</DialogHeader>
				<div className="space-y-3 text-sm text-muted-foreground">
					{Array.from({ length: 20 }, (_, i) => (
						<p key={i}>문단 {i + 1}. 스크롤 테스트용 텍스트입니다.</p>
					))}
				</div>
			</DialogContent>
		</Dialog>
	),
};

/**
 * `open` / `onOpenChange` 로 열림 상태를 제어합니다.
 */
export const Controlled: Story = {
	args: {
		defaultOpen: true,
	},

	name: '제어 모드',

	parameters: {
		docs: {
			source: {
				code: `
const [open, setOpen] = React.useState(false);

<>
  <Button type="button" variant="outline" onClick={() => setOpen(true)}>
    외부에서 열기
  </Button>
  <Dialog open={open} onOpenChange={setOpen}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>제어 모드</DialogTitle>
        <DialogDescription>상태는 부모에서 관리합니다.</DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose render={<Button variant="outline" />}>닫기</DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</>
`,
			},
		},
	},

	render: () => {
		const [open, setOpen] = React.useState(false);
		return (
			<div className="flex flex-col items-center gap-4">
				<Button
					type="button"
					variant="outline"
					onClick={() => setOpen(true)}
				>
					외부에서 열기
				</Button>
				<p className="text-sm text-muted-foreground">열림: {open ? '예' : '아니오'}</p>
				<Dialog
					open={open}
					onOpenChange={setOpen}
				>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>제어 모드</DialogTitle>
							<DialogDescription>트리거 없이 코드로 연 대화상자입니다.</DialogDescription>
						</DialogHeader>
						<DialogFooter>
							<DialogClose render={<Button variant="outline" />}>닫기</DialogClose>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		);
	},
};
