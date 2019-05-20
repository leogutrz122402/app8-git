//JavaScript 

$(document).ready(function(e) {
    document.addEventListener("deviceready",onDeviceReady, false);
	
});

function onDeviceReady(){
	
	$('#posicion').on('click',function(){
		getPosition();
	});
}

function getPosition(){
	var options={
		enableHighAccaracy :true,
		maximunAge:3600000
	}
	
	var watchID=Navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
	
	function onSuccess(position){
		alert('Latitude:'  +pósition.coords.latitude  +'\n'+
		'Longitude:'  +position.coords.longitude  +'\n');
	}
	function onError(error){
		alert('code:'  +error.code  +'\n' +'message:'+error.message+'\n');
	}
}
		
