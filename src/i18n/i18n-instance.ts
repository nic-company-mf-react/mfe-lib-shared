import i18next from 'i18next';

// createInstance()로 전역 i18next 인스턴스와 분리된 독립 인스턴스 생성.
// Module Federation singleton: true 설정과 함께 Host/Remote가 동일 객체를 참조한다.
const i18n = i18next.createInstance();

export default i18n;
