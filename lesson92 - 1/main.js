const openModalBtn = document.getElementById('openModalBtn')
const modal = document.getElementById('modal')
const closeModalBtn = document.getElementById('closeModalBtn')
const overlay = document.getElementById('overlay')

openModalBtn.addEventListener('click', () => {
	modal.style.display = 'block'
	overlay.style.display = 'block'
})

closeModalBtn.addEventListener('click', () => {
	modal.style.display = 'none'
	overlay.style.display = 'none'
})

overlay.addEventListener('click', () => {
	modal.style.display = 'none'
	overlay.style.display = 'none'
})
