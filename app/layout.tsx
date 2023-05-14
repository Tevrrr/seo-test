/** @format */

import Script from 'next/script';
import './globals.css';

export const metadata = {
	title: 'Ежедневные пассажирские перевозки из ЛНР, ДНР и РФ в страны ЕС и Украину',
	description:
		'Ежедневные пассажирские перевозки из ЛНР, ДНР и РФ в страны ЕС и Украину. Консьерж сервис в Варшаве. Транспортировка животных. Перегон автомобиля. Денежные переводы / обмен валют',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='ru'>
            <head>
                <meta charSet='UTF-8' />
                <meta
					name='keywords'
					content='Пассажирские перевозки, ЛНР, ДНР, РФ, Страны ЕС, Украина, Комфортабельный транспорт, Помощь при пересечении границы, Перегон автомобиля, Денежные переводы, Обмен валют,'
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta
					name='google-site-verification'
					content='iMLI7dmXtK4OU3Lb_tHTocN8VUz7VzWBJk4TbIT7m-0'
				/>
				<meta name='yandex-verification' content='292364a98d821d7e' />
				
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
