import { ReactNode } from 'react';
import { i18n as I18nInstance } from 'i18next';
import { QueryClientConfig } from '@tanstack/react-query';
interface AppProvidersProps {
    children: ReactNode;
    queryConfig?: QueryClientConfig;
    i18nInstance?: I18nInstance;
}
/**
 * 애플리케이션의 모든 Provider를 통합하는 컴포넌트
 *
 * 새로운 Provider 추가 시 이곳에서 관리합니다.
 * Provider 순서는 의존성을 고려하여 배치합니다.
 */
export declare function AppProviders({ children, queryConfig, i18nInstance }: AppProvidersProps): import("react/jsx-runtime").JSX.Element;
export {};
