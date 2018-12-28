'use strict';

(function () {

  var SCALE_STEP = 25;
  var ScaleLimit = {
    min: '25%',
    max: '100%'
  };
  var filtersMap = {
    chrome: {
      name: 'grayscale',
      min: 0,
      max: 1,
      dimension: ''
    },
    sepia: {
      name: 'sepia',
      min: 0,
      max: 1,
      dimension: ''
    },
    marvin: {
      name: 'invert',
      min: 0,
      max: 100,
      dimension: '%'
    },
    phobos: {
      name: 'blur',
      min: 0,
      max: 3,
      dimension: 'px'
    },
    heat: {
      name: 'brightness',
      min: 1,
      max: 3,
      dimension: ''
    }
  };

  var effectsElement = document.querySelector('.effects__list');
  var previewContainerElement = document.querySelector('.img-upload__preview');
  var previewElement = previewContainerElement.querySelector('.img-upload__preview img');
  var sliderElement = document.querySelector('.img-upload__effect-level');
  var scaleControlElement = document.querySelector('.img-upload__scale');
  var scaleControlSmallerElement = scaleControlElement.querySelector('.scale__control--smaller');
  var scaleControlBiggerElement = scaleControlElement.querySelector('.scale__control--bigger');
  var scaleControlValueElement = scaleControlElement.querySelector('.scale__control--value');
  var defaultEffect = 'none';
  var defaultScale = '100%';

  // window.slider.setLevel(1);
  applyEffect(defaultEffect);
  scaleControlValueElement.value = defaultScale;
  // updateScale();

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
        scaleControlValueElement.value = (parseInt(scaleControlValueElement.value, 10) - SCALE_STEP) + '%';
        break;
      case 'big':
        scaleControlValueElement.value = (parseInt(scaleControlValueElement.value, 10) + SCALE_STEP) + '%';
        break;
    }

    var scaleValue = scaleControlValueElement.value;
    scaleControlSmallerElement.disabled = scaleValue === ScaleLimit.min;
    scaleControlBiggerElement.disabled = scaleValue === ScaleLimit.max;
    updatePreviewScale();
  }

  function changeEffect(effect) {
    var level = window.slider.getLevel();
    previewElement.style.filter = calcFilterValue(effect, level);
  }

  function sliderPinMouseMoveCallback(effect) {
    if (effect !== 'none') {
      changeEffect(effect);
    }
  }

  function calcFilterValue(effect, level) {
    var filterValue;

    if (effect === 'none') {
      filterValue = 'none';
    } else {
      var roundedlevel = Math.round(100 * level) / 100;
      var effectValue = filtersMap[effect].min + roundedlevel * (filtersMap[effect].max - filtersMap[effect].min);
      filterValue = filtersMap[effect].name + '(' + effectValue + filtersMap[effect].dimension + ')';
    }

    return filterValue;
  }

  function applyEffect(effect) {
    var filterValue = calcFilterValue(effect, 1);
    effectsElement.querySelector('#effect-' + effect).checked = true;
    previewElement.className = '';
    previewElement.classList.add('effects__preview--' + effect);
    sliderPinMouseMoveCallback(effect);

    if (effect === 'none') {
      sliderElement.classList.add('hidden');
    } else {
      sliderElement.classList.remove('hidden');
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
