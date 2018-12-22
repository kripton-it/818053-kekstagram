'use strict';

(function () {

  var containerElement = document.querySelector('.pictures');
/*
  function showPictures(pictures) {
    var fragment = document.createDocumentFragment();
    pictures.forEach(function (picture) {
      fragment.appendChild(window.picture.create(picture));
    });
    containerElement.appendChild(fragment);
  }
*/
  function fillContainer(element) {
    containerElement.appendChild(element);
  }

  window.container = {
    fill: fillContainer
  };
})();
