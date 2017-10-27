
function Place(lat , lng) {
    this.latitude = lat;
    this.longitude = lng;
}

var listPlaces =  [];

var map = new GMaps({
    el: '#map',
    lat: -12.124836771541993,
    lng: -77.00487971305847,
    click: function (e) {
        var position = e.latLng;
        var latitude = position.lat();
        var longitude = position.lng();
        console.log(latitude,longitude);
        map.addMarker({
            lat : latitude,
            lng : longitude,
            title : 'House',
            infoWindow : {
                content : 'Latitud ' + latitude + '\n' +
                'Longitud '+longitude
            }
        });

        listPlaces.push(new Place(latitude,longitude));

        for (var i = 0 ; i < listPlaces.length ; i++){
            console.log(listPlaces[i]);
        }

        if(listPlaces.length >= 2 ){
            map.drawRoute({
                origin: [listPlaces[0].latitude, listPlaces[0].longitude],
                destination: [listPlaces[1].latitude, listPlaces[1].longitude],
                travelMode: 'driving',
                strokeColor: '#131540',
                strokeOpacity: 0.6,
                strokeWeight: 6
            });
        }
    }
});




// -12.124836771541993 -77.00487971305847 , my house directions