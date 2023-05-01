import { checkLength } from './util.js';

const form = document.querySelector('.img-upload__form');
const comment = form.querySelector('.text__description');
const hashtagRegex = new RegExp('\\W(#[\\p{L}]+\\b)');
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
  'Формат хэштега: #anySymbols([3..20])');


comment.addEventListener('change', (evt) => {
  if (!valid.validate()) {
    evt.preventDefault();
  }
});


form.addEventListener('submit', (evt) => {
  if (!valid.validate()) {
    evt.preventDefault();
  }
});
