import { createContext, useContext, useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/context/theme/ThemeContext.tsx
/**
* ThemeContext.tsx
*
* 라이트/다크 테마 상태를 전역으로 관리하는 React Context 모듈.
* - ThemeProvider: 하위 컴포넌트에 테마 상태(theme)와 토글 함수(toggleTheme)를 제공하며,
*   localStorage를 통해 테마 설정을 유지하고 <html> 요소에 'dark' 클래스를 동적으로 적용한다.
* - useTheme: ThemeProvider 하위에서 현재 테마와 토글 함수를 사용할 수 있는 커스텀 훅.
*/
var ThemeContext = createContext(void 0);
var useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) throw new Error("useTheme must be used within a ThemeProvider");
	return context;
};
var ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem("theme") || "light";
	});
	useEffect(() => {
		const root = document.documentElement;
		if (theme === "dark") root.classList.add("dark");
		else root.classList.remove("dark");
		localStorage.setItem("theme", theme);
	}, [theme]);
	const toggleTheme = () => {
		setTheme((prev) => prev === "light" ? "dark" : "light");
	};
	return /* @__PURE__ */ jsx(ThemeContext.Provider, {
		value: {
			theme,
			toggleTheme
		},
		children
	});
};
//#endregion
export { useTheme as n, ThemeProvider as t };
