//#region src/utils/router/index.ts
function createWindowRouter(router) {
	return {
		push(to, options) {
			router.navigate(to, options);
		},
		replace(to, options) {
			router.navigate(to, {
				...options,
				replace: true
			});
		},
		back() {
			router.navigate(-1);
		}
	};
}
function registerWindowRouter(router) {
	window.$router = createWindowRouter(router);
}
//#endregion
export { registerWindowRouter as n, createWindowRouter as t };
