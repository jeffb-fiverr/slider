'use strict'

import $ from 'jquery';
const Slider = require('../../lib/js/slider');

$(function() {
  const $sliderContainer = $('.js-slider-container');

  new Slider($sliderContainer);

});