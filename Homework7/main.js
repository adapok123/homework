// ==============================Задача 1.============================================
// Нам нужна функция, которая может преобразовывать число (целое) в строку.

// Какие способы достижения этой цели вы знаете?

// Примеры (ввод —> вывод)
// :123 --> "123"
// 999 --> "999"
// -100 --> "-100"

function numberToString1(num) {
    return num.toString();
}

console.log(numberToString1(123));  
console.log(numberToString1(-100)); 

// ==============================Задача 2.============================================

// Суммирование
// Напишите программу, которая находит сумму всех чисел от 1 до num (включительно). Число всегда будет положительным целым и больше 0. Ваша функция должна возвращать только результат. То, что показано в примере ниже в скобках, — это способ получения результата, а не его часть. См. примеры тестов.Например (Входные данные -> Выходные данные):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = function (num) {
	return (num * (num + 1)) / 2
}

console.log(summation(2));   
console.log(summation(8));  
console.log(summation(100)); 

// ==============================Задача 3.============================================

// Сможете ли вы найти иголку в стоге сена?

// Напишите функцию findNeedle(), которая принимает array с кучей мусора, но содержащую одно "needle"

// После того как ваша функция найдёт нужную информацию, она должна вернуть сообщение (в виде строки) следующего содержания:

// "found the needle at position " плюс index — и иголка нашлась, так что:

// Пример (ввод —> вывод)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] -->

function findNeedle(haystack) {
	for (let i = 0; i < haystack.length; i++) {
		if (haystack[i] === 'needle') {
			return `found the needle at position ${i}`
		}
	}
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));

// ==============================Задача 4.============================================

// Натан любит кататься на велосипеде.

// Поскольку Натан знает, как важно поддерживать водный баланс, он выпивает 0,5 литра воды за час езды на велосипеде.

// Вам дано время в часах, и вам нужно вычислить, сколько литров выпьет Нейтан, округлив в меньшую сторону.

// Например:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
   
    const totalLitres = time * 0.5;
 
    return Math.floor(totalLitres);
}

console.log(litres(3));     
console.log(litres(6.7));   
console.log(litres(11.8));  
console.log(litres(0));     
console.log(litres(1));     
console.log(litres(2));     

// ==============================Задача 5.============================================
// Создайте функцию, которая возвращает массив целых чисел от n до 1, где n>0.

// Пример: n=5 —> [5,4,3,2,1]

const reverseSeq = n => {
  
  const result = [];
  for(let i = n; i >= 1; i--) {
    result.push(i);
  }
  
  return result;
};

console.log(reverseSeq(5));  
console.log(reverseSeq(1));  
console.log(reverseSeq(10)); 

// ==============================Задача 6.============================================

// Дополните решение так, чтобы оно возвращало переданную строку в обратном порядке.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
 return str.split('').reverse().join('');
}

console.log(solution('world')); 
console.log(solution('word')); 

// ==============================Задача 7.============================================

// Напишите функцию, которая принимает массив чисел и возвращает их сумму. Числа могут быть отрицательными или нецелочисленными. Если в массиве нет чисел, функция должна вернуть 0.

// Примеры
// Входные данные: [1, 5.2, 4, 0, -1]
// Выходной сигнал: 9.2

// Входные данные: []
// Выходной сигнал: 0

// Входные данные: [-2.398]
// Выходной сигнал: -2.398


function sum(numbers) {

 if (!Array.isArray(numbers)) {
 return 0;
 }
 
 return numbers.reduce((accumulator, currentValue) => {

 if (typeof currentValue === 'number') {
 return accumulator + currentValue;
 }
 return accumulator;
 }, 0);
}

console.log(sum(1, 5.2, 4, 0, -1)); 
console.log(sum()); 
console.log(sum(-2.398)); 
console.log(sum(1, 'a', 3.5, null, 2)); 
console.log(sum(0, 0, 0)); 

// ==============================Задача 8.============================================

// Дан непустой массив целых чисел. Верните результат умножения значений массива по порядку. Пример:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


function grow(x) {
 let result = 1;
 for(const num of x) {
 result *= num;
 }
 return result;
}

console.log(grow([1, 2, 3, 4])); 
console.log(grow([5, 5, 5])); 
console.log(grow([-2, 3, 4])); 
console.log(grow([1])); 
console.log(grow([0, 1, 2])); 
console.log(grow([2, -3, 4, -5])); 
console.log(grow([10, 10, 10, 10])); 
console.log(grow([-1, -2, -3])); 
console.log(grow([1, 1, 1, 1, 1])); 
console.log(grow([99, 1])); 

// ==============================Задача 9.============================================


// В этой ката нужно умножить заданное число на восемь, если оно чётное, и на девять, если оно нечётное.


function simpleMultiplication(number) {
	return number % 2 === 0 ? number * 8 : number * 9
}
console.log(simpleMultiplication(2));  
console.log(simpleMultiplication(3)); 
console.log(simpleMultiplication(10)); 
console.log(simpleMultiplication(7));  
console.log(simpleMultiplication(0));  
console.log(simpleMultiplication(-4)); 
console.log(simpleMultiplication(-5)); 

// ==============================Задача 10.============================================

// Герой направляется в замок, чтобы выполнить свою миссию. Однако ему сказали, 
// что замок окружён парой могущественных драконов! Чтобы победить каждого дракона, 
// нужно две пули. Наш герой понятия не имеет, сколько пуль ему нужно взять с собой. Если предположить, 
// что он возьмёт определённое количество пуль и отправится сражаться с другим определённым количеством драконов, сможет ли он выжить?

// Верните true, если да, и false, если нет :)

function hero(bullets, dragons) {
    return bullets >= dragons * 2;
}

function hero(bullets, dragons) {
    return bullets / 2 >= dragons;
}

console.log(hero(10, 3));  
console.log(hero(4, 2));   
console.log(hero(5, 3));   
console.log(hero(8, 4));   
console.log(hero(0, 0));   
console.log(hero(1, 1));  
