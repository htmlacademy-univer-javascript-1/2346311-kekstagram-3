import { checkLength, HASHTAG_REGEX, MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH, MIN_HASHTAG_LENGTH, MAX_HASHTAG_LENGTH } from './util.js';
import { closeImgUpload } from './form.js';
import { sendData } from './server.js';

const form = document.querySelector('.img-upload__form');
const description = form.querySelector('.text__description');
const hashtag = form.querySelector('.text__hashtags');

const pristineComment  = new Pristine (form, {
  classTo: 'img-upload__text',
  errorClass: 'form--invalid',
  successClass: 'form--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});


const pristineHashTag  = new Pristine (form, {
  classTo: 'img-upload__text',
  errorClass: 'form--invalid',
  successClass: 'form--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});


function validateComment (value) {
  return !checkLength(value, MIN_COMMENT_LENGTH) && checkLength(value, MAX_COMMENT_LENGTH);
}


function validateHashTag (value) {
  return HASHTAG_REGEX.test(value) && !checkLength(value, MIN_HASHTAG_LENGTH) && checkLength(value, MAX_HASHTAG_LENGTH);
}


pristineComment.addValidator(
  description,
  validateComment,
  'Комментарий должен быть от 20 до 140 символов'
);


pristineHashTag.addValidator(
  hashtag,
  validateHashTag,
  'Формат хэштега: #anySymbols([3..20])'
);


form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristineHashTag.validate() && pristineComment.validate()) {
    evt.target.querySelector('.img-upload__submit').disabled = true;//block
    sendData( () => {
      evt.target.querySelector('.img-upload__submit').disabled = false;
    },
    new FormData(evt.target)
    );
    closeImgUpload();
  }
});


export {description, hashtag};
