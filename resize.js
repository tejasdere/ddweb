$(function() {
  $(".resize-handle").mousedown(function(event) {
    var iframeWrapper = $(this).parent();
    var iframe = iframeWrapper.find("iframe");
    var startWidth = iframe.width();
    var startHeight = iframe.height();
    var startX = event.clientX;
    var startY = event.clientY;

    $(document).mousemove(function(event) {
      var deltaX = event.clientX - startX;
      var deltaY = event.clientY - startY;
      iframe.width(startWidth + deltaX);
      iframe.height(startHeight + deltaY);
    }).mouseup(function() {
      $(document).unbind("mousemove");
    });
  });
});

