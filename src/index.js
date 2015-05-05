var $ = require('jquery');
require('./leaflet.usermarker.js');



$(function(){

document.addEventListener('copy', function(e) {
    e.clipboardData.setData('text/plain', JSON.stringify(geojson));
    e.preventDefault();
});
	$('.js-get-json').click(function(){
		window.alert();
	});
	var southWest = L.latLng(-16.5467, 23.8898),
		northEast = L.latLng(-12.5653, 29.4708),
		bounds = L.latLngBounds(southWest, northEast);

	var map = L.map('map',{
		maxBounds: bounds,
	}).setView([-13.4484, 28.072], 10);

	var geojson = {
		type: 'LineString',
		coordinates: [ ]
	};
	
	L.tileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png', {
	//L.tileLayer('img/MapQuest/{z}/{x}/{y}.jpg', {
		id: 'examples.map-i875mjb7'
	}).addTo(map);



	var popup = L.popup();

	function onMapClick(coords) {
		console.dir(coords);
		geojson.coordinates.push([
			coords.latlng.lng,
			coords.latlng.lat, 
			0,
			0,
			// new Date(),
			// window.prompt('enter some free form data: '),
			]);
		// popup
		// 	.setLatLng(coords.latlng)
		// 	.setContent("You clicked the map at " + Math.round(coords.latlng.lat * 10000)/10000 + ", " + Math.round(coords.latlng.lng*10000)/10000)
		// 	.openOn(map);
	}


	map.on('click', onMapClick);

	// example current position
	var latLng = L.latLng(-15.7473, 27.2598);
	var marker = L.userMarker(latLng, {pulsing:true, accuracy:250, smallIcon:true});
	marker.addTo(map);

});
