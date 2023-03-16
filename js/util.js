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

export {
  getRandomInt, checkLength
};
