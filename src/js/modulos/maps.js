// $.getScript( "https://maps.googleapis.com/maps/api/js?key=AIzaSyCVDo8nGmOoMr8pqcE261By1DdfxZbquhY&libraries=places", function( data, textStatus, jqxhr ) {
//   if(textStatus == "success")
//   {
//   	initMap();
//   }
// });


// function initMap() {
// 	var input = document.getElementById('pac-input');
// 	var strictBounds = document.getElementById('strict-bounds-selector');

// 	var autocomplete = new google.maps.places.Autocomplete(input);

// 	autocomplete.addListener('place_changed', function() {
// 		var place = autocomplete.getPlace();

// 		console.log(place);
		
// 		$('#ass_endereco').html(place.formatted_address);
// 	});
// }