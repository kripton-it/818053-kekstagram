'use strict';

(function () {

  updatePictures(window.data.generate());

  function updatePictures(pictures) {
    var fragment = preparePictures(pictures);
    window.container.fill(fragment);
  }

  function preparePictures(pictures) {
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
