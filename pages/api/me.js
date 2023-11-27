const me = {
	siteName: 'Valeriya`s useful links',
	avatar: '/avatar.jpeg',
	description:
		'<p></p>' +
		'<p></p>' +
		'<p></p>' +
		'<p></p>'
}

export default function handler(req, res) {
	res.status(200).json(me)
}
