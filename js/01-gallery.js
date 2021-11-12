import { galleryItems } from './gallery-items.js';
// Change code below this line


// console.log(createImagesCard(galleryItems));

const imageContainer = document.querySelector('.gallery');
const cardsMarkup = createImagesCard(galleryItems);
imageContainer.insertAdjacentHTML('beforeend',cardsMarkup)

imageContainer.addEventListener('click',onContainerClick)

function createImagesCard(galleryItems) {
    
    return galleryItems.map(({ preview, original, description }) => {
       
        return `
     
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
    }).join('');
 
}

function onContainerClick(evt) {
    evt.preventDefault();
    
const isGalleryImage = evt.target.classList.contains('gallery__image')
    if (!isGalleryImage) {
        return;
    }
    const imageGal = evt.target;
    console.log(imageGal);

}