/**
 * ThemeContext.tsx
 *
 * 라이트/다크 테마 상태를 전역으로 관리하는 React Context 모듈.
 * - ThemeProvider: 하위 컴포넌트에 테마 상태(theme)와 토글 함수(toggleTheme)를 제공하며,
 *   localStorage를 통해 테마 설정을 유지하고 <html> 요소에 'dark' 클래스를 동적으로 적용한다.
 * - useTheme: ThemeProvider 하위에서 현재 테마와 토글 함수를 사용할 수 있는 커스텀 훅.
 */
type Theme = 'light' | 'dark';
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};
export declare const useTheme: () => ThemeContextType;
export declare const ThemeProvider: React.FC<{
    children: React.ReactNode;
}>;
export {};
