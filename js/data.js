'use strict';

(function () {

  var PICTURES_NUMBER = 25;
  var MIXED_NUMBERS = window.utils.getMixedArray(window.utils.getSequentialArray(PICTURES_NUMBER));
  var MIN_LIKES_NUMBER = 15;
  var MAX_LIKES_NUMBER = 200;
  var MIN_COMMENTS_NUMBER = 0;
  var MAX_COMMENTS_NUMBER = 5;
  var AVATARS_NUMBER = 6;
  var MESSAGES = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  var NAMES = [
    'Афанасий',
    'Бонифаций',
    'Леопольд',
    'Геннадий',
    'Иннокентий',
    'Максимилиан',
    'Эммануил'
  ];

  function generateMessage() {
    var messagesNumber = window.utils.getRandomInteger(1, 2);
    var mixedMessages = window.utils.getMixedArray(MESSAGES);
    var message;
    switch (messagesNumber) {
      case 1:
        message = mixedMessages[0];
        break;
      case 2:
        message = mixedMessages[0] + ' ' + mixedMessages[1];
        break;
      default:
        alert('default');
        break;
    }

    return message;
  }

  function generateComment() {
    var comment = {
      avatar: 'img/avatar-' + window.utils.getRandomInteger(1, AVATARS_NUMBER) + '.svg',
      message: generateMessage(),
      name: window.utils.getRandomElement(NAMES)
    };
    return comment;
  }

  function generateComments(commentsNumber) {
    var comments = [];

    for (var i = 0; i < commentsNumber; i++) {
      comments[i] = generateComment();
    }
    return comments;
  }

  function generatePicture(index) {
    var commentsNumber = window.utils.getRandomInteger(MIN_COMMENTS_NUMBER, MAX_COMMENTS_NUMBER);
    var picture = {
      url: 'photos/' + MIXED_NUMBERS[index] + '.jpg',
      likes: window.utils.getRandomInteger(MIN_LIKES_NUMBER, MAX_LIKES_NUMBER),
      comments: generateComments(commentsNumber)
    };
    return picture;
  }

  function generatePictures() {
    var pictures = [];

    for (var i = 0; i < PICTURES_NUMBER; i++) {
      pictures[i] = generatePicture(i);
    }
    return pictures;
  }

  window.data = {
    generate: generatePictures
};

})();
