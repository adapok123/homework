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

	new Swiper('.partystation-swiper', {
		speed: 300,
		slidesPerView: 2,
		centeredSlides: true,
		cssMode: true,

		pagination: {
			el: '.partystation-swiper__pagination',
		},

		breakpoints: {
			360: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
		},
	})

	const swiper = new Swiper('.games__swiper', {
		centeredSlides: true,
		speed: 600,
		effect: 'coverflow',
		coverflowEffect: {
			rotate: 30,
			slideShadows: false,
		},
		slidesPerView: 'auto',
		navigation: {
			nextEl: '.games__button-next',
		},

		scrollbar: {
			el: '.games__swiper-scrollbar',
			draggable: true,
		},

		breakpoints: {
			360: {
				slidesPerView: 1.2,
				spaceBetween: 32,
			},

			769: {
				slidesPerView: 1,
				spaceBetween: 32,
			},
			1201: {
				slidesPerView: 1,
				spaceBetween: 32,
				centeredSlides: true,
			},
		},
	})

	document.querySelectorAll('.thumbnail').forEach(thumbnail => {
		thumbnail.addEventListener('click', () => {
			const index = thumbnail.getAttribute('data-index')
			swiper.slideTo(index)
		})
	})

	swiper.on('slideChange', () => {
		const activeIndex = swiper.realIndex
		document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
			thumb.classList.toggle('active', index === activeIndex)
		})
	})

	new Swiper('.games__media', {
		slidesPerView: 1,
		spaceBetween: 10,
		centeredSlides: true,
		loop: true,
		speed: 600,

		navigation: {
			nextEl: '.games__media-button',
		},

		scrollbar: {
			el: '.games__media-scrollbar',
			draggable: true,
		},

		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 40,
			},

			480: {
				slidesPerView: 1,
				spaceBetween: 30,
			},

			640: {
				slidesPerView: 1,
				spaceBetween: 40,
			},
		},
	})

	new Swiper('.games__swiper2', {
		slidesPerView: 4,
		spaceBetween: 20,

		loop: true,
		speed: 600,

		effect: 'coverflow',
		coverflowEffect: {
			rotate: 30,
			slideShadows: false,
		},
		navigation: {
			nextEl: '.games__swiper2-next',
			prevEl: '.games__swiper2-prev',
		},
		pagination: {
			el: '.games__swiper2-pagination',
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},

			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
	})

	new Swiper('.gallery__swiper', {
		slidesPerView: 4,
		spaceBetween: 24,

		navigation: {
			nextEl: '.gallery__next',
			prevEl: '.gallery__prev',
		},

		breakpoints: {
			321: {
				slidesPerView: 1.5,
				spaceBetween: 20,
			},

			769: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1025: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
		},
	})
	new Swiper('.gallery__swiper2', {
		slidesPerView: 4,
		spaceBetween: 24,

		navigation: {
			nextEl: '.gallery__next2',
			prevEl: '.gallery__prev2',
		},
		breakpoints: {
			321: {
				slidesPerView: 1.5,
				spaceBetween: 20,
			},

			769: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1025: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
		},
	})
	new Swiper('.gallery__swiper3', {
		slidesPerView: 4,
		spaceBetween: 24,

		navigation: {
			nextEl: '.gallery__next3',
			prevEl: '.gallery__prev3',
		},
		breakpoints: {
			321: {
				slidesPerView: 1.5,
				spaceBetween: 20,
			},

			769: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1025: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
		},
	})
	new Swiper('.platform-capabilities__swiper', {
		slidesPerView: 2,
		spaceBetween: 16,
		pagination: {
			el: '.platform-capabilities__pagination',
		},

		breakpoints: {
			321: {
				slidesPerView: 1,
			},

			769: {
				slidesPerView: 1.4,
			},
			1025: {
				slidesPerView: 1.5,
			},
		},
	})

	new Swiper('.testimonials__slider', {
		slidesPerView: 1,
		speed: 700,

		effect: 'coverflow',
		coverflowEffect: {
			rotate: 30,
			slideShadows: false,
		},
		navigation: {
			nextEl: '.testimonials__next',
			prevEl: '.testimonials__prev',
		},
		breakpoints: {
			

			901: {
				slidesPerView: 1,
			},
			1201: {
				slidesPerView: 1,
			},
		},
	})



	// Аккордеон

	const accordionLists = document.querySelectorAll('.accordion-list')

	accordionLists.forEach(el => {
		el.addEventListener('click', e => {
			const accordionList = e.currentTarget
			const accordionOpenedItem = accordionList.querySelector(
				'.accordion-list__item--opened'
			)
			const accordionOpenedContent = accordionList.querySelector(
				'.accordion-list__item--opened .accordion-list__content'
			)

			const accordionControl = e.target.closest('.accordion-list__item-control')
			if (!accordionControl) return
			e.preventDefault()
			const accordionItem = accordionControl.parentElement
			const accordionContent = accordionControl.nextElementSibling

			if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
				accordionOpenedItem.classList.remove('accordion-list__item--opened')
				accordionOpenedContent.style.maxHeight = null
			}
			accordionItem.classList.toggle('accordion-list__item--opened')

			if (accordionItem.classList.contains('accordion-list__item--opened')) {
				accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
			} else {
				accordionContent.style.maxHeight = null
			}
		})
	})

})()
