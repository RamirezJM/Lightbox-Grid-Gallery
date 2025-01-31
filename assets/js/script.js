
/*se crea un div que ocupa la pantalla y que opaca todo, 
excepto la imagen seleccionada */

const lightbox = document.createElement('div')
lightbox.id = "lightbox"
document.body.appendChild(lightbox)

/*se accede a las imágenes y al hacer click en una de
ella se le agrega la clase active */

const images = document.getElementsByClassName('gallery-image')
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', () => {
    lightbox.classList.add('active')

    /*se crea el elemento <img> donde irá la imagen seleccionada y
    se ubicará en el centro de la pantalla. Solo se selecciona un
    elemento, removiendo el resto */

    const lightboxImage = document.createElement('img')
    lightboxImage.src = images[i].src

    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(lightboxImage)

    /* Se crea un botón para cerrar la galería*/

    const closeButton = document.createElement('span')
    closeButton.classList.add('close-button')
    closeButton.addEventListener('click', () => {
      lightbox.classList.remove('active')
    })
    lightbox.appendChild(closeButton)

    /*Se agregan flechas izquierda y derecha para pasar a la
    imagen anterior y posterior, respectivamente */

    const leftArrow = document.createElement('span')
    leftArrow.classList.add('left-arrow')
    leftArrow.addEventListener('click', prevImage)
    lightbox.appendChild(leftArrow)

    const rightArrow = document.createElement('span')
    rightArrow.classList.add('right-arrow')
    rightArrow.addEventListener('click', nextImage)
    lightbox.appendChild(rightArrow)

    /*Se crea un array con las imágenes, se crea un contador
    para la posición de la imagen actual y se crean las funciones
    para recorrer las imágenes */

    const imagesGallery = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg', 'images/image6.jpg', 'images/image7.jpg', 'images/image8.jpg', 'images/image9.jpg']
    let currentImage = 0

    const nextImage = () => {
      currentImage++
      if(currentImage > imagesGallery.length - 1){
        currentImage = 0  
      }
      lightboxImage.src = imagesGallery[currentImage]
    }

    const prevImage = () => {
      currentImage--
      if(currentImage < 0){
        currentImage = imagesGallery.length - 1
      }
      lightbox.src = imagesGallery[currentImage]
    }

  })
}

