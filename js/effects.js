const scale = document.querySelector('.scale__control--value');
const imagePreview =  document.querySelector('.img-upload__preview > img');
const effectsRadio = document.querySelectorAll('.effects__radio');
const effectLevelValue = document.querySelector('.effect-level__value');
//const slider = document.querySelector('.effect-level__slider');


const buttonUp = document.querySelector('.scale__control--bigger');
const buttonDown = document.querySelector('.scale__control--smaller');


const labels = document.getElementsByTagName('label');
for (let i = 0; i < labels.length; i++) {
  if (labels[i].htmlFor !== '') {
    const elem = document.getElementById(labels[i].htmlFor);
    if (elem) {
      elem.label = labels[i];
    }
  }
}

effectLevelValue.addEventListener('input', (evt) => {
  evt.preventDefault();
  const style = getComputedStyle(imagePreview);
  const filter = style.filter.startsWith;
  switch (filter) {
    case 'invert': {
      effectLevelValue.max = 100;
      effectLevelValue.step = 5;
      imagePreview.style.filter = `invert(${effectLevelValue.value}%)`;
      break;
    }

    case 'sepia': {
      effectLevelValue.max = 1;
      effectLevelValue.step = 0.05;
      imagePreview.style.filter = `sepia(${effectLevelValue.value})`;
      break;
    }

    case 'blur': {
      effectLevelValue.max = 3;
      effectLevelValue.step = 0.15;
      imagePreview.style.filter = `blur(${effectLevelValue.value}px)`;
      break;
    }

    case 'brightness': {
      effectLevelValue.max = 3;
      effectLevelValue.step = 0.15;
      imagePreview.style.filter = `brightness(${effectLevelValue.value})`;
      break;
    }

    case 'grayscale': {
      effectLevelValue.max = 1;
      effectLevelValue.step = 0.05;
      imagePreview.style.filter = `grayscale(${effectLevelValue.value})`;
      break;
    }
  }
});

const addEffect = (input) => {
  imagePreview.classList.forEach((val, key, list) => list.remove(val));
  const span = input.label.querySelector('.effects__preview');
  imagePreview.classList.add(span.classList.item(1));
};


effectsRadio.forEach((checkbox) => {
  checkbox.addEventListener('change', (evt) => {
    imagePreview.style.filter = '';
    evt.preventDefault();
    if(evt.target.checked){
      addEffect(evt.target);
      effectLevelValue.value = effectLevelValue.max;
    }
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
  changeImageScale(false, imagePreview);
});

buttonUp.addEventListener('click', () => {
  changeImageScale(true, imagePreview);
});

/*noUiSlider.create(slider, {
  start: 0.5,
  step: 0.1,
  range: {
    'min': 0,
    'max': 1
  },
}
);

slider.noUiSlider.on('update', () => {
  const value = slider.noUiSlider.get();
  addEffect(imagePreview, value);
  effectLevelValue.value = value;
});
*/

export {addEffect};
