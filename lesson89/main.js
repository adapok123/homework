const btn = document.querySelector('.btn')
const text = document.querySelector('.text')


btn.addEventListener('click', () => {
text.classList.toggle('move')
// text.classList.remove('red')
if(text.classList.contains('move')){
text.textContent = 'Я двигаюсь'
}else{
text.innerText = 'Текст'

}


})

let div = document.querySelector('div');

  // заменяем div.outerHTML на <p>...</p>
  div.outerHTML = '<p>Новый элемент</p>'; // (*)

  // Содержимое div осталось тем же!
  alert(div.outerHTML); // <div>Привет, мир!</div> (**)



  alert( document.body.innerHTML ); // читаем текущее содержимое
    document.body.innerHTML = 'Новый BODY!'; // заменяем содержимое