import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		port: 6007,
	},
	resolve: {
		alias: {
			// 순서가 중요. 더 구체적인 경로가 더 높은 우선순위를 가짐
			'@axiom/mfe-lib-shared/components/ui': path.resolve(__dirname, '../../src/components/shadcn/ui/index.ts'),
			'@axiom/mfe-lib-shared/components': path.resolve(__dirname, '../../src/components/index.ts'),
			'@axiom/mfe-lib-shared/styles': path.resolve(__dirname, '../../src/styles/index.css'), // CSS 서브패스 전용
			// HMR을 위해 빌드된 dist가 아닌 라이브러리 src를 직접 참조
			'@axiom/mfe-lib-shared': path.resolve(__dirname, '../../src/index.ts'),
			'@': path.resolve(__dirname, '../../src'),
		},
	},
});
