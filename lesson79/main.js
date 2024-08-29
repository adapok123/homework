
// const firstName = 5
// const secondName = 20


// let result = null

// if (firstName ===10 && secondName ===20 ) {
// result = firstName + secondName
// console.log(result)
// } else {
// result = secondName - firstName
// console.log(result)
// }

// const Alex = 'Admin'

// if (Alex==='user') {
//  console.log('Alex is user')
// }else if (Alex === 'vip') {
//     console.log('Alex is vip user')
// } else {
//     console.log('Alex is admin')
// }

// Alex === 'Admin' ? console.log('Alex is admin') : console.log('Alex is not admin')

// Задача


const Yuri = 42

Yuri <= 42? console.log('Вы совершеннолетний') : console.log('возраст больше или равен 18')

let age = 42 

const message = age >= 18 ? 'Вы совершеннолетний' : 'Вам еще нет 18'
console.log(message)




// ===============================================================================================================


// let a = 2 + 2

// switch (a) {
// 	case 3:
// 		alert('Маловато')
// 		break
// 	case 4:
// 		alert('В точку!')
// 		break
// 	case 5:
// 		alert('Перебор')
// 		break
// 	default:
// 		alert('Нет таких значений')
// }


// let a = '1'
// let b = 0

// switch (+a) {
// 	case b + 1:
// 		alert('Выполнится, т.к. значением +a будет 1, что в точности равно b+1')
// 		break

// 	default:
// 		alert('Это не выполнится')
// }

// let a = 3

// switch (a) {
// 	case 4:
// 		alert('Правильно!')
// 		break

// 	case 3: // (*) группируем оба case
// 	case 5:
// 		alert('Неправильно!')
// 		alert('Может вам посетить урок математики?')
// 		break

// 	default:
// 		alert('Результат выглядит странновато. Честно.')
// }


// let arg = prompt('Введите число?')
// switch (arg) {
// 	case '0':
// 	case '1':
// 		alert('Один или ноль')
// 		break

// 	case '2':
// 		alert('Два')
// 		break

// 	case 3:
// 		alert('Никогда не выполнится!')
// 		break
// 	default:
// 		alert('Неизвестное значение')
// }


// switch (browser) {
// 	case 'Edge':
// 		alert("You've got the Edge!")
// 		break

// 	case 'Chrome':
// 	case 'Firefox':
// 	case 'Safari':
// 	case 'Opera':
// 		alert('Okay we support these browsers too')
// 		break

// 	default:
// 		alert('We hope that this page looks ok!')
// }

// if (browser == 'Edge') {
// 	alert("You've got the Edge!")
// } else if (
// 	browser == 'Chrome' ||
// 	browser == 'Firefox' ||
// 	browser == 'Safari' ||
// 	browser == 'Opera'
// ) {
// 	alert('Okay we support these browsers too')
// } else {
// 	alert('We hope that this page looks ok!')
// }

// ==========================================================================================



// const number = +prompt('Введите число между 0 и 3', '')

// if (number === 0) {
// 	alert('Вы ввели число 0')
// }

// if (number === 1) {
// 	alert('Вы ввели число 1')
// }

// if (number === 2 || number === 3) {
// 	alert('Вы ввели число 2, а может и 3')
// }


// switch (number) {
// 	case '+prompt':
// 		alert('Введите число между 0 и 3', '')
// 		break

// 	case 0:
// 	case 1:
// 	case 2:
// 	case 3:
// 		alert('Вы ввели число 2, а может и 3')
// 		break

// 	default:
// 		alert('We hope that this page looks ok!')
// }


// const number = +prompt('Введите число между 0 и 3', '')

// switch (number) {
// 	case 0:
// 		alert('Вы ввели число 0')
// 		break

// 	case 1:
// 		alert('Вы ввели число 1')
// 		break

// 	case 2:
// 	case 3:
// 		alert('Вы ввели число 2, а может и 3')
// 		break
// }