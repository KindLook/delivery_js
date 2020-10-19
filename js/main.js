const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");






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
const userName = document.querySelector(".user-name");   //поле ввода логина
const buttonOut = document.querySelector(".button-out");   //поле ввода логина

let login = localStorage.getItem('gloDelivery');  //переменная для функции if авторизации

//Пишем функцию на модальное окно+
function toggleModalAuth(){
  modalAuth.classList.toggle('is-open');
  loginInput.style.borderColor = ''; //цвет рамки по умолчанию
}


// 2 функции когда авторизован и не авторизован
function authorized(){

  //функция для кнопки Выйти
  function logOut(){
    login = null;
localStorage.removeItem('gloDelivery');
//скроем все кнопки
    buttonAuth.style.display = '';  //если авторизован, то ВОЙТИ убирается
    userName.style.display = '';  //появляется (span - inline)
    buttonOut.style.display = ''; //появляется
    buttonOut.removeEventListener('click', logOut);  //удаляем событие
    checkAuth();
  }

  console.log('Авторизован')

  userName.textContent = login;

  buttonAuth.style.display = 'none';  //если авторизован, то ВОЙТИ убирается
  userName.style.display = 'inline';  //появляется (span - inline)
  buttonOut.style.display = 'block'; //появляется

  buttonOut.addEventListener('click', logOut);
}
//если не авторизован то должна быть кнопка Войти
function notAuthorized(){
  console.log('Не авторизован')

  //функция Логин
  function logIn(event){
    //отменяем стандартное поведение браузера - перезагрузка страницы при нажатии на submit
    event.preventDefault();

    if (loginInput.value){
      login = loginInput.value; //записали в переменную содержимое поля login
      //локальное хранилище в браузере. добавляет свойства со значением
      localStorage.setItem('gloDelivery', login); //ключ- значение
      toggleModalAuth();  //после авторизации закрываем окно
      buttonAuth.removeEventListener('click', toggleModalAuth); //удаляем слушатель события клик
      closeAuth.removeEventListener('click', toggleModalAuth);  //удаляем кнопка закрытия модального окна
      logInForm.removeEventListener('submit', logIn);  //удаляем Отправка с функцией logIn
      logInForm.reset();  //очищаем поля ввода
      checkAuth(); //проверяем авторизирован или нет
    }else{
      loginInput.style.borderColor = 'red';
    }



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
