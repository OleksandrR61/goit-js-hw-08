// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

function createGallery(galleryItems) {
    return galleryItems.map(item => {
        return `<a class="gallery__item" href="${item.original}">
                    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                </a>`;
    }).join('');
}

document.querySelector(".gallery").insertAdjacentHTML("beforeend", createGallery(galleryItems));

new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });