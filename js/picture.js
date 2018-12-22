'use strict';

(function () {

  var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

  function createPicture(picture) {
    var pictureElement = pictureTemplate.cloneNode(true);
    var imageElement = pictureElement.querySelector('.picture__img');
    var likesElement = pictureElement.querySelector('.picture__likes');
    var commentsElement = pictureElement.querySelector('.picture__comments');

    imageElement.src = picture.url;
    likesElement.textContent = picture.likes;
    commentsElement.textContent = picture.comments.length;

    return pictureElement;
  }

  window.picture = {
    create: createPicture
  };
})();
