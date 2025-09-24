// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

// ====================================Задача 1.===========================================================

const person = {
   
    firstName: 'Юрий',
    lastName: 'Судаков',
    age: 181,
    
    email: 'sudakov.y@mail.ru',
    phone: '+7 (950) 435-05-19',
    
    profession: 'Веб-разработчик',
    skills: ['JavaScript', 'HTML', 'CSS', 'PHP'],
    
    city: 'Красноярск',
    country: 'Россия'
};

console.log('Имя: ' + person.firstName);
console.log('Фамилия: ' + person.lastName);
console.log('Возраст: ' + person.age);
console.log('Email: ' + person.email);
console.log('Телефон: ' + person.phone);
console.log('Профессия: ' + person.profession);
console.log('Навыки: ' + person.skills.join(', '));
console.log('Город: ' + person.city);
console.log('Страна: ' + person.country);

// ====================================Задача 2.===========================================================


function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function isEmpty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

function isEmpty(obj) {
    return JSON.stringify(obj) === '{}';
}

function isEmpty(obj) {
    return Object.getOwnPropertyNames(obj).length === 0;
}

console.log(isEmpty({})); 
console.log(isEmpty({ name: 'Юрий' })); 
console.log(isEmpty({ age: 181 })); 
console.log(isEmpty({})); 

// ====================================Задача 3.===========================================================

const task = {
 title: 'Разработка сайта',
 description: 'Создать одностраничный сайт с формой обратной связи',
 isCompleted: false
};

function cloneAndModify(object, modifications) {

 const clonedObject = { ...object };

 Object.assign(clonedObject, modifications);
 
 return clonedObject;
}

const modifications = {
 isCompleted: true,
 priority: 'high',
 deadline: '2025-09-30'
};

const modifiedTask = cloneAndModify(task, modifications);

for (let key in modifiedTask) {
 if (modifiedTask.hasOwnProperty(key)) {
 console.log(`${key}: ${modifiedTask[key]}`);
 }
}
// ====================================Задача 4.===========================================================

function callAllMethods(obj) {
 
    for (let key in obj) {
        
        if (typeof obj[key] === 'function') {
            
            obj[key]();
        }
    }
}

const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};

callAllMethods(myObject);
