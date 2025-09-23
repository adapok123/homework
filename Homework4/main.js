// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"


// ===========================Задача-1================================================================

function calculateFinalPrice(basePrice, discountPercent, taxRate) {
   
    if (basePrice < 0 || discountPercent < 0 || taxRate < 0) {
        throw new Error('Все параметры должны быть неотрицательными');
    }
    
    const discountAmount = basePrice * (discountPercent / 100);
    
    const priceAfterDiscount = basePrice - discountAmount;
    
    const taxAmount = priceAfterDiscount * taxRate;
    
    const finalPrice = priceAfterDiscount + taxAmount;

    return Math.round(finalPrice * 100) / 100;
}

console.log(calculateFinalPrice(100, 10, 0.2)); 
console.log(calculateFinalPrice(100, 10, 0));   
console.log(calculateFinalPrice(200, 20, 0.15)); 

// ===========================Задача-2================================================================

function checkAccess(username, password) {

    if (username === "admin" && password === "123456") {
        return "Доступ разрешен";
    } else {
        return "Доступ запрещен";
    }
}

function checkAccessShort(username, password) {
    return (username === "admin" && password === "123456") ? "Доступ разрешен" : "Доступ запрещен";
}

console.log(checkAccess("admin", "123456")); 
console.log(checkAccess("user", "123456")); 
console.log(checkAccess("admin", "654321")); 
console.log(checkAccess("admin", "123456")); 


// ===========================Задача-3================================================================


function getTimeOfDay(hour) {

    if (hour < 0 || hour > 23) {
        return "Некорректное время";
    }
    

    if (hour >= 0 && hour <= 5) {
        return "Ночь";
    } else if (hour >= 6 && hour <= 11) {
        return "Утро";
    } else if (hour >= 12 && hour <= 17) {
        return "День";
    } else if (hour >= 18 && hour <= 23) {
        return "Вечер";
    }
}

function getTimeOfDaySwitch(hour) {
    switch (true) {
        case (hour >= 0 && hour <= 5):
            return "Ночь";
        case (hour >= 6 && hour <= 11):
            return "Утро";
        case (hour >= 12 && hour <= 17):
            return "День";
        case (hour >= 18 && hour <= 23):
            return "Вечер";
        default:
            return "Некорректное время";
    }
}

console.log(getTimeOfDay(2));   
console.log(getTimeOfDay(8));   
console.log(getTimeOfDay(14));  
console.log(getTimeOfDay(20));  
console.log(getTimeOfDay(24));  
console.log(getTimeOfDay(-1));  

// ===========================Задача-4================================================================


function findFirstEven(start, end) {
  
    if (start > end) {
        return "Чётных чисел нет";
    }
    
    for (let i = start; i <= end; i++) {
        // Проверяем на чётность
        if (i % 2 === 0) {
            return i;
        }
    }
    
    return "Чётных чисел нет";
}

function findFirstEvenWhile(start, end) {
    if (start > end) {
        return "Чётных чисел нет";
    }
    
    let current = start;
    while (current <= end) {
        if (current % 2 === 0) {
            return current;
        }
        current++;
    }
    
    return "Чётных чисел нет";
}

console.log(findFirstEven(1, 10)); 
console.log(findFirstEven(9, 9)); 
console.log(findFirstEven(2, 5)); 
console.log(findFirstEven(3, 7)); 
console.log(findFirstEven(10, 1)); 
