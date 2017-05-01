var $ = jQuery;

var site = {
  mobile: false,
  tablet: false,
  touch: false,

  history: window.History,

  resizeTime: new Date(1, 1, 2000, 12,00,00),
  resizeTimeout: false,
  resizeDelta: 200,    

  init: function() {
    media.lazy();

    site.siteResize();
    site.siteLoad();
    slideshow.init();
  },   

  siteLoad: function() {
    site.siteHistory();

    $('body').on('click', '.ajax-link', function(e) {
      if(history.pushState && e.button == 0) {
        e.preventDefault();

        var _this = $(this);

        var obj = {
          url   : _this.attr('href'),
          title : _this.attr('name'),
          id    : _this.attr('data-id'),
          next  : _this.hasClass('next-project'),
        };

        var actTitle = siteName;

        if(obj.title != 'Home' && obj.title != '') {
          actTitle = siteName + ' \u2014 ' + obj.title;
        }

        var currentUrl = window.location.pathname;// current url

        // Check if history api is supported and is a left click
        if (obj.url != currentUrl) {
          History.pushState(obj, actTitle, obj.url);
        }
      }
    });

    $(document).on("keydown", function(e) {
      if (e.which == 37 && !e.metaKey) {
        // left
        if ($(".slideshow-slide").length > 1) {  
          e.preventDefault();
          slideshow.move($(".slideshow"), "prev");
        }
      } else if (e.which == 39 && !e.metaKey) {
        // right
        if ($(".slideshow-slide").length > 1) {  
          e.preventDefault()
          slideshow.move($(".slideshow"), "next");
        }
      } else if (e.which == 27 && !e.metaKey) {
        // escape
      }
    });    
  },

  siteResize: function() {
    site.ww = $(window).width();
    site.wh = $(window).height();

    site.mobile = (site.ww < 768) ? true : false ;
    site.tablet = (site.ww >= 768 && site.ww < 1024) ? true : false ;
    site.touch = (site.ww < 1024) ? true : false ;

    $('.scale').each( function() {
      var el = $(this);
          elr = el.attr('data-ratio');

      var elw, elh;
      var oW, oh;

      ow = site.ww;
      oh = site.wh;

      if (elr <= ow / oh) {
        elh = oh;
        elw = elh * elr;
      } else {
        elw = ow - wwoff * 2;
        elh = elw / elr;
      }

      el.css({
        width: elw,
        height: elh,
      });
    });

    // function callback
    site.resizeTime = new Date();
    if (site.resizeTimeout === false) {
      site.resizeTimeout = true;
      setTimeout(site.resizeCallback, site.resizeDelta);
    }
  },

  resizeCallback: function() {
    if (new Date() - site.resizeTime < site.resizeDelta) {
      setTimeout(site.resizeCallback, site.resizeDelta);
    } else {
      site.resizeTimeout = false;
    }
  },

  siteHistory: function() {
    if (site.history.enabled) {
      site.history.Adapter.bind(window, 'statechange', function() { 

        var State = site.history.getState();

        if(State.data.url != null) {
          /*
          If google analytics is setup, this can 
          push the ajax call to google analytics

          ga('send', 'pageview', {'page': State.data.slug,'title': State.data.title});
          */
          ajax.getContent(State.data);
        } else {
          ajax.getContent(null);
        }

      });

      var hash = window.location.hash;

      if(hash) {
        site.history.Adapter.trigger(window, 'statechange')
      }
    }
  },
  
}

$(document).ready(site.init);