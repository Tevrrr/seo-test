/** @format */
import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex justify-center'>
			<div className=' max-w-screen-sm flex flex-col gap-4 text-slate-950 text-center text-xl'>
				<h1 className=' text-3xl font-bold'>
					Ежедневные пассажирские перевозки из ЛДНР , РФ в страны ЕС и
					Украину
				</h1>
				<div className='flex relative h-96'>
					<Image src='/7777.jpg' fill alt='Picture of the author' />
				</div>
				<div className='font-medium flex flex-col gap-2'>
					<div className='flex gap-2 justify-between'>
						<ul>
							<li>
								<h3>Забираем людей из</h3>
							</li>
							<li>
								<h4>Донецка(и области)</h4>
							</li>
							<li>
								<h4>Луганска (и области)</h4>
							</li>
							<li>
								<h4>Ростова</h4>
							</li>
							<li>
								<h4>Воронежа</h4>
							</li>
							<li>
								<h4>Москвы</h4>
							</li>
							<li>
								<h4>Пскова</h4>
							</li>
						</ul>
						<ul>
							<li>
								<h3>Везем в</h3>
							</li>
							<li>
								<h4>Эстонию</h4>
							</li>
							<li>
								<h4>Латвию</h4>
							</li>
							<li>
								<h4>Литву</h4>
							</li>
							<li>
								<h4>Польшу</h4>
							</li>
							<li>
								<h4>Германию</h4>
							</li>
							<li>
								<h4>Чехию</h4>
							</li>
							<li>
								<h4>Украину</h4>
							</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>
								<h3>Наши преимущества:</h3>
							</li>
							<li>
								<h4>2 водителя в пути </h4>
							</li>
							<li>
								<h4>новый комфортабельный транспорт</h4>
							</li>
							<li>
								<h4>помощь при пересечении границы</h4>
							</li>
							<li>
								<h4>детям до 12 лет скидка</h4>
							</li>
							<li>
								<h4>можно с животными</h4>
							</li>
						</ul>
					</div>
				</div>
				<h2 className=' text-3xl font-bold'>
					Консьерж сервис в Варшаве
				</h2>
				<div className=' font-medium'>
					<ul>
						<li>
							<h3>
								Помощь в заселении пассажиров в гостиницу на
								любой бюджет.
							</h3>
						</li>
						<li>
							<h3>
								Помощь в подаче и получении документов
								(внутреннего паспорта и загранпаспорта Украины)
							</h3>
						</li>
						<li>
							<h3>
								Поможем приобрести билеты на самолет и автобус
								во все точки мира.
							</h3>
						</li>
					</ul>
				</div>
				<h2 className=' text-3xl font-bold'>
					Транспортировка животных
				</h2>
				<div className=' font-medium'>
					<ul>
						<li>
							<h3>
								Привезем вашего любимого питомца без хозяина из
								Донецка, Мариуполя, Луганска в страны ЕС и
								Украину, так же в обратном направлении.
							</h3>
						</li>
						<li>
							<h3>
								Документы в виде паспорта, чипирования и
								прививок обязательны.
							</h3>
						</li>
					</ul>
				</div>
				<h2 className=' text-3xl font-bold'>Перегон автомобиля</h2>
				<div className=' font-medium'>
					<ul>
						<li>
							<h3>
								Перегон вашего авто из Донецка и области ,
								Луганска и области, городов РФ в Европу, Украину
								или в обратном направлении.{' '}
							</h3>
						</li>
						<li>
							<h3>
								Перегон осуществляется как с хозяином, так и без
								хозяина транспортного средства.
							</h3>
						</li>
					</ul>
				</div>
				<h2 className=' text-3xl font-bold'>
					Денежные переводы / обмен валют
				</h2>
				<div className=' font-medium'>
					<ul>
						<li>
							<h3>
								Помощь в отправке денежных средств из ЛДНР и РФ
								в Европу/Украину и так же обратно.
							</h3>
						</li>
						<li>
							<h3>
								Снятие денежных средств с украинских банковских
								карт.
							</h3>
						</li>
						<li>
							<h3>
								Обмен рублей на гривну и наоборот. Обмен
								возможен как безналичным , так и наличным путем.
							</h3>
						</li>
					</ul>
				</div>
			</div>
		</main>
	);
}
