import { setEffect } from './effects.js';


const imgUpload = document.querySelector('.img-upload__overlay');
const fileInput = document.querySelector('.img-upload__input');
const closeImgUploadButton = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');


function resetForm() {
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
  document.querySelector('#upload-file').value = '';
  const formData = {
    hashtags: '',
    description: '',
    file: '',
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
  const img = document.querySelector('.img-upload__preview').querySelector('img');
  img.src = window.URL.createObjectURL(fileInput.files[0]);
}


fileInput.addEventListener('change', openImgUpload);
closeImgUploadButton.addEventListener('click', closeImgUpload);


export {closeImgUpload};
