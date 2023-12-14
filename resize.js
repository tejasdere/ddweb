$(function() {
  $(window).on('resize', function() {
    var containerWidth = $('.container').width();
    var graphWrapperWidth = containerWidth * 0.8;
    if (containerWidth < 768) {
      graphWrapperWidth = containerWidth * 0.6;
    }
    $('.graph-wrapper').width(graphWrapperWidth);
  }).resize();
});
