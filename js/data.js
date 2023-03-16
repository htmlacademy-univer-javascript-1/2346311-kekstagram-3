import { getRandomInt } from './util.js';
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


export {photos};
