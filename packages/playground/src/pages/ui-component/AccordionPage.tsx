import { useState, type ReactNode } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@axiom/mfe-lib-shared/components/ui';

function Section({ title, children }: { title: string; children: ReactNode }) {
	return (
		<section className="space-y-3">
			<h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider border-b pb-2">{title}</h2>
			{children}
		</section>
	);
}

function InteractiveExample() {
	const [openItems, setOpenItems] = useState<string[]>([]);
	return (
		<div className="w-full space-y-3">
			<p className="text-sm text-muted-foreground">
				열린 항목:{' '}
				<span className="font-semibold text-foreground">{openItems.length === 0 ? '없음' : openItems.join(', ')}</span>
			</p>
			<Accordion
				multiple
				value={openItems}
				onValueChange={setOpenItems}
			>
				<AccordionItem value="item-1">
					<AccordionTrigger>배송 옵션은 무엇인가요?</AccordionTrigger>
					<AccordionContent>
						일반 배송(5~7일), 빠른 배송(2~3일), 당일 배송을 제공합니다. 국제 주문은 무료 배송입니다.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>환불 정책이 어떻게 되나요?</AccordionTrigger>
					<AccordionContent>
						구매 후 30일 이내에 미사용 상태의 제품을 반품하시면 전액 환불해 드립니다. 반품 운송비는 고객 부담입니다.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>고객 지원에 연락하려면 어떻게 하나요?</AccordionTrigger>
					<AccordionContent>
						이메일(support@example.com), 전화(평일 오전 9시 ~ 오후 6시), 또는 채팅을 통해 문의하실 수 있습니다.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

export default function AccordionPage(): ReactNode {
	return (
		<div className="space-y-10 max-w-2xl">
			<div>
				<h1 className="text-2xl font-bold tracking-tight">Accordion</h1>
				<p className="text-sm text-muted-foreground mt-1">
					<code className="bg-muted px-1 rounded text-xs">@axiom/mfe-lib-shared</code> 에서 제공하는 아코디언
					컴포넌트입니다. 각 항목을 클릭하면 내용이 펼쳐집니다.
				</p>
			</div>

			<Section title="인터랙티브 예시">
				<div className="rounded-lg border p-6">
					<InteractiveExample />
				</div>
			</Section>

			<Section title="기본 (Single)">
				<div className="rounded-lg border p-6">
					<Accordion defaultValue={['basic-1']}>
						<AccordionItem value="basic-1">
							<AccordionTrigger>비밀번호를 어떻게 재설정하나요?</AccordionTrigger>
							<AccordionContent>
								로그인 페이지에서 '비밀번호 찾기'를 클릭하고 이메일 주소를 입력하면 재설정 링크를 보내드립니다. 링크는
								24시간 후 만료됩니다.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="basic-2">
							<AccordionTrigger>구독 플랜을 변경할 수 있나요?</AccordionTrigger>
							<AccordionContent>
								네, 언제든지 계정 설정에서 플랜을 업그레이드하거나 다운그레이드할 수 있습니다. 변경 사항은 다음 청구
								주기부터 적용됩니다.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="basic-3">
							<AccordionTrigger>어떤 결제 수단을 지원하나요?</AccordionTrigger>
							<AccordionContent>신용카드(Visa, MasterCard, AMEX), 계좌이체, PayPal을 지원합니다.</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</Section>

			<Section title="다중 열기 (Multiple)">
				<div className="rounded-lg border p-6">
					<Accordion
						multiple
						defaultValue={['multi-1', 'multi-3']}
					>
						<AccordionItem value="multi-1">
							<AccordionTrigger>알림 설정</AccordionTrigger>
							<AccordionContent>
								이메일 알림, 푸시 알림, SMS 알림을 개별적으로 설정할 수 있습니다. 알림 빈도와 수신 시간대도 지정
								가능합니다.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="multi-2">
							<AccordionTrigger>개인정보 및 보안</AccordionTrigger>
							<AccordionContent>
								2단계 인증을 활성화하고 로그인 기록을 확인하세요. 연결된 앱과 기기를 관리할 수 있습니다.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="multi-3">
							<AccordionTrigger>결제 및 구독</AccordionTrigger>
							<AccordionContent>청구서 조회, 결제 수단 변경, 구독 취소를 이 섹션에서 관리하세요.</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</Section>

			<Section title="비활성화 (Disabled)">
				<div className="rounded-lg border p-6">
					<Accordion>
						<AccordionItem value="disabled-1">
							<AccordionTrigger>계정 이용 내역을 볼 수 있나요?</AccordionTrigger>
							<AccordionContent>
								마이페이지 &gt; 이용 내역에서 최근 30일간의 활동을 확인할 수 있습니다.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem
							value="disabled-2"
							disabled
						>
							<AccordionTrigger>프리미엄 기능 정보 (비활성화)</AccordionTrigger>
							<AccordionContent>이 항목은 프리미엄 사용자에게만 제공됩니다.</AccordionContent>
						</AccordionItem>
						<AccordionItem value="disabled-3">
							<AccordionTrigger>이메일 주소는 어떻게 변경하나요?</AccordionTrigger>
							<AccordionContent>
								계정 설정 &gt; 프로필에서 이메일 주소를 변경할 수 있습니다. 변경 후 인증 이메일이 발송됩니다.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</Section>

			<Section title="테두리 스타일 (Borders)">
				<div className="rounded-lg border p-6">
					<Accordion className="border rounded-lg">
						<AccordionItem
							value="border-1"
							className="border-b last:border-b-0 px-4"
						>
							<AccordionTrigger>청구는 어떻게 이루어지나요?</AccordionTrigger>
							<AccordionContent>
								월간 및 연간 구독 플랜을 제공합니다. 각 주기 시작 시 청구되며, 언제든지 취소할 수 있습니다. 모든 플랜에
								자동 백업, 24/7 지원, 무제한 팀원이 포함됩니다.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem
							value="border-2"
							className="border-b last:border-b-0 px-4"
						>
							<AccordionTrigger>데이터는 안전한가요?</AccordionTrigger>
							<AccordionContent>
								모든 데이터는 AES-256 암호화로 저장되며, 전송 시에는 TLS를 사용합니다. 정기적인 보안 감사를 실시합니다.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem
							value="border-3"
							className="border-b last:border-b-0 px-4"
						>
							<AccordionTrigger>어떤 연동 기능을 지원하나요?</AccordionTrigger>
							<AccordionContent>
								Slack, GitHub, Jira, Google Workspace 등 50개 이상의 서비스와 연동할 수 있습니다.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</Section>
		</div>
	);
}
