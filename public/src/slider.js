'use strict'

import $ from 'jquery';
const Slider = require('../../dist/js/slider');

$(function() {
  const $sliderContainer = $('.js-slider-container');

  new Slider($sliderContainer);

});