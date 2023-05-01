const scale = document.querySelector('.scale__control--value');

const buttonUp = document.querySelector('.scale__control--bigger');
const buttonDown = document.querySelector('.scale__control--smaller');

const imgUploadPreview = document.querySelector('.img-upload__preview');

const filterLabels = document.querySelectorAll('.effects__label');

const sliderElement = document.querySelector('.effect-level__slider');
const sliderElementValue = document.querySelector('.effect-level__value');


let currentEffect = 'original';
const filters = {
  'chrome': {
    min: 0,
    max: 1,
    name: 'grayscale',
    step: 0.1,
    measure: ''
  },
  'sepia' : {
    min: 0,
    max: 1,
    name: 'sepia',
    step: 0.1,
    measure: ''
  },
  'marvin': {
    min: 0,
    max: 100,
    name: 'invert',
    step: 1,
    measure: '%'
  },
  'phobos': {
    min: 0,
    max: 3,
    name: 'blur',
    step: 0.1,
    measure: 'px'
  },
  'heat': {
    min: 1,
    max: 3,
    name: 'brightness',
    step: 0.1,
    measure: ''
  },

  'none': {
    min: 0,
    max: 1,
    name: 'original',
    step: 0,
    measure: ''
  }
};


noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower'
});


sliderElement.setAttribute('hidden', true);


function addEffect(effect, update) {
  const image = imgUploadPreview.querySelector('img');

  const filter = filters[effect];

  const { min, max, step, measure, name } = filter;

  if (effect === 'none') {
    image.style.filter = 'none';
    sliderElement.setAttribute('hidden', true);
    image.className = '';
  } else {
    if (!update) {
      image.style.setProperty('filter', `${name}(${min}${measure})`);

      sliderElement.noUiSlider.updateOptions({
        range: { min, max },
        start: min,
        step
      });

      sliderElement.removeAttribute('hidden');
      image.className = '';
      image.classList.add(`effects__preview--${effect}`);
      currentEffect = effect;
    } else {
      const sliderValue = sliderElement.noUiSlider.get();
      image.style.filter = `${name}(${sliderValue}${measure})`;
    }
  }
}


sliderElement.noUiSlider.on('slide', () => {
  sliderElementValue.value = sliderElement.noUiSlider.get();
  addEffect(currentEffect, true);
});


filterLabels.forEach((label) => {
  const effect = label.getAttribute('for').slice(7);
  label.addEventListener('click', () => {
    addEffect(effect);
  });
});

filterLabels.forEach( (element) => {
  element.addEventListener('click', () => {
    addEffect(element.value);
  });
});


const changeImageScale = (plus = true, image) => {
  let value = parseInt(scale.value, 10) + (plus ? 25 : -25);

  if (value < 25) {
    value = 25;
  }
  if (value > 100) {
    value = 100;
  }

  scale.value = `${value}%`;

  image.style.transform = `scale(${value / 100})`;
};


buttonDown.addEventListener('click', () => {
  changeImageScale(false, imgUploadPreview);
});

buttonUp.addEventListener('click', () => {
  changeImageScale(true, imgUploadPreview);
});
export {changeImageScale, addEffect, imgUploadPreview};
