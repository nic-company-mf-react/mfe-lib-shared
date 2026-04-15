import { useState } from 'react';
import ButtonPage from './pages/ui-component/ButtonPage';
import DataGridPage from './pages/grid/DataGrid';
import AccordionPage from './pages/ui-component/AccordionPage';

type PageKey = 'button' | 'accordion' | 'dataGrid';

const navItems: { key: PageKey; label: string; group: string }[] = [
	{ key: 'button', label: 'Button', group: 'UI Components' },
	{ key: 'accordion', label: 'Accordion', group: 'UI Components' },
	{ key: 'dataGrid', label: 'Data Grid', group: 'Grid' },
];

const pageMap: Record<PageKey, React.ReactNode> = {
	button: <ButtonPage />,
	accordion: <AccordionPage />,
	dataGrid: <DataGridPage />,
};

const groups = [...new Set(navItems.map((item) => item.group))];

export default function App() {
	const [currentPage, setCurrentPage] = useState<PageKey>('button');
	return (
		<div className="min-h-screen bg-background text-foreground">
			<header className="border-b px-6 py-4">
				<h1 className="text-xl font-semibold tracking-tight">
					@axiom/mfe-lib-shared <span className="text-muted-foreground font-normal">— Playground</span>
				</h1>
			</header>
			<div className="flex">
				<aside className="w-52 shrink-0 border-r min-h-[calc(100vh-57px)] p-4">
					<nav className="space-y-4">
						{groups.map((group) => (
							<div key={group}>
								<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 mb-1">{group}</p>
								<div className="space-y-0.5">
									{navItems
										.filter((item) => item.group === group)
										.map((item) => (
											<button
												key={item.key}
												onClick={() => setCurrentPage(item.key)}
												className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
													currentPage === item.key
														? 'bg-accent text-accent-foreground font-medium'
														: 'hover:bg-accent/50'
												}`}
											>
												{item.label}
											</button>
										))}
								</div>
							</div>
						))}
					</nav>
				</aside>
				<main className="flex-1 p-8">{pageMap[currentPage]}</main>
			</div>
		</div>
	);
}
