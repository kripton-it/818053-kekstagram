'use strict';

(function () {

  var slider = document.querySelector('.img-upload__effect-level');
  var sliderPinElement = slider.querySelector('.effect-level__pin');
  var sliderBarElement = slider.querySelector('.effect-level__depth');
  var sliderValueElement = slider.querySelector('.effect-level__value');
  var sliderWidth;
  var startPinPosition;
  var sliderPinPosition;
  var sliderPinMouseMoveCallback;
  // var sliderPinMouseUpCallback;

  sliderPinElement.addEventListener('mousedown', onSliderPinMousedown);

  function onSliderPinMousedown(evt) {
    evt.preventDefault();
    sliderWidth = sliderPinElement.parentNode.offsetWidth;
    startPinPosition = evt.clientX;

    document.addEventListener('mousemove', onSliderPinMousemove);
    document.addEventListener('mouseup', onSliderPinMouseup);
  }

  function onSliderPinMousemove(evt) {
    evt.preventDefault();

    var shift = evt.clientX - startPinPosition;

    startPinPosition = evt.clientX;

    if (sliderPinElement.offsetLeft + shift < 0) {
      sliderPinPosition = 0;
    } else if (sliderPinElement.offsetLeft + shift > sliderWidth) {
      sliderPinPosition = sliderWidth;
    } else {
      sliderPinPosition = sliderPinElement.offsetLeft + shift;
    }

    updateSlider(Math.round(sliderPinPosition));

    if (sliderPinMouseMoveCallback) {
      sliderPinMouseMoveCallback();
    }
  }

  function onSliderPinMouseup(evt) {
    evt.preventDefault();

    document.removeEventListener('mousemove', onSliderPinMousemove);
    document.removeEventListener('mouseup', onSliderPinMouseup);
  /*
    if (sliderPinMouseUpCallback) {
      sliderPinMouseUpCallback();
    }
    */
  }

  function updateSlider(position) {
    sliderWidth = sliderPinElement.parentNode.offsetWidth;
    sliderPinElement.style.left = position + 'px';
    sliderBarElement.style.width = position + 'px';
    sliderValueElement.value = Math.round(position / sliderWidth);
  }

  function getSliderLevel() {
    sliderWidth = sliderPinElement.parentNode.offsetWidth;
    return slider.classList.contains('hidden') ? 1 : parseInt(sliderPinElement.style.left, 10) / sliderWidth;
  }

  function setSliderLevel(level) {
    sliderWidth = sliderPinElement.parentNode.offsetWidth;
    updateSlider(level * sliderWidth);
  }

  function resetSlider() {
    sliderWidth = sliderPinElement.parentNode.offsetWidth;
    updateSlider(sliderWidth);
  }

  function setSliderPinMouseMoveCallback(callback) {
    sliderPinMouseMoveCallback = callback;
  }
  /*
  function setSliderPinMouseUpCallback(callback) {
    sliderPinMouseUpCallback = callback;
  }
*/

  window.slider = {
    getLevel: getSliderLevel,
    setLevel: setSliderLevel,
    reset: resetSlider,
    // setPinMouseUpCallback: setSliderPinMouseUpCallback,
    setPinMouseMoveCallback: setSliderPinMouseMoveCallback
  };
})();
