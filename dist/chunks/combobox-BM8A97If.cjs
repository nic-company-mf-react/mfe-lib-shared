const require_chunk = require("./chunk-C6SnN1q4.cjs");
const require_select = require("./select-DibxGfva.cjs");
let react_jsx_runtime = require("react/jsx-runtime");
let react = require("react");
react = require_chunk.__toESM(react);
let _base_ui_react_dialog = require("@base-ui/react/dialog");
let _base_ui_react = require("@base-ui/react");
let _base_ui_react_input = require("@base-ui/react/input");
var X = require_select.createLucideIcon("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region src/components/shadcn/ui/dialog.tsx
function Dialog({ ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react_dialog.Dialog.Root, {
		"data-slot": "dialog",
		...props
	});
}
function DialogTrigger({ ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react_dialog.Dialog.Trigger, {
		"data-slot": "dialog-trigger",
		...props
	});
}
function DialogPortal({ ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react_dialog.Dialog.Portal, {
		"data-slot": "dialog-portal",
		...props
	});
}
function DialogClose({ ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react_dialog.Dialog.Close, {
		"data-slot": "dialog-close",
		...props
	});
}
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react_dialog.Dialog.Backdrop, {
		"data-slot": "dialog-overlay",
		className: require_select.cn("fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", className),
		...props
	});
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_base_ui_react_dialog.Dialog.Popup, {
		"data-slot": "dialog-content",
		className: require_select.cn("fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
		...props,
		children: [children, showCloseButton && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_base_ui_react_dialog.Dialog.Close, {
			"data-slot": "dialog-close",
			render: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_select.Button, {
				variant: "ghost",
				className: "absolute top-2 right-2",
				size: "icon-sm"
			}),
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(X, {}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		"data-slot": "dialog-header",
		className: require_select.cn("flex flex-col gap-2", className),
		...props
	});
}
function DialogFooter({ className, showCloseButton = false, children, ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		"data-slot": "dialog-footer",
		className: require_select.cn("-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end", className),
		...props,
		children: [children, showCloseButton && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react_dialog.Dialog.Close, {
			render: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_select.Button, { variant: "outline" }),
			children: "Close"
		})]
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react_dialog.Dialog.Title, {
		"data-slot": "dialog-title",
		className: require_select.cn("text-base leading-none font-medium", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react_dialog.Dialog.Description, {
		"data-slot": "dialog-description",
		className: require_select.cn("text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", className),
		...props
	});
}
//#endregion
//#region src/components/shadcn/ui/input.tsx
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react_input.Input, {
		type,
		"data-slot": "input",
		className: require_select.cn("h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
		...props
	});
}
//#endregion
//#region src/components/shadcn/ui/input-group.tsx
function InputGroup({ className, ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		"data-slot": "input-group",
		role: "group",
		className: require_select.cn("group/input-group relative flex h-8 w-full min-w-0 items-center rounded-lg border border-input transition-colors outline-none has-disabled:bg-input/50 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto dark:bg-input/30 dark:has-disabled:bg-input/80 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5", className),
		...props
	});
}
var inputGroupAddonVariants = require_select.cva("flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4", {
	variants: { align: {
		"inline-start": "order-first pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem]",
		"inline-end": "order-last pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem]",
		"block-start": "order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
		"block-end": "order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2"
	} },
	defaultVariants: { align: "inline-start" }
});
function InputGroupAddon({ className, align = "inline-start", ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		role: "group",
		"data-slot": "input-group-addon",
		"data-align": align,
		className: require_select.cn(inputGroupAddonVariants({ align }), className),
		onClick: (e) => {
			if (e.target.closest("button")) return;
			e.currentTarget.parentElement?.querySelector("input")?.focus();
		},
		...props
	});
}
var inputGroupButtonVariants = require_select.cva("flex items-center gap-2 text-sm shadow-none", {
	variants: { size: {
		xs: "h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
		sm: "",
		"icon-xs": "size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0",
		"icon-sm": "size-8 p-0 has-[>svg]:p-0"
	} },
	defaultVariants: { size: "xs" }
});
function InputGroupButton({ className, type = "button", variant = "ghost", size = "xs", ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_select.Button, {
		type,
		"data-size": size,
		variant,
		className: require_select.cn(inputGroupButtonVariants({ size }), className),
		...props
	});
}
function InputGroupInput({ className, ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Input, {
		"data-slot": "input-group-control",
		className: require_select.cn("flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent", className),
		...props
	});
}
//#endregion
//#region src/components/shadcn/ui/combobox.tsx
var Combobox = _base_ui_react.Combobox.Root;
function ComboboxValue({ ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react.Combobox.Value, {
		"data-slot": "combobox-value",
		...props
	});
}
function ComboboxTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_base_ui_react.Combobox.Trigger, {
		"data-slot": "combobox-trigger",
		className: require_select.cn("[&_svg:not([class*='size-'])]:size-4", className),
		...props,
		children: [children, /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_select.ChevronDown, { className: "pointer-events-none size-4 text-muted-foreground" })]
	});
}
function ComboboxClear({ className, ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react.Combobox.Clear, {
		"data-slot": "combobox-clear",
		render: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(InputGroupButton, {
			variant: "ghost",
			size: "icon-xs"
		}),
		className: require_select.cn(className),
		...props,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(X, { className: "pointer-events-none" })
	});
}
function ComboboxInput({ className, children, disabled = false, showTrigger = true, showClear = false, ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(InputGroup, {
		className: require_select.cn("w-auto", className),
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react.Combobox.Input, {
				render: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(InputGroupInput, { disabled }),
				...props
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(InputGroupAddon, {
				align: "inline-end",
				children: [showTrigger && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(InputGroupButton, {
					size: "icon-xs",
					variant: "ghost",
					render: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComboboxTrigger, {}),
					"data-slot": "input-group-button",
					className: "group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent",
					disabled
				}), showClear && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComboboxClear, { disabled })]
			}),
			children
		]
	});
}
function ComboboxContent({ className, side = "bottom", sideOffset = 6, align = "start", alignOffset = 0, anchor, ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react.Combobox.Portal, { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react.Combobox.Positioner, {
		side,
		sideOffset,
		align,
		alignOffset,
		anchor,
		className: "isolate z-50",
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react.Combobox.Popup, {
			"data-slot": "combobox-content",
			"data-chips": !!anchor,
			className: require_select.cn("group/combobox-content relative max-h-(--available-height) w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) overflow-hidden rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[chips=true]:min-w-(--anchor-width) data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:border-input/30 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:shadow-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
			...props
		})
	}) });
}
function ComboboxList({ className, ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react.Combobox.List, {
		"data-slot": "combobox-list",
		className: require_select.cn("no-scrollbar max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 overflow-y-auto overscroll-contain p-1 data-empty:p-0", className),
		...props
	});
}
function ComboboxItem({ className, children, ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_base_ui_react.Combobox.Item, {
		"data-slot": "combobox-item",
		className: require_select.cn("relative flex w-full cursor-default items-center gap-2 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
		...props,
		children: [children, /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react.Combobox.ItemIndicator, {
			render: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center" }),
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_select.Check, { className: "pointer-events-none" })
		})]
	});
}
function ComboboxGroup({ className, ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react.Combobox.Group, {
		"data-slot": "combobox-group",
		className: require_select.cn(className),
		...props
	});
}
function ComboboxLabel({ className, ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react.Combobox.GroupLabel, {
		"data-slot": "combobox-label",
		className: require_select.cn("px-2 py-1.5 text-xs text-muted-foreground", className),
		...props
	});
}
function ComboboxCollection({ ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react.Combobox.Collection, {
		"data-slot": "combobox-collection",
		...props
	});
}
function ComboboxEmpty({ className, ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react.Combobox.Empty, {
		"data-slot": "combobox-empty",
		className: require_select.cn("hidden w-full justify-center py-2 text-center text-sm text-muted-foreground group-data-empty/combobox-content:flex", className),
		...props
	});
}
function ComboboxSeparator({ className, ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react.Combobox.Separator, {
		"data-slot": "combobox-separator",
		className: require_select.cn("-mx-1 my-1 h-px bg-border", className),
		...props
	});
}
function ComboboxChips({ className, ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react.Combobox.Chips, {
		"data-slot": "combobox-chips",
		className: require_select.cn("flex min-h-8 flex-wrap items-center gap-1 rounded-lg border border-input bg-transparent bg-clip-padding px-2.5 py-1 text-sm transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 has-aria-invalid:border-destructive has-aria-invalid:ring-3 has-aria-invalid:ring-destructive/20 has-data-[slot=combobox-chip]:px-1 dark:bg-input/30 dark:has-aria-invalid:border-destructive/50 dark:has-aria-invalid:ring-destructive/40", className),
		...props
	});
}
function ComboboxChip({ className, children, showRemove = true, ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_base_ui_react.Combobox.Chip, {
		"data-slot": "combobox-chip",
		className: require_select.cn("flex h-[calc(--spacing(5.25))] w-fit items-center justify-center gap-1 rounded-sm bg-muted px-1.5 text-xs font-medium whitespace-nowrap text-foreground has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-data-[slot=combobox-chip-remove]:pr-0", className),
		...props,
		children: [children, showRemove && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react.Combobox.ChipRemove, {
			render: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_select.Button, {
				variant: "ghost",
				size: "icon-xs"
			}),
			className: "-ml-1 opacity-50 hover:opacity-100",
			"data-slot": "combobox-chip-remove",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(X, { className: "pointer-events-none" })
		})]
	});
}
function ComboboxChipsInput({ className, ...props }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_base_ui_react.Combobox.Input, {
		"data-slot": "combobox-chip-input",
		className: require_select.cn("min-w-16 flex-1 outline-none", className),
		...props
	});
}
function useComboboxAnchor() {
	return react.useRef(null);
}
//#endregion
Object.defineProperty(exports, "Combobox", {
	enumerable: true,
	get: function() {
		return Combobox;
	}
});
Object.defineProperty(exports, "ComboboxChip", {
	enumerable: true,
	get: function() {
		return ComboboxChip;
	}
});
Object.defineProperty(exports, "ComboboxChips", {
	enumerable: true,
	get: function() {
		return ComboboxChips;
	}
});
Object.defineProperty(exports, "ComboboxChipsInput", {
	enumerable: true,
	get: function() {
		return ComboboxChipsInput;
	}
});
Object.defineProperty(exports, "ComboboxCollection", {
	enumerable: true,
	get: function() {
		return ComboboxCollection;
	}
});
Object.defineProperty(exports, "ComboboxContent", {
	enumerable: true,
	get: function() {
		return ComboboxContent;
	}
});
Object.defineProperty(exports, "ComboboxEmpty", {
	enumerable: true,
	get: function() {
		return ComboboxEmpty;
	}
});
Object.defineProperty(exports, "ComboboxGroup", {
	enumerable: true,
	get: function() {
		return ComboboxGroup;
	}
});
Object.defineProperty(exports, "ComboboxInput", {
	enumerable: true,
	get: function() {
		return ComboboxInput;
	}
});
Object.defineProperty(exports, "ComboboxItem", {
	enumerable: true,
	get: function() {
		return ComboboxItem;
	}
});
Object.defineProperty(exports, "ComboboxLabel", {
	enumerable: true,
	get: function() {
		return ComboboxLabel;
	}
});
Object.defineProperty(exports, "ComboboxList", {
	enumerable: true,
	get: function() {
		return ComboboxList;
	}
});
Object.defineProperty(exports, "ComboboxSeparator", {
	enumerable: true,
	get: function() {
		return ComboboxSeparator;
	}
});
Object.defineProperty(exports, "ComboboxTrigger", {
	enumerable: true,
	get: function() {
		return ComboboxTrigger;
	}
});
Object.defineProperty(exports, "ComboboxValue", {
	enumerable: true,
	get: function() {
		return ComboboxValue;
	}
});
Object.defineProperty(exports, "Dialog", {
	enumerable: true,
	get: function() {
		return Dialog;
	}
});
Object.defineProperty(exports, "DialogClose", {
	enumerable: true,
	get: function() {
		return DialogClose;
	}
});
Object.defineProperty(exports, "DialogContent", {
	enumerable: true,
	get: function() {
		return DialogContent;
	}
});
Object.defineProperty(exports, "DialogDescription", {
	enumerable: true,
	get: function() {
		return DialogDescription;
	}
});
Object.defineProperty(exports, "DialogFooter", {
	enumerable: true,
	get: function() {
		return DialogFooter;
	}
});
Object.defineProperty(exports, "DialogHeader", {
	enumerable: true,
	get: function() {
		return DialogHeader;
	}
});
Object.defineProperty(exports, "DialogOverlay", {
	enumerable: true,
	get: function() {
		return DialogOverlay;
	}
});
Object.defineProperty(exports, "DialogPortal", {
	enumerable: true,
	get: function() {
		return DialogPortal;
	}
});
Object.defineProperty(exports, "DialogTitle", {
	enumerable: true,
	get: function() {
		return DialogTitle;
	}
});
Object.defineProperty(exports, "DialogTrigger", {
	enumerable: true,
	get: function() {
		return DialogTrigger;
	}
});
Object.defineProperty(exports, "Input", {
	enumerable: true,
	get: function() {
		return Input;
	}
});
Object.defineProperty(exports, "useComboboxAnchor", {
	enumerable: true,
	get: function() {
		return useComboboxAnchor;
	}
});
