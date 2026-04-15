// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import path, { dirname } from 'path';
import remarkGfm from 'remark-gfm';
import tailwindcss from '@tailwindcss/vite';

const __filename = fileURLToPath(import.meta.url);

const __dirname = import.meta.dirname;

const config: StorybookConfig = {
	staticDirs: ['../public'],
	stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		{
			name: getAbsolutePath('@storybook/addon-docs'),
			options: {
				mdxPluginOptions: {
					mdxCompileOptions: {
						remarkPlugins: [remarkGfm],
					},
				},
			},
		},
		getAbsolutePath('@storybook/addon-a11y'),
	],
	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {},
	},
	// storybook 10.3.3 버전에서 삭제되었습니다. 각 stories.tsx 파일에서 tags: ['autodocs'] 주석처리 해야함
	//docs: {
	//	autodocs: 'tag',
	//},
	async viteFinal(config, { configType }) {
		return mergeConfig(config, {
			base: configType === 'PRODUCTION' ? '/2026/mfe-multirepo/storybook/' : '/',
			plugins: [tailwindcss()],
			resolve: {
				alias: [
					{
						find: '@axiom/mfe-lib-shared/components/ui',
						replacement: path.resolve(__dirname, '../../../src/components/shadcn/ui'),
					},
					{
						find: '@axiom/mfe-lib-shared/components',
						replacement: path.resolve(__dirname, '../../../src/components'),
					},
					{
						find: '@axiom/mfe-lib-shared/utils',
						replacement: path.resolve(__dirname, '../../../src/utils'),
					},
					{
						find: '@axiom/mfe-lib-shared/hooks',
						replacement: path.resolve(__dirname, '../../../src/hooks'),
					},
					{
						find: '@axiom/mfe-lib-shared/types',
						replacement: path.resolve(__dirname, '../../../src/types'),
					},
					{
						find: '@axiom/mfe-lib-shared/context',
						replacement: path.resolve(__dirname, '../../../src/context'),
					},
					{
						find: '@axiom/mfe-lib-shared/api',
						replacement: path.resolve(__dirname, '../../../src/api'),
					},
					{
						find: '@axiom/mfe-lib-shared/query',
						replacement: path.resolve(__dirname, '../../../src/query'),
					},
					{
						find: '@axiom/mfe-lib-shared/i18n',
						replacement: path.resolve(__dirname, '../../../src/i18n'),
					},
					{
						find: '@axiom/mfe-lib-shared/config/eslint',
						replacement: path.resolve(__dirname, '../../../src/config/eslint'),
					},
					{
						find: '@axiom/mfe-lib-shared/config/prettier',
						replacement: path.resolve(__dirname, '../../../src/config/prettier'),
					},
					{
						find: '@axiom/mfe-lib-shared',
						replacement: path.resolve(__dirname, '../../../src'),
					},
					{
						find: '@/',
						replacement: path.resolve(__dirname, '../../../src') + '/',
					},
				],
			},
		});
	},
};

export default config;

function getAbsolutePath(value: string): any {
	return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
