/** @format */

import Script from 'next/script';
import './globals.css';

export const metadata = {
	title: 'ПЕРЕВОЗКИ ИЗ ЛДНР , РФ В СТРАНЫ ЕС И УКРАИНУ',
	description:
		'Ежедневные пассажирские перевозки из ЛДНР , РФ в страны ЕС и Украину. Консьерж сервис в Варшаве. Транспортировка животных. Перегон автомобиля. Денежные переводы / обмен валют',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<meta
					name='google-site-verification'
					content='iMLI7dmXtK4OU3Lb_tHTocN8VUz7VzWBJk4TbIT7m-0'
				/>
				<meta name='yandex-verification' content='292364a98d821d7e' />
				<meta
					name='keywords'
					content='Пассажирские, перевозки, ЛНР, ДНР, РФ, Страны ЕС, Украина, Донецк, Луганск, Ростов, Воронеж, Москва, Псков, Эстония, Латвия, Литва, Польша, Германия, Чехия, Водители в пути, Комфортабельный транспорт, Помощь при пересечении границы, Скидка для детей до 12 лет, Перевозка животных, Мариуполь, Обратное направление, Перегон автомобиля, Денежные переводы, Обмен валют, Безналичный обмен, Наличный обмен, Банковские карты'
				/>
				<Script
					id='google-tag-manager'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PVNNJ9J');`,
					}}></Script>
			</head>
			<body>
				<noscript
					dangerouslySetInnerHTML={{
						__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
					}}></noscript>
				{children}
			</body>
		</html>
	);
}
