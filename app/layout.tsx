/** @format */

import Head from 'next/head';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'ПЕРЕВОЗКИ ИЗ ЛДНР , РФ В СТРАНЫ ЕС И УКРАИНУ',
	description:
        'ЕЖЕДНЕВНЫЕ ПАССАЖИРСКИЕ ПЕРЕВОЗКИ ИЗ ЛДНР , РФ В СТРАНЫ ЕС И УКРАИНУ. КОНСЬЕРЖ СЕРВИС В ВАРШАВЕ. ТРАНСПОРТИРОВКА ЖИВОТНЫХ. ПЕРЕГОН АВТОМОБИЛЯ. ДЕНЕЖНЫЕ ПЕРЕВОДЫ / ОБМЕН ВАЛЮТ',
    
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
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
