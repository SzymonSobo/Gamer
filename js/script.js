document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const navToggler = document.querySelector('.navbar-toggler')
	const navBar = document.querySelector('.navbar-nav')
	const allNavItems = document.querySelectorAll('.nav-link')
	const sections = document.querySelectorAll('section')

	function ScrollSpy() {
		addShadow()
		let currentSection = ''
		sections.forEach(section => {
			const sectionTop = section.offsetTop
			if (scrollY >= sectionTop - 90) {
				currentSection = section.getAttribute('id')
			}
		})
		if (document.documentElement.scrollHeight - (window.innerHeight + window.scrollY) === 0) {
			currentSection = 'contact'
		}
		allNavItems.forEach(link => {
			link.classList.remove('active')
			if (link.getAttribute('href').slice(1) === currentSection) {
				link.classList.add('active')
			}
		})
	}
	function addShadow() {
		if (window.innerWidth >= 992) {
			if (window.scrollY >= 300) {
				nav.classList.add('shadow-bg')
			} else {
				nav.classList.remove('shadow-bg')
			}
		}
	}
	function Show() {
		nav.classList.contains('rolling') ? nav.classList.toggle('unRolling') : nav.classList.toggle('rolling')
		navBar.classList.contains('showLink') ? navBar.classList.toggle('hideLink') : navBar.classList.toggle('showLink')
	}
	if (window.innerWidth < 992) {
		allNavItems.forEach(Link => {
			Link.addEventListener('click', Show)
		})
		navToggler.addEventListener('click', Show)
	}
	window.addEventListener('scroll', ScrollSpy)
})
