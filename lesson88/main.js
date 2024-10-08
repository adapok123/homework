const button = document.querySelector('.btn')
let btnIsRed = false
button.addEventListener('click', () =>{
if(btnIsRed) {
	button.style.backgroundColor = 'blue'
	btnIsRed = false
}else{
	button.style.backgroundColor = 'red'
	btnIsRed = true
}

})


function scrolling(){
	console.log('scroll')
}

document.addEventListener('scroll', scrolling)

const form = document.getElementById('myForm')

form.addEventListener('submit', event => {
	event.preventDefault() 
	
	const name = document.getElementById('name').value
	const email = document.getElementById('email').value


	console.log('Имя:', name)
	console.log('Email:', email)


})