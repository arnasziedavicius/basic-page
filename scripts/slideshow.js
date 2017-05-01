var slideshow = {
  init: function() {
    $('.slideshow').on('swipeleft', function(e) {
      e.preventDefault();
      if ($(this).find('.slideshow-slide').length > 1) {
        slideshow.move($(this), 'next');
      }
    });

    $('.slideshow').on('swiperight', function(e) {
      e.preventDefault();
      if ($(this).find('.slideshow-slide').length > 1) {          
        slideshow.move($(this), 'prev');  
      }
    });
  },

  move: function(sshow, sdir) {
    var slides = sshow.find('.slideshow-slide'),
        slide = sshow.find('.slideshow-slide-active'),
        slideNext = '',
        slideSpeed = 300,
        slideEasing = 'ease';

    if (sdir === 'prev') {
      // Select the previous slide
      slide.velocity('stop').velocity({
        left: site.ww
      }, slideSpeed, slideEasing, function () {
        $(this).hide().css({
          left: 0
        });
      });      

      slideNext = slide.prev();

      // If the there's no previous slide, select the last slide
      if (!slideNext.length) {
        slideNext = slides.last();
      }

      slideNext.css({
          left: -site.ww
      }).show().velocity('stop').velocity({
          left: 0
      }, slideSpeed, slideEasing); 
    } else {
      slide.velocity('stop').velocity({
        left: -site.ww
      }, slideSpeed, slideEasing, function () {
        $(this).hide().css({
          left: 0
        });
      });

      // Select the next slide
      slideNext = slide.next();

      // If the there's no next slide, select the first slide
      if (!slideNext.length) {
          slideNext = slides.first();
      }

      slideNext.css({
          left: site.ww
      }).show().velocity('stop').velocity({
          left: 0
      }, slideSpeed, slideEasing);       
    }

    slideNext.addClass('slideshow-slide-active');
    slides.not(slideNext).removeClass('slideshow-slide-active');    
  },
}