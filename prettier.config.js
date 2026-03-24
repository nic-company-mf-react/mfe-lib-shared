import sharedConfig from './dist/config/prettier/index.js';

/**
 * Prettier 설정
 * 공유 라이브러리 자체 코드에 대한 포맷팅 설정
 * 
 * @type {import('prettier').Config}
 */
export default {
	...sharedConfig,
	// 필요시 이 패키지에만 적용할 추가 설정
};
