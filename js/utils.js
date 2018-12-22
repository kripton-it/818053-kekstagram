'use strict';

(function () {
  function getSequentialArray(elementsNumber) {
    var array = [];
    for (var i = 0; i < elementsNumber; i++) {
      array[i] = i + 1;
    }
    return array;
  }

  function getRandomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  function getRandomElement(array) {
    var randomIndex = getRandomInteger(0, array.length - 1);
    return array[randomIndex];
  }

  function getMixedArray(array) {
    var originalArray = array.slice(0);
    var mixedArray = [];
    for (var i = 0; i < array.length; i++) {
      var randomIndex = getRandomInteger(0, originalArray.length - 1);
      mixedArray[i] = originalArray[randomIndex];
      originalArray.splice(randomIndex, 1);
    }
    return mixedArray;
  }

  window.utils = {
    getRandomInteger: getRandomInteger,
    getMixedArray: getMixedArray,
    getRandomElement: getRandomElement,
    getSequentialArray: getSequentialArray
  };
})();
