'use strict';

(function () {

  var sliderStartValue = 1;
  var slider = document.querySelector('.img-upload__effect-level');
  var sliderPinElement = slider.querySelector('.effect-level__pin');
  var sliderBarElement = slider.querySelector('.effect-level__depth');
  var sliderValueElement = slider.querySelector('.effect-level__value');
  var sliderWidth;
  var startPinPosition;

  updateSlider(sliderStartValue);
  sliderPinElement.addEventListener('mousedown', onSliderPinMousedown);

  function updateSlider(level) {
    var zeroValue = '0';
    var defaultValue = 100 * level + '%';
    sliderPinElement.style.left = level > 0 ? defaultValue : zeroValue;
    sliderBarElement.style.width = level > 0 ? defaultValue : zeroValue;
    sliderValueElement.value = level > 0 ? defaultValue : zeroValue;
  }

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

    if (getSliderLevel() < 0) {
      updateSlider(0);
    } else if (getSliderLevel() > 1) {
      updateSlider(1);
    } else {
      console.log(sliderPinElement.offsetLeft);
      console.log(shift);
      console.log(sliderWidth);
      console.log('********');
      updateSlider((sliderPinElement.offsetLeft + shift) / (sliderWidth - 1));
    }
    /*
        if (sliderPinMouseMoveCallback) {
          sliderPinMouseMoveCallback();
        }*/
  }

  function onSliderPinMouseup(evt) {
    evt.preventDefault();

    document.removeEventListener('mousemove', onSliderPinMousemove);
    document.removeEventListener('mouseup', onSliderPinMouseup);
    /*
        if (sliderPinMouseUpCallback) {
          sliderPinMouseUpCallback();
        }*/
  }

  function getSliderLevel() {
    return parseInt(sliderPinElement.style.left, 10) / 100;
  }

  window.slider = {
    level: getSliderLevel
  };
})();
