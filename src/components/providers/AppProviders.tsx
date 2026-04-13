import { type ReactNode, useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '../../context';
import { I18nProvider } from '../../i18n/I18nProvider';
import type { i18n as I18nInstance } from 'i18next';
import { Toaster } from '../../components/shadcn/ui';

// Tanstack Query관련 imports ----------------------------
import { QueryClientProvider, type QueryClientConfig } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getQueryClient } from '../../config/tanstack-query/query-client';
// Tanstack Query관련 imports ----------------------------

interface AppProvidersProps {
	children: ReactNode;
	queryConfig?: QueryClientConfig;
	// 테스트 등에서 별도 인스턴스 주입 가능, 기본값은 공유 Singleton 사용
	i18nInstance?: I18nInstance;
}

/**
 * 애플리케이션의 모든 Provider를 통합하는 컴포넌트
 *
 * 새로운 Provider 추가 시 이곳에서 관리합니다.
 * Provider 순서는 의존성을 고려하여 배치합니다.
 */
export function AppProviders({ children, queryConfig, i18nInstance }: AppProvidersProps) {
	// useState로 QueryClient를 초기화하여 React 생명주기와 동기화
	const [queryClient] = useState(() => getQueryClient(queryConfig));

	// Tanstack Query Client를 전역 변수로 설정(Devtools Extension 사용 시 필요) =======
	useEffect(() => {
		window.__TANSTACK_QUERY_CLIENT__ = queryClient;
	}, [queryClient]);
	// Tanstack Query Client를 전역 변수로 설정(Devtools Extension 사용 시 필요) =======

	const content = (
		<ThemeProvider>
			<I18nProvider i18n={i18nInstance}>
				<HelmetProvider>
					<QueryClientProvider client={queryClient}>
						{children}
						{process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
					</QueryClientProvider>
				</HelmetProvider>
			</I18nProvider>
			<Toaster />
		</ThemeProvider>
	);

	return content;
}
