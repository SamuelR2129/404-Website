(function () {
  
    var SOUNDCLOUD_URL = 'http://soundcloud.com/georgconrad/shostakovich2', 
        // You can also specify widget options in your request
        WIDGET_OPTIONS = '&color=3C9FCE&liking=false';
    
    jQuery
      .getJSON( 'http://soundcloud.com/oembed.json?url=' + SOUNDCLOUD_URL + WIDGET_OPTIONS )
      .done( function ( data ) {
        var widget;
        // data.html will contain widget HTML that you can embed
        $('body').html( data.html );
        // For the following code to work, you need to have Widget HTML5 API 
        // available by the time this code is invoked. The code to put API file
        // in your page is:
        // <script src="//w.soundcloud.com/player/api.js"></script>
        //
        // Create API enabled reference to the widget (note that we are passing DOM object)
        widget = SC.Widget($('body').find('iframe')[0]);
        // Interact with widget via API
        widget.bind('ready', function () {
          alert('widget ready');
        });
      });
      
    }());