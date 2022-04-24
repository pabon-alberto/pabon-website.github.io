$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });

$(function(){
    $('body').fadeIn(1000);
    setTimeout(function(){
        $('body').fadeOut(1000, function(){
            location.reload(true);
        });
    }, 60000);
});
  