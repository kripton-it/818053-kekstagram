'use strict';

(function () {

  var effectsList = document.querySelector('.effects__list');
  var previewElement = document.querySelector('.img-upload__preview img');
  var defaultEffect = 'none';
  var slider = document.querySelector('.img-upload__effect-level');

  applyEffect(defaultEffect);

  effectsList.addEventListener('change', function () {
    var activeEffect = effectsList.querySelector('input:checked').value;
    applyEffect(activeEffect);
  });

  function applyEffect(effect) {
    effectsList.querySelector('#effect-' + effect).checked = true;
    previewElement.className = '';
    previewElement.classList.add('effects__preview--' + effect);
    switch (effect) {
      case 'none':
        slider.classList.add('hidden');
        break;
      default:
        slider.classList.remove('hidden');
        break;
    }
  }

  window.effects = {
    apply: applyEffect
  };
})();
