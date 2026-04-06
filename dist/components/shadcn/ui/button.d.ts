import { Button as ButtonPrimitive } from '@base-ui/react/button';
declare const buttonVariantsConfig: {
    readonly variant: {
        readonly default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80";
        readonly outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50";
        readonly secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground";
        readonly ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50";
        readonly destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40";
        readonly link: "text-primary underline-offset-4 hover:underline";
    };
    readonly size: {
        readonly default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2";
        readonly xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3";
        readonly sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5";
        readonly lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3";
        readonly icon: "size-8";
        readonly "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3";
        readonly "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg";
        readonly "icon-lg": "size-9";
    };
};
declare const buttonVariants: (props?: ({
    readonly variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link" | null | undefined;
    readonly size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
/** Button 컴포넌트의 Props */
interface ButtonProps extends ButtonPrimitive.Props {
    /**
     * 버튼의 시각적 스타일.
     *
     * - `default` — 주요 행동 유도에 사용 (Primary)
     * - `outline` — 덜 강조된 보조 행동에 사용
     * - `secondary` — 부차적인 행동에 사용
     * - `ghost` — 최소한의 시각적 강조
     * - `destructive` — 위험하거나 되돌릴 수 없는 행동에 사용
     * - `link` — 링크처럼 표시되는 버튼
     * @default "default"
     */
    variant?: keyof typeof buttonVariantsConfig.variant;
    /**
     * 버튼의 크기.
     *
     * - `default` — 기본 크기 (h-8)
     * - `xs` — 매우 작은 크기 (h-6)
     * - `sm` — 작은 크기 (h-7)
     * - `lg` — 큰 크기 (h-9)
     * - `icon` / `icon-xs` / `icon-sm` / `icon-lg` — 아이콘 전용 정사각형 버튼
     * @default "default"
     */
    size?: keyof typeof buttonVariantsConfig.size;
}
declare function Button({ className, variant, size, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export { Button, buttonVariants, buttonVariantsConfig };
export type { ButtonProps };
