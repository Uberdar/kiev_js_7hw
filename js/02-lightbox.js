import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector("ul.gallery");

const markupMake = galleryItems
  .map(({ preview, original, description }) => {
    //   console.log(preview, original, description);
    const stringMarkup = `<a class="gallery__item" href="${original}">
  
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
    return stringMarkup;
  })
  .join();
// console.log("markupMake: ", markupMake);

galleryEl.insertAdjacentHTML("beforeend", markupMake);

var lightbox = new SimpleLightbox(".gallery a", {
  /* options */

  //   caption: true,
  //   captionType: alt,
  //   captionsData: alt,
  //   captionPosition: bottom,
  showCounter: true,
  captionsData: "alt",
  captionDelay: 250,
});

// console.log(galleryItems);
