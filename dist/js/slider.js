'use strict';

var $ = require('jquery');

function Slider($container) {

  var m = {},
      s = {};

  function init() {
    var model = $container.find('.js-slider').data();

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

    var activeClass = 'active';

    s.$slides.hide().removeClass(activeClass).eq(activeSlideIndex).show(0, function () {
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
      s.$slides.find('.js-slider-video-play, .js-slider-audio-play').on('click', handleAudioVideoPlay);
    }
  };

  function getSlideCount() {
    return s.$slides.length;
  };

  function showSpecificSlide(slideIndex) {
    stopPlayingAudioVideo();
    setSlidePosition(slideIndex);
    transitionSlides(m.slidePosition);
    handleNewActiveSlide();
    showButtonsAndReviews();
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
      s.$slideRight.removeClass('hidden');
    } else if (activeSlideIndex === getSlideCount() - 1) {
      // last slide
      s.$slideLeft.removeClass('hidden');
      s.$slideRight.addClass('hidden');
    } else {
      s.$slideLeft.removeClass('hidden');
      s.$slideRight.removeClass('hidden');
    }

    activateThumbnail();
    moveThumbnailIntoView();
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

  function moveThumbnailIntoView() {
    var thumbWidth = parseInt(s.$thumbs.eq(0).outerWidth(true)),
        viewableWidth = parseInt($container.find('.thumbs-container').width()),
        containerWidth = parseInt(s.$thumbContainer.width()),
        currentViewMin = Math.abs(parseInt(s.$thumbContainer.css('left'))),
        currentViewMax = currentViewMin + viewableWidth,
        currentThumbLeftPos = thumbWidth * m.slidePosition,
        currentThumbRightPos = currentThumbLeftPos + thumbWidth,
        isInLeftBounds = currentViewMin <= currentThumbLeftPos,
        isInRightBounds = currentViewMax >= currentThumbRightPos;

    var newLeftPosDistance = void 0,
        newLeftPosNegated = void 0,
        newLeftPos = void 0;

    // is all of thumb in view?
    if (isInLeftBounds && isInRightBounds) {
      return;
    }

    newLeftPosDistance = currentThumbLeftPos - viewableWidth / 2;
    newLeftPosNegated = newLeftPosDistance * -1;
    newLeftPos = newLeftPosNegated + "px";

    if (newLeftPosDistance > containerWidth - viewableWidth) {
      newLeftPos = '-' + (containerWidth - viewableWidth) + 'px';
    } else if (newLeftPosDistance < 0) {
      newLeftPos = 0;
    }

    s.$thumbContainer.css('left', newLeftPos);

    handleThumbnailSliderArrows(containerWidth, viewableWidth, newLeftPos);
  };

  function handleThumbnailSliderArrows(containerWidth, viewableWidth, leftPos) {

    var leftMargin = Math.abs(parseInt(leftPos));

    if (containerWidth === viewableWidth) {
      s.$slideThumbLeft.addClass('hidden');
      s.$slideThumbRight.addClass('hidden');
    } else if (leftPos === 0) {
      s.$slideThumbLeft.addClass('hidden');
      s.$slideThumbRight.removeClass('hidden');
    } else if (leftMargin + viewableWidth === containerWidth) {
      s.$slideThumbLeft.removeClass('hidden');
      s.$slideThumbRight.addClass('hidden');
    } else {
      s.$slideThumbLeft.removeClass('hidden');
      s.$slideThumbRight.removeClass('hidden');
    }
  };

  function handleAudioVideoPlay(e) {
    if (e) e.preventDefault();

    var $videoAudioPlay = $(this),
        $parentContainer = $videoAudioPlay.parents('.thumbnail'),
        videoAudioSrc = $videoAudioPlay.data('src'),
        isVideo = $videoAudioPlay.hasClass('js-slider-video-play'),
        playerClass = isVideo ? 'video' : 'audio',
        $iframe = $('<iframe />', {
      'class': 'slide-iframe js-slide-iframe slide-iframe-' + playerClass,
      'src': videoAudioSrc + '&wmode=transparent',
      'frameborder': '0',
      'wmode': 'Opaque',
      'webkitallowfullscreen': ''
    });

    $parentContainer.append($iframe).parents('.js-slide').find('.js-slider-audio-play, .js-slider-video-play').addClass('hidden').parents('.js-slide').find('.work-review').addClass('video-playing');
  };

  function showButtonsAndReviews() {
    s.$slides.find('.js-slider-audio-play, .js-slider-video-play').removeClass('hidden');

    s.$slides.find('.js-work-review').removeClass('video-playing');
  };

  function stopPlayingAudioVideo() {
    s.$slides.find('.js-slide-iframe').remove();
  };

  init();
};

module.exports = Slider;