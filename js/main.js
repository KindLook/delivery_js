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
const buttonAuth = document.querySelector('.button-auth'); //Войти
const modalAuth = document.querySelector('.modal-auth');  //модальное
const closeAuth = document.querySelector('.close-auth'); //закрыть модальное
const logInForm = document.querySelector('#logInForm');  //форма
const loginInput = document.querySelector("#login");   //поле ввода логина

//Пишем функцию на модальное окно+
function toggleModalAuth(){
  modalAuth.classList.toggle('is-open')
}


// 2 функции когда авторизован и не авторизован
function authorized(){
  console.log('Авторизован')
  buttonAuth.style.display = 'none';  //если авторизован, то ВОЙТИ убирается
}
//если не авторизован то должна быть кнопка Войти
function notAuthorized(){
  console.log('Не авторизован')

  //функция Логин
  function logIn(event){
    //отменяем стандартное поведение браузера - перезагрузка страницы при нажатии на submit
    event.preventDefault();
    login = loginInput.value; //записали в переменную содержимое поля login
    toggleModalAuth();  //после авторизации закрываем окно
    checkAuth(); //проверяем авторизирован или нет

  }
  buttonAuth.addEventListener('click', toggleModalAuth); //слушатель события клик
  closeAuth.addEventListener('click', toggleModalAuth);  //кнопка закрытия модального окна
  logInForm.addEventListener('submit', logIn);  //Отправка с функцией logIn

}

//проверка авторизации
function checkAuth(){
  //если логин не заполнен, то notAuthorized
  if(login){     //если есть что-то в строке то true- общее правило
    authorized();
  }else {
    notAuthorized();
  }
}
//нужно единожды вызвать чтобы при загрузке страницы прошла первая проверка
checkAuth();
