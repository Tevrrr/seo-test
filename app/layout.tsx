/** @format */

import Head from 'next/head';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
