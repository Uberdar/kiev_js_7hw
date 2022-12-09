import { galleryItems } from "./gallery-items.js";

// Change code below this line
let testX = false;
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
}

galleryEl.insertAdjacentHTML("beforeend", markupMake(galleryItems));

galleryEl.addEventListener("click", galleryClickListener);

function createModal(e) {
  // console.log("e: ", e.target.dataset.source);
  const instance = basicLightbox
    .create(
      `
<img src="${e.target.dataset.source}" width="1280" height="1024">
`
    )
    .show((instance) => {
      function keyDownListener(e) {
        // console.log(e.code);
        if (e.code !== "Escape") {
          return;
        }
        instance.close(() =>
          document.removeEventListener("keydown", keyDownListener)
        );
      }
      document.addEventListener("keydown", keyDownListener);
    });
}

// // Close when hitting escape.
// document.onkeydown = function (evt) {
//   evt = evt || window.event;
//   var isEscape = false;
//   if ("key" in evt) {
//     isEscape = evt.key === "Escape" || evt.key === "Esc";
//   } else {
//     isEscape = evt.keyCode === 27;
//   }
//   if (isEscape) {
//     instance.close();
//     console.log("pushing esc");
//   }
// };
// document.addEventListener("keydown", keyDownListener)

function galleryClickListener(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  // console.log("target = ", e.target.dataset.source);
  createModal(e);
}
