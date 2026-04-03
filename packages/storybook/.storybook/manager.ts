import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';
addons.setConfig({
	theme: create({
		base: 'light', // 또는 'dark'
		// 로고 옆 브랜드 이름 (텍스트)
		brandTitle: 'Shared Library Reference',
		// 브랜드 로고 이미지 URL
		brandImage: '/logo-with-text.svg', // public 폴더 기준 경로 또는 외부 URL
		// 브랜드 클릭 시 이동할 URL
		brandUrl: 'https://example.com',
		// 브랜드 타겟 (새 탭 여부)
		brandTarget: '_blank',
	}),
});
