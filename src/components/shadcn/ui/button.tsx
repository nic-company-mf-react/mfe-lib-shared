import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva } from "class-variance-authority"

import { cn } from "@/components/shadcn/lib/utils"

const buttonVariantsConfig = {
  variant: {
    default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
    outline:
      "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
    ghost:
      "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
    destructive:
      "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
    link: "text-primary underline-offset-4 hover:underline",
  },
  size: {
    default:
      "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
    xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
    sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
    lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
    icon: "size-8",
    "icon-xs":
      "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
    "icon-sm":
      "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
    "icon-lg": "size-9",
  },
} as const

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: buttonVariantsConfig,
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

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

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants, buttonVariantsConfig }
export type { ButtonProps }
