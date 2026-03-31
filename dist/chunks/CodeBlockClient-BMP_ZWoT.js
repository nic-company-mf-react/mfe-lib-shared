import { t as e } from "./context-DNTMqTFZ.js";
import { t } from "./I18nProvider-CyN92AHK.js";
import { useEffect as n, useState as r } from "react";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
import { HelmetProvider as s } from "react-helmet-async";
import { QueryClient as c, QueryClientProvider as l } from "@tanstack/react-query";
import { ReactQueryDevtools as u } from "@tanstack/react-query-devtools";
//#region \0rolldown/runtime.js
var d = Object.defineProperty, f = (e, t) => {
	let n = {};
	for (var r in e) d(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || d(n, Symbol.toStringTag, { value: "Module" }), n;
}, p = {
	queries: {
		retry: 0,
		refetchOnWindowFocus: !0,
		refetchOnReconnect: !0,
		staleTime: 0,
		gcTime: 0
	},
	mutations: { retry: 0 }
};
function m(e) {
	return new c({
		...e,
		defaultOptions: {
			...p,
			...e?.defaultOptions || {}
		}
	});
}
var h = void 0;
function g(e) {
	return typeof window > "u" ? m(e) : (h ||= m(e), h);
}
//#endregion
//#region src/components/providers/AppProviders.tsx
function _({ children: i, queryConfig: c, i18nInstance: d }) {
	let [f] = r(() => g(c));
	return n(() => {
		window.__TANSTACK_QUERY_CLIENT__ = f;
	}, [f]), /* @__PURE__ */ a(e, { children: /* @__PURE__ */ a(t, {
		i18n: d,
		children: /* @__PURE__ */ a(s, { children: /* @__PURE__ */ o(l, {
			client: f,
			children: [i, process.env.NODE_ENV === "development" && /* @__PURE__ */ a(u, { initialIsOpen: !1 })]
		}) })
	}) });
}
//#endregion
//#region node_modules/shiki/dist/chunk-CtajNgzt.mjs
var v = Object.defineProperty, ee = Object.getOwnPropertyDescriptor, te = Object.getOwnPropertyNames, ne = Object.prototype.hasOwnProperty, re = (e, t) => {
	let n = {};
	for (var r in e) v(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || v(n, Symbol.toStringTag, { value: "Module" }), n;
}, ie = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = te(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !ne.call(e, s) && s !== n && v(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = ee(t, s)) || r.enumerable
	});
	return e;
}, ae = (e, t, n) => (ie(e, t, "default"), n && ie(n, t, "default")), oe = [
	{
		id: "abap",
		name: "ABAP",
		import: (() => import("./abap-Gkwtvjb2.js"))
	},
	{
		id: "actionscript-3",
		name: "ActionScript",
		import: (() => import("./actionscript-3-BFWE1HB3.js"))
	},
	{
		id: "ada",
		name: "Ada",
		import: (() => import("./ada-CKeKC5mm.js"))
	},
	{
		id: "angular-html",
		name: "Angular HTML",
		import: (() => import("./angular-html-DJ7he1AL.js").then((e) => e.n))
	},
	{
		id: "angular-ts",
		name: "Angular TypeScript",
		import: (() => import("./angular-ts-CrqxmEhA.js"))
	},
	{
		id: "apache",
		name: "Apache Conf",
		import: (() => import("./apache-BGY1muA_.js"))
	},
	{
		id: "apex",
		name: "Apex",
		import: (() => import("./apex-BesH6h66.js"))
	},
	{
		id: "apl",
		name: "APL",
		import: (() => import("./apl-BjVIPJgg.js"))
	},
	{
		id: "applescript",
		name: "AppleScript",
		import: (() => import("./applescript-DiocAMvl.js"))
	},
	{
		id: "ara",
		name: "Ara",
		import: (() => import("./ara-DVdQsDpS.js"))
	},
	{
		id: "asciidoc",
		name: "AsciiDoc",
		aliases: ["adoc"],
		import: (() => import("./asciidoc-DOfwgmfd.js"))
	},
	{
		id: "asm",
		name: "Assembly",
		import: (() => import("./asm-Crz3Ku8e.js"))
	},
	{
		id: "astro",
		name: "Astro",
		import: (() => import("./astro-CDMSFzBR.js"))
	},
	{
		id: "awk",
		name: "AWK",
		import: (() => import("./awk-9MzMJEsQ.js"))
	},
	{
		id: "ballerina",
		name: "Ballerina",
		import: (() => import("./ballerina-CNSQ2O2g.js"))
	},
	{
		id: "bat",
		name: "Batch File",
		aliases: ["batch"],
		import: (() => import("./bat-BLFkWb4T.js"))
	},
	{
		id: "beancount",
		name: "Beancount",
		import: (() => import("./beancount-DTvsBwb2.js"))
	},
	{
		id: "berry",
		name: "Berry",
		aliases: ["be"],
		import: (() => import("./berry-Ta7gz0E2.js"))
	},
	{
		id: "bibtex",
		name: "BibTeX",
		import: (() => import("./bibtex-C6amhuCX.js"))
	},
	{
		id: "bicep",
		name: "Bicep",
		import: (() => import("./bicep-B0ui70nr.js"))
	},
	{
		id: "bird2",
		name: "BIRD2 Configuration",
		aliases: ["bird"],
		import: (() => import("./bird2-CeB5KJIx.js"))
	},
	{
		id: "blade",
		name: "Blade",
		import: (() => import("./blade-BafPhPGT.js"))
	},
	{
		id: "bsl",
		name: "1C (Enterprise)",
		aliases: ["1c"],
		import: (() => import("./bsl-ClPEKCSx.js"))
	},
	{
		id: "c",
		name: "C",
		import: (() => import("./c-CeBLTQYF.js").then((e) => e.n))
	},
	{
		id: "c3",
		name: "C3",
		import: (() => import("./c3-W_jJ3uDL.js"))
	},
	{
		id: "cadence",
		name: "Cadence",
		aliases: ["cdc"],
		import: (() => import("./cadence-a_wu1kix.js"))
	},
	{
		id: "cairo",
		name: "Cairo",
		import: (() => import("./cairo-mPYK4zQB.js"))
	},
	{
		id: "clarity",
		name: "Clarity",
		import: (() => import("./clarity-6KiQc5Wk.js"))
	},
	{
		id: "clojure",
		name: "Clojure",
		aliases: ["clj"],
		import: (() => import("./clojure-nc2l8eFz.js"))
	},
	{
		id: "cmake",
		name: "CMake",
		import: (() => import("./cmake-i0b7BhS5.js"))
	},
	{
		id: "cobol",
		name: "COBOL",
		import: (() => import("./cobol-Dwm_b-rV.js"))
	},
	{
		id: "codeowners",
		name: "CODEOWNERS",
		import: (() => import("./codeowners-hBkgKEzQ.js"))
	},
	{
		id: "codeql",
		name: "CodeQL",
		aliases: ["ql"],
		import: (() => import("./codeql-LgHcnr__.js"))
	},
	{
		id: "coffee",
		name: "CoffeeScript",
		aliases: ["coffeescript"],
		import: (() => import("./coffee-BLP2qSFw.js"))
	},
	{
		id: "common-lisp",
		name: "Common Lisp",
		aliases: ["lisp"],
		import: (() => import("./common-lisp-C4_snXu5.js"))
	},
	{
		id: "coq",
		name: "Coq",
		import: (() => import("./coq-CXz1Wp5T.js"))
	},
	{
		id: "cpp",
		name: "C++",
		aliases: ["c++"],
		import: (() => import("./cpp-DDoeXCgY.js").then((e) => e.n))
	},
	{
		id: "crystal",
		name: "Crystal",
		import: (() => import("./crystal-DC-b3wnl.js"))
	},
	{
		id: "csharp",
		name: "C#",
		aliases: ["c#", "cs"],
		import: (() => import("./csharp-DOBk9pps.js"))
	},
	{
		id: "css",
		name: "CSS",
		import: (() => import("./css-DWGORQA1.js").then((e) => e.n))
	},
	{
		id: "csv",
		name: "CSV",
		import: (() => import("./csv-DXEmMXWE.js"))
	},
	{
		id: "cue",
		name: "CUE",
		import: (() => import("./cue-Ce5TInMH.js"))
	},
	{
		id: "cypher",
		name: "Cypher",
		aliases: ["cql"],
		import: (() => import("./cypher-CtySalW2.js"))
	},
	{
		id: "d",
		name: "D",
		import: (() => import("./d-DCzfugIN.js"))
	},
	{
		id: "dart",
		name: "Dart",
		import: (() => import("./dart-BiguxAQV.js"))
	},
	{
		id: "dax",
		name: "DAX",
		import: (() => import("./dax-EdxdgPU8.js"))
	},
	{
		id: "desktop",
		name: "Desktop",
		import: (() => import("./desktop-Cogvs3NT.js"))
	},
	{
		id: "diff",
		name: "Diff",
		import: (() => import("./diff-BvdtE7nB.js"))
	},
	{
		id: "docker",
		name: "Dockerfile",
		aliases: ["dockerfile"],
		import: (() => import("./docker-Bqv490jz.js"))
	},
	{
		id: "dotenv",
		name: "dotEnv",
		import: (() => import("./dotenv-B4xxGhpR.js"))
	},
	{
		id: "dream-maker",
		name: "Dream Maker",
		import: (() => import("./dream-maker-D9Mgft--.js"))
	},
	{
		id: "edge",
		name: "Edge",
		import: (() => import("./edge-BXI_OJxy.js"))
	},
	{
		id: "elixir",
		name: "Elixir",
		import: (() => import("./elixir-BkaQhTGm.js"))
	},
	{
		id: "elm",
		name: "Elm",
		import: (() => import("./elm-CStZFaxE.js"))
	},
	{
		id: "emacs-lisp",
		name: "Emacs Lisp",
		aliases: ["elisp"],
		import: (() => import("./emacs-lisp-CkGcuOV8.js"))
	},
	{
		id: "erb",
		name: "ERB",
		import: (() => import("./erb-Bc1vOtW1.js"))
	},
	{
		id: "erlang",
		name: "Erlang",
		aliases: ["erl"],
		import: (() => import("./erlang-Cvnado7J.js"))
	},
	{
		id: "fennel",
		name: "Fennel",
		import: (() => import("./fennel-CFmCBl4U.js"))
	},
	{
		id: "fish",
		name: "Fish",
		import: (() => import("./fish-DLHePmDH.js"))
	},
	{
		id: "fluent",
		name: "Fluent",
		aliases: ["ftl"],
		import: (() => import("./fluent-D8fkXt3H.js"))
	},
	{
		id: "fortran-fixed-form",
		name: "Fortran (Fixed Form)",
		aliases: [
			"f",
			"for",
			"f77"
		],
		import: (() => import("./fortran-fixed-form-CWBL63dN.js"))
	},
	{
		id: "fortran-free-form",
		name: "Fortran (Free Form)",
		aliases: [
			"f90",
			"f95",
			"f03",
			"f08",
			"f18"
		],
		import: (() => import("./fortran-free-form-C7BmWjHF.js"))
	},
	{
		id: "fsharp",
		name: "F#",
		aliases: ["f#", "fs"],
		import: (() => import("./fsharp-ChgjdB6W.js"))
	},
	{
		id: "gdresource",
		name: "GDResource",
		aliases: ["tscn", "tres"],
		import: (() => import("./gdresource-D1MrE4lE.js"))
	},
	{
		id: "gdscript",
		name: "GDScript",
		aliases: ["gd"],
		import: (() => import("./gdscript-D24SU18y.js"))
	},
	{
		id: "gdshader",
		name: "GDShader",
		import: (() => import("./gdshader-ejDNSfLs.js"))
	},
	{
		id: "genie",
		name: "Genie",
		import: (() => import("./genie-BvNbWdwy.js"))
	},
	{
		id: "gherkin",
		name: "Gherkin",
		import: (() => import("./gherkin-TNTndRSH.js"))
	},
	{
		id: "git-commit",
		name: "Git Commit Message",
		import: (() => import("./git-commit-wCtQAB-S.js"))
	},
	{
		id: "git-rebase",
		name: "Git Rebase Message",
		import: (() => import("./git-rebase-CL6ywM3C.js"))
	},
	{
		id: "gleam",
		name: "Gleam",
		import: (() => import("./gleam-CzluhT67.js"))
	},
	{
		id: "glimmer-js",
		name: "Glimmer JS",
		aliases: ["gjs"],
		import: (() => import("./glimmer-js-BWM9H4Jg.js"))
	},
	{
		id: "glimmer-ts",
		name: "Glimmer TS",
		aliases: ["gts"],
		import: (() => import("./glimmer-ts-CwfNjX8Z.js"))
	},
	{
		id: "glsl",
		name: "GLSL",
		import: (() => import("./glsl-B5SWeWUj.js").then((e) => e.n))
	},
	{
		id: "gn",
		name: "GN",
		import: (() => import("./gn-BQE84KX5.js"))
	},
	{
		id: "gnuplot",
		name: "Gnuplot",
		import: (() => import("./gnuplot-BIVYqB6U.js"))
	},
	{
		id: "go",
		name: "Go",
		import: (() => import("./go-DDHtY1Z7.js"))
	},
	{
		id: "graphql",
		name: "GraphQL",
		aliases: ["gql"],
		import: (() => import("./graphql-BVXAZ8Ba.js").then((e) => e.n))
	},
	{
		id: "groovy",
		name: "Groovy",
		import: (() => import("./groovy-Bki_Fm-0.js"))
	},
	{
		id: "hack",
		name: "Hack",
		import: (() => import("./hack-ARfAfUFh.js"))
	},
	{
		id: "haml",
		name: "Ruby Haml",
		import: (() => import("./haml-tc1aIW4c.js").then((e) => e.n))
	},
	{
		id: "handlebars",
		name: "Handlebars",
		aliases: ["hbs"],
		import: (() => import("./handlebars-C-kM9dsC.js"))
	},
	{
		id: "haskell",
		name: "Haskell",
		aliases: ["hs"],
		import: (() => import("./haskell-BetFlbD8.js"))
	},
	{
		id: "haxe",
		name: "Haxe",
		import: (() => import("./haxe-CtZxGsPk.js"))
	},
	{
		id: "hcl",
		name: "HashiCorp HCL",
		import: (() => import("./hcl-Cwfod859.js"))
	},
	{
		id: "hjson",
		name: "Hjson",
		import: (() => import("./hjson-k0wCCS-j.js"))
	},
	{
		id: "hlsl",
		name: "HLSL",
		import: (() => import("./hlsl-B7rvSfY3.js"))
	},
	{
		id: "html",
		name: "HTML",
		import: (() => import("./html-CVmzwO0I.js").then((e) => e.n))
	},
	{
		id: "html-derivative",
		name: "HTML (Derivative)",
		import: (() => import("./html-derivative-DzG9zc-K.js"))
	},
	{
		id: "http",
		name: "HTTP",
		import: (() => import("./http-CZLLhERy.js"))
	},
	{
		id: "hurl",
		name: "Hurl",
		import: (() => import("./hurl-CEVsi9An.js"))
	},
	{
		id: "hxml",
		name: "HXML",
		import: (() => import("./hxml-BpYirNM8.js"))
	},
	{
		id: "hy",
		name: "Hy",
		import: (() => import("./hy-Cwz35AuB.js"))
	},
	{
		id: "imba",
		name: "Imba",
		import: (() => import("./imba-iOvWpmpM.js"))
	},
	{
		id: "ini",
		name: "INI",
		aliases: ["properties"],
		import: (() => import("./ini-Dr-Az0VN.js"))
	},
	{
		id: "java",
		name: "Java",
		import: (() => import("./java-Y0opluF0.js").then((e) => e.n))
	},
	{
		id: "javascript",
		name: "JavaScript",
		aliases: [
			"js",
			"cjs",
			"mjs"
		],
		import: (() => import("./javascript-Bn-troTr.js").then((e) => e.n))
	},
	{
		id: "jinja",
		name: "Jinja",
		import: (() => import("./jinja-m4Is_QJl.js"))
	},
	{
		id: "jison",
		name: "Jison",
		import: (() => import("./jison-BhPvY2yo.js"))
	},
	{
		id: "json",
		name: "JSON",
		import: (() => import("./json-BAqLUoA-.js").then((e) => e.n))
	},
	{
		id: "json5",
		name: "JSON5",
		import: (() => import("./json5-BnrdqJDw.js"))
	},
	{
		id: "jsonc",
		name: "JSON with Comments",
		import: (() => import("./jsonc-QiRJD4Aj.js"))
	},
	{
		id: "jsonl",
		name: "JSON Lines",
		import: (() => import("./jsonl-DJoqzAFs.js"))
	},
	{
		id: "jsonnet",
		name: "Jsonnet",
		import: (() => import("./jsonnet-06ZajqEj.js"))
	},
	{
		id: "jssm",
		name: "JSSM",
		aliases: ["fsl"],
		import: (() => import("./jssm-DDWjxS8T.js"))
	},
	{
		id: "jsx",
		name: "JSX",
		import: (() => import("./jsx-PArRUUk-.js").then((e) => e.n))
	},
	{
		id: "julia",
		name: "Julia",
		aliases: ["jl"],
		import: (() => import("./julia-Sgk6deIr.js"))
	},
	{
		id: "just",
		name: "Just",
		import: (() => import("./just-WlRFh1tv.js"))
	},
	{
		id: "kdl",
		name: "KDL",
		import: (() => import("./kdl-B9ZagoF7.js"))
	},
	{
		id: "kotlin",
		name: "Kotlin",
		aliases: ["kt", "kts"],
		import: (() => import("./kotlin-CR6T18Sv.js"))
	},
	{
		id: "kusto",
		name: "Kusto",
		aliases: ["kql"],
		import: (() => import("./kusto-Mq1vigEi.js"))
	},
	{
		id: "latex",
		name: "LaTeX",
		import: (() => import("./latex-DHMpqp7X.js"))
	},
	{
		id: "lean",
		name: "Lean 4",
		aliases: ["lean4"],
		import: (() => import("./lean-BFWeMKIi.js"))
	},
	{
		id: "less",
		name: "Less",
		import: (() => import("./less-N7-OJoQ3.js"))
	},
	{
		id: "liquid",
		name: "Liquid",
		import: (() => import("./liquid-CLF85bAm.js"))
	},
	{
		id: "llvm",
		name: "LLVM IR",
		import: (() => import("./llvm-D23bj2iY.js"))
	},
	{
		id: "log",
		name: "Log file",
		import: (() => import("./log-CGE2VD6D.js"))
	},
	{
		id: "logo",
		name: "Logo",
		import: (() => import("./logo-BAed9Rab.js"))
	},
	{
		id: "lua",
		name: "Lua",
		import: (() => import("./lua-4xBV6dLD.js").then((e) => e.n))
	},
	{
		id: "luau",
		name: "Luau",
		import: (() => import("./luau-Du4XuBPP.js"))
	},
	{
		id: "make",
		name: "Makefile",
		aliases: ["makefile"],
		import: (() => import("./make-DxAyVo4r.js"))
	},
	{
		id: "markdown",
		name: "Markdown",
		aliases: ["md"],
		import: (() => import("./markdown-cfn1Ynie.js"))
	},
	{
		id: "marko",
		name: "Marko",
		import: (() => import("./marko-DDM-nHMa.js"))
	},
	{
		id: "matlab",
		name: "MATLAB",
		import: (() => import("./matlab-DUACzVP8.js"))
	},
	{
		id: "mdc",
		name: "MDC",
		import: (() => import("./mdc-CrJFYVpN.js"))
	},
	{
		id: "mdx",
		name: "MDX",
		import: (() => import("./mdx-C3St7L3y.js"))
	},
	{
		id: "mermaid",
		name: "Mermaid",
		aliases: ["mmd"],
		import: (() => import("./mermaid-j2f7ZQZY.js"))
	},
	{
		id: "mipsasm",
		name: "MIPS Assembly",
		aliases: ["mips"],
		import: (() => import("./mipsasm-BJkrbgv1.js"))
	},
	{
		id: "mojo",
		name: "Mojo",
		import: (() => import("./mojo-CQpoBXEc.js"))
	},
	{
		id: "moonbit",
		name: "MoonBit",
		aliases: ["mbt", "mbti"],
		import: (() => import("./moonbit-Dhk3lUPd.js"))
	},
	{
		id: "move",
		name: "Move",
		import: (() => import("./move-Dn-diW_o.js"))
	},
	{
		id: "narrat",
		name: "Narrat Language",
		aliases: ["nar"],
		import: (() => import("./narrat-B_JwIfk-.js"))
	},
	{
		id: "nextflow",
		name: "Nextflow",
		aliases: ["nf"],
		import: (() => import("./nextflow-DPkiv1Cs.js"))
	},
	{
		id: "nextflow-groovy",
		name: "Nextflow Groovy",
		import: (() => import("./nextflow-groovy-DoSaHCJc.js"))
	},
	{
		id: "nginx",
		name: "Nginx",
		import: (() => import("./nginx-KHRfAX2R.js"))
	},
	{
		id: "nim",
		name: "Nim",
		import: (() => import("./nim-ZjpN3-rL.js"))
	},
	{
		id: "nix",
		name: "Nix",
		import: (() => import("./nix-fsQNtx4C.js"))
	},
	{
		id: "nushell",
		name: "nushell",
		aliases: ["nu"],
		import: (() => import("./nushell-DsP_-Q4W.js"))
	},
	{
		id: "objective-c",
		name: "Objective-C",
		aliases: ["objc"],
		import: (() => import("./objective-c-DFSarhnf.js"))
	},
	{
		id: "objective-cpp",
		name: "Objective-C++",
		import: (() => import("./objective-cpp-CHFlJ3KO.js"))
	},
	{
		id: "ocaml",
		name: "OCaml",
		import: (() => import("./ocaml-C8TxLnwD.js"))
	},
	{
		id: "odin",
		name: "Odin",
		import: (() => import("./odin-B4zibQjD.js"))
	},
	{
		id: "openscad",
		name: "OpenSCAD",
		aliases: ["scad"],
		import: (() => import("./openscad-MKrn2iu4.js"))
	},
	{
		id: "pascal",
		name: "Pascal",
		import: (() => import("./pascal-eTTv4eiq.js"))
	},
	{
		id: "perl",
		name: "Perl",
		import: (() => import("./perl-qsAP2dxr.js"))
	},
	{
		id: "php",
		name: "PHP",
		import: (() => import("./php-CEO6XHDT.js"))
	},
	{
		id: "pkl",
		name: "Pkl",
		import: (() => import("./pkl-GIEoYo8e.js"))
	},
	{
		id: "plsql",
		name: "PL/SQL",
		import: (() => import("./plsql-Dnt4FGIt.js"))
	},
	{
		id: "po",
		name: "Gettext PO",
		aliases: ["pot", "potx"],
		import: (() => import("./po-BK7HdjRy.js"))
	},
	{
		id: "polar",
		name: "Polar",
		import: (() => import("./polar-CrZAmaLp.js"))
	},
	{
		id: "postcss",
		name: "PostCSS",
		import: (() => import("./postcss-DsIpo0l-.js"))
	},
	{
		id: "powerquery",
		name: "PowerQuery",
		import: (() => import("./powerquery-CAPgDumr.js"))
	},
	{
		id: "powershell",
		name: "PowerShell",
		aliases: ["ps", "ps1"],
		import: (() => import("./powershell-B8uwdeVw.js"))
	},
	{
		id: "prisma",
		name: "Prisma",
		import: (() => import("./prisma-BvajGsrC.js"))
	},
	{
		id: "prolog",
		name: "Prolog",
		import: (() => import("./prolog-DJvRcpmG.js"))
	},
	{
		id: "proto",
		name: "Protocol Buffer 3",
		aliases: ["protobuf"],
		import: (() => import("./proto-C6Hs1IDM.js"))
	},
	{
		id: "pug",
		name: "Pug",
		aliases: ["jade"],
		import: (() => import("./pug-KAq3gaAd.js"))
	},
	{
		id: "puppet",
		name: "Puppet",
		import: (() => import("./puppet-B0g1V6IY.js"))
	},
	{
		id: "purescript",
		name: "PureScript",
		import: (() => import("./purescript-BCoGxrUJ.js"))
	},
	{
		id: "python",
		name: "Python",
		aliases: ["py"],
		import: (() => import("./python-BgOx7NTo.js"))
	},
	{
		id: "qml",
		name: "QML",
		import: (() => import("./qml-Xp6T1uGf.js"))
	},
	{
		id: "qmldir",
		name: "QML Directory",
		import: (() => import("./qmldir-CP3bHm8y.js"))
	},
	{
		id: "qss",
		name: "Qt Style Sheets",
		import: (() => import("./qss-tdXghUqM.js"))
	},
	{
		id: "r",
		name: "R",
		import: (() => import("./r-BkgtmkvM.js").then((e) => e.n))
	},
	{
		id: "racket",
		name: "Racket",
		import: (() => import("./racket-3fJOFPrr.js"))
	},
	{
		id: "raku",
		name: "Raku",
		aliases: ["perl6"],
		import: (() => import("./raku-DKqYYKtA.js"))
	},
	{
		id: "razor",
		name: "ASP.NET Razor",
		import: (() => import("./razor-BVULJbU5.js"))
	},
	{
		id: "reg",
		name: "Windows Registry Script",
		import: (() => import("./reg-BqF_xxJV.js"))
	},
	{
		id: "regexp",
		name: "RegExp",
		aliases: ["regex"],
		import: (() => import("./regexp-DqVWYKLu.js").then((e) => e.n))
	},
	{
		id: "rel",
		name: "Rel",
		import: (() => import("./rel-DHE5cVi9.js"))
	},
	{
		id: "riscv",
		name: "RISC-V",
		import: (() => import("./riscv-B8jfW01C.js"))
	},
	{
		id: "ron",
		name: "RON",
		import: (() => import("./ron-BV11VLSt.js"))
	},
	{
		id: "rosmsg",
		name: "ROS Interface",
		import: (() => import("./rosmsg-DsYVAXtY.js"))
	},
	{
		id: "rst",
		name: "reStructuredText",
		import: (() => import("./rst-DTPuJJ9X.js"))
	},
	{
		id: "ruby",
		name: "Ruby",
		aliases: ["rb"],
		import: (() => import("./ruby-s2N7bqWk.js"))
	},
	{
		id: "rust",
		name: "Rust",
		aliases: ["rs"],
		import: (() => import("./rust-fekF7_Nc.js"))
	},
	{
		id: "sas",
		name: "SAS",
		import: (() => import("./sas-DbQ97VZM.js"))
	},
	{
		id: "sass",
		name: "Sass",
		import: (() => import("./sass-DIMH-NeB.js"))
	},
	{
		id: "scala",
		name: "Scala",
		import: (() => import("./scala-DfqqWN_R.js"))
	},
	{
		id: "scheme",
		name: "Scheme",
		import: (() => import("./scheme-DjN_ziZI.js"))
	},
	{
		id: "scss",
		name: "SCSS",
		import: (() => import("./scss-DV0yAVik.js").then((e) => e.n))
	},
	{
		id: "sdbl",
		name: "1C (Query)",
		aliases: ["1c-query"],
		import: (() => import("./sdbl-Cf3qx0kh.js"))
	},
	{
		id: "shaderlab",
		name: "ShaderLab",
		aliases: ["shader"],
		import: (() => import("./shaderlab-D6PzPmxb.js"))
	},
	{
		id: "shellscript",
		name: "Shell",
		aliases: [
			"bash",
			"sh",
			"shell",
			"zsh"
		],
		import: (() => import("./shellscript-BoCAA5ba.js").then((e) => e.n))
	},
	{
		id: "shellsession",
		name: "Shell Session",
		aliases: ["console"],
		import: (() => import("./shellsession-CkW6_SK9.js"))
	},
	{
		id: "smalltalk",
		name: "Smalltalk",
		import: (() => import("./smalltalk-CCeefIFr.js"))
	},
	{
		id: "solidity",
		name: "Solidity",
		import: (() => import("./solidity-Bfms0cHJ.js"))
	},
	{
		id: "soy",
		name: "Closure Templates",
		aliases: ["closure-templates"],
		import: (() => import("./soy-AniGguCg.js"))
	},
	{
		id: "sparql",
		name: "SPARQL",
		import: (() => import("./sparql-U6OURHqE.js"))
	},
	{
		id: "splunk",
		name: "Splunk Query Language",
		aliases: ["spl"],
		import: (() => import("./splunk-z7ncaSUS.js"))
	},
	{
		id: "sql",
		name: "SQL",
		import: (() => import("./sql-BbaGlwGt.js").then((e) => e.n))
	},
	{
		id: "ssh-config",
		name: "SSH Config",
		import: (() => import("./ssh-config-CZC-7paG.js"))
	},
	{
		id: "stata",
		name: "Stata",
		import: (() => import("./stata-DHZFEtNk.js"))
	},
	{
		id: "stylus",
		name: "Stylus",
		aliases: ["styl"],
		import: (() => import("./stylus-C_qn1TjV.js"))
	},
	{
		id: "surrealql",
		name: "SurrealQL",
		aliases: ["surql"],
		import: (() => import("./surrealql-BLycDUyj.js"))
	},
	{
		id: "svelte",
		name: "Svelte",
		import: (() => import("./svelte-Bvkw0IYV.js"))
	},
	{
		id: "swift",
		name: "Swift",
		import: (() => import("./swift-BTX67D07.js"))
	},
	{
		id: "system-verilog",
		name: "SystemVerilog",
		import: (() => import("./system-verilog-D5eUyRJj.js"))
	},
	{
		id: "systemd",
		name: "Systemd Units",
		import: (() => import("./systemd-Wku9bT7A.js"))
	},
	{
		id: "talonscript",
		name: "TalonScript",
		aliases: ["talon"],
		import: (() => import("./talonscript-BFRncE1d.js"))
	},
	{
		id: "tasl",
		name: "Tasl",
		import: (() => import("./tasl-xWjtfihs.js"))
	},
	{
		id: "tcl",
		name: "Tcl",
		import: (() => import("./tcl-cgEUhAr0.js"))
	},
	{
		id: "templ",
		name: "Templ",
		import: (() => import("./templ-DJRymhRD.js"))
	},
	{
		id: "terraform",
		name: "Terraform",
		aliases: ["tf", "tfvars"],
		import: (() => import("./terraform-Bg3UZctX.js"))
	},
	{
		id: "tex",
		name: "TeX",
		import: (() => import("./tex-CXuzBfWF.js"))
	},
	{
		id: "toml",
		name: "TOML",
		import: (() => import("./toml-BAdfDbrW.js"))
	},
	{
		id: "ts-tags",
		name: "TypeScript with Tags",
		aliases: ["lit"],
		import: (() => import("./ts-tags-j1T_pdZK.js"))
	},
	{
		id: "tsv",
		name: "TSV",
		import: (() => import("./tsv-6S0Srlw9.js"))
	},
	{
		id: "tsx",
		name: "TSX",
		import: (() => import("./tsx-CrPSDbS8.js").then((e) => e.n))
	},
	{
		id: "turtle",
		name: "Turtle",
		import: (() => import("./turtle-C1UPIC07.js"))
	},
	{
		id: "twig",
		name: "Twig",
		import: (() => import("./twig-C7vdvUoe.js"))
	},
	{
		id: "typescript",
		name: "TypeScript",
		aliases: [
			"ts",
			"cts",
			"mts"
		],
		import: (() => import("./typescript-DM9Rphzm.js").then((e) => e.n))
	},
	{
		id: "typespec",
		name: "TypeSpec",
		aliases: ["tsp"],
		import: (() => import("./typespec-O-XoXlak.js"))
	},
	{
		id: "typst",
		name: "Typst",
		aliases: ["typ"],
		import: (() => import("./typst-DsSkHxz2.js"))
	},
	{
		id: "v",
		name: "V",
		import: (() => import("./v-DtAYpS30.js"))
	},
	{
		id: "vala",
		name: "Vala",
		import: (() => import("./vala-CQITgzJt.js"))
	},
	{
		id: "vb",
		name: "Visual Basic",
		aliases: ["cmd"],
		import: (() => import("./vb-BqTUoRVM.js"))
	},
	{
		id: "verilog",
		name: "Verilog",
		import: (() => import("./verilog-CXVgIs1-.js"))
	},
	{
		id: "vhdl",
		name: "VHDL",
		import: (() => import("./vhdl-D87Ym1M7.js"))
	},
	{
		id: "viml",
		name: "Vim Script",
		aliases: ["vim", "vimscript"],
		import: (() => import("./viml-BzGMgTsi.js"))
	},
	{
		id: "vue",
		name: "Vue",
		import: (() => import("./vue-D_1pL_34.js"))
	},
	{
		id: "vue-html",
		name: "Vue HTML",
		import: (() => import("./vue-html-BL--kDld.js"))
	},
	{
		id: "vue-vine",
		name: "Vue Vine",
		import: (() => import("./vue-vine-BcgHh6X4.js"))
	},
	{
		id: "vyper",
		name: "Vyper",
		aliases: ["vy"],
		import: (() => import("./vyper-CcxRpj69.js"))
	},
	{
		id: "wasm",
		name: "WebAssembly",
		import: (() => import("./wasm-DDGhZIAU.js"))
	},
	{
		id: "wenyan",
		name: "Wenyan",
		aliases: ["文言"],
		import: (() => import("./wenyan-y3vnis5p.js"))
	},
	{
		id: "wgsl",
		name: "WGSL",
		import: (() => import("./wgsl-CHBLt96e.js"))
	},
	{
		id: "wikitext",
		name: "Wikitext",
		aliases: ["mediawiki", "wiki"],
		import: (() => import("./wikitext-yjdAJ26_.js"))
	},
	{
		id: "wit",
		name: "WebAssembly Interface Types",
		import: (() => import("./wit-CRQI0vwZ.js"))
	},
	{
		id: "wolfram",
		name: "Wolfram",
		aliases: ["wl"],
		import: (() => import("./wolfram-CtD6wP0z.js"))
	},
	{
		id: "xml",
		name: "XML",
		import: (() => import("./xml-CyoAa9cy.js").then((e) => e.n))
	},
	{
		id: "xsl",
		name: "XSL",
		import: (() => import("./xsl-B1YuZv1M.js"))
	},
	{
		id: "yaml",
		name: "YAML",
		aliases: ["yml"],
		import: (() => import("./yaml-IN86pjRr.js").then((e) => e.n))
	},
	{
		id: "zenscript",
		name: "ZenScript",
		import: (() => import("./zenscript-BFRLkFp4.js"))
	},
	{
		id: "zig",
		name: "Zig",
		import: (() => import("./zig-BOnFAx-9.js"))
	}
], se = Object.fromEntries(oe.map((e) => [e.id, e.import])), ce = Object.fromEntries(oe.flatMap((e) => e.aliases?.map((t) => [t, e.import]) || [])), le = {
	...se,
	...ce
}, ue = Object.fromEntries([
	{
		id: "andromeeda",
		displayName: "Andromeeda",
		type: "dark",
		import: (() => import("./andromeeda-BrnYRFP_.js"))
	},
	{
		id: "aurora-x",
		displayName: "Aurora X",
		type: "dark",
		import: (() => import("./aurora-x-CGZOe0Ow.js"))
	},
	{
		id: "ayu-dark",
		displayName: "Ayu Dark",
		type: "dark",
		import: (() => import("./ayu-dark-DESKj9K4.js"))
	},
	{
		id: "ayu-light",
		displayName: "Ayu Light",
		type: "light",
		import: (() => import("./ayu-light-C68qXk8f.js"))
	},
	{
		id: "ayu-mirage",
		displayName: "Ayu Mirage",
		type: "dark",
		import: (() => import("./ayu-mirage-Dm4WObKS.js"))
	},
	{
		id: "catppuccin-frappe",
		displayName: "Catppuccin Frappé",
		type: "dark",
		import: (() => import("./catppuccin-frappe-BklFCnDR.js"))
	},
	{
		id: "catppuccin-latte",
		displayName: "Catppuccin Latte",
		type: "light",
		import: (() => import("./catppuccin-latte-yJToafv5.js"))
	},
	{
		id: "catppuccin-macchiato",
		displayName: "Catppuccin Macchiato",
		type: "dark",
		import: (() => import("./catppuccin-macchiato-1FItWFG6.js"))
	},
	{
		id: "catppuccin-mocha",
		displayName: "Catppuccin Mocha",
		type: "dark",
		import: (() => import("./catppuccin-mocha-LE13vRCA.js"))
	},
	{
		id: "dark-plus",
		displayName: "Dark Plus",
		type: "dark",
		import: (() => import("./dark-plus-Bu-4VglI.js"))
	},
	{
		id: "dracula",
		displayName: "Dracula Theme",
		type: "dark",
		import: (() => import("./dracula-DoYUXZ3s.js"))
	},
	{
		id: "dracula-soft",
		displayName: "Dracula Theme Soft",
		type: "dark",
		import: (() => import("./dracula-soft-YWIwJMdT.js"))
	},
	{
		id: "everforest-dark",
		displayName: "Everforest Dark",
		type: "dark",
		import: (() => import("./everforest-dark-DGEr16g5.js"))
	},
	{
		id: "everforest-light",
		displayName: "Everforest Light",
		type: "light",
		import: (() => import("./everforest-light-DkkORLg5.js"))
	},
	{
		id: "github-dark",
		displayName: "GitHub Dark",
		type: "dark",
		import: (() => import("./github-dark-DE9zEwXQ.js"))
	},
	{
		id: "github-dark-default",
		displayName: "GitHub Dark Default",
		type: "dark",
		import: (() => import("./github-dark-default-DeCTSUVQ.js"))
	},
	{
		id: "github-dark-dimmed",
		displayName: "GitHub Dark Dimmed",
		type: "dark",
		import: (() => import("./github-dark-dimmed-Bwu9XAKt.js"))
	},
	{
		id: "github-dark-high-contrast",
		displayName: "GitHub Dark High Contrast",
		type: "dark",
		import: (() => import("./github-dark-high-contrast-BJclI0ET.js"))
	},
	{
		id: "github-light",
		displayName: "GitHub Light",
		type: "light",
		import: (() => import("./github-light-Bx6PrU8W.js"))
	},
	{
		id: "github-light-default",
		displayName: "GitHub Light Default",
		type: "light",
		import: (() => import("./github-light-default-BJ5gfSM7.js"))
	},
	{
		id: "github-light-high-contrast",
		displayName: "GitHub Light High Contrast",
		type: "light",
		import: (() => import("./github-light-high-contrast-CaKNIFiA.js"))
	},
	{
		id: "gruvbox-dark-hard",
		displayName: "Gruvbox Dark Hard",
		type: "dark",
		import: (() => import("./gruvbox-dark-hard-C95PuUkW.js"))
	},
	{
		id: "gruvbox-dark-medium",
		displayName: "Gruvbox Dark Medium",
		type: "dark",
		import: (() => import("./gruvbox-dark-medium-CA7JLLSz.js"))
	},
	{
		id: "gruvbox-dark-soft",
		displayName: "Gruvbox Dark Soft",
		type: "dark",
		import: (() => import("./gruvbox-dark-soft-CYdmxJ1g.js"))
	},
	{
		id: "gruvbox-light-hard",
		displayName: "Gruvbox Light Hard",
		type: "light",
		import: (() => import("./gruvbox-light-hard-D7A8ZxJC.js"))
	},
	{
		id: "gruvbox-light-medium",
		displayName: "Gruvbox Light Medium",
		type: "light",
		import: (() => import("./gruvbox-light-medium-DLG6lRU1.js"))
	},
	{
		id: "gruvbox-light-soft",
		displayName: "Gruvbox Light Soft",
		type: "light",
		import: (() => import("./gruvbox-light-soft-DttDmjyF.js"))
	},
	{
		id: "horizon",
		displayName: "Horizon",
		type: "dark",
		import: (() => import("./horizon-lg8TeLdk.js"))
	},
	{
		id: "horizon-bright",
		displayName: "Horizon Bright",
		type: "light",
		import: (() => import("./horizon-bright-C9djolNt.js"))
	},
	{
		id: "houston",
		displayName: "Houston",
		type: "dark",
		import: (() => import("./houston-DSwRvIsI.js"))
	},
	{
		id: "kanagawa-dragon",
		displayName: "Kanagawa Dragon",
		type: "dark",
		import: (() => import("./kanagawa-dragon-CoMwk4T1.js"))
	},
	{
		id: "kanagawa-lotus",
		displayName: "Kanagawa Lotus",
		type: "light",
		import: (() => import("./kanagawa-lotus-Va39V10n.js"))
	},
	{
		id: "kanagawa-wave",
		displayName: "Kanagawa Wave",
		type: "dark",
		import: (() => import("./kanagawa-wave-BgCbDdHJ.js"))
	},
	{
		id: "laserwave",
		displayName: "LaserWave",
		type: "dark",
		import: (() => import("./laserwave-B_QfDXjK.js"))
	},
	{
		id: "light-plus",
		displayName: "Light Plus",
		type: "light",
		import: (() => import("./light-plus-D0EQ1CVE.js"))
	},
	{
		id: "material-theme",
		displayName: "Material Theme",
		type: "dark",
		import: (() => import("./material-theme-BRunWiDZ.js"))
	},
	{
		id: "material-theme-darker",
		displayName: "Material Theme Darker",
		type: "dark",
		import: (() => import("./material-theme-darker-CkLQCDcI.js"))
	},
	{
		id: "material-theme-lighter",
		displayName: "Material Theme Lighter",
		type: "light",
		import: (() => import("./material-theme-lighter-DT9vH4a4.js"))
	},
	{
		id: "material-theme-ocean",
		displayName: "Material Theme Ocean",
		type: "dark",
		import: (() => import("./material-theme-ocean-CL8wgtzT.js"))
	},
	{
		id: "material-theme-palenight",
		displayName: "Material Theme Palenight",
		type: "dark",
		import: (() => import("./material-theme-palenight-BKqNqeO-.js"))
	},
	{
		id: "min-dark",
		displayName: "Min Dark",
		type: "dark",
		import: (() => import("./min-dark-CjPVxuZv.js"))
	},
	{
		id: "min-light",
		displayName: "Min Light",
		type: "light",
		import: (() => import("./min-light-D0p3LZIi.js"))
	},
	{
		id: "monokai",
		displayName: "Monokai",
		type: "dark",
		import: (() => import("./monokai-JqOv9BwH.js"))
	},
	{
		id: "night-owl",
		displayName: "Night Owl",
		type: "dark",
		import: (() => import("./night-owl-zKh2m9c-.js"))
	},
	{
		id: "night-owl-light",
		displayName: "Night Owl Light",
		type: "light",
		import: (() => import("./night-owl-light-Cpp3gTBd.js"))
	},
	{
		id: "nord",
		displayName: "Nord",
		type: "dark",
		import: (() => import("./nord-D6JpTXIk.js"))
	},
	{
		id: "one-dark-pro",
		displayName: "One Dark Pro",
		type: "dark",
		import: (() => import("./one-dark-pro-DcAXlmNj.js"))
	},
	{
		id: "one-light",
		displayName: "One Light",
		type: "light",
		import: (() => import("./one-light-BDofi-JK.js"))
	},
	{
		id: "plastic",
		displayName: "Plastic",
		type: "dark",
		import: (() => import("./plastic-pM0JA5YJ.js"))
	},
	{
		id: "poimandres",
		displayName: "Poimandres",
		type: "dark",
		import: (() => import("./poimandres-VHBUYYMz.js"))
	},
	{
		id: "red",
		displayName: "Red",
		type: "dark",
		import: (() => import("./red-FhZ_W9u9.js"))
	},
	{
		id: "rose-pine",
		displayName: "Rosé Pine",
		type: "dark",
		import: (() => import("./rose-pine-B_K80PcZ.js"))
	},
	{
		id: "rose-pine-dawn",
		displayName: "Rosé Pine Dawn",
		type: "light",
		import: (() => import("./rose-pine-dawn-85tM5se-.js"))
	},
	{
		id: "rose-pine-moon",
		displayName: "Rosé Pine Moon",
		type: "dark",
		import: (() => import("./rose-pine-moon-CRXlJ9As.js"))
	},
	{
		id: "slack-dark",
		displayName: "Slack Dark",
		type: "dark",
		import: (() => import("./slack-dark-HwoNDUhY.js"))
	},
	{
		id: "slack-ochin",
		displayName: "Slack Ochin",
		type: "light",
		import: (() => import("./slack-ochin-CoHaPpu9.js"))
	},
	{
		id: "snazzy-light",
		displayName: "Snazzy Light",
		type: "light",
		import: (() => import("./snazzy-light-DLF6WwVT.js"))
	},
	{
		id: "solarized-dark",
		displayName: "Solarized Dark",
		type: "dark",
		import: (() => import("./solarized-dark-BwYY0OAs.js"))
	},
	{
		id: "solarized-light",
		displayName: "Solarized Light",
		type: "light",
		import: (() => import("./solarized-light-Crjbo6Vn.js"))
	},
	{
		id: "synthwave-84",
		displayName: "Synthwave '84",
		type: "dark",
		import: (() => import("./synthwave-84-DsmI9Q2_.js"))
	},
	{
		id: "tokyo-night",
		displayName: "Tokyo Night",
		type: "dark",
		import: (() => import("./tokyo-night-z1mgDqLb.js"))
	},
	{
		id: "vesper",
		displayName: "Vesper",
		type: "dark",
		import: (() => import("./vesper-Bd1VbN0n.js"))
	},
	{
		id: "vitesse-black",
		displayName: "Vitesse Black",
		type: "dark",
		import: (() => import("./vitesse-black-DN9oFioA.js"))
	},
	{
		id: "vitesse-dark",
		displayName: "Vitesse Dark",
		type: "dark",
		import: (() => import("./vitesse-dark-DFeaIGKl.js"))
	},
	{
		id: "vitesse-light",
		displayName: "Vitesse Light",
		type: "light",
		import: (() => import("./vitesse-light-xNKA3x2d.js"))
	}
].map((e) => [e.id, e.import])), de = /* @__PURE__ */ f({
	createOnigurumaEngine: () => Fe,
	getDefaultWasmLoader: () => Pe,
	loadWasm: () => Oe,
	setDefaultWasmLoader: () => Ne
}), fe = class extends Error {
	constructor(e) {
		super(e), this.name = "ShikiError";
	}
};
function pe() {
	return 2147483648;
}
function me() {
	return typeof performance < "u" ? performance.now() : Date.now();
}
var he = (e, t) => e + (t - e % t) % t;
async function ge(e) {
	let t, n, r = {};
	function i(e) {
		n = e, r.HEAPU8 = new Uint8Array(e), r.HEAPU32 = new Uint32Array(e);
	}
	function a(e, t, n) {
		r.HEAPU8.copyWithin(e, t, t + n);
	}
	function o(e) {
		try {
			return t.grow(e - n.byteLength + 65535 >>> 16), i(t.buffer), 1;
		} catch {}
	}
	function s(e) {
		let t = r.HEAPU8.length;
		e >>>= 0;
		let n = pe();
		if (e > n) return !1;
		for (let r = 1; r <= 4; r *= 2) {
			let i = t * (1 + .2 / r);
			if (i = Math.min(i, e + 100663296), o(Math.min(n, he(Math.max(e, i), 65536)))) return !0;
		}
		return !1;
	}
	let c = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
	function l(e, t, n = 1024) {
		let r = t + n, i = t;
		for (; e[i] && !(i >= r);) ++i;
		if (i - t > 16 && e.buffer && c) return c.decode(e.subarray(t, i));
		let a = "";
		for (; t < i;) {
			let n = e[t++];
			if (!(n & 128)) {
				a += String.fromCharCode(n);
				continue;
			}
			let r = e[t++] & 63;
			if ((n & 224) == 192) {
				a += String.fromCharCode((n & 31) << 6 | r);
				continue;
			}
			let i = e[t++] & 63;
			if (n = (n & 240) == 224 ? (n & 15) << 12 | r << 6 | i : (n & 7) << 18 | r << 12 | i << 6 | e[t++] & 63, n < 65536) a += String.fromCharCode(n);
			else {
				let e = n - 65536;
				a += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023);
			}
		}
		return a;
	}
	function u(e, t) {
		return e ? l(r.HEAPU8, e, t) : "";
	}
	let d = {
		emscripten_get_now: me,
		emscripten_memcpy_big: a,
		emscripten_resize_heap: s,
		fd_write: () => 0
	};
	async function f() {
		let n = await e({
			env: d,
			wasi_snapshot_preview1: d
		});
		t = n.memory, i(t.buffer), Object.assign(r, n), r.UTF8ToString = u;
	}
	return await f(), r;
}
var _e = Object.defineProperty, ve = (e, t, n) => t in e ? _e(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, y = (e, t, n) => ve(e, typeof t == "symbol" ? t : t + "", n), b = null;
function ye(e) {
	throw new fe(e.UTF8ToString(e.getLastOnigError()));
}
var be = class e {
	constructor(t) {
		y(this, "utf16Length"), y(this, "utf8Length"), y(this, "utf16Value"), y(this, "utf8Value"), y(this, "utf16OffsetToUtf8"), y(this, "utf8OffsetToUtf16");
		let n = t.length, r = e._utf8ByteLength(t), i = r !== n, a = i ? new Uint32Array(n + 1) : null;
		i && (a[n] = r);
		let o = i ? new Uint32Array(r + 1) : null;
		i && (o[r] = n);
		let s = new Uint8Array(r), c = 0;
		for (let e = 0; e < n; e++) {
			let r = t.charCodeAt(e), l = r, u = !1;
			if (r >= 55296 && r <= 56319 && e + 1 < n) {
				let n = t.charCodeAt(e + 1);
				n >= 56320 && n <= 57343 && (l = (r - 55296 << 10) + 65536 | n - 56320, u = !0);
			}
			i && (a[e] = c, u && (a[e + 1] = c), l <= 127 ? o[c + 0] = e : l <= 2047 ? (o[c + 0] = e, o[c + 1] = e) : l <= 65535 ? (o[c + 0] = e, o[c + 1] = e, o[c + 2] = e) : (o[c + 0] = e, o[c + 1] = e, o[c + 2] = e, o[c + 3] = e)), l <= 127 ? s[c++] = l : l <= 2047 ? (s[c++] = 192 | (l & 1984) >>> 6, s[c++] = 128 | (l & 63) >>> 0) : l <= 65535 ? (s[c++] = 224 | (l & 61440) >>> 12, s[c++] = 128 | (l & 4032) >>> 6, s[c++] = 128 | (l & 63) >>> 0) : (s[c++] = 240 | (l & 1835008) >>> 18, s[c++] = 128 | (l & 258048) >>> 12, s[c++] = 128 | (l & 4032) >>> 6, s[c++] = 128 | (l & 63) >>> 0), u && e++;
		}
		this.utf16Length = n, this.utf8Length = r, this.utf16Value = t, this.utf8Value = s, this.utf16OffsetToUtf8 = a, this.utf8OffsetToUtf16 = o;
	}
	static _utf8ByteLength(e) {
		let t = 0;
		for (let n = 0, r = e.length; n < r; n++) {
			let i = e.charCodeAt(n), a = i, o = !1;
			if (i >= 55296 && i <= 56319 && n + 1 < r) {
				let t = e.charCodeAt(n + 1);
				t >= 56320 && t <= 57343 && (a = (i - 55296 << 10) + 65536 | t - 56320, o = !0);
			}
			a <= 127 ? t += 1 : a <= 2047 ? t += 2 : a <= 65535 ? t += 3 : t += 4, o && n++;
		}
		return t;
	}
	createString(e) {
		let t = e.omalloc(this.utf8Length);
		return e.HEAPU8.set(this.utf8Value, t), t;
	}
}, x = class e {
	constructor(t) {
		if (y(this, "id", ++e.LAST_ID), y(this, "_onigBinding"), y(this, "content"), y(this, "utf16Length"), y(this, "utf8Length"), y(this, "utf16OffsetToUtf8"), y(this, "utf8OffsetToUtf16"), y(this, "ptr"), !b) throw new fe("Must invoke loadWasm first.");
		this._onigBinding = b, this.content = t;
		let n = new be(t);
		this.utf16Length = n.utf16Length, this.utf8Length = n.utf8Length, this.utf16OffsetToUtf8 = n.utf16OffsetToUtf8, this.utf8OffsetToUtf16 = n.utf8OffsetToUtf16, this.utf8Length < 1e4 && !e._sharedPtrInUse ? (e._sharedPtr ||= b.omalloc(1e4), e._sharedPtrInUse = !0, b.HEAPU8.set(n.utf8Value, e._sharedPtr), this.ptr = e._sharedPtr) : this.ptr = n.createString(b);
	}
	convertUtf8OffsetToUtf16(e) {
		return this.utf8OffsetToUtf16 ? e < 0 ? 0 : e > this.utf8Length ? this.utf16Length : this.utf8OffsetToUtf16[e] : e;
	}
	convertUtf16OffsetToUtf8(e) {
		return this.utf16OffsetToUtf8 ? e < 0 ? 0 : e > this.utf16Length ? this.utf8Length : this.utf16OffsetToUtf8[e] : e;
	}
	dispose() {
		this.ptr === e._sharedPtr ? e._sharedPtrInUse = !1 : this._onigBinding.ofree(this.ptr);
	}
};
y(x, "LAST_ID", 0), y(x, "_sharedPtr", 0), y(x, "_sharedPtrInUse", !1);
var xe = x, Se = class {
	constructor(e) {
		if (y(this, "_onigBinding"), y(this, "_ptr"), !b) throw new fe("Must invoke loadWasm first.");
		let t = [], n = [];
		for (let r = 0, i = e.length; r < i; r++) {
			let i = new be(e[r]);
			t[r] = i.createString(b), n[r] = i.utf8Length;
		}
		let r = b.omalloc(4 * e.length);
		b.HEAPU32.set(t, r / 4);
		let i = b.omalloc(4 * e.length);
		b.HEAPU32.set(n, i / 4);
		let a = b.createOnigScanner(r, i, e.length);
		for (let n = 0, r = e.length; n < r; n++) b.ofree(t[n]);
		b.ofree(i), b.ofree(r), a === 0 && ye(b), this._onigBinding = b, this._ptr = a;
	}
	dispose() {
		this._onigBinding.freeOnigScanner(this._ptr);
	}
	findNextMatchSync(e, t, n) {
		let r = 0;
		if (typeof n == "number" && (r = n), typeof e == "string") {
			e = new xe(e);
			let n = this._findNextMatchSync(e, t, !1, r);
			return e.dispose(), n;
		}
		return this._findNextMatchSync(e, t, !1, r);
	}
	_findNextMatchSync(e, t, n, r) {
		let i = this._onigBinding, a = i.findNextOnigScannerMatch(this._ptr, e.id, e.ptr, e.utf8Length, e.convertUtf16OffsetToUtf8(t), r);
		if (a === 0) return null;
		let o = i.HEAPU32, s = a / 4, c = o[s++], l = o[s++], u = [];
		for (let t = 0; t < l; t++) {
			let n = e.convertUtf8OffsetToUtf16(o[s++]), r = e.convertUtf8OffsetToUtf16(o[s++]);
			u[t] = {
				start: n,
				end: r,
				length: r - n
			};
		}
		return {
			index: c,
			captureIndices: u
		};
	}
};
function Ce(e) {
	return typeof e.instantiator == "function";
}
function we(e) {
	return typeof e.default == "function";
}
function Te(e) {
	return e.data !== void 0;
}
function Ee(e) {
	return typeof Response < "u" && e instanceof Response;
}
function De(e) {
	return typeof ArrayBuffer < "u" && (e instanceof ArrayBuffer || ArrayBuffer.isView(e)) || typeof Buffer < "u" && Buffer.isBuffer?.(e) || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer || typeof Uint32Array < "u" && e instanceof Uint32Array;
}
var S;
function Oe(e) {
	if (S) return S;
	async function t() {
		b = await ge(async (t) => {
			let n = e;
			return n = await n, typeof n == "function" && (n = await n(t)), typeof n == "function" && (n = await n(t)), Ce(n) ? n = await n.instantiator(t) : we(n) ? n = await n.default(t) : (Te(n) && (n = n.data), Ee(n) ? n = typeof WebAssembly.instantiateStreaming == "function" ? await Ae(n)(t) : await je(n)(t) : De(n) || n instanceof WebAssembly.Module ? n = await ke(n)(t) : "default" in n && n.default instanceof WebAssembly.Module && (n = await ke(n.default)(t))), "instance" in n && (n = n.instance), "exports" in n && (n = n.exports), n;
		});
	}
	return S = t(), S;
}
function ke(e) {
	return (t) => WebAssembly.instantiate(e, t);
}
function Ae(e) {
	return (t) => WebAssembly.instantiateStreaming(e, t);
}
function je(e) {
	return async (t) => {
		let n = await e.arrayBuffer();
		return WebAssembly.instantiate(n, t);
	};
}
var Me;
function Ne(e) {
	Me = e;
}
function Pe() {
	return Me;
}
async function Fe(e) {
	return e && await Oe(e), {
		createScanner(e) {
			return new Se(e.map((e) => typeof e == "string" ? e : e.source));
		},
		createString(e) {
			return new xe(e);
		}
	};
}
//#endregion
//#region node_modules/shiki/dist/engine-oniguruma.mjs
var Ie = /* @__PURE__ */ re({});
ae(Ie, de);
//#endregion
//#region node_modules/@shikijs/types/dist/index.mjs
var C = class extends Error {
	constructor(e) {
		super(e), this.name = "ShikiError";
	}
};
//#endregion
//#region node_modules/@shikijs/vscode-textmate/dist/index.js
function Le(e) {
	return Re(e);
}
function Re(e) {
	return Array.isArray(e) ? ze(e) : e instanceof RegExp ? e : typeof e == "object" ? Be(e) : e;
}
function ze(e) {
	let t = [];
	for (let n = 0, r = e.length; n < r; n++) t[n] = Re(e[n]);
	return t;
}
function Be(e) {
	let t = {};
	for (let n in e) t[n] = Re(e[n]);
	return t;
}
function Ve(e, ...t) {
	return t.forEach((t) => {
		for (let n in t) e[n] = t[n];
	}), e;
}
function He(e) {
	let t = ~e.lastIndexOf("/") || ~e.lastIndexOf("\\");
	return t === 0 ? e : ~t === e.length - 1 ? He(e.substring(0, e.length - 1)) : e.substr(~t + 1);
}
var Ue = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g, We = class {
	static hasCaptures(e) {
		return e === null ? !1 : (Ue.lastIndex = 0, Ue.test(e));
	}
	static replaceCaptures(e, t, n) {
		return e.replace(Ue, (e, r, i, a) => {
			let o = n[parseInt(r || i, 10)];
			if (o) {
				let e = t.substring(o.start, o.end);
				for (; e[0] === ".";) e = e.substring(1);
				switch (a) {
					case "downcase": return e.toLowerCase();
					case "upcase": return e.toUpperCase();
					default: return e;
				}
			} else return e;
		});
	}
};
function Ge(e, t) {
	return e < t ? -1 : e > t ? 1 : 0;
}
function Ke(e, t) {
	if (e === null && t === null) return 0;
	if (!e) return -1;
	if (!t) return 1;
	let n = e.length, r = t.length;
	if (n === r) {
		for (let r = 0; r < n; r++) {
			let n = Ge(e[r], t[r]);
			if (n !== 0) return n;
		}
		return 0;
	}
	return n - r;
}
function qe(e) {
	return !!(/^#[0-9a-f]{6}$/i.test(e) || /^#[0-9a-f]{8}$/i.test(e) || /^#[0-9a-f]{3}$/i.test(e) || /^#[0-9a-f]{4}$/i.test(e));
}
function Je(e) {
	return e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
}
var Ye = class {
	constructor(e) {
		this.fn = e;
	}
	cache = /* @__PURE__ */ new Map();
	get(e) {
		if (this.cache.has(e)) return this.cache.get(e);
		let t = this.fn(e);
		return this.cache.set(e, t), t;
	}
}, Xe = class {
	constructor(e, t, n) {
		this._colorMap = e, this._defaults = t, this._root = n;
	}
	static createFromRawTheme(e, t) {
		return this.createFromParsedTheme(tt(e), t);
	}
	static createFromParsedTheme(e, t) {
		return rt(e, t);
	}
	_cachedMatchRoot = new Ye((e) => this._root.match(e));
	getColorMap() {
		return this._colorMap.getColorMap();
	}
	getDefaults() {
		return this._defaults;
	}
	match(e) {
		if (e === null) return this._defaults;
		let t = e.scopeName, n = this._cachedMatchRoot.get(t).find((t) => Qe(e.parent, t.parentScopes));
		return n ? new et(n.fontStyle, n.foreground, n.background) : null;
	}
}, Ze = class e {
	constructor(e, t) {
		this.parent = e, this.scopeName = t;
	}
	static push(t, n) {
		for (let r of n) t = new e(t, r);
		return t;
	}
	static from(...t) {
		let n = null;
		for (let r = 0; r < t.length; r++) n = new e(n, t[r]);
		return n;
	}
	push(t) {
		return new e(this, t);
	}
	getSegments() {
		let e = this, t = [];
		for (; e;) t.push(e.scopeName), e = e.parent;
		return t.reverse(), t;
	}
	toString() {
		return this.getSegments().join(" ");
	}
	extends(e) {
		return this === e ? !0 : this.parent === null ? !1 : this.parent.extends(e);
	}
	getExtensionIfDefined(e) {
		let t = [], n = this;
		for (; n && n !== e;) t.push(n.scopeName), n = n.parent;
		return n === e ? t.reverse() : void 0;
	}
};
function Qe(e, t) {
	if (t.length === 0) return !0;
	for (let n = 0; n < t.length; n++) {
		let r = t[n], i = !1;
		if (r === ">") {
			if (n === t.length - 1) return !1;
			r = t[++n], i = !0;
		}
		for (; e && !$e(e.scopeName, r);) {
			if (i) return !1;
			e = e.parent;
		}
		if (!e) return !1;
		e = e.parent;
	}
	return !0;
}
function $e(e, t) {
	return t === e || e.startsWith(t) && e[t.length] === ".";
}
var et = class {
	constructor(e, t, n) {
		this.fontStyle = e, this.foregroundId = t, this.backgroundId = n;
	}
};
function tt(e) {
	if (!e || !e.settings || !Array.isArray(e.settings)) return [];
	let t = e.settings, n = [], r = 0;
	for (let e = 0, i = t.length; e < i; e++) {
		let i = t[e];
		if (!i.settings) continue;
		let a;
		if (typeof i.scope == "string") {
			let e = i.scope;
			e = e.replace(/^[,]+/, ""), e = e.replace(/[,]+$/, ""), a = e.split(",");
		} else a = Array.isArray(i.scope) ? i.scope : [""];
		let o = -1;
		if (typeof i.settings.fontStyle == "string") {
			o = 0;
			let e = i.settings.fontStyle.split(" ");
			for (let t = 0, n = e.length; t < n; t++) switch (e[t]) {
				case "italic":
					o |= 1;
					break;
				case "bold":
					o |= 2;
					break;
				case "underline":
					o |= 4;
					break;
				case "strikethrough":
					o |= 8;
					break;
			}
		}
		let s = null;
		typeof i.settings.foreground == "string" && qe(i.settings.foreground) && (s = i.settings.foreground);
		let c = null;
		typeof i.settings.background == "string" && qe(i.settings.background) && (c = i.settings.background);
		for (let t = 0, i = a.length; t < i; t++) {
			let i = a[t].trim().split(" "), l = i[i.length - 1], u = null;
			i.length > 1 && (u = i.slice(0, i.length - 1), u.reverse()), n[r++] = new nt(l, u, e, o, s, c);
		}
	}
	return n;
}
var nt = class {
	constructor(e, t, n, r, i, a) {
		this.scope = e, this.parentScopes = t, this.index = n, this.fontStyle = r, this.foreground = i, this.background = a;
	}
}, w = /* @__PURE__ */ ((e) => (e[e.NotSet = -1] = "NotSet", e[e.None = 0] = "None", e[e.Italic = 1] = "Italic", e[e.Bold = 2] = "Bold", e[e.Underline = 4] = "Underline", e[e.Strikethrough = 8] = "Strikethrough", e))(w || {});
function rt(e, t) {
	e.sort((e, t) => {
		let n = Ge(e.scope, t.scope);
		return n !== 0 || (n = Ke(e.parentScopes, t.parentScopes), n !== 0) ? n : e.index - t.index;
	});
	let n = 0, r = "#000000", i = "#ffffff";
	for (; e.length >= 1 && e[0].scope === "";) {
		let t = e.shift();
		t.fontStyle !== -1 && (n = t.fontStyle), t.foreground !== null && (r = t.foreground), t.background !== null && (i = t.background);
	}
	let a = new it(t), o = new et(n, a.getId(r), a.getId(i)), s = new st(new ot(0, null, -1, 0, 0), []);
	for (let t = 0, n = e.length; t < n; t++) {
		let n = e[t];
		s.insert(0, n.scope, n.parentScopes, n.fontStyle, a.getId(n.foreground), a.getId(n.background));
	}
	return new Xe(a, o, s);
}
var it = class {
	_isFrozen;
	_lastColorId;
	_id2color;
	_color2id;
	constructor(e) {
		if (this._lastColorId = 0, this._id2color = [], this._color2id = /* @__PURE__ */ Object.create(null), Array.isArray(e)) {
			this._isFrozen = !0;
			for (let t = 0, n = e.length; t < n; t++) this._color2id[e[t]] = t, this._id2color[t] = e[t];
		} else this._isFrozen = !1;
	}
	getId(e) {
		if (e === null) return 0;
		e = e.toUpperCase();
		let t = this._color2id[e];
		if (t) return t;
		if (this._isFrozen) throw Error(`Missing color in color map - ${e}`);
		return t = ++this._lastColorId, this._color2id[e] = t, this._id2color[t] = e, t;
	}
	getColorMap() {
		return this._id2color.slice(0);
	}
}, at = Object.freeze([]), ot = class e {
	scopeDepth;
	parentScopes;
	fontStyle;
	foreground;
	background;
	constructor(e, t, n, r, i) {
		this.scopeDepth = e, this.parentScopes = t || at, this.fontStyle = n, this.foreground = r, this.background = i;
	}
	clone() {
		return new e(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background);
	}
	static cloneArr(e) {
		let t = [];
		for (let n = 0, r = e.length; n < r; n++) t[n] = e[n].clone();
		return t;
	}
	acceptOverwrite(e, t, n, r) {
		this.scopeDepth > e ? console.log("how did this happen?") : this.scopeDepth = e, t !== -1 && (this.fontStyle = t), n !== 0 && (this.foreground = n), r !== 0 && (this.background = r);
	}
}, st = class e {
	constructor(e, t = [], n = {}) {
		this._mainRule = e, this._children = n, this._rulesWithParentScopes = t;
	}
	_rulesWithParentScopes;
	static _cmpBySpecificity(e, t) {
		if (e.scopeDepth !== t.scopeDepth) return t.scopeDepth - e.scopeDepth;
		let n = 0, r = 0;
		for (; e.parentScopes[n] === ">" && n++, t.parentScopes[r] === ">" && r++, !(n >= e.parentScopes.length || r >= t.parentScopes.length);) {
			let i = t.parentScopes[r].length - e.parentScopes[n].length;
			if (i !== 0) return i;
			n++, r++;
		}
		return t.parentScopes.length - e.parentScopes.length;
	}
	match(t) {
		if (t !== "") {
			let e = t.indexOf("."), n, r;
			if (e === -1 ? (n = t, r = "") : (n = t.substring(0, e), r = t.substring(e + 1)), this._children.hasOwnProperty(n)) return this._children[n].match(r);
		}
		let n = this._rulesWithParentScopes.concat(this._mainRule);
		return n.sort(e._cmpBySpecificity), n;
	}
	insert(t, n, r, i, a, o) {
		if (n === "") {
			this._doInsertHere(t, r, i, a, o);
			return;
		}
		let s = n.indexOf("."), c, l;
		s === -1 ? (c = n, l = "") : (c = n.substring(0, s), l = n.substring(s + 1));
		let u;
		this._children.hasOwnProperty(c) ? u = this._children[c] : (u = new e(this._mainRule.clone(), ot.cloneArr(this._rulesWithParentScopes)), this._children[c] = u), u.insert(t + 1, l, r, i, a, o);
	}
	_doInsertHere(e, t, n, r, i) {
		if (t === null) {
			this._mainRule.acceptOverwrite(e, n, r, i);
			return;
		}
		for (let a = 0, o = this._rulesWithParentScopes.length; a < o; a++) {
			let o = this._rulesWithParentScopes[a];
			if (Ke(o.parentScopes, t) === 0) {
				o.acceptOverwrite(e, n, r, i);
				return;
			}
		}
		n === -1 && (n = this._mainRule.fontStyle), r === 0 && (r = this._mainRule.foreground), i === 0 && (i = this._mainRule.background), this._rulesWithParentScopes.push(new ot(e, t, n, r, i));
	}
}, T = class e {
	static toBinaryStr(e) {
		return e.toString(2).padStart(32, "0");
	}
	static print(t) {
		let n = e.getLanguageId(t), r = e.getTokenType(t), i = e.getFontStyle(t), a = e.getForeground(t), o = e.getBackground(t);
		console.log({
			languageId: n,
			tokenType: r,
			fontStyle: i,
			foreground: a,
			background: o
		});
	}
	static getLanguageId(e) {
		return (e & 255) >>> 0;
	}
	static getTokenType(e) {
		return (e & 768) >>> 8;
	}
	static containsBalancedBrackets(e) {
		return (e & 1024) != 0;
	}
	static getFontStyle(e) {
		return (e & 30720) >>> 11;
	}
	static getForeground(e) {
		return (e & 16744448) >>> 15;
	}
	static getBackground(e) {
		return (e & 4278190080) >>> 24;
	}
	static set(t, n, r, i, a, o, s) {
		let c = e.getLanguageId(t), l = e.getTokenType(t), u = e.containsBalancedBrackets(t) ? 1 : 0, d = e.getFontStyle(t), f = e.getForeground(t), p = e.getBackground(t);
		return n !== 0 && (c = n), r !== 8 && (l = lt(r)), i !== null && (u = i ? 1 : 0), a !== -1 && (d = a), o !== 0 && (f = o), s !== 0 && (p = s), (c << 0 | l << 8 | u << 10 | d << 11 | f << 15 | p << 24) >>> 0;
	}
};
function ct(e) {
	return e;
}
function lt(e) {
	return e;
}
function ut(e, t) {
	let n = [], r = ft(e), i = r.next();
	for (; i !== null;) {
		let e = 0;
		if (i.length === 2 && i.charAt(1) === ":") {
			switch (i.charAt(0)) {
				case "R":
					e = 1;
					break;
				case "L":
					e = -1;
					break;
				default: console.log(`Unknown priority ${i} in scope selector`);
			}
			i = r.next();
		}
		let t = o();
		if (n.push({
			matcher: t,
			priority: e
		}), i !== ",") break;
		i = r.next();
	}
	return n;
	function a() {
		if (i === "-") {
			i = r.next();
			let e = a();
			return (t) => !!e && !e(t);
		}
		if (i === "(") {
			i = r.next();
			let e = s();
			return i === ")" && (i = r.next()), e;
		}
		if (dt(i)) {
			let e = [];
			do
				e.push(i), i = r.next();
			while (dt(i));
			return (n) => t(e, n);
		}
		return null;
	}
	function o() {
		let e = [], t = a();
		for (; t;) e.push(t), t = a();
		return (t) => e.every((e) => e(t));
	}
	function s() {
		let e = [], t = o();
		for (; t && (e.push(t), i === "|" || i === ",");) {
			do
				i = r.next();
			while (i === "|" || i === ",");
			t = o();
		}
		return (t) => e.some((e) => e(t));
	}
}
function dt(e) {
	return !!e && !!e.match(/[\w\.:]+/);
}
function ft(e) {
	let t = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g, n = t.exec(e);
	return { next: () => {
		if (!n) return null;
		let r = n[0];
		return n = t.exec(e), r;
	} };
}
function pt(e) {
	typeof e.dispose == "function" && e.dispose();
}
var E = class {
	constructor(e) {
		this.scopeName = e;
	}
	toKey() {
		return this.scopeName;
	}
}, mt = class {
	constructor(e, t) {
		this.scopeName = e, this.ruleName = t;
	}
	toKey() {
		return `${this.scopeName}#${this.ruleName}`;
	}
}, ht = class {
	_references = [];
	_seenReferenceKeys = /* @__PURE__ */ new Set();
	get references() {
		return this._references;
	}
	visitedRule = /* @__PURE__ */ new Set();
	add(e) {
		let t = e.toKey();
		this._seenReferenceKeys.has(t) || (this._seenReferenceKeys.add(t), this._references.push(e));
	}
}, gt = class {
	constructor(e, t) {
		this.repo = e, this.initialScopeName = t, this.seenFullScopeRequests.add(this.initialScopeName), this.Q = [new E(this.initialScopeName)];
	}
	seenFullScopeRequests = /* @__PURE__ */ new Set();
	seenPartialScopeRequests = /* @__PURE__ */ new Set();
	Q;
	processQueue() {
		let e = this.Q;
		this.Q = [];
		let t = new ht();
		for (let n of e) _t(n, this.initialScopeName, this.repo, t);
		for (let e of t.references) if (e instanceof E) {
			if (this.seenFullScopeRequests.has(e.scopeName)) continue;
			this.seenFullScopeRequests.add(e.scopeName), this.Q.push(e);
		} else {
			if (this.seenFullScopeRequests.has(e.scopeName) || this.seenPartialScopeRequests.has(e.toKey())) continue;
			this.seenPartialScopeRequests.add(e.toKey()), this.Q.push(e);
		}
	}
};
function _t(e, t, n, r) {
	let i = n.lookup(e.scopeName);
	if (!i) {
		if (e.scopeName === t) throw Error(`No grammar provided for <${t}>`);
		return;
	}
	let a = n.lookup(t);
	e instanceof E ? D({
		baseGrammar: a,
		selfGrammar: i
	}, r) : vt(e.ruleName, {
		baseGrammar: a,
		selfGrammar: i,
		repository: i.repository
	}, r);
	let o = n.injections(e.scopeName);
	if (o) for (let e of o) r.add(new E(e));
}
function vt(e, t, n) {
	if (t.repository && t.repository[e]) {
		let r = t.repository[e];
		O([r], t, n);
	}
}
function D(e, t) {
	e.selfGrammar.patterns && Array.isArray(e.selfGrammar.patterns) && O(e.selfGrammar.patterns, {
		...e,
		repository: e.selfGrammar.repository
	}, t), e.selfGrammar.injections && O(Object.values(e.selfGrammar.injections), {
		...e,
		repository: e.selfGrammar.repository
	}, t);
}
function O(e, t, n) {
	for (let r of e) {
		if (n.visitedRule.has(r)) continue;
		n.visitedRule.add(r);
		let e = r.repository ? Ve({}, t.repository, r.repository) : t.repository;
		Array.isArray(r.patterns) && O(r.patterns, {
			...t,
			repository: e
		}, n);
		let i = r.include;
		if (!i) continue;
		let a = wt(i);
		switch (a.kind) {
			case 0:
				D({
					...t,
					selfGrammar: t.baseGrammar
				}, n);
				break;
			case 1:
				D(t, n);
				break;
			case 2:
				vt(a.ruleName, {
					...t,
					repository: e
				}, n);
				break;
			case 3:
			case 4:
				let r = a.scopeName === t.selfGrammar.scopeName ? t.selfGrammar : a.scopeName === t.baseGrammar.scopeName ? t.baseGrammar : void 0;
				if (r) {
					let i = {
						baseGrammar: t.baseGrammar,
						selfGrammar: r,
						repository: e
					};
					a.kind === 4 ? vt(a.ruleName, i, n) : D(i, n);
				} else a.kind === 4 ? n.add(new mt(a.scopeName, a.ruleName)) : n.add(new E(a.scopeName));
				break;
		}
	}
}
var yt = class {
	kind = 0;
}, bt = class {
	kind = 1;
}, xt = class {
	constructor(e) {
		this.ruleName = e;
	}
	kind = 2;
}, St = class {
	constructor(e) {
		this.scopeName = e;
	}
	kind = 3;
}, Ct = class {
	constructor(e, t) {
		this.scopeName = e, this.ruleName = t;
	}
	kind = 4;
};
function wt(e) {
	if (e === "$base") return new yt();
	if (e === "$self") return new bt();
	let t = e.indexOf("#");
	return t === -1 ? new St(e) : t === 0 ? new xt(e.substring(1)) : new Ct(e.substring(0, t), e.substring(t + 1));
}
var Tt = /\\(\d+)/, Et = /\\(\d+)/g, Dt = -1, Ot = -2;
function kt(e) {
	return e;
}
function At(e) {
	return e;
}
var k = class {
	$location;
	id;
	_nameIsCapturing;
	_name;
	_contentNameIsCapturing;
	_contentName;
	constructor(e, t, n, r) {
		this.$location = e, this.id = t, this._name = n || null, this._nameIsCapturing = We.hasCaptures(this._name), this._contentName = r || null, this._contentNameIsCapturing = We.hasCaptures(this._contentName);
	}
	get debugName() {
		let e = this.$location ? `${He(this.$location.filename)}:${this.$location.line}` : "unknown";
		return `${this.constructor.name}#${this.id} @ ${e}`;
	}
	getName(e, t) {
		return !this._nameIsCapturing || this._name === null || e === null || t === null ? this._name : We.replaceCaptures(this._name, e, t);
	}
	getContentName(e, t) {
		return !this._contentNameIsCapturing || this._contentName === null ? this._contentName : We.replaceCaptures(this._contentName, e, t);
	}
}, jt = class extends k {
	retokenizeCapturedWithRuleId;
	constructor(e, t, n, r, i) {
		super(e, t, n, r), this.retokenizeCapturedWithRuleId = i;
	}
	dispose() {}
	collectPatterns(e, t) {
		throw Error("Not supported!");
	}
	compile(e, t) {
		throw Error("Not supported!");
	}
	compileAG(e, t, n, r) {
		throw Error("Not supported!");
	}
}, Mt = class extends k {
	_match;
	captures;
	_cachedCompiledPatterns;
	constructor(e, t, n, r, i) {
		super(e, t, n, null), this._match = new j(r, this.id), this.captures = i, this._cachedCompiledPatterns = null;
	}
	dispose() {
		this._cachedCompiledPatterns &&= (this._cachedCompiledPatterns.dispose(), null);
	}
	get debugMatchRegExp() {
		return `${this._match.source}`;
	}
	collectPatterns(e, t) {
		t.push(this._match);
	}
	compile(e, t) {
		return this._getCachedCompiledPatterns(e).compile(e);
	}
	compileAG(e, t, n, r) {
		return this._getCachedCompiledPatterns(e).compileAG(e, n, r);
	}
	_getCachedCompiledPatterns(e) {
		return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new M(), this.collectPatterns(e, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
	}
}, Nt = class extends k {
	hasMissingPatterns;
	patterns;
	_cachedCompiledPatterns;
	constructor(e, t, n, r, i) {
		super(e, t, n, r), this.patterns = i.patterns, this.hasMissingPatterns = i.hasMissingPatterns, this._cachedCompiledPatterns = null;
	}
	dispose() {
		this._cachedCompiledPatterns &&= (this._cachedCompiledPatterns.dispose(), null);
	}
	collectPatterns(e, t) {
		for (let n of this.patterns) e.getRule(n).collectPatterns(e, t);
	}
	compile(e, t) {
		return this._getCachedCompiledPatterns(e).compile(e);
	}
	compileAG(e, t, n, r) {
		return this._getCachedCompiledPatterns(e).compileAG(e, n, r);
	}
	_getCachedCompiledPatterns(e) {
		return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new M(), this.collectPatterns(e, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
	}
}, Pt = class extends k {
	_begin;
	beginCaptures;
	_end;
	endHasBackReferences;
	endCaptures;
	applyEndPatternLast;
	hasMissingPatterns;
	patterns;
	_cachedCompiledPatterns;
	constructor(e, t, n, r, i, a, o, s, c, l) {
		super(e, t, n, r), this._begin = new j(i, this.id), this.beginCaptures = a, this._end = new j(o || "￿", -1), this.endHasBackReferences = this._end.hasBackReferences, this.endCaptures = s, this.applyEndPatternLast = c || !1, this.patterns = l.patterns, this.hasMissingPatterns = l.hasMissingPatterns, this._cachedCompiledPatterns = null;
	}
	dispose() {
		this._cachedCompiledPatterns &&= (this._cachedCompiledPatterns.dispose(), null);
	}
	get debugBeginRegExp() {
		return `${this._begin.source}`;
	}
	get debugEndRegExp() {
		return `${this._end.source}`;
	}
	getEndWithResolvedBackReferences(e, t) {
		return this._end.resolveBackReferences(e, t);
	}
	collectPatterns(e, t) {
		t.push(this._begin);
	}
	compile(e, t) {
		return this._getCachedCompiledPatterns(e, t).compile(e);
	}
	compileAG(e, t, n, r) {
		return this._getCachedCompiledPatterns(e, t).compileAG(e, n, r);
	}
	_getCachedCompiledPatterns(e, t) {
		if (!this._cachedCompiledPatterns) {
			this._cachedCompiledPatterns = new M();
			for (let t of this.patterns) e.getRule(t).collectPatterns(e, this._cachedCompiledPatterns);
			this.applyEndPatternLast ? this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end) : this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end);
		}
		return this._end.hasBackReferences && (this.applyEndPatternLast ? this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, t) : this._cachedCompiledPatterns.setSource(0, t)), this._cachedCompiledPatterns;
	}
}, A = class extends k {
	_begin;
	beginCaptures;
	whileCaptures;
	_while;
	whileHasBackReferences;
	hasMissingPatterns;
	patterns;
	_cachedCompiledPatterns;
	_cachedCompiledWhilePatterns;
	constructor(e, t, n, r, i, a, o, s, c) {
		super(e, t, n, r), this._begin = new j(i, this.id), this.beginCaptures = a, this.whileCaptures = s, this._while = new j(o, Ot), this.whileHasBackReferences = this._while.hasBackReferences, this.patterns = c.patterns, this.hasMissingPatterns = c.hasMissingPatterns, this._cachedCompiledPatterns = null, this._cachedCompiledWhilePatterns = null;
	}
	dispose() {
		this._cachedCompiledPatterns &&= (this._cachedCompiledPatterns.dispose(), null), this._cachedCompiledWhilePatterns &&= (this._cachedCompiledWhilePatterns.dispose(), null);
	}
	get debugBeginRegExp() {
		return `${this._begin.source}`;
	}
	get debugWhileRegExp() {
		return `${this._while.source}`;
	}
	getWhileWithResolvedBackReferences(e, t) {
		return this._while.resolveBackReferences(e, t);
	}
	collectPatterns(e, t) {
		t.push(this._begin);
	}
	compile(e, t) {
		return this._getCachedCompiledPatterns(e).compile(e);
	}
	compileAG(e, t, n, r) {
		return this._getCachedCompiledPatterns(e).compileAG(e, n, r);
	}
	_getCachedCompiledPatterns(e) {
		if (!this._cachedCompiledPatterns) {
			this._cachedCompiledPatterns = new M();
			for (let t of this.patterns) e.getRule(t).collectPatterns(e, this._cachedCompiledPatterns);
		}
		return this._cachedCompiledPatterns;
	}
	compileWhile(e, t) {
		return this._getCachedCompiledWhilePatterns(e, t).compile(e);
	}
	compileWhileAG(e, t, n, r) {
		return this._getCachedCompiledWhilePatterns(e, t).compileAG(e, n, r);
	}
	_getCachedCompiledWhilePatterns(e, t) {
		return this._cachedCompiledWhilePatterns || (this._cachedCompiledWhilePatterns = new M(), this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while)), this._while.hasBackReferences && this._cachedCompiledWhilePatterns.setSource(0, t || "￿"), this._cachedCompiledWhilePatterns;
	}
}, Ft = class e {
	static createCaptureRule(e, t, n, r, i) {
		return e.registerRule((e) => new jt(t, e, n, r, i));
	}
	static getCompiledRuleId(t, n, r) {
		return t.id || n.registerRule((i) => {
			if (t.id = i, t.match) return new Mt(t.$vscodeTextmateLocation, t.id, t.name, t.match, e._compileCaptures(t.captures, n, r));
			if (t.begin === void 0) {
				t.repository && (r = Ve({}, r, t.repository));
				let i = t.patterns;
				return i === void 0 && t.include && (i = [{ include: t.include }]), new Nt(t.$vscodeTextmateLocation, t.id, t.name, t.contentName, e._compilePatterns(i, n, r));
			}
			return t.while ? new A(t.$vscodeTextmateLocation, t.id, t.name, t.contentName, t.begin, e._compileCaptures(t.beginCaptures || t.captures, n, r), t.while, e._compileCaptures(t.whileCaptures || t.captures, n, r), e._compilePatterns(t.patterns, n, r)) : new Pt(t.$vscodeTextmateLocation, t.id, t.name, t.contentName, t.begin, e._compileCaptures(t.beginCaptures || t.captures, n, r), t.end, e._compileCaptures(t.endCaptures || t.captures, n, r), t.applyEndPatternLast, e._compilePatterns(t.patterns, n, r));
		}), t.id;
	}
	static _compileCaptures(t, n, r) {
		let i = [];
		if (t) {
			let a = 0;
			for (let e in t) {
				if (e === "$vscodeTextmateLocation") continue;
				let t = parseInt(e, 10);
				t > a && (a = t);
			}
			for (let e = 0; e <= a; e++) i[e] = null;
			for (let a in t) {
				if (a === "$vscodeTextmateLocation") continue;
				let o = parseInt(a, 10), s = 0;
				t[a].patterns && (s = e.getCompiledRuleId(t[a], n, r)), i[o] = e.createCaptureRule(n, t[a].$vscodeTextmateLocation, t[a].name, t[a].contentName, s);
			}
		}
		return i;
	}
	static _compilePatterns(t, n, r) {
		let i = [];
		if (t) for (let a = 0, o = t.length; a < o; a++) {
			let o = t[a], s = -1;
			if (o.include) {
				let t = wt(o.include);
				switch (t.kind) {
					case 0:
					case 1:
						s = e.getCompiledRuleId(r[o.include], n, r);
						break;
					case 2:
						let i = r[t.ruleName];
						i && (s = e.getCompiledRuleId(i, n, r));
						break;
					case 3:
					case 4:
						let a = t.scopeName, c = t.kind === 4 ? t.ruleName : null, l = n.getExternalGrammar(a, r);
						if (l) if (c) {
							let t = l.repository[c];
							t && (s = e.getCompiledRuleId(t, n, l.repository));
						} else s = e.getCompiledRuleId(l.repository.$self, n, l.repository);
						break;
				}
			} else s = e.getCompiledRuleId(o, n, r);
			if (s !== -1) {
				let e = n.getRule(s), t = !1;
				if ((e instanceof Nt || e instanceof Pt || e instanceof A) && e.hasMissingPatterns && e.patterns.length === 0 && (t = !0), t) continue;
				i.push(s);
			}
		}
		return {
			patterns: i,
			hasMissingPatterns: (t ? t.length : 0) !== i.length
		};
	}
}, j = class e {
	source;
	ruleId;
	hasAnchor;
	hasBackReferences;
	_anchorCache;
	constructor(e, t) {
		if (e && typeof e == "string") {
			let t = e.length, n = 0, r = [], i = !1;
			for (let a = 0; a < t; a++) if (e.charAt(a) === "\\" && a + 1 < t) {
				let t = e.charAt(a + 1);
				t === "z" ? (r.push(e.substring(n, a)), r.push("$(?!\\n)(?<!\\n)"), n = a + 2) : (t === "A" || t === "G") && (i = !0), a++;
			}
			this.hasAnchor = i, n === 0 ? this.source = e : (r.push(e.substring(n, t)), this.source = r.join(""));
		} else this.hasAnchor = !1, this.source = e;
		this.hasAnchor ? this._anchorCache = this._buildAnchorCache() : this._anchorCache = null, this.ruleId = t, typeof this.source == "string" ? this.hasBackReferences = Tt.test(this.source) : this.hasBackReferences = !1;
	}
	clone() {
		return new e(this.source, this.ruleId);
	}
	setSource(e) {
		this.source !== e && (this.source = e, this.hasAnchor && (this._anchorCache = this._buildAnchorCache()));
	}
	resolveBackReferences(e, t) {
		if (typeof this.source != "string") throw Error("This method should only be called if the source is a string");
		let n = t.map((t) => e.substring(t.start, t.end));
		return Et.lastIndex = 0, this.source.replace(Et, (e, t) => Je(n[parseInt(t, 10)] || ""));
	}
	_buildAnchorCache() {
		if (typeof this.source != "string") throw Error("This method should only be called if the source is a string");
		let e = [], t = [], n = [], r = [], i, a, o, s;
		for (i = 0, a = this.source.length; i < a; i++) o = this.source.charAt(i), e[i] = o, t[i] = o, n[i] = o, r[i] = o, o === "\\" && i + 1 < a && (s = this.source.charAt(i + 1), s === "A" ? (e[i + 1] = "￿", t[i + 1] = "￿", n[i + 1] = "A", r[i + 1] = "A") : s === "G" ? (e[i + 1] = "￿", t[i + 1] = "G", n[i + 1] = "￿", r[i + 1] = "G") : (e[i + 1] = s, t[i + 1] = s, n[i + 1] = s, r[i + 1] = s), i++);
		return {
			A0_G0: e.join(""),
			A0_G1: t.join(""),
			A1_G0: n.join(""),
			A1_G1: r.join("")
		};
	}
	resolveAnchors(e, t) {
		return !this.hasAnchor || !this._anchorCache || typeof this.source != "string" ? this.source : e ? t ? this._anchorCache.A1_G1 : this._anchorCache.A1_G0 : t ? this._anchorCache.A0_G1 : this._anchorCache.A0_G0;
	}
}, M = class {
	_items;
	_hasAnchors;
	_cached;
	_anchorCache;
	constructor() {
		this._items = [], this._hasAnchors = !1, this._cached = null, this._anchorCache = {
			A0_G0: null,
			A0_G1: null,
			A1_G0: null,
			A1_G1: null
		};
	}
	dispose() {
		this._disposeCaches();
	}
	_disposeCaches() {
		this._cached &&= (this._cached.dispose(), null), this._anchorCache.A0_G0 && (this._anchorCache.A0_G0.dispose(), this._anchorCache.A0_G0 = null), this._anchorCache.A0_G1 && (this._anchorCache.A0_G1.dispose(), this._anchorCache.A0_G1 = null), this._anchorCache.A1_G0 && (this._anchorCache.A1_G0.dispose(), this._anchorCache.A1_G0 = null), this._anchorCache.A1_G1 && (this._anchorCache.A1_G1.dispose(), this._anchorCache.A1_G1 = null);
	}
	push(e) {
		this._items.push(e), this._hasAnchors = this._hasAnchors || e.hasAnchor;
	}
	unshift(e) {
		this._items.unshift(e), this._hasAnchors = this._hasAnchors || e.hasAnchor;
	}
	length() {
		return this._items.length;
	}
	setSource(e, t) {
		this._items[e].source !== t && (this._disposeCaches(), this._items[e].setSource(t));
	}
	compile(e) {
		return this._cached ||= new It(e, this._items.map((e) => e.source), this._items.map((e) => e.ruleId)), this._cached;
	}
	compileAG(e, t, n) {
		return this._hasAnchors ? t ? n ? (this._anchorCache.A1_G1 || (this._anchorCache.A1_G1 = this._resolveAnchors(e, t, n)), this._anchorCache.A1_G1) : (this._anchorCache.A1_G0 || (this._anchorCache.A1_G0 = this._resolveAnchors(e, t, n)), this._anchorCache.A1_G0) : n ? (this._anchorCache.A0_G1 || (this._anchorCache.A0_G1 = this._resolveAnchors(e, t, n)), this._anchorCache.A0_G1) : (this._anchorCache.A0_G0 || (this._anchorCache.A0_G0 = this._resolveAnchors(e, t, n)), this._anchorCache.A0_G0) : this.compile(e);
	}
	_resolveAnchors(e, t, n) {
		return new It(e, this._items.map((e) => e.resolveAnchors(t, n)), this._items.map((e) => e.ruleId));
	}
}, It = class {
	constructor(e, t, n) {
		this.regExps = t, this.rules = n, this.scanner = e.createOnigScanner(t);
	}
	scanner;
	dispose() {
		typeof this.scanner.dispose == "function" && this.scanner.dispose();
	}
	toString() {
		let e = [];
		for (let t = 0, n = this.rules.length; t < n; t++) e.push("   - " + this.rules[t] + ": " + this.regExps[t]);
		return e.join("\n");
	}
	findNextMatchSync(e, t, n) {
		let r = this.scanner.findNextMatchSync(e, t, n);
		return r ? {
			ruleId: this.rules[r.index],
			captureIndices: r.captureIndices
		} : null;
	}
}, Lt = class {
	constructor(e, t) {
		this.languageId = e, this.tokenType = t;
	}
}, Rt = class e {
	_defaultAttributes;
	_embeddedLanguagesMatcher;
	constructor(e, t) {
		this._defaultAttributes = new Lt(e, 8), this._embeddedLanguagesMatcher = new zt(Object.entries(t || {}));
	}
	getDefaultAttributes() {
		return this._defaultAttributes;
	}
	getBasicScopeAttributes(t) {
		return t === null ? e._NULL_SCOPE_METADATA : this._getBasicScopeAttributes.get(t);
	}
	static _NULL_SCOPE_METADATA = new Lt(0, 0);
	_getBasicScopeAttributes = new Ye((e) => new Lt(this._scopeToLanguage(e), this._toStandardTokenType(e)));
	_scopeToLanguage(e) {
		return this._embeddedLanguagesMatcher.match(e) || 0;
	}
	_toStandardTokenType(t) {
		let n = t.match(e.STANDARD_TOKEN_TYPE_REGEXP);
		if (!n) return 8;
		switch (n[1]) {
			case "comment": return 1;
			case "string": return 2;
			case "regex": return 3;
			case "meta.embedded": return 0;
		}
		throw Error("Unexpected match for standard token type!");
	}
	static STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|meta\.embedded)\b/;
}, zt = class {
	values;
	scopesRegExp;
	constructor(e) {
		if (e.length === 0) this.values = null, this.scopesRegExp = null;
		else {
			this.values = new Map(e);
			let t = e.map(([e, t]) => Je(e));
			t.sort(), t.reverse(), this.scopesRegExp = RegExp(`^((${t.join(")|(")}))($|\\.)`, "");
		}
	}
	match(e) {
		if (!this.scopesRegExp) return;
		let t = e.match(this.scopesRegExp);
		if (t) return this.values.get(t[1]);
	}
};
typeof process < "u" && process.env.VSCODE_TEXTMATE_DEBUG;
var Bt = !1, Vt = class {
	constructor(e, t) {
		this.stack = e, this.stoppedEarly = t;
	}
};
function Ht(e, t, n, r, i, a, o, s) {
	let c = t.content.length, l = !1, u = -1;
	if (o) {
		let o = Ut(e, t, n, r, i, a);
		i = o.stack, r = o.linePos, n = o.isFirstLine, u = o.anchorPosition;
	}
	let d = Date.now();
	for (; !l;) {
		if (s !== 0 && Date.now() - d > s) return new Vt(i, !0);
		f();
	}
	return new Vt(i, !1);
	function f() {
		let o = Wt(e, t, n, r, i, u);
		if (!o) {
			a.produce(i, c), l = !0;
			return;
		}
		let s = o.captureIndices, d = o.matchedRuleId, f = s && s.length > 0 ? s[0].end > r : !1;
		if (d === Dt) {
			let o = i.getRule(e);
			a.produce(i, s[0].start), i = i.withContentNameScopesList(i.nameScopesList), N(e, t, n, i, a, o.endCaptures, s), a.produce(i, s[0].end);
			let d = i;
			if (i = i.parent, u = d.getAnchorPos(), !f && d.getEnterPos() === r) {
				i = d, a.produce(i, c), l = !0;
				return;
			}
		} else {
			let o = e.getRule(d);
			a.produce(i, s[0].start);
			let p = i, m = o.getName(t.content, s), h = i.contentNameScopesList.pushAttributed(m, e);
			if (i = i.push(d, r, u, s[0].end === c, null, h, h), o instanceof Pt) {
				let r = o;
				N(e, t, n, i, a, r.beginCaptures, s), a.produce(i, s[0].end), u = s[0].end;
				let d = r.getContentName(t.content, s), m = h.pushAttributed(d, e);
				if (i = i.withContentNameScopesList(m), r.endHasBackReferences && (i = i.withEndRule(r.getEndWithResolvedBackReferences(t.content, s))), !f && p.hasSameRuleAs(i)) {
					i = i.pop(), a.produce(i, c), l = !0;
					return;
				}
			} else if (o instanceof A) {
				let r = o;
				N(e, t, n, i, a, r.beginCaptures, s), a.produce(i, s[0].end), u = s[0].end;
				let d = r.getContentName(t.content, s), m = h.pushAttributed(d, e);
				if (i = i.withContentNameScopesList(m), r.whileHasBackReferences && (i = i.withEndRule(r.getWhileWithResolvedBackReferences(t.content, s))), !f && p.hasSameRuleAs(i)) {
					i = i.pop(), a.produce(i, c), l = !0;
					return;
				}
			} else if (N(e, t, n, i, a, o.captures, s), a.produce(i, s[0].end), i = i.pop(), !f) {
				i = i.safePop(), a.produce(i, c), l = !0;
				return;
			}
		}
		s[0].end > r && (r = s[0].end, n = !1);
	}
}
function Ut(e, t, n, r, i, a) {
	let o = i.beginRuleCapturedEOL ? 0 : -1, s = [];
	for (let t = i; t; t = t.pop()) {
		let n = t.getRule(e);
		n instanceof A && s.push({
			rule: n,
			stack: t
		});
	}
	for (let c = s.pop(); c; c = s.pop()) {
		let { ruleScanner: s, findOptions: l } = Jt(c.rule, e, c.stack.endRule, n, r === o), u = s.findNextMatchSync(t, r, l);
		if (u) {
			if (u.ruleId !== Ot) {
				i = c.stack.pop();
				break;
			}
			u.captureIndices && u.captureIndices.length && (a.produce(c.stack, u.captureIndices[0].start), N(e, t, n, c.stack, a, c.rule.whileCaptures, u.captureIndices), a.produce(c.stack, u.captureIndices[0].end), o = u.captureIndices[0].end, u.captureIndices[0].end > r && (r = u.captureIndices[0].end, n = !1));
		} else {
			i = c.stack.pop();
			break;
		}
	}
	return {
		stack: i,
		linePos: r,
		anchorPosition: o,
		isFirstLine: n
	};
}
function Wt(e, t, n, r, i, a) {
	let o = Gt(e, t, n, r, i, a), s = e.getInjections();
	if (s.length === 0) return o;
	let c = Kt(s, e, t, n, r, i, a);
	if (!c) return o;
	if (!o) return c;
	let l = o.captureIndices[0].start, u = c.captureIndices[0].start;
	return u < l || c.priorityMatch && u === l ? c : o;
}
function Gt(e, t, n, r, i, a) {
	let { ruleScanner: o, findOptions: s } = qt(i.getRule(e), e, i.endRule, n, r === a), c = o.findNextMatchSync(t, r, s);
	return c ? {
		captureIndices: c.captureIndices,
		matchedRuleId: c.ruleId
	} : null;
}
function Kt(e, t, n, r, i, a, o) {
	let s = Number.MAX_VALUE, c = null, l, u = 0, d = a.contentNameScopesList.getScopeNames();
	for (let a = 0, f = e.length; a < f; a++) {
		let f = e[a];
		if (!f.matcher(d)) continue;
		let { ruleScanner: p, findOptions: m } = qt(t.getRule(f.ruleId), t, null, r, i === o), h = p.findNextMatchSync(n, i, m);
		if (!h) continue;
		let g = h.captureIndices[0].start;
		if (!(g >= s) && (s = g, c = h.captureIndices, l = h.ruleId, u = f.priority, s === i)) break;
	}
	return c ? {
		priorityMatch: u === -1,
		captureIndices: c,
		matchedRuleId: l
	} : null;
}
function qt(e, t, n, r, i) {
	return Bt ? {
		ruleScanner: e.compile(t, n),
		findOptions: Yt(r, i)
	} : {
		ruleScanner: e.compileAG(t, n, r, i),
		findOptions: 0
	};
}
function Jt(e, t, n, r, i) {
	return Bt ? {
		ruleScanner: e.compileWhile(t, n),
		findOptions: Yt(r, i)
	} : {
		ruleScanner: e.compileWhileAG(t, n, r, i),
		findOptions: 0
	};
}
function Yt(e, t) {
	let n = 0;
	return e || (n |= 1), t || (n |= 4), n;
}
function N(e, t, n, r, i, a, o) {
	if (a.length === 0) return;
	let s = t.content, c = Math.min(a.length, o.length), l = [], u = o[0].end;
	for (let t = 0; t < c; t++) {
		let c = a[t];
		if (c === null) continue;
		let d = o[t];
		if (d.length === 0) continue;
		if (d.start > u) break;
		for (; l.length > 0 && l[l.length - 1].endPos <= d.start;) i.produceFromScopes(l[l.length - 1].scopes, l[l.length - 1].endPos), l.pop();
		if (l.length > 0 ? i.produceFromScopes(l[l.length - 1].scopes, d.start) : i.produce(r, d.start), c.retokenizeCapturedWithRuleId) {
			let t = c.getName(s, o), a = r.contentNameScopesList.pushAttributed(t, e), l = c.getContentName(s, o), u = a.pushAttributed(l, e), f = r.push(c.retokenizeCapturedWithRuleId, d.start, -1, !1, null, a, u), p = e.createOnigString(s.substring(0, d.end));
			Ht(e, p, n && d.start === 0, d.start, f, i, !1, 0), pt(p);
			continue;
		}
		let f = c.getName(s, o);
		if (f !== null) {
			let t = (l.length > 0 ? l[l.length - 1].scopes : r.contentNameScopesList).pushAttributed(f, e);
			l.push(new Xt(t, d.end));
		}
	}
	for (; l.length > 0;) i.produceFromScopes(l[l.length - 1].scopes, l[l.length - 1].endPos), l.pop();
}
var Xt = class {
	scopes;
	endPos;
	constructor(e, t) {
		this.scopes = e, this.endPos = t;
	}
};
function Zt(e, t, n, r, i, a, o, s) {
	return new en(e, t, n, r, i, a, o, s);
}
function Qt(e, t, n, r, i) {
	let a = ut(t, P), o = Ft.getCompiledRuleId(n, r, i.repository);
	for (let n of a) e.push({
		debugSelector: t,
		matcher: n.matcher,
		ruleId: o,
		grammar: i,
		priority: n.priority
	});
}
function P(e, t) {
	if (t.length < e.length) return !1;
	let n = 0;
	return e.every((e) => {
		for (let r = n; r < t.length; r++) if ($t(t[r], e)) return n = r + 1, !0;
		return !1;
	});
}
function $t(e, t) {
	if (!e) return !1;
	if (e === t) return !0;
	let n = t.length;
	return e.length > n && e.substr(0, n) === t && e[n] === ".";
}
var en = class {
	constructor(e, t, n, r, i, a, o, s) {
		if (this._rootScopeName = e, this.balancedBracketSelectors = a, this._onigLib = s, this._basicScopeAttributesProvider = new Rt(n, r), this._rootId = -1, this._lastRuleId = 0, this._ruleId2desc = [null], this._includedGrammars = {}, this._grammarRepository = o, this._grammar = tn(t, null), this._injections = null, this._tokenTypeMatchers = [], i) for (let e of Object.keys(i)) {
			let t = ut(e, P);
			for (let n of t) this._tokenTypeMatchers.push({
				matcher: n.matcher,
				type: i[e]
			});
		}
	}
	_rootId;
	_lastRuleId;
	_ruleId2desc;
	_includedGrammars;
	_grammarRepository;
	_grammar;
	_injections;
	_basicScopeAttributesProvider;
	_tokenTypeMatchers;
	get themeProvider() {
		return this._grammarRepository;
	}
	dispose() {
		for (let e of this._ruleId2desc) e && e.dispose();
	}
	createOnigScanner(e) {
		return this._onigLib.createOnigScanner(e);
	}
	createOnigString(e) {
		return this._onigLib.createOnigString(e);
	}
	getMetadataForScope(e) {
		return this._basicScopeAttributesProvider.getBasicScopeAttributes(e);
	}
	_collectInjections() {
		let e = {
			lookup: (e) => e === this._rootScopeName ? this._grammar : this.getExternalGrammar(e),
			injections: (e) => this._grammarRepository.injections(e)
		}, t = [], n = this._rootScopeName, r = e.lookup(n);
		if (r) {
			let e = r.injections;
			if (e) for (let n in e) Qt(t, n, e[n], this, r);
			let i = this._grammarRepository.injections(n);
			i && i.forEach((e) => {
				let n = this.getExternalGrammar(e);
				if (n) {
					let e = n.injectionSelector;
					e && Qt(t, e, n, this, n);
				}
			});
		}
		return t.sort((e, t) => e.priority - t.priority), t;
	}
	getInjections() {
		return this._injections === null && (this._injections = this._collectInjections()), this._injections;
	}
	registerRule(e) {
		let t = ++this._lastRuleId, n = e(kt(t));
		return this._ruleId2desc[t] = n, n;
	}
	getRule(e) {
		return this._ruleId2desc[At(e)];
	}
	getExternalGrammar(e, t) {
		if (this._includedGrammars[e]) return this._includedGrammars[e];
		if (this._grammarRepository) {
			let n = this._grammarRepository.lookup(e);
			if (n) return this._includedGrammars[e] = tn(n, t && t.$base), this._includedGrammars[e];
		}
	}
	tokenizeLine(e, t, n = 0) {
		let r = this._tokenize(e, t, !1, n);
		return {
			tokens: r.lineTokens.getResult(r.ruleStack, r.lineLength),
			ruleStack: r.ruleStack,
			stoppedEarly: r.stoppedEarly
		};
	}
	tokenizeLine2(e, t, n = 0) {
		let r = this._tokenize(e, t, !0, n);
		return {
			tokens: r.lineTokens.getBinaryResult(r.ruleStack, r.lineLength),
			ruleStack: r.ruleStack,
			stoppedEarly: r.stoppedEarly
		};
	}
	_tokenize(e, t, n, r) {
		this._rootId === -1 && (this._rootId = Ft.getCompiledRuleId(this._grammar.repository.$self, this, this._grammar.repository), this.getInjections());
		let i;
		if (!t || t === nn.NULL) {
			i = !0;
			let e = this._basicScopeAttributesProvider.getDefaultAttributes(), n = this.themeProvider.getDefaults(), r = T.set(0, e.languageId, e.tokenType, null, n.fontStyle, n.foregroundId, n.backgroundId), a = this.getRule(this._rootId).getName(null, null), o;
			o = a ? F.createRootAndLookUpScopeName(a, r, this) : F.createRoot("unknown", r), t = new nn(null, this._rootId, -1, -1, !1, null, o, o);
		} else i = !1, t.reset();
		e += "\n";
		let a = this.createOnigString(e), o = a.content.length, s = new an(n, e, this._tokenTypeMatchers, this.balancedBracketSelectors), c = Ht(this, a, i, 0, t, s, !0, r);
		return pt(a), {
			lineLength: o,
			lineTokens: s,
			ruleStack: c.stack,
			stoppedEarly: c.stoppedEarly
		};
	}
};
function tn(e, t) {
	return e = Le(e), e.repository = e.repository || {}, e.repository.$self = {
		$vscodeTextmateLocation: e.$vscodeTextmateLocation,
		patterns: e.patterns,
		name: e.scopeName
	}, e.repository.$base = t || e.repository.$self, e;
}
var F = class e {
	constructor(e, t, n) {
		this.parent = e, this.scopePath = t, this.tokenAttributes = n;
	}
	static fromExtension(t, n) {
		let r = t, i = t?.scopePath ?? null;
		for (let t of n) i = Ze.push(i, t.scopeNames), r = new e(r, i, t.encodedTokenAttributes);
		return r;
	}
	static createRoot(t, n) {
		return new e(null, new Ze(null, t), n);
	}
	static createRootAndLookUpScopeName(t, n, r) {
		let i = r.getMetadataForScope(t), a = new Ze(null, t), o = r.themeProvider.themeMatch(a);
		return new e(null, a, e.mergeAttributes(n, i, o));
	}
	get scopeName() {
		return this.scopePath.scopeName;
	}
	toString() {
		return this.getScopeNames().join(" ");
	}
	equals(t) {
		return e.equals(this, t);
	}
	static equals(e, t) {
		do {
			if (e === t || !e && !t) return !0;
			if (!e || !t || e.scopeName !== t.scopeName || e.tokenAttributes !== t.tokenAttributes) return !1;
			e = e.parent, t = t.parent;
		} while (!0);
	}
	static mergeAttributes(e, t, n) {
		let r = -1, i = 0, a = 0;
		return n !== null && (r = n.fontStyle, i = n.foregroundId, a = n.backgroundId), T.set(e, t.languageId, t.tokenType, null, r, i, a);
	}
	pushAttributed(t, n) {
		if (t === null) return this;
		if (t.indexOf(" ") === -1) return e._pushAttributed(this, t, n);
		let r = t.split(/ /g), i = this;
		for (let t of r) i = e._pushAttributed(i, t, n);
		return i;
	}
	static _pushAttributed(t, n, r) {
		let i = r.getMetadataForScope(n), a = t.scopePath.push(n), o = r.themeProvider.themeMatch(a);
		return new e(t, a, e.mergeAttributes(t.tokenAttributes, i, o));
	}
	getScopeNames() {
		return this.scopePath.getSegments();
	}
	getExtensionIfDefined(e) {
		let t = [], n = this;
		for (; n && n !== e;) t.push({
			encodedTokenAttributes: n.tokenAttributes,
			scopeNames: n.scopePath.getExtensionIfDefined(n.parent?.scopePath ?? null)
		}), n = n.parent;
		return n === e ? t.reverse() : void 0;
	}
}, nn = class e {
	constructor(e, t, n, r, i, a, o, s) {
		this.parent = e, this.ruleId = t, this.beginRuleCapturedEOL = i, this.endRule = a, this.nameScopesList = o, this.contentNameScopesList = s, this.depth = this.parent ? this.parent.depth + 1 : 1, this._enterPos = n, this._anchorPos = r;
	}
	_stackElementBrand = void 0;
	static NULL = new e(null, 0, 0, 0, !1, null, null, null);
	_enterPos;
	_anchorPos;
	depth;
	equals(t) {
		return t === null ? !1 : e._equals(this, t);
	}
	static _equals(e, t) {
		return e === t ? !0 : this._structuralEquals(e, t) ? F.equals(e.contentNameScopesList, t.contentNameScopesList) : !1;
	}
	static _structuralEquals(e, t) {
		do {
			if (e === t || !e && !t) return !0;
			if (!e || !t || e.depth !== t.depth || e.ruleId !== t.ruleId || e.endRule !== t.endRule) return !1;
			e = e.parent, t = t.parent;
		} while (!0);
	}
	clone() {
		return this;
	}
	static _reset(e) {
		for (; e;) e._enterPos = -1, e._anchorPos = -1, e = e.parent;
	}
	reset() {
		e._reset(this);
	}
	pop() {
		return this.parent;
	}
	safePop() {
		return this.parent ? this.parent : this;
	}
	push(t, n, r, i, a, o, s) {
		return new e(this, t, n, r, i, a, o, s);
	}
	getEnterPos() {
		return this._enterPos;
	}
	getAnchorPos() {
		return this._anchorPos;
	}
	getRule(e) {
		return e.getRule(this.ruleId);
	}
	toString() {
		let e = [];
		return this._writeString(e, 0), "[" + e.join(",") + "]";
	}
	_writeString(e, t) {
		return this.parent && (t = this.parent._writeString(e, t)), e[t++] = `(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`, t;
	}
	withContentNameScopesList(e) {
		return this.contentNameScopesList === e ? this : this.parent.push(this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, this.endRule, this.nameScopesList, e);
	}
	withEndRule(t) {
		return this.endRule === t ? this : new e(this.parent, this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, t, this.nameScopesList, this.contentNameScopesList);
	}
	hasSameRuleAs(e) {
		let t = this;
		for (; t && t._enterPos === e._enterPos;) {
			if (t.ruleId === e.ruleId) return !0;
			t = t.parent;
		}
		return !1;
	}
	toStateStackFrame() {
		return {
			ruleId: At(this.ruleId),
			beginRuleCapturedEOL: this.beginRuleCapturedEOL,
			endRule: this.endRule,
			nameScopesList: this.nameScopesList?.getExtensionIfDefined(this.parent?.nameScopesList ?? null) ?? [],
			contentNameScopesList: this.contentNameScopesList?.getExtensionIfDefined(this.nameScopesList) ?? []
		};
	}
	static pushFrame(t, n) {
		let r = F.fromExtension(t?.nameScopesList ?? null, n.nameScopesList);
		return new e(t, kt(n.ruleId), n.enterPos ?? -1, n.anchorPos ?? -1, n.beginRuleCapturedEOL, n.endRule, r, F.fromExtension(r, n.contentNameScopesList));
	}
}, rn = class {
	balancedBracketScopes;
	unbalancedBracketScopes;
	allowAny = !1;
	constructor(e, t) {
		this.balancedBracketScopes = e.flatMap((e) => e === "*" ? (this.allowAny = !0, []) : ut(e, P).map((e) => e.matcher)), this.unbalancedBracketScopes = t.flatMap((e) => ut(e, P).map((e) => e.matcher));
	}
	get matchesAlways() {
		return this.allowAny && this.unbalancedBracketScopes.length === 0;
	}
	get matchesNever() {
		return this.balancedBracketScopes.length === 0 && !this.allowAny;
	}
	match(e) {
		for (let t of this.unbalancedBracketScopes) if (t(e)) return !1;
		for (let t of this.balancedBracketScopes) if (t(e)) return !0;
		return this.allowAny;
	}
}, an = class {
	constructor(e, t, n, r) {
		this.balancedBracketSelectors = r, this._emitBinaryTokens = e, this._tokenTypeOverrides = n, this._lineText = null, this._tokens = [], this._binaryTokens = [], this._lastTokenEndIndex = 0;
	}
	_emitBinaryTokens;
	_lineText;
	_tokens;
	_binaryTokens;
	_lastTokenEndIndex;
	_tokenTypeOverrides;
	produce(e, t) {
		this.produceFromScopes(e.contentNameScopesList, t);
	}
	produceFromScopes(e, t) {
		if (this._lastTokenEndIndex >= t) return;
		if (this._emitBinaryTokens) {
			let n = e?.tokenAttributes ?? 0, r = !1;
			if (this.balancedBracketSelectors?.matchesAlways && (r = !0), this._tokenTypeOverrides.length > 0 || this.balancedBracketSelectors && !this.balancedBracketSelectors.matchesAlways && !this.balancedBracketSelectors.matchesNever) {
				let t = e?.getScopeNames() ?? [];
				for (let e of this._tokenTypeOverrides) e.matcher(t) && (n = T.set(n, 0, ct(e.type), null, -1, 0, 0));
				this.balancedBracketSelectors && (r = this.balancedBracketSelectors.match(t));
			}
			if (r && (n = T.set(n, 0, 8, r, -1, 0, 0)), this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === n) {
				this._lastTokenEndIndex = t;
				return;
			}
			this._binaryTokens.push(this._lastTokenEndIndex), this._binaryTokens.push(n), this._lastTokenEndIndex = t;
			return;
		}
		let n = e?.getScopeNames() ?? [];
		this._tokens.push({
			startIndex: this._lastTokenEndIndex,
			endIndex: t,
			scopes: n
		}), this._lastTokenEndIndex = t;
	}
	getResult(e, t) {
		return this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === t - 1 && this._tokens.pop(), this._tokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(e, t), this._tokens[this._tokens.length - 1].startIndex = 0), this._tokens;
	}
	getBinaryResult(e, t) {
		this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === t - 1 && (this._binaryTokens.pop(), this._binaryTokens.pop()), this._binaryTokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(e, t), this._binaryTokens[this._binaryTokens.length - 2] = 0);
		let n = new Uint32Array(this._binaryTokens.length);
		for (let e = 0, t = this._binaryTokens.length; e < t; e++) n[e] = this._binaryTokens[e];
		return n;
	}
}, on = class {
	constructor(e, t) {
		this._onigLib = t, this._theme = e;
	}
	_grammars = /* @__PURE__ */ new Map();
	_rawGrammars = /* @__PURE__ */ new Map();
	_injectionGrammars = /* @__PURE__ */ new Map();
	_theme;
	dispose() {
		for (let e of this._grammars.values()) e.dispose();
	}
	setTheme(e) {
		this._theme = e;
	}
	getColorMap() {
		return this._theme.getColorMap();
	}
	addGrammar(e, t) {
		this._rawGrammars.set(e.scopeName, e), t && this._injectionGrammars.set(e.scopeName, t);
	}
	lookup(e) {
		return this._rawGrammars.get(e);
	}
	injections(e) {
		return this._injectionGrammars.get(e);
	}
	getDefaults() {
		return this._theme.getDefaults();
	}
	themeMatch(e) {
		return this._theme.match(e);
	}
	grammarForScopeName(e, t, n, r, i) {
		if (!this._grammars.has(e)) {
			let a = this._rawGrammars.get(e);
			if (!a) return null;
			this._grammars.set(e, Zt(e, a, t, n, r, i, this, this._onigLib));
		}
		return this._grammars.get(e);
	}
}, sn = class {
	_options;
	_syncRegistry;
	_ensureGrammarCache;
	constructor(e) {
		this._options = e, this._syncRegistry = new on(Xe.createFromRawTheme(e.theme, e.colorMap), e.onigLib), this._ensureGrammarCache = /* @__PURE__ */ new Map();
	}
	dispose() {
		this._syncRegistry.dispose();
	}
	setTheme(e, t) {
		this._syncRegistry.setTheme(Xe.createFromRawTheme(e, t));
	}
	getColorMap() {
		return this._syncRegistry.getColorMap();
	}
	loadGrammarWithEmbeddedLanguages(e, t, n) {
		return this.loadGrammarWithConfiguration(e, t, { embeddedLanguages: n });
	}
	loadGrammarWithConfiguration(e, t, n) {
		return this._loadGrammar(e, t, n.embeddedLanguages, n.tokenTypes, new rn(n.balancedBracketSelectors || [], n.unbalancedBracketSelectors || []));
	}
	loadGrammar(e) {
		return this._loadGrammar(e, 0, null, null, null);
	}
	_loadGrammar(e, t, n, r, i) {
		let a = new gt(this._syncRegistry, e);
		for (; a.Q.length > 0;) a.Q.map((e) => this._loadSingleGrammar(e.scopeName)), a.processQueue();
		return this._grammarForScopeName(e, t, n, r, i);
	}
	_loadSingleGrammar(e) {
		this._ensureGrammarCache.has(e) || (this._doLoadSingleGrammar(e), this._ensureGrammarCache.set(e, !0));
	}
	_doLoadSingleGrammar(e) {
		let t = this._options.loadGrammar(e);
		if (t) {
			let n = typeof this._options.getInjections == "function" ? this._options.getInjections(e) : void 0;
			this._syncRegistry.addGrammar(t, n);
		}
	}
	addGrammar(e, t = [], n = 0, r = null) {
		return this._syncRegistry.addGrammar(e, t), this._grammarForScopeName(e.scopeName, n, r);
	}
	_grammarForScopeName(e, t = 0, n = null, r = null, i = null) {
		return this._syncRegistry.grammarForScopeName(e, t, n, r, i);
	}
}, cn = nn.NULL;
//#endregion
//#region node_modules/@shikijs/primitive/dist/index.mjs
function ln(e, t) {
	let n = typeof e == "string" ? {} : { ...e.colorReplacements }, r = typeof e == "string" ? e : e.name;
	for (let [e, i] of Object.entries(t?.colorReplacements || {})) typeof i == "string" ? n[e] = i : e === r && Object.assign(n, i);
	return n;
}
function I(e, t) {
	return e && (t?.[e?.toLowerCase()] || e);
}
function un(e) {
	return Array.isArray(e) ? e : [e];
}
async function dn(e) {
	return Promise.resolve(typeof e == "function" ? e() : e).then((e) => e.default || e);
}
function fn(e) {
	return !e || [
		"plaintext",
		"txt",
		"text",
		"plain"
	].includes(e);
}
function pn(e) {
	return e === "ansi" || fn(e);
}
function mn(e) {
	return e === "none";
}
function hn(e) {
	return mn(e);
}
function gn(e, t = !1) {
	if (e.length === 0) return [["", 0]];
	let n = e.split(/(\r?\n)/g), r = 0, i = [];
	for (let e = 0; e < n.length; e += 2) {
		let a = t ? n[e] + (n[e + 1] || "") : n[e];
		i.push([a, r]), r += n[e].length, r += n[e + 1]?.length || 0;
	}
	return i;
}
var _n = {
	light: "#333333",
	dark: "#bbbbbb"
}, vn = {
	light: "#fffffe",
	dark: "#1e1e1e"
}, yn = "__shiki_resolved";
function bn(e) {
	if (e?.[yn]) return e;
	let t = { ...e };
	t.tokenColors && !t.settings && (t.settings = t.tokenColors, delete t.tokenColors), t.type ||= "dark", t.colorReplacements = { ...t.colorReplacements }, t.settings ||= [];
	let { bg: n, fg: r } = t;
	if (!n || !r) {
		let e = t.settings ? t.settings.find((e) => !e.name && !e.scope) : void 0;
		e?.settings?.foreground && (r = e.settings.foreground), e?.settings?.background && (n = e.settings.background), !r && t?.colors?.["editor.foreground"] && (r = t.colors["editor.foreground"]), !n && t?.colors?.["editor.background"] && (n = t.colors["editor.background"]), r ||= t.type === "light" ? _n.light : _n.dark, n ||= t.type === "light" ? vn.light : vn.dark, t.fg = r, t.bg = n;
	}
	t.settings[0] && t.settings[0].settings && !t.settings[0].scope || t.settings.unshift({ settings: {
		foreground: t.fg,
		background: t.bg
	} });
	let i = 0, a = /* @__PURE__ */ new Map();
	function o(e) {
		if (a.has(e)) return a.get(e);
		i += 1;
		let n = `#${i.toString(16).padStart(8, "0").toLowerCase()}`;
		return t.colorReplacements?.[`#${n}`] ? o(e) : (a.set(e, n), n);
	}
	t.settings = t.settings.map((e) => {
		let n = e.settings?.foreground && !e.settings.foreground.startsWith("#"), r = e.settings?.background && !e.settings.background.startsWith("#");
		if (!n && !r) return e;
		let i = {
			...e,
			settings: { ...e.settings }
		};
		if (n) {
			let n = o(e.settings.foreground);
			t.colorReplacements[n] = e.settings.foreground, i.settings.foreground = n;
		}
		if (r) {
			let n = o(e.settings.background);
			t.colorReplacements[n] = e.settings.background, i.settings.background = n;
		}
		return i;
	});
	for (let e of Object.keys(t.colors || {})) if ((e === "editor.foreground" || e === "editor.background" || e.startsWith("terminal.ansi")) && !t.colors[e]?.startsWith("#")) {
		let n = o(t.colors[e]);
		t.colorReplacements[n] = t.colors[e], t.colors[e] = n;
	}
	return Object.defineProperty(t, yn, {
		enumerable: !1,
		writable: !1,
		value: !0
	}), t;
}
async function xn(e) {
	return Array.from(new Set((await Promise.all(e.filter((e) => !pn(e)).map(async (e) => await dn(e).then((e) => Array.isArray(e) ? e : [e])))).flat()));
}
async function Sn(e) {
	return (await Promise.all(e.map(async (e) => hn(e) ? null : bn(await dn(e))))).filter((e) => !!e);
}
function Cn(e, t) {
	if (!t) return e;
	if (t[e]) {
		let n = new Set([e]);
		for (; t[e];) {
			if (e = t[e], n.has(e)) throw new C(`Circular alias \`${Array.from(n).join(" -> ")} -> ${e}\``);
			n.add(e);
		}
	}
	return e;
}
var wn = class extends sn {
	_resolvedThemes = /* @__PURE__ */ new Map();
	_resolvedGrammars = /* @__PURE__ */ new Map();
	_langMap = /* @__PURE__ */ new Map();
	_langGraph = /* @__PURE__ */ new Map();
	_textmateThemeCache = /* @__PURE__ */ new WeakMap();
	_loadedThemesCache = null;
	_loadedLanguagesCache = null;
	constructor(e, t, n, r = {}) {
		super(e), this._resolver = e, this._themes = t, this._langs = n, this._alias = r, this._themes.map((e) => this.loadTheme(e)), this.loadLanguages(this._langs);
	}
	getTheme(e) {
		return typeof e == "string" ? this._resolvedThemes.get(e) : this.loadTheme(e);
	}
	loadTheme(e) {
		let t = bn(e);
		return t.name && (this._resolvedThemes.set(t.name, t), this._loadedThemesCache = null), t;
	}
	getLoadedThemes() {
		return this._loadedThemesCache ||= [...this._resolvedThemes.keys()], this._loadedThemesCache;
	}
	setTheme(e) {
		let t = this._textmateThemeCache.get(e);
		t || (t = Xe.createFromRawTheme(e), this._textmateThemeCache.set(e, t)), this._syncRegistry.setTheme(t);
	}
	getGrammar(e) {
		return e = Cn(e, this._alias), this._resolvedGrammars.get(e);
	}
	loadLanguage(e) {
		if (this.getGrammar(e.name)) return;
		let t = new Set([...this._langMap.values()].filter((t) => t.embeddedLangsLazy?.includes(e.name)));
		this._resolver.addLanguage(e);
		let n = {
			balancedBracketSelectors: e.balancedBracketSelectors || ["*"],
			unbalancedBracketSelectors: e.unbalancedBracketSelectors || []
		};
		this._syncRegistry._rawGrammars.set(e.scopeName, e);
		let r = this.loadGrammarWithConfiguration(e.scopeName, 1, n);
		if (r.name = e.name, this._resolvedGrammars.set(e.name, r), e.aliases && e.aliases.forEach((t) => {
			this._alias[t] = e.name;
		}), this._loadedLanguagesCache = null, t.size) for (let e of t) this._resolvedGrammars.delete(e.name), this._loadedLanguagesCache = null, this._syncRegistry?._injectionGrammars?.delete(e.scopeName), this._syncRegistry?._grammars?.delete(e.scopeName), this.loadLanguage(this._langMap.get(e.name));
	}
	dispose() {
		super.dispose(), this._resolvedThemes.clear(), this._resolvedGrammars.clear(), this._langMap.clear(), this._langGraph.clear(), this._loadedThemesCache = null;
	}
	loadLanguages(e) {
		for (let t of e) this.resolveEmbeddedLanguages(t);
		let t = Array.from(this._langGraph.entries()), n = t.filter(([e, t]) => !t);
		if (n.length) {
			let e = t.filter(([e, t]) => t ? (t.embeddedLanguages || t.embeddedLangs)?.some((e) => n.map(([e]) => e).includes(e)) : !1).filter((e) => !n.includes(e));
			throw new C(`Missing languages ${n.map(([e]) => `\`${e}\``).join(", ")}, required by ${e.map(([e]) => `\`${e}\``).join(", ")}`);
		}
		for (let [e, n] of t) this._resolver.addLanguage(n);
		for (let [e, n] of t) this.loadLanguage(n);
	}
	getLoadedLanguages() {
		return this._loadedLanguagesCache ||= [...new Set([...this._resolvedGrammars.keys(), ...Object.keys(this._alias)])], this._loadedLanguagesCache;
	}
	resolveEmbeddedLanguages(e) {
		this._langMap.set(e.name, e), this._langGraph.set(e.name, e);
		let t = e.embeddedLanguages ?? e.embeddedLangs;
		if (t) for (let e of t) this._langGraph.set(e, this._langMap.get(e));
	}
}, Tn = class {
	_langs = /* @__PURE__ */ new Map();
	_scopeToLang = /* @__PURE__ */ new Map();
	_injections = /* @__PURE__ */ new Map();
	_onigLib;
	constructor(e, t) {
		this._onigLib = {
			createOnigScanner: (t) => e.createScanner(t),
			createOnigString: (t) => e.createString(t)
		}, t.forEach((e) => this.addLanguage(e));
	}
	get onigLib() {
		return this._onigLib;
	}
	getLangRegistration(e) {
		return this._langs.get(e);
	}
	loadGrammar(e) {
		return this._scopeToLang.get(e);
	}
	addLanguage(e) {
		this._langs.set(e.name, e), e.aliases && e.aliases.forEach((t) => {
			this._langs.set(t, e);
		}), this._scopeToLang.set(e.scopeName, e), e.injectTo && e.injectTo.forEach((t) => {
			this._injections.get(t) || this._injections.set(t, []), this._injections.get(t).push(e.scopeName);
		});
	}
	getInjections(e) {
		let t = e.split("."), n = [];
		for (let e = 1; e <= t.length; e++) {
			let r = t.slice(0, e).join(".");
			n = [...n, ...this._injections.get(r) || []];
		}
		return n;
	}
}, L = 0;
function En(e) {
	L += 1, e.warnings !== !1 && L >= 10 && L % 10 == 0 && console.warn(`[Shiki] ${L} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);
	let t = !1;
	if (!e.engine) throw new C("`engine` option is required for synchronous mode");
	let n = (e.langs || []).flat(1), r = (e.themes || []).flat(1).map(bn), i = new wn(new Tn(e.engine, n), r, n, e.langAlias), a;
	function o(t) {
		return Cn(t, e.langAlias);
	}
	function s(e) {
		g();
		let t = i.getGrammar(typeof e == "string" ? e : e.name);
		if (!t) throw new C(`Language \`${e}\` not found, you may need to load it first`);
		return t;
	}
	function c(e) {
		if (e === "none") return {
			bg: "",
			fg: "",
			name: "none",
			settings: [],
			type: "dark"
		};
		g();
		let t = i.getTheme(e);
		if (!t) throw new C(`Theme \`${e}\` not found, you may need to load it first`);
		return t;
	}
	function l(e) {
		g();
		let t = c(e);
		return a !== e && (i.setTheme(t), a = e), {
			theme: t,
			colorMap: i.getColorMap()
		};
	}
	function u() {
		return g(), i.getLoadedThemes();
	}
	function d() {
		return g(), i.getLoadedLanguages();
	}
	function f(...e) {
		g(), i.loadLanguages(e.flat(1));
	}
	async function p(...e) {
		return f(await xn(e));
	}
	function m(...e) {
		g();
		for (let t of e.flat(1)) i.loadTheme(t);
	}
	async function h(...e) {
		return g(), m(await Sn(e));
	}
	function g() {
		if (t) throw new C("Shiki instance has been disposed");
	}
	function _() {
		t || (t = !0, i.dispose(), --L);
	}
	return {
		setTheme: l,
		getTheme: c,
		getLanguage: s,
		getLoadedThemes: u,
		getLoadedLanguages: d,
		resolveLangAlias: o,
		loadLanguage: p,
		loadLanguageSync: f,
		loadTheme: h,
		loadThemeSync: m,
		dispose: _,
		[Symbol.dispose]: _
	};
}
async function Dn(e) {
	e.engine || console.warn("`engine` option is required. Use `createOnigurumaEngine` or `createJavaScriptRegexEngine` to create an engine.");
	let [t, n, r] = await Promise.all([
		Sn(e.themes || []),
		xn(e.langs || []),
		e.engine
	]);
	return En({
		...e,
		themes: t,
		langs: n,
		engine: r
	});
}
var On = /* @__PURE__ */ new WeakMap();
function kn(e, t) {
	On.set(e, t);
}
function R(e) {
	return On.get(e);
}
var An = class e {
	_stacks = {};
	lang;
	get themes() {
		return Object.keys(this._stacks);
	}
	get theme() {
		return this.themes[0];
	}
	get _stack() {
		return this._stacks[this.theme];
	}
	static initial(t, n) {
		return new e(Object.fromEntries(un(n).map((e) => [e, cn])), t);
	}
	constructor(...e) {
		if (e.length === 2) {
			let [t, n] = e;
			this.lang = n, this._stacks = t;
		} else {
			let [t, n, r] = e;
			this.lang = n, this._stacks = { [r]: t };
		}
	}
	getInternalStack(e = this.theme) {
		return this._stacks[e];
	}
	getScopes(e = this.theme) {
		return jn(this._stacks[e]);
	}
	toJSON() {
		return {
			lang: this.lang,
			theme: this.theme,
			themes: this.themes,
			scopes: this.getScopes()
		};
	}
};
function jn(e) {
	let t = [], n = /* @__PURE__ */ new Set();
	function r(e) {
		if (n.has(e)) return;
		n.add(e);
		let i = e?.nameScopesList?.scopeName;
		i && t.push(i), e.parent && r(e.parent);
	}
	return r(e), t;
}
function Mn(e, t) {
	if (!(e instanceof An)) throw new C("Invalid grammar state");
	return e.getInternalStack(t);
}
function Nn(e, t, n = {}) {
	let { theme: r = e.getLoadedThemes()[0] } = n;
	if (fn(e.resolveLangAlias(n.lang || "text")) || mn(r)) return gn(t).map((e) => [{
		content: e[0],
		offset: e[1]
	}]);
	let { theme: i, colorMap: a } = e.setTheme(r), o = e.getLanguage(n.lang || "text");
	if (n.grammarState) {
		if (n.grammarState.lang !== o.name) throw new C(`Grammar state language "${n.grammarState.lang}" does not match highlight language "${o.name}"`);
		if (!n.grammarState.themes.includes(i.name)) throw new C(`Grammar state themes "${n.grammarState.themes}" do not contain highlight theme "${i.name}"`);
	}
	return Fn(t, o, i, a, n);
}
function Pn(...e) {
	if (e.length === 2) return R(e[1]);
	let [t, n, r = {}] = e, { lang: i = "text", theme: a = t.getLoadedThemes()[0] } = r;
	if (fn(i) || mn(a)) throw new C("Plain language does not have grammar state");
	if (i === "ansi") throw new C("ANSI language does not have grammar state");
	let { theme: o, colorMap: s } = t.setTheme(a), c = t.getLanguage(i);
	return new An(In(n, c, o, s, r).stateStack, c.name, o.name);
}
function Fn(e, t, n, r, i) {
	let a = In(e, t, n, r, i), o = new An(a.stateStack, t.name, n.name);
	return kn(a.tokens, o), a.tokens;
}
function In(e, t, n, r, i) {
	let a = ln(n, i), { tokenizeMaxLineLength: o = 0, tokenizeTimeLimit: s = 500 } = i, c = gn(e), l = i.grammarState ? Mn(i.grammarState, n.name) ?? cn : i.grammarContextCode == null ? cn : In(i.grammarContextCode, t, n, r, {
		...i,
		grammarState: void 0,
		grammarContextCode: void 0
	}).stateStack, u = [], d = [];
	for (let e = 0, f = c.length; e < f; e++) {
		let [f, p] = c[e];
		if (f === "") {
			u = [], d.push([]);
			continue;
		}
		if (o > 0 && f.length >= o) {
			u = [], d.push([{
				content: f,
				offset: p,
				color: "",
				fontStyle: 0
			}]);
			continue;
		}
		let m, h, g;
		i.includeExplanation && (m = t.tokenizeLine(f, l, s), h = m.tokens, g = 0);
		let _ = t.tokenizeLine2(f, l, s), v = _.tokens.length / 2;
		for (let e = 0; e < v; e++) {
			let t = _.tokens[2 * e], o = e + 1 < v ? _.tokens[2 * e + 2] : f.length;
			if (t === o) continue;
			let s = _.tokens[2 * e + 1], c = I(r[T.getForeground(s)], a), l = T.getFontStyle(s), d = {
				content: f.substring(t, o),
				offset: p + t,
				color: c,
				fontStyle: l
			};
			if (i.includeExplanation) {
				let e = [];
				if (i.includeExplanation !== "scopeName") for (let t of n.settings) {
					let n;
					switch (typeof t.scope) {
						case "string":
							n = t.scope.split(/,/).map((e) => e.trim());
							break;
						case "object":
							n = t.scope;
							break;
						default: continue;
					}
					e.push({
						settings: t,
						selectors: n.map((e) => e.split(/ /))
					});
				}
				d.explanation = [];
				let r = 0;
				for (; t + r < o;) {
					let t = h[g], n = f.substring(t.startIndex, t.endIndex);
					r += n.length, d.explanation.push({
						content: n,
						scopes: i.includeExplanation === "scopeName" ? Ln(t.scopes) : Rn(e, t.scopes)
					}), g += 1;
				}
			}
			u.push(d);
		}
		d.push(u), u = [], l = _.ruleStack;
	}
	return {
		tokens: d,
		stateStack: l
	};
}
function Ln(e) {
	return e.map((e) => ({ scopeName: e }));
}
function Rn(e, t) {
	let n = [];
	for (let r = 0, i = t.length; r < i; r++) {
		let i = t[r];
		n[r] = {
			scopeName: i,
			themeMatches: Vn(e, i, t.slice(0, r))
		};
	}
	return n;
}
function zn(e, t) {
	return e === t || t.substring(0, e.length) === e && t[e.length] === ".";
}
function Bn(e, t, n) {
	if (!zn(e[e.length - 1], t)) return !1;
	let r = e.length - 2, i = n.length - 1;
	for (; r >= 0 && i >= 0;) zn(e[r], n[i]) && --r, --i;
	return r === -1;
}
function Vn(e, t, n) {
	let r = [];
	for (let { selectors: i, settings: a } of e) for (let e of i) if (Bn(e, t, n)) {
		r.push(a);
		break;
	}
	return r;
}
function Hn(e, t, n, r = Nn) {
	let i = Object.entries(n.themes).filter((e) => e[1]).map((e) => ({
		color: e[0],
		theme: e[1]
	})), a = i.map((i) => {
		let a = r(e, t, {
			...n,
			theme: i.theme
		});
		return {
			tokens: a,
			state: R(a),
			theme: typeof i.theme == "string" ? i.theme : i.theme.name
		};
	}), o = Un(...a.map((e) => e.tokens)), s = o[0].map((e, t) => e.map((e, r) => {
		let a = {
			content: e.content,
			variants: {},
			offset: e.offset
		};
		return "includeExplanation" in n && n.includeExplanation && (a.explanation = e.explanation), o.forEach((e, n) => {
			let { content: o, explanation: s, offset: c, ...l } = e[t][r];
			a.variants[i[n].color] = l;
		}), a;
	})), c = a[0].state ? new An(Object.fromEntries(a.map((e) => [e.theme, e.state?.getInternalStack(e.theme)])), a[0].state.lang) : void 0;
	return c && kn(s, c), s;
}
function Un(...e) {
	let t = e.map(() => []), n = e.length;
	for (let r = 0; r < e[0].length; r++) {
		let i = e.map((e) => e[r]), a = t.map(() => []);
		t.forEach((e, t) => e.push(a[t]));
		let o = i.map(() => 0), s = i.map((e) => e[0]);
		for (; s.every((e) => e);) {
			let e = Math.min(...s.map((e) => e.content.length));
			for (let t = 0; t < n; t++) {
				let n = s[t];
				n.content.length === e ? (a[t].push(n), o[t] += 1, s[t] = i[t][o[t]]) : (a[t].push({
					...n,
					content: n.content.slice(0, e)
				}), s[t] = {
					...n,
					content: n.content.slice(e),
					offset: n.offset + e
				});
			}
		}
	}
	return t;
}
//#endregion
//#region node_modules/html-void-elements/index.js
var Wn = [
	"area",
	"base",
	"basefont",
	"bgsound",
	"br",
	"col",
	"command",
	"embed",
	"frame",
	"hr",
	"image",
	"img",
	"input",
	"keygen",
	"link",
	"meta",
	"param",
	"source",
	"track",
	"wbr"
], z = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
z.prototype.normal = {}, z.prototype.property = {}, z.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/merge.js
function Gn(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new z(n, r, t);
}
//#endregion
//#region node_modules/property-information/lib/normalize.js
function Kn(e) {
	return e.toLowerCase();
}
//#endregion
//#region node_modules/property-information/lib/util/info.js
var B = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
B.prototype.attribute = "", B.prototype.booleanish = !1, B.prototype.boolean = !1, B.prototype.commaOrSpaceSeparated = !1, B.prototype.commaSeparated = !1, B.prototype.defined = !1, B.prototype.mustUseProperty = !1, B.prototype.number = !1, B.prototype.overloadedBoolean = !1, B.prototype.property = "", B.prototype.spaceSeparated = !1, B.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/types.js
var qn = /* @__PURE__ */ f({
	boolean: () => V,
	booleanish: () => H,
	commaOrSpaceSeparated: () => K,
	commaSeparated: () => G,
	number: () => U,
	overloadedBoolean: () => Yn,
	spaceSeparated: () => W
}), Jn = 0, V = q(), H = q(), Yn = q(), U = q(), W = q(), G = q(), K = q();
function q() {
	return 2 ** ++Jn;
}
//#endregion
//#region node_modules/property-information/lib/util/defined-info.js
var Xn = Object.keys(qn), Zn = class extends B {
	constructor(e, t, n, r) {
		let i = -1;
		if (super(e, t), Qn(this, "space", r), typeof n == "number") for (; ++i < Xn.length;) {
			let e = Xn[i];
			Qn(this, Xn[i], (n & qn[e]) === qn[e]);
		}
	}
};
Zn.prototype.defined = !0;
function Qn(e, t, n) {
	n && (e[t] = n);
}
//#endregion
//#region node_modules/property-information/lib/util/create.js
function J(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let a = new Zn(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[Kn(r)] = r, n[Kn(a.attribute)] = r;
	}
	return new z(t, n, e.space);
}
//#endregion
//#region node_modules/property-information/lib/aria.js
var $n = J({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: H,
		ariaAutoComplete: null,
		ariaBusy: H,
		ariaChecked: H,
		ariaColCount: U,
		ariaColIndex: U,
		ariaColSpan: U,
		ariaControls: W,
		ariaCurrent: null,
		ariaDescribedBy: W,
		ariaDetails: null,
		ariaDisabled: H,
		ariaDropEffect: W,
		ariaErrorMessage: null,
		ariaExpanded: H,
		ariaFlowTo: W,
		ariaGrabbed: H,
		ariaHasPopup: null,
		ariaHidden: H,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: W,
		ariaLevel: U,
		ariaLive: null,
		ariaModal: H,
		ariaMultiLine: H,
		ariaMultiSelectable: H,
		ariaOrientation: null,
		ariaOwns: W,
		ariaPlaceholder: null,
		ariaPosInSet: U,
		ariaPressed: H,
		ariaReadOnly: H,
		ariaRelevant: null,
		ariaRequired: H,
		ariaRoleDescription: W,
		ariaRowCount: U,
		ariaRowIndex: U,
		ariaRowSpan: U,
		ariaSelected: H,
		ariaSetSize: U,
		ariaSort: null,
		ariaValueMax: U,
		ariaValueMin: U,
		ariaValueNow: U,
		ariaValueText: null,
		role: null
	},
	transform(e, t) {
		return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
	}
});
//#endregion
//#region node_modules/property-information/lib/util/case-sensitive-transform.js
function er(e, t) {
	return t in e ? e[t] : t;
}
//#endregion
//#region node_modules/property-information/lib/util/case-insensitive-transform.js
function tr(e, t) {
	return er(e, t.toLowerCase());
}
//#endregion
//#region node_modules/property-information/lib/html.js
var nr = J({
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: G,
		acceptCharset: W,
		accessKey: W,
		action: null,
		allow: null,
		allowFullScreen: V,
		allowPaymentRequest: V,
		allowUserMedia: V,
		alt: null,
		as: null,
		async: V,
		autoCapitalize: null,
		autoComplete: W,
		autoFocus: V,
		autoPlay: V,
		blocking: W,
		capture: null,
		charSet: null,
		checked: V,
		cite: null,
		className: W,
		cols: U,
		colSpan: null,
		content: null,
		contentEditable: H,
		controls: V,
		controlsList: W,
		coords: U | G,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: V,
		defer: V,
		dir: null,
		dirName: null,
		disabled: V,
		download: Yn,
		draggable: H,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: V,
		formTarget: null,
		headers: W,
		height: U,
		hidden: Yn,
		high: U,
		href: null,
		hrefLang: null,
		htmlFor: W,
		httpEquiv: W,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: V,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: V,
		itemId: null,
		itemProp: W,
		itemRef: W,
		itemScope: V,
		itemType: W,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: V,
		low: U,
		manifest: null,
		max: null,
		maxLength: U,
		media: null,
		method: null,
		min: null,
		minLength: U,
		multiple: V,
		muted: V,
		name: null,
		nonce: null,
		noModule: V,
		noValidate: V,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: V,
		optimum: U,
		pattern: null,
		ping: W,
		placeholder: null,
		playsInline: V,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: V,
		referrerPolicy: null,
		rel: W,
		required: V,
		reversed: V,
		rows: U,
		rowSpan: U,
		sandbox: W,
		scope: null,
		scoped: V,
		seamless: V,
		selected: V,
		shadowRootClonable: V,
		shadowRootDelegatesFocus: V,
		shadowRootMode: null,
		shape: null,
		size: U,
		sizes: null,
		slot: null,
		span: U,
		spellCheck: H,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: U,
		step: null,
		style: null,
		tabIndex: U,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: V,
		useMap: null,
		value: H,
		width: U,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: W,
		axis: null,
		background: null,
		bgColor: null,
		border: U,
		borderColor: null,
		bottomMargin: U,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: V,
		declare: V,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: U,
		leftMargin: U,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: U,
		marginWidth: U,
		noResize: V,
		noHref: V,
		noShade: V,
		noWrap: V,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: U,
		rules: null,
		scheme: null,
		scrolling: H,
		standby: null,
		summary: null,
		text: null,
		topMargin: U,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: U,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: V,
		disableRemotePlayback: V,
		prefix: null,
		property: null,
		results: U,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: tr
}), rr = J({
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	properties: {
		about: K,
		accentHeight: U,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: U,
		amplitude: U,
		arabicForm: null,
		ascent: U,
		attributeName: null,
		attributeType: null,
		azimuth: U,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: U,
		by: null,
		calcMode: null,
		capHeight: U,
		className: W,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: U,
		diffuseConstant: U,
		direction: null,
		display: null,
		dur: null,
		divisor: U,
		dominantBaseline: null,
		download: V,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: U,
		enableBackground: null,
		end: null,
		event: null,
		exponent: U,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: U,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: G,
		g2: G,
		glyphName: G,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: U,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: U,
		horizOriginX: U,
		horizOriginY: U,
		id: null,
		ideographic: U,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: U,
		k: U,
		k1: U,
		k2: U,
		k3: U,
		k4: U,
		kernelMatrix: K,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: U,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: U,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: U,
		overlineThickness: U,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: U,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: W,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: U,
		pointsAtY: U,
		pointsAtZ: U,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: K,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: K,
		rev: K,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: K,
		requiredFeatures: K,
		requiredFonts: K,
		requiredFormats: K,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: U,
		specularExponent: U,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: U,
		strikethroughThickness: U,
		string: null,
		stroke: null,
		strokeDashArray: K,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: U,
		strokeOpacity: U,
		strokeWidth: null,
		style: null,
		surfaceScale: U,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: K,
		tabIndex: U,
		tableValues: null,
		target: null,
		targetX: U,
		targetY: U,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: K,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: U,
		underlineThickness: U,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: U,
		values: null,
		vAlphabetic: U,
		vMathematical: U,
		vectorEffect: null,
		vHanging: U,
		vIdeographic: U,
		version: null,
		vertAdvY: U,
		vertOriginX: U,
		vertOriginY: U,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: U,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: er
}), ir = J({
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	},
	space: "xlink",
	transform(e, t) {
		return "xlink:" + t.slice(5).toLowerCase();
	}
}), ar = J({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: tr
}), or = J({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(e, t) {
		return "xml:" + t.slice(3).toLowerCase();
	}
}), sr = /[A-Z]/g, cr = /-[a-z]/g, lr = /^data[-\w.:]+$/i;
function ur(e, t) {
	let n = Kn(t), r = t, i = B;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && lr.test(t)) {
		if (t.charAt(4) === "-") {
			let e = t.slice(5).replace(cr, fr);
			r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
		} else {
			let e = t.slice(4);
			if (!cr.test(e)) {
				let n = e.replace(sr, dr);
				n.charAt(0) !== "-" && (n = "-" + n), t = "data" + n;
			}
		}
		i = Zn;
	}
	return new i(r, t);
}
function dr(e) {
	return "-" + e.toLowerCase();
}
function fr(e) {
	return e.charAt(1).toUpperCase();
}
//#endregion
//#region node_modules/property-information/index.js
var pr = Gn([
	$n,
	nr,
	ir,
	ar,
	or
], "html"), mr = Gn([
	$n,
	rr,
	ir,
	ar,
	or
], "svg"), hr = {}.hasOwnProperty;
function gr(e, t) {
	let n = t || {};
	function r(t, ...n) {
		let i = r.invalid, a = r.handlers;
		if (t && hr.call(t, e)) {
			let n = String(t[e]);
			i = hr.call(a, n) ? a[n] : r.unknown;
		}
		if (i) return i.call(this, t, ...n);
	}
	return r.handlers = n.handlers || {}, r.invalid = n.invalid, r.unknown = n.unknown, r;
}
//#endregion
//#region node_modules/stringify-entities/lib/core.js
var _r = /["&'<>`]/g, vr = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, yr = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, br = /[|\\{}()[\]^$+*?.]/g, xr = /* @__PURE__ */ new WeakMap();
function Sr(e, t) {
	if (e = e.replace(t.subset ? Cr(t.subset) : _r, r), t.subset || t.escapeOnly) return e;
	return e.replace(vr, n).replace(yr, r);
	function n(e, n, r) {
		return t.format((e.charCodeAt(0) - 55296) * 1024 + e.charCodeAt(1) - 56320 + 65536, r.charCodeAt(n + 2), t);
	}
	function r(e, n, r) {
		return t.format(e.charCodeAt(0), r.charCodeAt(n + 1), t);
	}
}
function Cr(e) {
	let t = xr.get(e);
	return t || (t = wr(e), xr.set(e, t)), t;
}
function wr(e) {
	let t = [], n = -1;
	for (; ++n < e.length;) t.push(e[n].replace(br, "\\$&"));
	return RegExp("(?:" + t.join("|") + ")", "g");
}
//#endregion
//#region node_modules/stringify-entities/lib/util/to-hexadecimal.js
var Tr = /[\dA-Fa-f]/;
function Er(e, t, n) {
	let r = "&#x" + e.toString(16).toUpperCase();
	return n && t && !Tr.test(String.fromCharCode(t)) ? r : r + ";";
}
//#endregion
//#region node_modules/stringify-entities/lib/util/to-decimal.js
var Dr = /\d/;
function Or(e, t, n) {
	let r = "&#" + String(e);
	return n && t && !Dr.test(String.fromCharCode(t)) ? r : r + ";";
}
//#endregion
//#region node_modules/character-entities-legacy/index.js
var kr = /* @__PURE__ */ "AElig.AMP.Aacute.Acirc.Agrave.Aring.Atilde.Auml.COPY.Ccedil.ETH.Eacute.Ecirc.Egrave.Euml.GT.Iacute.Icirc.Igrave.Iuml.LT.Ntilde.Oacute.Ocirc.Ograve.Oslash.Otilde.Ouml.QUOT.REG.THORN.Uacute.Ucirc.Ugrave.Uuml.Yacute.aacute.acirc.acute.aelig.agrave.amp.aring.atilde.auml.brvbar.ccedil.cedil.cent.copy.curren.deg.divide.eacute.ecirc.egrave.eth.euml.frac12.frac14.frac34.gt.iacute.icirc.iexcl.igrave.iquest.iuml.laquo.lt.macr.micro.middot.nbsp.not.ntilde.oacute.ocirc.ograve.ordf.ordm.oslash.otilde.ouml.para.plusmn.pound.quot.raquo.reg.sect.shy.sup1.sup2.sup3.szlig.thorn.times.uacute.ucirc.ugrave.uml.uuml.yacute.yen.yuml".split("."), Ar = {
	nbsp: "\xA0",
	iexcl: "¡",
	cent: "¢",
	pound: "£",
	curren: "¤",
	yen: "¥",
	brvbar: "¦",
	sect: "§",
	uml: "¨",
	copy: "©",
	ordf: "ª",
	laquo: "«",
	not: "¬",
	shy: "­",
	reg: "®",
	macr: "¯",
	deg: "°",
	plusmn: "±",
	sup2: "²",
	sup3: "³",
	acute: "´",
	micro: "µ",
	para: "¶",
	middot: "·",
	cedil: "¸",
	sup1: "¹",
	ordm: "º",
	raquo: "»",
	frac14: "¼",
	frac12: "½",
	frac34: "¾",
	iquest: "¿",
	Agrave: "À",
	Aacute: "Á",
	Acirc: "Â",
	Atilde: "Ã",
	Auml: "Ä",
	Aring: "Å",
	AElig: "Æ",
	Ccedil: "Ç",
	Egrave: "È",
	Eacute: "É",
	Ecirc: "Ê",
	Euml: "Ë",
	Igrave: "Ì",
	Iacute: "Í",
	Icirc: "Î",
	Iuml: "Ï",
	ETH: "Ð",
	Ntilde: "Ñ",
	Ograve: "Ò",
	Oacute: "Ó",
	Ocirc: "Ô",
	Otilde: "Õ",
	Ouml: "Ö",
	times: "×",
	Oslash: "Ø",
	Ugrave: "Ù",
	Uacute: "Ú",
	Ucirc: "Û",
	Uuml: "Ü",
	Yacute: "Ý",
	THORN: "Þ",
	szlig: "ß",
	agrave: "à",
	aacute: "á",
	acirc: "â",
	atilde: "ã",
	auml: "ä",
	aring: "å",
	aelig: "æ",
	ccedil: "ç",
	egrave: "è",
	eacute: "é",
	ecirc: "ê",
	euml: "ë",
	igrave: "ì",
	iacute: "í",
	icirc: "î",
	iuml: "ï",
	eth: "ð",
	ntilde: "ñ",
	ograve: "ò",
	oacute: "ó",
	ocirc: "ô",
	otilde: "õ",
	ouml: "ö",
	divide: "÷",
	oslash: "ø",
	ugrave: "ù",
	uacute: "ú",
	ucirc: "û",
	uuml: "ü",
	yacute: "ý",
	thorn: "þ",
	yuml: "ÿ",
	fnof: "ƒ",
	Alpha: "Α",
	Beta: "Β",
	Gamma: "Γ",
	Delta: "Δ",
	Epsilon: "Ε",
	Zeta: "Ζ",
	Eta: "Η",
	Theta: "Θ",
	Iota: "Ι",
	Kappa: "Κ",
	Lambda: "Λ",
	Mu: "Μ",
	Nu: "Ν",
	Xi: "Ξ",
	Omicron: "Ο",
	Pi: "Π",
	Rho: "Ρ",
	Sigma: "Σ",
	Tau: "Τ",
	Upsilon: "Υ",
	Phi: "Φ",
	Chi: "Χ",
	Psi: "Ψ",
	Omega: "Ω",
	alpha: "α",
	beta: "β",
	gamma: "γ",
	delta: "δ",
	epsilon: "ε",
	zeta: "ζ",
	eta: "η",
	theta: "θ",
	iota: "ι",
	kappa: "κ",
	lambda: "λ",
	mu: "μ",
	nu: "ν",
	xi: "ξ",
	omicron: "ο",
	pi: "π",
	rho: "ρ",
	sigmaf: "ς",
	sigma: "σ",
	tau: "τ",
	upsilon: "υ",
	phi: "φ",
	chi: "χ",
	psi: "ψ",
	omega: "ω",
	thetasym: "ϑ",
	upsih: "ϒ",
	piv: "ϖ",
	bull: "•",
	hellip: "…",
	prime: "′",
	Prime: "″",
	oline: "‾",
	frasl: "⁄",
	weierp: "℘",
	image: "ℑ",
	real: "ℜ",
	trade: "™",
	alefsym: "ℵ",
	larr: "←",
	uarr: "↑",
	rarr: "→",
	darr: "↓",
	harr: "↔",
	crarr: "↵",
	lArr: "⇐",
	uArr: "⇑",
	rArr: "⇒",
	dArr: "⇓",
	hArr: "⇔",
	forall: "∀",
	part: "∂",
	exist: "∃",
	empty: "∅",
	nabla: "∇",
	isin: "∈",
	notin: "∉",
	ni: "∋",
	prod: "∏",
	sum: "∑",
	minus: "−",
	lowast: "∗",
	radic: "√",
	prop: "∝",
	infin: "∞",
	ang: "∠",
	and: "∧",
	or: "∨",
	cap: "∩",
	cup: "∪",
	int: "∫",
	there4: "∴",
	sim: "∼",
	cong: "≅",
	asymp: "≈",
	ne: "≠",
	equiv: "≡",
	le: "≤",
	ge: "≥",
	sub: "⊂",
	sup: "⊃",
	nsub: "⊄",
	sube: "⊆",
	supe: "⊇",
	oplus: "⊕",
	otimes: "⊗",
	perp: "⊥",
	sdot: "⋅",
	lceil: "⌈",
	rceil: "⌉",
	lfloor: "⌊",
	rfloor: "⌋",
	lang: "〈",
	rang: "〉",
	loz: "◊",
	spades: "♠",
	clubs: "♣",
	hearts: "♥",
	diams: "♦",
	quot: "\"",
	amp: "&",
	lt: "<",
	gt: ">",
	OElig: "Œ",
	oelig: "œ",
	Scaron: "Š",
	scaron: "š",
	Yuml: "Ÿ",
	circ: "ˆ",
	tilde: "˜",
	ensp: " ",
	emsp: " ",
	thinsp: " ",
	zwnj: "‌",
	zwj: "‍",
	lrm: "‎",
	rlm: "‏",
	ndash: "–",
	mdash: "—",
	lsquo: "‘",
	rsquo: "’",
	sbquo: "‚",
	ldquo: "“",
	rdquo: "”",
	bdquo: "„",
	dagger: "†",
	Dagger: "‡",
	permil: "‰",
	lsaquo: "‹",
	rsaquo: "›",
	euro: "€"
}, jr = [
	"cent",
	"copy",
	"divide",
	"gt",
	"lt",
	"not",
	"para",
	"times"
], Mr = {}.hasOwnProperty, Nr = {}, Pr;
for (Pr in Ar) Mr.call(Ar, Pr) && (Nr[Ar[Pr]] = Pr);
var Fr = /[^\dA-Za-z]/;
function Ir(e, t, n, r) {
	let i = String.fromCharCode(e);
	if (Mr.call(Nr, i)) {
		let e = Nr[i], a = "&" + e;
		return n && kr.includes(e) && !jr.includes(e) && (!r || t && t !== 61 && Fr.test(String.fromCharCode(t))) ? a : a + ";";
	}
	return "";
}
//#endregion
//#region node_modules/stringify-entities/lib/util/format-smart.js
function Lr(e, t, n) {
	let r = Er(e, t, n.omitOptionalSemicolons), i;
	if ((n.useNamedReferences || n.useShortestReferences) && (i = Ir(e, t, n.omitOptionalSemicolons, n.attribute)), (n.useShortestReferences || !i) && n.useShortestReferences) {
		let i = Or(e, t, n.omitOptionalSemicolons);
		i.length < r.length && (r = i);
	}
	return i && (!n.useShortestReferences || i.length < r.length) ? i : r;
}
//#endregion
//#region node_modules/stringify-entities/lib/index.js
function Y(e, t) {
	return Sr(e, Object.assign({ format: Lr }, t));
}
//#endregion
//#region node_modules/hast-util-to-html/lib/handle/comment.js
var Rr = /^>|^->|<!--|-->|--!>|<!-$/g, zr = [">"], Br = ["<", ">"];
function Vr(e, t, n, r) {
	return r.settings.bogusComments ? "<?" + Y(e.value, Object.assign({}, r.settings.characterReferences, { subset: zr })) + ">" : "<!--" + e.value.replace(Rr, i) + "-->";
	function i(e) {
		return Y(e, Object.assign({}, r.settings.characterReferences, { subset: Br }));
	}
}
//#endregion
//#region node_modules/hast-util-to-html/lib/handle/doctype.js
function Hr(e, t, n, r) {
	return "<!" + (r.settings.upperDoctype ? "DOCTYPE" : "doctype") + (r.settings.tightDoctype ? "" : " ") + "html>";
}
//#endregion
//#region node_modules/ccount/index.js
function Ur(e, t) {
	let n = String(e);
	if (typeof t != "string") throw TypeError("Expected character");
	let r = 0, i = n.indexOf(t);
	for (; i !== -1;) r++, i = n.indexOf(t, i + t.length);
	return r;
}
//#endregion
//#region node_modules/comma-separated-tokens/index.js
function Wr(e, t) {
	let n = t || {};
	return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim();
}
//#endregion
//#region node_modules/space-separated-tokens/index.js
function Gr(e) {
	return e.join(" ").trim();
}
//#endregion
//#region node_modules/hast-util-whitespace/lib/index.js
var Kr = /[ \t\n\f\r]/g;
function qr(e) {
	return typeof e == "object" ? e.type === "text" ? Jr(e.value) : !1 : Jr(e);
}
function Jr(e) {
	return e.replace(Kr, "") === "";
}
//#endregion
//#region node_modules/hast-util-to-html/lib/omission/util/siblings.js
var X = Zr(1), Yr = Zr(-1), Xr = [];
function Zr(e) {
	return t;
	function t(t, n, r) {
		let i = t ? t.children : Xr, a = (n || 0) + e, o = i[a];
		if (!r) for (; o && qr(o);) a += e, o = i[a];
		return o;
	}
}
//#endregion
//#region node_modules/hast-util-to-html/lib/omission/omission.js
var Qr = {}.hasOwnProperty;
function $r(e) {
	return t;
	function t(t, n, r) {
		return Qr.call(e, t.tagName) && e[t.tagName](t, n, r);
	}
}
//#endregion
//#region node_modules/hast-util-to-html/lib/omission/closing.js
var ei = $r({
	body: ri,
	caption: ti,
	colgroup: ti,
	dd: si,
	dt: oi,
	head: ti,
	html: ni,
	li: ai,
	optgroup: li,
	option: ui,
	p: ii,
	rp: ci,
	rt: ci,
	tbody: fi,
	td: hi,
	tfoot: pi,
	th: hi,
	thead: di,
	tr: mi
});
function ti(e, t, n) {
	let r = X(n, t, !0);
	return !r || r.type !== "comment" && !(r.type === "text" && qr(r.value.charAt(0)));
}
function ni(e, t, n) {
	let r = X(n, t);
	return !r || r.type !== "comment";
}
function ri(e, t, n) {
	let r = X(n, t);
	return !r || r.type !== "comment";
}
function ii(e, t, n) {
	let r = X(n, t);
	return r ? r.type === "element" && (r.tagName === "address" || r.tagName === "article" || r.tagName === "aside" || r.tagName === "blockquote" || r.tagName === "details" || r.tagName === "div" || r.tagName === "dl" || r.tagName === "fieldset" || r.tagName === "figcaption" || r.tagName === "figure" || r.tagName === "footer" || r.tagName === "form" || r.tagName === "h1" || r.tagName === "h2" || r.tagName === "h3" || r.tagName === "h4" || r.tagName === "h5" || r.tagName === "h6" || r.tagName === "header" || r.tagName === "hgroup" || r.tagName === "hr" || r.tagName === "main" || r.tagName === "menu" || r.tagName === "nav" || r.tagName === "ol" || r.tagName === "p" || r.tagName === "pre" || r.tagName === "section" || r.tagName === "table" || r.tagName === "ul") : !n || !(n.type === "element" && (n.tagName === "a" || n.tagName === "audio" || n.tagName === "del" || n.tagName === "ins" || n.tagName === "map" || n.tagName === "noscript" || n.tagName === "video"));
}
function ai(e, t, n) {
	let r = X(n, t);
	return !r || r.type === "element" && r.tagName === "li";
}
function oi(e, t, n) {
	let r = X(n, t);
	return !!(r && r.type === "element" && (r.tagName === "dt" || r.tagName === "dd"));
}
function si(e, t, n) {
	let r = X(n, t);
	return !r || r.type === "element" && (r.tagName === "dt" || r.tagName === "dd");
}
function ci(e, t, n) {
	let r = X(n, t);
	return !r || r.type === "element" && (r.tagName === "rp" || r.tagName === "rt");
}
function li(e, t, n) {
	let r = X(n, t);
	return !r || r.type === "element" && r.tagName === "optgroup";
}
function ui(e, t, n) {
	let r = X(n, t);
	return !r || r.type === "element" && (r.tagName === "option" || r.tagName === "optgroup");
}
function di(e, t, n) {
	let r = X(n, t);
	return !!(r && r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot"));
}
function fi(e, t, n) {
	let r = X(n, t);
	return !r || r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot");
}
function pi(e, t, n) {
	return !X(n, t);
}
function mi(e, t, n) {
	let r = X(n, t);
	return !r || r.type === "element" && r.tagName === "tr";
}
function hi(e, t, n) {
	let r = X(n, t);
	return !r || r.type === "element" && (r.tagName === "td" || r.tagName === "th");
}
//#endregion
//#region node_modules/hast-util-to-html/lib/omission/opening.js
var gi = $r({
	body: yi,
	colgroup: bi,
	head: vi,
	html: _i,
	tbody: xi
});
function _i(e) {
	let t = X(e, -1);
	return !t || t.type !== "comment";
}
function vi(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e.children) if (n.type === "element" && (n.tagName === "base" || n.tagName === "title")) {
		if (t.has(n.tagName)) return !1;
		t.add(n.tagName);
	}
	let n = e.children[0];
	return !n || n.type === "element";
}
function yi(e) {
	let t = X(e, -1, !0);
	return !t || t.type !== "comment" && !(t.type === "text" && qr(t.value.charAt(0))) && !(t.type === "element" && (t.tagName === "meta" || t.tagName === "link" || t.tagName === "script" || t.tagName === "style" || t.tagName === "template"));
}
function bi(e, t, n) {
	let r = Yr(n, t), i = X(e, -1, !0);
	return n && r && r.type === "element" && r.tagName === "colgroup" && ei(r, n.children.indexOf(r), n) ? !1 : !!(i && i.type === "element" && i.tagName === "col");
}
function xi(e, t, n) {
	let r = Yr(n, t), i = X(e, -1);
	return n && r && r.type === "element" && (r.tagName === "thead" || r.tagName === "tbody") && ei(r, n.children.indexOf(r), n) ? !1 : !!(i && i.type === "element" && i.tagName === "tr");
}
//#endregion
//#region node_modules/hast-util-to-html/lib/handle/element.js
var Z = {
	name: [["	\n\f\r &/=>".split(""), "	\n\f\r \"&'/=>`".split("")], ["\0	\n\f\r \"&'/<=>".split(""), "\0	\n\f\r \"&'/<=>`".split("")]],
	unquoted: [["	\n\f\r &>".split(""), "\0	\n\f\r \"&'<=>`".split("")], ["\0	\n\f\r \"&'<=>`".split(""), "\0	\n\f\r \"&'<=>`".split("")]],
	single: [["&'".split(""), "\"&'`".split("")], ["\0&'".split(""), "\0\"&'`".split("")]],
	double: [["\"&".split(""), "\"&'`".split("")], ["\0\"&".split(""), "\0\"&'`".split("")]]
};
function Si(e, t, n, r) {
	let i = r.schema, a = i.space === "svg" ? !1 : r.settings.omitOptionalTags, o = i.space === "svg" ? r.settings.closeEmptyElements : r.settings.voids.includes(e.tagName.toLowerCase()), s = [], c;
	i.space === "html" && e.tagName === "svg" && (r.schema = mr);
	let l = Ci(r, e.properties), u = r.all(i.space === "html" && e.tagName === "template" ? e.content : e);
	return r.schema = i, u && (o = !1), (l || !a || !gi(e, t, n)) && (s.push("<", e.tagName, l ? " " + l : ""), o && (i.space === "svg" || r.settings.closeSelfClosing) && (c = l.charAt(l.length - 1), (!r.settings.tightSelfClosing || c === "/" || c && c !== "\"" && c !== "'") && s.push(" "), s.push("/")), s.push(">")), s.push(u), !o && (!a || !ei(e, t, n)) && s.push("</" + e.tagName + ">"), s.join("");
}
function Ci(e, t) {
	let n = [], r = -1, i;
	if (t) {
		for (i in t) if (t[i] !== null && t[i] !== void 0) {
			let r = wi(e, i, t[i]);
			r && n.push(r);
		}
	}
	for (; ++r < n.length;) {
		let t = e.settings.tightAttributes ? n[r].charAt(n[r].length - 1) : void 0;
		r !== n.length - 1 && t !== "\"" && t !== "'" && (n[r] += " ");
	}
	return n.join("");
}
function wi(e, t, n) {
	let r = ur(e.schema, t), i = e.settings.allowParseErrors && e.schema.space === "html" ? 0 : 1, a = e.settings.allowDangerousCharacters ? 0 : 1, o = e.quote, s;
	if (r.overloadedBoolean && (n === r.attribute || n === "") ? n = !0 : (r.boolean || r.overloadedBoolean) && (typeof n != "string" || n === r.attribute || n === "") && (n = !!n), n == null || n === !1 || typeof n == "number" && Number.isNaN(n)) return "";
	let c = Y(r.attribute, Object.assign({}, e.settings.characterReferences, { subset: Z.name[i][a] }));
	return n === !0 || (n = Array.isArray(n) ? (r.commaSeparated ? Wr : Gr)(n, { padLeft: !e.settings.tightCommaSeparatedLists }) : String(n), e.settings.collapseEmptyAttributes && !n) ? c : (e.settings.preferUnquoted && (s = Y(n, Object.assign({}, e.settings.characterReferences, {
		attribute: !0,
		subset: Z.unquoted[i][a]
	}))), s !== n && (e.settings.quoteSmart && Ur(n, o) > Ur(n, e.alternative) && (o = e.alternative), s = o + Y(n, Object.assign({}, e.settings.characterReferences, {
		subset: (o === "'" ? Z.single : Z.double)[i][a],
		attribute: !0
	})) + o), c + (s && "=" + s));
}
//#endregion
//#region node_modules/hast-util-to-html/lib/handle/text.js
var Ti = ["<", "&"];
function Ei(e, t, n, r) {
	return n && n.type === "element" && (n.tagName === "script" || n.tagName === "style") ? e.value : Y(e.value, Object.assign({}, r.settings.characterReferences, { subset: Ti }));
}
//#endregion
//#region node_modules/hast-util-to-html/lib/handle/raw.js
function Di(e, t, n, r) {
	return r.settings.allowDangerousHtml ? e.value : Ei(e, t, n, r);
}
//#endregion
//#region node_modules/hast-util-to-html/lib/handle/root.js
function Oi(e, t, n, r) {
	return r.all(e);
}
//#endregion
//#region node_modules/hast-util-to-html/lib/handle/index.js
var ki = gr("type", {
	invalid: Ai,
	unknown: ji,
	handlers: {
		comment: Vr,
		doctype: Hr,
		element: Si,
		raw: Di,
		root: Oi,
		text: Ei
	}
});
function Ai(e) {
	throw Error("Expected node, not `" + e + "`");
}
function ji(e) {
	throw Error("Cannot compile unknown node `" + e.type + "`");
}
//#endregion
//#region node_modules/hast-util-to-html/lib/index.js
var Mi = {}, Ni = {}, Pi = [];
function Fi(e, t) {
	let n = t || Mi, r = n.quote || "\"", i = r === "\"" ? "'" : "\"";
	if (r !== "\"" && r !== "'") throw Error("Invalid quote `" + r + "`, expected `'` or `\"`");
	return {
		one: Ii,
		all: Li,
		settings: {
			omitOptionalTags: n.omitOptionalTags || !1,
			allowParseErrors: n.allowParseErrors || !1,
			allowDangerousCharacters: n.allowDangerousCharacters || !1,
			quoteSmart: n.quoteSmart || !1,
			preferUnquoted: n.preferUnquoted || !1,
			tightAttributes: n.tightAttributes || !1,
			upperDoctype: n.upperDoctype || !1,
			tightDoctype: n.tightDoctype || !1,
			bogusComments: n.bogusComments || !1,
			tightCommaSeparatedLists: n.tightCommaSeparatedLists || !1,
			tightSelfClosing: n.tightSelfClosing || !1,
			collapseEmptyAttributes: n.collapseEmptyAttributes || !1,
			allowDangerousHtml: n.allowDangerousHtml || !1,
			voids: n.voids || Wn,
			characterReferences: n.characterReferences || Ni,
			closeSelfClosing: n.closeSelfClosing || !1,
			closeEmptyElements: n.closeEmptyElements || !1
		},
		schema: n.space === "svg" ? mr : pr,
		quote: r,
		alternative: i
	}.one(Array.isArray(e) ? {
		type: "root",
		children: e
	} : e, void 0, void 0);
}
function Ii(e, t, n) {
	return ki(e, t, n, this);
}
function Li(e) {
	let t = [], n = e && e.children || Pi, r = -1;
	for (; ++r < n.length;) t[r] = this.one(n[r], r, e);
	return t.join("");
}
//#endregion
//#region node_modules/@shikijs/core/dist/index.mjs
function Ri(e, t) {
	if (!t) return e;
	e.properties ||= {}, e.properties.class ||= [], typeof e.properties.class == "string" && (e.properties.class = e.properties.class.split(/\s+/g)), Array.isArray(e.properties.class) || (e.properties.class = []);
	let n = Array.isArray(t) ? t : t.split(/\s+/g);
	for (let t of n) t && !e.properties.class.includes(t) && e.properties.class.push(t);
	return e;
}
function zi(e) {
	let t = gn(e, !0).map(([e]) => e);
	function n(n) {
		if (n === e.length) return {
			line: t.length - 1,
			character: t[t.length - 1].length
		};
		let r = n, i = 0;
		for (let e of t) {
			if (r < e.length) break;
			r -= e.length, i++;
		}
		return {
			line: i,
			character: r
		};
	}
	function r(e, n) {
		let r = 0;
		for (let n = 0; n < e; n++) r += t[n].length;
		return r += n, r;
	}
	return {
		lines: t,
		indexToPos: n,
		posToIndex: r
	};
}
function Bi(e, t, n) {
	let r = /* @__PURE__ */ new Set();
	for (let t of e.matchAll(/:?lang=["']([^"']+)["']/g)) {
		let e = t[1].toLowerCase().trim();
		e && r.add(e);
	}
	for (let t of e.matchAll(/(?:```|~~~)([\w-]+)/g)) {
		let e = t[1].toLowerCase().trim();
		e && r.add(e);
	}
	for (let t of e.matchAll(/\\begin\{([\w-]+)\}/g)) {
		let e = t[1].toLowerCase().trim();
		e && r.add(e);
	}
	for (let t of e.matchAll(/<script\s+(?:type|lang)=["']([^"']+)["']/gi)) {
		let e = t[1].toLowerCase().trim(), n = e.includes("/") ? e.split("/").pop() : e;
		n && r.add(n);
	}
	if (!n) return Array.from(r);
	let i = n.getBundledLanguages();
	return Array.from(r).filter((e) => e && i[e]);
}
var Vi = "light-dark()", Hi = ["color", "background-color"];
function Ui(e, t) {
	let n = 0, r = [];
	for (let i of t) i > n && r.push({
		...e,
		content: e.content.slice(n, i),
		offset: e.offset + n
	}), n = i;
	return n < e.content.length && r.push({
		...e,
		content: e.content.slice(n),
		offset: e.offset + n
	}), r;
}
function Wi(e, t) {
	let n = Array.from(t instanceof Set ? t : new Set(t)).sort((e, t) => e - t);
	return n.length ? e.map((e) => e.flatMap((e) => {
		let t = n.filter((t) => e.offset < t && t < e.offset + e.content.length).map((t) => t - e.offset).sort((e, t) => e - t);
		return t.length ? Ui(e, t) : e;
	})) : e;
}
function Gi(e, t, n, r, i = "css-vars") {
	let a = {
		content: e.content,
		explanation: e.explanation,
		offset: e.offset
	}, o = t.map((t) => Ki(e.variants[t])), s = new Set(o.flatMap((e) => Object.keys(e))), c = {}, l = (e, r) => {
		let i = r === "color" ? "" : r === "background-color" ? "-bg" : `-${r}`;
		return n + t[e] + (r === "color" ? "" : i);
	};
	return o.forEach((e, n) => {
		for (let a of s) {
			let s = e[a] || "inherit";
			if (n === 0 && r && Hi.includes(a)) if (r === Vi && o.length > 1) {
				let e = t.findIndex((e) => e === "light"), r = t.findIndex((e) => e === "dark");
				if (e === -1 || r === -1) throw new C("When using `defaultColor: \"light-dark()\"`, you must provide both `light` and `dark` themes");
				c[a] = `light-dark(${o[e][a] || "inherit"}, ${o[r][a] || "inherit"})`, i === "css-vars" && (c[l(n, a)] = s);
			} else c[a] = s;
			else i === "css-vars" && (c[l(n, a)] = s);
		}
	}), a.htmlStyle = c, a;
}
function Ki(e) {
	let t = {};
	if (e.color && (t.color = e.color), e.bgColor && (t["background-color"] = e.bgColor), e.fontStyle) {
		e.fontStyle & w.Italic && (t["font-style"] = "italic"), e.fontStyle & w.Bold && (t["font-weight"] = "bold");
		let n = [];
		e.fontStyle & w.Underline && n.push("underline"), e.fontStyle & w.Strikethrough && n.push("line-through"), n.length && (t["text-decoration"] = n.join(" "));
	}
	return t;
}
function qi(e) {
	return typeof e == "string" ? e : Object.entries(e).map(([e, t]) => `${e}:${t}`).join(";");
}
function Ji() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t) {
		if (!e.has(t.meta)) {
			let n = zi(t.source);
			function r(e) {
				if (typeof e == "number") {
					if (e < 0 || e > t.source.length) throw new C(`Invalid decoration offset: ${e}. Code length: ${t.source.length}`);
					return {
						...n.indexToPos(e),
						offset: e
					};
				} else {
					let t = n.lines[e.line];
					if (t === void 0) throw new C(`Invalid decoration position ${JSON.stringify(e)}. Lines length: ${n.lines.length}`);
					let r = e.character;
					if (r < 0 && (r = t.length + r), r < 0 || r > t.length) throw new C(`Invalid decoration position ${JSON.stringify(e)}. Line ${e.line} length: ${t.length}`);
					return {
						...e,
						character: r,
						offset: n.posToIndex(e.line, r)
					};
				}
			}
			let i = (t.options.decorations || []).map((e) => ({
				...e,
				start: r(e.start),
				end: r(e.end)
			}));
			Yi(i), e.set(t.meta, {
				decorations: i,
				converter: n,
				source: t.source
			});
		}
		return e.get(t.meta);
	}
	return {
		name: "shiki:decorations",
		tokens(e) {
			if (this.options.decorations?.length) return Wi(e, t(this).decorations.flatMap((e) => [e.start.offset, e.end.offset]));
		},
		code(e) {
			if (!this.options.decorations?.length) return;
			let n = t(this), r = Array.from(e.children).filter((e) => e.type === "element" && e.tagName === "span");
			if (r.length !== n.converter.lines.length) throw new C(`Number of lines in code element (${r.length}) does not match the number of lines in the source (${n.converter.lines.length}). Failed to apply decorations.`);
			function i(e, t, n, i) {
				let a = r[e], s = "", c = -1, l = -1;
				if (t === 0 && (c = 0), n === 0 && (l = 0), n === Infinity && (l = a.children.length), c === -1 || l === -1) for (let e = 0; e < a.children.length; e++) s += Xi(a.children[e]), c === -1 && s.length === t && (c = e + 1), l === -1 && s.length === n && (l = e + 1);
				if (c === -1) throw new C(`Failed to find start index for decoration ${JSON.stringify(i.start)}`);
				if (l === -1) throw new C(`Failed to find end index for decoration ${JSON.stringify(i.end)}`);
				let u = a.children.slice(c, l);
				if (!i.alwaysWrap && u.length === a.children.length) o(a, i, "line");
				else if (!i.alwaysWrap && u.length === 1 && u[0].type === "element") o(u[0], i, "token");
				else {
					let e = {
						type: "element",
						tagName: "span",
						properties: {},
						children: u
					};
					o(e, i, "wrapper"), a.children.splice(c, u.length, e);
				}
			}
			function a(e, t) {
				r[e] = o(r[e], t, "line");
			}
			function o(e, t, n) {
				let r = t.properties || {}, i = t.transform || ((e) => e);
				return e.tagName = t.tagName || "span", e.properties = {
					...e.properties,
					...r,
					class: e.properties.class
				}, t.properties?.class && Ri(e, t.properties.class), e = i(e, n) || e, e;
			}
			let s = [], c = n.decorations.sort((e, t) => t.start.offset - e.start.offset || e.end.offset - t.end.offset);
			for (let e of c) {
				let { start: t, end: n } = e;
				if (t.line === n.line) i(t.line, t.character, n.character, e);
				else if (t.line < n.line) {
					i(t.line, t.character, Infinity, e);
					for (let r = t.line + 1; r < n.line; r++) s.unshift(() => a(r, e));
					i(n.line, 0, n.character, e);
				}
			}
			s.forEach((e) => e());
		}
	};
}
function Yi(e) {
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		if (n.start.offset > n.end.offset) throw new C(`Invalid decoration range: ${JSON.stringify(n.start)} - ${JSON.stringify(n.end)}`);
		for (let r = t + 1; r < e.length; r++) {
			let t = e[r], i = n.start.offset <= t.start.offset && t.start.offset < n.end.offset, a = n.start.offset < t.end.offset && t.end.offset <= n.end.offset, o = t.start.offset <= n.start.offset && n.start.offset < t.end.offset, s = t.start.offset < n.end.offset && n.end.offset <= t.end.offset;
			if (i || a || o || s) {
				if (i && a || o && s || o && n.start.offset === n.end.offset || a && t.start.offset === t.end.offset) continue;
				throw new C(`Decorations ${JSON.stringify(n.start)} and ${JSON.stringify(t.start)} intersect.`);
			}
		}
	}
}
function Xi(e) {
	return e.type === "text" ? e.value : e.type === "element" ? e.children.map(Xi).join("") : "";
}
var Zi = [/* @__PURE__ */ Ji()];
function Qi(e) {
	let t = $i(e.transformers || []);
	return [
		...t.pre,
		...t.normal,
		...t.post,
		...Zi
	];
}
function $i(e) {
	let t = [], n = [], r = [];
	for (let i of e) switch (i.enforce) {
		case "pre":
			t.push(i);
			break;
		case "post":
			n.push(i);
			break;
		default: r.push(i);
	}
	return {
		pre: t,
		post: n,
		normal: r
	};
}
var Q = [
	"black",
	"red",
	"green",
	"yellow",
	"blue",
	"magenta",
	"cyan",
	"white",
	"brightBlack",
	"brightRed",
	"brightGreen",
	"brightYellow",
	"brightBlue",
	"brightMagenta",
	"brightCyan",
	"brightWhite"
], ea = {
	1: "bold",
	2: "dim",
	3: "italic",
	4: "underline",
	7: "reverse",
	8: "hidden",
	9: "strikethrough"
};
function ta(e, t) {
	let n = e.indexOf("\x1B", t);
	if (n !== -1 && e[n + 1] === "[") {
		let t = e.indexOf("m", n);
		if (t !== -1) return {
			sequence: e.substring(n + 2, t).split(";"),
			startPosition: n,
			position: t + 1
		};
	}
	return { position: e.length };
}
function na(e) {
	let t = e.shift();
	if (t === "2") {
		let t = e.splice(0, 3).map((e) => Number.parseInt(e));
		return t.length !== 3 || t.some((e) => Number.isNaN(e)) ? void 0 : {
			type: "rgb",
			rgb: t
		};
	} else if (t === "5") {
		let t = e.shift();
		if (t) return {
			type: "table",
			index: Number(t)
		};
	}
}
function ra(e) {
	let t = [];
	for (; e.length > 0;) {
		let n = e.shift();
		if (!n) continue;
		let r = Number.parseInt(n);
		if (!Number.isNaN(r)) if (r === 0) t.push({ type: "resetAll" });
		else if (r <= 9) ea[r] && t.push({
			type: "setDecoration",
			value: ea[r]
		});
		else if (r <= 29) {
			let e = ea[r - 20];
			e && (t.push({
				type: "resetDecoration",
				value: e
			}), e === "dim" && t.push({
				type: "resetDecoration",
				value: "bold"
			}));
		} else if (r <= 37) t.push({
			type: "setForegroundColor",
			value: {
				type: "named",
				name: Q[r - 30]
			}
		});
		else if (r === 38) {
			let n = na(e);
			n && t.push({
				type: "setForegroundColor",
				value: n
			});
		} else if (r === 39) t.push({ type: "resetForegroundColor" });
		else if (r <= 47) t.push({
			type: "setBackgroundColor",
			value: {
				type: "named",
				name: Q[r - 40]
			}
		});
		else if (r === 48) {
			let n = na(e);
			n && t.push({
				type: "setBackgroundColor",
				value: n
			});
		} else r === 49 ? t.push({ type: "resetBackgroundColor" }) : r === 53 ? t.push({
			type: "setDecoration",
			value: "overline"
		}) : r === 55 ? t.push({
			type: "resetDecoration",
			value: "overline"
		}) : r >= 90 && r <= 97 ? t.push({
			type: "setForegroundColor",
			value: {
				type: "named",
				name: Q[r - 90 + 8]
			}
		}) : r >= 100 && r <= 107 && t.push({
			type: "setBackgroundColor",
			value: {
				type: "named",
				name: Q[r - 100 + 8]
			}
		});
	}
	return t;
}
function ia() {
	let e = null, t = null, n = /* @__PURE__ */ new Set();
	return { parse(r) {
		let i = [], a = 0;
		do {
			let o = ta(r, a), s = o.sequence ? r.substring(a, o.startPosition) : r.substring(a);
			if (s.length > 0 && i.push({
				value: s,
				foreground: e,
				background: t,
				decorations: new Set(n)
			}), o.sequence) {
				let r = ra(o.sequence);
				for (let i of r) i.type === "resetAll" ? (e = null, t = null, n.clear()) : i.type === "resetForegroundColor" ? e = null : i.type === "resetBackgroundColor" ? t = null : i.type === "resetDecoration" && n.delete(i.value);
				for (let i of r) i.type === "setForegroundColor" ? e = i.value : i.type === "setBackgroundColor" ? t = i.value : i.type === "setDecoration" && n.add(i.value);
			}
			a = o.position;
		} while (a < r.length);
		return i;
	} };
}
var aa = {
	black: "#000000",
	red: "#bb0000",
	green: "#00bb00",
	yellow: "#bbbb00",
	blue: "#0000bb",
	magenta: "#ff00ff",
	cyan: "#00bbbb",
	white: "#eeeeee",
	brightBlack: "#555555",
	brightRed: "#ff5555",
	brightGreen: "#00ff00",
	brightYellow: "#ffff55",
	brightBlue: "#5555ff",
	brightMagenta: "#ff55ff",
	brightCyan: "#55ffff",
	brightWhite: "#ffffff"
};
function oa(e = aa) {
	function t(t) {
		return e[t];
	}
	function n(e) {
		return `#${e.map((e) => Math.max(0, Math.min(e, 255)).toString(16).padStart(2, "0")).join("")}`;
	}
	let r;
	function i() {
		if (r) return r;
		r = [];
		for (let e = 0; e < Q.length; e++) r.push(t(Q[e]));
		let e = [
			0,
			95,
			135,
			175,
			215,
			255
		];
		for (let t = 0; t < 6; t++) for (let i = 0; i < 6; i++) for (let a = 0; a < 6; a++) r.push(n([
			e[t],
			e[i],
			e[a]
		]));
		let i = 8;
		for (let e = 0; e < 24; e++, i += 10) r.push(n([
			i,
			i,
			i
		]));
		return r;
	}
	function a(e) {
		return i()[e];
	}
	function o(e) {
		switch (e.type) {
			case "named": return t(e.name);
			case "rgb": return n(e.rgb);
			case "table": return a(e.index);
		}
	}
	return { value: o };
}
var sa = {
	black: "#000000",
	red: "#cd3131",
	green: "#0DBC79",
	yellow: "#E5E510",
	blue: "#2472C8",
	magenta: "#BC3FBC",
	cyan: "#11A8CD",
	white: "#E5E5E5",
	brightBlack: "#666666",
	brightRed: "#F14C4C",
	brightGreen: "#23D18B",
	brightYellow: "#F5F543",
	brightBlue: "#3B8EEA",
	brightMagenta: "#D670D6",
	brightCyan: "#29B8DB",
	brightWhite: "#FFFFFF"
};
function ca(e, t, n) {
	let r = ln(e, n), i = gn(t), a = oa(Object.fromEntries(Q.map((t) => {
		let n = `terminal.ansi${t[0].toUpperCase()}${t.substring(1)}`;
		return [t, e.colors?.[n] || sa[t]];
	}))), o = ia();
	return i.map((t) => o.parse(t[0]).map((n) => {
		let i, o;
		n.decorations.has("reverse") ? (i = n.background ? a.value(n.background) : e.bg, o = n.foreground ? a.value(n.foreground) : e.fg) : (i = n.foreground ? a.value(n.foreground) : e.fg, o = n.background ? a.value(n.background) : void 0), i = I(i, r), o = I(o, r), n.decorations.has("dim") && (i = la(i));
		let s = w.None;
		return n.decorations.has("bold") && (s |= w.Bold), n.decorations.has("italic") && (s |= w.Italic), n.decorations.has("underline") && (s |= w.Underline), n.decorations.has("strikethrough") && (s |= w.Strikethrough), {
			content: n.value,
			offset: t[1],
			color: i,
			bgColor: o,
			fontStyle: s
		};
	}));
}
function la(e) {
	let t = e.match(/#([0-9a-f]{3,8})/i);
	if (t) {
		let e = t[1];
		if (e.length === 8) {
			let t = Math.round(Number.parseInt(e.slice(6, 8), 16) / 2).toString(16).padStart(2, "0");
			return `#${e.slice(0, 6)}${t}`;
		} else if (e.length === 6) return `#${e}80`;
		else if (e.length === 4) {
			let t = e[0], n = e[1], r = e[2], i = e[3];
			return `#${t}${t}${n}${n}${r}${r}${Math.round(Number.parseInt(`${i}${i}`, 16) / 2).toString(16).padStart(2, "0")}`;
		} else if (e.length === 3) {
			let t = e[0], n = e[1], r = e[2];
			return `#${t}${t}${n}${n}${r}${r}80`;
		}
	}
	let n = e.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
	return n ? `var(${n[1]}-dim)` : e;
}
function ua(e, t, n = {}) {
	let r = e.resolveLangAlias(n.lang || "text"), { theme: i = e.getLoadedThemes()[0] } = n;
	if (!fn(r) && !mn(i) && r === "ansi") {
		let { theme: r } = e.setTheme(i);
		return ca(r, t, n);
	}
	return Nn(e, t, n);
}
function da(e, t, n) {
	let r, i, a, o, s, c;
	if ("themes" in n) {
		let { defaultColor: l = "light", cssVariablePrefix: u = "--shiki-", colorsRendering: d = "css-vars" } = n, f = Object.entries(n.themes).filter((e) => e[1]).map((e) => ({
			color: e[0],
			theme: e[1]
		})).sort((e, t) => e.color === l ? -1 : t.color === l ? 1 : 0);
		if (f.length === 0) throw new C("`themes` option must not be empty");
		let p = Hn(e, t, n, ua);
		if (c = R(p), l && Vi !== l && !f.find((e) => e.color === l)) throw new C(`\`themes\` option must contain the defaultColor key \`${l}\``);
		let m = f.map((t) => e.getTheme(t.theme)), h = f.map((e) => e.color);
		a = p.map((e) => e.map((e) => Gi(e, h, u, l, d))), c && kn(a, c);
		let g = f.map((e) => ln(e.theme, n));
		i = fa(f, m, g, u, l, "fg", d), r = fa(f, m, g, u, l, "bg", d), o = `shiki-themes ${m.map((e) => e.name).join(" ")}`, s = l ? void 0 : [i, r].join(";");
	} else if ("theme" in n) {
		let s = ln(n.theme, n);
		a = ua(e, t, n);
		let l = e.getTheme(n.theme);
		r = I(l.bg, s), i = I(l.fg, s), o = l.name, c = R(a);
	} else throw new C("Invalid options, either `theme` or `themes` must be provided");
	return {
		tokens: a,
		fg: i,
		bg: r,
		themeName: o,
		rootStyle: s,
		grammarState: c
	};
}
function fa(e, t, n, r, i, a, o) {
	return e.map((s, c) => {
		let l = I(t[c][a], n[c]) || "inherit", u = `${r + s.color}${a === "bg" ? "-bg" : ""}:${l}`;
		if (c === 0 && i) {
			if (i === Vi && e.length > 1) {
				let r = e.findIndex((e) => e.color === "light"), i = e.findIndex((e) => e.color === "dark");
				if (r === -1 || i === -1) throw new C("When using `defaultColor: \"light-dark()\"`, you must provide both `light` and `dark` themes");
				return `light-dark(${I(t[r][a], n[r]) || "inherit"}, ${I(t[i][a], n[i]) || "inherit"});${u}`;
			}
			return l;
		}
		return o === "css-vars" ? u : null;
	}).filter((e) => !!e).join(";");
}
function $(e, t, n, r = {
	meta: {},
	options: n,
	codeToHast: (t, n) => $(e, t, n),
	codeToTokens: (t, n) => da(e, t, n)
}) {
	let i = t;
	for (let e of Qi(n)) i = e.preprocess?.call(r, i, n) || i;
	let { tokens: a, fg: o, bg: s, themeName: c, rootStyle: l, grammarState: u } = da(e, i, n), { mergeWhitespaces: d = !0, mergeSameStyleTokens: f = !1 } = n;
	d === !0 ? a = ma(a) : d === "never" && (a = ha(a)), f && (a = ga(a));
	let p = {
		...r,
		get source() {
			return i;
		}
	};
	for (let e of Qi(n)) a = e.tokens?.call(p, a) || a;
	return pa(a, {
		...n,
		fg: o,
		bg: s,
		themeName: c,
		rootStyle: n.rootStyle === !1 ? !1 : n.rootStyle ?? l
	}, p, u);
}
function pa(e, t, n, r = R(e)) {
	let i = Qi(t), a = [], o = {
		type: "root",
		children: []
	}, { structure: s = "classic", tabindex: c = "0" } = t, l = { class: `shiki ${t.themeName || ""}` };
	t.rootStyle !== !1 && (t.rootStyle == null ? l.style = `background-color:${t.bg};color:${t.fg}` : l.style = t.rootStyle), c !== !1 && c != null && (l.tabindex = c.toString());
	for (let [e, n] of Object.entries(t.meta || {})) e.startsWith("_") || (l[e] = n);
	let u = {
		type: "element",
		tagName: "pre",
		properties: l,
		children: [],
		data: t.data
	}, d = {
		type: "element",
		tagName: "code",
		properties: {},
		children: a
	}, f = [], p = {
		...n,
		structure: s,
		addClassToHast: Ri,
		get source() {
			return n.source;
		},
		get tokens() {
			return e;
		},
		get options() {
			return t;
		},
		get root() {
			return o;
		},
		get pre() {
			return u;
		},
		get code() {
			return d;
		},
		get lines() {
			return f;
		}
	};
	if (e.forEach((e, t) => {
		t && (s === "inline" ? o.children.push({
			type: "element",
			tagName: "br",
			properties: {},
			children: []
		}) : s === "classic" && a.push({
			type: "text",
			value: "\n"
		}));
		let n = {
			type: "element",
			tagName: "span",
			properties: { class: "line" },
			children: []
		}, r = 0;
		for (let a of e) {
			let e = {
				type: "element",
				tagName: "span",
				properties: { ...a.htmlAttrs },
				children: [{
					type: "text",
					value: a.content
				}]
			}, c = qi(a.htmlStyle || Ki(a));
			c && (e.properties.style = c);
			for (let o of i) e = o?.span?.call(p, e, t + 1, r, n, a) || e;
			s === "inline" ? o.children.push(e) : s === "classic" && n.children.push(e), r += a.content.length;
		}
		if (s === "classic") {
			for (let e of i) n = e?.line?.call(p, n, t + 1) || n;
			f.push(n), a.push(n);
		} else s === "inline" && f.push(n);
	}), s === "classic") {
		for (let e of i) d = e?.code?.call(p, d) || d;
		u.children.push(d);
		for (let e of i) u = e?.pre?.call(p, u) || u;
		o.children.push(u);
	} else if (s === "inline") {
		let e = [], t = {
			type: "element",
			tagName: "span",
			properties: { class: "line" },
			children: []
		};
		for (let n of o.children) n.type === "element" && n.tagName === "br" ? (e.push(t), t = {
			type: "element",
			tagName: "span",
			properties: { class: "line" },
			children: []
		}) : (n.type === "element" || n.type === "text") && t.children.push(n);
		e.push(t);
		let n = {
			type: "element",
			tagName: "code",
			properties: {},
			children: e
		};
		for (let e of i) n = e?.code?.call(p, n) || n;
		o.children = [];
		for (let e = 0; e < n.children.length; e++) {
			e > 0 && o.children.push({
				type: "element",
				tagName: "br",
				properties: {},
				children: []
			});
			let t = n.children[e];
			t.type === "element" && o.children.push(...t.children);
		}
	}
	let m = o;
	for (let e of i) m = e?.root?.call(p, m) || m;
	return r && kn(m, r), m;
}
function ma(e) {
	return e.map((e) => {
		let t = [], n = "", r;
		return e.forEach((i, a) => {
			let o = !(i.fontStyle && (i.fontStyle & w.Underline || i.fontStyle & w.Strikethrough));
			o && i.content.match(/^\s+$/) && e[a + 1] ? (r === void 0 && (r = i.offset), n += i.content) : n ? (o ? t.push({
				...i,
				offset: r,
				content: n + i.content
			}) : t.push({
				content: n,
				offset: r
			}, i), r = void 0, n = "") : t.push(i);
		}), t;
	});
}
function ha(e) {
	return e.map((e) => e.flatMap((e) => {
		if (e.content.match(/^\s+$/)) return e;
		let t = e.content.match(/^(\s*)(.*?)(\s*)$/);
		if (!t) return e;
		let [, n, r, i] = t;
		if (!n && !i) return e;
		let a = [{
			...e,
			offset: e.offset + n.length,
			content: r
		}];
		return n && a.unshift({
			content: n,
			offset: e.offset
		}), i && a.push({
			content: i,
			offset: e.offset + n.length + r.length
		}), a;
	}));
}
function ga(e) {
	return e.map((e) => {
		let t = [];
		for (let n of e) {
			if (t.length === 0) {
				t.push({ ...n });
				continue;
			}
			let e = t[t.length - 1], r = qi(e.htmlStyle || Ki(e)), i = qi(n.htmlStyle || Ki(n)), a = e.fontStyle && (e.fontStyle & w.Underline || e.fontStyle & w.Strikethrough), o = n.fontStyle && (n.fontStyle & w.Underline || n.fontStyle & w.Strikethrough);
			!a && !o && r === i ? e.content += n.content : t.push({ ...n });
		}
		return t;
	});
}
var _a = Fi;
function va(e, t, n) {
	let r = {
		meta: {},
		options: n,
		codeToHast: (t, n) => $(e, t, n),
		codeToTokens: (t, n) => da(e, t, n)
	}, i = _a($(e, t, n, r));
	for (let e of Qi(n)) i = e.postprocess?.call(r, i, n) || i;
	return i;
}
async function ya(e) {
	let t = await Dn(e);
	return {
		getLastGrammarState: (...e) => Pn(t, ...e),
		codeToTokensBase: (e, n) => ua(t, e, n),
		codeToTokensWithThemes: (e, n) => Hn(t, e, n),
		codeToTokens: (e, n) => da(t, e, n),
		codeToHast: (e, n) => $(t, e, n),
		codeToHtml: (e, n) => va(t, e, n),
		getBundledLanguages: () => ({}),
		getBundledThemes: () => ({}),
		...t,
		getInternalContext: () => t
	};
}
function ba(e) {
	let t = e.langs, n = e.themes, r = e.engine;
	async function i(e) {
		function i(n) {
			if (typeof n == "string") {
				if (n = e.langAlias?.[n] || n, pn(n)) return [];
				let r = t[n];
				if (!r) throw new C(`Language \`${n}\` is not included in this bundle. You may want to load it from external source.`);
				return r;
			}
			return n;
		}
		function a(e) {
			if (hn(e)) return "none";
			if (typeof e == "string") {
				let t = n[e];
				if (!t) throw new C(`Theme \`${e}\` is not included in this bundle. You may want to load it from external source.`);
				return t;
			}
			return e;
		}
		let o = (e.themes ?? []).map((e) => a(e)), s = (e.langs ?? []).map((e) => i(e)), c = await ya({
			engine: e.engine ?? r(),
			...e,
			themes: o,
			langs: s
		});
		return {
			...c,
			loadLanguage(...e) {
				return c.loadLanguage(...e.map(i));
			},
			loadTheme(...e) {
				return c.loadTheme(...e.map(a));
			},
			getBundledLanguages() {
				return t;
			},
			getBundledThemes() {
				return n;
			}
		};
	}
	return i;
}
function xa(e) {
	let t;
	async function n(n = {}) {
		if (t) {
			let e = await t;
			return await Promise.all([e.loadTheme(...n.themes || []), e.loadLanguage(...n.langs || [])]), e;
		} else {
			t = e({
				...n,
				themes: [],
				langs: []
			});
			let r = await t;
			return await Promise.all([r.loadTheme(...n.themes || []), r.loadLanguage(...n.langs || [])]), r;
		}
	}
	return n;
}
function Sa(e, t) {
	let n = xa(e);
	async function r(e, r) {
		let i = await n({
			langs: [r.lang],
			themes: "theme" in r ? [r.theme] : Object.values(r.themes)
		}), a = await t?.guessEmbeddedLanguages?.(e, r.lang, i);
		return a && await i.loadLanguage(...a), i;
	}
	return {
		getSingletonHighlighter(e) {
			return n(e);
		},
		async codeToHtml(e, t) {
			return (await r(e, t)).codeToHtml(e, t);
		},
		async codeToHast(e, t) {
			return (await r(e, t)).codeToHast(e, t);
		},
		async codeToTokens(e, t) {
			return (await r(e, t)).codeToTokens(e, t);
		},
		async codeToTokensBase(e, t) {
			return (await r(e, t)).codeToTokensBase(e, t);
		},
		async codeToTokensWithThemes(e, t) {
			return (await r(e, t)).codeToTokensWithThemes(e, t);
		},
		async getLastGrammarState(e, t) {
			return (await n({
				langs: [t.lang],
				themes: [t.theme]
			})).getLastGrammarState(e, t);
		}
	};
}
var { codeToHtml: Ca, codeToHast: wa, codeToTokens: Ta, codeToTokensBase: Ea, codeToTokensWithThemes: Da, getSingletonHighlighter: Oa, getLastGrammarState: ka } = /* @__PURE__ */ Sa(/* @__PURE__ */ ba({
	langs: le,
	themes: ue,
	engine: () => (0, Ie.createOnigurumaEngine)(import("./wasm-bBbzFViG.js"))
}), { guessEmbeddedLanguages: Bi });
//#endregion
//#region src/components/code-block/CodeBlockClient.tsx
function Aa({ code: e, lang: t, theme: s = "github-dark" }) {
	let [c, l] = r(""), [u, d] = r(!0), [f, p] = r(!0);
	return n(() => {
		(async () => {
			try {
				d(!0), l(await Ca(e, {
					lang: t,
					theme: s
				}));
			} catch (t) {
				console.error("Failed to highlight code:", t), l(`<pre><code>${e}</code></pre>`);
			} finally {
				d(!1);
			}
		})();
	}, [
		e,
		t,
		s
	]), u ? /* @__PURE__ */ a("div", {
		className: "w-full rounded-lg overflow-auto p-4 bg-[#24292e] text-[#e1e4e8]",
		children: /* @__PURE__ */ o("div", {
			className: "animate-pulse",
			children: [/* @__PURE__ */ a("div", { className: "h-4 bg-gray-700 rounded w-3/4 mb-2" }), /* @__PURE__ */ a("div", { className: "h-4 bg-gray-700 rounded w-1/2" })]
		})
	}) : /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a("style", { children: "\n				pre {\n					tab-size: 2 !important;\n					-moz-tab-size: 2 !important;\n					font-size: 0.9em !important;\n				}\n				pre code {\n					tab-size: 2 !important;\n					-moz-tab-size: 2 !important;\n				}\n			" }), /* @__PURE__ */ o("div", {
		className: "w-full rounded-lg bg-[#24292e] text-[#e1e4e8] overflow-hidden",
		children: [/* @__PURE__ */ o("div", {
			className: "rounded-t-lg flex items-center justify-between p-4 cursor-pointer hover:bg-[#2d3338] transition-colors",
			onClick: () => p(!f),
			children: [/* @__PURE__ */ a("span", {
				className: "text-sm font-medium text-gray-400",
				children: t
			}), /* @__PURE__ */ a("svg", {
				className: `w-5 h-5 transition-transform shrink-0 ${f ? "rotate-180" : ""}`,
				fill: "none",
				stroke: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ a("path", {
					strokeLinecap: "round",
					strokeLinejoin: "round",
					strokeWidth: 2,
					d: "M19 9l-7 7-7-7"
				})
			})]
		}), f && /* @__PURE__ */ a("div", {
			className: "overflow-x-auto overflow-y-auto p-4 border-t border-gray-700",
			dangerouslySetInnerHTML: { __html: c }
		})]
	})] });
}
//#endregion
export { _ as n, f as r, Aa as t };
