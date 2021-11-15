import { galleryItems } from './gallery-items.js';
// Change code below this line


// console.log(createImagesCard(galleryItems));

const imageContainer = document.querySelector('.gallery');
const cardsMarkup = createImagesCard(galleryItems);
imageContainer.insertAdjacentHTML('beforeend', cardsMarkup)

imageContainer.addEventListener('click', onContainerClick)

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

    const largeImg = imageGal.getAttribute('data-source');
    console.log(largeImg)
}



const instance = basicLightbox.create(`
<img srс="" alt="" width="800" height="600"/>`,
  { onShow: (instance) => { window.addEventListener('keydown',onEscClose) }, onClose: (instance) => {window.removeEventListener('keydown',onEscClose)  } });
  
   

const onEscClose = function (event) {

  if (event.code === 'Escape') {
    instance.close()

     }
}
function openImg(event) {
  instance.element().querySelector('img').src = event.target.dataset.source
     instance.show();
}
imageContainer.addEventListener('click', openImg)
// ====================================================


