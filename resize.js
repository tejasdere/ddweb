$(function() {
  $(".resize-handle").mousedown(function(event) {
    var graphWrapper = $(this).parent();
    var datadogGraph = graphWrapper.find(".datadog-graph");
    var startWidth = datadogGraph.width();
    var startHeight = datadogGraph.height();
    var startX = event.clientX;
    var startY = event.clientY;

    $(document).mousemove(function(event) {
      var deltaX = event.clientX - startX;
      var deltaY = event.clientY - startY;
      datadogGraph.width(startWidth + deltaX);
      datadogGraph.height(startHeight + deltaY);
    }).mouseup(function() {
      $(document).unbind("mousemove");
    });
  });
});
