// const element = document.querySelector('.block')

// element.textContent = 'text'

// element.id = '123'
// element.style.color = 'red' 
// element.style.fontSize = '30px'

// console.log(element)


// const elements = document.querySelectorAll('div')
// // console.log(elements[1])

// elements.forEach((elements) =>{
//     elements.style.color ='blue'
//     elements.style.fontSize = '80px'
    
// })


const toggleButton = document.getElementById('toggleButton')
const hiddenContent = document.getElementById('hiddenContent')

toggleButton.addEventListener('click', () => {
	if (hiddenContent.style.display === 'none') {
		hiddenContent.style.display = 'block'
		toggleButton.textContent = 'Скрыть' 
	} else {
		hiddenContent.style.display = 'none'
		toggleButton.textContent = 'Показать' 
	}
})


 const slider = document.getElementById('slider')
 const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']
 let currentImageIndex = 0

 function showImage(index) {
		slider.querySelector('img').src = images[index]
		currentImageIndex = index
 }

 const prevButton = document.getElementById('prev')
 prevButton.addEventListener('click', () => {
		const prevIndex = (currentImageIndex - 1 + images.length) % images.length
		showImage(prevIndex)
 })

 const nextButton = document.getElementById('next')
 nextButton.addEventListener('click', () => {
		const nextIndex = (currentImageIndex + 1) % images.length
		showImage(nextIndex)
 })