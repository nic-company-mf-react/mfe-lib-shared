import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy'; // 파일그대로 배포하기위한 패키지지

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		dts({
			include: ['src'],
			insertTypesEntry: true,
			tsconfigPath: './tsconfig.app.json', // 직접 tsconfig.json 옵션파일을 연결해야함
		}),
		viteStaticCopy({
			// 추가
			targets: [
				{
					src: 'src/styles/**/*.css',
					dest: 'styles',
				},
			],
		}),
	],
	build: {
		// minify: false — 라이브러리는 식별자를 축약하지 않아야 합니다.
		// Vite 8(Rolldown)은 기본적으로 minify를 활성화하는데, 단일 알파벳으로 축약된
		// import alias 와 export name 이 겹치면 소비자(mfe-app-main)의 Rolldown 이
		// `import { t } from 'react'` 처럼 잘못된 코드를 생성합니다.
		minify: false,
		lib: {
			entry: {
				// JS/TS entries
				index: resolve(__dirname, 'src/index.ts'),
				'config/eslint/index': resolve(__dirname, 'src/config/eslint/index.ts'),
				'config/eslint/base': resolve(__dirname, 'src/config/eslint/base.ts'),
				'config/eslint/react': resolve(__dirname, 'src/config/eslint/react.ts'),
				'config/prettier/index': resolve(__dirname, 'src/config/prettier/index.ts'),
				'components/index': resolve(__dirname, 'src/components/index.ts'),
				'components/ui/index': resolve(__dirname, 'src/components/shadcn/ui/index.ts'),
				'types/index': resolve(__dirname, 'src/types/index.ts'),
				'context/index': resolve(__dirname, 'src/context/index.ts'),
				'dayjs/index': resolve(__dirname, 'src/dayjs/index.ts'),
				'utils/index': resolve(__dirname, 'src/utils/index.ts'),
				'hooks/index': resolve(__dirname, 'src/hooks/index.ts'),
				'api/index': resolve(__dirname, 'src/api/index.ts'),
				'query/index': resolve(__dirname, 'src/query/index.ts'),
				'i18n/index': resolve(__dirname, 'src/i18n/index.ts'),
			},
			formats: ['es', 'cjs'],
			//fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'js' : 'cjs'}`,
		},
		rollupOptions: {
			preserveEntrySignatures: 'strict',
			output: [
				{
					format: 'es',
					chunkFileNames: 'chunks/[name]-[hash].js',
					entryFileNames: (chunkInfo) => `${chunkInfo.name}.js`,
				},
				{
					format: 'cjs',
					chunkFileNames: 'chunks/[name]-[hash].cjs',
					entryFileNames: (chunkInfo) => `${chunkInfo.name}.cjs`,
				},
			],
			external: [
				// ← 번들링 방지
				'react',
				'react-dom',
				'react/jsx-runtime',
				'react-router',
				// ESLint
				'eslint',
				'@eslint/js',
				'globals',
				'typescript-eslint',
				'eslint-config-prettier',
				'eslint-plugin-react',
				'eslint-plugin-react-hooks',
				'eslint-plugin-react-refresh',
				'eslint-plugin-import-x',
				// Prettier
				'prettier',
				// API
				'axios',
				'dayjs',
				/^dayjs\/.*/,
				'@tanstack/react-query',
				'react-helmet-async',
				'@tanstack/react-query-devtools',
				// i18n
				'i18next',
				'react-i18next',
				'zustand',
				'zustand/react',
				'@base-ui/react',        // ← 추가
    		/^@base-ui\/react\/.*/,  // ← 서브패스 전체 (combobox, select, popover 등)
			],
		},
		cssCodeSplit: false,
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
});
