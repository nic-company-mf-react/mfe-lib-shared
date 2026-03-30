export interface ICodeBlockClientProps {
    code: string;
    lang: string;
    theme?: string;
}
export default function CodeBlockClient({ code, lang, theme }: ICodeBlockClientProps): import("react/jsx-runtime").JSX.Element;
