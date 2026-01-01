(() => {
  const style = document.createElement('style')
  style.appendChild(document.createTextNode(`
  .image-modal {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #000000aa;
    display: flex;
    justify-content: center;
    z-index: 1000;
    padding: 12px;
    cursor: zoom-out;
  }
  
  .zoomed-img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
  `))
  document.head.appendChild(style)
})()


function createImageModal(src) {
  const modal = document.createElement('div')
  modal.classList.add('image-modal')
  const zoomImg = document.createElement('img')
  zoomImg.src = src
  zoomImg.classList.add('zoomed-img')
  modal.appendChild(zoomImg)
  return modal
}

const attachmentImages = document.querySelectorAll('.d-attachment-image')
attachmentImages.forEach((img) => {
  img.style.cursor = 'zoom-in'
  img.addEventListener('click', () => {
    const imageModal = createImageModal(img.src)
    imageModal.addEventListener('click', () => { document.body.removeChild(imageModal) })
    document.body.appendChild(imageModal)
    console.log(img)
  })
})