import { useState, type ReactNode } from 'react';
import { Button } from '@axiom/mfe-lib-shared/components/ui';

function Section({ title, children }: { title: string; children: ReactNode }) {
	return (
		<section className="space-y-3">
			<h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider border-b pb-2">{title}</h2>
			{children}
		</section>
	);
}

function InteractiveExample() {
	const [count, setCount] = useState(0);
	return (
		<div className="flex flex-col items-center gap-3">
			<p className="text-sm text-muted-foreground">
				클릭 횟수: <span className="font-semibold text-foreground">{count}</span>
			</p>
			<div className="flex gap-2">
				<Button
					variant="default"
					onClick={() => setCount((c) => c + 1)}
				>
					증가
				</Button>
				<Button
					variant="outline"
					onClick={() => setCount(0)}
				>
					초기화
				</Button>
			</div>
		</div>
	);
}

export default function ButtonPage(): ReactNode {
	return (
		<div className="space-y-10 max-w-2xl">
			<div>
				<h1 className="text-2xl font-bold tracking-tight">Button</h1>
				<p className="text-sm text-muted-foreground mt-1">
					<code className="bg-muted px-1 rounded text-xs">@axiom/mfe-lib-shared</code> 에서 제공하는 기본 버튼
					컴포넌트입니다.
				</p>
			</div>

			<Section title="인터랙티브 예시">
				<div className="rounded-lg border p-6 flex justify-center">
					<InteractiveExample />
				</div>
			</Section>

			<Section title="모든 Variant 비교">
				<div className="rounded-lg border p-6 flex flex-wrap gap-3 items-center">
					<Button variant="default">Primary</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="outline">Outline</Button>
					<Button variant="ghost">Ghost</Button>
					<Button variant="destructive">Destructive</Button>
				</div>
			</Section>

			<Section title="모든 Size 비교">
				<div className="rounded-lg border p-6 flex flex-wrap gap-3 items-center">
					<Button size="xs">XSmall</Button>
					<Button size="sm">Small</Button>
					<Button size="default">Default</Button>
					<Button size="lg">Large</Button>
				</div>
			</Section>

			<Section title="Disabled 상태 비교">
				<div className="rounded-lg border p-6 flex flex-wrap gap-3 items-center">
					<Button
						variant="default"
						disabled
					>
						Primary
					</Button>
					<Button
						variant="secondary"
						disabled
					>
						Secondary
					</Button>
					<Button
						variant="outline"
						disabled
					>
						Outline
					</Button>
				</div>
			</Section>
		</div>
	);
}
