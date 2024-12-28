;(function () {
	// Изменение текста

	const textElement = document.getElementById('my-text')

	function updateText() {
		if (window.innerWidth <= 768) {
			// Adjust breakpoint as needed
			textElement.textContent = 'Введите email:'
		} else {
			textElement.textContent =
				'Введите email чтобы войти в аккаунт или создать новый:'
		}
	}

	window.addEventListener('resize', updateText)
	window.addEventListener('load', updateText)

	// Бургер

	document.addEventListener('click', burgerInit)

	function burgerInit(e) {
		const burgerIcon = e.target.closest('.burger-icon')
		const burgerNavLink = e.target.closest('.nav__link')

		if (!burgerIcon && !burgerNavLink) return
		if (document.documentElement.clientWidth > 900) return

		if (!document.body.classList.contains('body--opened-menu')) {
			document.body.classList.add('body--opened-menu')
		} else {
			document.body.classList.remove('body--opened-menu')
		}
	}

	// скроллинг видео

	const videoContainer = document.querySelector('.video-container')

	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				console.log('IntersectionObserver entry:', entry) // Log entry details
				if (entry.isIntersecting) {
					videoContainer.classList.add('show-video')
					console.log('IntersectionObserver: Added show-video class')
				} else {
					videoContainer.classList.remove('show-video')
					console.log('IntersectionObserver: Removed show-video class')
				}
			})
		},
		{
			threshold: 0.5,
			rootMargin: '0px 0px -200px 0px', // Adjust if needed.
		}
	)

	observer.observe(videoContainer)

	// Анимация функциональна, но не понравилась.

	// function animateOnScroll(elements, animationClass) {
	// 	const observer = new IntersectionObserver(
	// 		(entries, observer) => {
	// 			entries.forEach(entry => {
	// 				if (entry.isIntersecting) {
	// 					entry.target.classList.add(animationClass)
	// 				} else {
	// 					entry.target.classList.remove(animationClass)
	// 				}
	// 			})
	// 		},
	// 		{
	// 			threshold: 0.5, // Adjust as needed
	// 			rootMargin: '0px 0px -200px 0px', // Adjust as needed. Negative value triggers earlier
	// 		}
	// 	)

	// 	elements.forEach(element => observer.observe(element))
	// }

	// const elements = document.querySelectorAll('.games__item')
	// animateOnScroll(elements, 'show')
	// const images = document.querySelectorAll('.img2') 
	// animateOnScroll(images, 'show-image')
})()
