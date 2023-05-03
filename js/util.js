function getRandomInt(min, max) {
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  return Math.round(Math.random() * (max-min) + min);
}

function checkLength(str, maxLength) {
  return str.length <= maxLength;
}

function showAlert(message) {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '10px';
  alertContainer.style.top = '10px';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.fontFamily = 'Times New Roman';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'purple';
  alertContainer.style.color = 'black';
  alertContainer.textContent = message;
  document.body.appendChild(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, 10000);
}


const MIN_COMMENT_LENGTH = 19;
const MAX_COMMENT_LENGTH = 140;
const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 20;
const HASHTAG_REGEX = new RegExp('^#[а-яa-zA-ZА-ЯёЁ0-9]{1,19}$');
const SERVER_URL = 'https://27.javascript.pages.academy/kekstagram-simple';
const ERR_FETCH_MESSAGE = 'Не удалось загрузить данные. Перезагрузите страницу';
const ERR_SEND_MESSAGE = 'Не удалось отправить форму. Проверьте свое соединение';


export {
  getRandomInt, checkLength, showAlert,
  MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH, HASHTAG_REGEX, MIN_HASHTAG_LENGTH, MAX_HASHTAG_LENGTH, SERVER_URL, ERR_FETCH_MESSAGE, ERR_SEND_MESSAGE
};
