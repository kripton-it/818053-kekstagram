'use strict';

(function () {

  var bigPictureElement = document.querySelector('.big-picture');
  var commentsElement = bigPictureElement.querySelector('.social__comments');
  var commentElement = commentsElement.querySelector('.social__comment').cloneNode(true);

  bigPictureElement.querySelector('.social__comment-count').classList.add('visually-hidden');
  bigPictureElement.querySelector('.comments-loader').classList.add('visually-hidden');

  function createComment(comment) {
    var newCommentElement = commentElement.cloneNode(true);
    var commentAvatarElement = newCommentElement.querySelector('.social__picture');
    var commentTextElement = newCommentElement.querySelector('.social__text');

    commentAvatarElement.src = comment.avatar;
    commentTextElement.textContent = comment.message;

    return newCommentElement;
  }

  function createComments(comments) {
    var fragment = document.createDocumentFragment();

    comments.forEach(function (comment) {
      fragment.appendChild(createComment(comment));
    });

    commentsElement.innerHTML = '';
    commentsElement.appendChild(fragment);
  }

  function createBigPicture(picture) {
    var imageElement = bigPictureElement.querySelector('.big-picture__img img');
    var likesElement = bigPictureElement.querySelector('.likes-count');
    var commentsCountElement = bigPictureElement.querySelector('.comments-count');
    var descriptionElement = bigPictureElement.querySelector('.social__caption');

    imageElement.src = picture.url;
    likesElement.textContent = picture.likes;
    commentsCountElement.textContent = picture.comments.length;
    descriptionElement.textContent = picture.description;
    createComments(picture.comments);

    return bigPictureElement;
  }

  window.bigPicture = {
    create: createBigPicture
  };
})();
