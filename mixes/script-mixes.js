(function createSet() {

  let SOUNDCLOUD_URL = 'https://soundcloud.com/404crew/404-selects-podcast-series-14-ryan-moon', 
      WIDGET_OPTIONS = '&color=3C9FCE&liking=false';
  
  jQuery
  //API call
  .getJSON( 'http://soundcloud.com/oembed.json?url=' + SOUNDCLOUD_URL + WIDGET_OPTIONS )
  .done( function ( data ) {
    let widget;
    // data.html will contain widget HTML 
    $('body').html( data.html );

    // Create API enabled reference to the widget by passing DOM Obj
    widget = SC.Widget($('body').find('iframe')[0]); 
  });
}());