'use strict';

(function () {

  var bigPictureElement = document.querySelector('.big-picture');
  var pictures = window.data.generate();

  updatePictures();
  bigPictureElement.classList.remove('hidden');
  window.bigPicture.create(pictures[0]);


  function updatePictures() {
    var fragment = preparePictures();
    window.container.fill(fragment);
  }

  function preparePictures() {
    var fragment = document.createDocumentFragment();
    pictures.forEach(function (picture) {
      var newPictureElement = window.picture.create(picture);
      if (newPictureElement) {
        fragment.appendChild(newPictureElement);
      }
    });

    return fragment;
  }
})();
