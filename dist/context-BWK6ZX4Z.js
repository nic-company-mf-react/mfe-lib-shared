import { createContext as e, useContext as t, useEffect as n, useState as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/context/theme/ThemeContext.tsx
var a = e(void 0), o = () => {
	let e = t(a);
	if (!e) throw Error("useTheme must be used within a ThemeProvider");
	return e;
}, s = ({ children: e }) => {
	let [t, o] = r(() => localStorage.getItem("theme") || "light");
	return n(() => {
		let e = document.documentElement;
		t === "dark" ? e.classList.add("dark") : e.classList.remove("dark"), localStorage.setItem("theme", t);
	}, [t]), /* @__PURE__ */ i(a.Provider, {
		value: {
			theme: t,
			toggleTheme: () => {
				o((e) => e === "light" ? "dark" : "light");
			}
		},
		children: e
	});
};
//#endregion
export { o as n, s as t };
