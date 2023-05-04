import { setEffect } from './effects.js';
import { isError } from './server.js';

const imgUpload = document.querySelector('.img-upload__overlay');
const fileInput = document.querySelector('.img-upload__input');
const closeImgUploadButton = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');
const img = document.querySelector('.img-upload__preview').querySelector('img');
const uploadFile = document.querySelector('#upload-file');

const description = document.querySelector('.text__description');
const hashtag = document.querySelector('.text__hashtags');


function getSrc() {
  return img.src;
}


function restoreData() {
  img.src = localStorage.getItem('currentImage');
  hashtag.value = localStorage.getItem('hashtagValue');
  description.value = localStorage.getItem('descriptionValue');
  const formData = {
    filter: localStorage.getItem('currentFilter'),
    scale: localStorage.getItem('currentScale'),
  };
  setEffect(formData);
}


function resetForm() {
  hashtag.value = '';
  description.value = '';
  uploadFile.value = '';
  const formData = {
    filter: 'none',
    scale: '100',
  };
  setEffect(formData);
}


function cleanForm() {
  resetForm();
  form.reset();
  submitButton.disabled = false;
}


function closeImgUpload() {
  imgUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', escapeKeyHandler);
  cleanForm();
}


function escapeKeyHandler(ev) {
  if (ev.key === 'Escape') {
    closeImgUpload();
  }
}


function openImgUpload() {
  imgUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', escapeKeyHandler);
  img.src = window.URL.createObjectURL(fileInput.files[0]);
  if (isError) {
    restoreData();
  }
}


fileInput.addEventListener('change', openImgUpload);
closeImgUploadButton.addEventListener('click', closeImgUpload);


function showMessage(isSuccess) {
  const templatePar = isSuccess ? '#success' : '#error';
  const template = document.querySelector(templatePar).content.cloneNode(true);
  const messageClass = isSuccess ? '.success' : '.error';
  const message = template.querySelector(messageClass);
  const button = template.querySelector(isSuccess ? '.success__button' : '.error__button');
  button.addEventListener('click', () => hideMessage(isSuccess));

  document.addEventListener('keydown', (evt) => onEscKeyPress(evt));
  document.addEventListener('click', (evt) => onDocumentClick(evt));
  document.body.append(message);
}


function hideMessage(isSuccess) {
  const message = document.querySelector(isSuccess ? '.success' : '.error');
  message.remove();
  document.removeEventListener('keydown', onEscKeyPress);
  document.removeEventListener('click', onDocumentClick);
}


function onEscKeyPress(evt) {
  if (evt.key === 'Escape') {
    const successMessage = document.querySelector('.success');
    const errorMessage = document.querySelector('.error');
    if (successMessage) {
      hideMessage(true);
    }
    if (errorMessage) {
      hideMessage(false);
    }
  }
}


function onDocumentClick(evt) {
  const successMessage = document.querySelector('.success');
  const errorMessage = document.querySelector('.error');
  const successInner = document.querySelector('.success__inner');
  const errorInner = document.querySelector('.error__inner');
  if (successMessage && successMessage.contains(evt.target) && !successInner.contains(evt.target)) {
    hideMessage(true);
    return;
  }
  if (errorMessage && errorMessage.contains(evt.target) && !errorInner.contains(evt.target)) {
    hideMessage(false);
  }
}


export { closeImgUpload, showMessage, getSrc };
