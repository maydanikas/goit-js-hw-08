////////////////////IMPORTS//////////////////
import { galleryItems } from './gallery-items.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
////////////////////////////////////////////

console.log(galleryItems);

const refs = {
  galleryEl: document.querySelector('.gallery'),
};
////////////////////markup///////////////////
function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      galleryItem =>
        `
    <li class="gallery__item">
   <a class="gallery__link" href="${galleryItem.original}">
      <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
   </a>
</li>
`
    )
    .join('');
}
////////////////////////////////////////////

////////////////////RENDERING//////////////
refs.galleryEl.insertAdjacentHTML(
  'afterbegin',
  createGalleryMarkup(galleryItems)
);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.7,
});
