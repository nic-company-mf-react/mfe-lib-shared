import type { Preview } from '@storybook/react';
// @ts-expect-error
import '../stories/styles/global.css';

// Storybook 에서 URL 파라미터로 hideDocsToc 플래그 사용하기 위한 로직(BGN) =================================
function getHideDocsTocFlag(): boolean {
	if (typeof window === 'undefined') return false;
	const truthy = (v: string | null) => v === '1' || v === 'true' || v === 'yes';
	const fromSearch = (search: string) => truthy(new URLSearchParams(search).get('hideDocsToc'));
	if (fromSearch(window.location.search)) return true;
	try {
		if (window.parent !== window && window.parent.location?.search) {
			if (fromSearch(window.parent.location.search)) return true;
		}
	} catch {
		// 부모가 다른 오리진이면 접근 불가 — 임베드 URL에 쿼리가 iframe까지 안 넘어오면
		// postMessage 등 별도 연동이 필요할 수 있음
	}
	return false;
}
const hideDocsToc = getHideDocsTocFlag();
// Storybook 에서 URL 파라미터로 hideDocsToc 플래그 사용하기 위한 로직(END) =================================

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			toc: hideDocsToc ? false : true,
		},
		options: {
			storySort: {
				order: ['Getting Started', 'Components', 'Functions', '*'],
			},
		},
	},
};

export default preview;
