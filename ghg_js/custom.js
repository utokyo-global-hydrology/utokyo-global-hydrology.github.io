
(function( $ ) {

  'use strict';

  /*
  Column setting of Member list
  */
  $('.memberlist-item').addClass('col-xs-12 col-sm-6 col-md-4');// 3 column
  //$('.memberlist-item').addClass('col-xs-12 col-sm-6 col-md-3');// 4 column

  /*
  SVG Morphing
  */
  if( $('#shape_one_start').get(0) ) {
    var shape1 = KUTE.fromTo('#shape_one_start', {
      path: '#shape_one_start'
    }, {
      path: '#shape_one_end'
    }, {
      duration: 10000,
      easing	: 'easingQuadraticInOut',
      repeat: 20,
      repeatDelay: 1000,
      yoyo: true
    }).start();
  }

  if( $('#shape_two_start').get(0) ) {
    var shape2 = KUTE.fromTo('#shape_two_start', {
      path: '#shape_two_start'
    }, {
      path: '#shape_two_end'
    }, {
      duration: 10000,
      easing	: 'easingQuadraticInOut',
      repeat: 20,
      repeatDelay: 1000,
      yoyo: true
    }).start();
  }

}).apply( this, [ jQuery ]);



