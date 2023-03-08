function getRandomInt(min, max) {
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  return Math.round(Math.random() * (max-min) + min);
}

function lengthCheck(String, maxLength) {
  return String.length <= maxLength;
}

