$(document).ready(function(){

    var $mainContent = $("#main-content"),
        protocol = 'http://',
        url = '',
        i = 0;

        if (location.protocol == 'https:'){
          protocol = 'https://';
        }

    var siteUrl = protocol + top.location.host.toString();

    var current_title = $(document).filter('title').text();
    var current_url = location.pathname;
    history.replaceState({ title: current_title, url: current_url, id:i }, current_title, current_url);
    console.log(history);
  /*
   * ajax load
   */
  function ajax_load(url) {
    console.log('loading ');

    $.ajax({
            url: url,
            type: 'get',
            dataType: 'html',
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.responseText);
                alert(thrownError);
            },
            xhr: function () {
                var xhr = new window.XMLHttpRequest();
                //Download progress
                xhr.addEventListener("progress", function (evt) {
                  console.log(evt.lengthComputable);
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        console.log(Math.round(percentComplete * 100) + "%");
                    }
                }, false);
                return xhr;
            },
            beforeSend: function () {
                console.log('start load');
            },
            complete: function () {
                console.log('end load');
            },
            success: function(data){
              var dom = $(data);
              var title = dom.filter('title').text();
              var html = dom.find('.main-section');

              // replace title
              $('title').text(title);

              // replace history
              history.replaceState({title:title, url:url, id:i}, title, url);

              // page transition
              $mainContent.find('.main-section').fadeOut(400, function(){
                $mainContent.append(html).fadeIn(200);
              });
            },
            error: function(xhr, ajaxOptions, thrownError) {
              console.log(xhr);
            }
    });
  }

  /*
   * popstate
   */
  $(window).on('popstate', function(){
    console.log('popstate');
    ajax_load(location.pathname);
  });

  /*
   * bind link click
   */
  $(document).on('click', 'a', function(e) {
    console.log('click');
    e.preventDefault();
    var url = $(this)[0].href;
    i++;
    history.pushState(null, null, url);
    ajax_load(url);
  });
});
