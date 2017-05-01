var ajax = {
  getContent: function(data) {
    $pageData = '';

    $.ajax({
      async: true,
      cache: false,        
      url: data.url,
      data: { 
        ajax: true
      },
      type: 'POST',
      dataType: 'json',
      success: function(response, status) {
        $content = response.content;
      },
      error: function(x, status, error) {
        console.log('An error occurred: ' + status + 'nError: ' + error);
      }
    }).done(function() {
      $('.include').empty().append($content).ready(function () {
        media.lazy();
        slideshow.init();
      });          
    });
  },
}
