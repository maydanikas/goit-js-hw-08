import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const userData = {};

const formAutocomplete = () => {
  const userDataFromLs = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (userDataFromLs === null) return;

  for (const key in userDataFromLs) {
    formEl.elements[key].value = userDataFromLs[key];
  }
  console.log(userDataFromLs);
};
formAutocomplete();

// console.log(formEl.elements);

const onFormInput = event => {
  // const userData = {};
  const { target: formFieldEl } = event;

  const fieldValue = formFieldEl.value;
  const fieldName = formFieldEl.name;
  userData[fieldName] = fieldValue;

  console.log(userData);
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
};

const onFormSubmit = event => {
  event.preventDefault();
  formEl.reset();
  localStorage.removeItem('feedback-form-state');
};

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

// HTML містить розмітку форми.Напиши скрипт, який буде зберігати
//  значення полів у локальне сховище, коли користувач щось друкує.
// Виконуй це завдання у файлах 03 - feedback.html і 03 - feedback.js.
//  Розбий його на декілька підзавдань:

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище
//  об'єкт з полями email і message, у яких зберігай поточні значення
//   полів форми.Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там
// є збережені дані, заповнюй ними поля форми.В іншому випадку поля
//  повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь
//  у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на
// 500 мілісекунд.Для цього додай до проекту і
// використовуй бібліотеку lodash.throttle.
