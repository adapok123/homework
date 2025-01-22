;(function () {
	const textElement = document.getElementById('my-text')

	function updateText() {
		if (window.innerWidth <= 768) {
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
				console.log('IntersectionObserver entry:', entry)
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
			rootMargin: '0px 0px -200px 0px',
		}
	)

	observer.observe(videoContainer)

	// Анимация функциональна.

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

	// Слайдеры

	// Добавляем стили Swiper динамически
	document.addEventListener('DOMContentLoaded', () => {
		const container = document.querySelector('.partystation-ellipse__inner')
		let swiper = null

		// 2. Функция для создания/удаления слайдера
		const toggleSwiper = () => {
			const isMobile = window.innerWidth < 900

			if (isMobile && !swiper) {
				// 3. Create Swiper structure
				const slides = Array.from(
					container.querySelectorAll('.partystation__ellipse-item')
				)
				const wrapper = document.createElement('div')
				wrapper.className = 'swiper-wrapper'

				slides.forEach(slide => {
					slide.classList.add('swiper-slide')
					wrapper.appendChild(slide)
				})

				container.classList.add('swiper')
				container.prepend(wrapper)

				// 4. Initialize
				swiper = new Swiper('.swiper', {
					
					speed: 500,
					slidesPerView: 1,
					spaceBetween: 0,
					breakpoints: {
						900: {
							slidesPerView: 1,
							spaceBetween: 16,
						},
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
				})
			} 
		}

		// First call
		toggleSwiper()

		// Resize handler with a delay
		let resizeTimer
		window.addEventListener('resize', () => {
			clearTimeout(resizeTimer)
			resizeTimer = setTimeout(toggleSwiper, 200)
		})
	})
	
})()
