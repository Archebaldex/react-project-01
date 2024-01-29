import github from '../src/assets/github-icon.svg'
import telegram from '../src/assets/telegram-icon.svg'

export default function Footer() {
	return (
		<footer>
			<a href='https://t.me/Archebaldex' rel='noreferrer' target='_blank'>
				<img src={telegram} alt='Telegram' />
			</a>
			<a href='https://github.com/Archebaldex' rel='noreferrer' target='_blank'>
				<img src={github} alt='Github' />
			</a>
		</footer>
	)
}
