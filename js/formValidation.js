import {checkLength} from './util.js';

const hashtagPattern = RegExp('^#[а-яА-ЯёЁa-zA-Z0-9]{1-19}$');
const form = document.querySelector('img-upload__form');
const valid = Pristine(form, {
  classTo: 'img-upload__text',
  successClass: 'form--valid',
  errorClass: 'form--invalid',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'form__error',
  errorTextTag: 'span'
});


form.addEventListener('submit', (evt) => {
  if (!valid.validate()) {
    evt.preventDefault();
  }
});


valid.addValidator(form.querySelector('.text__hashtags'),
  (value) => !checkLength(value, 0) && !hashtagPattern.test(value),
  'Формат хэштега: #anySymbols(<=20)');

valid.addValidator(form.querySelector('.text__description'),
  (value) => checkLength(value, 19) || !checkLength(value, 140),
  'Длина описания может быть от 20 до 140 символов'
);
