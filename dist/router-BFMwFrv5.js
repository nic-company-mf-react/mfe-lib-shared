//#region src/utils/router/index.ts
function e(e) {
	return {
		push(t, n) {
			e.navigate(t, n);
		},
		replace(t, n) {
			e.navigate(t, {
				...n,
				replace: !0
			});
		},
		back() {
			e.navigate(-1);
		}
	};
}
function t(t) {
	window.$router = e(t);
}
//#endregion
export { t as n, e as t };
