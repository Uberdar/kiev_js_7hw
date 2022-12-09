// import * as basicLightbox from "basicLightbox";
import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryEl = document.querySelector("div.gallery");

function markupMake(obj) {
  const markup = obj
    .map(
      (item) =>
        `<a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
        </a>`
    )
    .join();
  return markup;
  //   console.log("markup: ", markup);
}

galleryEl.insertAdjacentHTML("beforeend", markupMake(galleryItems));

galleryEl.addEventListener("click", galleryClickListener);

function galleryClickListener(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  console.log("target = ", e.target.dataset.source);
  const instance = basicLightbox

    .create(
      `
  <img src="${e.target.dataset.source}" width="1280" height="1024">
  `
    )
    .show();

  console.log("instance: ", instance);
  // console.log("Current_target = ", e.currentTarget);
}
