import { photos } from "./data";
const pictureTemplate = document.querySelector('#picture').content;

const fragment = new DocumentFragment();

photos.forEach(photo => {
  const template = pictureTemplate.cloneNode(true);
  const img = template.querySelector('.picture__img');
  const likes = template.querySelector('.picture__likes');
  const comments = template.querySelector('.picture__comments');

  img.src = photo.url;
  likes.textContent = photo.likes;
  comments.textContent = photo.comments;

  fragment.appendChild(template);
});

const picktureBlock = document.querySelector('.pictures');
picktureBlock.append(fragment);

export { picktureBlock };
