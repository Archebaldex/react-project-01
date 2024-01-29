import emailImg from '../src/assets/email-icon.svg'

export default function Main() {
	return (
		<main>
			<div className='main--img_conteiner'></div>
			<div className='main--info'>
				<h1>Vlad Fedorov</h1>
				<p className='main--info-job'>Frontend Developer</p>
				<p className='main--info-email'>Archebaldex@yandex.ru</p>
			</div>
			<div className='main--email_refs'>
				<a href='mailto:Archebaldex@yandex.ru' rel='noreferrer' target='_blank'>
					<button>
						<img src={emailImg} alt='Email' />
						<span>Email</span>
					</button>
				</a>
			</div>
			<div className='main--border'></div>
			<div className='main--about'>
				<h2>Обо мне</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
					maxime ipsum cupiditate sint minima modi adipisci! Voluptate animi
					officia blanditiis temporibus aut natus voluptates non.
				</p>
				<h2>Что мне интересно</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
					voluptatum blanditiis consequuntur repellendus, eveniet expedita
					explicabo, impedit ullam odio, modi porro non esse excepturi.
					Similique ratione eos rem dicta itaque?
				</p>
			</div>
		</main>
	)
}
