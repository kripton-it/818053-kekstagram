'use strict';

(function () {

  var effectsElement = document.querySelector('.effects__list');
  var previewContainerElement = document.querySelector('.img-upload__preview');
  var previewElement = previewContainerElement.querySelector('.img-upload__preview img');
  var defaultEffect = 'none';
  var sliderElement = document.querySelector('.img-upload__effect-level');
  var scaleControlElement = document.querySelector('.img-upload__scale');
  var scaleControlSmallerElement = scaleControlElement.querySelector('.scale__control--smaller');
  var scaleControlBiggerElement = scaleControlElement.querySelector('.scale__control--bigger');
  var scaleControlValueElement = scaleControlElement.querySelector('.scale__control--value');
  var defaultScale = '100%';
  var filterValue;

  window.slider.setLevel(1);
  applyEffect(defaultEffect);
  scaleControlValueElement.value = defaultScale;
  updateScale();

  scaleControlSmallerElement.addEventListener('click', function () {
    updateScale('small');
  });

  scaleControlBiggerElement.addEventListener('click', function () {
    updateScale('big');
  });

  effectsElement.addEventListener('change', function () {
    var activeEffect = effectsElement.querySelector('input:checked').value;
    applyEffect(activeEffect);
    window.slider.reset();
  });

  function updatePreviewScale() {
    var scale = parseInt(scaleControlValueElement.value, 10) / 100;
    previewContainerElement.style.transform = 'scale(' + scale + ')';
  }

  function updateScale(direction) {

    switch (direction) {
      case 'small':
        scaleControlValueElement.value = (parseInt(scaleControlValueElement.value, 10) - 25) + '%';
        break;
      case 'big':
        scaleControlValueElement.value = (parseInt(scaleControlValueElement.value, 10) + 25) + '%';
        break;
    }

    var scaleValue = scaleControlValueElement.value;
    scaleControlSmallerElement.disabled = scaleValue === '25%';
    scaleControlBiggerElement.disabled = scaleValue === '100%';
    updatePreviewScale();
  }

  function changeEffect(effect) {
    var level = window.slider.getLevel();
    filterValue = 'none';
    switch (effect) {
      case 'chrome':
        filterValue = 'grayscale(' + (Math.round(100 * level) / 100) + ')';
        break;
      case 'sepia':
        filterValue = 'sepia(' + (Math.round(100 * level) / 100) + ')';
        break;
      case 'marvin':
        filterValue = 'invert(' + Math.round(100 * level) + '%)';
        break;
      case 'phobos':
        filterValue = 'blur(' + (3 * Math.round(100 * level) / 100) + 'px)';
        break;
      case 'heat':
        filterValue = 'brightness(' + (1 + 2 * Math.round(100 * level) / 100) + ')';
        break;
    }
    previewElement.style.filter = filterValue;
  }

  function sliderPinMouseMoveCallback(effect) {
    if (effect !== 'none') {
      changeEffect(effect);
    }
  }

  function applyEffect(effect) {
    effectsElement.querySelector('#effect-' + effect).checked = true;
    previewElement.className = '';
    previewElement.classList.add('effects__preview--' + effect);
    sliderPinMouseMoveCallback(effect);
    switch (effect) {
      case 'none':
        sliderElement.classList.add('hidden');
        filterValue = 'none';
        break;
      case 'chrome':
        sliderElement.classList.remove('hidden');
        filterValue = 'grayscale(1)';
        break;
      case 'sepia':
        sliderElement.classList.remove('hidden');
        filterValue = 'sepia(1)';
        break;
      case 'marvin':
        sliderElement.classList.remove('hidden');
        filterValue = 'invert(100%)';
        break;
      case 'phobos':
        sliderElement.classList.remove('hidden');
        filterValue = 'blur(3px)';
        break;
      case 'heat':
        sliderElement.classList.remove('hidden');
        filterValue = 'brightness(3)';
        break;
    }
    previewElement.style.filter = filterValue;
    window.slider.setLevel(1);
    window.slider.setPinMouseMoveCallback(function () {
      sliderPinMouseMoveCallback(effect);
    });
  }

  window.effects = {
    apply: applyEffect
  };
})();
