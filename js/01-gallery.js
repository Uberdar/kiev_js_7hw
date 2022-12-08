import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector("div.gallery");

function markupMake(obj) {
  const markup = obj
    .map(
      (item) =>
        `      <img class="gallery__image" src="${item.preview}" alt="${item.description}">`
    )
    .join();
  return markup;
  //   console.log("markup: ", markup);
}

galleryEl.insertAdjacentHTML("beforeend", markupMake(galleryItems));

galleryEl.addEventListener("click", galleryClickListener);

function galleryClickListener(e) {
  console.log(e.target);
  console.log(e.currentTarget);
}

// console.log(galleryItems);
