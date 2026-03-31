import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import type { i18n as I18nInstance } from 'i18next';
import i18nDefault from './i18n-instance';

interface I18nProviderProps {
	children: ReactNode;
	// 테스트 등에서 커스텀 인스턴스 주입 가능, 기본값은 공유 Singleton
	i18n?: I18nInstance;
}

export function I18nProvider({ children, i18n = i18nDefault }: I18nProviderProps) {
	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
