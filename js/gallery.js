'use strict';

(function () {

  var galleryElement = document.querySelector('.pictures');

  function fillGallery(element) {
    galleryElement.appendChild(element);
  }

  window.gallery = {
    fill: fillGallery
  };
})();
