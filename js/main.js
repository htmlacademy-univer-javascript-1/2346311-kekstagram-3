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

function getPhotos() {
  const photos = [];
  for (let i = 0; i < 25; i++) {
    const newElem = {
      id: i+1,
      url: `photos/${i+1}.jpg`,
      description: `Ссылка: ${photos[i].url}, номер: ${photos[i].id}`,
      likes: getRandomInt(15,200),
      comments: getRandomInt(0,200)
    };
    photos.push(newElem);
  }
  return photos;
}
