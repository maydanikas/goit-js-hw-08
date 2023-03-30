import { galleryItems } from './gallery-items.js';

// console.log(galleryItems);
// console.log(refs.galleryEl);
// console.log(createGalleryMarkup(galleryItems));

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
  <a class="gallery__link" href="${galleryItem.original}"
      alt="${galleryItem.description}"">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
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
/////////////////////LISTENING/////////////
refs.galleryEl.addEventListener('click', onUserClick);

///////////////MODAL OPEN//////////////////
function onUserClick(evt) {
  evt.preventDefault();
  //   console.log(evt.target.dataset.source);
  // console.log(evt.currentTarget);
  // console.dir(evt.target);

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  return basicLightbox
    .create(
      `
  		<img width="1400" height="900" src="${evt.target.dataset.source}">
  	`
    )
    .show();
}
//////////////////////////////////////////
