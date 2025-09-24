// Задание 1.
// Дан массив пользователей:
// const users = [
//   { name: 'Alex', age: 24, isAdmin: false },
//   { name: 'Bob', age: 13, isAdmin: false },
//   { name: 'John', age: 31, isAdmin: true },
//   { name: 'Jane', age: 20, isAdmin: false },
//]
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

// =============================Задание 1.===========================================


const users = [
  { name: 'Вася Пупкин', age: 24, isAdmin: false },
  { name: 'Борис Захудалов', age: 13, isAdmin: false },
  { name: 'Юрий Судаков', age: 181, isAdmin: true },
  { name: 'Женя Дрищев', age: 20, isAdmin: false },
];

users.push(
  { name: 'Aня Потова', age: 19, isAdmin: false },
  { name: 'Евгений Залупкин', age: 43, isAdmin: true }
);

console.log(users);

// =============================Задание 2.===========================================


function getUserAverageAge(users) {

  if (users.length === 0) return 0;
  
  let totalAge = 0;
  for (let user of users) {
    totalAge += user.age;
  }
  
  return totalAge / users.length;
}

function getUserAverageAge(users) {
  if (users.length === 0) return 0;
  
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}

const averageAge = getUserAverageAge(users);
console.log(`Средний возраст: ${averageAge}`);

// =============================Задание 3.===========================================

function getAllAdmins(users) {

  const admins = [];
  
  for (let user of users) {

    if (user.isAdmin) {
      admins.push(user);
    }
  }
  
  return admins;
}

function getAllAdmins(users) {
  return users.filter(user => user.isAdmin);
}

const admins = getAllAdmins(users);
console.log('Администраторы:', admins);

// =============================Задание 4.===========================================

function first(arr, n) {
   
    if (n === undefined) {
        return arr.length > 0 ? [arr[0]] : [];
    }
    
    if (n === 0) {
        return [];
    }
    
    return arr.slice(0, n);
}

console.log(first([1, 2, 3, 4, 5]));      
console.log(first([1, 2, 3, 4, 5], 0));     
console.log(first([1, 2, 3, 4, 5], 3));   
console.log(first([1, 2, 3, 4, 5], 10));    
console.log(first([], 2));                  
