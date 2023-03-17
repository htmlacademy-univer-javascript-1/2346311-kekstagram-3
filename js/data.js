import { getRandomInt } from './util.js';
const photos = [];


for (let i = 0; i < 25; i++) {
  const id = i + 1;
  const url = `photos/${i+1}.jpg`;
  const newElem = {
    id,
    url,
    description: `Ссылка: ${url}, номер: ${id}`,
    likes: getRandomInt(15,200),
    comments: getRandomInt(0,200)
  };
  photos.push(newElem);
}


export {photos};
