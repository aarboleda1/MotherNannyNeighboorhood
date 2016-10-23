$( document ).ready(function() {
 
 


    $(function() {
	    $("#map").googleMap();
	    
	    // Marker 1
	    $("#map").addMarker({
	    	 coords: [37.787601, -122.396643]
	    });
	    
	    // Marker 2
	    $("#map").addMarker({
	    	 coords: [37.783697, -122.408966]
	    });
		
	    // Marker 3
	    $("#map").addMarker({
	        coords: [37.772930, -122.437515]
	    });
  })
 	
 	$( function() {
    	$( "#datepicker" ).datepicker({
      		changeMonth: true,
      		changeYear: true
    	});
  	});

});