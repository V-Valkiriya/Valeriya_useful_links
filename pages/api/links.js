const links = [
	{
		_id: 'link_1',
		icon: {
			path: '/icons/ukr.png',
			width: 130
		},
		gradient: {
			from: '#13E780',
			to: '#00bbd5'
		},
      link: 'https://tosupportukraine.com/',
		title: 'I want to help Ukraine',
      isImportant: true
	},
	{
		_id: 'link_2',
		icon: {
			path: '/icons/work3.png',
			width: 100
		},
		gradient: {
			from: '#fc5dff',
			to: '#5dfdff'
		},
		link: '',
		title: 'Сайти для пошуку роботи в Нідерландах'
	},
	{
		_id: 'link_3',
		icon: {
			path: '/icons/work2.png',
			width: 90
		},
		gradient: {
         from: '#ffef5d',
			to: '#4BC0C8'
		},
		link: '',
      title: 'Агентства з працевлаштування в Апельдорні'
	},
	{
		_id: 'link_4',
		icon: {
			path: '/icons/telegram.svg',
			width: 60
		},
		gradient: {
			from: '#76acfd',
			to: '#6ed0ff'
		},
		link: 'https://t.me/lucrato_apeldoorn',
		title: 'Пошук работи в Апелдорні, телеграм-канал Lucrato'
	},
	{
		_id: 'link_5',
		icon: {
			path: '/icons/refugee.svg',
			width: 150
		},
		gradient: {
         from: '#3f65ff',
         to: '#f5ff3f'
		},
      link: 'https://www.refugeehelp.nl/uk/ukrainian-refugee',
		title: 'Сайт допомоги українським біженцям'
	},
	{
		_id: 'link_6',
		icon: {
         path: '/icons/flag.png',
         width: 100
		},
		gradient: {
			from: '#3EA6EA',
			to: '#2179c9'
		},
		link: 'https://t.me/minszw',
		title: 'Телеграм-канал Міністерства соц.політики Нідерландів для украійнців'
	},
	{
		_id: 'link_7',
		icon: {
			path: '/icons/youtube.svg',
			width: 84
		},
		gradient: {
			from: '#e53935',
			to: '#e35d5b'
		},
      link: 'https://www.youtube.com/@SvitlanaKoshek',
		title: 'Корисний YouTube-канал Світлани Кошек для українців у Нідерландах'
	},
	{
		_id: 'link_8',
		icon: {
			path: '/icons/Nederland.png',
			width: 150
		},
		gradient: {
			from: '#FF385C',
			to: '#dd2e90'
		},
		link: '',
		title: 'Екскурсії у Нідерландах'
	},
	{
		_id: 'link_9',
		icon: {
			path: '/icons/github.png',
			width: 90
		},
		gradient: {
			from: '#f6d365',
			to: '#fda085'
		},
      link: 'https://github.com/V-Valkiriya',
		title: 'My GitHub'
	},
	{
		_id: 'link_10',
		icon: {
			path: '/icons/LinkedIn_Logo.svg.png',
			width: 160
		},
		gradient: {
			from: '#ff8d42',
			to: '#ff8290'
		},
      link: 'https://www.linkedin.com/in/valeriya-semenova-4b7474266/',
		title: 'My LinkedIn'
	}
]

export default function handler(req, res) {
	res.status(200).json(links)
}
