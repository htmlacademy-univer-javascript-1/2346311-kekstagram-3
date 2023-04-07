import { closeImgUpload } from './form.js';
import { checkLength } from './util.js';

const hashtagRegex = /\W(#[а-яa-z]+\b)/gmi;
const form = document.querySelector('img-upload__form');
const isHashtagValid = (value) => checkLength(value, 20) && !checkLength(value, 2) && !hashtagRegex.test(value);


const valid = new Pristine(form, {
  classTo: 'img-upload__text',
  successClass: 'img-upload__text--valid',
  errorClass: 'img-upload__text--invalid',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'form__error',
  errorTextTag: 'span'
});


valid.addValidator(
  form.querySelector('.text__hashtags'),
  isHashtagValid,
  'Формат хэштега: #anySymbols(<=20)');


form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (!valid.validate()) {
    closeImgUpload();
  }
});
