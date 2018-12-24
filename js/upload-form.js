'use strict';

(function () {

  var uploadFormElement = document.querySelector('.img-upload__form');
  var uploadFileElement = uploadFormElement.querySelector('#upload-file');
  var overlayElement = uploadFormElement.querySelector('.img-upload__overlay');

  // временно
  showOverlay();

  uploadFileElement.addEventListener('change', function (evt) {
    evt.preventDefault();
    showOverlay();
  });

  function showOverlay() {
    var cancelElement = overlayElement.querySelector('.img-upload__cancel');
    overlayElement.classList.remove('hidden');
    document.addEventListener('keyup', onOverlayEscPress);
    cancelElement.addEventListener('click', onCancelElementClick);
  }

  function hideOverlay() {
    var cancelElement = overlayElement.querySelector('.img-upload__cancel');
    overlayElement.classList.add('hidden');
    uploadFileElement.value = null;
    document.removeEventListener('keyup', onOverlayEscPress);
    cancelElement.removeEventListener('click', onCancelElementClick);
  }

  function onOverlayEscPress(evt) {
    if (evt.keyCode === window.utils.ESC_KEYCODE) {
      hideOverlay();
    }
  }

  function onCancelElementClick() {
    hideOverlay();
  }

  window.uploadForm = {
    // create: createPicture
  };
})();
