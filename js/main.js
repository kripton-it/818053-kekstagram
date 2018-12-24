'use strict';

(function () {

  // var bigPictureElement = document.querySelector('.big-picture');
  var pictures = window.data.generate();
  var activePreviewElement = null;
  var bodyElement = document.querySelector('body');
  var onDocumentEscPress;

  updateGalleryContent();
  // bigPictureElement.classList.remove('hidden');
  // window.bigPicture.create(pictures[0]);


  function updateGalleryContent() {
    var fragment = preparePictures();
    window.gallery.fill(fragment);
  }

  function preparePictures() {
    var fragment = document.createDocumentFragment();
    pictures.forEach(function (picture) {
      var newPictureElement = window.picture.create(picture, function (evt) {
        evt.preventDefault();
        if (activePreviewElement) {
          activePreviewElement.classList.add('hidden');
        }

        // console.dir(bodyElement);
        window.bigPicture.update(picture, hidePreviewCallback);
        document.addEventListener('keyup', onDocumentEscPress);
        bodyElement.classList.add('modal-open');
      });
      if (newPictureElement) {
        fragment.appendChild(newPictureElement);
      }
    });

    return fragment;
  }

  function hidePreviewCallback() {
    document.removeEventListener('keyup', onDocumentEscPress);
    bodyElement.classList.remove('modal-open');
  }

})();
