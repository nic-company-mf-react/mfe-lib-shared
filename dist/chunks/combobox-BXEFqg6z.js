import { H as cn, I as ChevronDown, L as Check, R as createLucideIcon, U as cva, z as Button } from "./select-CKR0KtgH.js";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React$1 from "react";
import { Combobox } from "@base-ui/react";
import { Input } from "@base-ui/react/input";
var X = createLucideIcon("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region src/components/shadcn/ui/input.tsx
function Input$1({ className, type, ...props }) {
	return /* @__PURE__ */ jsx(Input, {
		type,
		"data-slot": "input",
		className: cn("h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
		...props
	});
}
//#endregion
//#region src/components/shadcn/ui/input-group.tsx
function InputGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "input-group",
		role: "group",
		className: cn("group/input-group relative flex h-8 w-full min-w-0 items-center rounded-lg border border-input transition-colors outline-none has-disabled:bg-input/50 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto dark:bg-input/30 dark:has-disabled:bg-input/80 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5", className),
		...props
	});
}
var inputGroupAddonVariants = cva("flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4", {
	variants: { align: {
		"inline-start": "order-first pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem]",
		"inline-end": "order-last pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem]",
		"block-start": "order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
		"block-end": "order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2"
	} },
	defaultVariants: { align: "inline-start" }
});
function InputGroupAddon({ className, align = "inline-start", ...props }) {
	return /* @__PURE__ */ jsx("div", {
		role: "group",
		"data-slot": "input-group-addon",
		"data-align": align,
		className: cn(inputGroupAddonVariants({ align }), className),
		onClick: (e) => {
			if (e.target.closest("button")) return;
			e.currentTarget.parentElement?.querySelector("input")?.focus();
		},
		...props
	});
}
var inputGroupButtonVariants = cva("flex items-center gap-2 text-sm shadow-none", {
	variants: { size: {
		xs: "h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
		sm: "",
		"icon-xs": "size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0",
		"icon-sm": "size-8 p-0 has-[>svg]:p-0"
	} },
	defaultVariants: { size: "xs" }
});
function InputGroupButton({ className, type = "button", variant = "ghost", size = "xs", ...props }) {
	return /* @__PURE__ */ jsx(Button, {
		type,
		"data-size": size,
		variant,
		className: cn(inputGroupButtonVariants({ size }), className),
		...props
	});
}
function InputGroupInput({ className, ...props }) {
	return /* @__PURE__ */ jsx(Input$1, {
		"data-slot": "input-group-control",
		className: cn("flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent", className),
		...props
	});
}
//#endregion
//#region src/components/shadcn/ui/combobox.tsx
var Combobox$1 = Combobox.Root;
function ComboboxValue({ ...props }) {
	return /* @__PURE__ */ jsx(Combobox.Value, {
		"data-slot": "combobox-value",
		...props
	});
}
function ComboboxTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ jsxs(Combobox.Trigger, {
		"data-slot": "combobox-trigger",
		className: cn("[&_svg:not([class*='size-'])]:size-4", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(ChevronDown, { className: "pointer-events-none size-4 text-muted-foreground" })]
	});
}
function ComboboxClear({ className, ...props }) {
	return /* @__PURE__ */ jsx(Combobox.Clear, {
		"data-slot": "combobox-clear",
		render: /* @__PURE__ */ jsx(InputGroupButton, {
			variant: "ghost",
			size: "icon-xs"
		}),
		className: cn(className),
		...props,
		children: /* @__PURE__ */ jsx(X, { className: "pointer-events-none" })
	});
}
function ComboboxInput({ className, children, disabled = false, showTrigger = true, showClear = false, ...props }) {
	return /* @__PURE__ */ jsxs(InputGroup, {
		className: cn("w-auto", className),
		children: [
			/* @__PURE__ */ jsx(Combobox.Input, {
				render: /* @__PURE__ */ jsx(InputGroupInput, { disabled }),
				...props
			}),
			/* @__PURE__ */ jsxs(InputGroupAddon, {
				align: "inline-end",
				children: [showTrigger && /* @__PURE__ */ jsx(InputGroupButton, {
					size: "icon-xs",
					variant: "ghost",
					render: /* @__PURE__ */ jsx(ComboboxTrigger, {}),
					"data-slot": "input-group-button",
					className: "group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent",
					disabled
				}), showClear && /* @__PURE__ */ jsx(ComboboxClear, { disabled })]
			}),
			children
		]
	});
}
function ComboboxContent({ className, side = "bottom", sideOffset = 6, align = "start", alignOffset = 0, anchor, ...props }) {
	return /* @__PURE__ */ jsx(Combobox.Portal, { children: /* @__PURE__ */ jsx(Combobox.Positioner, {
		side,
		sideOffset,
		align,
		alignOffset,
		anchor,
		className: "isolate z-50",
		children: /* @__PURE__ */ jsx(Combobox.Popup, {
			"data-slot": "combobox-content",
			"data-chips": !!anchor,
			className: cn("group/combobox-content relative max-h-(--available-height) w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) overflow-hidden rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[chips=true]:min-w-(--anchor-width) data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:border-input/30 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:shadow-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
			...props
		})
	}) });
}
function ComboboxList({ className, ...props }) {
	return /* @__PURE__ */ jsx(Combobox.List, {
		"data-slot": "combobox-list",
		className: cn("no-scrollbar max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 overflow-y-auto overscroll-contain p-1 data-empty:p-0", className),
		...props
	});
}
function ComboboxItem({ className, children, ...props }) {
	return /* @__PURE__ */ jsxs(Combobox.Item, {
		"data-slot": "combobox-item",
		className: cn("relative flex w-full cursor-default items-center gap-2 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(Combobox.ItemIndicator, {
			render: /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center" }),
			children: /* @__PURE__ */ jsx(Check, { className: "pointer-events-none" })
		})]
	});
}
function ComboboxGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx(Combobox.Group, {
		"data-slot": "combobox-group",
		className: cn(className),
		...props
	});
}
function ComboboxLabel({ className, ...props }) {
	return /* @__PURE__ */ jsx(Combobox.GroupLabel, {
		"data-slot": "combobox-label",
		className: cn("px-2 py-1.5 text-xs text-muted-foreground", className),
		...props
	});
}
function ComboboxCollection({ ...props }) {
	return /* @__PURE__ */ jsx(Combobox.Collection, {
		"data-slot": "combobox-collection",
		...props
	});
}
function ComboboxEmpty({ className, ...props }) {
	return /* @__PURE__ */ jsx(Combobox.Empty, {
		"data-slot": "combobox-empty",
		className: cn("hidden w-full justify-center py-2 text-center text-sm text-muted-foreground group-data-empty/combobox-content:flex", className),
		...props
	});
}
function ComboboxSeparator({ className, ...props }) {
	return /* @__PURE__ */ jsx(Combobox.Separator, {
		"data-slot": "combobox-separator",
		className: cn("-mx-1 my-1 h-px bg-border", className),
		...props
	});
}
function ComboboxChips({ className, ...props }) {
	return /* @__PURE__ */ jsx(Combobox.Chips, {
		"data-slot": "combobox-chips",
		className: cn("flex min-h-8 flex-wrap items-center gap-1 rounded-lg border border-input bg-transparent bg-clip-padding px-2.5 py-1 text-sm transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 has-aria-invalid:border-destructive has-aria-invalid:ring-3 has-aria-invalid:ring-destructive/20 has-data-[slot=combobox-chip]:px-1 dark:bg-input/30 dark:has-aria-invalid:border-destructive/50 dark:has-aria-invalid:ring-destructive/40", className),
		...props
	});
}
function ComboboxChip({ className, children, showRemove = true, ...props }) {
	return /* @__PURE__ */ jsxs(Combobox.Chip, {
		"data-slot": "combobox-chip",
		className: cn("flex h-[calc(--spacing(5.25))] w-fit items-center justify-center gap-1 rounded-sm bg-muted px-1.5 text-xs font-medium whitespace-nowrap text-foreground has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-data-[slot=combobox-chip-remove]:pr-0", className),
		...props,
		children: [children, showRemove && /* @__PURE__ */ jsx(Combobox.ChipRemove, {
			render: /* @__PURE__ */ jsx(Button, {
				variant: "ghost",
				size: "icon-xs"
			}),
			className: "-ml-1 opacity-50 hover:opacity-100",
			"data-slot": "combobox-chip-remove",
			children: /* @__PURE__ */ jsx(X, { className: "pointer-events-none" })
		})]
	});
}
function ComboboxChipsInput({ className, ...props }) {
	return /* @__PURE__ */ jsx(Combobox.Input, {
		"data-slot": "combobox-chip-input",
		className: cn("min-w-16 flex-1 outline-none", className),
		...props
	});
}
function useComboboxAnchor() {
	return React$1.useRef(null);
}
//#endregion
export { ComboboxCollection as a, ComboboxGroup as c, ComboboxLabel as d, ComboboxList as f, useComboboxAnchor as g, ComboboxValue as h, ComboboxChipsInput as i, ComboboxInput as l, ComboboxTrigger as m, ComboboxChip as n, ComboboxContent as o, ComboboxSeparator as p, ComboboxChips as r, ComboboxEmpty as s, Combobox$1 as t, ComboboxItem as u };
