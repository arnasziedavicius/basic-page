var media = {

  lazy: function() {
    $(".lazy:not(.lazy-loaded)").each( function() {
      var el = $(this),
          el_src = el.attr("data-src"),
          el_media = el.find(".lazy-media");

      // Check if image src exists
      if (el_src) {
        // Check if image is ought to be seen first
        var img = new Image();

        if (el.hasClass("lazy-see")) {
          el.on("inview", function(event, isinview) {
            if (isinview) {
              img.src = el_src;
              img.onload = function()
              {
                el_media.attr("src", el_src);           
                el.removeAttr("data-src").addClass("lazy-loaded");                         
              }
            }
          });
        } else {
          img.src = el_src;
          img.onload = function()
          {
            el_media.attr("src", el_src); 
            el.removeAttr("data-src").addClass("lazy-loaded");                         
          }
        }
      }
    });

  }
}