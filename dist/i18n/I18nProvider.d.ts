import { ReactNode } from 'react';
import { i18n as I18nInstance } from 'i18next';
interface I18nProviderProps {
    children: ReactNode;
    i18n?: I18nInstance;
}
export declare function I18nProvider({ children, i18n }: I18nProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
