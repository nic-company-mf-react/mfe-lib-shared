/**
 * ESLint 설정 Export
 *
 * - base: 모든 TypeScript/JavaScript 프로젝트에 공통으로 적용
 * - react: React 앱 전용 설정 (base 확장)
 * - vue: Vue 앱 전용 설정 (base 확장)
 *
 * @example
 * // React 앱
 * import reactConfig from '@nic/mfe-lib-shared/config/eslint/react'
 *
 * // TypeScript/JavaScript 패키지
 * import baseConfig from '@nic/mfe-lib-shared/config/eslint/base'
 */
export { default as base } from './base';
export { default as react } from './react';
export { default } from './react';
