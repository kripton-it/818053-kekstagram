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

  function applyEffect(effect) {
    effectsElement.querySelector('#effect-' + effect).checked = true;
    previewElement.className = '';
    previewElement.classList.add('effects__preview--' + effect);
    switch (effect) {
      case 'none':
        sliderElement.classList.add('hidden');
        break;
      default:
        sliderElement.classList.remove('hidden');
        break;
    }
  }

  window.effects = {
    apply: applyEffect
  };
})();
