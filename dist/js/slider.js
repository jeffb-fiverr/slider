'use strict';

var $ = require('jquery');

function Slider($container) {

  var m = {},
      s = {};

  function init() {
    var model = $container.data();

    m.firstSlidePosition = m.slidePosition = 0;
    m.slideIterator = 1;
    m.thumbMovementDistance = 350;
    m.isMobile = model.isMobile;

    s.$slides = $container.find('.js-slide');
    s.$slideLeft = $container.find('.js-slide-left');
    s.$slideRight = $container.find('.js-slide-right');
    s.$thumbContainer = $container.find('.js-thumbs');
    s.$thumbs = s.$thumbContainer.find('.js-thumb');
    s.$slideThumbLeft = $container.find('.js-slide-thumbs-left');
    s.$slideThumbRight = $container.find('.js-slide-thumbs-right');

    setupThumbnailCarousel();
    showSliderArrows();
    transitionSlides();
    bindEventListeners();
  };

  function transitionSlides() {
    var activeSlideIndex = arguments.length <= 0 || arguments[0] === undefined ? m.firstSlidePosition : arguments[0];

    var activeClass = 'active',
        $slides = s.$slides;

    $slides.hide().removeClass(activeClass).eq(activeSlideIndex).show(0, function () {
      $(this).addClass(activeClass);
    });
  };

  function setSlidePosition(newPos) {
    m.slidePosition = newPos;
    return m.slidePosition;
  };

  function showSliderArrows() {
    if (getSlideCount() < 2) {
      return;
    }

    s.$slideRight.removeClass('hidden');
    s.$slideThumbRight.removeClass('hidden');
  };

  function setupThumbnailCarousel() {
    if (m.isMobile) {
      return;
    }

    var thumbCount = s.$thumbs.length,
        thumbWidth = s.$thumbs.eq(0).outerWidth(true);

    s.$thumbContainer.width(thumbWidth * thumbCount + "px");
    s.$thumbs.eq(m.slidePosition).addClass('active');
  };

  function bindEventListeners() {
    if (m.isMobile) {
      console.info('YOU ON MOBILE, BABY! $container:', $container);
    } else {
      s.$slideRight.on('click', slideRight);
      s.$slideLeft.on('click', slideLeft);
      s.$slideThumbRight.on('click', slideThumbCarouselRight);
      s.$slideThumbLeft.on('click', slideThumbCarouselLeft);
      s.$thumbs.on('click', slideThumbClicked);
    }
  };

  function getSlideCount() {
    return s.$slides.length;
  };

  function showSpecificSlide(slideIndex) {
    setSlidePosition(slideIndex);
    transitionSlides(m.slidePosition);
    handleNewActiveSlide();
  };

  function slideThumbClicked(e) {
    if (e) e.preventDefault();

    var $clickedSlide = $(this),
        slideIndex = $clickedSlide.index();

    showSpecificSlide(slideIndex);
  };

  function slideRight(e) {
    if (e) e.preventDefault();

    showSpecificSlide(m.slidePosition + 1);
  };

  function slideThumbCarouselRight(e) {
    if (e) e.preventDefault();

    var containerPos = Math.abs(parseInt(s.$thumbContainer.css('left'))),
        totalContainerWidth = parseInt(s.$thumbContainer.width()),
        viewableWidth = parseInt($container.find('.thumbs-container').width()),
        leftMostPos = totalContainerWidth - viewableWidth;

    if (containerPos + m.thumbMovementDistance > leftMostPos) {
      s.$thumbContainer.css('left', '-' + leftMostPos + 'px');
      s.$slideThumbRight.addClass('hidden');
    } else {
      s.$thumbContainer.css('left', '-=' + m.thumbMovementDistance + 'px');
      s.$slideThumbLeft.removeClass('hidden');
    }
  };

  function slideLeft(e) {
    if (e) e.preventDefault();

    showSpecificSlide(m.slidePosition - 1);
  };

  function handleNewActiveSlide() {
    var activeSlideIndex = arguments.length <= 0 || arguments[0] === undefined ? m.slidePosition : arguments[0];


    if (getSlideCount() < 2) {
      return;
    }

    if (activeSlideIndex === 0) {
      // first slide
      s.$slideLeft.addClass('hidden');
    } else if (activeSlideIndex === getSlideCount() - 1) {
      // last slide
      s.$slideRight.addClass('hidden');
    } else {
      s.$slideLeft.removeClass('hidden');
      s.$slideRight.removeClass('hidden');
    }

    activateThumbnail();
  };

  function slideThumbCarouselLeft(e) {
    if (e) e.preventDefault();

    var containerPos = Math.abs(parseInt(s.$thumbContainer.css('left')));

    if (containerPos <= m.thumbMovementDistance) {
      s.$thumbContainer.css('left', '0');
      s.$slideThumbLeft.addClass('hidden');
    } else {
      s.$thumbContainer.css('left', '+=' + m.thumbMovementDistance + 'px');
      s.$slideThumbRight.removeClass('hidden');
    }
  };

  function activateThumbnail() {
    s.$thumbs.removeClass('active').eq(m.slidePosition).addClass('active');
  };

  init();
};

module.exports = Slider;