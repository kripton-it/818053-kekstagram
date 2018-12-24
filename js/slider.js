'use strict';

(function () {

  var sliderStartValue = 1;
  var slider = document.querySelector('.img-upload__effect-level');
  var sliderPinElement = slider.querySelector('.effect-level__pin');
  var sliderBarElement = slider.querySelector('.effect-level__depth');
  var sliderValueElement = slider.querySelector('.effect-level__value');

  updateSlider(sliderStartValue);
  sliderPinElement.addEventListener('mouseup', onSliderPinMouseup);

  function updateSlider(level) {
    sliderPinElement.style.left = 100 * level + '%';
    sliderBarElement.style.width = 100 * level + '%';
    sliderValueElement.value = 100 * level + '%';
  }

  function onSliderPinMouseup() {
    updateSlider(getEffectDepth());
  }

  function getEffectDepth() {
    return parseInt(sliderPinElement.style.left, 10) / 100;
  }

  window.slider = {

  };
})();
