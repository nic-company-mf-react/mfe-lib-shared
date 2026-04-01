import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import path from 'path';
import remarkGfm from 'remark-gfm';
import tailwindcss from '@tailwindcss/vite';

const __dirname = import.meta.dirname;

const config: StorybookConfig = {
	stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		{
			name: '@storybook/addon-docs',
			options: {
				mdxPluginOptions: {
					mdxCompileOptions: {
						remarkPlugins: [remarkGfm],
					},
				},
			},
		},
		'@storybook/addon-a11y',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	// storybook 10.3.3 버전에서 삭제되었습니다.
	//docs: {
	//	autodocs: 'tag',
	//},
	async viteFinal(config) {
		return mergeConfig(config, {
			plugins: [tailwindcss()],
			resolve: {
				alias: [
					{
						find: '@nic/mfe-lib-shared/components/ui',
						replacement: path.resolve(__dirname, '../../../src/components/shadcn/ui'),
					},
					{
						find: '@nic/mfe-lib-shared/components',
						replacement: path.resolve(__dirname, '../../../src/components'),
					},
					{
						find: '@nic/mfe-lib-shared/utils',
						replacement: path.resolve(__dirname, '../../../src/utils'),
					},
					{
						find: '@nic/mfe-lib-shared/hooks',
						replacement: path.resolve(__dirname, '../../../src/hooks'),
					},
					{
						find: '@nic/mfe-lib-shared/types',
						replacement: path.resolve(__dirname, '../../../src/types'),
					},
					{
						find: '@nic/mfe-lib-shared/context',
						replacement: path.resolve(__dirname, '../../../src/context'),
					},
					{
						find: '@nic/mfe-lib-shared/api',
						replacement: path.resolve(__dirname, '../../../src/api'),
					},
					{
						find: '@nic/mfe-lib-shared/query',
						replacement: path.resolve(__dirname, '../../../src/query'),
					},
					{
						find: '@nic/mfe-lib-shared/i18n',
						replacement: path.resolve(__dirname, '../../../src/i18n'),
					},
					{
						find: '@nic/mfe-lib-shared/config/eslint',
						replacement: path.resolve(__dirname, '../../../src/config/eslint'),
					},
					{
						find: '@nic/mfe-lib-shared/config/prettier',
						replacement: path.resolve(__dirname, '../../../src/config/prettier'),
					},
					{
						find: '@nic/mfe-lib-shared',
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
