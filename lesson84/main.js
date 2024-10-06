'use strict'


function test(){
	let foo = null
	return foo
}

let foo = 123
console.log(foo)
console.log(test())



const firstNumber = 5
const secondNumber =5




if(firstNumber === secondNumber){
var result = null
result = firstNumber + secondNumber

} else {
	result = firstNumber - secondNumber
}

console.log(result)


const a = 42
console.log(a)
// 42

if (true) {
  const b = 43
  console.log(a)
  // 42
  console.log(b)
  // 43
}

console.log(a)
// ReferenceError: Can't find variable: b

function outer() {
	function inner() {
		const a = 42
		
	}

	console.log(a)
	// Reference error
}

function outer() {
	const a = 42

	function inner() {
		console.log(a)
		// 42
	}
}

function counter() {
  // Начальное значение счётчика будет 0.
  // Мы используем let, потому что будем менять значение,
  // const не подойдёт
  let state = 0

  // Функция increase будет увеличивать счётчик на единицу
  function increase() {
    state++
  }

  // Функция decrease будет уменьшать счётчик на единицу
  function decrease() {
    state--
  }

  // Функция valueOf будет выводить значение.
  function valueOf() {
    console.log(state)
  }

  // А наружу мы дадим только лишь доступ к этим функциям.
  // Вернём объект, значениями полей которого будут функции
  // increase и decrease
  //
  // Прямого доступа к переменной state всё ещё нет,
  // но внешний код может изменять её состояние опосредованно —
  // через функции increase и decrease
  return {
    increase,
    decrease,
    valueOf,
  }
}

const ticktock = counter()
ticktock.increase()
ticktock.valueOf()
// 1
ticktock.increase()
ticktock.valueOf()
// 2
ticktock.decrease()
ticktock.valueOf()
// 1
const tick1 = counter()
const tick2 = counter()

tick1.valueOf()
// 0
tick2.valueOf()
// 0

tick1.increase()
tick1.valueOf()
// 1
tick2.valueOf()
// 0

tick1.increase()
tick1.valueOf()
// 2
tick2.valueOf()
// 0

tick2.increase()
tick1.valueOf()
// 2
tick2.valueOf()
// 1

tick2.decrease()
tick1.valueOf()
// 2
tick2.valueOf()
// 0
