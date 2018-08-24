GoogleMapsLoader.KEY = 'AIzaSyDP13T048ji9u8_di9Gdpmh6bkBhPoC3bs';
GoogleMapsLoader.LANGUAGE = 'ua';

if(document.getElementById('map')) {
  GoogleMapsLoader.load(function(google) {
  	
  	var myLatLng = {lat: 34.216503, lng: -119.067377};
      var map = new google.maps.Map(document.getElementById('map'), {
        	center: myLatLng,
  	    scrollwheel:false,
  	    zoom: 17
      });
      var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'МОЛОТОК'
      });
  });
};