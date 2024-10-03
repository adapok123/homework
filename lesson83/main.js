// const user = {

//     name: 'Alex',
//     age: 23,
//     isAdmin: false
// }

// console.log(user.name)

// const user = {
// 	alex: {
// 		age: 23,
// 		isAdmin: false
// 	},

// 	john: {
// 		age: 20,
// 		isAdmin: true,
//       sayHello(name){
//          console.log(`Hello ${name}`)
//       }
// 	},
// }

// user.john.sayHello(`Tom`)

// console.log(user.john)

// const users = [
//  {
//       name: 'Alex',
// 		age: 23,
// 		isAdmin: false
//    },
// {
//       name: 'John',
// 		age: 30,
// 		isAdmin: true
//    }
// ]
// users.push({
// 	name: 'Ivan',
// 	age: 23,
// 	isAdmin: true
// })
// for(let i = 0; i < users.length; i ++ ) {
// console.log(users[i])

// }
// const foo = 'Hello world'
// console.log(foo.toUpperCase())

// ===========================================Домашняя работа=============================================================

// 1) Создайте объект с вашим описанием(имя, возраст и т.д.).

const user = {
	name: 'Yuri',
	age: 42,
	hobbies: 'chess, sport',
}
console.log(user)

//  2) Создайте метод объекта, который в качестве аргумента будет принимать имя и возвращать
// строку ‘Hello “переданный аргумент”’.

const greetingMachine = {
	name: {
		sayHello(name) {
			console.log(`Hello ${name}`)
		},
	},
}

greetingMachine.name.sayHello(`Yuri`)

// 3) Создайте массив объектов с описанием пользователей(такой мы делали в уроке).
// Объявите отдельную переменную, в которой будет храниться количество простых пользователей,
// начальное значение будет - 0. Обойдите массив пользователей и если пользователь не является
// админом - прибавьте к ранее созданной переменной единицу.
// После окончания работы цикла выведите в консоль переменную с количеством простых пользователей.


const users = [
	{ 
		name: 'Вася', 
		isAdmin: false 
	},
	{ 
		name: 'Лёха', 
		isAdmin: true 
	},
	{ 
		name: 'Саня', 
		isAdmin: false 
	},
	{ 
		name: 'Юра', 
		isAdmin: false 
	},
]
let ordinaryUsers = 0

for (let i = 0; i < users.length; i++) {
	if (!users[i].isAdmin) {
		ordinaryUsers++
	}
}

console.log('Количество простых пользователей:', ordinaryUsers) 