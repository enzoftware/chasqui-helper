
path = [];
var counter = 1;

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

        path.push([latitude,longitude]);



        if(path.length >= 2 ){
            map.drawRoute({
                origin : path[counter-1] ,
                destination : path[counter],
                strokeColor: '#131540',
                strokeOpacity: 0.6,
                strokeWeight: 6
            });

        }

        counter = counter + 1;

    }
});




// -12.124836771541993 -77.00487971305847 , my house directions