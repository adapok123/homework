/* function sumeNumber() {
return 5 + 5
}*/

/* function sumeNumber(firstNumber, secondNumber) {
return firstNumber + secondNumber
}

const result = sumeNumber(3,10)
console.log(result)
console.log(sumeNumber(-2, 2))*/

/*const users = ['John', 'Ann', 'Alex', 'Max']
const numbers = [1,2,3]


const checkForCopyItem = (array, item) => {
for (let i = 0; i < array.length; i++) {
if (array[i] === item) {
return `There is a copy of the ${item} in the array`
}
}
return `There is no such item in the array`
}

console.log(checkForCopyItem(numbers, 5))*/

/*===========================================Домашнее задание============================================================ */


function user(name) {
	return `Hello "${name}"`
}

console.log(user('Max'))


/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum;
}

console.log(sumNumbers(numbers))*/

const numbers = [5, 12, 8, 21, 7, 15, 3, 18]


function logNumbersGreaterThanTen(numbers) {
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] > 10) {
			console.log(numbers[i])
		}
	}
}

logNumbersGreaterThanTen(numbers)


function calculator(num1, num2, operator) {
    switch (operator) {
        case 'plus':
            return num1 + num2
        case 'minus':
            return num1 - num2
        case 'multiply':
            return num1 * num2
        case 'divide':
            if (num2 !== 0) {
                return num1 / num2
            } else {
                return 'Error: Division by zero'
            }
        default:
            return 'Error: Unknown operator'
    }
}

const result = calculator(2, 3, 'minus')
console.log(result)
