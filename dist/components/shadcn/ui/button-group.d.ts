import { useRender } from '@base-ui/react/use-render';
import { VariantProps } from 'class-variance-authority';
import { Separator } from './separator';
declare const buttonGroupVariantsConfig: {
    readonly orientation: {
        readonly horizontal: "*:data-slot:rounded-r-none [&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-lg! [&>[data-slot]~[data-slot]]:rounded-l-none [&>[data-slot]~[data-slot]]:border-l-0";
        readonly vertical: "flex-col *:data-slot:rounded-b-none [&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-lg! [&>[data-slot]~[data-slot]]:rounded-t-none [&>[data-slot]~[data-slot]]:border-t-0";
    };
};
declare const buttonGroupVariants: (props?: ({
    readonly orientation?: "horizontal" | "vertical" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function ButtonGroup({ className, orientation, ...props }: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>): import("react/jsx-runtime").JSX.Element;
declare function ButtonGroupText({ className, render, ...props }: useRender.ComponentProps<"div">): import('react').ReactElement<unknown, string | import('react').JSXElementConstructor<any>>;
declare function ButtonGroupSeparator({ className, orientation, ...props }: React.ComponentProps<typeof Separator>): import("react/jsx-runtime").JSX.Element;
export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText, buttonGroupVariants, buttonGroupVariantsConfig, };
