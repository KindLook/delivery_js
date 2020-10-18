const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");




let login = '';  //переменная для функции if авторизации

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

//day1
//авторизация без бэкенда)))
//1. получаем кнопку Войти  и модальное окно через DOM
const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector("#login");

//Пишем функцию на модальное окно+
function toggleModalAuth(){
  modalAuth.classList.toggle('is-open')
}


// 2 функции когда авторизован и не авторизован
function authorized(){
  console.log('Авторизован')
}
//если не авторизован то должна быть кнопка Войти
function notAuthorized(){
  console.log('Не авторизован')

  //функция Логин
  function logIn(event){
    //отменяем стандартное поведение браузера - перезагрузка страницы при нажатии на submit
    event.preventDefault();
    console.log('Логин')
    console.log(loginInput.value); //получили содержимое поля login

  }
  buttonAuth.addEventListener('click', toggleModalAuth); //слушатель события клик
  closeAuth.addEventListener('click', toggleModalAuth);  //кнопка закрытия модального окна
  logInForm.addEventListener('submit', logIn);  //Отправка с функцией logIn

}

//если логин не заполнен, то notAuthorized
if(login){     //если есть что-то в строке то true- общее правило
  authorized();
}else {
  notAuthorized();
}

