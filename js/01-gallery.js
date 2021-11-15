import { galleryItems } from './gallery-items.js';
// Change code below this line


// console.log(createImagesCard(galleryItems));

const imageContainer = document.querySelector('.gallery');
const cardsMarkup = createImagesCard(galleryItems);
imageContainer.insertAdjacentHTML('beforeend', cardsMarkup)
imageContainer.addEventListener('click', onContainerClick)
let currentIndex = 0;

function createImagesCard(galleryItems) {

    return galleryItems.map(({ preview, original, description },index) => {

        return `
     
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-index="${index}"
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
   
}



const instance = basicLightbox.create(`
<img srс="" alt="" width="800" height="600"/>`,
  { onShow: (instance) => { window.addEventListener('keydown',onEscClose) }, onClose: (instance) => {window.removeEventListener('keydown',onEscClose)  } });
  
   

const onEscClose = function (event) {

  if (event.code === 'Escape') {
    instance.close()

  };
  if (event.code === "ArrowLeft") {
    
    console.log('left')
    currentIndex -= 1;
      if (currentIndex <=0) {
      currentIndex = galleryItems.length - 1;
    }
    instance.element().querySelector('img').src = galleryItems[currentIndex].original;
  }
  if (event.code === "ArrowRight") {
    console.log("Right")
    currentIndex += 1;
    if (currentIndex >= galleryItems.length - 1) {
      currentIndex = 0;
    }
     instance.element().querySelector('img').src = galleryItems[currentIndex].original;
  }
}
function openImg(event) {
currentIndex = Number(event.target.dataset.index);
console.log(currentIndex);

instance.element().querySelector('img').src = event.target.dataset.source
instance.show();
}
imageContainer.addEventListener('click', openImg)
// ====================================================


