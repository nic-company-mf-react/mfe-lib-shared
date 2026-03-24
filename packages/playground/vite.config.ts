import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			// HMR을 위해 빌드된 dist가 아닌 라이브러리 src를 직접 참조
			'@nic/mfe-lib-shared': path.resolve(__dirname, '../../src/index.ts'),
			'@': path.resolve(__dirname, '../../src'),
		},
	},
});
