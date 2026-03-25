import { Linter } from 'eslint';
/**
 * React 앱 전용 ESLint 설정
 * base 설정을 확장하고 React 관련 규칙 추가
 */
declare const reactConfig: Linter.Config[];
export default reactConfig;
