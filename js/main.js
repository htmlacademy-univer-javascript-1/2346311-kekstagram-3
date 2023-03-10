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

function getArr() {
  const arr = [];
  for (let i = 0; i < 25; i++) {
    arr[i] = {
      id: i+1,
      url: `photos/${i+1}.jpg`,
      description: `Ссылка: ${arr[i].url}, номер: ${arr[i].id}`,
      likes: getRandomInt(15,200),
      comments: getRandomInt(0,200)
    };
  }
  return arr;
}
