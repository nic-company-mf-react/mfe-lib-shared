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
			},
			formats: ['es', 'cjs'],
			fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'js' : 'cjs'}`,
		},
		rollupOptions: {
			external: [
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
