import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const cardItem = createListElement(galleryItems);
galleryList.insertAdjacentHTML('beforeend', cardItem);

function createListElement(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img 
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            data-source="${original}"
            />
        </a>
    </li>`;
}).join(' ');
};

 new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});