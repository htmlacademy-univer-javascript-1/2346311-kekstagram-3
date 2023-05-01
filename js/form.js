const imgUpload = document.querySelector('.img-upload__overlay');
const fileInput = document.querySelector('.img-upload__input');
const closeImgUploadButton = document.querySelector('.img-upload__cancel');


function cleanForm() {
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
  document.querySelector('#upload-file').value = '';


  const imgUploadPreview = document.querySelector('.img-upload__preview');
  const scale = document.querySelector('.scale__control--value');
  scale.value = `${100}%`;
  imgUploadPreview.style.setProperty('transform','scale(1.0)');
  const image = imgUploadPreview.querySelector('img');
  image.style.filter = 'none';
  const effectsList = document.querySelector('.effects__list');
  const originalEffect = effectsList.querySelector('#effect-none');
  originalEffect.click();
  const sliderElement = document.querySelector('.effect-level__slider');
  sliderElement.setAttribute('hidden', true);
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
}

fileInput.addEventListener('change', openImgUpload);
closeImgUploadButton.addEventListener('click', closeImgUpload);
