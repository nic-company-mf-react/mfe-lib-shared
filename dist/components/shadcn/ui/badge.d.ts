import { useRender } from '@base-ui/react/use-render';
import { VariantProps } from 'class-variance-authority';
declare const badgeVariantsConfig: {
    readonly variant: {
        readonly default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80";
        readonly secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80";
        readonly destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20";
        readonly outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground";
        readonly ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50";
        readonly link: "text-primary underline-offset-4 hover:underline";
    };
};
declare const badgeVariants: (props?: ({
    readonly variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function Badge({ className, variant, render, ...props }: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>): import('react').ReactElement<unknown, string | import('react').JSXElementConstructor<any>>;
export { Badge, badgeVariants, badgeVariantsConfig };
